import calendar_data from "../../../../stores/calendar-data";
import locales from "../../../../stores/locales.store";
import { AgentsService } from "../../../../services/agents/agents.service";
import { h } from "@stencil/core";
import { PickupService } from "../pickup.service";
import { isAgentMode } from "../../functions";
export class IrPickupForm {
    el;
    formId;
    booking;
    agent;
    defaultPickupData;
    numberOfPersons = 0;
    bookingNumber;
    bookingDates;
    isLoading = false;
    resolvedAgent;
    allowedOptionsByLocation = [];
    assignee = 'guest';
    pickupData = {
        location: -1,
        flight_details: '',
        due_upon_booking: '',
        number_of_vehicles: 1,
        vehicle_type_code: '',
        currency: undefined,
        arrival_time: '',
        arrival_date: null,
        selected_option: undefined,
        agent: null,
    };
    vehicleCapacity = [];
    autoValidate = false;
    closeModal;
    canSubmitPickupChange;
    loadingChange;
    resetBookingEvt;
    pickupService = new PickupService();
    agentsService = new AgentsService();
    pickupSchema;
    get shouldRenderDetails() {
        return this.pickupData.location > 0;
    }
    get isRemovalRequest() {
        return Boolean(this.defaultPickupData && this.pickupData.location === -1);
    }
    get canSubmitPickup() {
        return this.defaultPickupData !== null || this.shouldRenderDetails;
    }
    // componentWillLoad() {
    //   if (this.defaultPickupData) {
    //     const transformedData = this.pickupService.transformDefaultPickupData(this.defaultPickupData);
    //     this.vehicleCapacity = this.pickupService.getNumberOfVehicles(transformedData.selected_option.vehicle.capacity, this.numberOfPersons);
    //     this.allowedOptionsByLocation = calendar_data.pickup_service.allowed_options.filter(option => option.location.id === transformedData.location);
    //     this.pickupData = { ...transformedData };
    //   }
    //   this.pickupSchema = this.pickupService.createPickupSchema(this.bookingDates.from, this.bookingDates.to, {
    //     allowRemoval: this.defaultPickupData !== null,
    //   });
    // }
    // Add this private field
    lastCanSubmit = false;
    handleSubmitPickupChange() {
        const next = this.canSubmitPickup;
        if (next !== this.lastCanSubmit) {
            this.lastCanSubmit = next;
            this.canSubmitPickupChange.emit(next);
        }
    }
    async componentWillLoad() {
        if (this.agent) {
            this.resolvedAgent = this.agent;
        }
        else if (this.booking?.agent) {
            this.resolvedAgent = await this.agentsService.getExposedAgent({ id: this.booking.agent.id });
        }
        if (this.defaultPickupData) {
            const transformedData = this.pickupService.transformDefaultPickupData(this.defaultPickupData);
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(transformedData.selected_option.vehicle.capacity, this.numberOfPersons);
            this.allowedOptionsByLocation = calendar_data.pickup_service.allowed_options.filter(option => option.location.id === transformedData.location);
            this.pickupData = { ...transformedData };
            this.assignee = transformedData.agent ? 'agent' : 'guest';
        }
        else if (isAgentMode(this.resolvedAgent)) {
            this.assignee = 'agent';
        }
        this.pickupSchema = this.pickupService.createPickupSchema(this.bookingDates.from, this.bookingDates.to, { allowRemoval: this.defaultPickupData !== null });
        // initialize canSubmit state for listeners
        this.lastCanSubmit = this.canSubmitPickup;
        this.canSubmitPickupChange.emit(this.lastCanSubmit);
    }
    handleLocationChange(value) {
        if (value === '') {
            this.allowedOptionsByLocation = [];
            this.vehicleCapacity = [];
            this.updatePickupData('location', -1);
            return;
        }
        const numericValue = Number(value);
        this.allowedOptionsByLocation = calendar_data.pickup_service.allowed_options.filter(option => option.location.id === numericValue);
        const locationChoice = this.allowedOptionsByLocation[0];
        if (!locationChoice) {
            this.vehicleCapacity = [];
            this.pickupData = {
                ...this.pickupData,
                location: numericValue,
                selected_option: undefined,
                vehicle_type_code: '',
                number_of_vehicles: 1,
                due_upon_booking: '',
                currency: undefined,
            };
            return;
        }
        this.vehicleCapacity = this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, this.numberOfPersons);
        const due = this.computeDueAmount(locationChoice, this.vehicleCapacity[0]);
        this.pickupData = {
            ...this.pickupData,
            location: numericValue,
            selected_option: locationChoice,
            number_of_vehicles: this.vehicleCapacity[0],
            due_upon_booking: due,
            vehicle_type_code: locationChoice.vehicle.code,
            currency: locationChoice.currency,
        };
    }
    handleVehicleQuantityChange(value) {
        if (!value || Number.isNaN(value) || !this.pickupData.selected_option) {
            return;
        }
        const due = this.computeDueAmount(this.pickupData.selected_option, value);
        this.pickupData = {
            ...this.pickupData,
            number_of_vehicles: value,
            due_upon_booking: due,
        };
    }
    handleVehicleTypeChange(value) {
        if (!value || this.pickupData.location <= 0) {
            return;
        }
        const locationChoice = calendar_data.pickup_service.allowed_options.find(option => option.location.id === this.pickupData.location && option.vehicle.code === value);
        if (!locationChoice) {
            return;
        }
        this.vehicleCapacity = this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, this.numberOfPersons);
        const due = this.computeDueAmount(locationChoice, this.vehicleCapacity[0]);
        this.pickupData = {
            ...this.pickupData,
            selected_option: locationChoice,
            number_of_vehicles: this.vehicleCapacity[0],
            due_upon_booking: due,
            vehicle_type_code: locationChoice.vehicle.code,
            currency: locationChoice.currency,
        };
    }
    computeDueAmount(option, vehicleCount) {
        const due = this.pickupService.updateDue({
            amount: option.amount,
            code: option.pricing_model.code,
            numberOfPersons: this.numberOfPersons,
            number_of_vehicles: vehicleCount,
        });
        return (due ?? 0).toFixed(2);
    }
    updatePickupData(key, value) {
        this.pickupData = { ...this.pickupData, [key]: value };
    }
    async savePickup() {
        if (!this.canSubmitPickup) {
            return;
        }
        try {
            this.isLoading = true;
            this.loadingChange.emit(this.isLoading);
            const isRemoval = this.isRemovalRequest;
            if (!isRemoval) {
                this.autoValidate = true;
                const validationResult = this.pickupService.validateForm(this.pickupData, this.pickupSchema);
                if (!validationResult.success) {
                    return;
                }
            }
            const agent = this.assignee === 'agent' ? this.booking.agent : null;
            await this.pickupService.savePickup({ ...this.pickupData, agent }, this.bookingNumber, isRemoval);
            this.resetBookingEvt.emit(null);
            this.closeModal.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
            this.loadingChange.emit(this.isLoading);
        }
    }
    render() {
        return (h("form", { key: '1a7501a11dd2998114bc77d9829a4050a366274d', id: this.formId, class: "pickup__container", onSubmit: async (e) => {
                e.preventDefault();
                await this.savePickup();
            } }, h("ir-validator", { key: '0449210ada92529cc593a37a8bad6165292588d8', schema: this.pickupSchema.shape.location, autovalidate: this.autoValidate, value: this.pickupData.location, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, h("wa-select", { key: '2d203af539f5562dad8c99296df695f12b20ba8d', size: "small", onchange: e => this.handleLocationChange(e.target.value), defaultValue: this.pickupData.location === -1 ? '' : this.pickupData.location?.toString(), value: this.pickupData.location === -1 ? '' : this.pickupData.location?.toString() }, h("wa-option", { key: 'b7f483c22abce8fe9b9ce97dd89037c39f284432', value: "" }, locales.entries.Lcz_Pickup_NoThankYou), this.pickupService.getAvailableLocations(locales.entries.Lcz_Pickup_YesFrom).map(option => (h("wa-option", { key: `pickup-location-${option.value}`, value: option.value?.toString() }, option.text))))), this.shouldRenderDetails && (h("div", { key: '02a2f93d579a661a511602bf895b509797a6a951', class: "pickup__container", "data-testid": "pickup_body" }, h("ir-validator", { key: '70cc8196c94347cde6122b3ec61aaf0347e6fd99', schema: this.pickupSchema.shape.arrival_date, autovalidate: this.autoValidate, value: this.pickupData.arrival_date ?? '', valueEvent: "dateChanged", blurEvent: "datePickerBlur blur" }, h("ir-custom-date-picker", { key: 'cd5c780a51744acf486187a2c593d75b81cd5a94', date: this.pickupData.arrival_date, minDate: this.bookingDates.from, maxDate: this.bookingDates?.to, emitEmptyDate: true, onDateChanged: evt => {
                this.updatePickupData('arrival_date', evt.detail.start?.format('YYYY-MM-DD') ?? null);
            }, label: locales.entries.Lcz_ArrivalDate })), h("ir-validator", { key: 'fe9f9b886ac2762e5045629ee84fe54942f8199a', schema: this.pickupSchema.shape.arrival_time, autovalidate: this.autoValidate, value: this.pickupData.arrival_time, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: '5d8c54ccc296bde352496ac9ebf5c87312e6ee14', value: this.pickupData.arrival_time, "onText-change": e => {
                this.updatePickupData('arrival_time', e.detail);
            }, mask: 'time', label: locales.entries.Lcz_Time })), h("ir-validator", { key: '25020913a5580ece6adc0a5e3dd10a41f314c222', schema: this.pickupSchema.shape.flight_details, autovalidate: this.autoValidate, value: this.pickupData.flight_details, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: 'df00d2f4a84958091fce9a4185eb1a96d6926f2c', "onText-change": e => this.updatePickupData('flight_details', e.detail), value: this.pickupData.flight_details, label: locales.entries.Lcz_FlightDetails })), h("ir-validator", { key: 'cc52ac72766f670e218c1e83c9783304f9d2bf8a', schema: this.pickupSchema.shape.vehicle_type_code, autovalidate: this.autoValidate, value: this.pickupData.vehicle_type_code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, h("wa-select", { key: '92bf7403c3be682a9491714736548669eaeb2261', size: "small", onchange: e => this.handleVehicleTypeChange(e.target.value), value: this.pickupData.vehicle_type_code, defaultValue: this.pickupData.vehicle_type_code }, this.allowedOptionsByLocation.map(option => (h("wa-option", { value: option.vehicle.code, key: option.vehicle.code }, option.vehicle.description))))), h("ir-validator", { key: 'ddbefa8e2eb737c726d326a1cc691ef5b0bb7863', schema: this.pickupSchema.shape.number_of_vehicles, autovalidate: this.autoValidate, value: this.pickupData.number_of_vehicles, valueEvent: "change wa-change select-change", blurEvent: "wa-hide blur" }, h("wa-select", { key: '6492e1b9a002f9942695718c6523b8658ebf01b7', size: "small", defaultValue: this.pickupData.number_of_vehicles?.toString(), value: this.pickupData.number_of_vehicles?.toString(), label: locales.entries.Lcz_NbrOfVehicles, onchange: e => {
                this.handleVehicleQuantityChange(Number(e.target.value));
            } }, this.vehicleCapacity.map(i => (h("wa-option", { key: `capacity_${i}`, value: i.toString() }, i))))), h("ir-input", { key: 'f44af9e23518f870805c5ca1d16183097e328a6c', mask: 'price', label: `${locales.entries.Lcz_DueUponBooking}`, "onText-change": e => {
                this.pickupData = {
                    ...this.pickupData,
                    due_upon_booking: e.detail,
                };
            }, value: this.pickupData.due_upon_booking }, h("span", { key: 'cc0c7d2e80999c1f201bd4f0af65cfbadcf6eaf5', slot: "start" }, this.pickupData.currency?.symbol)), isAgentMode(this.resolvedAgent) && (h("ir-service-assignee-select", { key: '8405a8ef07053de218dea9705c0d7a5e78938913', agent: this.booking.agent, assigneeType: this.assignee, onAssignmentChange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.assignee = e.detail;
            } }))))));
    }
    static get is() { return "ir-pickup-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-pickup-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-pickup-form.css"]
        };
    }
    static get properties() {
        return {
            "formId": {
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
                "attribute": "form-id",
                "reflect": false
            },
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ name?: string; email?: string; property_id?: any; code?: string; id?: number; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "defaultPickupData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IBookingPickupInfo | null",
                    "resolved": "IBookingPickupInfo",
                    "references": {
                        "IBookingPickupInfo": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IBookingPickupInfo"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "numberOfPersons": {
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
                "attribute": "number-of-persons",
                "reflect": false,
                "defaultValue": "0"
            },
            "bookingNumber": {
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
                "attribute": "booking-number",
                "reflect": false
            },
            "bookingDates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ from: string; to: string }",
                    "resolved": "{ from: string; to: string; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
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
            "isLoading": {},
            "resolvedAgent": {},
            "allowedOptionsByLocation": {},
            "assignee": {},
            "pickupData": {},
            "vehicleCapacity": {},
            "autoValidate": {}
        };
    }
    static get events() {
        return [{
                "method": "closeModal",
                "name": "closeModal",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "canSubmitPickupChange",
                "name": "canSubmitPickupChange",
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
                "method": "loadingChange",
                "name": "loadingChange",
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
                "method": "resetBookingEvt",
                "name": "resetBookingEvt",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "defaultPickupData",
                "methodName": "handleSubmitPickupChange"
            }, {
                "propName": "pickupData",
                "methodName": "handleSubmitPickupChange"
            }];
    }
}
//# sourceMappingURL=ir-pickup-form.js.map
