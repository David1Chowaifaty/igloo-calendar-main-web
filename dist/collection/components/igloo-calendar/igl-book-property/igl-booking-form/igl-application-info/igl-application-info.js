import { Host, h } from "@stencil/core";
import booking_store, { modifyBookingStore } from "../../../../../stores/booking.store";
import locales from "../../../../../stores/locales.store";
import { v4 } from "uuid";
import calendar_data, { isSingleUnit } from "../../../../../stores/calendar-data";
import { formatAmount } from "../../../../../utils/utils";
export class IglApplicationInfo {
    constructor() {
        this.rateplanSelection = undefined;
        this.guestInfo = undefined;
        this.currency = undefined;
        this.bedPreferenceType = [];
        this.bookingType = 'PLUS_BOOKING';
        this.roomIndex = undefined;
        this.totalNights = 1;
        this.baseData = undefined;
        this.isButtonPressed = false;
    }
    componentWillLoad() {
        var _a, _b;
        if (isSingleUnit(this.rateplanSelection.roomtype.id)) {
            const filteredRooms = this.filterRooms();
            if (filteredRooms.length > 0)
                this.updateGuest({ unit: (_b = (_a = filteredRooms[0]) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.toString() });
        }
    }
    updateGuest(params) {
        const roomTypeId = this.rateplanSelection.roomtype.id;
        const ratePlanId = this.rateplanSelection.ratePlan.id;
        let prevGuest = [...this.rateplanSelection.guest];
        prevGuest[this.roomIndex] = Object.assign(Object.assign({}, prevGuest[this.roomIndex]), params);
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId]), { [ratePlanId]: Object.assign(Object.assign({}, this.rateplanSelection), { guest: [...prevGuest] }) }) });
    }
    handleButtonClicked(event) {
        switch (event.detail.key) {
            case 'book':
            case 'bookAndCheckIn':
            case 'save':
                this.isButtonPressed = true;
                break;
        }
    }
    formatVariation(variation) {
        var _a, _b, _c, _d;
        if (!variation)
            return '';
        const adults = `${variation.adult_nbr} ${variation.adult_nbr === 1 ? (_a = locales.entries['Lcz_Adult']) === null || _a === void 0 ? void 0 : _a.toLowerCase() : (_b = locales.entries['Lcz_Adults']) === null || _b === void 0 ? void 0 : _b.toLowerCase()}`;
        const children = variation.child_nbr > 0
            ? `${variation.child_nbr} ${variation.child_nbr > 1 ? (_c = locales.entries['Lcz_Children']) === null || _c === void 0 ? void 0 : _c.toLowerCase() : (_d = locales.entries['Lcz_Child']) === null || _d === void 0 ? void 0 : _d.toLowerCase()}`
            : '';
        return children ? `${adults} ${children}` : adults;
    }
    getTooltipMessages() {
        var _a, _b, _c, _d, _e;
        const { ratePlan, selected_variation } = this.rateplanSelection;
        const selectedVariation = selected_variation;
        if (!selectedVariation)
            return;
        const matchingVariation = (_a = ratePlan.variations) === null || _a === void 0 ? void 0 : _a.find(variation => this.formatVariation(variation) === this.formatVariation(selectedVariation));
        if (!matchingVariation)
            return;
        const cancellationPolicy = (_c = (_b = matchingVariation.applicable_policies) === null || _b === void 0 ? void 0 : _b.find(p => p.type === 'cancelation')) === null || _c === void 0 ? void 0 : _c.combined_statement;
        const guaranteePolicy = (_e = (_d = matchingVariation.applicable_policies) === null || _d === void 0 ? void 0 : _d.find(p => p.type === 'guarantee')) === null || _e === void 0 ? void 0 : _e.combined_statement;
        let tooltip = '';
        if (cancellationPolicy) {
            tooltip += `<b><u>Cancellation:</u></b> ${cancellationPolicy}<br/>`;
        }
        if (guaranteePolicy) {
            tooltip += `<b><u>Guarantee:</u></b> ${guaranteePolicy}`;
        }
        return tooltip || undefined;
    }
    getAmount() {
        if (this.rateplanSelection.is_amount_modified) {
            return this.rateplanSelection.view_mode === '001' ? this.rateplanSelection.rp_amount : this.rateplanSelection.rp_amount * this.totalNights;
        }
        return this.rateplanSelection.selected_variation.discounted_gross_amount;
    }
    filterRooms() {
        var _a, _b, _c;
        const result = [];
        (_a = this.rateplanSelection.ratePlan) === null || _a === void 0 ? void 0 : _a.assignable_units.forEach(unit => {
            if (unit.Is_Fully_Available) {
                result.push({ name: unit.name, id: unit.pr_id });
            }
        });
        const filteredGuestsRoom = this.rateplanSelection.guest.filter((_, i) => i !== this.roomIndex).map(r => r.unit);
        const filteredResults = result.filter(r => !filteredGuestsRoom.includes(r.id.toString()));
        return this.bookingType === 'EDIT_BOOKING'
            ? [...filteredResults, this.rateplanSelection.roomtype.id === ((_b = this.baseData) === null || _b === void 0 ? void 0 : _b.roomtypeId) ? (_c = this.baseData) === null || _c === void 0 ? void 0 : _c.unit : null]
                .filter(f => !!f)
                .sort((a, b) => a.name.localeCompare(b.name))
            : filteredResults;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const filteredRoomList = this.filterRooms();
        return (h(Host, { key: '88c9b0aa7cbd2820151044cf773a20735facdf04', class: 'my-2' }, h("div", { key: '4e9013f13f1d3d743807be770c30263e75fa9d75', class: "booking-header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("span", { key: 'a5953c30e06ad909b6060416fa8632574aa1ba6c', class: "booking-roomtype-title" }, this.rateplanSelection.roomtype.name)), h("div", { key: 'd0594d5d34d56818cdafddc1f5f11436f3cbcd7a', class: "booking-details-container" }, h("div", { key: '277af5fc0fc854067ae90b8fc5a8c8f70ce31ec1', class: "booking-rateplan" }, h("p", { key: '1ea81051c754d5d78ef57bf161abeb8850d8aac7', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name), h("ir-tooltip", { key: '8ffc64153d53c405d58f62f7d2e442ba0337e500', class: "booking-tooltip", message: this.getTooltipMessages() })), h("p", { key: '3c6887f53c3b9c4b3c2d637d62f2fe44aa374ffb', class: "booking-variation" }, this.formatVariation(this.rateplanSelection.selected_variation))), h("p", { key: 'ced9fdf35ab53eda386bc8769defebd7394d386d', class: "booking-price" }, formatAmount((_a = this.currency) === null || _a === void 0 ? void 0 : _a.symbol, this.getAmount()), "/", locales.entries.Lcz_Stay)), h("div", { key: '8312f837a58a3a0d321b10824bcaefbf68ad1035', class: "booking-footer" }, h("div", { key: 'bd19aed4382aa4d6dd556c1af8ddaa3774dc8dde', class: "booking-rateplan" }, h("p", { key: '210612198df3591179816dd5e62baf50e2410145', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name), h("ir-tooltip", { key: 'cd22daed19e488b38ec7667876fab1ae9acf29bc', class: "booking-tooltip", message: this.getTooltipMessages() })), h("p", { key: 'e68d6a41cdf61932326f8a3846ffc5d870a2712e', class: "booking-variation" }, this.formatVariation(this.rateplanSelection.selected_variation))), h("div", { key: '14af40fd6a413bccc09fbc2b2a75cb185dfea80a', class: "d-flex flex-column flex-md-row  p-0 align-items-md-center aplicationInfoContainer" }, h("div", { key: '69147ba8f253cd0e5f34b47e9c1fbcc87fccf3ad', class: "mr-1 flex-fill guest-info-container" }, h("input", { key: '9ba250425d5ed06b331899f24b03e2467793af30', id: v4(), type: "email", class: `form-control ${this.isButtonPressed && ((_b = this.guestInfo) === null || _b === void 0 ? void 0 : _b.name) === '' && 'border-danger'}`, placeholder: locales.entries.Lcz_GuestFirstnameAndLastname, name: "guestName", onInput: event => {
                const name = event.target.value;
                this.updateGuest({ name });
                if (booking_store.event_type.type === 'EDIT_BOOKING') {
                    modifyBookingStore('guest', Object.assign(Object.assign({}, booking_store.guest), { name }));
                }
            }, required: true, value: (_c = this.guestInfo) === null || _c === void 0 ? void 0 : _c.name })), h("div", { key: '07a0189276bed04ed31027e33e936b5ed45dd564', class: "mt-1 mt-md-0 d-flex align-items-center flex-fill" }, calendar_data.is_frontdesk_enabled &&
            !isSingleUnit(this.rateplanSelection.roomtype.id) &&
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("div", { key: 'add0c1c6e19d27c2c78a9d639361da6a56d7a1b5', class: "mr-1 p-0 flex-fill preference-select-container" }, h("select", { key: '3e0a7ebc0924c43f9ab1ada33f929e9bae0c0967', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.updateGuest({ unit: event.target.value }) }, h("option", { key: '126478f642e9f24b95f2dbfb90ea16d561c88f68', value: "", selected: ((_d = this.guestInfo) === null || _d === void 0 ? void 0 : _d.unit) === '' }, locales.entries.Lcz_Assignunits), filteredRoomList === null || filteredRoomList === void 0 ? void 0 :
            filteredRoomList.map(room => {
                var _a;
                return (h("option", { value: room.id, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.unit) === room.id.toString() }, room.name));
            }))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (h("div", { key: '02cdfcfc9b64eb0c45b6c12e73c45b132b7ac35f', class: "mr-1 flex-fill" }, h("select", { key: 'd02d74787aa65b8d76b565f30e2738b6038f94b6', class: `form-control input-sm ${this.isButtonPressed && ((_e = this.guestInfo) === null || _e === void 0 ? void 0 : _e.bed_preference) === '' && 'border-danger'}`, id: v4(), onChange: event => this.updateGuest({ bed_preference: event.target.value }) }, h("option", { key: '1ead15b3ae442cd6bf3bd90dfbbfc186c56f9d3c', value: "", selected: ((_f = this.guestInfo) === null || _f === void 0 ? void 0 : _f.bed_preference) === '' }, locales.entries.Lcz_BedConfiguration), this.bedPreferenceType.map(data => {
            var _a;
            return (h("option", { value: data.CODE_NAME, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.bed_preference) === data.CODE_NAME }, data.CODE_VALUE_EN));
        })))), h("p", { key: 'fee4860e4e6a0065aac1893e4e46b4e0fa561b91', class: "rate_amount" }, formatAmount((_g = this.currency) === null || _g === void 0 ? void 0 : _g.symbol, this.getAmount()), "/", locales.entries.Lcz_Stay)), this.rateplanSelection.selected_variation.child_nbr > 0 && (h("div", { key: '58c97ad3ae24fc6efae145c1a4cf2d052b5a43cb', style: { gap: '0.5rem', marginTop: '0.5rem' }, class: "d-flex  flex-row  p-0 align-items-center aplicationInfoContainer" }, h("p", { key: '5a6f68022070a015ddeda8ac3715768ec49c45cb', class: 'm-0 p-0 text-danger' }, "Any of the children below 3 years?"), h("div", { key: '26cf75c0beac955a9726056cbb253584242e6564', class: "mr-1 flex-fill" }, h("select", { key: '7e8819f7795849a1b2e9f92b763f2d44cae796b8', class: `form-control input-sm ${this.isButtonPressed && ((_h = this.guestInfo) === null || _h === void 0 ? void 0 : _h.bed_preference) === '' && 'border-danger'}`, id: v4(), style: { width: 'max-content' }, onChange: event => this.updateGuest({ infant_nbr: Number(event.target.value) }) }, h("option", { key: '5f600010e07e95706db28cbdc5570a1e9a1d85fc', value: "", selected: Number((_j = this.guestInfo) === null || _j === void 0 ? void 0 : _j.infant_nbr) === 0 }, locales.entries['No'] || 'No'), Array.from({ length: this.rateplanSelection.selected_variation.child_nbr }, (_, i) => i + 1).map(item => {
            var _a;
            return (h("option", { value: item, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.infant_nbr) === item }, item));
        })))))));
    }
    static get is() { return "igl-application-info"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-application-info.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-application-info.css"]
        };
    }
    static get properties() {
        return {
            "rateplanSelection": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IRatePlanSelection",
                    "resolved": "IRatePlanSelection",
                    "references": {
                        "IRatePlanSelection": {
                            "location": "import",
                            "path": "@/stores/booking.store",
                            "id": "src/stores/booking.store.ts::IRatePlanSelection"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "guestInfo": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "RatePlanGuest | null",
                    "resolved": "RatePlanGuest",
                    "references": {
                        "RatePlanGuest": {
                            "location": "import",
                            "path": "@/stores/booking.store",
                            "id": "src/stores/booking.store.ts::RatePlanGuest"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "currency": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICurrency",
                    "resolved": "ICurrency",
                    "references": {
                        "ICurrency": {
                            "location": "import",
                            "path": "@/models/calendarData",
                            "id": "src/models/calendarData.ts::ICurrency"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "bedPreferenceType": {
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
            "roomIndex": {
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
                "attribute": "room-index",
                "reflect": false
            },
            "totalNights": {
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
                "attribute": "total-nights",
                "reflect": false,
                "defaultValue": "1"
            },
            "baseData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ unit: { id: string; name: string }; roomtypeId: number }",
                    "resolved": "{ unit: { id: string; name: string; }; roomtypeId: number; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get states() {
        return {
            "isButtonPressed": {}
        };
    }
    static get listeners() {
        return [{
                "name": "buttonClicked",
                "method": "handleButtonClicked",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=igl-application-info.js.map
