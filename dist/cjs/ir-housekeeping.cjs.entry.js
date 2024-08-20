'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const housekeeping_service = require('./housekeeping.service-3b7be8f4.js');
const room_service = require('./room.service-f03156c9.js');
const axios = require('./axios-b86c5465.js');
require('./Token-c9908564.js');
require('./index-5e99a1fe.js');
require('./calendar-data-fbe7f62b.js');
require('./locales.store-4301bbe8.js');

const irHousekeepingCss = ".sc-ir-housekeeping-h{display:block}";
const IrHousekeepingStyle0 = irHousekeepingCss;

const IrHousekeeping = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.roomService = new room_service.RoomService();
        this.houseKeepingService = new housekeeping_service.HouseKeepingService();
        this.language = '';
        this.ticket = '';
        this.baseurl = '';
        this.propertyid = undefined;
        this.isLoading = false;
    }
    componentWillLoad() {
        if (this.baseurl) {
            axios.axios.defaults.baseURL = this.baseurl;
        }
        if (this.ticket !== '') {
            this.roomService.setToken(this.ticket);
            this.houseKeepingService.setToken(this.ticket);
            housekeeping_service.updateHKStore('default_properties', { token: this.ticket, property_id: this.propertyid, language: this.language });
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
            housekeeping_service.updateHKStore('default_properties', { token: this.ticket, property_id: this.propertyid, language: this.language });
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
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-interceptor", null), index.h("ir-toast", null), index.h("section", { class: "p-1" }, index.h("ir-unit-status", { class: "mb-1" }), index.h("ir-hk-team", { class: "mb-1" }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHousekeeping.style = IrHousekeepingStyle0;

exports.ir_housekeeping = IrHousekeeping;

//# sourceMappingURL=ir-housekeeping.cjs.entry.js.map