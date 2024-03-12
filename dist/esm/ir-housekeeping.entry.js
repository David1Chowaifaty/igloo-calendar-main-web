import { r as registerInstance, h, H as Host } from './index-e7294bf2.js';
import { H as HouseKeepingService, u as updateHKStore } from './housekeeping.service-84d7796a.js';
import { R as RoomService } from './room.service-cb6b79ac.js';
import { a as axios } from './axios-4c36144d.js';
import './Token-692eae02.js';
import './index-7d0cd903.js';
import './calendar-data-f19e562d.js';
import './locales.store-b58ad4e8.js';

const irHousekeepingCss = ".sc-ir-housekeeping-h{display:block}";
const IrHousekeepingStyle0 = irHousekeepingCss;

const IrHousekeeping = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.roomService = new RoomService();
        this.houseKeepingService = new HouseKeepingService();
        this.language = '';
        this.ticket = '';
        this.baseurl = '';
        this.propertyid = undefined;
        this.isLoading = false;
    }
    componentWillLoad() {
        if (this.baseurl) {
            axios.defaults.baseURL = this.baseurl;
        }
        if (this.ticket !== '') {
            this.roomService.setToken(this.ticket);
            this.houseKeepingService.setToken(this.ticket);
            updateHKStore('default_properties', { token: this.ticket, property_id: this.propertyid, language: this.language });
            this.initializeApp();
        }
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.houseKeepingService.getExposedHKSetup(this.propertyid);
    }
    async ticketChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.roomService.setToken(this.ticket);
            this.houseKeepingService.setToken(this.ticket);
            updateHKStore('default_properties', { token: this.ticket, property_id: this.propertyid, language: this.language });
            this.initializeApp();
        }
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            await Promise.all([
                this.houseKeepingService.getExposedHKSetup(this.propertyid),
                this.roomService.fetchData(this.propertyid, this.language),
                this.roomService.fetchLanguage(this.language, ['_HK_FRONT']),
            ]);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-interceptor", null), h("ir-toast", null), h("section", { class: "p-1" }, h("ir-unit-status", { class: "mb-1" }), h("ir-hk-team", { class: "mb-1" }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHousekeeping.style = IrHousekeepingStyle0;

export { IrHousekeeping as ir_housekeeping };

//# sourceMappingURL=ir-housekeeping.entry.js.map