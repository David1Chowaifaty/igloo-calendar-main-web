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
        return (index.h(index.Host, { key: '46391fc2ee7a846e038232cc494e830ede53da60', "data-testid": "extra-service-editor-drawer" }, index.h("ir-drawer", { key: '1f8bcd33e814e813a8d0b9e8a3a6b63d5504d374', class: "extra-service__drawer", style: { '--ir-drawer-width': '32rem' }, label: isNewAddon
                ? t.t('Lcz_NewAddOn', { fallback: 'New Add-On' })
                : t.t('Lcz_EditFieldAriaLabel', {
                    fallback: `Edit ${this.service?.name ?? 'Extra Service'}`,
                    params: [this.service?.name ?? t.t('Lcz_ExtraServiceFallback', { fallback: 'Extra Service' })],
                }), open: this.open, "data-testid": "extra-service-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (index.h("ir-extra-service-editor-form", { key: 'cce8ba2a86207d6ee7a985f78a0a1055c00c6e82', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.extraServiceEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, service: this.service, formId: this.baseId, "data-testid": "extra-service-editor-form" })), index.h("div", { key: 'f909053542870695f08d252252e8da0d8c55a23a', slot: "footer", class: "ir__drawer-footer", "data-testid": "extra-service-editor-drawer-footer" }, index.h("ir-custom-button", { key: '0a5c8dff517564a5f8b5d06c1e6db6ebb6675cd6', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "extra-service-editor-cancel-button" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'fc2073b96ec200e415f7be442512513da7f95f3e', loading: this.loading, type: "submit", form: this.baseId, size: "m", appearance: "accent", variant: "brand", "data-testid": "extra-service-editor-save-button" }, t.t('Lcz_Save', { fallback: 'Save' }))))));
    }
};
IrExtraServiceEditorDrawer.style = irExtraServiceEditorDrawerCss();

exports.ir_extra_service_editor_drawer = IrExtraServiceEditorDrawer;
