import { r as registerInstance, c as createEvent, h, H as Host } from './index-BxxIyJIp.js';
import { E as ExtraServiceSection } from './types-DuVpNPN2.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import './index-DeW5X45W.js';
import './enums-DjSFmz1B.js';

const irExtraServiceEditorDrawerCss = () => `.ir__drawer-footer.sc-ir-extra-service-editor-drawer{display:flex;justify-content:flex-end;gap:0.5rem}`;

const IrExtraServiceEditorDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.extraServiceEditorClose = createEvent(this, "extraServiceEditorClose");
    }
    open = false;
    service;
    loading = false;
    extraServiceEditorClose;
    baseId = `extra-service-form__id-${v4()}`;
    handleDrawerClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.extraServiceEditorClose.emit();
    }
    render() {
        const isAddon = this.service?.section === ExtraServiceSection.BookingEngineAddon;
        const isNewAddon = isAddon && this.service?.id === -1;
        return (h(Host, { key: 'ffec2f0f9884db61c955167c2c53b2d72c21074a', "data-testid": "extra-service-editor-drawer" }, h("ir-drawer", { key: '7b1796c4fdb0c6cdaaedde1f9a5af37085a67a57', class: "extra-service__drawer", style: { '--ir-drawer-width': '32rem' }, label: isNewAddon ? 'New Add-On' : `Edit ${this.service?.name ?? 'Extra Service'}`, open: this.open, "data-testid": "extra-service-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (h("ir-extra-service-editor-form", { key: 'ae2ef29ff1e46d6ead9822f5751fa654cf50b4cb', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.extraServiceEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, service: this.service, formId: this.baseId, "data-testid": "extra-service-editor-form" })), h("div", { key: 'd7483299ecbabaeda9d9f85bc4cb6883f134cb25', slot: "footer", class: "ir__drawer-footer", "data-testid": "extra-service-editor-drawer-footer" }, h("ir-custom-button", { key: 'c868130b80e0a31b34f6b86a8b6aace7d220a1b7', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "extra-service-editor-cancel-button" }, "Cancel"), h("ir-custom-button", { key: '47a19a039bad58bee42acde6a70de63c0fc66cbd', loading: this.loading, type: "submit", form: this.baseId, size: "m", appearance: "accent", variant: "brand", "data-testid": "extra-service-editor-save-button" }, "Save")))));
    }
};
IrExtraServiceEditorDrawer.style = irExtraServiceEditorDrawerCss();

export { IrExtraServiceEditorDrawer as ir_extra_service_editor_drawer };
