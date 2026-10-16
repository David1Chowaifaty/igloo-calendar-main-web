import { r as registerInstance, c as createEvent, h, H as Host } from './index-CwWmK1sZ.js';
import { E as ExtraServiceSection } from './types-BH_FHDsm.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import './enums-CSCQSgBu.js';
import './types-Cvnhk41g.js';

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
        return (h(Host, { key: '63f64ef2870f6cf5241052e8cc059cf7792a6840', "data-testid": "extra-service-editor-drawer" }, h("ir-drawer", { key: '5ce14b3be9801e3bdd7a5760fb2816a72c917e5c', class: "extra-service__drawer", style: { '--ir-drawer-width': '32rem' }, label: isNewAddon ? 'New Add-On' : `Edit ${this.service?.name ?? 'Extra Service'}`, open: this.open, "data-testid": "extra-service-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (h("ir-extra-service-editor-form", { key: '60e9a52e83e34dc7f7051073d93fb01e65294703', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.extraServiceEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, service: this.service, formId: this.baseId, "data-testid": "extra-service-editor-form" })), h("div", { key: 'f1908a910eb1748b5102113b37be288a3f38c373', slot: "footer", class: "ir__drawer-footer", "data-testid": "extra-service-editor-drawer-footer" }, h("ir-custom-button", { key: '061784c24b31a0932482d4613c611522b818b558', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "extra-service-editor-cancel-button" }, "Cancel"), h("ir-custom-button", { key: '5b936f4d331ae11ec60752350fc1bc3f315a12d5', loading: this.loading, type: "submit", form: this.baseId, size: "m", appearance: "accent", variant: "brand", "data-testid": "extra-service-editor-save-button" }, "Save")))));
    }
};
IrExtraServiceEditorDrawer.style = irExtraServiceEditorDrawerCss();

export { IrExtraServiceEditorDrawer as ir_extra_service_editor_drawer };
