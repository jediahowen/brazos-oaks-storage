declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

const GTM_ID = import.meta.env.VITE_GTM_ID;

export function initGTM(): void {
  if (!GTM_ID) return;

  window.dataLayer = window.dataLayer || [];

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;

  const firstScript = document.getElementsByTagName("script")[0];
  firstScript?.parentNode?.insertBefore(script, firstScript);

  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });
}

export function trackEvent(
  name: string,
  params?: Record<string, unknown>
): void {
  if (!GTM_ID) {
    console.log("[Analytics]", name, params);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: name,
    ...params,
  });
}

export function trackCTAClick(ctaName: string): void {
  trackEvent("cta_click", { cta_name: ctaName });
}

export function trackRentEmbedLoaded(): void {
  trackEvent("rent_embed_loaded");
}

export function trackContactSubmit(): void {
  trackEvent("contact_submit");
}
