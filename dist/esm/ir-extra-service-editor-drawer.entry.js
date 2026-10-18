import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { E as ExtraServiceSection } from './types-ZGSXosx4.js';
import { t } from './t-Bvz1wS_D.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import './enums-CcLtXwvz.js';
import './types-BLb1NO3I.js';
import './locale-scope-Jre4lb6k.js';

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
        return (h(Host, { key: '2cab4396a3cb3b1fc4214653283fc4ba7efc05e9', "data-testid": "extra-service-editor-drawer" }, h("ir-drawer", { key: '3c77502c80f00035334344f6d95cde51fafccb30', class: "extra-service__drawer", style: { '--ir-drawer-width': '32rem' }, label: isNewAddon
                ? t('Lcz_NewAddOn', { fallback: 'New Add-On' })
                : t('Lcz_EditFieldAriaLabel', {
                    fallback: `Edit ${this.service?.name ?? 'Extra Service'}`,
                    params: [this.service?.name ?? t('Lcz_ExtraServiceFallback', { fallback: 'Extra Service' })],
                }), open: this.open, "data-testid": "extra-service-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (h("ir-extra-service-editor-form", { key: 'e7ac3732a69a0fa0a28ffb10284c08912d036137', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.extraServiceEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, service: this.service, formId: this.baseId, "data-testid": "extra-service-editor-form" })), h("div", { key: '30b8ea5441d6942ba0e782057f37ac2a07d1a67d', slot: "footer", class: "ir__drawer-footer", "data-testid": "extra-service-editor-drawer-footer" }, h("ir-custom-button", { key: 'df88351e83da9040cc5cd75b772bfc6db9c5d455', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "extra-service-editor-cancel-button" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'dc0c5862b1c1daa05e819d225a8da0192ecc3f5a', loading: this.loading, type: "submit", form: this.baseId, size: "m", appearance: "accent", variant: "brand", "data-testid": "extra-service-editor-save-button" }, t('Lcz_Save', { fallback: 'Save' }))))));
    }
};
IrExtraServiceEditorDrawer.style = irExtraServiceEditorDrawerCss();

export { IrExtraServiceEditorDrawer as ir_extra_service_editor_drawer };
