import { r as registerInstance, c as createEvent, h } from './index-CeHdrJeH.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { u as updateUninvoicedBookingsFilters, a as uninvoiced_bookings, s as setUninvoicedBookingsTablePage, b as setUninvoicedBookingsTablePageSize } from './uninvoiced_bookings.store-r5z_Xn08.js';
import { t } from './t-BVYK64UG.js';
import { b as formatCount, f as formatAmount } from './number-1PczWhnt.js';
import { c as createColumnHelper, u as useTable, f as flexRender, g as getCoreRowModel } from './useTable-CXkYMQoa.js';
import './locale-scope-CapRuPkM.js';
import './ir-date-CASx9LWM.js';
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
        return (h("div", { key: 'dd4cb80bfe212574f02159598985285723603533', class: "uninvoiced-bookings-filters" }, h("ir-date-range-filter", { key: '401ee82e864f32ea711ca3438417773634758a68', class: "uninvoiced-bookings-filters__date-picker", fromDate: uninvoiced_bookings.filters.from, toDate: uninvoiced_bookings.filters.to, maxDate: hooks().format('YYYY-MM-DD'), showQuickActions: true, quickDates: this.quickDates, quickDatesMode: "range", withClear: false, selectionMode: "auto", onDatesChanged: this.handleDatesChanged }), h("div", { key: 'b3c7d00015f4f06227a29a5baab05e391ca9cd3f', class: "uninvoiced-bookings-group" }, h("wa-select", { key: '98c7e1553fbc035bcce709fc77b2ebffacb823bd', onchange: this.handleSourceChanged, value: uninvoiced_bookings.filters.source, size: "s" }, h("wa-option", { key: '98330f5a08cdd89c44132880715b7ee20339a7e4', value: "" }, t('Lcz_AllChannels', { fallback: 'All channels' })), uninvoiced_bookings.channels.map(channel => (h("wa-option", { key: channel.value, value: channel.value }, channel.name)))), h("ir-custom-button", { key: '555d498767bc01b8ce65a37ff172841e5638a083', id: "uninvoiced-bookings-search-btn", loading: uninvoiced_bookings.isLoading, disabled: uninvoiced_bookings.isLoading, onClickHandler: this.handleSearch, variant: "neutral", appearance: "outlined" }, h("wa-icon", { key: '322c389b6f3e449f87ca83b60bf4e89d5ad8c1d8', name: "magnifying-glass" }))), h("wa-tooltip", { key: '8a2658592087c64f15e7a8d512ff889d59b23603', for: "uninvoiced-bookings-search-btn" }, t('Lcz_Search', { fallback: 'Search' }))));
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
        return (h("div", { key: '4222b0d1a379e0b12b47a6f91905c5b06fefe8e8', class: "uninvoiced-bookings-table" }, h("div", { key: '41dbdc7248e62a2e26a069024bc68450a2630a35', class: "table--container" }, h("table", { key: '4ae41b42965c22bfd04e9c22a05d299653f5b1f7', class: "table data-table" }, h("thead", { key: '6c16eddfff56e9029ad097a1e20951a2e59a37b8' }, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: {
                'cell--align-end': amountColumnIds.includes(header.column.id),
                'cell--booking': header.column.id === 'booking',
                'cell--booked-by': header.column.id === 'booked_by',
                'cell--amount': amountColumnIds.includes(header.column.id),
                'cell--align-center': ['status', 'units_booked'].includes(header.column.id),
            } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", { key: '7578583b89a0611f68880f94dfb29a6e8562ee23' }, uninvoiced_bookings.isLoading ? (h("tr", null, h("td", { colSpan: this.columns.length, class: "empty-row" }, h("ir-spinner", null)))) : table.getRowModel().rows.length === 0 ? (h("tr", null, h("td", { colSpan: this.columns.length, class: "empty-row" }, h("ir-empty-state", { message: t('Lcz_NoUninvoicedGuestPaidBookings', { fallback: 'No uninvoiced guest-paid bookings for this date range.' }) })))) : (table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                'cell--align-end': amountColumnIds.includes(cell.column.id),
                'cell--align-center': ['status', 'units_booked'].includes(cell.column.id),
                'cell--booking': cell.column.id === 'booking',
                'cell--booked-by': cell.column.id === 'booked_by',
                'cell--amount': amountColumnIds.includes(cell.column.id),
            } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))))))), h("ir-pagination", { key: '7786e1bfd374fc902f41ac4cd9f7eae2685c9b14', class: "uninvoiced-bookings-table__pagination", total: total, pages: pageCount, pageSize: pageSize, currentPage: currentPage, allowPageSizeChange: true, pageSizes: this.pageSizes, showing: { from: total ? startIndex + 1 : 0, to: startIndex + pageRows.length }, recordLabel: t('Lcz_Bookings', { fallback: 'bookings' }), onPageChange: this.handlePageChange, onPageSizeChange: this.handlePageSizeChange })));
    }
};
IrUnvoicedBookingsTable.style = irUnvoicedBookingsTableCss() + tableCss();

export { IrUnvoicedBookingsFilters as ir_unvoiced_bookings_filters, IrUnvoicedBookingsTable as ir_unvoiced_bookings_table };
