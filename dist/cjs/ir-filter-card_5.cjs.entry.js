'use strict';

var index = require('./index-DtXemfU-.js');
var moment = require('./moment-CdViwxPQ.js');
var useTable = require('./useTable-BN32DOaV.js');

const irFilterCardCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;min-width:20vw;height:100%;flex:1}.filters__header{display:flex;align-items:center;justify-content:space-between}.filters__title-group{display:flex;align-items:center;gap:0.5rem}.filters__icon{width:1.125rem;height:1.125rem;flex-shrink:0;color:var(--wa-color-text-quiet)}.filters__title{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.filters__body{display:flex;flex-direction:column;gap:0.75rem}.filters__card__collapsed::part(body){display:none}.filters__actions{display:flex;align-items:center;justify-content:flex-end;gap:0.75rem;padding-top:0.25rem}::slotted([slot='footer']){margin-top:1rem;display:flex;align-items:center;gap:1rem}`;

const IrFilterCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Viewport at/above which the filter body is always shown and the toggle is hidden. */
    static DESKTOP_QUERY = '(min-width: 1024px)';
    collapsed = true;
    isDesktop = false;
    mediaQuery;
    componentWillLoad() {
        this.mediaQuery = window.matchMedia(IrFilterCard.DESKTOP_QUERY);
        this.isDesktop = this.mediaQuery.matches;
        this.mediaQuery.addEventListener('change', this.handleViewportChange);
    }
    disconnectedCallback() {
        this.mediaQuery?.removeEventListener('change', this.handleViewportChange);
    }
    handleViewportChange = (e) => {
        this.isDesktop = e.matches;
    };
    render() {
        // On desktop the body is always expanded; the collapse state only applies below the breakpoint.
        const expanded = this.isDesktop || !this.collapsed;
        return (index.h("wa-card", { key: '14db783cda207fe6aa73bd9ebbf83caba9a33f42', class: expanded ? '' : 'filters__card__collapsed' }, index.h("div", { key: '60a0ace11cdf55fa36dd1b6905c90d9b281a1c01', part: "header", class: "filters__header", slot: "header" }, index.h("div", { key: 'd8f63bb0cece333922365d4ba88dcbb7dc3d91c6', class: "filters__title-group" }, index.h("wa-icon", { key: '3f567c0f1f7d852f7948a5e72178d17522d8e3de', name: "filter", style: { fontSize: '1rem' } }), index.h("h4", { key: '4f14201d680beb28b0cc89c62b9130b8d2cfb7cc', class: "filters__title" }, "Filter")), !this.isDesktop && (index.h("ir-custom-button", { key: '1ac1b073332f87a9881cd7b812a40b95b8900597', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: '5d4e2f8545934d31275493e20de30d49b770802e', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), index.h("div", { key: 'b117b4bd83dbec7b85da01dcf76254077ffe1e16', part: "filter-body", class: 'filters__body' }, index.h("slot", { key: '63a612073a536b0640395bfe99e06aa22d12cd71' })), index.h("div", { key: '03a0290be9c4cc9ca68c7c1a70ab0cd9312d4546', part: "footer", class: 'filters__actions' }, index.h("slot", { key: '782da9e3d2a411f444721eda288a8280e22c32d5', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

const irMealCountSummaryCss = () => `.sc-ir-meal-count-summary-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-meal-count-summary{overflow-x:auto}.table--container.sc-ir-meal-count-summary,.data-table.sc-ir-meal-count-summary{height:100%}.ir-table-row.sc-ir-meal-count-summary td.sc-ir-meal-count-summary{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-meal-count-summary td.sc-ir-meal-count-summary{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-meal-count-summary tbody.sc-ir-meal-count-summary tr.sc-ir-meal-count-summary:last-child>td.sc-ir-meal-count-summary{border-bottom:0 !important}.table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.sc-ir-meal-count-summary{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.sc-ir-meal-count-summary{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-meal-count-summary{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-meal-count-summary,.ir-table-row.sc-ir-meal-count-summary{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-meal-count-summary{text-transform:capitalize;cursor:pointer}.table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.sortable.sc-ir-meal-count-summary{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.sortable.sc-ir-meal-count-summary:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.sortable.sc-ir-meal-count-summary:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-meal-count-summary:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-meal-count-summary svg.sc-ir-meal-count-summary{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-meal-count-summary:hover td.sc-ir-meal-count-summary{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-meal-count-summary:hover td.sc-ir-meal-count-summary{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-meal-count-summary:active td.sc-ir-meal-count-summary{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-meal-count-summary td.sc-ir-meal-count-summary{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-meal-count-summary:hover td.sc-ir-meal-count-summary{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-meal-count-summary:active td.sc-ir-meal-count-summary{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-meal-count-summary .empty-row.sc-ir-meal-count-summary{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-meal-count-summary{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-meal-count-summary{position:sticky !important;right:0;background-color:white}.sc-ir-meal-count-summary-h{--ir-cell-padding:0.3rem 0.45rem;display:flex;flex-direction:column;overflow:hidden;min-height:200px}.meal-count__table.sc-ir-meal-count-summary{width:100%;min-width:560px;table-layout:fixed;font-size:var(--wa-font-size-m)}.meal-count__col--date.sc-ir-meal-count-summary{width:140px}.meal-count__col--num.sc-ir-meal-count-summary{width:70px}.meal-count__col--flex.sc-ir-meal-count-summary{width:100%}.meal-count__table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary tr.sc-ir-meal-count-summary:first-child th.sc-ir-meal-count-summary:last-child{text-align:start !important}.meal-count__table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary tr.sc-ir-meal-count-summary:first-child th.sc-ir-meal-count-summary:last-child .meal-count__group-title.sc-ir-meal-count-summary{width:120px;justify-content:center}@media (min-width: 1024px){.meal-count__col--num.sc-ir-meal-count-summary{width:90px}.meal-count__table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary tr.sc-ir-meal-count-summary:first-child th.sc-ir-meal-count-summary:last-child .meal-count__group-title.sc-ir-meal-count-summary{width:180px}}@media (min-width: 1280px){.meal-count__col--num.sc-ir-meal-count-summary{width:120px}.meal-count__table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary tr.sc-ir-meal-count-summary:first-child th.sc-ir-meal-count-summary:last-child .meal-count__group-title.sc-ir-meal-count-summary{width:200px}}.cell--align-center.sc-ir-meal-count-summary{text-align:center !important}.cell--align-start.sc-ir-meal-count-summary{text-align:start !important}.meal-count__group-header.sc-ir-meal-count-summary{text-align:center !important;font-weight:var(--wa-font-weight-bold, 700);letter-spacing:0.02em;color:var(--wa-color-text-normal, #0f172a)}.meal-count__group-title.sc-ir-meal-count-summary{display:inline-flex;align-items:center;gap:0.4rem}.meal-count__sub-header.sc-ir-meal-count-summary{font-weight:var(--wa-font-weight-semibold, 600);text-transform:uppercase;letter-spacing:0.04em;color:var(--wa-color-text-quiet, #64748b)}.meal-count__subhead--ch.sc-ir-meal-count-summary{color:var(--wa-color-text-quiet)}.meal-count__table.sc-ir-meal-count-summary td.meal-count__cell--ad.sc-ir-meal-count-summary,.meal-count__table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.meal-count__subhead--ad.sc-ir-meal-count-summary{text-align:right !important;padding-inline:0.4rem 0.2rem !important;font-weight:600}.meal-count__table.sc-ir-meal-count-summary td.meal-count__cell--ch.sc-ir-meal-count-summary,.meal-count__table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.meal-count__subhead--ch.sc-ir-meal-count-summary{text-align:left !important;padding-inline:0.2rem 0.4rem !important}.meal-count__table.sc-ir-meal-count-summary td.meal-count__cell--ad.sc-ir-meal-count-summary,.meal-count__table.sc-ir-meal-count-summary thead.sc-ir-meal-count-summary th.meal-count__subhead--ad.sc-ir-meal-count-summary{border-inline-start:1px solid var(--wa-color-neutral-border-quiet, #eef1f5)}.meal-count__date.sc-ir-meal-count-summary{font-weight:var(--wa-font-weight-medium, 500);color:var(--wa-color-text-normal, #0f172a);white-space:nowrap}.meal-count__cell.sc-ir-meal-count-summary{font-variant-numeric:tabular-nums}.meal-count__cell--primary.sc-ir-meal-count-summary{font-weight:var(--wa-font-weight-bold, 700);color:var(--wa-color-brand-fill-loud)}.meal-count__cell--muted.sc-ir-meal-count-summary{color:var(--wa-color-text-quiet, #64748b)}.meal-count__total-row.sc-ir-meal-count-summary td.sc-ir-meal-count-summary{background:var(--wa-color-neutral-fill-quiet, #f1f5f9) !important;border-top:1px solid var(--wa-color-surface-border, #e2e8f0);border-bottom:0 !important;padding:var(--ir-cell-padding) !important;font-variant-numeric:tabular-nums}.meal-count__total-label.sc-ir-meal-count-summary{font-weight:var(--wa-font-weight-bold, 700);text-transform:uppercase;letter-spacing:0.03em;color:var(--wa-color-text-quiet, #64748b)}.meal-count__total-value.sc-ir-meal-count-summary{font-weight:var(--wa-font-weight-bold, 700);color:var(--wa-color-brand-fill-loud)}.meal-count__total-muted.sc-ir-meal-count-summary{color:var(--wa-color-text-quiet, #64748b)}.meal-count__empty.sc-ir-meal-count-summary{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;min-height:200px}`;

const IrMealCountSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    mealCountSummary = [];
    columnHelper = useTable.createColumnHelper();
    mealMeta = {
        breakfast: { label: 'Breakfast', icon: 'mug-saucer', color: 'var(--wa-color-brand-fill-loud)' },
        lunch: { label: 'Lunch', icon: 'utensils', color: 'var(--wa-color-success-fill-loud)' },
        dinner: { label: 'Dinner', icon: 'moon', color: 'var(--wa-color-warning-fill-loud)' },
    };
    renderMealHeader = (key) => {
        const m = this.mealMeta[key];
        return (index.h("span", { class: "meal-count__group-title" }, index.h("wa-icon", { name: m.icon, class: "meal-count__group-icon", style: { color: m.color } }), index.h("span", null, m.label)));
    };
    columns = [
        this.columnHelper.accessor('Date', {
            header: 'Date',
            cell: info => index.h("span", { class: "meal-count__date" }, moment.hooks(info.getValue()).format('ddd, MMM DD')),
        }),
        this.columnHelper.group({
            id: 'breakfast',
            header: () => this.renderMealHeader('breakfast'),
            columns: [this.columnHelper.accessor('Breakfast_Ad', { header: 'Ad' }), this.columnHelper.accessor('Breakfast_Ch', { header: 'Ch' })],
        }),
        this.columnHelper.group({
            id: 'lunch',
            header: () => this.renderMealHeader('lunch'),
            columns: [this.columnHelper.accessor('Lunch_Ad', { header: 'Ad' }), this.columnHelper.accessor('Lunch_Ch', { header: 'Ch' })],
        }),
        this.columnHelper.group({
            id: 'dinner',
            header: () => this.renderMealHeader('dinner'),
            columns: [this.columnHelper.accessor('Dinner_Ad', { header: 'Ad' }), this.columnHelper.accessor('Dinner_Ch', { header: 'Ch' })],
        }),
    ];
    isAdultCol = (id) => id.endsWith('_Ad');
    isChildCol = (id) => id.endsWith('_Ch');
    render() {
        const list = this.mealCountSummary ?? [];
        if (list.length === 0) {
            return (index.h(index.Host, null, index.h("div", { class: "meal-count__empty" }, index.h("ir-empty-state", { message: "No summary data available for the current filters." }))));
        }
        const table = useTable.useTable({
            data: list,
            columns: this.columns,
            getCoreRowModel: useTable.getCoreRowModel(),
        });
        const headerGroups = table.getHeaderGroups();
        const depth = headerGroups.length;
        const totals = {
            Breakfast_Ad: list.reduce((s, d) => s + (d.Breakfast_Ad || 0), 0),
            Breakfast_Ch: list.reduce((s, d) => s + (d.Breakfast_Ch || 0), 0),
            Lunch_Ad: list.reduce((s, d) => s + (d.Lunch_Ad || 0), 0),
            Lunch_Ch: list.reduce((s, d) => s + (d.Lunch_Ch || 0), 0),
            Dinner_Ad: list.reduce((s, d) => s + (d.Dinner_Ad || 0), 0),
            Dinner_Ch: list.reduce((s, d) => s + (d.Dinner_Ch || 0), 0),
        };
        const dataCellClass = (id) => ({
            'meal-count__cell': true,
            'meal-count__cell--ad': this.isAdultCol(id),
            'meal-count__cell--ch': this.isChildCol(id),
            'meal-count__cell--primary': this.isAdultCol(id),
            'meal-count__cell--muted': this.isChildCol(id),
        });
        return (index.h(index.Host, null, index.h("div", { class: "table--container" }, index.h("table", { class: "table data-table meal-count__table mb-0" }, index.h("colgroup", null, index.h("col", { class: "meal-count__col--date" }), index.h("col", { class: "meal-count__col--num", span: 5 }), index.h("col", { class: "meal-count__col--flex" })), index.h("thead", null, headerGroups.map((headerGroup, groupIndex) => (index.h("tr", { key: headerGroup.id }, groupIndex === 0 && index.h("th", null), headerGroup.headers.map(header => {
            if (header.isPlaceholder)
                return null;
            const isLeaf = header.subHeaders.length === 0;
            const rowSpan = isLeaf ? depth - groupIndex : 1;
            const isGroupHeader = !isLeaf;
            const id = header.column.id;
            return (index.h("th", { key: header.id, colSpan: header.colSpan, rowSpan: rowSpan, class: {
                    'cell--align-start': id === 'Date',
                    'meal-count__group-header': isGroupHeader,
                    'meal-count__sub-header': isLeaf && id !== 'Date',
                    'meal-count__subhead--ad': this.isAdultCol(id),
                    'meal-count__subhead--ch': this.isChildCol(id),
                } }, useTable.flexRender(header.column.columnDef.header, header.getContext())));
        }))))), index.h("tbody", null, table.getRowModel().rows.map(row => (index.h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (index.h("td", { key: cell.id, class: cell.column.id === 'Date' ? { 'cell--align-start': true, 'meal-count__cell': true } : dataCellClass(cell.column.id) }, useTable.flexRender(cell.column.columnDef.cell, cell.getContext())))))))), index.h("tfoot", null, index.h("tr", { class: "meal-count__total-row" }, index.h("td", { class: "cell--align-start meal-count__total-label" }, "Total"), index.h("td", { class: "meal-count__cell--ad meal-count__total-value" }, totals.Breakfast_Ad), index.h("td", { class: "meal-count__cell--ch meal-count__total-muted" }, totals.Breakfast_Ch), index.h("td", { class: "meal-count__cell--ad meal-count__total-value" }, totals.Lunch_Ad), index.h("td", { class: "meal-count__cell--ch meal-count__total-muted" }, totals.Lunch_Ch), index.h("td", { class: "meal-count__cell--ad meal-count__total-value" }, totals.Dinner_Ad), index.h("td", { class: "meal-count__cell--ch meal-count__total-muted" }, totals.Dinner_Ch)))))));
    }
};
IrMealCountSummary.style = irMealCountSummaryCss();

const irMealGuestListCss = () => `.sc-ir-meal-guest-list-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-meal-guest-list{overflow-x:auto}.table--container.sc-ir-meal-guest-list,.data-table.sc-ir-meal-guest-list{height:100%}.ir-table-row.sc-ir-meal-guest-list td.sc-ir-meal-guest-list{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-meal-guest-list td.sc-ir-meal-guest-list{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-meal-guest-list tbody.sc-ir-meal-guest-list tr.sc-ir-meal-guest-list:last-child>td.sc-ir-meal-guest-list{border-bottom:0 !important}.table.sc-ir-meal-guest-list thead.sc-ir-meal-guest-list th.sc-ir-meal-guest-list{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-meal-guest-list thead.sc-ir-meal-guest-list th.sc-ir-meal-guest-list{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-meal-guest-list{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-meal-guest-list,.ir-table-row.sc-ir-meal-guest-list{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-meal-guest-list{text-transform:capitalize;cursor:pointer}.table.sc-ir-meal-guest-list thead.sc-ir-meal-guest-list th.sortable.sc-ir-meal-guest-list{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-meal-guest-list thead.sc-ir-meal-guest-list th.sortable.sc-ir-meal-guest-list:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-meal-guest-list thead.sc-ir-meal-guest-list th.sortable.sc-ir-meal-guest-list:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-meal-guest-list:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-meal-guest-list svg.sc-ir-meal-guest-list{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-meal-guest-list:hover td.sc-ir-meal-guest-list{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-meal-guest-list:hover td.sc-ir-meal-guest-list{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-meal-guest-list:active td.sc-ir-meal-guest-list{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-meal-guest-list td.sc-ir-meal-guest-list{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-meal-guest-list:hover td.sc-ir-meal-guest-list{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-meal-guest-list:active td.sc-ir-meal-guest-list{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-meal-guest-list .empty-row.sc-ir-meal-guest-list{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-meal-guest-list{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-meal-guest-list{position:sticky !important;right:0;background-color:white}.sc-ir-meal-guest-list-h{display:flex;flex-direction:column;overflow:hidden;min-height:200px}.data-table.sc-ir-meal-guest-list{font-size:var(--wa-font-size-m)}.data-table.sc-ir-meal-guest-list thead.sc-ir-meal-guest-list th.sc-ir-meal-guest-list{padding-inline:0.5rem !important}.meal-guest-list__th.sc-ir-meal-guest-list{display:inline-flex;align-items:center;gap:0.35rem;font-weight:var(--wa-font-weight-semibold, 600);letter-spacing:0.02em;text-transform:uppercase}.meal-guest-list__th--center.sc-ir-meal-guest-list{justify-content:center;width:100%}.meal-guest-list__sort.sc-ir-meal-guest-list{opacity:0.35;transition:opacity var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease)}.meal-guest-list__sort--active.sc-ir-meal-guest-list{opacity:1;color:var(--wa-color-brand-fill-loud)}.table.sc-ir-meal-guest-list thead.sc-ir-meal-guest-list th.sortable.sc-ir-meal-guest-list:hover .meal-guest-list__sort.sc-ir-meal-guest-list{opacity:0.7}.meal-guest-list__unit.sc-ir-meal-guest-list{font-weight:var(--wa-font-weight-bold, 700);color:var(--wa-color-text-normal, #0f172a)}.meal-guest-list__guest.sc-ir-meal-guest-list{display:flex;align-items:center;gap:var(--wa-space-xs, 0.5rem);color:var(--wa-color-text-normal, #0f172a)}.meal-guest-list__muted.sc-ir-meal-guest-list{color:var(--wa-color-text-quiet, #64748b)}.meal-guest-list__arr.sc-ir-meal-guest-list{--wa-tag-padding:0 0.3rem}.cell--align-center.sc-ir-meal-guest-list{text-align:center !important;padding-inline:0.45rem !important}.meal-guest-list__total-row.sc-ir-meal-guest-list td.sc-ir-meal-guest-list{background:var(--wa-color-neutral-fill-quiet, #f1f5f9) !important;border-top:1px solid var(--wa-color-surface-border, #e2e8f0);border-bottom:0 !important;padding:var(--ir-cell-padding) !important}.meal-guest-list__total-label.sc-ir-meal-guest-list{text-align:end;font-weight:var(--wa-font-weight-bold, 700);text-transform:uppercase;letter-spacing:0.03em;color:var(--wa-color-text-quiet, #64748b)}.meal-guest-list__total-value.sc-ir-meal-guest-list{font-weight:var(--wa-font-weight-bold, 700);color:var(--wa-color-brand-fill-loud)}.meal-guest-list__total-meta.sc-ir-meal-guest-list{color:var(--wa-color-text-quiet, #64748b)}.meal-guest-list__empty.sc-ir-meal-guest-list{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;min-height:200px}@media (min-width: 1280px){.cell__rate-plan.sc-ir-meal-guest-list{width:35% !important}}`;

const IrMealGuestList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    guestList = [];
    tableState = {};
    columnHelper = useTable.createColumnHelper();
    columns = [
        this.columnHelper.accessor(row => row.unit.name, {
            id: 'unit',
            header: 'Unit',
            enableSorting: false,
            cell: info => index.h("span", { class: "meal-guest-list__unit" }, info.getValue()),
        }),
        this.columnHelper.accessor(row => `${row.guest.first_name} ${row.guest.last_name}`.trim(), {
            id: 'guest',
            header: 'Guest name',
            enableSorting: false,
            cell: info => (index.h("div", { class: "meal-guest-list__guest" }, index.h("span", null, info.getValue()), info.row.original.is_arriving_today && (index.h("wa-tag", { size: "s", variant: "brand", pill: true, class: "meal-guest-list__arr" }, "ARR")))),
        }),
        this.columnHelper.accessor(row => `${row.occupancy.adult_nbr} - ${row.occupancy.children_nbr}`, {
            id: 'occupancy',
            header: 'Ad Ch',
            enableSorting: false,
            cell: info => index.h("span", { class: "meal-guest-list__muted" }, info.getValue()),
        }),
        this.columnHelper.accessor(row => row.source?.Label ?? '', {
            id: 'source',
            header: 'Source',
            enableSorting: false,
            cell: info => index.h("span", { class: "meal-guest-list__muted" }, info.getValue()),
        }),
        this.columnHelper.accessor(row => row.rate_plan?.short_name ?? '', {
            id: 'ratePlan',
            header: 'Rate plan',
            enableSorting: false,
            cell: info => index.h("span", { class: "meal-guest-list__muted" }, info.getValue()),
        }),
    ];
    onTableStateChange = (updater) => {
        const next = typeof updater === 'function' ? updater(this.tableState) : updater;
        if (JSON.stringify(this.tableState) === JSON.stringify(next))
            return;
        this.tableState = next;
    };
    render() {
        const list = this.guestList ?? [];
        if (list.length === 0) {
            return (index.h(index.Host, null, index.h("div", { class: "meal-guest-list__empty" }, index.h("ir-empty-state", { message: "No guests found for the current filters." }))));
        }
        const table = useTable.useTable({
            data: list,
            columns: this.columns,
            state: this.tableState,
            onStateChange: this.onTableStateChange,
            getCoreRowModel: useTable.getCoreRowModel(),
            // getSortedRowModel: getSortedRowModel(),
        });
        const totalAdults = list.reduce((sum, item) => sum + (item.occupancy?.adult_nbr || 0), 0);
        const totalChildren = list.reduce((sum, item) => sum + (item.occupancy?.children_nbr || 0), 0);
        const isCentered = (id) => id === 'occupancy';
        return (index.h(index.Host, null, index.h("div", { class: "table--container" }, index.h("table", { class: "table  mb-0" }, index.h("thead", null, table.getHeaderGroups().map(headerGroup => (index.h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => {
            const canSort = header.column.getCanSort();
            return (index.h("th", { key: header.id, class: { 'sortable': canSort, 'cell__rate-plan': header.id === 'ratePlan', 'cell--align-center': isCentered(header.column.id) }, onClick: canSort ? header.column.getToggleSortingHandler() : undefined }, index.h("div", { class: { 'meal-guest-list__th': false, 'meal-guest-list__th--center': isCentered(header.column.id) } }, index.h("span", null, useTable.flexRender(header.column.columnDef.header, header.getContext())))));
        }))))), index.h("tbody", null, table.getRowModel().rows.map(row => (index.h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (index.h("td", { key: cell.id, class: { 'cell--align-center': isCentered(cell.column.id) } }, useTable.flexRender(cell.column.columnDef.cell, cell.getContext())))))))), index.h("tfoot", null, index.h("tr", { class: "meal-guest-list__total-row" }, index.h("td", null), index.h("td", { class: "meal-guest-list__total-label" }, "Total"), index.h("td", { class: "meal-guest-list__total-value cell--align-center" }, totalAdults, " - ", totalChildren), index.h("td", { colSpan: 2, class: "meal-guest-list__total-meta" }, list.length, " Units \u00B7 ", totalAdults + totalChildren, " Guests")))))));
    }
};
IrMealGuestList.style = irMealGuestListCss();

const irMealReportFiltersCss = () => `.sc-ir-meal-report-filters-h{display:block}.ir-meal-report-filters__warning.sc-ir-meal-report-filters{padding:var(--wa-space-xs);border:1px solid var(--wa-color-warning-200);border-radius:var(--wa-border-radius-m);background:var(--wa-color-warning-50);color:var(--wa-color-warning-700);font-size:var(--wa-font-size-x-small)}`;

const IrMealReportFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.reportTypeChange = index.createEvent(this, "reportTypeChange");
        this.dateChange = index.createEvent(this, "dateChange");
        this.mealTypeChange = index.createEvent(this, "mealTypeChange");
        this.filterApply = index.createEvent(this, "filterApply");
        this.filterReset = index.createEvent(this, "filterReset");
        this.presetDate = index.createEvent(this, "presetDate");
    }
    reportType = 'GUEST_LIST';
    fromDate;
    toDate;
    mealType = null;
    setupEntries;
    isLoading = false;
    lcz = {};
    reportTypeChange;
    dateChange;
    mealTypeChange;
    filterApply;
    filterReset;
    presetDate;
    render() {
        const mealTypes = this.setupEntries?.meal_type || [];
        const todayDate = moment.hooks().format('YYYY-MM-DD');
        const tomorrowDate = moment.hooks().add(1, 'day').format('YYYY-MM-DD');
        // Reflect which preset (Today/Tomorrow) is currently active based on the selected fromDate.
        const selectedPreset = this.fromDate === todayDate ? 'today' : this.fromDate === tomorrowDate ? 'tomorrow' : '';
        return (index.h("ir-filter-card", { key: '20453f442acf8f0184aa64bb69f7feac88132a13' }, index.h("wa-radio-group", { key: 'ea72a019b482c711e53260c5eb426ae8e4034966', label: "Report type", size: "s", orientation: "horizontal", value: this.reportType, onchange: e => {
                this.reportTypeChange.emit(e.target.value);
            } }, index.h("wa-radio", { key: 'f8df7cc676f49d4609354d49f0e7b8627057a469', style: { flex: '1' }, appearance: "button", value: "GUEST_LIST" }, "Guest list"), index.h("wa-radio", { key: '84018dbcb79d6ee2d2597d17842d06196d649a75', style: { flex: '1' }, appearance: "button", value: "MEAL_COUNT" }, "Meal count")), this.reportType === 'GUEST_LIST' ? (index.h("wa-radio-group", { label: "Stay date", size: "s", orientation: "horizontal", value: selectedPreset, onchange: e => {
                this.presetDate.emit(e.target.value);
            } }, index.h("wa-radio", { style: { flex: '1' }, appearance: "button", value: "today" }, "Today"), index.h("wa-radio", { style: { flex: '1' }, appearance: "button", value: "tomorrow" }, "Tomorrow"))) : (index.h("div", null, index.h("ir-date-range-filter", { label: "Stay date", fromDate: this.fromDate, showQuickActions: false, toDate: this.toDate, minDate: moment.hooks().format('YYYY-MM-DD'), maxDate: moment.hooks().add(14, 'days').format('YYYY-MM-DD'), onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dateChange.emit({
                    from,
                    to,
                });
            }, withClear: false, selectionMode: "auto" }))), this.reportType === 'GUEST_LIST' &&
            (mealTypes.length > 0 ? (index.h("wa-radio-group", { defaultValue: this.mealType, label: "Meal type", size: "s", orientation: "horizontal", value: this.mealType, style: { width: '100%' }, onchange: e => {
                    this.mealTypeChange.emit(e.target.value);
                } }, mealTypes.map(type => (index.h("wa-radio", { style: { flex: '1' }, appearance: "button", value: type.CODE_NAME }, type.CODE_VALUE_EN))))) : (index.h("div", { class: "ir-meal-report-filters__warning" }, "No meal types found."))), index.h("div", { key: 'f6808485e40338968a39b07e9278f25e3e8c2c61', slot: "footer" }, index.h("ir-custom-button", { key: '8e1ac8b4f07bf3a1c4b0f30f47cce854ac508900', type: "button", size: "s", variant: "neutral", appearance: "filled", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            } }, this.lcz.Lcz_Reset || 'Reset'), index.h("ir-custom-button", { key: '4772a16d0aafe0a1fab9626967eda9e4ded9e290', type: "button", size: "s", variant: "brand", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, this.lcz.Lcz_Apply || 'Apply'))));
    }
};
IrMealReportFilters.style = irMealReportFiltersCss();

const irMetricCardCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{--ir-metric-card-padding:var(--wa-space-m);--ir-metric-card-gap:var(--wa-space-2xs, 0.25rem);--ir-metric-card-radius:var(--wa-border-radius-l, 0.75rem);--ir-metric-card-bg:var(--wa-color-surface-default, #ffffff);--ir-metric-card-border:var(--wa-color-surface-border, #e2e8f0);--ir-metric-card-value-size:var(--wa-font-size-2xl, 1.5rem);--ir-metric-card-accent:var(--wa-color-neutral-fill-loud, #64748b);--ir-metric-card-accent-quiet:var(--wa-color-neutral-fill-quiet, #f1f5f9);--ir-metric-card-accent-on-quiet:var(--wa-color-neutral-on-quiet, #475569);display:block}:host([intent='brand']){--ir-metric-card-accent:var(--wa-color-brand-fill-loud);--ir-metric-card-accent-quiet:var(--wa-color-brand-fill-quiet);--ir-metric-card-accent-on-quiet:var(--wa-color-brand-on-quiet)}:host([intent='success']){--ir-metric-card-accent:var(--wa-color-success-fill-loud);--ir-metric-card-accent-quiet:var(--wa-color-success-fill-quiet);--ir-metric-card-accent-on-quiet:var(--wa-color-success-on-quiet)}:host([intent='warning']){--ir-metric-card-accent:var(--wa-color-warning-fill-loud);--ir-metric-card-accent-quiet:var(--wa-color-warning-fill-quiet);--ir-metric-card-accent-on-quiet:var(--wa-color-warning-on-quiet)}:host([intent='danger']){--ir-metric-card-accent:var(--wa-color-danger-fill-loud);--ir-metric-card-accent-quiet:var(--wa-color-danger-fill-quiet);--ir-metric-card-accent-on-quiet:var(--wa-color-danger-on-quiet)}:host([size='medium']){--ir-metric-card-padding:var(--wa-space-l);--ir-metric-card-value-size:var(--wa-font-size-3xl, 1.875rem)}.metric{position:relative;display:flex;flex-direction:column;gap:var(--ir-metric-card-gap);height:100%;padding:var(--ir-metric-card-padding);background-color:var(--ir-metric-card-bg);border:1px solid var(--ir-metric-card-border);border-radius:var(--ir-metric-card-radius);overflow:hidden}.metric::before{content:'';position:absolute;inset-block:0;inset-inline-start:0;width:3px;background-color:var(--ir-metric-card-accent);opacity:0.9}.metric__header{display:flex;align-items:center;gap:var(--wa-space-xs, 0.5rem);min-width:0}.metric__icon{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;width:1.75rem;height:1.75rem;border-radius:var(--wa-border-radius-m, 0.5rem);color:var(--ir-metric-card-accent);background-color:var(--ir-metric-card-accent-quiet);font-size:var(--wa-font-size-s, 0.875rem)}.metric__icon:empty{display:none}.metric__label{min-width:0;font-size:var(--wa-font-size-xs, 0.75rem);font-weight:var(--wa-font-weight-semibold, 600);letter-spacing:0.02em;text-transform:uppercase;color:var(--wa-color-text-quiet, #64748b);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.metric__main{display:flex;flex-direction:column;gap:0.125rem}.metric__value{display:flex;align-items:baseline;flex-wrap:wrap;gap:var(--wa-space-xs, 0.5rem);line-height:var(--wa-line-height-condensed, 1.2)}.metric__value-number{font-family:var(--wa-font-family-heading, inherit);font-size:var(--ir-metric-card-value-size);font-weight:var(--wa-font-weight-bold, 700);font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal, #0f172a)}.metric__unit{font-size:var(--wa-font-size-s, 0.875rem);font-weight:var(--wa-font-weight-normal, 400);color:var(--wa-color-text-quiet, #64748b)}.metric__caption{font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet, #64748b)}.metric__trend{display:inline-flex;align-items:center;gap:0.2rem;margin-inline-start:auto;padding:0.05rem 0.4rem;font-size:var(--wa-font-size-xs, 0.75rem);font-weight:var(--wa-font-weight-semibold, 600);font-variant-numeric:tabular-nums;line-height:1.4;border-radius:var(--wa-border-radius-pill, 9999px);white-space:nowrap}.metric__trend--positive{color:var(--wa-color-success-on-quiet, #166534);background-color:var(--wa-color-success-fill-quiet, #dcfce7)}.metric__trend--negative{color:var(--wa-color-danger-on-quiet, #991b1b);background-color:var(--wa-color-danger-fill-quiet, #fee2e2)}.metric__trend--flat{color:var(--wa-color-neutral-on-quiet, #475569);background-color:var(--wa-color-neutral-fill-quiet, #f1f5f9)}.metric__trend-label{font-weight:var(--wa-font-weight-normal, 400);opacity:0.85}.metric__body,.metric__footer{display:contents}.metric__skeleton{display:flex;flex-direction:column;gap:0.4rem}.metric__skeleton-bar{display:block;height:0.75rem;border-radius:var(--wa-border-radius-s, 0.25rem);background:linear-gradient(     90deg,     var(--wa-color-neutral-fill-quiet, #f1f5f9) 25%,     var(--wa-color-neutral-fill-normal, #e2e8f0) 37%,     var(--wa-color-neutral-fill-quiet, #f1f5f9) 63%   );background-size:400% 100%;animation:ir-metric-shimmer 1.4s ease infinite}.metric__skeleton-bar--value{width:60%;height:1.5rem}.metric__skeleton-bar--caption{width:40%}@keyframes ir-metric-shimmer{0%{background-position:100% 50%}100%{background-position:0 50%}}:host([clickable]){cursor:pointer}:host([clickable]) .metric{transition:transform var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease),     box-shadow var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease),     border-color var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease)}:host([clickable]:hover) .metric{transform:translateY(-2px);box-shadow:var(--wa-shadow-m, 0 4px 12px rgb(0 0 0 / 0.08));border-color:var(--ir-metric-card-accent)}:host([clickable]:focus){outline:none}:host([clickable]:focus-visible) .metric{outline:var(--wa-focus-ring, 2px solid var(--ir-metric-card-accent));outline-offset:var(--wa-focus-ring-offset, 2px)}@media (prefers-reduced-motion: reduce){:host([clickable]) .metric,.metric__skeleton-bar{transition:none;animation:none}:host([clickable]:hover) .metric{transform:none}}`;

const IrMetricCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.metricClick = index.createEvent(this, "metricClick");
    }
    /** Metric label / title. */
    label;
    /** Primary metric value. Rendered with tabular figures. */
    value;
    /** Unit rendered after the value (e.g. `guests`, `%`, `nights`). */
    unit;
    /** Name of a `wa-icon` rendered in the leading icon chip. */
    icon;
    /** Accent color used for the icon chip, trend, and accent edge. */
    intent = 'neutral';
    /** Trend delta as a percentage. The sign selects the up/down arrow and color. */
    trend;
    /** Context text shown beside the trend (e.g. `vs last week`). */
    trendLabel;
    /** Flip trend color semantics so a decrease reads as positive (good). */
    invertTrend = false;
    /** Secondary descriptive line shown beneath the value. */
    caption;
    /** Render skeleton placeholders instead of content. */
    loading = false;
    /** Visual density. `small` is compact (default); `medium` enlarges the value and padding. */
    size = 'small';
    /** Make the whole card interactive: adds hover/focus affordance and emits `metricClick`. */
    clickable = false;
    /** Emitted when a clickable card is activated by click or keyboard (Enter / Space). */
    metricClick;
    handleActivate = () => {
        if (this.clickable && !this.loading) {
            this.metricClick.emit();
        }
    };
    handleKeyDown = (event) => {
        if (!this.clickable) {
            return;
        }
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
            event.preventDefault();
            this.handleActivate();
        }
    };
    get trendDirection() {
        if (this.trend === undefined || this.trend === null || Number.isNaN(this.trend) || this.trend === 0) {
            return 'flat';
        }
        return this.trend > 0 ? 'up' : 'down';
    }
    get trendIsPositive() {
        const rising = this.trendDirection === 'up';
        return this.invertTrend ? !rising : rising;
    }
    renderTrend() {
        if (this.trend === undefined || this.trend === null || Number.isNaN(this.trend)) {
            return null;
        }
        const direction = this.trendDirection;
        const tone = direction === 'flat' ? 'flat' : this.trendIsPositive ? 'positive' : 'negative';
        const iconName = direction === 'up' ? 'arrow-trend-up' : direction === 'down' ? 'arrow-trend-down' : 'minus';
        const magnitude = Math.abs(this.trend);
        const ariaLabel = `${direction === 'flat' ? 'no change' : direction} ${magnitude} percent`;
        return (index.h("span", { part: "trend", class: `metric__trend metric__trend--${tone}`, "aria-label": ariaLabel }, index.h("wa-icon", { name: iconName, "aria-hidden": "true" }), index.h("span", null, magnitude, "%"), this.trendLabel && index.h("span", { class: "metric__trend-label" }, this.trendLabel)));
    }
    renderIcon() {
        return (index.h("span", { part: "icon", class: "metric__icon" }, index.h("slot", { name: "icon" }, this.icon && index.h("wa-icon", { name: this.icon, "aria-hidden": "true" }))));
    }
    render() {
        const hasIcon = !!this.icon;
        const interactive = this.clickable && !this.loading;
        const ariaLabel = [this.label, this.value, this.unit].filter(Boolean).join(' ') || undefined;
        return (index.h(index.Host, { key: '5e74e3b61c5a7697fedb126a8ac70538b5bac243', role: this.clickable ? 'button' : null, tabindex: interactive ? '0' : null, "aria-label": this.clickable ? ariaLabel : null, "aria-busy": this.loading ? 'true' : null, onClick: interactive ? this.handleActivate : undefined, onKeyDown: interactive ? this.handleKeyDown : undefined }, index.h("div", { key: 'ed23a3795730b2cdd8b0919f43e4983bb5c9eca0', part: "base", class: "metric" }, (hasIcon || this.label) && (index.h("div", { key: '4a89b4c3922de9e3c67004efccd781a6bd117f08', part: "header", class: "metric__header" }, hasIcon && this.renderIcon(), index.h("span", { key: 'e3e13c48a1837e409684887ce6134f427abf3e3a', part: "label", class: "metric__label" }, index.h("slot", { key: 'f844dbf8561129b5e542de4eda0353cbacf48724', name: "label" }, this.label)))), this.loading ? (index.h("div", { class: "metric__skeleton" }, index.h("span", { class: "metric__skeleton-bar metric__skeleton-bar--value" }), index.h("span", { class: "metric__skeleton-bar metric__skeleton-bar--caption" }))) : (index.h("div", { class: "metric__main" }, index.h("div", { part: "value", class: "metric__value" }, index.h("slot", { name: "value" }, this.value !== undefined && this.value !== null && index.h("span", { class: "metric__value-number" }, this.value), this.unit && (index.h("span", { part: "unit", class: "metric__unit" }, this.unit))), this.renderTrend()), this.caption && (index.h("p", { part: "caption", class: "metric__caption" }, this.caption)))), index.h("div", { key: '62ed586d5732edb9d916b6dd13c7b40859d116db', part: "body", class: "metric__body" }, index.h("slot", { key: '101414ca71cb61f5a347a4911e9f77246745d58f' })), index.h("div", { key: 'f9c46bf8d7944fb969e606ab1e728efc0af0e7d9', part: "footer", class: "metric__footer" }, index.h("slot", { key: 'c0cbea5158ecd55476332f110e978aabc11f0eb4', name: "footer" })))));
    }
};
IrMetricCard.style = irMetricCardCss();

exports.ir_filter_card = IrFilterCard;
exports.ir_meal_count_summary = IrMealCountSummary;
exports.ir_meal_guest_list = IrMealGuestList;
exports.ir_meal_report_filters = IrMealReportFilters;
exports.ir_metric_card = IrMetricCard;
