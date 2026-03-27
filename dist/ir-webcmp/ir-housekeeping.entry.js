import { r as registerInstance, a as createEvent, h, e as Host } from './index-7b3961ed.js';
import { T as Token } from './Token-add81d36.js';
import { H as HouseKeepingService } from './housekeeping.service-0ce1e0a7.js';
import { R as RoomService } from './room.service-1f08b13d.js';
import { c as calendar_data } from './calendar-data-cdc01d0d.js';
import { u as updateHKStore } from './housekeeping.store-9565c156.js';
import { l as locales } from './locales.store-daef23cc.js';
import { B as BookingService } from './booking.service-cc6e87c3.js';
import './index-5ba472df.js';
import './index-40c31d5b.js';
import './index-17663a35.js';
import './IBooking-9fbd40d1.js';
import './utils-7eaed9ad.js';
import './moment-ab846cee.js';
import './booking-2b94eb2b.js';

const irHousekeepingCss = ".sc-ir-housekeeping-h{display:block}";

const IrHousekeeping = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toast = createEvent(this, "toast", 7);
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    baseUrl;
    isLoading = false;
    frequencies = [];
    toast;
    roomService = new RoomService();
    houseKeepingService = new HouseKeepingService();
    bookingService = new BookingService();
    token = new Token();
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
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
                    include_sales_rate_plans: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            updateHKStore('default_properties', { token: this.ticket, property_id: propertyId, language: this.language });
            const [frequencies] = await Promise.all([
                this.bookingService.getSetupEntriesByTableName('_HK_FREQUENCY'),
                this.roomService.fetchLanguage(this.language, ['_HK_FRONT', '_PMS_FRONT']),
                this.propertyid &&
                    this.roomService.getExposedProperty({
                        id: propertyId,
                        language: this.language,
                        is_backend: true,
                        include_sales_rate_plans: true,
                    }),
                calendar_data.housekeeping_enabled && this.houseKeepingService.getExposedHKSetup(propertyId),
            ]);
            this.frequencies = frequencies;
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
        return (h(Host, null, h("ir-interceptor", null), h("ir-toast", null), h("section", { class: "ir-page__container" }, h("h3", { class: "page-title" }, locales.entries.Lcz_HouseKeepingAndCheckInSetup), h("ir-hk-operations-card", { frequencies: this.frequencies }), calendar_data.housekeeping_enabled && h("ir-hk-team", null))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHousekeeping.style = irHousekeepingCss;

export { IrHousekeeping as ir_housekeeping };

//# sourceMappingURL=ir-housekeeping.entry.js.map