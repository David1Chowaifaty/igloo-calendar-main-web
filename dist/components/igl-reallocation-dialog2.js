import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { E as EventsService } from './events.service.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-dialog2.js';

const iglReallocationDialogCss = ".sc-igl-reallocation-dialog-h{display:block;text-align:start}.dialog-body.sc-igl-reallocation-dialog{display:grid;gap:1.5rem}.dialog-body__description.sc-igl-reallocation-dialog{margin:0}.dialog-footer.sc-igl-reallocation-dialog{display:flex;justify-content:flex-end;gap:0.75rem}";
const IglReallocationDialogStyle0 = iglReallocationDialogCss;

const IglReallocationDialog = /*@__PURE__*/ proxyCustomElement(class IglReallocationDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dialogClose = createEvent(this, "dialogClose", 7);
        this.revertBooking = createEvent(this, "revertBooking", 7);
        this.resetModalState = createEvent(this, "resetModalState", 7);
    }
    get hostEl() { return this; }
    data;
    selectedRateplan;
    showRateplanError = false;
    dialogClose;
    revertBooking;
    resetModalState;
    dialogEl;
    rateplanSelectEl;
    eventsService = new EventsService();
    handleDataChange(newData) {
        this.resetState(newData);
        if (newData) {
            this.dialogEl?.openModal();
        }
        else {
            this.dialogEl?.closeModal();
        }
    }
    async reallocateUnit() {
        if (!this.data) {
            return;
        }
        if (!this.validateRateplanSelection()) {
            return;
        }
        const { pool, toRoomId, from_date, to_date, matchedRatePlan } = this.data;
        try {
            await this.eventsService.reallocateEvent(pool, toRoomId, from_date, to_date, this.data.rateplans ? Number(this.selectedRateplan) : matchedRatePlan ? Number(matchedRatePlan?.value) : undefined);
        }
        catch (error) {
            console.log(error);
            this.revertBooking.emit(pool);
        }
        finally {
            this.dialogEl?.closeModal();
            this.resetModalState.emit();
        }
    }
    get rateplanOptions() {
        if (!Array.isArray(this.data?.rateplans)) {
            return [];
        }
        return this.data.rateplans.map(option => ({
            ...option,
            text: this.formatRateplanLabel(option),
        }));
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
        const selectEl = this.rateplanSelectEl?.shadowRoot?.querySelector('select') ?? this.rateplanSelectEl?.querySelector('select');
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
    handleDialogVisibilityChange = (_) => {
        this.dialogClose.emit(false);
    };
    handleRateplanChange = (value) => {
        this.selectedRateplan = value;
        this.showRateplanError = false;
    };
    handleCancelClick = () => {
        this.dialogEl?.closeModal();
        this.dialogClose.emit(false);
    };
    render() {
        const hasRateplans = this.hasRateplanRequirement();
        return (h("ir-dialog", { key: '7c3cf542942c92c93e1c85d3c77af8e06bc6c191', label: 'Alert', ref: el => (this.dialogEl = el), onIrDialogHide: this.handleDialogVisibilityChange }, this.data && (h(Fragment, { key: 'f1d8f5906b072c41db6f3ff5923beeb3b2fa26a4' }, h("div", { key: '09d5f4c226c46ce7c4b2fec69d378285199e1a0d', class: "dialog-body" }, h("p", { key: '259bef67b28bbe42eb51cbf48798288bc51026cd', class: "text-left dialog-body__description m-0 p-0" }, this.data.description), hasRateplans && (
        // <ir-select
        //   ref={el => (this.rateplanSelectEl = el)}
        //   required
        //   firstOption="Select rate plan..."
        //   data={this.rateplanOptions.map(option => ({ text: option.text, value: option.value }))}
        //   error={this.showRateplanError}
        //   onSelectChange={this.handleRateplanChange}
        // ></ir-select>
        h("wa-select", { key: '28955164c110fbcd352bfa74896f475902b86e65', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, defaultValue: '', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, size: "small", "aria-invalid": String(this.showRateplanError), onchange: e => this.handleRateplanChange(e.target.value) }, h("wa-option", { key: '442699df253788c391d5a17c7c10f3438fe9823c', value: "" }, "Select rate plan..."), this.rateplanOptions.map(option => (h("wa-option", { key: option.value, value: option.value }, option.text)))))), h("div", { key: '676b6745ed0d5db75d8e6351610024617726b8bc', class: "dialog-footer", slot: "footer" }, h("ir-custom-button", { key: '1db6298c9f473e0e31767596bf288951e1013d35', appearance: "filled", variant: "neutral", onClickHandler: this.handleCancelClick, size: "medium" }, "Cancel"), h("ir-custom-button", { key: '3515200c3bb7c8979c0ad4c531ee535a9e572b5b', variant: "brand", onClickHandler: () => this.reallocateUnit(), size: "medium", loading: isRequestPending('/ReAllocate_Exposed_Room') }, "Confirm"))))));
    }
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
    const components = ["igl-reallocation-dialog", "ir-custom-button", "ir-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-reallocation-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglReallocationDialog);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglReallocationDialog as I, defineCustomElement as d };

//# sourceMappingURL=igl-reallocation-dialog2.js.map