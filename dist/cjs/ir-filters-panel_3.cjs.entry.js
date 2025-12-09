'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const locales_store = require('./locales.store-4eb57996.js');
const moment = require('./moment-1780b03a.js');
const utils = require('./utils-bca29761.js');
require('./index-6299b0f7.js');
require('./index-ffd50e35.js');
require('./calendar-data-e7cdcfec.js');
require('./axios-6e678d52.js');

const irFiltersPanelCss = ".sc-ir-filters-panel-h{display:block;height:100%}.filters-panel.sc-ir-filters-panel{height:100%}.filters-panel.sc-ir-filters-panel>.card.sc-ir-filters-panel{height:100%}.filters-panel__header.sc-ir-filters-panel{display:flex;align-items:center;justify-content:space-between}.filters-panel__title-group.sc-ir-filters-panel{display:flex;align-items:center;flex:1 1 auto;gap:0.5rem}.filters-panel__header-actions.sc-ir-filters-panel{display:flex;align-items:center;gap:0.5rem}.filters-panel__content.sc-ir-filters-panel{margin-top:0.5rem}.filters-panel__content.collapse.sc-ir-filters-panel:not(.show){display:none}.filters-panel__content-inner.sc-ir-filters-panel{display:flex;flex-direction:column}.filters-panel__footer.sc-ir-filters-panel{display:flex;align-items:center;gap:1rem;margin-top:0.75rem}.filters-panel__footer--start.sc-ir-filters-panel{justify-content:flex-start}.filters-panel__footer--center.sc-ir-filters-panel{justify-content:center}.filters-panel__footer--end.sc-ir-filters-panel{justify-content:flex-end}.filters-panel__footer--space-between.sc-ir-filters-panel{justify-content:space-between}.filters-panel__footer--space-around.sc-ir-filters-panel{justify-content:space-around}@media (min-width: 768px){.filters-panel--persistent.sc-ir-filters-panel .collapse-btn.sc-ir-filters-panel{display:none}.filters-panel--persistent.sc-ir-filters-panel .filters-panel__content.collapse.sc-ir-filters-panel:not(.show){display:block}}";
const IrFiltersPanelStyle0 = irFiltersPanelCss;

