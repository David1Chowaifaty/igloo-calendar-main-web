'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const Token = require('./Token-3d0cc874.js');
const locales_store = require('./locales.store-a1ac5174.js');
const room_service = require('./room.service-e031b11c.js');
const booking_service = require('./booking.service-5970bdb9.js');
require('./axios-6e678d52.js');
require('./index-7564ffa1.js');
require('./calendar-data-960b69ba.js');
require('./index-63734c32.js');
require('./utils-bf9b1b25.js');
require('./moment-1780b03a.js');

const irFinancialActionsCss = ".sc-ir-financial-actions-h{display:block}.financial-actions__meta.sc-ir-financial-actions{display:flex;flex-direction:column;gap:1rem}.daily-revenue__table.sc-ir-financial-actions{flex:1 1 0%}@media (min-width: 768px){.financial-actions__meta.sc-ir-financial-actions{flex-direction:row}}";
const IrFinancialActionsStyle0 = irFinancialActionsCss;

const IrFinancialActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.language = '';
        this.ticket = '';
        this.isPageLoading = true;
        this.tokenService = new Token.Token();
        this.roomService = new room_service.RoomService();
        this.bookingService = new booking_service.BookingService();
        this.handleSidebarClose = (e) => {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.sideBarEvent = null;
        };
    }
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.tokenService.setToken(this.ticket);
        this.initializeApp();
    }
    renderSidebarBody() {
        var _a, _b;
        if (!this.sideBarEvent) {
            return;
        }
        switch (this.sideBarEvent.type) {
            case 'booking':
                return (index.h("ir-booking-details", { slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: this.handleSidebarClose, is_from_front_desk: true, propertyid: this.property_id, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.sideBarEvent.payload.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }));
            case 'payment':
                return (index.h("ir-payment-folio", { bookingNumber: (_b = (_a = this.sideBarEvent.payload) === null || _a === void 0 ? void 0 : _a.bookingNumber) === null || _b === void 0 ? void 0 : _b.toString(), paymentEntries: this.paymentEntries, slot: "sidebar-body", payment: this.sideBarEvent.payload.payment, mode: 'new', onCloseModal: this.handleSidebarClose }));
            default:
                return null;
        }
    }
    handleOpenSidebar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.sideBarEvent = e.detail;
    }
    async getFinancialAction(isExportToExcel = false) {
        console.log(isExportToExcel);
    }
    async initializeApp() {
        this.isPageLoading = true;
        try {
            let propertyId = this.propertyid;
            if (!propertyId && !this.p) {
                throw new Error('Property ID or username is required');
            }
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [
                this.bookingService.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
                this.getFinancialAction(),
                this.roomService.fetchLanguage(this.language),
            ];
            if (propertyId) {
                requests.push(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const [setupEntries] = await Promise.all(requests);
            const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = {
                groups: pay_type_group,
                methods: pay_method,
                types: pay_type,
            };
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    render() {
        var _a, _b, _c;
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, "Payment Actions"), index.h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getFinancialAction(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), index.h("div", { class: "financial-actions__meta" }, index.h("ir-financial-filters", { isLoading: this.isLoading === 'filter' }), index.h("ir-financial-table", { class: 'financial-actions__table card  w-100' }))), index.h("ir-sidebar", { sidebarStyles: {
                width: ((_b = this.sideBarEvent) === null || _b === void 0 ? void 0 : _b.type) === 'booking' ? '80rem' : 'var(--sidebar-width,40rem)',
                background: ((_c = this.sideBarEvent) === null || _c === void 0 ? void 0 : _c.type) === 'booking' ? '#F2F3F8' : 'white',
            }, open: Boolean(this.sideBarEvent), showCloseButton: false, onIrSidebarToggle: this.handleSidebarClose }, this.renderSidebarBody())));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrFinancialActions.style = IrFinancialActionsStyle0;

exports.ir_financial_actions = IrFinancialActions;

//# sourceMappingURL=ir-financial-actions.cjs.entry.js.map