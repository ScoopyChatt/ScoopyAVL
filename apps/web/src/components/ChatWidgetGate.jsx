import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Pages listed here must never render the GHL chat widget alongside a
// phone-collecting form, or A2P 10DLC compliance review will flag it
// as a multiple-opt-in violation. This runs on every route change,
// including client-side SPA navigation (not just hard page loads).
// A MutationObserver is used in addition to an immediate check because
// the third-party widget loader script can inject its div a moment
// after route change, which a one-time check would miss.
const HIDDEN_ROUTES = ['/quote'];

let storedNode = null;
let storedParent = null;
let storedNextSibling = null;

function stashWidget(widget) {
  if (!widget || storedNode === widget) return;
  storedNode = widget;
  storedParent = widget.parentNode;
  storedNextSibling = widget.nextSibling;
  widget.remove();
}

function restoreWidget() {
  if (storedNode && storedParent && !storedParent.contains(storedNode)) {
    storedParent.insertBefore(storedNode, storedNextSibling);
  }
  storedNode = null;
  storedParent = null;
  storedNextSibling = null;
}

export default function ChatWidgetGate() {
  const location = useLocation();

  useEffect(() => {
    const shouldHide = HIDDEN_ROUTES.includes(location.pathname);

    if (!shouldHide) {
      restoreWidget();
      return undefined;
    }

    const existing = document.querySelector('[data-widget-id]');
    if (existing) stashWidget(existing);

    const observer = new MutationObserver(() => {
      const widget = document.querySelector('[data-widget-id]');
      if (widget) stashWidget(widget);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}
