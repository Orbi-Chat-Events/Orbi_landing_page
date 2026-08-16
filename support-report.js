(() => {
  const form = document.querySelector("[data-support-report]");
  if (!form) return;

  const endpoint =
    document.querySelector('meta[name="orbi-problem-report-endpoint"]')?.content
      ?.trim() || "";
  const siteKey =
    document.querySelector('meta[name="orbi-turnstile-site-key"]')?.content
      ?.trim() || "";
  const status = form.querySelector("[data-support-report-status]");
  const submit = form.querySelector('button[type="submit"]');
  const turnstileContainer = form.querySelector("[data-turnstile-container]");
  const disclosure = form.closest("[data-support-report-disclosure]");
  let captchaToken = "";
  let turnstileWidgetId = null;
  let turnstileStarted = false;

  const setStatus = (message, state = "") => {
    status.textContent = message;
    status.dataset.state = state;
  };

  const installationId = () => {
    const key = "orbiSupportInstallationId";
    try {
      const existing = window.localStorage.getItem(key);
      if (existing) return existing;
      const created = window.crypto.randomUUID();
      window.localStorage.setItem(key, created);
      return created;
    } catch (_) {
      return window.crypto.randomUUID();
    }
  };

  const post = async (body) => {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    let result = {};
    try {
      result = await response.json();
    } catch (_) {
      throw new Error("Support returned an invalid response.");
    }
    if (!response.ok || result.ok !== true) {
      throw new Error(result.message || "The report could not be sent.");
    }
    return result;
  };

  const loadTurnstile = () => {
    if (turnstileStarted) return;
    turnstileStarted = true;
    if (!siteKey || !turnstileContainer) {
      submit.disabled = true;
      setStatus(
        "The secure form is not configured yet. Please email hello@orbichat.io.",
        "error",
      );
      return;
    }
    window.onOrbiTurnstileReady = () => {
      turnstileWidgetId = window.turnstile.render(turnstileContainer, {
        sitekey: siteKey,
        size: turnstileContainer.clientWidth < 300 ? "compact" : "flexible",
        callback: (token) => {
          captchaToken = token;
          submit.disabled = false;
          setStatus("");
        },
        "expired-callback": () => {
          captchaToken = "";
          submit.disabled = true;
        },
        "error-callback": () => {
          captchaToken = "";
          submit.disabled = true;
          setStatus("The security check could not load. Please try again.", "error");
        },
      });
    };
    submit.disabled = true;
    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onOrbiTurnstileReady&render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (form.website.value || !form.reportValidity()) return;
    if (!endpoint || !captchaToken) {
      setStatus("Complete the security check before sending.", "error");
      return;
    }

    submit.disabled = true;
    setStatus("Sending your report…", "busy");
    const deviceId = installationId();
    try {
      const intent = await post({
        action: "create",
        idempotencyKey: window.crypto.randomUUID(),
        reportKind: "support",
        issue: form.issue.value,
        description: form.description.value.trim(),
        contextType: "app",
        installationId: deviceId,
        platform: "web",
        appVersion: "landing-page",
        captchaToken,
      });
      await post({
        action: "finalize",
        intentId: intent.intentId,
        uploadToken: intent.uploadToken,
        installationId: deviceId,
        platform: "web",
        appVersion: "landing-page",
      });
      form.reset();
      captchaToken = "";
      if (turnstileWidgetId !== null) window.turnstile.reset(turnstileWidgetId);
      setStatus("Thank you. Your report was sent privately to Orbi support.", "success");
    } catch (error) {
      setStatus(error.message || "The report could not be sent. Please try again.", "error");
      if (turnstileWidgetId !== null) window.turnstile.reset(turnstileWidgetId);
      captchaToken = "";
    }
  });

  if (!disclosure || disclosure.open) {
    loadTurnstile();
  } else {
    disclosure.addEventListener("toggle", () => {
      if (disclosure.open) loadTurnstile();
    });
  }
})();
