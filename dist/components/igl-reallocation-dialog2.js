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
        return (h("ir-dialog", { key: 'fb052c115e56a61af7b105c79a4178fb37346549', ref: el => (this.dialogEl = el), onOpenChange: this.handleDialogVisibilityChange }, this.data && (h(Fragment, { key: 'e47038a28d27fb8627ef208092be1f8d92347ab8' }, this.data.title && h("div", { key: '907b3d3e394b00f505dd296a00167a0c5f535658', slot: "modal-title" }, this.data.title), h("div", { key: 'fb2ae851dd1e590ab2b1f21f07fc620639d7bd9a', slot: "modal-body", class: "dialog-body" }, h("p", { key: 'a25a3bd88fc91d89711850747d05e547986ee52f', class: "text-left dialog-body__description m-0 p-0" }, this.data.description), hasRateplans && (h("ir-select", { key: '0713ed709037d2319c7fcbbc96370de84644c593', ref: el => (this.rateplanSelectEl = el), required: true, firstOption: "Select rate plan...", data: this.rateplanOptions.map(option => ({ text: option.text, value: option.value })), error: this.showRateplanError, onSelectChange: this.handleRateplanChange }))), h("div", { key: 'cf3894e9d6baa092a0c4709d59715f753684f2d9', class: "dialog-footer", slot: "modal-footer" }, h("ir-button", { key: '083b7b91a258d08d4b68aa871fa2ee63fae4c794', onClick: this.handleCancelClick, text: "Cancel", size: "md", btn_color: "secondary" }), h("ir-button", { key: 'bc10f0b5804dab919cdbb601bbd81836b68cdc2a', text: "Confirm", onClick: () => this.reallocateUnit(), size: "md", isLoading: isRequestPending('/ReAllocate_Exposed_Room') }))))));
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