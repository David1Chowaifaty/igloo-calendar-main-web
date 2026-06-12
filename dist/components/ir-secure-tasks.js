import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { P as PropertyService } from './property.service.js';
import { c as calendar_data } from './calendar-data.js';
import { C as checkUserAuthState, D as manageAnchorSession } from './utils.js';
import { d as defineCustomElement$40 } from './igl-application-info2.js';
import { d as defineCustomElement$3$ } from './igl-block-dates-view2.js';
import { d as defineCustomElement$3_ } from './igl-blocked-date-drawer2.js';
import { d as defineCustomElement$3Z } from './igl-booking-event2.js';
import { d as defineCustomElement$3Y } from './igl-booking-event-hover2.js';
import { d as defineCustomElement$3X } from './igl-bulk-block2.js';
import { d as defineCustomElement$3W } from './igl-bulk-operations-drawer2.js';
import { d as defineCustomElement$3V } from './igl-bulk-stop-sale2.js';
import { d as defineCustomElement$3U } from './igl-cal-body2.js';
import { d as defineCustomElement$3T } from './igl-cal-footer2.js';
import { d as defineCustomElement$3S } from './igl-cal-header2.js';
import { d as defineCustomElement$3R } from './igl-hk-issues-dialog2.js';
import { d as defineCustomElement$3Q } from './igl-housekeeping-dialog2.js';
import { d as defineCustomElement$3P } from './igl-legend2.js';
import { d as defineCustomElement$3O } from './igl-rate-extender-drawer2.js';
import { d as defineCustomElement$3N } from './igl-rate-extender-form2.js';
import { d as defineCustomElement$3M } from './igl-rate-plan2.js';
import { d as defineCustomElement$3L } from './igl-reallocation-dialog2.js';
import { d as defineCustomElement$3K } from './igl-room-type2.js';
import { d as defineCustomElement$3J } from './igl-split-booking2.js';
import { d as defineCustomElement$3I } from './igl-tba-booking-view2.js';
import { d as defineCustomElement$3H } from './igl-tba-category-view2.js';
import { d as defineCustomElement$3G } from './igl-to-be-assigned2.js';
import { d as defineCustomElement$3F } from './igloo-calendar2.js';
import { d as defineCustomElement$3E } from './ir-accordion2.js';
import { d as defineCustomElement$3D } from './ir-actions-cell2.js';
import { d as defineCustomElement$3C } from './ir-agent-billing2.js';
import { d as defineCustomElement$3B } from './ir-agent-contract2.js';
import { d as defineCustomElement$3A } from './ir-agent-editor-drawer2.js';
import { d as defineCustomElement$3z } from './ir-agent-editor-form2.js';
import { d as defineCustomElement$3y } from './ir-agent-profile2.js';
import { d as defineCustomElement$3x } from './ir-agents2.js';
import { d as defineCustomElement$3w } from './ir-agents-table2.js';
import { d as defineCustomElement$3v } from './ir-air-date-picker2.js';
import { d as defineCustomElement$3u } from './ir-applicable-policies2.js';
import { d as defineCustomElement$3t } from './ir-arrival-time-cell2.js';
import { d as defineCustomElement$3s } from './ir-arrival-time-dialog2.js';
import { d as defineCustomElement$3r } from './ir-arrivals2.js';
import { d as defineCustomElement$3q } from './ir-arrivals-table2.js';
import { d as defineCustomElement$3p } from './ir-assignment-toggle-dialog2.js';
import { d as defineCustomElement$3o } from './ir-autocomplete2.js';
import { d as defineCustomElement$3n } from './ir-autocomplete-option2.js';
import { d as defineCustomElement$3m } from './ir-balance-cell2.js';
import { d as defineCustomElement$3l } from './ir-billing2.js';
import { d as defineCustomElement$3k } from './ir-billing-drawer2.js';
import { d as defineCustomElement$3j } from './ir-booked-by-cell2.js';
import { d as defineCustomElement$3i } from './ir-booked-on-cell2.js';
import { d as defineCustomElement$3h } from './ir-booking-assign-items2.js';
import { d as defineCustomElement$3g } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$3f } from './ir-booking-city-ledger2.js';
import { d as defineCustomElement$3e } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$3d } from './ir-booking-company-form2.js';
import { d as defineCustomElement$3c } from './ir-booking-details2.js';
import { d as defineCustomElement$3b } from './ir-booking-details-drawer2.js';
import { d as defineCustomElement$3a } from './ir-booking-editor2.js';
import { d as defineCustomElement$39 } from './ir-booking-editor-drawer2.js';
import { d as defineCustomElement$38 } from './ir-booking-editor-form2.js';
import { d as defineCustomElement$37 } from './ir-booking-editor-guest-form2.js';
import { d as defineCustomElement$36 } from './ir-booking-editor-header2.js';
import { d as defineCustomElement$35 } from './ir-booking-email-logs2.js';
import { d as defineCustomElement$34 } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$33 } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$32 } from './ir-booking-header2.js';
import { d as defineCustomElement$31 } from './ir-booking-listing2.js';
import { d as defineCustomElement$30 } from './ir-booking-listing-mobile-card2.js';
import { d as defineCustomElement$2$ } from './ir-booking-listing-table2.js';
import { d as defineCustomElement$2_ } from './ir-booking-number-cell2.js';
import { d as defineCustomElement$2Z } from './ir-booking-pricing-drawer2.js';
import { d as defineCustomElement$2Y } from './ir-booking-pricing-form2.js';
import { d as defineCustomElement$2X } from './ir-booking-rooms2.js';
import { d as defineCustomElement$2W } from './ir-booking-source-editor-dialog2.js';
import { d as defineCustomElement$2V } from './ir-booking-source-editor-form2.js';
import { d as defineCustomElement$2U } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$2T } from './ir-button2.js';
import { d as defineCustomElement$2S } from './ir-channel2.js';
import { d as defineCustomElement$2R } from './ir-channel-editor2.js';
import { d as defineCustomElement$2Q } from './ir-channel-general2.js';
import { d as defineCustomElement$2P } from './ir-channel-header2.js';
import { d as defineCustomElement$2O } from './ir-channel-mapping2.js';
import { d as defineCustomElement$2N } from './ir-checkbox2.js';
import { d as defineCustomElement$2M } from './ir-checkout-dialog2.js';
import { d as defineCustomElement$2L } from './ir-city-ledger2.js';
import { d as defineCustomElement$2K } from './ir-city-ledger-fiscal-documents2.js';
import { d as defineCustomElement$2J } from './ir-city-ledger-fiscal-documents-filters2.js';
import { d as defineCustomElement$2I } from './ir-city-ledger-fiscal-documents-table2.js';
import { d as defineCustomElement$2H } from './ir-city-ledger-folio2.js';
import { d as defineCustomElement$2G } from './ir-city-ledger-folio-filters2.js';
import { d as defineCustomElement$2F } from './ir-city-ledger-folio-table2.js';
import { d as defineCustomElement$2E } from './ir-city-ledger-steatments.js';
import { d as defineCustomElement$2D } from './ir-city-ledger-statements-filter2.js';
import { d as defineCustomElement$2C } from './ir-city-ledger-statements-table2.js';
import { d as defineCustomElement$2B } from './ir-city-ledger-toolbar2.js';
import { d as defineCustomElement$2A } from './ir-city-ledger-transaction-drawer2.js';
import { d as defineCustomElement$2z } from './ir-city-ledger-transaction-form2.js';
import { d as defineCustomElement$2y } from './ir-cl-adjustment-fields2.js';
import { d as defineCustomElement$2x } from './ir-cl-credit-note-fields2.js';
import { d as defineCustomElement$2w } from './ir-cl-debit-note-fields2.js';
import { d as defineCustomElement$2v } from './ir-cl-fiscal-document-preview2.js';
import { d as defineCustomElement$2u } from './ir-cl-invoice-dialog2.js';
import { d as defineCustomElement$2t } from './ir-cl-invoice-form2.js';
import { d as defineCustomElement$2s } from './ir-cl-invoice-select2.js';
import { d as defineCustomElement$2r } from './ir-cl-opening-balance-fields2.js';
import { d as defineCustomElement$2q } from './ir-cl-payment-fields2.js';
import { d as defineCustomElement$2p } from './ir-cl-status-tag2.js';
import { d as defineCustomElement$2o } from './ir-combobox2.js';
import { d as defineCustomElement$2n } from './ir-country-picker2.js';
import { d as defineCustomElement$2m } from './ir-custom-button2.js';
import { d as defineCustomElement$2l } from './ir-custom-date-range2.js';
import { d as defineCustomElement$2k } from './ir-daily-revenue2.js';
import { d as defineCustomElement$2j } from './ir-daily-revenue-filters2.js';
import { d as defineCustomElement$2i } from './ir-date-picker2.js';
import { d as defineCustomElement$2h } from './ir-date-range2.js';
import { d as defineCustomElement$2g } from './ir-date-range-filter2.js';
import { d as defineCustomElement$2f } from './ir-date-select2.js';
import { d as defineCustomElement$2e } from './ir-date-view2.js';
import { d as defineCustomElement$2d } from './ir-dates-cell2.js';
import { d as defineCustomElement$2c } from './ir-departures2.js';
import { d as defineCustomElement$2b } from './ir-departures-table2.js';
import { d as defineCustomElement$2a } from './ir-dialog2.js';
import { d as defineCustomElement$29 } from './ir-drawer2.js';
import { d as defineCustomElement$28 } from './ir-dropdown2.js';
import { d as defineCustomElement$27 } from './ir-dropdown-item2.js';
import { d as defineCustomElement$26 } from './ir-empty-state2.js';
import { d as defineCustomElement$25 } from './ir-events-log2.js';
import { d as defineCustomElement$24 } from './ir-extra-service2.js';
import { d as defineCustomElement$23 } from './ir-extra-service-config2.js';
import { d as defineCustomElement$22 } from './ir-extra-service-config-form2.js';
import { d as defineCustomElement$21 } from './ir-extra-services2.js';
import { d as defineCustomElement$20 } from './ir-fd-confirm-dialog2.js';
import { d as defineCustomElement$1$ } from './ir-filter-card2.js';
import { d as defineCustomElement$1_ } from './ir-filters-panel2.js';
import { d as defineCustomElement$1Z } from './ir-ghs-candidate-table2.js';
import { d as defineCustomElement$1Y } from './ir-ghs-onboarding2.js';
import { d as defineCustomElement$1X } from './ir-ghs-selection-bucket2.js';
import { d as defineCustomElement$1W } from './ir-guest-billing2.js';
import { d as defineCustomElement$1V } from './ir-guest-info-drawer2.js';
import { d as defineCustomElement$1U } from './ir-guest-info-form2.js';
import { d as defineCustomElement$1T } from './ir-guest-name-cell2.js';
import { d as defineCustomElement$1S } from './ir-hk-archive2.js';
import { d as defineCustomElement$1R } from './ir-hk-delete-dialog2.js';
import { d as defineCustomElement$1Q } from './ir-hk-operations-card2.js';
import { d as defineCustomElement$1P } from './ir-hk-tasks2.js';
import { d as defineCustomElement$1O } from './ir-hk-team2.js';
import { d as defineCustomElement$1N } from './ir-hk-unassigned-units2.js';
import { d as defineCustomElement$1M } from './ir-hk-unassigned-units-drawer2.js';
import { d as defineCustomElement$1L } from './ir-hk-unassigned-units-drawer-form2.js';
import { d as defineCustomElement$1K } from './ir-hk-user-drawer2.js';
import { d as defineCustomElement$1J } from './ir-hk-user-drawer-form2.js';
import { d as defineCustomElement$1I } from './ir-hold-transaction-dialog2.js';
import { d as defineCustomElement$1H } from './ir-housekeeping2.js';
import { d as defineCustomElement$1G } from './ir-icon2.js';
import { d as defineCustomElement$1F } from './ir-icons2.js';
import { d as defineCustomElement$1E } from './ir-input2.js';
import { d as defineCustomElement$1D } from './ir-input-cell2.js';
import { d as defineCustomElement$1C } from './ir-input-text2.js';
import { d as defineCustomElement$1B } from './ir-interactive-title2.js';
import { d as defineCustomElement$1A } from './ir-interceptor2.js';
import { d as defineCustomElement$1z } from './ir-invoice2.js';
import { d as defineCustomElement$1y } from './ir-invoice-form2.js';
import { d as defineCustomElement$1x } from './ir-label2.js';
import { d as defineCustomElement$1w } from './ir-listing-header2.js';
import { d as defineCustomElement$1v } from './ir-loading-screen2.js';
import { d as defineCustomElement$1u } from './ir-login2.js';
import { d as defineCustomElement$1t } from './ir-m-combobox2.js';
import { d as defineCustomElement$1s } from './ir-meal-count-summary2.js';
import { d as defineCustomElement$1r } from './ir-meal-guest-list2.js';
import { d as defineCustomElement$1q } from './ir-meal-report2.js';
import { d as defineCustomElement$1p } from './ir-meal-report-filters2.js';
import { d as defineCustomElement$1o } from './ir-metric-card2.js';
import { d as defineCustomElement$1n } from './ir-mobile-input2.js';
import { d as defineCustomElement$1m } from './ir-modal2.js';
import { d as defineCustomElement$1l } from './ir-monthly-bookings-report2.js';
import { d as defineCustomElement$1k } from './ir-monthly-bookings-report-filter2.js';
import { d as defineCustomElement$1j } from './ir-monthly-bookings-report-table2.js';
import { d as defineCustomElement$1i } from './ir-new-badge2.js';
import { d as defineCustomElement$1h } from './ir-option-details2.js';
import { d as defineCustomElement$1g } from './ir-otp2.js';
import { d as defineCustomElement$1f } from './ir-otp-modal2.js';
import { d as defineCustomElement$1e } from './ir-page2.js';
import { d as defineCustomElement$1d } from './ir-pagination2.js';
import { d as defineCustomElement$1c } from './ir-password-validator2.js';
import { d as defineCustomElement$1b } from './ir-payment-details2.js';
import { d as defineCustomElement$1a } from './ir-payment-folio2.js';
import { d as defineCustomElement$19 } from './ir-payment-folio-form2.js';
import { d as defineCustomElement$18 } from './ir-payment-item2.js';
import { d as defineCustomElement$17 } from './ir-payment-option2.js';
import { d as defineCustomElement$16 } from './ir-payment-summary2.js';
import { d as defineCustomElement$15 } from './ir-payments-folio2.js';
import { d as defineCustomElement$14 } from './ir-pdf-viewer2.js';
import { d as defineCustomElement$13 } from './ir-picker2.js';
import { d as defineCustomElement$12 } from './ir-picker-item2.js';
import { d as defineCustomElement$11 } from './ir-pickup2.js';
import { d as defineCustomElement$10 } from './ir-pickup-form2.js';
import { d as defineCustomElement$$ } from './ir-pickup-view2.js';
import { d as defineCustomElement$_ } from './ir-pms-logs2.js';
import { d as defineCustomElement$Z } from './ir-popover2.js';
import { d as defineCustomElement$Y } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$X } from './ir-print-room2.js';
import { d as defineCustomElement$W } from './ir-printing-extra-service2.js';
import { d as defineCustomElement$V } from './ir-printing-label2.js';
import { d as defineCustomElement$U } from './ir-printing-pickup2.js';
import { d as defineCustomElement$T } from './ir-proforma-invoice-preview2.js';
import { d as defineCustomElement$S } from './ir-progress-indicator2.js';
import { d as defineCustomElement$R } from './ir-radio2.js';
import { d as defineCustomElement$Q } from './ir-range-picker2.js';
import { d as defineCustomElement$P } from './ir-reallocation-drawer2.js';
import { d as defineCustomElement$O } from './ir-reallocation-form2.js';
import { d as defineCustomElement$N } from './ir-rectifier2.js';
import { d as defineCustomElement$M } from './ir-reservation-information2.js';
import { d as defineCustomElement$L } from './ir-reset-password2.js';
import { d as defineCustomElement$K } from './ir-revenue-row2.js';
import { d as defineCustomElement$J } from './ir-revenue-row-details2.js';
import { d as defineCustomElement$I } from './ir-revenue-summary2.js';
import { d as defineCustomElement$H } from './ir-revenue-table2.js';
import { d as defineCustomElement$G } from './ir-room2.js';
import { d as defineCustomElement$F } from './ir-room-guests2.js';
import { d as defineCustomElement$E } from './ir-room-guests-form2.js';
import { d as defineCustomElement$D } from './ir-sales-by-channel2.js';
import { d as defineCustomElement$C } from './ir-sales-by-channel-filters2.js';
import { d as defineCustomElement$B } from './ir-sales-by-channel-table2.js';
import { d as defineCustomElement$A } from './ir-sales-by-country2.js';
import { d as defineCustomElement$z } from './ir-sales-by-country-summary2.js';
import { d as defineCustomElement$y } from './ir-sales-filters2.js';
import { d as defineCustomElement$x } from './ir-sales-table2.js';
import { d as defineCustomElement$w } from './ir-select2.js';
import { d as defineCustomElement$v } from './ir-service-assignee-select2.js';
import { d as defineCustomElement$u } from './ir-sidebar2.js';
import { d as defineCustomElement$t } from './ir-spinner2.js';
import { d as defineCustomElement$s } from './ir-stats-card2.js';
import { d as defineCustomElement$r } from './ir-status-activity-cell2.js';
import { d as defineCustomElement$q } from './ir-success-loader2.js';
import { d as defineCustomElement$p } from './ir-switch2.js';
import { d as defineCustomElement$o } from './ir-tasks-card2.js';
import { d as defineCustomElement$n } from './ir-tasks-filters2.js';
import { d as defineCustomElement$m } from './ir-tasks-header2.js';
import { d as defineCustomElement$l } from './ir-tasks-table2.js';
import { d as defineCustomElement$k } from './ir-tasks-table-pagination2.js';
import { d as defineCustomElement$j } from './ir-tax-input2.js';
import { d as defineCustomElement$i } from './ir-tax-service-categories2.js';
import { d as defineCustomElement$h } from './ir-text-editor2.js';
import { d as defineCustomElement$g } from './ir-title2.js';
import { d as defineCustomElement$f } from './ir-toast2.js';
import { d as defineCustomElement$e } from './ir-toast-alert2.js';
import { d as defineCustomElement$d } from './ir-toast-provider2.js';
import { d as defineCustomElement$c } from './ir-tooltip2.js';
import { d as defineCustomElement$b } from './ir-unit-cell2.js';
import { d as defineCustomElement$a } from './ir-unit-tag2.js';
import { d as defineCustomElement$9 } from './ir-user-form-panel2.js';
import { d as defineCustomElement$8 } from './ir-user-form-panel-drawer2.js';
import { d as defineCustomElement$7 } from './ir-user-management2.js';
import { d as defineCustomElement$6 } from './ir-user-management-table2.js';
import { d as defineCustomElement$5 } from './ir-validator2.js';
import { d as defineCustomElement$4 } from './ir-weekday-selector2.js';
import { d as defineCustomElement$3 } from './ota-label2.js';
import { d as defineCustomElement$2 } from './requirement-check2.js';

