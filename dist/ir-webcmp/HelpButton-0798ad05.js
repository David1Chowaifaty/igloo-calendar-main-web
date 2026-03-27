import { h } from './index-7b3961ed.js';

// HelpDocButton.tsx
const HelpDocButton = ({ message, href, class: wrapperClass }) => (h("div", { class: wrapperClass },
    h("wa-tooltip", { for: "help-button" }, message),
    h("wa-button", { id: "help-button", href: href, size: "small", target: "_blank", "aria-label": message, appearance: "plain", variant: "neutral" },
        h("wa-icon", { name: "circle-info", style: { fontSize: '1rem' } }))));

export { HelpDocButton as H };

//# sourceMappingURL=HelpButton-0798ad05.js.map