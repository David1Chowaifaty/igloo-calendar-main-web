import { r as registerInstance, h, H as Host } from './index-b3dce66a.js';
import { T as Token } from './Token-030c78a9.js';
import { l as locales } from './locales.store-f4150353.js';
import { R as RoomService } from './room.service-cbe9248d.js';
import { B as BookingService } from './booking.service-83e35596.js';
import './axios-aa1335b8.js';
import './index-a124d225.js';
import './calendar-data-8a36a1b2.js';
import './index-1e1f097b.js';
import './utils-ebd57799.js';
import './moment-ab846cee.js';

const irFinancialActionsCss = ".sc-ir-financial-actions-h{display:block}.financial-actions__meta.sc-ir-financial-actions{display:flex;flex-direction:column;gap:1rem}.daily-revenue__table.sc-ir-financial-actions{flex:1 1 0%}@media (min-width: 768px){.financial-actions__meta.sc-ir-financial-actions{flex-direction:row}}";
const IrFinancialActionsStyle0 = irFinancialActionsCss;

const IrFinancialActions = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    isLoading;
    isPageLoading = true;
    property_id;
    sideBarEvent;
    tokenService = new Token();
    roomService = new RoomService();
    bookingService = new BookingService();
    paymentEntries;
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
    handleSidebarClose = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.sideBarEvent = null;
    };
    renderSidebarBody() {
        if (!this.sideBarEvent) {
            return;
        }
        switch (this.sideBarEvent.type) {
            case 'booking':
                return (h("ir-booking-details", { slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: this.handleSidebarClose, is_from_front_desk: true, propertyid: this.property_id, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.sideBarEvent.payload.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }));
            case 'payment':
                return (h("ir-payment-folio", { bookingNumber: this.sideBarEvent.payload?.bookingNumber?.toString(), paymentEntries: this.paymentEntries, slot: "sidebar-body", payment: this.sideBarEvent.payload.payment, mode: 'new', onCloseModal: this.handleSidebarClose }));
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
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Payment Actions"), h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales.entries?.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getFinancialAction(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), h("div", { class: "financial-actions__meta" }, h("ir-financial-filters", { isLoading: this.isLoading === 'filter' }), h("ir-financial-table", { class: 'financial-actions__table card  w-100' }))), h("ir-sidebar", { sidebarStyles: {
                width: this.sideBarEvent?.type === 'booking' ? '80rem' : 'var(--sidebar-width,40rem)',
                background: this.sideBarEvent?.type === 'booking' ? '#F2F3F8' : 'white',
            }, open: Boolean(this.sideBarEvent), showCloseButton: false, onIrSidebarToggle: this.handleSidebarClose }, this.renderSidebarBody())));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrFinancialActions.style = IrFinancialActionsStyle0;

export { IrFinancialActions as ir_financial_actions };

//# sourceMappingURL=ir-financial-actions.entry.js.map