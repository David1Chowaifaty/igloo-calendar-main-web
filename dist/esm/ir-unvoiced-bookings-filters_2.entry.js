import { r as registerInstance, c as createEvent, h } from './index-CeHdrJeH.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { u as updateUninvoicedBookingsFilters, a as uninvoiced_bookings, s as setUninvoicedBookingsTablePage, b as setUninvoicedBookingsTablePageSize } from './uninvoiced_bookings.store-wJitnhQC.js';
import { t } from './t-CHjay2ar.js';
import { b as formatCount, f as formatAmount } from './number-2X31jLIQ.js';
import { c as createColumnHelper, u as useTable, f as flexRender, a as getCoreRowModel } from './useTable-D3LS_BXH.js';
import './locales.store-CXJn6ls-.js';
import './ir-date-2sKX7m-4.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irUnvoicedBookingsFiltersCss = () => `.sc-ir-unvoiced-bookings-filters-h{display:block}.uninvoiced-bookings-filters.sc-ir-unvoiced-bookings-filters{display:flex;align-items:center;gap:0.5rem}.uninvoiced-bookings-filters__date-picker.sc-ir-unvoiced-bookings-filters{width:100%}.uninvoiced-bookings-group.sc-ir-unvoiced-bookings-filters{display:flex;align-items:center;gap:0.5rem}wa-select.sc-ir-unvoiced-bookings-filters{min-width:12rem;flex:1}@media (max-width: 767px){.uninvoiced-bookings-filters.sc-ir-unvoiced-bookings-filters{align-items:stretch;flex-direction:column}}@media (min-width: 768px){.uninvoiced-bookings-filters__date-picker.sc-ir-unvoiced-bookings-filters{max-width:350px}}@media (min-width: 1024px){.sc-ir-unvoiced-bookings-filters-h{width:var(--max-screen-width);margin-inline:auto}}`;

const IrUnvoicedBookingsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uninvoicedBookingsFiltersChange = createEvent(this, "uninvoicedBookingsFiltersChange");
    }
    uninvoicedBookingsFiltersChange;
    get quickDates() {
        return [7, 14, 30, 90].map(days => ({
            label: t('Lcz_DaysAgo', { fallback: '%1 Days Ago', params: [formatCount(days)] }),
            getDate: () => hooks().subtract(days, 'days'),
        }));
    }
    handleDatesChanged = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { from, to } = e.detail;
        if (!from || !to) {
            return;
        }
        updateUninvoicedBookingsFilters({ from, to });
    };
    handleSourceChanged = (e) => {
        updateUninvoicedBookingsFilters({ source: e.target.value });
    };
    handleSearch = () => {
        this.uninvoicedBookingsFiltersChange.emit({
            from: uninvoiced_bookings.filters.from,
            to: uninvoiced_bookings.filters.to,
            source: uninvoiced_bookings.filters.source,
        });
    };
    render() {
        return (h("div", { key: '0790fcecc4e9410516da48649ae181f988f11de3', class: "uninvoiced-bookings-filters" }, h("ir-date-range-filter", { key: '755e489b229f5d87cbd2cd4dab014bb8d5a41a20', class: "uninvoiced-bookings-filters__date-picker", fromDate: uninvoiced_bookings.filters.from, toDate: uninvoiced_bookings.filters.to, maxDate: hooks().format('YYYY-MM-DD'), showQuickActions: true, quickDates: this.quickDates, quickDatesMode: "range", withClear: false, selectionMode: "auto", onDatesChanged: this.handleDatesChanged }), h("div", { key: '640aaceff292b05588199b887c210efe67d80ce6', class: "uninvoiced-bookings-group" }, h("wa-select", { key: '57f97f78551bd55eed0fdef6659e015a2831a847', onchange: this.handleSourceChanged, value: uninvoiced_bookings.filters.source, size: "s" }, h("wa-option", { key: '1ac19638864db981b9df07b1f7c59583325926d8', value: "" }, t('Lcz_AllChannels', { fallback: 'All channels' })), uninvoiced_bookings.channels.map(channel => (h("wa-option", { key: channel.value, value: channel.value }, channel.name)))), h("ir-custom-button", { key: '016ab9fa242a817c6235a928e02389a98379e015', id: "uninvoiced-bookings-search-btn", loading: uninvoiced_bookings.isLoading, disabled: uninvoiced_bookings.isLoading, onClickHandler: this.handleSearch, variant: "neutral", appearance: "outlined" }, h("wa-icon", { key: 'a5d33eb3e6a9ce5166ad7a3fce860f0df9e79442', name: "magnifying-glass" }))), h("wa-tooltip", { key: '56cc65e73a48a171407aa8158bbcbcf6935bbd26', for: "uninvoiced-bookings-search-btn" }, t('Lcz_Search', { fallback: 'Search' }))));
    }
};
IrUnvoicedBookingsFilters.style = irUnvoicedBookingsFiltersCss();

