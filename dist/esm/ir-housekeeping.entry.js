import { r as registerInstance, c as createEvent, h, H as Host } from './index-1d2aa5ad.js';
import { T as Token } from './Token-acf5fbad.js';
import { H as HouseKeepingService, u as updateHKStore } from './housekeeping.service-3517d93a.js';
import { R as RoomService } from './room.service-7d6a9238.js';
import { c as calendar_data } from './calendar-data-e1b88280.js';
import './axios-aa1335b8.js';
import './index-e42e9935.js';
import './locales.store-95a78d6b.js';

const irHousekeepingCss = ".sc-ir-housekeeping-h{display:block}";
const IrHousekeepingStyle0 = irHousekeepingCss;

const IrHousekeeping = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toast = createEvent(this, "toast", 7);
        this.language = '';
        this.ticket = '';
        this.isLoading = false;
        this.roomService = new RoomService();
        this.houseKeepingService = new HouseKeepingService();
        this.token = new Token();
    }
    componentWillLoad() {
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.houseKeepingService.getExposedHKSetup(this.propertyid);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            updateHKStore('default_properties', { token: this.ticket, property_id: propertyId, language: this.language });
            const requests = [this.houseKeepingService.getExposedHKSetup(propertyId), this.roomService.fetchLanguage(this.language, ['_HK_FRONT'])];
            if (this.propertyid) {
                requests.unshift(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: this.language,
                    is_backend: true,
                }));
            }
            await Promise.all(requests);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    saveAutomaticCheckInCheckout(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            this.roomService.SetAutomaticCheckInOut({
                property_id: this.propertyid,
                flag: e.detail === 'auto',
            });
            this.toast.emit({
                position: 'top-right',
                title: 'Saved Successfully',
                description: '',
                type: 'success',
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-interceptor", null), h("ir-toast", null), h("section", { class: "p-1" }, h("h3", { class: "mb-2" }, "Housekeeping & Check-In Setup"), h("div", { class: "card p-1" }, h("ir-title", { borderShown: true, label: "Check-In Mode" }), h("div", { class: 'd-flex align-items-center' }, h("p", { class: "my-0 py-0 mr-1  " }, "Check in & Check out guests automatically:"), h("ir-select", { LabelAvailable: false, showFirstOption: false, selectedValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onSelectChange: e => this.saveAutomaticCheckInCheckout(e), data: [
                { text: `Yes, as per the property's policy.`, value: 'auto' },
                { text: 'No, I will do it manually. ', value: 'manual' },
            ] }))), h("ir-hk-team", { class: "mb-1" }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHousekeeping.style = IrHousekeepingStyle0;

export { IrHousekeeping as ir_housekeeping };

//# sourceMappingURL=ir-housekeeping.entry.js.map