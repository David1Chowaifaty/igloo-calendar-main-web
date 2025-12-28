import { EventsService } from "../../../services/events.service";
import { Fragment, h } from "@stencil/core";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
export class IglReallocationDialog {
    hostEl;
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
        return (h("ir-dialog", { key: 'eef028e42e94ddc0aefbf8ccdd8b3c369b9ab567', label: 'Alert', ref: el => (this.dialogEl = el), onIrDialogHide: this.handleDialogVisibilityChange }, this.data && (h(Fragment, { key: '5aec2323fde493a9f1de09febaf9281eade8f9cf' }, h("div", { key: 'c1faf0c5aec1b441623cf58837cc2e9cdea039c6', class: "dialog-body" }, h("p", { key: '6bac7d3a7506bf7c877b31e7a75304a02e98a22a', class: "text-left dialog-body__description m-0 p-0" }, this.data.description), hasRateplans && (
        // <ir-select
        //   ref={el => (this.rateplanSelectEl = el)}
        //   required
        //   firstOption="Select rate plan..."
        //   data={this.rateplanOptions.map(option => ({ text: option.text, value: option.value }))}
        //   error={this.showRateplanError}
        //   onSelectChange={this.handleRateplanChange}
        // ></ir-select>
        h("wa-select", { key: 'ec027123fb28d65f43d6ce4375e275800d8ad3b0', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, defaultValue: '', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, size: "small", "aria-invalid": String(this.showRateplanError), onchange: e => this.handleRateplanChange(e.target.value) }, h("wa-option", { key: '052c8dd9ab0519668b41dc3a1ae0ddc54a9e033f', value: "" }, "Select rate plan..."), this.rateplanOptions.map(option => (h("wa-option", { key: option.value, value: option.value }, option.text)))))), h("div", { key: '2d50d8715c4f7eec05e59d24f0ce898542dfaf98', class: "dialog-footer", slot: "footer" }, h("ir-custom-button", { key: 'f2063fb853274496471e6e7831095a0cb9ac7a06', appearance: "filled", variant: "neutral", onClickHandler: this.handleCancelClick, size: "medium" }, "Cancel"), h("ir-custom-button", { key: '95aae235363a944146159d4033f703bba65f8676', variant: "brand", onClickHandler: () => this.reallocateUnit(), size: "medium", loading: isRequestPending('/ReAllocate_Exposed_Room') }, "Confirm"))))));
    }
    static get is() { return "igl-reallocation-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-reallocation-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-reallocation-dialog.css"]
        };
    }
    static get properties() {
        return {
            "data": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IReallocationPayload",
                    "resolved": "IReallocationPayload",
                    "references": {
                        "IReallocationPayload": {
                            "location": "import",
                            "path": "@/models/property-types",
                            "id": "src/models/property-types.ts::IReallocationPayload"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "selectedRateplan": {},
            "showRateplanError": {}
        };
    }
    static get events() {
        return [{
                "method": "dialogClose",
                "name": "dialogClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }, {
                "method": "revertBooking",
                "name": "revertBooking",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "resetModalState",
                "name": "resetModalState",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostEl"; }
    static get watchers() {
        return [{
                "propName": "data",
                "methodName": "handleDataChange"
            }];
    }
}
//# sourceMappingURL=igl-reallocation-dialog.js.map
