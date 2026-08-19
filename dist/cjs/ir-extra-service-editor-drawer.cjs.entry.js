'use strict';

var index = require('./index-DgHWBwDV.js');
var types = require('./types-BH9cEzZc.js');
var v4 = require('./v4-_2BfiRUa.js');
require('./index-CLqkDPTC.js');
require('./enums-CF2eqtU7.js');

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
        return (index.h(index.Host, { key: '209ace7c7cc3b8f6f098734d875c2c1453de0946', "data-testid": "extra-service-editor-drawer" }, index.h("ir-drawer", { key: '04b33bf3872de0c3276bf287e74926cfdd1003eb', class: "extra-service__drawer", style: { '--ir-drawer-width': '32rem' }, label: isNewAddon ? 'New Add-On' : `Edit ${this.service?.name ?? 'Extra Service'}`, open: this.open, "data-testid": "extra-service-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (index.h("ir-extra-service-editor-form", { key: '43eae9dfb8f365be1da00a1d9015d7e2d1a23b1c', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.extraServiceEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, service: this.service, formId: this.baseId, "data-testid": "extra-service-editor-form" })), index.h("div", { key: '82028b7cac3a118a8e381c31f8b6912557e4c002', slot: "footer", class: "ir__drawer-footer", "data-testid": "extra-service-editor-drawer-footer" }, index.h("ir-custom-button", { key: 'fd5cdd547d51abecb831f92e3edf0abcb76512b8', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "extra-service-editor-cancel-button" }, "Cancel"), index.h("ir-custom-button", { key: 'dbd20dd78ffa412198b65b582ff8ae3ce7dca44b', loading: this.loading, type: "submit", form: this.baseId, size: "m", appearance: "accent", variant: "brand", "data-testid": "extra-service-editor-save-button" }, "Save")))));
    }
};
IrExtraServiceEditorDrawer.style = irExtraServiceEditorDrawerCss();

exports.ir_extra_service_editor_drawer = IrExtraServiceEditorDrawer;
