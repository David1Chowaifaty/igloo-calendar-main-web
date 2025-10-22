import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { E as EventsService } from './events.service.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-dialog2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const iglReallocationDialogCss = ".sc-igl-reallocation-dialog-h{display:block}.dialog-body.sc-igl-reallocation-dialog{display:grid;gap:1.5rem}.dialog-body__description.sc-igl-reallocation-dialog{margin:0}.dialog-footer.sc-igl-reallocation-dialog{display:flex;justify-content:flex-end;gap:0.75rem}";
const IglReallocationDialogStyle0 = iglReallocationDialogCss;

const IglReallocationDialog = /*@__PURE__*/ proxyCustomElement(class IglReallocationDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dialogClose = createEvent(this, "dialogClose", 7);
        this.revertBooking = createEvent(this, "revertBooking", 7);
        this.resetModalState = createEvent(this, "resetModalState", 7);
        this.showRateplanError = false;
        this.eventsService = new EventsService();
        this.handleDialogVisibilityChange = (event) => {
            if (!event.detail) {
                this.dialogClose.emit(false);
            }
        };
        this.handleRateplanChange = (event) => {
            this.selectedRateplan = event.detail;
            this.showRateplanError = false;
        };
        this.handleCancelClick = () => {
            var _a;
            (_a = this.dialogEl) === null || _a === void 0 ? void 0 : _a.closeModal();
            this.dialogClose.emit(false);
        };
    }
    handleDataChange(newData) {
        var _a, _b;
        this.resetState(newData);
        if (newData) {
            (_a = this.dialogEl) === null || _a === void 0 ? void 0 : _a.openModal();
        }
        else {
            (_b = this.dialogEl) === null || _b === void 0 ? void 0 : _b.closeModal();
        }
    }
    async reallocateUnit() {
        var _a;
        if (!this.data) {
            return;
        }
        if (!this.validateRateplanSelection()) {
            return;
        }
        const { pool, toRoomId, from_date, to_date } = this.data;
        try {
            await this.eventsService.reallocateEvent(pool, toRoomId, from_date, to_date, this.data.rateplans ? Number(this.selectedRateplan) : undefined);
        }
        catch (error) {
            console.log(error);
            this.revertBooking.emit(pool);
        }
        finally {
            (_a = this.dialogEl) === null || _a === void 0 ? void 0 : _a.closeModal();
            this.resetModalState.emit();
        }
    }
    get rateplanOptions() {
        var _a;
        if (!Array.isArray((_a = this.data) === null || _a === void 0 ? void 0 : _a.rateplans)) {
            return [];
        }
        return this.data.rateplans.map(option => (Object.assign(Object.assign({}, option), { text: this.formatRateplanLabel(option) })));
    }
    formatRateplanLabel(option) {
        if (!option) {
            return '';
        }
        const suffix = option.custom_text ? ` | ${option.custom_text}` : '';
        return `${option.text}${suffix}`.trim();
    }
    hasRateplanRequirement() {
        return this.rateplanOptions.length > 0;
    }
    validateRateplanSelection() {
        if (!this.hasRateplanRequirement()) {
            return true;
        }
        if (!this.selectedRateplan) {
            this.showRateplanError = true;
            this.focusRateplanSelect();
            return false;
        }
        return true;
    }
    focusRateplanSelect() {
        var _a, _b, _c, _d;
        const selectEl = (_c = (_b = (_a = this.rateplanSelectEl) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('select')) !== null && _c !== void 0 ? _c : (_d = this.rateplanSelectEl) === null || _d === void 0 ? void 0 : _d.querySelector('select');
        if (selectEl) {
            selectEl.focus();
        }
    }
    resetState(data) {
        if (!data) {
            this.selectedRateplan = undefined;
            this.showRateplanError = false;
            return;
        }
        this.selectedRateplan = undefined;
        this.showRateplanError = false;
    }
    render() {
        const hasRateplans = this.hasRateplanRequirement();
        return (h("ir-dialog", { key: '22f25b635355417900c0b8272a4e602c56484dcc', ref: el => (this.dialogEl = el), onOpenChange: this.handleDialogVisibilityChange }, this.data && (h(Fragment, { key: 'f969967d32f91bb03dbc9833bd180f4f2ae50b5a' }, this.data.title && h("div", { key: '6263374ede245cd377fcaaf4dc1cfae512fd0d8e', slot: "modal-title" }, this.data.title), h("div", { key: '932028bf800d23627d7613a555344f56a3781e85', slot: "modal-body", class: "dialog-body" }, h("p", { key: '49fcb78892c14286ea32f63830abe1adf2a4e632', class: "text-left dialog-body__description m-0 p-0" }, this.data.description), hasRateplans && (h("ir-select", { key: '4865e519b8f8bbc5c396306f4c5c9458e50ddfe1', ref: el => (this.rateplanSelectEl = el), required: true, firstOption: "Select rate plan...", data: this.rateplanOptions.map(option => ({ text: option.text, value: option.value })), error: this.showRateplanError, onSelectChange: this.handleRateplanChange }))), h("div", { key: '31da1a89bfd9c1a075593a22587de96dd6b0fad6', class: "dialog-footer", slot: "modal-footer" }, h("ir-button", { key: '90c9e30ee4373d04314642797c91ef5ff698e274', onClick: this.handleCancelClick, text: "Cancel", size: "md", btn_color: "secondary" }), h("ir-button", { key: '14c6cb3c9d480aa35725925a225489f9e0821518', text: "Confirm", onClick: () => this.reallocateUnit(), size: "md", isLoading: isRequestPending('/ReAllocate_Exposed_Room') }))))));
    }
    get hostEl() { return this; }
    static get watchers() { return {
        "data": ["handleDataChange"]
    }; }
    static get style() { return IglReallocationDialogStyle0; }
}, [2, "igl-reallocation-dialog", {
        "data": [16],
        "selectedRateplan": [32],
        "showRateplanError": [32]
    }, undefined, {
        "data": ["handleDataChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-reallocation-dialog", "ir-button", "ir-dialog", "ir-icons", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-reallocation-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglReallocationDialog);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglReallocationDialog as I, defineCustomElement as d };

//# sourceMappingURL=igl-reallocation-dialog2.js.map