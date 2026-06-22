import Token from "../../models/Token";
import { BookingService } from "../../services/booking-service/booking.service";
import { PropertyService } from "../../services/property.service";
import { RoomService } from "../../services/room.service";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { groupEntryTablesResult, showToast } from "../../utils/utils";
import { Host, h } from "@stencil/core";
const DEFAULT_RULE_CODE = '000';
const DEFAULT_LOOKAHEAD_DAYS = 30;
export class IrGapNights {
    ticket;
    p;
    language = 'en';
    propertyid;
    isLoading;
    isSaving;
    selectedRule = DEFAULT_RULE_CODE;
    applicableDays = DEFAULT_LOOKAHEAD_DAYS;
    gapRules = [];
    gapRanges = [];
    propertyId;
    tokenService = new Token();
    roomService = new RoomService();
    propertyService = new PropertyService();
    bookingService = new BookingService();
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(newValue);
            this.init();
        }
    }
    handlePChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.init();
    }
    handlePropertyIdChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.init();
    }
    async init() {
        try {
            this.isLoading = true;
            const [propertyRes, , setupEntries] = await Promise.all([
                this.roomService.getExposedProperty({
                    id: this.propertyid ?? 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_GAP_RANGE', '_GAP_RULE']),
            ]);
            this.propertyId = propertyRes.My_Result.id;
            const { gap_rule, gap_range } = groupEntryTablesResult(setupEntries);
            this.gapRules = gap_rule ?? [];
            this.gapRanges = gap_range ?? [];
            const gapRule = propertyRes.My_Result?.gap_rule;
            if (gapRule) {
                this.selectedRule = gapRule.type?.code ?? gap_rule[0].CODE_NAME;
                this.applicableDays = gapRule.gap_lookahead_days ?? Number(gap_range[0].CODE_NAME);
            }
        }
        catch (err) {
            console.error(err);
        }
        finally {
            this.isLoading = false;
        }
    }
    async save() {
        try {
            this.isSaving = true;
            await this.propertyService.setPropertyGapConfig({
                property_id: this.propertyId,
                gap_rule_code: this.selectedRule,
                gap_lookahead_days: this.selectedRule === DEFAULT_RULE_CODE ? 0 : this.applicableDays,
            });
            showToast({ position: 'top-right', title: 'Saved successfully', description: '', type: 'success' });
        }
        catch (err) {
            console.error(err);
            showToast({ position: 'top-right', title: 'Failed to save', description: String(err), type: 'error' });
        }
        finally {
            this.isSaving = false;
        }
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        const ruleDisabled = isRequestPending('/Set_Property_Gap_Config') || this.isSaving;
        const periodDisabled = ruleDisabled || this.selectedRule === DEFAULT_RULE_CODE;
        return (h(Host, null, h("ir-page", { label: "Gap Nights" }, h("ir-custom-button", { slot: "page-header", variant: "brand", loading: ruleDisabled, onClickHandler: () => this.save() }, "Save"), h("wa-card", { class: "gap-nights__card" }, h("wa-callout", { variant: "neutral", size: "s" }, h("wa-icon", { slot: "icon", name: "circle-info" }), "Gap nights are nights guests can't book because of your length of stay restriction. For example, if you have 2 consecutive nights left and you've set a restriction of 3 nights minimum stay, guests won't be able to book those 2 nights."), h("wa-radio-group", { label: "Rule", value: this.selectedRule, defaultValue: this.selectedRule, onchange: (e) => {
                this.selectedRule = e.target.value;
            } }, this.gapRules.map(r => (h("wa-radio", { key: r.CODE_NAME, value: r.CODE_NAME, disabled: ruleDisabled }, r.CODE_VALUE_EN)))), h("wa-select", { size: "s", class: "gap-nights__day-options", label: "Applicable over the next", value: this.applicableDays.toString(), defaultValue: this.applicableDays.toString(), disabled: periodDisabled, onchange: (e) => {
                this.applicableDays = Number(e.target.value);
            } }, this.gapRanges.map(r => (h("wa-option", { key: r.CODE_NAME, value: Number(r.CODE_NAME).toString() }, r.CODE_VALUE_EN))))))));
    }
    static get is() { return "ir-gap-nights"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-gap-nights.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-gap-nights.css"]
        };
    }
    static get properties() {
        return {
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ticket"
            },
            "p": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "p"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "propertyid"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "isSaving": {},
            "selectedRule": {},
            "applicableDays": {},
            "gapRules": {},
            "gapRanges": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }, {
                "propName": "p",
                "methodName": "handlePChange"
            }, {
                "propName": "propertyid",
                "methodName": "handlePropertyIdChange"
            }];
    }
}
