'use strict';

var index = require('./index-CJa_TWt0.js');
var moment = require('./moment-CdViwxPQ.js');
var uninvoiced_bookings_store = require('./uninvoiced_bookings.store-Bl0x1vy_.js');
var useTable = require('./useTable-BN32DOaV.js');
var utils = require('./utils-E_4JVEHN.js');
require('./index-DbhEzZeW.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-DHUlGBMy.js');
require('./locales.store-BDFcUAoA.js');
require('./type-Dy9pVS4V.js');

const irUnvoicedBookingsFiltersCss = () => `.sc-ir-unvoiced-bookings-filters-h{display:block}.uninvoiced-bookings-filters.sc-ir-unvoiced-bookings-filters{display:flex;align-items:center;gap:0.5rem}.uninvoiced-bookings-filters__date-picker.sc-ir-unvoiced-bookings-filters{width:100%}.uninvoiced-bookings-group.sc-ir-unvoiced-bookings-filters{display:flex;align-items:center;gap:0.5rem}wa-select.sc-ir-unvoiced-bookings-filters{min-width:12rem;flex:1}@media (max-width: 767px){.uninvoiced-bookings-filters.sc-ir-unvoiced-bookings-filters{align-items:stretch;flex-direction:column}}@media (min-width: 768px){.uninvoiced-bookings-filters__date-picker.sc-ir-unvoiced-bookings-filters{max-width:350px}}@media (min-width: 1024px){.sc-ir-unvoiced-bookings-filters-h{width:var(--max-screen-width);margin-inline:auto}}`;

const IrUnvoicedBookingsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uninvoicedBookingsFiltersChange = index.createEvent(this, "uninvoicedBookingsFiltersChange");
    }
    uninvoicedBookingsFiltersChange;
    quickDates = [
        { label: '7 Days Ago', getDate: () => moment.hooks().subtract(7, 'days') },
        { label: '14 Days Ago', getDate: () => moment.hooks().subtract(14, 'days') },
        { label: '30 Days Ago', getDate: () => moment.hooks().subtract(30, 'days') },
        { label: '90 Days Ago', getDate: () => moment.hooks().subtract(90, 'days') },
    ];
    handleDatesChanged = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { from, to } = e.detail;
        if (!from || !to) {
            return;
        }
        uninvoiced_bookings_store.updateUninvoicedBookingsFilters({ from, to });
    };
    handleSourceChanged = (e) => {
        uninvoiced_bookings_store.updateUninvoicedBookingsFilters({ source: e.target.value });
    };
    handleSearch = () => {
        this.uninvoicedBookingsFiltersChange.emit({
            from: uninvoiced_bookings_store.uninvoiced_bookings.filters.from,
            to: uninvoiced_bookings_store.uninvoiced_bookings.filters.to,
            source: uninvoiced_bookings_store.uninvoiced_bookings.filters.source,
        });
    };
    render() {
        return (index.h("div", { key: 'd7f723e932aa208dd3c63db655aaaa1bc208b22e', class: "uninvoiced-bookings-filters" }, index.h("ir-date-range-filter", { key: '2eed182cbfeb4f549f222ef1a58d267986614895', class: "uninvoiced-bookings-filters__date-picker", fromDate: uninvoiced_bookings_store.uninvoiced_bookings.filters.from, toDate: uninvoiced_bookings_store.uninvoiced_bookings.filters.to, maxDate: moment.hooks().format('YYYY-MM-DD'), showQuickActions: true, quickDates: this.quickDates, quickDatesMode: "range", withClear: false, selectionMode: "auto", onDatesChanged: this.handleDatesChanged }), index.h("div", { key: '8749bebdbeb0e1adba4c3e91a5c7a19af452b047', class: "uninvoiced-bookings-group" }, index.h("wa-select", { key: 'de99b206fe786dfe30d5448ad28893411a23a964', onchange: this.handleSourceChanged, value: uninvoiced_bookings_store.uninvoiced_bookings.filters.source, size: "s" }, index.h("wa-option", { key: '0a313e326313af4943864a31fdb7dac67f757b3f', value: "" }, "All channels"), uninvoiced_bookings_store.uninvoiced_bookings.channels.map(channel => (index.h("wa-option", { key: channel.value, value: channel.value }, channel.name)))), index.h("ir-custom-button", { key: '2b1b1c439016965b477f1d527b55e384657816fe', id: "uninvoiced-bookings-search-btn", loading: uninvoiced_bookings_store.uninvoiced_bookings.isLoading, disabled: uninvoiced_bookings_store.uninvoiced_bookings.isLoading, onClickHandler: this.handleSearch, variant: "neutral", appearance: "outlined" }, index.h("wa-icon", { key: 'd0094fd693f8ba9dbcfd026d4ec8544d60b98618', name: "magnifying-glass" }))), index.h("wa-tooltip", { key: '6a27ac361807f299b5d8d7654ea5d89f8fcf1384', for: "uninvoiced-bookings-search-btn" }, "Search")));
    }
};
IrUnvoicedBookingsFilters.style = irUnvoicedBookingsFiltersCss();

