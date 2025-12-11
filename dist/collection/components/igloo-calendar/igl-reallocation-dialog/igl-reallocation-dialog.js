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
        const { pool, toRoomId, from_date, to_date } = this.data;
        try {
            await this.eventsService.reallocateEvent(pool, toRoomId, from_date, to_date, this.data.rateplans ? Number(this.selectedRateplan) : undefined);
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
        return (h("ir-dialog", { key: 'b936141de9f3a1791ceb934c1ea2773ca05e45f8', label: 'Alert', ref: el => (this.dialogEl = el), onIrDialogHide: this.handleDialogVisibilityChange }, this.data && (h(Fragment, { key: 'c47b6da4b6d4f4f73d2206c5de3cab76356d2427' }, h("div", { key: '7117867a6dea593fe87d21cec97373c2c856b823', class: "dialog-body" }, h("p", { key: '8a2d70d82fb244580013b9d087e5995c87676378', class: "text-left dialog-body__description m-0 p-0" }, this.data.description), hasRateplans && (
        // <ir-select
        //   ref={el => (this.rateplanSelectEl = el)}
        //   required
        //   firstOption="Select rate plan..."
        //   data={this.rateplanOptions.map(option => ({ text: option.text, value: option.value }))}
        //   error={this.showRateplanError}
        //   onSelectChange={this.handleRateplanChange}
        // ></ir-select>
        h("wa-select", { key: '27df2e2cde969c73192cc2e13a53ab92c8fc6caf', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, defaultValue: '', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, size: "small", "aria-invalid": String(this.showRateplanError), onchange: e => this.handleRateplanChange(e.target.value) }, h("wa-option", { key: '28d08191fe41ee18177b01214c606496718dcc25', value: "" }, "Select rate plan..."), this.rateplanOptions.map(option => (h("wa-option", { key: option.value, value: option.value }, option.text)))))), h("div", { key: 'e1887d6fb8a503b1f89b75a6600065c75125d4b3', class: "dialog-footer", slot: "footer" }, h("ir-custom-button", { key: '52a26e4d951f2d755095e5e16566662100191e73', appearance: "filled", variant: "neutral", onClickHandler: this.handleCancelClick, size: "medium" }, "Cancel"), h("ir-custom-button", { key: '44024c277fe3c0ef9e6457630542e738c41ab9fa', variant: "brand", onClickHandler: () => this.reallocateUnit(), size: "medium", loading: isRequestPending('/ReAllocate_Exposed_Room') }, "Confirm"))))));
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
