import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { H as HouseKeepingService } from './housekeeping.service.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-dialog2.js';

const iglHkIssuesDialogCss = ".sc-igl-hk-issues-dialog-h{display:block;text-align:start}.detail-body.sc-igl-hk-issues-dialog{display:flex;flex-direction:column;gap:0.75rem}.meta-row.sc-igl-hk-issues-dialog{display:flex;align-items:center;flex-wrap:wrap;gap:0.5rem;background:var(--wa-color-neutral-surface);border:1px solid var(--wa-color-neutral-stroke-loud);border-radius:6px}.meta-item.sc-igl-hk-issues-dialog{display:inline-flex;align-items:center;gap:0.3rem;font-size:0.9rem;color:var(--wa-color-neutral-on-quiet)}.meta-item.sc-igl-hk-issues-dialog wa-icon.sc-igl-hk-issues-dialog{font-size:0.85rem;color:var(--wa-color-neutral-fill-loud);flex-shrink:0}.meta-label.sc-igl-hk-issues-dialog{color:var(--wa-color-neutral-fill-loud);font-weight:500}.meta-value.sc-igl-hk-issues-dialog{font-weight:600}.meta-divider.sc-igl-hk-issues-dialog{width:1px;height:14px;background:var(--wa-color-neutral-stroke-loud);flex-shrink:0}.description-block.sc-igl-hk-issues-dialog{padding:0.625rem 0.75rem;background:color-mix(in srgb, var(--wa-color-warning-fill-loud) 8%, transparent);border-inline-start:3px solid var(--wa-color-warning-fill-loud);border-radius:4px}.description-label.sc-igl-hk-issues-dialog{display:flex;align-items:center;gap:0.3rem;margin:0 0 0.25rem;font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.03em;color:var(--wa-color-neutral-fill-loud)}.description-label.sc-igl-hk-issues-dialog wa-icon.sc-igl-hk-issues-dialog{font-size:0.78rem}.description-text.sc-igl-hk-issues-dialog{margin:0;font-size:0.93rem;line-height:1.5;color:var(--wa-color-neutral-on-quiet);white-space:pre-wrap}.error-banner.sc-igl-hk-issues-dialog{display:flex;align-items:center;gap:0.5rem;background:color-mix(in srgb, var(--wa-color-danger-fill-loud) 8%, transparent);border:1px solid color-mix(in srgb, var(--wa-color-danger-fill-loud) 25%, transparent);border-radius:6px;padding:0.5rem 0.75rem;font-size:0.85rem;color:var(--wa-color-danger-fill-loud)}.dialog-footer.sc-igl-hk-issues-dialog{display:flex;justify-content:flex-end;align-items:center;gap:0.5rem}";
const IglHkIssuesDialogStyle0 = iglHkIssuesDialogCss;

const IglHkIssuesDialog = /*@__PURE__*/ proxyCustomElement(class IglHkIssuesDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.irAfterClose = createEvent(this, "irAfterClose", 7);
    }
    open = false;
    unitId;
    unitName;
    propertyId;
    issue;
    irAfterClose;
    error = null;
    isResolving = false;
    dialogRef;
    houseKeepingService = new HouseKeepingService();
    async handleOpenChange(isOpen) {
        if (isOpen) {
            this.error = null;
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    handleResolve = async () => {
        if (!this.issue || this.isResolving)
            return;
        this.isResolving = true;
        this.error = null;
        try {
            await this.houseKeepingService.resolveHKIssue({ issue_id: this.issue.id });
            this.dialogRef?.closeModal();
        }
        catch (e) {
            this.error = e instanceof Error ? e.message : 'Failed to resolve issue. Please try again.';
        }
        finally {
            this.isResolving = false;
        }
    };
    renderContent() {
        if (!this.issue || !this.open)
            return null;
        return (h("div", { class: "detail-body" }, h("div", { class: "meta-row" }, h("span", { class: "meta-item" }, h("wa-icon", { name: "door-open" }), h("span", { class: "meta-value" }, this.issue.unit.name)), h("span", { class: "meta-divider" }), h("span", { class: "meta-item" }, h("wa-icon", { name: "user" }), h("span", { class: "meta-value" }, this.issue.housekeeper_name)), h("span", { class: "meta-divider" }), h("span", { class: "meta-item" }, h("wa-icon", { name: "calendar-days" }), h("span", { class: "meta-value" }, hooks(this.issue.date).format('MMM D, YYYY')))), h("wa-callout", { variant: "warning", size: "small" }, h("strong", null, "Reported Issue"), h("p", { class: "description-text" }, this.issue.description || 'No description provided.')), this.error && (h("div", { class: "error-banner", role: "alert" }, h("wa-icon", { name: "circle-exclamation" }), this.error))));
    }
    render() {
        return (h("ir-dialog", { key: '84cad1ba34cc6a918fd51bcedfcbca772721e9f4', ref: el => (this.dialogRef = el), label: `Issue #${this.issue?.id}`, onIrDialogAfterHide: () => this.irAfterClose.emit() }, this.renderContent(), h("div", { key: '8dc5c714519e3257af5dc114962b9daf01f78aa1', slot: "footer", class: "dialog-footer" }, h("ir-custom-button", { key: '01313028be4070155cfde7ef2a8d48fe0e51abd7', variant: "neutral", size: "medium", appearance: "filled", onClickHandler: () => this.dialogRef?.closeModal(), disabled: this.isResolving }, "Close"), h("ir-custom-button", { key: 'f350253218172eee7ce9268857602c3de25b8c8d', variant: "brand", size: "medium", appearance: "accent", onClickHandler: this.handleResolve, disabled: this.isResolving || !this.issue, loading: this.isResolving }, "Mark as Resolved"))));
    }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
    static get style() { return IglHkIssuesDialogStyle0; }
}, [2, "igl-hk-issues-dialog", {
        "open": [4],
        "unitId": [2, "unit-id"],
        "unitName": [1, "unit-name"],
        "propertyId": [2, "property-id"],
        "issue": [16],
        "error": [32],
        "isResolving": [32]
    }, undefined, {
        "open": ["handleOpenChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-hk-issues-dialog", "ir-custom-button", "ir-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-hk-issues-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglHkIssuesDialog);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglHkIssuesDialog as I, defineCustomElement as d };

//# sourceMappingURL=igl-hk-issues-dialog2.js.map