let panelId = 0;
const IrFiltersPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filterToggle = index.createEvent(this, "irFilterToggle", 7);
        this.filterApply = index.createEvent(this, "irFilterApply", 7);
        this.filterReset = index.createEvent(this, "irFilterReset", 7);
    }
    /** Panel headline text */
    filterTitle = locales_store.locales.entries.Lcz_Filters;
    /** Optional custom collapse target id (useful for legacy CSS hooks) */
    collapseId;
    /** Show collapse toggle button */
    showCollapseButton = true;
    /** Collapse by default */
    defaultCollapsed = false;
    /** Controlled collapse state */
    collapsed;
    /** Keep content expanded on desktop and hide the collapse toggle */
    persistentOnDesktop = true;
    /** Optional extra class for the outer wrapper */
    panelClass;
    /** Optional extra class for the card wrapper */
    cardClass = 'sales-filters-card';
    /** Optional extra class for the header row */
    headerClass;
    /** Optional extra class for the filters content wrapper */
    contentClass;
    /** Space between content items */
    contentGap = '0.5rem';
    /** Align footer actions */
    actionsAlign = 'end';
    /** Hide the default footer actions */
    hideDefaultActions = false;
    /** Collapse icon when expanded */
    collapseIconOpen = 'open_eye';
    /** Collapse icon when collapsed */
    collapseIconClosed = 'closed_eye';
    /** Apply button copy */
    applyLabel = locales_store.locales.entries.Lcz_Apply;
    /** Reset button copy */
    resetLabel = locales_store.locales.entries.Lcz_Reset;
    /** Disable apply action */
    disableApply = false;
    /** Disable reset action */
    disableReset = false;
    /** Show loader inside apply button */
    isApplyLoading = false;
    /** Optional data test id suffix for default buttons */
    actionTestId = 'filter';
    filterToggle;
    filterApply;
    filterReset;
    internalCollapsed = false;
    generatedCollapseId = `ir-filters-panel-${++panelId}`;
    componentWillLoad() {
        this.internalCollapsed = this.collapsed ?? this.defaultCollapsed;
    }
    handleCollapsedChange(newValue) {
        if (typeof newValue === 'boolean' && newValue !== this.internalCollapsed) {
            this.internalCollapsed = newValue;
        }
    }
    get targetId() {
        return this.collapseId || this.generatedCollapseId;
    }
    toggleCollapse(event) {
        event?.stopPropagation();
        const next = !this.internalCollapsed;
        this.internalCollapsed = next;
        this.collapsed = next;
        this.filterToggle.emit({ collapsed: next });
    }
    handleReset(event) {
        event.stopPropagation();
        this.filterReset.emit();
    }
    handleApply(event) {
        event.stopPropagation();
        this.filterApply.emit();
    }
    renderDefaultIcon() {
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })));
    }
    renderCollapseButton(collapsed) {
        if (!this.showCollapseButton) {
            return null;
        }
        return (index.h("ir-button", { variant: "icon", "aria-expanded": !collapsed ? 'true' : 'false', "aria-controls": this.targetId, class: "collapse-btn toggle-collapse-btn", icon_name: collapsed ? this.collapseIconClosed : this.collapseIconOpen, visibleBackgroundOnHover: true, onClickHandler: this.toggleCollapse.bind(this), btn_type: "button", style: { '--icon-size': '1.6rem' } }));
    }
    render() {
        const collapsed = this.internalCollapsed;
        const panelClasses = {
            'filters-panel': true,
            'filters-panel--persistent': this.persistentOnDesktop,
        };
        if (this.panelClass) {
            panelClasses[this.panelClass] = true;
        }
        const headerClasses = {
            'filters-panel__header': true,
        };
        if (this.headerClass) {
            headerClasses[this.headerClass] = true;
        }
        const contentWrapperClasses = {
            'filters-panel__content-inner': true,
        };
        if (this.contentClass) {
            contentWrapperClasses[this.contentClass] = true;
        }
        const footerClasses = {
            'filters-panel__footer': true,
            'filter-actions': true,
            'd-flex': true,
            'align-items-center': true,
            [`filters-panel__footer--${this.actionsAlign}`]: true,
        };
        const cardClass = `card mb-0 p-1 d-flex flex-column ${this.cardClass || ''}`.trim();
        return (index.h("div", { key: '134618c83ffbfe450c8796b51fb96f26e5c41d63', class: panelClasses }, index.h("div", { key: '098b71c11a8772616734267d6e5e3865a1e2fa72', class: cardClass }, index.h("div", { key: '8b8b79734249ec29c28d80c423c78d93329e3833', class: headerClasses }, index.h("div", { key: '4babce2eda7506f46366a605305668f86a117c3a', class: "filters-panel__title-group" }, index.h("slot", { key: '64a1d924230b9afc7a240c8816ba0445c3a6debb', name: "header-icon" }, this.renderDefaultIcon()), this.filterTitle && index.h("h4", { key: '1233a69453562d539a61ae3671281f55877ede01', class: "filters-panel__title m-0 p-0 flex-grow-1" }, this.filterTitle), index.h("slot", { key: 'b0fbeed46709eb924eef74289916d346628e00d0', name: "header-title-extra" })), index.h("div", { key: '2f68090f316bffafc79dfec83df65fd44aa31583', class: "filters-panel__header-actions" }, index.h("slot", { key: '6694a28162b8f982d9af8f8dd36d17e367f975e9', name: "header-actions" }), this.renderCollapseButton(collapsed))), index.h("div", { key: '46d5a2d3b7a35a1cf53061839aa7a9e719f08811', id: this.targetId, class: {
                'filters-panel__content': true,
                'collapse': true,
                'show': !collapsed,
            }, "aria-hidden": collapsed ? 'true' : 'false' }, index.h("div", { key: 'af5fcb21bbec549f1a2fc93c6d1e6c074b300ef6', class: contentWrapperClasses, style: { gap: this.contentGap } }, index.h("slot", { key: '059ee82b76332f191f7b6ad63b205ac9080fd714' }), !this.hideDefaultActions && (index.h("div", { key: '7dffbd986e21dae2b3ce6332266e682b1c0756f4', class: footerClasses }, index.h("slot", { key: 'b0ba0054eb1f4a9130309adbb61cb088eade551b', name: "actions" }, index.h("ir-button", { key: 'd86cf8587bcec86a743d01c7eb975d86e04fea16', btn_type: "button", "data-testid": `${this.actionTestId}-reset`, text: this.resetLabel, size: "sm", btn_color: "secondary", btn_disabled: this.disableReset, onClickHandler: this.handleReset.bind(this) }), index.h("ir-button", { key: 'ffbe93173484d95d7bff32d24e964809b0aa686c', btn_type: "button", "data-testid": `${this.actionTestId}-apply`, isLoading: this.isApplyLoading, text: this.applyLabel, size: "sm", btn_disabled: this.disableApply, onClickHandler: this.handleApply.bind(this) })))))))));
    }
    static get watchers() { return {
        "collapsed": ["handleCollapsedChange"]
    }; }
};
IrFiltersPanel.style = IrFiltersPanelStyle0;

