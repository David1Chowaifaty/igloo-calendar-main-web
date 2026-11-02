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
        return (h("ir-dialog", { key: '5a76db73c0a4d6de4e43fcd28ff78b4b5391b3a0', label: t('Lcz_Alert', { fallback: 'Alert' }), ref: el => (this.dialogEl = el), onIrDialogHide: this.handleDialogVisibilityChange }, this.data && (h(Fragment, { key: '655ea07cd89940f6c29812ec6df836ca9e78cdf8' }, h("div", { key: '2337fa4ac74a74a7d57f7d89e1221f8dcdddbe24', class: "dialog-body" }, h("p", { key: '26ec0cd1286115fec7f2bfd1a87cd5fc0388acbc', class: "ir-text-start dialog-body__description m-0 p-0" }, this.data.description), hasRateplans && (
        // <ir-select
        //   ref={el => (this.rateplanSelectEl = el)}
        //   required
        //   firstOption="Select rate plan..."
        //   data={this.rateplanOptions.map(option => ({ text: option.text, value: option.value }))}
        //   error={this.showRateplanError}
        //   onSelectChange={this.handleRateplanChange}
        // ></ir-select>
        h("wa-select", { key: 'db562bf1f7e9f3860c38e9f894847015968ba135', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, defaultValue: '', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, size: "s", "aria-invalid": String(this.showRateplanError), onchange: e => this.handleRateplanChange(e.target.value) }, h("wa-option", { key: '90f3abff4f0bde4cfef13cfc4806cbb8339ee864', value: "" }, t('Lcz_SelectRatePlan', { fallback: 'Select rate plan...' })), this.rateplanOptions.map(option => (h("wa-option", { key: option.value, value: option.value }, option.text)))))), h("div", { key: 'aaf17aaba96e3bdf2dd4f6ef8cb859400b7db66c', class: "dialog-footer", slot: "footer" }, h("ir-custom-button", { key: '47ffce87f8101538fe3b16fb8a02f6aefb490795', appearance: "filled", variant: "neutral", onClickHandler: this.handleCancelClick, size: "m" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '2530a2b7cf57613ffaa385d47b1703e6549454f1', variant: "brand", onClickHandler: () => this.reallocateUnit(), size: "m", loading: isRequestPending('/ReAllocate_Exposed_Room') }, t('Lcz_Confirm', { fallback: 'Confirm' })))))));
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
