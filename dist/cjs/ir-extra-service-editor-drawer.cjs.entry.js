'use strict';

var index = require('./index-Bp205iz4.js');
var types = require('./types-BPmU04ib.js');
var v4 = require('./v4-_2BfiRUa.js');
require('./enums-BSCnMYlE.js');
require('./types-BVJQZ50e.js');

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
        return (index.h(index.Host, { key: '63f64ef2870f6cf5241052e8cc059cf7792a6840', "data-testid": "extra-service-editor-drawer" }, index.h("ir-drawer", { key: '5ce14b3be9801e3bdd7a5760fb2816a72c917e5c', class: "extra-service__drawer", style: { '--ir-drawer-width': '32rem' }, label: isNewAddon ? 'New Add-On' : `Edit ${this.service?.name ?? 'Extra Service'}`, open: this.open, "data-testid": "extra-service-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (index.h("ir-extra-service-editor-form", { key: '60e9a52e83e34dc7f7051073d93fb01e65294703', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.extraServiceEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, service: this.service, formId: this.baseId, "data-testid": "extra-service-editor-form" })), index.h("div", { key: 'f1908a910eb1748b5102113b37be288a3f38c373', slot: "footer", class: "ir__drawer-footer", "data-testid": "extra-service-editor-drawer-footer" }, index.h("ir-custom-button", { key: '061784c24b31a0932482d4613c611522b818b558', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "extra-service-editor-cancel-button" }, "Cancel"), index.h("ir-custom-button", { key: '5b936f4d331ae11ec60752350fc1bc3f315a12d5', loading: this.loading, type: "submit", form: this.baseId, size: "m", appearance: "accent", variant: "brand", "data-testid": "extra-service-editor-save-button" }, "Save")))));
    }
};
IrExtraServiceEditorDrawer.style = irExtraServiceEditorDrawerCss();

exports.ir_extra_service_editor_drawer = IrExtraServiceEditorDrawer;
