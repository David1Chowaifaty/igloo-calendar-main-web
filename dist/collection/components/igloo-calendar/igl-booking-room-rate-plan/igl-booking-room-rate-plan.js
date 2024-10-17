import { Host, h, Fragment } from "@stencil/core";
import { v4 } from "uuid";
import locales from "../../../stores/locales.store";
import calendar_data from "../../../stores/calendar-data";
export class IglBookingRoomRatePlan {
    constructor() {
        this.defaultData = undefined;
        this.ratePlanData = undefined;
        this.totalAvailableRooms = undefined;
        this.index = undefined;
        this.ratePricingMode = [];
        this.currency = undefined;
        this.physicalrooms = undefined;
        this.shouldBeDisabled = undefined;
        this.dateDifference = undefined;
        this.bookingType = 'PLUS_BOOKING';
        this.fullyBlocked = undefined;
        this.isBookDisabled = false;
        this.defaultRoomId = undefined;
        this.selectedRoom = undefined;
        this.is_bed_configuration_enabled = undefined;
        this.isInputFocused = false;
        this.selectedData = undefined;
        this.ratePlanChangedState = false;
    }
    getAvailableRooms(assignable_units) {
        let result = [];
        assignable_units.forEach(unit => {
            if (unit.Is_Fully_Available) {
                result.push({ name: unit.name, id: unit.pr_id });
            }
        });
        return result;
    }
    componentWillLoad() {
        // console.log('default data', this.defaultData);
        this.updateSelectedRatePlan(this.ratePlanData);
    }
    disableForm() {
        if (this.bookingType === 'EDIT_BOOKING' && this.shouldBeDisabled) {
            return false;
        }
        else {
            return this.selectedData.is_closed || this.totalAvailableRooms === 0 || (calendar_data.is_frontdesk_enabled && this.selectedData.physicalRooms.length === 0);
        }
    }
    setAvailableRooms(data) {
        let availableRooms = this.getAvailableRooms(data);
        if (this.bookingType === 'EDIT_BOOKING' && this.shouldBeDisabled) {
            if (this.selectedRoom) {
                availableRooms.push({
                    id: this.selectedRoom.roomId,
                    name: this.selectedRoom.roomName,
                });
                availableRooms.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
            }
        }
        return availableRooms;
    }
    getSelectedOffering(value) {
        return this.ratePlanData.variations.find(variation => variation.adult_child_offering === value);
    }
    updateSelectedRatePlan(data) {
        var _a;
        this.selectedData = {
            is_bed_configuration_enabled: this.is_bed_configuration_enabled,
            ratePlanId: data.id,
            adult_child_offering: data.variations[0].adult_child_offering,
            rateType: 1,
            totalRooms: 0,
            rate: (_a = data.variations[0].amount) !== null && _a !== void 0 ? _a : 0,
            ratePlanName: data.name,
            adultCount: data.variations[0].adult_nbr,
            childrenCount: data.variations[0].child_nbr,
            cancelation: data.cancelation,
            guarantee: data.guarantee,
            isRateModified: false,
            defaultSelectedRate: 0,
            index: this.index,
            is_closed: data.is_closed,
            physicalRooms: this.setAvailableRooms(this.ratePlanData.assignable_units),
            dateDifference: this.dateDifference,
        };
        if (this.defaultData) {
            for (const [key, value] of Object.entries(this.defaultData)) {
                this.selectedData[key] = value;
            }
            this.selectedData['rateType'] = 1;
        }
    }
    componentDidLoad() {
        if (this.defaultData) {
            this.dataUpdateEvent.emit({
                key: 'roomRatePlanUpdate',
                changedKey: 'physicalRooms',
                data: this.selectedData,
            });
        }
    }
    async ratePlanDataChanged(newData) {
        this.selectedData = Object.assign(Object.assign({}, this.selectedData), { adult_child_offering: newData.variations[0].adult_child_offering, adultCount: newData.variations[0].adult_nbr, childrenCount: newData.variations[0].child_nbr, rate: this.handleRateDaysUpdate(), physicalRooms: this.setAvailableRooms(newData.assignable_units) });
        this.dataUpdateEvent.emit({
            key: 'roomRatePlanUpdate',
            changedKey: 'rate',
            data: this.selectedData,
        });
    }
    handleRateDaysUpdate() {
        if (this.selectedData.isRateModified) {
            return this.selectedData.defaultSelectedRate;
        }
        const selectedOffering = this.getSelectedOffering(this.selectedData.adult_child_offering);
        return selectedOffering ? selectedOffering.amount : 0;
    }
    handleInput(event) {
        const inputElement = event.target;
        let inputValue = inputElement.value.replace(/[^0-9.]/g, '');
        const validDecimalNumber = /^\d*\.?\d*$/;
        if (!validDecimalNumber.test(inputValue)) {
            inputValue = inputValue.substring(0, inputValue.length - 1);
        }
        inputElement.value = inputValue;
        if (inputValue) {
            this.selectedData.isRateModified = true;
            this.handleDataChange('rate', event);
        }
        else {
            this.selectedData = Object.assign(Object.assign({}, this.selectedData), { rate: -1, totalRooms: 0 });
            this.dataUpdateEvent.emit({
                key: 'roomRatePlanUpdate',
                changedKey: 'rate',
                data: this.selectedData,
            });
        }
    }
    handleDataChange(key, evt) {
        const value = evt.target.value;
        switch (key) {
            case 'adult_child_offering':
                this.updateOffering(value);
                break;
            case 'rate':
                this.updateRate(value);
                break;
            default:
                this.updateGenericData(key, value);
                break;
        }
        this.dataUpdateEvent.emit({
            key: 'roomRatePlanUpdate',
            changedKey: key,
            data: this.selectedData,
        });
    }
    updateOffering(value) {
        const offering = this.getSelectedOffering(value);
        if (offering) {
            this.selectedData = Object.assign(Object.assign({}, this.selectedData), { adult_child_offering: value, adultCount: offering.adult_nbr, childrenCount: offering.child_nbr, rate: offering.amount, isRateModified: false });
        }
    }
    updateRate(value) {
        const numericValue = value === '' ? 0 : Number(value);
        this.selectedData = Object.assign(Object.assign({}, this.selectedData), { rate: numericValue, totalRooms: value === '' ? 0 : this.selectedData.totalRooms, defaultSelectedRate: this.selectedData.rateType === 2 ? numericValue / this.dateDifference : numericValue });
    }
    updateGenericData(key, value) {
        this.selectedData = Object.assign(Object.assign({}, this.selectedData), { [key]: value === '' ? 0 : parseInt(value) });
    }
    bookProperty() {
        this.dataUpdateEvent.emit({ key: 'clearData', data: this.selectedData });
        this.handleDataChange('totalRooms', { target: { value: '1' } });
        this.gotoSplitPageTwoEvent.emit({ key: 'gotoSplitPage', data: '' });
    }
    renderRate() {
        if (this.selectedData.isRateModified) {
            console.log('selectedData.rate', this.selectedData.rate);
            return this.selectedData.rate === -1 ? '' : this.selectedData.rate;
        }
        return this.selectedData.rateType === 1 ? Number(this.selectedData.rate).toFixed(2) : Number(this.selectedData.rate / this.dateDifference).toFixed(2);
    }
    render() {
        return (h(Host, { key: '356b8826134664eeb825871356fc929345434317' }, h("div", { key: 'f6a68670c710762d14b4428dd27368fed1fa7d0e', class: "d-flex flex-column m-0 p-0 flex-lg-row align-items-lg-center justify-content-lg-between " }, h("div", { key: 'b1ecc1a21b1ce24fcb68656aeabb91af25e6db45', class: "rateplan-name-container" }, this.bookingType === 'BAR_BOOKING' ? (h(Fragment, null, h("span", { class: "font-weight-bold\t" }, this.ratePlanData.name.split('/')[0]), h("span", null, "/", this.ratePlanData.name.split('/')[1]))) : (h("span", null, this.ratePlanData.short_name)), h("ir-tooltip", { key: 'f35615ed067566c4e8e65dd90fcae117d803399c', message: this.ratePlanData.cancelation + this.ratePlanData.guarantee })), h("div", { key: '28859d7dad14dacbc8d3fc93be1422666fca87c6', class: 'd-md-flex justify-content-md-end  align-items-md-center flex-fill rateplan-container' }, h("div", { key: '786c39f1bcb7d2a442254d32e66902e5fe9b21b6', class: "mt-1 mt-md-0 flex-fill max-w-300" }, h("fieldset", { key: '3a393e10b166076a1b9e43130e2fe2bc81070a43', class: "position-relative" }, h("select", { key: '667ee7bbb7fab977528e1d76fbdcba20a3f6cf9c', disabled: this.disableForm(), class: "form-control  input-sm", id: v4(), onChange: evt => this.handleDataChange('adult_child_offering', evt) }, this.ratePlanData.variations.map(variation => (h("option", { value: variation.adult_child_offering, selected: this.selectedData.adult_child_offering === variation.adult_child_offering }, variation.adult_child_offering)))))), h("div", { key: 'b7521d7597ba65b4aa573d8118ff3ca27dc71885', class: 'm-0 p-0 mt-1 mt-md-0 d-flex justify-content-between align-items-md-center ml-md-1 ' }, h("div", { key: '9afc78c8335b27dc6fd4bfddca1db4bcc54c52c2', class: " d-flex  m-0 p-0 rate-total-night-view  mt-0" }, h("fieldset", { key: 'c0139ab1092f97c10123712c1285773c44a5f886', class: "position-relative has-icon-left m-0 p-0 rate-input-container  " }, h("div", { key: 'e7abde4be5d1598c1d48c8f843297f9b51a2c628', class: "input-group-prepend" }, h("span", { key: '595719080cc83bc5dbf3db8b81f34352224656e9', "data-disabled": this.disableForm(), "data-state": this.isInputFocused ? 'focus' : '', class: "input-group-text new-currency", id: "basic-addon1" }, this.currency.symbol)), h("input", { key: '622e78e1449c4d504dc23461aa99ca404d3d6df5', onFocus: () => (this.isInputFocused = true), onBlur: () => (this.isInputFocused = false), disabled: this.disableForm(), type: "text", class: "form-control pl-0 input-sm rate-input py-0 m-0 rounded-0 rateInputBorder", value: this.renderRate(), id: v4(), placeholder: locales.entries.Lcz_Rate || 'Rate', onInput: (event) => this.handleInput(event) })), h("fieldset", { key: '8e8b4a62bb109d2b7576d994fd1c9a78103c182a', class: "position-relative m-0 total-nights-container p-0 " }, h("select", { key: '0b918d53c2c4c154ee2f710ff9c9e3df9c28324d', disabled: this.disableForm(), class: "form-control input-sm m-0 nightBorder rounded-0 m-0  py-0", id: v4(), onChange: evt => this.handleDataChange('rateType', evt) }, this.ratePricingMode.map(data => (h("option", { value: data.CODE_NAME, selected: this.selectedData.rateType === +data.CODE_NAME }, data.CODE_VALUE_EN)))))), this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' ? (h("div", { class: "flex-fill  mt-lg-0 ml-1 m-0 mt-md-0 p-0" }, h("fieldset", { class: "position-relative" }, h("select", { disabled: this.selectedData.rate === 0 || this.disableForm(), class: "form-control input-sm", id: v4(), onChange: evt => this.handleDataChange('totalRooms', evt) }, Array.from({ length: this.totalAvailableRooms + 1 }, (_, i) => i).map(i => (h("option", { value: i, selected: this.selectedData.totalRooms === i }, i))))))) : null), this.bookingType === 'EDIT_BOOKING' ? (h(Fragment, null, h("div", { class: " m-0 p-0  mt-lg-0  ml-md-1 mt-md-1 d-none d-md-block" }, h("fieldset", { class: "position-relative" }, h("input", { disabled: this.disableForm(), type: "radio", name: "ratePlanGroup", value: "1", onChange: evt => this.handleDataChange('totalRooms', evt), checked: this.selectedData.totalRooms === 1 }))), h("button", { disabled: this.selectedData.rate === -1 || this.disableForm(), type: "button", class: "btn btn-primary booking-btn mt-lg-0 btn-sm ml-md-1  mt-1 d-md-none ", onClick: () => this.bookProperty() }, this.selectedData.totalRooms === 1 ? locales.entries.Lcz_Current : locales.entries.Lcz_Select))) : null, this.bookingType === 'BAR_BOOKING' || this.bookingType === 'SPLIT_BOOKING' ? (h("button", { disabled: this.selectedData.rate === -1 || this.disableForm() || (this.bookingType === 'SPLIT_BOOKING' && this.isBookDisabled), type: "button", class: "btn btn-primary booking-btn mt-lg-0 btn-sm ml-md-1  mt-1 ", onClick: () => this.bookProperty() }, locales.entries.Lcz_Book)) : null))));
    }
    static get is() { return "igl-booking-room-rate-plan"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-booking-room-rate-plan.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-booking-room-rate-plan.css"]
        };
    }
    static get properties() {
        return {
            "defaultData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "ratePlanData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "totalAvailableRooms": {
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
                "attribute": "total-available-rooms",
                "reflect": false
            },
            "index": {
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
                "attribute": "index",
                "reflect": false
            },
            "ratePricingMode": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "any[]",
                    "resolved": "any[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            },
            "currency": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "currency",
                "reflect": false
            },
            "physicalrooms": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "physicalrooms",
                "reflect": false
            },
            "shouldBeDisabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "should-be-disabled",
                "reflect": false
            },
            "dateDifference": {
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
                "attribute": "date-difference",
                "reflect": false
            },
            "bookingType": {
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
                "attribute": "booking-type",
                "reflect": false,
                "defaultValue": "'PLUS_BOOKING'"
            },
            "fullyBlocked": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "fully-blocked",
                "reflect": false
            },
            "isBookDisabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-book-disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "defaultRoomId": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "default-room-id",
                "reflect": false
            },
            "selectedRoom": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "selected-room",
                "reflect": false
            },
            "is_bed_configuration_enabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is_bed_configuration_enabled",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isInputFocused": {},
            "selectedData": {},
            "ratePlanChangedState": {}
        };
    }
    static get events() {
        return [{
                "method": "dataUpdateEvent",
                "name": "dataUpdateEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }, {
                "method": "gotoSplitPageTwoEvent",
                "name": "gotoSplitPageTwoEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "ratePlanData",
                "methodName": "ratePlanDataChanged"
            }];
    }
}
//# sourceMappingURL=igl-booking-room-rate-plan.js.map
