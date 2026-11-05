import { EventsService } from "../../../services/events.service";
import { Fragment, h } from "@stencil/core";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { t } from "../../../services/locale/t";
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
        return (h("ir-dialog", { key: '551fbe2707a86d611481c31f6cc8da7497052465', label: t('Lcz_Alert', { fallback: 'Alert' }), ref: el => (this.dialogEl = el), onIrDialogHide: this.handleDialogVisibilityChange }, this.data && (h(Fragment, { key: '0cd1103786acd7ac99f112b00d67595e0f3e92d4' }, h("div", { key: '0163bfc518a0bbeabddec17227aaceb0f6018702', class: "dialog-body" }, h("p", { key: '1dda7dc9c2476d945fc9a6ebd144dc0d1a192932', class: "ir-text-start dialog-body__description m-0 p-0" }, this.data.description), hasRateplans && (
        // <ir-select
        //   ref={el => (this.rateplanSelectEl = el)}
        //   required
        //   firstOption="Select rate plan..."
        //   data={this.rateplanOptions.map(option => ({ text: option.text, value: option.value }))}
        //   error={this.showRateplanError}
        //   onSelectChange={this.handleRateplanChange}
        // ></ir-select>
        h("wa-select", { key: 'da3e282461ed8d415b56b23a81d13af303e4461a', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, defaultValue: '', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, size: "s", "aria-invalid": String(this.showRateplanError), onchange: e => this.handleRateplanChange(e.target.value) }, h("wa-option", { key: '816f873217f532c161001323a34c8eeec91e374d', value: "" }, t('Lcz_SelectRatePlan', { fallback: 'Select rate plan...' })), this.rateplanOptions.map(option => (h("wa-option", { key: option.value, value: option.value }, option.text)))))), h("div", { key: '79329f2235e5442fd584e9d600436328f1a8302c', class: "dialog-footer", slot: "footer" }, h("ir-custom-button", { key: 'fcd3e80dc714cb956f518ac75f7dc2d0a6564379', appearance: "filled", variant: "neutral", onClickHandler: this.handleCancelClick, size: "m" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '988b3c32004328fb5c16b80a89d1d0c61ee1ffa7', variant: "brand", onClickHandler: () => this.reallocateUnit(), size: "m", loading: isRequestPending('/ReAllocate_Exposed_Room') }, t('Lcz_Confirm', { fallback: 'Confirm' })))))));
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
                            "id": "src/models/property-types.ts::IReallocationPayload",
                            "referenceLocation": "IReallocationPayload"
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