const irUnvoicedBookingsTableCss = () => `.sc-ir-unvoiced-bookings-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-unvoiced-bookings-table{overflow-x:auto}.table--container.sc-ir-unvoiced-bookings-table,.data-table.sc-ir-unvoiced-bookings-table{height:100%}.ir-table-row.sc-ir-unvoiced-bookings-table td.sc-ir-unvoiced-bookings-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-unvoiced-bookings-table td.sc-ir-unvoiced-bookings-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-unvoiced-bookings-table tbody.sc-ir-unvoiced-bookings-table tr.sc-ir-unvoiced-bookings-table:last-child>td.sc-ir-unvoiced-bookings-table{border-bottom:0 !important}.cell--align-start.sc-ir-unvoiced-bookings-table{text-align:start !important}.cell--align-center.sc-ir-unvoiced-bookings-table{text-align:center !important}.cell--align-end.sc-ir-unvoiced-bookings-table{text-align:end !important}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sc-ir-unvoiced-bookings-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sc-ir-unvoiced-bookings-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-unvoiced-bookings-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-unvoiced-bookings-table,.ir-table-row.sc-ir-unvoiced-bookings-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-unvoiced-bookings-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sortable.sc-ir-unvoiced-bookings-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sortable.sc-ir-unvoiced-bookings-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sortable.sc-ir-unvoiced-bookings-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-unvoiced-bookings-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-unvoiced-bookings-table svg.sc-ir-unvoiced-bookings-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-unvoiced-bookings-table:hover td.sc-ir-unvoiced-bookings-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-unvoiced-bookings-table:hover td.sc-ir-unvoiced-bookings-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-unvoiced-bookings-table:active td.sc-ir-unvoiced-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-unvoiced-bookings-table td.sc-ir-unvoiced-bookings-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-unvoiced-bookings-table:hover td.sc-ir-unvoiced-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-unvoiced-bookings-table:active td.sc-ir-unvoiced-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-unvoiced-bookings-table .empty-row.sc-ir-unvoiced-bookings-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-unvoiced-bookings-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-unvoiced-bookings-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}.sc-ir-unvoiced-bookings-table-h{display:block}.uninvoiced-bookings-table.sc-ir-unvoiced-bookings-table{display:flex;flex-direction:column;border-radius:0.75rem;overflow:hidden;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);background-color:var(--wa-color-surface-default, #fff)}.table--container.sc-ir-unvoiced-bookings-table{overflow-x:auto}.uninvoiced-bookings-table__booking-nbr-cell.sc-ir-unvoiced-bookings-table::part(booking-reference),.uninvoiced-bookings-table__booking-nbr-cell.sc-ir-unvoiced-bookings-table [part~="booking-reference"]{display:none}.uninvoiced-bookings__dates-cell.sc-ir-unvoiced-bookings-table::part(checkin-container),.uninvoiced-bookings__dates-cell.sc-ir-unvoiced-bookings-table [part~="checkin-container"]{display:none}.uninvoiced-bookings-table__pagination.sc-ir-unvoiced-bookings-table{padding:0.5rem 1rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.uninvoiced-bookings-table__booking-nbr-cell.sc-ir-unvoiced-bookings-table::part(container),.uninvoiced-bookings-table__booking-nbr-cell.sc-ir-unvoiced-bookings-table [part~="container"]{display:flex;align-items:center;flex-direction:row-reverse;gap:0.5rem}.uninvoiced-bookings__services.sc-ir-unvoiced-bookings-table{padding:0;margin:0}@media (min-width: 1024px){.sc-ir-unvoiced-bookings-table-h{max-width:var(--max-screen-width);margin-inline:auto}.table--container.sc-ir-unvoiced-bookings-table{min-width:var(--max-screen-width)}}`;