const irSalesByChannelFiltersCss = ".sc-ir-sales-by-channel-filters-h{display:block}";
const IrSalesByChannelFiltersStyle0 = irSalesByChannelFiltersCss;

const IrSalesByChannelFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters", 7);
    }
    isLoading;
    baseFilters;
    allowedProperties;
    filters;
    window;
    applyFilters;
    componentWillLoad() {
        this.filters = { ...this.baseFilters };
        this.window = this.baseFilters.WINDOW;
    }
    updateFilter(params) {
        this.filters = { ...this.filters, ...params };
    }
    render() {
        console.log(this.filters);
        return (index.h("ir-filters-panel", { key: '128c427a87c0a6534b7aef396001c00f7e52a6b4', isApplyLoading: this.isLoading, onIrFilterApply: () => {
                this.applyFilters.emit(this.filters);
            }, onIrFilterReset: () => {
                this.filters = { ...this.baseFilters };
                this.applyFilters.emit(this.filters);
            } }, index.h("fieldset", { key: 'aafebc15739c314976fb17fb5eb58b11ddf63ef2', class: "pt-1 filter-group" }, index.h("label", { key: '73dc41e4dfdcf577c64ff10fe141f0e74df34b21', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), index.h("ir-select", { key: '2d64f569b2fcea911c348d5ff48e42f880a96836', selectedValue: this.filters?.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), this.allowedProperties.length > 1 && (index.h("fieldset", { key: '7517fba845d56e00dff3422f30ca075e4ebd61b8', class: "filter-group" }, index.h("label", { key: 'e3a899c49778be5493ad3bad1d41dcdeb7ad0c55', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Properties"), index.h("ir-m-combobox", { key: '05ac79ed7aa57d5fc8eb2b441244a3f9e231157b', defaultOption: this.filters?.LIST_AC_ID?.length === this.allowedProperties?.length ? 'all' : this.filters?.LIST_AC_ID[0]?.toString(), onOptionChange: e => {
                const value = e.detail.value;
                if (value === 'all') {
                    this.updateFilter({
                        LIST_AC_ID: this.allowedProperties.map(p => p.id),
                    });
                }
                else
                    this.updateFilter({
                        LIST_AC_ID: this.allowedProperties.filter(e => e.id === Number(value)).map(p => p.id),
                    });
            }, options: [
                { label: 'All', value: 'all' },
                ...this.allowedProperties.map(p => ({
                    label: p.name,
                    value: p.id.toString(),
                })),
            ] }))), index.h("fieldset", { key: 'a31151d48b2625e2f699e6dcecd4ea8fa789094e', class: "filter-group" }, index.h("label", { key: 'cf2db0bcf19cee31ef5a17f50d1e191f6435ae62', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), index.h("div", { key: 'b0446187334ec8a013b7cad741cb1a33f0303ac1', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: '9a76806e22df423f040c5a34b49a3b44def8370a', selectedValue: this.window?.toString(), onSelectChange: e => {
                const dateDiff = Number(e.detail);
                const today = moment.hooks();
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: today.format('YYYY-MM-DD'),
                    FROM_DATE: today.add(-dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = e.detail;
            }, selectId: "period",
            // showFirstOption={false}
            firstOption: "...", data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), index.h("p", { key: '197d0b5f258e019f824c6296ecfa8fdf318ccdb0', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: 'f986b8c8d1c2f0ee92a93ec9a431ca89a9db2145', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate, wasFocused } = e.detail;
                this.updateFilter({
                    FROM_DATE: fromDate.format('YYYY-MM-DD'),
                    TO_DATE: toDate.format('YYYY-MM-DD'),
                });
                if (wasFocused)
                    this.window = null;
                // this.dates = { from: fromDate, to: toDate };
            }, fromDate: moment.hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: moment.hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: moment.hooks().format('YYYY-MM-DD'), withOverlay: false }))), index.h("div", { key: '1079e3d463e246560246b1dfd4cff854132c116a', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: '546144d9a4e15dd994c412f74925da5d2b3b4c7a', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: '331c785c6f76b02950c35085ab96017bef74d9cd', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } }))));
    }
};
IrSalesByChannelFilters.style = IrSalesByChannelFiltersStyle0;

