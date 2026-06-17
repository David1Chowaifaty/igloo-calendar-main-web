// HelpDocButton.tsx
import { h } from "@stencil/core";
export const HelpDocButton = ({ message, href, class: wrapperClass }) => (h("div", { class: wrapperClass }, h("wa-tooltip", { for: "help-button" }, message), h("wa-button", { id: "help-button", href: href, size: "s", target: "_blank", "aria-label": message, appearance: "plain", variant: "neutral" }, h("wa-icon", { name: "circle-info", style: { fontSize: '1rem' } }))));
