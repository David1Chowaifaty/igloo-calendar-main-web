'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aeea0adf.js');
const Token = require('./Token-049041c2.js');
const housekeeping_service = require('./housekeeping.service-d1525394.js');
const room_service = require('./room.service-33279e69.js');
const calendarData = require('./calendar-data-2d79fb14.js');
const housekeeping_store = require('./housekeeping.store-7c50c042.js');
require('./axios-6e678d52.js');
require('./locales.store-03c357e0.js');

const irHousekeepingCss = ".sc-ir-housekeeping-h{display:block}";
const IrHousekeepingStyle0 = irHousekeepingCss;

const IrHousekeeping = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.language = '';
        this.ticket = '';
        this.isLoading = false;
        this.roomService = new room_service.RoomService();
        this.houseKeepingService = new housekeeping_service.HouseKeepingService();
        this.token = new Token.Token();
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
            housekeeping_store.updateHKStore('default_properties', { token: this.ticket, property_id: propertyId, language: this.language });
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
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-interceptor", null), index.h("ir-toast", null), index.h("section", { class: "p-1" }, index.h("h4", { class: "mb-2" }, "Housekeeping & Check-In Setup"), index.h("div", { class: "card p-1" }, index.h("ir-title", { borderShown: true, label: "Check-In Mode" }), index.h("div", { class: 'd-flex align-items-center' }, index.h("p", { class: "my-0 py-0 mr-1  " }, "Check in & Check out guests automatically:"), index.h("ir-select", { LabelAvailable: false, showFirstOption: false, selectedValue: calendarData.calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.roomService.SetAutomaticCheckInOut({
                    property_id: this.propertyid,
                    flag: e.detail === 'auto',
                });
            }, data: [
                { text: `Yes, as per the property's policy.`, value: 'auto' },
                { text: 'No, I will do it manually. ', value: 'manual' },
            ] }))), index.h("ir-hk-team", { class: "mb-1" }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHousekeeping.style = IrHousekeepingStyle0;

exports.ir_housekeeping = IrHousekeeping;

//# sourceMappingURL=ir-housekeeping.cjs.entry.js.map