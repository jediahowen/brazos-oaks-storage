export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return;

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  
  if (!gtmId) {
    console.log('[Analytics]', name, params);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: name,
    ...params,
  });
}

export function trackCTAClick(ctaName, page = '') {
  trackEvent('cta_click', {
    cta_name: ctaName,
    page: page || (typeof window !== 'undefined' ? window.location.pathname : ''),
  });
}

export function trackRentEmbedLoaded() {
  trackEvent('rent_embed_loaded', {
    page: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

export function trackContactSubmit() {
  trackEvent('contact_submit', {
    page: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