const irSecureTasksCss = "ir-agents .ir-page__container{gap:var(--wa-space-l, 1.5rem) !important}.ir-page__container,.main__container{height:100%}.secure-header{position:sticky;top:0;z-index:100;display:flex;flex-direction:column}.secure-header__topbar{display:flex;align-items:center;justify-content:space-between;padding:0 var(--wa-space-m, 1rem);height:52px;background:#111827;gap:var(--wa-space-m, 1rem);flex-shrink:0}.secure-header__brand{display:flex;align-items:center;gap:var(--wa-space-xs, 0.375rem);color:#fff;font-weight:700;font-size:var(--wa-font-size-m, 0.9rem);letter-spacing:-0.01em;flex-shrink:0;user-select:none}.secure-header__brand-icon{width:28px;height:28px;border-radius:7px;overflow:hidden;flex-shrink:0;background:white;border-radius:100%;display:flex;align-items:center;justify-content:center}.secure-header__brand-icon img{width:100%;height:100%;object-fit:cover;display:block}.secure-header__brand-name{color:#fff}.secure-header__brand-pill{font-size:0.6rem;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;background:rgba(255, 255, 255, 0.12);border:1px solid rgba(255, 255, 255, 0.18);border-radius:999px;padding:1px 6px;color:rgba(255, 255, 255, 0.6);align-self:center}.secure-header__controls{display:flex;align-items:center;gap:var(--wa-space-s, 0.5rem)}.secure-header__aname-form{margin:0}.secure-header__aname-input{width:200px}.secure-header__aname-save{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border:none;border-radius:999px;background:transparent;cursor:pointer;flex-shrink:0;transition:background 0.15s,\n    color 0.15s;padding:0;font-size:0.8rem}.secure-header__aname-save:hover{background:rgba(255, 255, 255, 0.12)}.secure-header__sep{width:1px;height:22px;background:rgba(255, 255, 255, 0.15);flex-shrink:0}#secure-logout-btn{--wa-button-padding-start:0;--wa-button-padding-end:0;width:30px;height:30px;color:rgba(255, 255, 255, 0.65)}#secure-logout-btn:hover{color:#fff}.secure-header__tabbar{display:flex;align-items:center;background:var(--wa-color-surface-default, #fff);border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);padding:0 var(--wa-space-2xs, 0.25rem);height:44px;flex-shrink:0;gap:2px;box-shadow:0 1px 4px rgba(0, 0, 0, 0.06)}.secure-header__scroll-btn{flex-shrink:0;transition:opacity 0.2s,\n    visibility 0.2s}.secure-header__scroll-btn--hidden{opacity:0;pointer-events:none}.secure-tabs-track{flex:1;overflow-x:auto;scrollbar-width:none}.secure-tabs-track::-webkit-scrollbar{display:none}.secure-tabs{display:flex;align-items:center;list-style:none;padding:0;margin:0;height:100%;gap:1px;white-space:nowrap}.secure-tabs__sep{display:flex;align-items:center;padding:0 var(--wa-space-xs, 0.375rem);flex-shrink:0}.secure-tabs__sep::after{content:'';display:block;width:1px;height:16px;background:var(--wa-color-neutral-border-quiet, #e5e7eb)}.secure-tabs__group-label{font-size:0.62rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--wa-color-text-quiet, #9ca3af);padding:0 var(--wa-space-xs, 0.375rem) 0 var(--wa-space-2xs, 0.25rem);white-space:nowrap;flex-shrink:0;user-select:none}.secure-tabs__item{display:flex;align-items:center;height:100%;flex-shrink:0}.secure-tabs__btn{position:relative;display:inline-flex;align-items:center;height:100%;padding:0 var(--wa-space-s, 0.625rem);border:none;background:transparent;color:var(--wa-color-text-quiet, #6b7280);font-size:var(--wa-font-size-s, 0.8125rem);font-weight:500;font-family:inherit;border-bottom:2px solid transparent;cursor:pointer;white-space:nowrap;transition:color 0.15s,\n    border-color 0.15s,\n    background 0.15s;border-radius:var(--wa-border-radius-s, 4px) var(--wa-border-radius-s, 4px) 0 0;margin-bottom:-1px;}.secure-tabs__btn:hover{color:var(--wa-color-text-normal, #111827);background:var(--wa-color-neutral-fill-quiet, #f3f4f6)}.secure-tabs__btn:focus-visible{outline:2px solid var(--wa-color-brand-border-normal, #3b82f6);outline-offset:-2px}.secure-tabs__btn.active{color:var(--wa-color-brand-fill-loud, #2563eb);font-weight:600}";
const IrSecureTasksStyle0 = irSecureTasksCss;

