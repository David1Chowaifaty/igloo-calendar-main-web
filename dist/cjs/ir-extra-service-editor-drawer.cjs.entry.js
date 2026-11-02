'use strict';

var index = require('./index-IDeZZwEK.js');
var types = require('./types-CJnnlbYN.js');
var t = require('./t-CqJPQrfm.js');
var v4 = require('./v4-_2BfiRUa.js');
require('./enums-BSCnMYlE.js');
require('./types-BVJQZ50e.js');
require('./locale-scope-Cch-vf1R.js');

const irExtraServiceEditorDrawerCss = () => `.ir__drawer-footer.sc-ir-extra-service-editor-drawer{display:flex;justify-content:flex-end;gap:0.5rem}`;

const IrExtraServiceEditorDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.extraServiceEditorClose = index.createEvent(this, "extraServiceEditorClose");
    }
    open = false;
    service;
    loading = false;
    extraServiceEditorClose;
    baseId = `extra-service-form__id-${v4.v4()}`;
    handleDrawerClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.extraServiceEditorClose.emit();
    }
    render() {
        const isAddon = this.service?.section === types.ExtraServiceSection.BookingEngineAddon;
        const isNewAddon = isAddon && this.service?.id === -1;
        return (index.h(index.Host, { key: '09f9d1a10fb5d134b162202dc913aaf4f7584c36', "data-testid": "extra-service-editor-drawer" }, index.h("ir-drawer", { key: 'e6b439efa0febf1fcbc7626652c3c234e512ec8b', class: "extra-service__drawer", style: { '--ir-drawer-width': '32rem' }, label: isNewAddon
                ? t.t('Lcz_NewAddOn', { fallback: 'New Add-On' })
                : t.t('Lcz_EditFieldAriaLabel', {
                    fallback: `Edit ${this.service?.name ?? 'Extra Service'}`,
                    params: [this.service?.name ?? t.t('Lcz_ExtraServiceFallback', { fallback: 'Extra Service' })],
                }), open: this.open, "data-testid": "extra-service-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (index.h("ir-extra-service-editor-form", { key: 'fb7912929b0edf66d1f1d7bdf771ee31fc0555e6', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.extraServiceEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, service: this.service, formId: this.baseId, "data-testid": "extra-service-editor-form" })), index.h("div", { key: 'f90cb548caf6f0fc10bf2a2190ef1c783f070640', slot: "footer", class: "ir__drawer-footer", "data-testid": "extra-service-editor-drawer-footer" }, index.h("ir-custom-button", { key: 'e152e5e729e7e795a42eba90ff882609f2d6728d', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "extra-service-editor-cancel-button" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '22008b92d4f42da99ad74f01b59d169834f6d896', loading: this.loading, type: "submit", form: this.baseId, size: "m", appearance: "accent", variant: "brand", "data-testid": "extra-service-editor-save-button" }, t.t('Lcz_Save', { fallback: 'Save' }))))));
    }
};
IrExtraServiceEditorDrawer.style = irExtraServiceEditorDrawerCss();

exports.ir_extra_service_editor_drawer = IrExtraServiceEditorDrawer;
