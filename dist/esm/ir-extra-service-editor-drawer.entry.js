import { r as registerInstance, c as createEvent, h, H as Host } from './index-CeHdrJeH.js';
import { E as ExtraServiceSection } from './types-CscmOSTz.js';
import { t } from './t-BVYK64UG.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import './enums-CcLtXwvz.js';
import './types-Clk7NCXk.js';
import './locale-scope-CapRuPkM.js';

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
        return (h(Host, { key: '4e3fc557eb4b5947825742c61532f4cee21b58c8', "data-testid": "extra-service-editor-drawer" }, h("ir-drawer", { key: '7f6b44ad22a5792c5633ff86542b7f89c1f2d6d3', class: "extra-service__drawer", style: { '--ir-drawer-width': '32rem' }, label: isNewAddon
                ? t('Lcz_NewAddOn', { fallback: 'New Add-On' })
                : t('Lcz_EditFieldAriaLabel', {
                    fallback: `Edit ${this.service?.name ?? 'Extra Service'}`,
                    params: [this.service?.name ?? t('Lcz_ExtraServiceFallback', { fallback: 'Extra Service' })],
                }), open: this.open, "data-testid": "extra-service-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (h("ir-extra-service-editor-form", { key: 'f75dcae2a449137c6cf393ed7724e36e35317dae', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.extraServiceEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, service: this.service, formId: this.baseId, "data-testid": "extra-service-editor-form" })), h("div", { key: 'da100a7cd930752bb90e168cedbbb00d94dd7fd0', slot: "footer", class: "ir__drawer-footer", "data-testid": "extra-service-editor-drawer-footer" }, h("ir-custom-button", { key: '461a0d467d42f6b7ad28b38803ffc1603fd2bd7a', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "extra-service-editor-cancel-button" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '452bb65b9eea30b529a1a2de68efd9a24893bbb8', loading: this.loading, type: "submit", form: this.baseId, size: "m", appearance: "accent", variant: "brand", "data-testid": "extra-service-editor-save-button" }, t('Lcz_Save', { fallback: 'Save' }))))));
    }
};
IrExtraServiceEditorDrawer.style = irExtraServiceEditorDrawerCss();

export { IrExtraServiceEditorDrawer as ir_extra_service_editor_drawer };