const IrSecureTasks$1 = /*@__PURE__*/ proxyCustomElement(class IrSecureTasks extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    get el() { return this; }
    propertyid;
    p;
    bookingNumber;
    ticket;
    isAuthenticated = false;
    currentPage = 'front';
    inputValue;
    canScrollLeft = false;
    canScrollRight = true;
    isLoading = true;
    token = new Token();
    dates = {};
    tabsTrackRef;
    resizeObserver;
    async componentWillLoad() {
        const isAuthenticated = checkUserAuthState();
        this.generateDates();
        if (this.ticket) {
            this.isAuthenticated = true;
            this.token.setToken(this.ticket);
        }
        if (isAuthenticated) {
            this.isAuthenticated = true;
            this.token.setToken(isAuthenticated.token);
        }
        this.inputValue = this.p;
        const pageParam = new URLSearchParams(window.location.search).get('page');
        if (pageParam && this.isValidPage(pageParam)) {
            this.currentPage = pageParam;
        }
        if (this.isAuthenticated) {
            await this.resolvePropertyId();
        }
    }
    componentDidLoad() {
        if (this.tabsTrackRef) {
            this.tabsTrackRef.addEventListener('scroll', () => this.updateScrollState(), { passive: true });
            this.resizeObserver = new ResizeObserver(() => this.updateScrollState());
            this.resizeObserver.observe(this.tabsTrackRef);
            this.updateScrollState();
        }
    }
    disconnectedCallback() {
        this.resizeObserver?.disconnect();
    }
    handlePChange() {
        this.inputValue = this.p;
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.isAuthenticated = true;
            this.token.setToken(this.ticket);
        }
    }
    generateDates() {
        const today = new Date();
        today.setDate(today.getDate() - 1);
        const _FROM_DATE = today.toISOString().substring(0, 10);
        today.setDate(today.getDate() + 60);
        const _TO_DATE = today.toISOString().substring(0, 10);
        this.dates = { from_date: _FROM_DATE, to_date: _TO_DATE };
    }
    updateScrollState() {
        if (!this.tabsTrackRef)
            return;
        const { scrollLeft, scrollWidth, clientWidth } = this.tabsTrackRef;
        this.canScrollLeft = scrollLeft > 2;
        this.canScrollRight = scrollLeft + clientWidth < scrollWidth - 2;
    }
    scrollTabs(dir) {
        this.tabsTrackRef?.scrollBy({ left: dir === 'left' ? -240 : 240, behavior: 'smooth' });
    }
    validPages = new Set([
        'hk',
        'tasks',
        'daily-revenue',
        'arrivals',
        'departures',
        'front',
        'users',
        'email-logs',
        'country-sales',
        'daily-occupancy',
        'booking-listing',
        'channel-sales',
        'city-ledger',
        'agents',
        'channels',
        'tax-services',
        'payment-options',
        'meal-report',
        'ghs',
    ]);
    isValidPage(value) {
        return this.validPages.has(value);
    }
    navigateTo(page) {
        this.currentPage = page;
        const url = new URL(window.location.href);
        url.searchParams.set('page', page);
        window.history.pushState({}, '', url);
    }
    routeGroups = [
        {
            routes: [
                { name: 'GHS', value: 'ghs' },
                { name: 'Meal report', value: 'meal-report' },
            ],
        },
        {
            routes: [
                { name: 'Front Desk', value: 'front' },
                { name: 'Arrivals', value: 'arrivals' },
                { name: 'Departures', value: 'departures' },
                { name: 'Tasks', value: 'tasks' },
                { name: 'Housekeeping', value: 'hk' },
            ],
        },
        {
            routes: [
                { name: 'Daily Revenue', value: 'daily-revenue' },
                { name: 'Occupancy', value: 'daily-occupancy' },
                { name: 'Country Sales', value: 'country-sales' },
                { name: 'Channel Sales', value: 'channel-sales' },
                { name: 'Booking Listing', value: 'booking-listing' },
                { name: 'Email Logs', value: 'email-logs' },
            ],
        },
        {
            routes: [
                { name: 'Users', value: 'users' },
                { name: 'Agents', value: 'agents' },
                { name: 'City Ledger', value: 'city-ledger' },
                { name: 'Channels', value: 'channels' },
                { name: 'Tax & Services', value: 'tax-services' },
                { name: 'Payment Options', value: 'payment-options' },
            ],
        },
    ];
    async resolvePropertyId() {
        if (this.propertyid) {
            this.isLoading = false;
        }
        else if (this.p) {
            const propertyService = new PropertyService();
            await propertyService.getExposedProperty({ aname: this.p, id: 42, language: 'en' });
            this.propertyid = calendar_data?.property?.id;
            this.isLoading = false;
        }
    }
    async handleAuthFinish(e) {
        const token = e.detail.token;
        this.token.setToken(token);
        this.isAuthenticated = true;
        manageAnchorSession({ login: { method: 'direct', isLoggedIn: true, token } });
        await this.resolvePropertyId();
    }
    logout() {
        sessionStorage.removeItem('backend_anchor');
        window.location.reload();
    }
    render() {
        if (!this.isAuthenticated)
            return (h(Host, null, h("ir-login", { onAuthFinish: this.handleAuthFinish.bind(this) })));
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h("div", { class: "main__container" }, h("header", { class: "secure-header" }, h("div", { class: "secure-header__topbar" }, h("div", { class: "secure-header__brand" }, h("div", { class: "secure-header__brand-icon" }, h("img", { src: "https://x.igloorooms.com/app-assets/images/portrait/small/avatar-s-19.png", alt: "" })), h("span", { class: "secure-header__brand-name" }, "IglooRooms")), h("div", { class: "secure-header__controls" }, h("form", { class: "secure-header__aname-form", onSubmit: e => {
                e.preventDefault();
                if (this.inputValue) {
                    const url = new URL(window.location.href);
                    url.searchParams.set('aname', this.inputValue);
                    window.history.pushState({}, '', url);
                }
                this.logout();
            } }, h("ir-input", { class: "secure-header__aname-input", size: "small", pill: true, value: this.inputValue, placeholder: "Property", "aria-label": "Property AName", "onText-change": e => (this.inputValue = e.detail) }, h("wa-icon", { slot: "start", name: "building", "aria-hidden": "true" }), h("button", { slot: "end", class: "secure-header__aname-save", type: "submit", "aria-label": "Save property" }, h("wa-icon", { name: "arrow-right" })))), h("div", { class: "secure-header__sep", role: "separator" }), h("wa-tooltip", { for: "secure-logout-btn", placement: "bottom" }, "Sign out"), h("wa-button", { id: "secure-logout-btn", size: "small", appearance: "plain", variant: "neutral", pill: true, "aria-label": "Sign out", onClick: () => this.logout() }, h("wa-icon", { name: "arrow-right-from-bracket" })))), h("nav", { class: "secure-header__tabbar", "aria-label": "Secure screens navigation" }, h("wa-button", { class: `secure-header__scroll-btn${this.canScrollLeft ? '' : ' secure-header__scroll-btn--hidden'}`, size: "small", appearance: "plain", variant: "neutral", pill: true, "aria-label": "Scroll tabs left", tabIndex: -1, onClick: () => this.scrollTabs('left') }, h("wa-icon", { name: "chevron-left" })), h("div", { class: "secure-tabs-track", ref: el => {
                this.tabsTrackRef = el;
            } }, h("ul", { class: "secure-tabs", role: "tablist" }, this.routeGroups.map((group, gi) => [
            gi > 0 && h("li", { class: "secure-tabs__sep", role: "none", "aria-hidden": "true" }),
            ...group.routes.map(route => (h("li", { key: route.value, class: "secure-tabs__item", role: "none" }, h("button", { type: "button", role: "tab", class: { 'secure-tabs__btn': true, 'active': this.currentPage === route.value }, "aria-selected": this.currentPage === route.value ? 'true' : 'false', onClick: () => this.navigateTo(route.value) }, route.name)))),
        ]))), h("wa-button", { class: `secure-header__scroll-btn${this.canScrollRight ? '' : ' secure-header__scroll-btn--hidden'}`, size: "small", appearance: "plain", variant: "neutral", pill: true, "aria-label": "Scroll tabs right", tabIndex: -1, onClick: () => this.scrollTabs('right') }, h("wa-icon", { name: "chevron-right" })))), h("div", { class: "ir-page__container", style: { padding: '0' } }, this.renderPage())));
    }
    renderPage() {
        switch (this.currentPage) {
            case 'front':
                return (h("div", { style: { flex: '1 1 0%', display: 'block' } }, h("igloo-calendar", { currencyName: "USD", propertyid: this.propertyid, p: this.p, ticket: this.token.getToken(), from_date: this.dates.from_date, to_date: this.dates.to_date, language: "en" })));
            case 'arrivals':
                return h("ir-arrivals", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'departures':
                return h("ir-departures", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'tasks':
                return h("ir-hk-tasks", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'hk':
                return h("ir-housekeeping", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'daily-revenue':
                return h("ir-daily-revenue", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'daily-occupancy':
                return h("ir-monthly-bookings-report", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'country-sales':
                return h("ir-sales-by-country", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'channel-sales':
                return h("ir-sales-by-channel", { language: "en", propertyid: this.propertyid.toString(), ticket: this.token.getToken() });
            case 'booking-listing':
                return h("ir-booking-listing", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'email-logs':
                return h("ir-booking-email-logs", { ticket: this.token.getToken() });
            case 'users':
                return h("ir-user-management", { userTypeCode: 5, p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'agents':
                return h("ir-agents", { style: { gap: '1.5rem' }, p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'city-ledger':
                return h("ir-city-ledger", { p: this.p, language: "en", propertyid: this.propertyid, ticket: this.token.getToken() });
            case 'channels':
                return h("ir-channel", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'tax-services':
                return h("ir-tax-service-categories", { p: this.p, propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            case 'payment-options':
                return h("ir-payment-option", { p: this.p, propertyid: this.propertyid.toString(), language: "en", ticket: this.token.getToken() });
            case 'ghs':
                return h("ir-ghs-onboarding", { ticket: this.token.getToken() });
            case 'meal-report':
                return h("ir-meal-report", { propertyid: this.propertyid, language: "en", ticket: this.token.getToken() });
            default:
                return null;
        }
    }
    static get watchers() { return {
        "p": ["handlePChange"],
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrSecureTasksStyle0; }
}, [0, "ir-secure-tasks", {
        "propertyid": [1026],
        "p": [1],
        "bookingNumber": [1, "booking-number"],
        "ticket": [1],
        "isAuthenticated": [32],
        "currentPage": [32],
        "inputValue": [32],
        "canScrollLeft": [32],
        "canScrollRight": [32],
        "isLoading": [32]
    }, undefined, {
        "p": ["handlePChange"],
        "ticket": ["handleTicketChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-secure-tasks", "igl-application-info", "igl-block-dates-view", "igl-blocked-date-drawer", "igl-booking-event", "igl-booking-event-hover", "igl-bulk-block", "igl-bulk-operations-drawer", "igl-bulk-stop-sale", "igl-cal-body", "igl-cal-footer", "igl-cal-header", "igl-hk-issues-dialog", "igl-housekeeping-dialog", "igl-legend", "igl-rate-extender-drawer", "igl-rate-extender-form", "igl-rate-plan", "igl-reallocation-dialog", "igl-room-type", "igl-split-booking", "igl-tba-booking-view", "igl-tba-category-view", "igl-to-be-assigned", "igloo-calendar", "ir-accordion", "ir-actions-cell", "ir-agent-billing", "ir-agent-contract", "ir-agent-editor-drawer", "ir-agent-editor-form", "ir-agent-profile", "ir-agents", "ir-agents-table", "ir-air-date-picker", "ir-applicable-policies", "ir-arrival-time-cell", "ir-arrival-time-dialog", "ir-arrivals", "ir-arrivals-table", "ir-assignment-toggle-dialog", "ir-autocomplete", "ir-autocomplete-option", "ir-balance-cell", "ir-billing", "ir-billing-drawer", "ir-booked-by-cell", "ir-booked-on-cell", "ir-booking-assign-items", "ir-booking-billing-recipient", "ir-booking-city-ledger", "ir-booking-company-dialog", "ir-booking-company-form", "ir-booking-details", "ir-booking-details-drawer", "ir-booking-editor", "ir-booking-editor-drawer", "ir-booking-editor-form", "ir-booking-editor-guest-form", "ir-booking-editor-header", "ir-booking-email-logs", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-booking-listing", "ir-booking-listing-mobile-card", "ir-booking-listing-table", "ir-booking-number-cell", "ir-booking-pricing-drawer", "ir-booking-pricing-form", "ir-booking-rooms", "ir-booking-source-editor-dialog", "ir-booking-source-editor-form", "ir-booking-status-tag", "ir-button", "ir-channel", "ir-channel-editor", "ir-channel-general", "ir-channel-header", "ir-channel-mapping", "ir-checkbox", "ir-checkout-dialog", "ir-city-ledger", "ir-city-ledger-fiscal-documents", "ir-city-ledger-fiscal-documents-filters", "ir-city-ledger-fiscal-documents-table", "ir-city-ledger-folio", "ir-city-ledger-folio-filters", "ir-city-ledger-folio-table", "ir-city-ledger-statements", "ir-city-ledger-statements-filter", "ir-city-ledger-statements-table", "ir-city-ledger-toolbar", "ir-city-ledger-transaction-drawer", "ir-city-ledger-transaction-form", "ir-cl-adjustment-fields", "ir-cl-credit-note-fields", "ir-cl-debit-note-fields", "ir-cl-fiscal-document-preview", "ir-cl-invoice-dialog", "ir-cl-invoice-form", "ir-cl-invoice-select", "ir-cl-opening-balance-fields", "ir-cl-payment-fields", "ir-cl-status-tag", "ir-combobox", "ir-country-picker", "ir-custom-button", "ir-custom-date-range", "ir-daily-revenue", "ir-daily-revenue-filters", "ir-date-picker", "ir-date-range", "ir-date-range-filter", "ir-date-select", "ir-date-view", "ir-dates-cell", "ir-departures", "ir-departures-table", "ir-dialog", "ir-drawer", "ir-dropdown", "ir-dropdown-item", "ir-empty-state", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-service-config-form", "ir-extra-services", "ir-fd-confirm-dialog", "ir-filter-card", "ir-filters-panel", "ir-ghs-candidate-table", "ir-ghs-onboarding", "ir-ghs-selection-bucket", "ir-guest-billing", "ir-guest-info-drawer", "ir-guest-info-form", "ir-guest-name-cell", "ir-hk-archive", "ir-hk-delete-dialog", "ir-hk-operations-card", "ir-hk-tasks", "ir-hk-team", "ir-hk-unassigned-units", "ir-hk-unassigned-units-drawer", "ir-hk-unassigned-units-drawer-form", "ir-hk-user-drawer", "ir-hk-user-drawer-form", "ir-hold-transaction-dialog", "ir-housekeeping", "ir-icon", "ir-icons", "ir-input", "ir-input-cell", "ir-input-text", "ir-interactive-title", "ir-interceptor", "ir-invoice", "ir-invoice-form", "ir-label", "ir-listing-header", "ir-loading-screen", "ir-login", "ir-m-combobox", "ir-meal-count-summary", "ir-meal-guest-list", "ir-meal-report", "ir-meal-report-filters", "ir-metric-card", "ir-mobile-input", "ir-modal", "ir-monthly-bookings-report", "ir-monthly-bookings-report-filter", "ir-monthly-bookings-report-table", "ir-new-badge", "ir-option-details", "ir-otp", "ir-otp-modal", "ir-page", "ir-pagination", "ir-password-validator", "ir-payment-details", "ir-payment-folio", "ir-payment-folio-form", "ir-payment-item", "ir-payment-option", "ir-payment-summary", "ir-payments-folio", "ir-pdf-viewer", "ir-picker", "ir-picker-item", "ir-pickup", "ir-pickup-form", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-preview-screen-dialog", "ir-print-room", "ir-printing-extra-service", "ir-printing-label", "ir-printing-pickup", "ir-proforma-invoice-preview", "ir-progress-indicator", "ir-radio", "ir-range-picker", "ir-reallocation-drawer", "ir-reallocation-form", "ir-rectifier", "ir-reservation-information", "ir-reset-password", "ir-revenue-row", "ir-revenue-row-details", "ir-revenue-summary", "ir-revenue-table", "ir-room", "ir-room-guests", "ir-room-guests-form", "ir-sales-by-channel", "ir-sales-by-channel-filters", "ir-sales-by-channel-table", "ir-sales-by-country", "ir-sales-by-country-summary", "ir-sales-filters", "ir-sales-table", "ir-select", "ir-service-assignee-select", "ir-sidebar", "ir-spinner", "ir-stats-card", "ir-status-activity-cell", "ir-success-loader", "ir-switch", "ir-tasks-card", "ir-tasks-filters", "ir-tasks-header", "ir-tasks-table", "ir-tasks-table-pagination", "ir-tax-input", "ir-tax-service-categories", "ir-text-editor", "ir-title", "ir-toast", "ir-toast-alert", "ir-toast-provider", "ir-tooltip", "ir-unit-cell", "ir-unit-tag", "ir-user-form-panel", "ir-user-form-panel-drawer", "ir-user-management", "ir-user-management-table", "ir-validator", "ir-weekday-selector", "ota-label", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-secure-tasks":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSecureTasks$1);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$40();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$3$();
            }
            break;
        case "igl-blocked-date-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$3_();
            }
            break;
        case "igl-booking-event":
            if (!customElements.get(tagName)) {
                defineCustomElement$3Z();
            }
            break;
        case "igl-booking-event-hover":
            if (!customElements.get(tagName)) {
                defineCustomElement$3Y();
            }
            break;
        case "igl-bulk-block":
            if (!customElements.get(tagName)) {
                defineCustomElement$3X();
            }
            break;
        case "igl-bulk-operations-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$3W();
            }
            break;
        case "igl-bulk-stop-sale":
            if (!customElements.get(tagName)) {
                defineCustomElement$3V();
            }
            break;
        case "igl-cal-body":
            if (!customElements.get(tagName)) {
                defineCustomElement$3U();
            }
            break;
        case "igl-cal-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$3T();
            }
            break;
        case "igl-cal-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$3S();
            }
            break;
        case "igl-hk-issues-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$3R();
            }
            break;
        case "igl-housekeeping-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$3Q();
            }
            break;
        case "igl-legend":
            if (!customElements.get(tagName)) {
                defineCustomElement$3P();
            }
            break;
        case "igl-rate-extender-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$3O();
            }
            break;
        case "igl-rate-extender-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$3N();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$3M();
            }
            break;
        case "igl-reallocation-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$3L();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$3K();
            }
            break;
        case "igl-split-booking":
            if (!customElements.get(tagName)) {
                defineCustomElement$3J();
            }
            break;
        case "igl-tba-booking-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$3I();
            }
            break;
        case "igl-tba-category-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$3H();
            }
            break;
        case "igl-to-be-assigned":
            if (!customElements.get(tagName)) {
                defineCustomElement$3G();
            }
            break;
        case "igloo-calendar":
            if (!customElements.get(tagName)) {
                defineCustomElement$3F();
            }
            break;
        case "ir-accordion":
            if (!customElements.get(tagName)) {
                defineCustomElement$3E();
            }
            break;
        case "ir-actions-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$3D();
            }
            break;
        case "ir-agent-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$3C();
            }
            break;
        case "ir-agent-contract":
            if (!customElements.get(tagName)) {
                defineCustomElement$3B();
            }
            break;
        case "ir-agent-editor-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$3A();
            }
            break;
        case "ir-agent-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$3z();
            }
            break;
        case "ir-agent-profile":
            if (!customElements.get(tagName)) {
                defineCustomElement$3y();
            }
            break;
        case "ir-agents":
            if (!customElements.get(tagName)) {
                defineCustomElement$3x();
            }
            break;
        case "ir-agents-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$3w();
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$3v();
            }
            break;
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                defineCustomElement$3u();
            }
            break;
        case "ir-arrival-time-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$3t();
            }
            break;
        case "ir-arrival-time-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$3s();
            }
            break;
        case "ir-arrivals":
            if (!customElements.get(tagName)) {
                defineCustomElement$3r();
            }
            break;
        case "ir-arrivals-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$3q();
            }
            break;
        case "ir-assignment-toggle-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$3p();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$3o();
            }
            break;
        case "ir-autocomplete-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$3n();
            }
            break;
        case "ir-balance-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$3m();
            }
            break;
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$3l();
            }
            break;
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$3k();
            }
            break;
        case "ir-booked-by-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$3j();
            }
            break;
        case "ir-booked-on-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$3i();
            }
            break;
        case "ir-booking-assign-items":
            if (!customElements.get(tagName)) {
                defineCustomElement$3h();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$3g();
            }
            break;
        case "ir-booking-city-ledger":
            if (!customElements.get(tagName)) {
                defineCustomElement$3f();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$3e();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$3d();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$3c();
            }
            break;
        case "ir-booking-details-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$3b();
            }
            break;
        case "ir-booking-editor":
            if (!customElements.get(tagName)) {
                defineCustomElement$3a();
            }
            break;
        case "ir-booking-editor-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$39();
            }
            break;
        case "ir-booking-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$38();
            }
            break;
        case "ir-booking-editor-guest-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$37();
            }
            break;
        case "ir-booking-editor-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$36();
            }
            break;
        case "ir-booking-email-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$35();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$34();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$33();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$32();
            }
            break;
        case "ir-booking-listing":
            if (!customElements.get(tagName)) {
                defineCustomElement$31();
            }
            break;
        case "ir-booking-listing-mobile-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$30();
            }
            break;
        case "ir-booking-listing-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$2$();
            }
            break;
        case "ir-booking-number-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$2_();
            }
            break;
        case "ir-booking-pricing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$2Z();
            }
            break;
        case "ir-booking-pricing-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$2Y();
            }
            break;
        case "ir-booking-rooms":
            if (!customElements.get(tagName)) {
                defineCustomElement$2X();
            }
            break;
        case "ir-booking-source-editor-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2W();
            }
            break;
        case "ir-booking-source-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$2V();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$2U();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2T();
            }
            break;
        case "ir-channel":
            if (!customElements.get(tagName)) {
                defineCustomElement$2S();
            }
            break;
        case "ir-channel-editor":
            if (!customElements.get(tagName)) {
                defineCustomElement$2R();
            }
            break;
        case "ir-channel-general":
            if (!customElements.get(tagName)) {
                defineCustomElement$2Q();
            }
            break;
        case "ir-channel-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$2P();
            }
            break;
        case "ir-channel-mapping":
            if (!customElements.get(tagName)) {
                defineCustomElement$2O();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$2N();
            }
            break;
        case "ir-checkout-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2M();
            }
            break;
        case "ir-city-ledger":
            if (!customElements.get(tagName)) {
                defineCustomElement$2L();
            }
            break;
        case "ir-city-ledger-fiscal-documents":
            if (!customElements.get(tagName)) {
                defineCustomElement$2K();
            }
            break;
        case "ir-city-ledger-fiscal-documents-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$2J();
            }
            break;
        case "ir-city-ledger-fiscal-documents-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$2I();
            }
            break;
        case "ir-city-ledger-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$2H();
            }
            break;
        case "ir-city-ledger-folio-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$2G();
            }
            break;
        case "ir-city-ledger-folio-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$2F();
            }
            break;
        case "ir-city-ledger-statements":
            if (!customElements.get(tagName)) {
                defineCustomElement$2E();
            }
            break;
        case "ir-city-ledger-statements-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$2D();
            }
            break;
        case "ir-city-ledger-statements-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$2C();
            }
            break;
        case "ir-city-ledger-toolbar":
            if (!customElements.get(tagName)) {
                defineCustomElement$2B();
            }
            break;
        case "ir-city-ledger-transaction-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$2A();
            }
            break;
        case "ir-city-ledger-transaction-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$2z();
            }
            break;
        case "ir-cl-adjustment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$2y();
            }
            break;
        case "ir-cl-credit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$2x();
            }
            break;
        case "ir-cl-debit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$2w();
            }
            break;
        case "ir-cl-fiscal-document-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$2v();
            }
            break;
        case "ir-cl-invoice-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2u();
            }
            break;
        case "ir-cl-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$2t();
            }
            break;
        case "ir-cl-invoice-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2s();
            }
            break;
        case "ir-cl-opening-balance-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$2r();
            }
            break;
        case "ir-cl-payment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$2q();
            }
            break;
        case "ir-cl-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$2p();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$2o();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$2n();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2m();
            }
            break;
        case "ir-custom-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$2l();
            }
            break;
        case "ir-daily-revenue":
            if (!customElements.get(tagName)) {
                defineCustomElement$2k();
            }
            break;
        case "ir-daily-revenue-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$2j();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$2i();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$2h();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$2g();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2f();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$2e();
            }
            break;
        case "ir-dates-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$2d();
            }
            break;
        case "ir-departures":
            if (!customElements.get(tagName)) {
                defineCustomElement$2c();
            }
            break;
        case "ir-departures-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$2b();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2a();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$29();
            }
            break;
        case "ir-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$28();
            }
            break;
        case "ir-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$27();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$26();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$25();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$24();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$23();
            }
            break;
        case "ir-extra-service-config-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$22();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$21();
            }
            break;
        case "ir-fd-confirm-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$20();
            }
            break;
        case "ir-filter-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$1$();
            }
            break;
        case "ir-filters-panel":
            if (!customElements.get(tagName)) {
                defineCustomElement$1_();
            }
            break;
        case "ir-ghs-candidate-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$1Z();
            }
            break;
        case "ir-ghs-onboarding":
            if (!customElements.get(tagName)) {
                defineCustomElement$1Y();
            }
            break;
        case "ir-ghs-selection-bucket":
            if (!customElements.get(tagName)) {
                defineCustomElement$1X();
            }
            break;
        case "ir-guest-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$1W();
            }
            break;
        case "ir-guest-info-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1V();
            }
            break;
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1U();
            }
            break;
        case "ir-guest-name-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$1T();
            }
            break;
        case "ir-hk-archive":
            if (!customElements.get(tagName)) {
                defineCustomElement$1S();
            }
            break;
        case "ir-hk-delete-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1R();
            }
            break;
        case "ir-hk-operations-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$1Q();
            }
            break;
        case "ir-hk-tasks":
            if (!customElements.get(tagName)) {
                defineCustomElement$1P();
            }
            break;
        case "ir-hk-team":
            if (!customElements.get(tagName)) {
                defineCustomElement$1O();
            }
            break;
        case "ir-hk-unassigned-units":
            if (!customElements.get(tagName)) {
                defineCustomElement$1N();
            }
            break;
        case "ir-hk-unassigned-units-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1M();
            }
            break;
        case "ir-hk-unassigned-units-drawer-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1L();
            }
            break;
        case "ir-hk-user-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1K();
            }
            break;
        case "ir-hk-user-drawer-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1J();
            }
            break;
        case "ir-hold-transaction-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1I();
            }
            break;
        case "ir-housekeeping":
            if (!customElements.get(tagName)) {
                defineCustomElement$1H();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1G();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1F();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1E();
            }
            break;
        case "ir-input-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$1D();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$1C();
            }
            break;
        case "ir-interactive-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$1B();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$1A();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$1z();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1y();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1x();
            }
            break;
        case "ir-listing-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1w();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$1v();
            }
            break;
        case "ir-login":
            if (!customElements.get(tagName)) {
                defineCustomElement$1u();
            }
            break;
        case "ir-m-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$1t();
            }
            break;
        case "ir-meal-count-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$1s();
            }
            break;
        case "ir-meal-guest-list":
            if (!customElements.get(tagName)) {
                defineCustomElement$1r();
            }
            break;
        case "ir-meal-report":
            if (!customElements.get(tagName)) {
                defineCustomElement$1q();
            }
            break;
        case "ir-meal-report-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$1p();
            }
            break;
        case "ir-metric-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$1o();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1n();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$1m();
            }
            break;
        case "ir-monthly-bookings-report":
            if (!customElements.get(tagName)) {
                defineCustomElement$1l();
            }
            break;
        case "ir-monthly-bookings-report-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$1k();
            }
            break;
        case "ir-monthly-bookings-report-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$1j();
            }
            break;
        case "ir-new-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$1i();
            }
            break;
        case "ir-option-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$1h();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$1g();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$1f();
            }
            break;
        case "ir-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$1e();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$1d();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1c();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$1b();
            }
            break;
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$1a();
            }
            break;
        case "ir-payment-folio-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$19();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$18();
            }
            break;
        case "ir-payment-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$17();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "ir-pdf-viewer":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "ir-pickup-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-print-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-printing-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-printing-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-proforma-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-progress-indicator":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-radio":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-reallocation-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-reallocation-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-rectifier":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-reset-password":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-revenue-row":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-revenue-row-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-revenue-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-revenue-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-room-guests-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-sales-by-channel":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-sales-by-channel-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-sales-by-channel-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-sales-by-country":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-sales-by-country-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-sales-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-sales-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-service-assignee-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-stats-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-status-activity-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-success-loader":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-switch":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-tasks-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-tasks-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-tasks-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-tasks-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-tasks-table-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-tax-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-tax-service-categories":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-text-editor":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-unit-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-user-form-panel":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-user-form-panel-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-user-management":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-user-management-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-weekday-selector":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ota-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "requirement-check":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrSecureTasks = IrSecureTasks$1;
const defineCustomElement = defineCustomElement$1;

export { IrSecureTasks, defineCustomElement };

//# sourceMappingURL=ir-secure-tasks.js.map