const irUnvoicedBookingsTableCss = () => `.sc-ir-unvoiced-bookings-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-unvoiced-bookings-table{overflow-x:auto}.table--container.sc-ir-unvoiced-bookings-table,.data-table.sc-ir-unvoiced-bookings-table{height:100%}.ir-table-row.sc-ir-unvoiced-bookings-table td.sc-ir-unvoiced-bookings-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-unvoiced-bookings-table td.sc-ir-unvoiced-bookings-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-unvoiced-bookings-table tbody.sc-ir-unvoiced-bookings-table tr.sc-ir-unvoiced-bookings-table:last-child>td.sc-ir-unvoiced-bookings-table{border-bottom:0 !important}.cell--align-start.sc-ir-unvoiced-bookings-table{text-align:start !important}.cell--align-center.sc-ir-unvoiced-bookings-table{text-align:center !important}.cell--align-end.sc-ir-unvoiced-bookings-table{text-align:end !important}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sc-ir-unvoiced-bookings-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sc-ir-unvoiced-bookings-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-unvoiced-bookings-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-unvoiced-bookings-table,.ir-table-row.sc-ir-unvoiced-bookings-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-unvoiced-bookings-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sortable.sc-ir-unvoiced-bookings-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sortable.sc-ir-unvoiced-bookings-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sortable.sc-ir-unvoiced-bookings-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-unvoiced-bookings-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-unvoiced-bookings-table svg.sc-ir-unvoiced-bookings-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-unvoiced-bookings-table:hover td.sc-ir-unvoiced-bookings-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-unvoiced-bookings-table:hover td.sc-ir-unvoiced-bookings-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-unvoiced-bookings-table:active td.sc-ir-unvoiced-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-unvoiced-bookings-table td.sc-ir-unvoiced-bookings-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-unvoiced-bookings-table:hover td.sc-ir-unvoiced-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-unvoiced-bookings-table:active td.sc-ir-unvoiced-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-unvoiced-bookings-table .empty-row.sc-ir-unvoiced-bookings-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-unvoiced-bookings-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-unvoiced-bookings-table{position:sticky !important;right:0;background-color:white}.sc-ir-unvoiced-bookings-table-h{display:block}.uninvoiced-bookings-table.sc-ir-unvoiced-bookings-table{display:flex;flex-direction:column;border-radius:0.75rem;overflow:hidden;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);background-color:var(--wa-color-surface-default, #fff)}.table--container.sc-ir-unvoiced-bookings-table{overflow-x:auto}.uninvoiced-bookings-table__booking-nbr-cell.sc-ir-unvoiced-bookings-table::part(booking-reference),.uninvoiced-bookings-table__booking-nbr-cell.sc-ir-unvoiced-bookings-table [part~="booking-reference"]{display:none}.uninvoiced-bookings__dates-cell.sc-ir-unvoiced-bookings-table::part(checkin-container),.uninvoiced-bookings__dates-cell.sc-ir-unvoiced-bookings-table [part~="checkin-container"]{display:none}.uninvoiced-bookings-table__pagination.sc-ir-unvoiced-bookings-table{padding:0.5rem 1rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.uninvoiced-bookings-table__booking-nbr-cell.sc-ir-unvoiced-bookings-table::part(container),.uninvoiced-bookings-table__booking-nbr-cell.sc-ir-unvoiced-bookings-table [part~="container"]{display:flex;align-items:center;flex-direction:row-reverse;gap:0.5rem}.uninvoiced-bookings__services.sc-ir-unvoiced-bookings-table{padding:0;margin:0}@media (min-width: 1024px){.sc-ir-unvoiced-bookings-table-h{max-width:var(--max-screen-width);margin-inline:auto}.table--container.sc-ir-unvoiced-bookings-table{min-width:var(--max-screen-width)}}`;

