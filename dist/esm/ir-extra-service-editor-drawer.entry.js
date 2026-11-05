import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { E as ExtraServiceSection } from './types-lai6srmI.js';
import { t } from './t-Bvz1wS_D.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import './enums-CSCQSgBu.js';
import './types-CB66a07H.js';
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
        return (h(Host, { key: '5c8d7240de2e46685ea1260ed376624581c340b3', "data-testid": "extra-service-editor-drawer" }, h("ir-drawer", { key: 'dd05f9a9e30c51f7c92a35d5a2301e07291e79a1', class: "extra-service__drawer", style: { '--ir-drawer-width': '32rem' }, label: isNewAddon
                ? t('Lcz_NewAddOn', { fallback: 'New Add-On' })
                : t('Lcz_EditFieldAriaLabel', {
                    fallback: `Edit ${this.service?.name ?? 'Extra Service'}`,
                    params: [this.service?.name ?? t('Lcz_ExtraServiceFallback', { fallback: 'Extra Service' })],
                }), open: this.open, "data-testid": "extra-service-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (h("ir-extra-service-editor-form", { key: 'fd4c608dde1227872c1d1f076b11fb6d1c8b199c', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.extraServiceEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, service: this.service, formId: this.baseId, "data-testid": "extra-service-editor-form" })), h("div", { key: '5aea928978ed34de03309992b84ec4edf264735e', slot: "footer", class: "ir__drawer-footer", "data-testid": "extra-service-editor-drawer-footer" }, h("ir-custom-button", { key: 'a06bad8f353bb55fb62532d1433b60a836e4f54b', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "extra-service-editor-cancel-button" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '7b6c6e22a5747f66b2b8fe8b9be1b5e259058467', loading: this.loading, type: "submit", form: this.baseId, size: "m", appearance: "accent", variant: "brand", "data-testid": "extra-service-editor-save-button" }, t('Lcz_Save', { fallback: 'Save' }))))));
    }
};
IrExtraServiceEditorDrawer.style = irExtraServiceEditorDrawerCss();

export { IrExtraServiceEditorDrawer as ir_extra_service_editor_drawer };
