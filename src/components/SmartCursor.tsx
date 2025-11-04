import { useEffect } from "react";

// SmartCursor enhances hover interactions globally by tagging interactive elements
// and applying CSS-driven animations without altering individual components.
export default function SmartCursor() {
  useEffect(() => {
    const selectors = [
      'button',
      'a[href]',
      '[role="button"]',
      'input',
      'select',
      'textarea',
      '.card',
      '.lovable-card',
      '.hover-lift',
      '.hover-glow',
      '.lovable-card-hover'
    ].join(',');

    const addInteractiveClass = (el: Element) => {
      el.classList.add('sc-interactive');
    };

    const scan = () => {
      document.querySelectorAll(selectors).forEach(addInteractiveClass);
    };

    // Initial scan
    scan();

    // Observe DOM changes (new components mounted)
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'childList') {
          m.addedNodes.forEach((node) => {
            if (!(node instanceof HTMLElement)) return;
            if (node.matches(selectors)) addInteractiveClass(node);
            node.querySelectorAll?.(selectors).forEach(addInteractiveClass);
          });
        } else if (m.type === 'attributes') {
          const t = m.target as HTMLElement;
          if (t.matches(selectors)) addInteractiveClass(t);
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'role']
    });

    // Pointer effects: subtle scale and glow via CSS variables
    const onPointerMove = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty('--sc-x', `${x}px`);
      document.documentElement.style.setProperty('--sc-y', `${y}px`);
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return null;
}