const tableCss = () => `.sc-ir-unvoiced-bookings-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-unvoiced-bookings-table{overflow-x:auto}.table--container.sc-ir-unvoiced-bookings-table,.data-table.sc-ir-unvoiced-bookings-table{height:100%}.ir-table-row.sc-ir-unvoiced-bookings-table td.sc-ir-unvoiced-bookings-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-unvoiced-bookings-table td.sc-ir-unvoiced-bookings-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-unvoiced-bookings-table tbody.sc-ir-unvoiced-bookings-table tr.sc-ir-unvoiced-bookings-table:last-child>td.sc-ir-unvoiced-bookings-table{border-bottom:0 !important}.cell--align-start.sc-ir-unvoiced-bookings-table{text-align:start !important}.cell--align-center.sc-ir-unvoiced-bookings-table{text-align:center !important}.cell--align-end.sc-ir-unvoiced-bookings-table{text-align:end !important}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sc-ir-unvoiced-bookings-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sc-ir-unvoiced-bookings-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-unvoiced-bookings-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-unvoiced-bookings-table,.ir-table-row.sc-ir-unvoiced-bookings-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-unvoiced-bookings-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sortable.sc-ir-unvoiced-bookings-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sortable.sc-ir-unvoiced-bookings-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-unvoiced-bookings-table thead.sc-ir-unvoiced-bookings-table th.sortable.sc-ir-unvoiced-bookings-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-unvoiced-bookings-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-unvoiced-bookings-table svg.sc-ir-unvoiced-bookings-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-unvoiced-bookings-table:hover td.sc-ir-unvoiced-bookings-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-unvoiced-bookings-table:hover td.sc-ir-unvoiced-bookings-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-unvoiced-bookings-table:active td.sc-ir-unvoiced-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-unvoiced-bookings-table td.sc-ir-unvoiced-bookings-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-unvoiced-bookings-table:hover td.sc-ir-unvoiced-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-unvoiced-bookings-table:active td.sc-ir-unvoiced-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-unvoiced-bookings-table .empty-row.sc-ir-unvoiced-bookings-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-unvoiced-bookings-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-unvoiced-bookings-table{position:sticky !important;right:0;background-color:white}`;

const IrUnvoicedBookingsTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uninvoicedBookingsPageChange = index.createEvent(this, "uninvoicedBookingsPageChange");
    }
    uninvoicedBookingsPageChange;
    pageSizes = [20, 50, 100];
    columnHelper = useTable.createColumnHelper();
    columns = [
        this.columnHelper.display({
            id: 'booking',
            header: 'Booking#',
            cell: info => {
                const booking = info.row.original.raw;
                return (index.h("ir-booking-number-cell", { class: "uninvoiced-bookings-table__booking-nbr-cell", origin: booking.origin, source: booking.source, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr }));
            },
        }),
        this.columnHelper.display({
            id: 'booked_by',
            header: 'Booked by',
            cell: info => {
                const row = info.row.original;
                const booking = row.raw;
                return (index.h("ir-booked-by-cell", { class: "text-center", clickableGuest: true, showRepeatGuestBadge: false, guest: booking.guest, identifier: booking.booking_nbr, showContactIcons: false, showPersons: true, showPrivateNoteDot: false, totalPersons: row.totalGuests?.toString(), showPromoIcon: false, promoKey: booking.promo_key, showLoyaltyIcon: false }));
            },
        }),
        this.columnHelper.display({
            id: 'dates',
            header: 'End date',
            cell: info => {
                const booking = info.row.original.raw;
                return index.h("ir-dates-cell", { class: "uninvoiced-bookings__dates-cell", checkIn: booking.from_date, checkOut: booking.to_date });
            },
        }),
        this.columnHelper.display({
            id: 'services',
            header: 'Services',
            cell: info => {
                const booking = info.row.original.raw;
                const invoicableUnits = booking.invoice_info?.invoiceable_items?.filter(item => item.is_invoiceable && item.type === 'BSA')?.length;
                const invoicableServices = booking.invoice_info?.invoiceable_items?.filter(item => item.is_invoiceable && ['BSP', 'BSE'].includes(item.type))?.length;
                const invoicableCancellation = booking.invoice_info?.invoiceable_items?.filter(item => item.is_invoiceable && item.type === 'PAYMENT')?.length;
                // const roomsLength = row.raw.rooms?.length;
                return (index.h("div", null, !!invoicableUnits && (index.h("p", { class: "uninvoiced-bookings__services" }, invoicableUnits, " unit", invoicableUnits > 1 ? 's' : '')), !!invoicableServices && (index.h("p", { class: "uninvoiced-bookings__services" }, invoicableServices, " extra service", invoicableServices > 1 ? 's' : '')), !!invoicableCancellation && index.h("p", { class: "uninvoiced-bookings__services" }, "Cancellation fee")));
            },
        }),
        this.columnHelper.display({
            id: 'status',
            header: 'Status',
            cell: info => {
                const booking = info.row.original.raw;
                const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
                return (index.h("ir-status-activity-cell", { lastManipulation: lastManipulation, showManipulationBadge: !!lastManipulation, showModifiedBadge: !lastManipulation && booking.events?.length > 0 && booking.events[0].type.toLowerCase() === 'modified', status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr }));
            },
        }),
        // this.columnHelper.accessor('totalGuestAmount', {
        //   id: 'totalGuestAmount',
        //   header: 'Total guest sum',
        //   cell: info => formatAmount(info.row.original.currencySymbol, info.getValue()),
        // }),
        this.columnHelper.accessor('uninvoicedGuestAmount', {
            id: 'uninvoicedGuestAmount',
            header: 'Uninvoiced guest amount',
            cell: info => (index.h("span", null, index.h("b", null, utils.formatAmount(info.row.original.currencySymbol, info.getValue()), " / "), utils.formatAmount(info.row.original.currencySymbol, info.getValue()))),
        }),
    ];
    handlePageChange = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        uninvoiced_bookings_store.setUninvoicedBookingsTablePage(event.detail.currentPage);
        this.uninvoicedBookingsPageChange.emit();
    };
    handlePageSizeChange = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (event.detail.pageSize) {
            uninvoiced_bookings_store.setUninvoicedBookingsTablePageSize(event.detail.pageSize);
            this.uninvoicedBookingsPageChange.emit();
        }
    };
    render() {
        const { currentPage, pageSize } = uninvoiced_bookings_store.uninvoiced_bookings.tablePagination;
        const total = uninvoiced_bookings_store.uninvoiced_bookings.totalCount;
        const pageCount = Math.max(Math.ceil(total / pageSize), 1);
        const startIndex = (currentPage - 1) * pageSize;
        const pageRows = uninvoiced_bookings_store.uninvoiced_bookings.rows;
        const table = useTable.useTable({
            data: pageRows,
            columns: this.columns,
            getCoreRowModel: useTable.getCoreRowModel(),
        });
        const amountColumnIds = ['totalGuestAmount', 'uninvoicedGuestAmount'];
        return (index.h("div", { key: '02f2c98779000cd774c482ded3fdeba92a010b62', class: "uninvoiced-bookings-table" }, index.h("div", { key: 'f816b3c8339a4b9e65f79caff0d96dd33f5ec74a', class: "table--container" }, index.h("table", { key: 'e17a1fcc87d086dd598912c4bd1cc4f004510668', class: "table data-table" }, index.h("thead", { key: 'f7f31dbbdb3a755fe7f878ea2169ad49e5247b0e' }, table.getHeaderGroups().map(headerGroup => (index.h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (index.h("th", { key: header.id, class: {
                'cell--align-end': amountColumnIds.includes(header.column.id),
                'cell--booking': header.column.id === 'booking',
                'cell--booked-by': header.column.id === 'booked_by',
                'cell--amount': amountColumnIds.includes(header.column.id),
                'cell--align-center': ['status', 'units_booked'].includes(header.column.id),
            } }, useTable.flexRender(header.column.columnDef.header, header.getContext())))))))), index.h("tbody", { key: 'f2a6e22c85776ef7d5e6a0df43158d0ead20b82e' }, uninvoiced_bookings_store.uninvoiced_bookings.isLoading ? (index.h("tr", null, index.h("td", { colSpan: this.columns.length, class: "empty-row" }, index.h("ir-spinner", null)))) : table.getRowModel().rows.length === 0 ? (index.h("tr", null, index.h("td", { colSpan: this.columns.length, class: "empty-row" }, index.h("ir-empty-state", { message: "No uninvoiced guest-paid bookings for this date range." })))) : (table.getRowModel().rows.map(row => (index.h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (index.h("td", { key: cell.id, class: {
                'cell--align-end': amountColumnIds.includes(cell.column.id),
                'cell--align-center': ['status', 'units_booked'].includes(cell.column.id),
                'cell--booking': cell.column.id === 'booking',
                'cell--booked-by': cell.column.id === 'booked_by',
                'cell--amount': amountColumnIds.includes(cell.column.id),
            } }, useTable.flexRender(cell.column.columnDef.cell, cell.getContext()))))))))))), index.h("ir-pagination", { key: 'b2c37ee8c1a65b22b068ab9a5af601c76161bd50', class: "uninvoiced-bookings-table__pagination", total: total, pages: pageCount, pageSize: pageSize, currentPage: currentPage, allowPageSizeChange: true, pageSizes: this.pageSizes, showing: { from: total ? startIndex + 1 : 0, to: startIndex + pageRows.length }, recordLabel: "bookings", onPageChange: this.handlePageChange, onPageSizeChange: this.handlePageSizeChange })));
    }
};
IrUnvoicedBookingsTable.style = irUnvoicedBookingsTableCss() + tableCss();

exports.ir_unvoiced_bookings_filters = IrUnvoicedBookingsFilters;
exports.ir_unvoiced_bookings_table = IrUnvoicedBookingsTable;