const tableCss = () => `.sc-ir-unvoiced-bookings-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-unvoiced-bookings-table{overflow-x:auto}.table--container.sc-ir-unvoiced-bookings-table,.data-table.sc-ir-unvoiced-bookings-table{height:100%}.ir-table-row.sc-ir-unvoiced-bookings-table td.sc-ir-unvoiced-bookings-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-unvoiced-bookings-table td.sc-ir-unvoiced-bookings-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-unvoiced-bookings-table tbody.sc-ir-unvoiced-bookings-table tr.sc-ir-unvoiced-bookings-table:last-child>td.sc-ir-unvoiced-bookings-table{border-bottom:0 !important}.cell--align-start.sc-ir-unvoiced-bookings-table{text-align:start !important}.cell--align-center.sc-ir-unvoiced-bookings-table{text-align:center !important}.cell--align-end.sc-ir-unvoiced-bookings-table{text-align:end !important}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sc-ir-unvoiced-bookings-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sc-ir-unvoiced-bookings-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-unvoiced-bookings-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-unvoiced-bookings-table,.ir-table-row.sc-ir-unvoiced-bookings-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-unvoiced-bookings-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sortable.sc-ir-unvoiced-bookings-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sortable.sc-ir-unvoiced-bookings-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sortable.sc-ir-unvoiced-bookings-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-unvoiced-bookings-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-unvoiced-bookings-table svg.sc-ir-unvoiced-bookings-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-unvoiced-bookings-table:hover td.sc-ir-unvoiced-bookings-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-unvoiced-bookings-table:hover td.sc-ir-unvoiced-bookings-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-unvoiced-bookings-table:active td.sc-ir-unvoiced-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-unvoiced-bookings-table td.sc-ir-unvoiced-bookings-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-unvoiced-bookings-table:hover td.sc-ir-unvoiced-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-unvoiced-bookings-table:active td.sc-ir-unvoiced-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-unvoiced-bookings-table .empty-row.sc-ir-unvoiced-bookings-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-unvoiced-bookings-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-unvoiced-bookings-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrUnvoicedBookingsTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uninvoicedBookingsPageChange = createEvent(this, "uninvoicedBookingsPageChange");
    }
    uninvoicedBookingsPageChange;
    pageSizes = [20, 50, 100];
    columnHelper = createColumnHelper();
    columns = [
        this.columnHelper.display({
            id: 'booking',
            header: t('Lcz_BookingHash', { fallback: 'Booking#' }),
            cell: info => {
                const booking = info.row.original.raw;
                return (h("ir-booking-number-cell", { class: "uninvoiced-bookings-table__booking-nbr-cell", origin: booking.origin, source: booking.source, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr }));
            },
        }),
        this.columnHelper.display({
            id: 'booked_by',
            header: t('Lcz_BookedBy', { fallback: 'Booked by' }),
            cell: info => {
                const row = info.row.original;
                const booking = row.raw;
                return (h("ir-booked-by-cell", { class: "text-center", clickableGuest: true, showRepeatGuestBadge: false, guest: booking.guest, identifier: booking.booking_nbr, showContactIcons: false, showPersons: true, showPrivateNoteDot: false, totalPersons: row.totalGuests?.toString(), showPromoIcon: false, promoKey: booking.promo_key, showLoyaltyIcon: false }));
            },
        }),
        this.columnHelper.display({
            id: 'dates',
            header: t('Lcz_EndDate', { fallback: 'End date' }),
            cell: info => {
                const booking = info.row.original.raw;
                return h("ir-dates-cell", { class: "uninvoiced-bookings__dates-cell", checkIn: booking.from_date, checkOut: booking.to_date });
            },
        }),
        this.columnHelper.display({
            id: 'services',
            header: t('Lcz_Services', { fallback: 'Services' }),
            cell: info => {
                const booking = info.row.original.raw;
                const invoicableUnits = booking.invoice_info?.invoiceable_items?.filter(item => item.is_invoiceable && item.type === 'BSA')?.length;
                const invoicableServices = booking.invoice_info?.invoiceable_items?.filter(item => item.is_invoiceable && ['BSP', 'BSE'].includes(item.type))?.length;
                const invoicableCancellation = booking.invoice_info?.invoiceable_items?.filter(item => item.is_invoiceable && item.type === 'PAYMENT')?.length;
                // const roomsLength = row.raw.rooms?.length;
                return (h("div", null, !!invoicableUnits && h("p", { class: "uninvoiced-bookings__services" }, t('Lcz_UnitCount', { fallback: '%1 unit(s)', params: [formatCount(invoicableUnits)] })), !!invoicableServices && (h("p", { class: "uninvoiced-bookings__services" }, t('Lcz_ExtraServiceCount', { fallback: '%1 extra service(s)', params: [formatCount(invoicableServices)] }))), !!invoicableCancellation && h("p", { class: "uninvoiced-bookings__services" }, t('Lcz_CancellationFee', { fallback: 'Cancellation fee' }))));
            },
        }),
        this.columnHelper.display({
            id: 'status',
            header: t('Lcz_Status', { fallback: 'Status' }),
            cell: info => {
                const booking = info.row.original.raw;
                const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
                return (h("ir-status-activity-cell", { lastManipulation: lastManipulation, showManipulationBadge: !!lastManipulation, showModifiedBadge: !lastManipulation && booking.events?.length > 0 && booking.events[0].type.toLowerCase() === 'modified', status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr }));
            },
        }),
        // this.columnHelper.accessor('totalGuestAmount', {
        //   id: 'totalGuestAmount',
        //   header: 'Total guest sum',
        //   cell: info => formatAmount(info.row.original.currencySymbol, info.getValue()),
        // }),
        this.columnHelper.accessor('uninvoicedGuestAmount', {
            id: 'uninvoicedGuestAmount',
            header: t('Lcz_UninvoicedGuestAmount', { fallback: 'Uninvoiced guest amount' }),
            cell: info => (h("span", null, h("b", null, formatAmount(info.row.original.currencySymbol, info.getValue()), " / "), formatAmount(info.row.original.currencySymbol, info.getValue()))),
        }),
    ];
    handlePageChange = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        setUninvoicedBookingsTablePage(event.detail.currentPage);
        this.uninvoicedBookingsPageChange.emit();
    };
    handlePageSizeChange = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (event.detail.pageSize) {
            setUninvoicedBookingsTablePageSize(event.detail.pageSize);
            this.uninvoicedBookingsPageChange.emit();
        }
    };
    render() {
        const { currentPage, pageSize } = uninvoiced_bookings.tablePagination;
        const total = uninvoiced_bookings.totalCount;
        const pageCount = Math.max(Math.ceil(total / pageSize), 1);
        const startIndex = (currentPage - 1) * pageSize;
        const pageRows = uninvoiced_bookings.rows;
        const table = useTable({
            data: pageRows,
            columns: this.columns,
            getCoreRowModel: getCoreRowModel(),
        });
        const amountColumnIds = ['totalGuestAmount', 'uninvoicedGuestAmount'];
        return (h("div", { key: '9f6de9e5e01f0e3722c397edfe73240e080842b7', class: "uninvoiced-bookings-table" }, h("div", { key: '10dab680bbcf219998e1221b61270761d0532957', class: "table--container" }, h("table", { key: '627677b4a667187ce77982eff971e89e48ede060', class: "table data-table" }, h("thead", { key: '384331e865669c5c35a9d56a726a0729a9ad00ce' }, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: {
                'cell--align-end': amountColumnIds.includes(header.column.id),
                'cell--booking': header.column.id === 'booking',
                'cell--booked-by': header.column.id === 'booked_by',
                'cell--amount': amountColumnIds.includes(header.column.id),
                'cell--align-center': ['status', 'units_booked'].includes(header.column.id),
            } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", { key: '1db4144ee068373e1b7b5a326c229a8d9f511d20' }, uninvoiced_bookings.isLoading ? (h("tr", null, h("td", { colSpan: this.columns.length, class: "empty-row" }, h("ir-spinner", null)))) : table.getRowModel().rows.length === 0 ? (h("tr", null, h("td", { colSpan: this.columns.length, class: "empty-row" }, h("ir-empty-state", { message: t('Lcz_NoUninvoicedGuestPaidBookings', { fallback: 'No uninvoiced guest-paid bookings for this date range.' }) })))) : (table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                'cell--align-end': amountColumnIds.includes(cell.column.id),
                'cell--align-center': ['status', 'units_booked'].includes(cell.column.id),
                'cell--booking': cell.column.id === 'booking',
                'cell--booked-by': cell.column.id === 'booked_by',
                'cell--amount': amountColumnIds.includes(cell.column.id),
            } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))))))), h("ir-pagination", { key: 'c9467af4c664ebd7233e087c95bf4e29353fe260', class: "uninvoiced-bookings-table__pagination", total: total, pages: pageCount, pageSize: pageSize, currentPage: currentPage, allowPageSizeChange: true, pageSizes: this.pageSizes, showing: { from: total ? startIndex + 1 : 0, to: startIndex + pageRows.length }, recordLabel: t('Lcz_Bookings', { fallback: 'bookings' }), onPageChange: this.handlePageChange, onPageSizeChange: this.handlePageSizeChange })));
    }
};
IrUnvoicedBookingsTable.style = irUnvoicedBookingsTableCss() + tableCss();

export { IrUnvoicedBookingsFilters as ir_unvoiced_bookings_filters, IrUnvoicedBookingsTable as ir_unvoiced_bookings_table };
