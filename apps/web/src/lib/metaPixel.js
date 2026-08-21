// Meta Pixel helpers.
//
// Every conversion event we fire in the browser gets an event_id, and that same
// id is sent to Make in the webhook payload. If a Conversions API (server-side)
// event is later sent for the same submission with the same event_name +
// event_id, Meta collapses the pair into one conversion instead of counting it
// twice. Browser events get blocked (ad blockers, Safari ITP), so the server
// copy is what recovers those - the shared id is what keeps it from
// double-counting the ones that did get through.
//
// fbp/fbc are the Meta click/browser cookies. The Conversions API needs them to
// match a server event back to the ad click, so they ride along in the payload.

export function newEventId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'e-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
}

function readCookie(name) {
  if (typeof document === 'undefined') return '';
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : '';
}

export function getFbp() {
  return readCookie('_fbp');
}

// Meta sets _fbc itself when someone lands with ?fbclid=..., but only after
// fbevents.js has loaded. If the cookie is not there yet, rebuild it from the
// fbclid in the URL using Meta's documented format: fb.1.<timestamp>.<fbclid>
export function getFbc() {
  const cookie = readCookie('_fbc');
  if (cookie) return cookie;
  if (typeof window === 'undefined') return '';
  const fbclid = new URLSearchParams(window.location.search).get('fbclid');
  return fbclid ? 'fb.1.' + Date.now() + '.' + fbclid : '';
}

// Fire a pixel event. No-ops when the pixel has not loaded (blocked, offline)
// so a tracking failure can never break a form submission.
export function trackPixel(eventName, params = {}, eventId) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;
  if (eventId) {
    window.fbq('track', eventName, params, { eventID: eventId });
  } else {
    window.fbq('track', eventName, params);
  }
}
