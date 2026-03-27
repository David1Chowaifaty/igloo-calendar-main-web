import { r as registerInstance, a as createEvent, h } from './index-7b3961ed.js';
import { i as isRequestPending } from './ir-interceptor.store-3b04ad32.js';
import { v as v4 } from './index-05b40732.js';
import './index-17663a35.js';

const irReallocationDrawerCss = ".sc-ir-reallocation-drawer-h{display:block}";

const IrReallocationDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal", 7);
    }
    open;
    booking;
    roomIdentifier;
    pool;
    closeModal;
    _id = `reallocation-form_${v4()}`;
    render() {
        return (h("ir-drawer", { key: 'de5f037c218347ad99b73cc53b38f74d29711b0b', label: "Reassign Unit", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && h("ir-reallocation-form", { key: '368b5ec615421c41e79575eac2fc9697c871f36d', pool: this.pool, formId: this._id, booking: this.booking, identifier: this.roomIdentifier }), h("div", { key: 'b1a6091409d0d01e900b067a0bf7bc719ca5c576', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '58b809a11d27951a3e3f081ee505e1b57d58eadb', size: "medium", "data-drawer": "close", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '6b45f94d7be2656faf630908f8126bd18c9305b7', form: this._id, size: "medium", loading: isRequestPending('/ReAllocate_Exposed_Room'), type: "submit", variant: "brand" }, "Confirm"))));
    }
};
IrReallocationDrawer.style = irReallocationDrawerCss;

export { IrReallocationDrawer as ir_reallocation_drawer };

//# sourceMappingURL=ir-reallocation-drawer.entry.js.map