const irSalesByChannelTableCss = ".sc-ir-sales-by-channel-table-h{display:block;width:100%}.legend.sc-ir-sales-by-channel-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-by-channel-table{background:#6692b3}.channel-cell.sc-ir-sales-by-channel-table{width:100%}.task-row.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.sales-by-channel-table__progress-col.sc-ir-sales-by-channel-table{width:50%}.sales-by-channel-table__progress-col.single.sc-ir-sales-by-channel-table{display:none !important}@media (min-width: 768px){.sales-by-channel-table__progress-col.single.sc-ir-sales-by-channel-table{display:table-cell !important}}.outer-container.sc-ir-sales-by-channel-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-by-channel-table tfoot.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-bottom:0}.flag.sc-ir-sales-by-channel-table{height:16px;width:23px;border-radius:3px}";
const IrSalesByChannelTableStyle0 = irSalesByChannelTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-by-channel-table tbody.sc-ir-sales-by-channel-table tr.sc-ir-sales-by-channel-table:last-child>td.sc-ir-sales-by-channel-table{border-bottom:0 !important}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-sales-by-channel-table .empty-row.sc-ir-sales-by-channel-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-sales-by-channel-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{background:#e3f3fa !important}.selected.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-by-channel-table,.ir-table-row.sc-ir-sales-by-channel-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-by-channel-table{text-transform:capitalize}.sortable.sc-ir-sales-by-channel-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-sales-by-channel-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-by-channel-table svg.sc-ir-sales-by-channel-table{color:var(--blue)}.sticky-column.sc-ir-sales-by-channel-table{position:sticky !important;right:0;background-color:white}";
const IrSalesByChannelTableStyle1 = tableCss;

const IrSalesByChannelTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    records;
    allowedProperties;
    mode;
    visibleCount = 10;
    properties = new Map();
    componentWillLoad() {
        this.setupProperties();
    }
    handlePropertiesChange() {
        this.setupProperties();
    }
    setupProperties() {
        const map = new Map();
        for (const property of this.allowedProperties) {
            map.set(property.id, property.name);
        }
        this.properties = new Map(map);
    }
    handleLoadMore = () => {
        this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
    };
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        const isSingleProperty = this.mode === 'property';
        return (index.h("div", { key: '30e8d875668f93fac13a9b0d38e2c04009ebb4c8', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: 'b4ee8d3ff27df802df84b884ae55e0c4a82aa926', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: 'b499e57db794c1313af3f73767919cf61d58f9a3', class: "table-header" }, index.h("tr", { key: '615471d1ccd391641793e30c21d574b029e404ee' }, index.h("th", { key: 'c67d62a7666b91d1ee67e152a09b80606ff2c32e', class: "text-left" }, "Channel"), index.h("th", { key: '64987b47d05e30a937ff0ecdb27442aefed1b842', class: "text-center" }, "Room nights"), index.h("th", { key: '9a0f57f72365b652505d0da18898c17d31ba4da1', class: "text-right" }, "Room Revenue"), index.h("th", { key: 'b73f7a84da58cc88eb21057b4523fd1a0192ad81', class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), index.h("tbody", { key: '2a872e96deb654db7e85630c484bbe2f541deaa5' }, this.records.length === 0 && (index.h("tr", { key: 'b0667d49205feba4eb351114d364f5e610d820df' }, index.h("td", { key: '6de932fbca010845c994cf791b95383b8a20c274', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (index.h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, index.h("td", { class: "text-left" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${record.last_year?.SOURCE ? 'font-weight-bold' : ''}` }, record.SOURCE), record.last_year?.SOURCE && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${record.last_year?.NIGHTS ? 'font-weight-bold' : ''}` }, record.NIGHTS), record.last_year?.NIGHTS && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), index.h("td", { class: "text-right " }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${record.last_year?.REVENUE ? 'font-weight-bold' : ''}` }, utils.formatAmount(record.currency, record.REVENUE)), record.last_year?.REVENUE && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, utils.formatAmount(record.currency, record.last_year.REVENUE))))), index.h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (index.h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.PCT && index.h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" }))))));
        })), isSingleProperty && (index.h("tfoot", { key: 'eabe3c4d78e29dd993da2144d15ee5dbafaf2330' }, index.h("tr", { key: '35df62b070a1044302099abf93e33c2e459c2b7d', style: { fontSize: '12px' } }, index.h("td", { key: '050eb73a88f075440e18ba6d570796e3faf7b079', colSpan: 4 }, index.h("div", { key: '6125a9e949fe5b8047347db444ca2beb49db0c66', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, index.h("div", { key: '5bf048b3bcc7e697565f15868d0117b59937d1e0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '17696bb990cf48639acab8f6a5702f250b58762c', class: "legend bg-primary" }), index.h("p", { key: '68581fe9ab8c63cedcec219ef07adadfbbc8a724', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: '54d0676e4649bbd822c75b670bb51cd178841f2a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'ba972448843db153b2164a1d2992101dcc4061d0', class: "legend secondary" }), index.h("p", { key: '77888f304328397ea232fdb22173be5ec7f7e0bd', class: "p-0 m-0" }, "Previous year")))))))), this.visibleCount < this.records.length && (index.h("div", { key: '4514f0eabab3bcfa378cfa197ea04c542345c8ca', class: 'd-flex mx-auto' }, index.h("ir-button", { key: '41c57f8ef2776b37709db54b77feb8c8484d3cbc', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
    static get watchers() { return {
        "allowedProperties": ["handlePropertiesChange"]
    }; }
};
IrSalesByChannelTable.style = IrSalesByChannelTableStyle0 + IrSalesByChannelTableStyle1;

exports.ir_filters_panel = IrFiltersPanel;
exports.ir_sales_by_channel_filters = IrSalesByChannelFilters;
exports.ir_sales_by_channel_table = IrSalesByChannelTable;

//# sourceMappingURL=ir-filters-panel_3.cjs.entry.js.map