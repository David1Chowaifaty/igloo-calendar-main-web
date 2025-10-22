'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const locales_store = require('./locales.store-a1ac5174.js');
const moment = require('./moment-1780b03a.js');
const utils = require('./utils-8b80d485.js');
require('./index-7564ffa1.js');
require('./index-63734c32.js');
require('./calendar-data-d2bec4fe.js');
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
        /** Panel headline text */
        this.filterTitle = locales_store.locales.entries.Lcz_Filters;
        /** Show collapse toggle button */
        this.showCollapseButton = true;
        /** Collapse by default */
        this.defaultCollapsed = false;
        /** Keep content expanded on desktop and hide the collapse toggle */
        this.persistentOnDesktop = true;
        /** Optional extra class for the card wrapper */
        this.cardClass = 'sales-filters-card';
        /** Space between content items */
        this.contentGap = '0.5rem';
        /** Align footer actions */
        this.actionsAlign = 'end';
        /** Hide the default footer actions */
        this.hideDefaultActions = false;
        /** Collapse icon when expanded */
        this.collapseIconOpen = 'open_eye';
        /** Collapse icon when collapsed */
        this.collapseIconClosed = 'closed_eye';
        /** Apply button copy */
        this.applyLabel = locales_store.locales.entries.Lcz_Apply;
        /** Reset button copy */
        this.resetLabel = locales_store.locales.entries.Lcz_Reset;
        /** Disable apply action */
        this.disableApply = false;
        /** Disable reset action */
        this.disableReset = false;
        /** Show loader inside apply button */
        this.isApplyLoading = false;
        /** Optional data test id suffix for default buttons */
        this.actionTestId = 'filter';
        this.internalCollapsed = false;
        this.generatedCollapseId = `ir-filters-panel-${++panelId}`;
    }
    componentWillLoad() {
        var _a;
        this.internalCollapsed = (_a = this.collapsed) !== null && _a !== void 0 ? _a : this.defaultCollapsed;
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
        event === null || event === void 0 ? void 0 : event.stopPropagation();
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
        return (index.h("div", { key: '05aaa37241775007289f863d617213586c874966', class: panelClasses }, index.h("div", { key: '1f41bd32a7ca42c5e0a615b404add4b9e08d086f', class: cardClass }, index.h("div", { key: '468d3c9fd5a0575768858db0993c2799b771b7b1', class: headerClasses }, index.h("div", { key: '1cdf996e366ba836beaccd52b05779d1aa448739', class: "filters-panel__title-group" }, index.h("slot", { key: '707cb6380e46698c49ed7fc6c95e6c9ac77c18e2', name: "header-icon" }, this.renderDefaultIcon()), this.filterTitle && index.h("h4", { key: 'f5222a222fe5a2c81692c2bd5f7ec2b7cafdb3bb', class: "filters-panel__title m-0 p-0 flex-grow-1" }, this.filterTitle), index.h("slot", { key: '71118d7ef47428f59002c39100168b27478e0c8b', name: "header-title-extra" })), index.h("div", { key: '9dafd6c3661d03d071a15e48e13952821c0c2efc', class: "filters-panel__header-actions" }, index.h("slot", { key: '95ee286dd93e0ec9962105bd9135aac03eb1c2d7', name: "header-actions" }), this.renderCollapseButton(collapsed))), index.h("div", { key: '77a3113bdf8baf7fda172aa159b3006da73dadda', id: this.targetId, class: {
                'filters-panel__content': true,
                'collapse': true,
                'show': !collapsed,
            }, "aria-hidden": collapsed ? 'true' : 'false' }, index.h("div", { key: '337072030960016525025e1097e5708ef000a038', class: contentWrapperClasses, style: { gap: this.contentGap } }, index.h("slot", { key: '017fd6b29f407433c05c288eecbf2c36ae060a3f' }), !this.hideDefaultActions && (index.h("div", { key: 'c3206bf05f0642e7f970310063d22e4f4da6f929', class: footerClasses }, index.h("slot", { key: '124b5f356a86c1125496176ebe0761e4896b1e5b', name: "actions" }, index.h("ir-button", { key: 'd1e16d6ec962dba10e3b8487cfa9322628c05cf0', btn_type: "button", "data-testid": `${this.actionTestId}-reset`, text: this.resetLabel, size: "sm", btn_color: "secondary", btn_disabled: this.disableReset, onClickHandler: this.handleReset.bind(this) }), index.h("ir-button", { key: '848a383648f54ea89faf97e3b1ec90449123f87b', btn_type: "button", "data-testid": `${this.actionTestId}-apply`, isLoading: this.isApplyLoading, text: this.applyLabel, size: "sm", btn_disabled: this.disableApply, onClickHandler: this.handleApply.bind(this) })))))))));
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
    componentWillLoad() {
        this.filters = Object.assign({}, this.baseFilters);
        this.window = this.baseFilters.WINDOW;
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        console.log(this.filters);
        return (index.h("ir-filters-panel", { key: '4f17a5eb99f35a451dc6afd60ff268cd54143f08', isApplyLoading: this.isLoading, onIrFilterApply: () => {
                this.applyFilters.emit(this.filters);
            }, onIrFilterReset: () => {
                this.filters = Object.assign({}, this.baseFilters);
                this.applyFilters.emit(this.filters);
            } }, index.h("fieldset", { key: 'ecb664e881e4be50eff941fb4aea40909b2f4fd6', class: "pt-1 filter-group" }, index.h("label", { key: '023583f892c0b14c9f08c4ccfcaba7fe93771a5b', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), index.h("ir-select", { key: 'cd54c5b9dd5d0506d7c28805118c057691996781', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), this.allowedProperties.length > 1 && (index.h("fieldset", { key: '3fd4efae9edd2890445750e5eba477ac447f4c72', class: "filter-group" }, index.h("label", { key: 'd2a7a88eef1c35d67ff67ede28cbaf7b3e26fa48', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Properties"), index.h("ir-m-combobox", { key: '2892b4886a447963ef6a6ef22dddbaeab9d4e8e5', defaultOption: ((_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.LIST_AC_ID) === null || _c === void 0 ? void 0 : _c.length) === ((_d = this.allowedProperties) === null || _d === void 0 ? void 0 : _d.length) ? 'all' : (_f = (_e = this.filters) === null || _e === void 0 ? void 0 : _e.LIST_AC_ID[0]) === null || _f === void 0 ? void 0 : _f.toString(), onOptionChange: e => {
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
            ] }))), index.h("fieldset", { key: 'dc8a3c58a6da0e1070f420dc52d5f7cadc287e96', class: "filter-group" }, index.h("label", { key: '2c43cbe825a0b8cc703c20f228de462681767af8', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), index.h("div", { key: '1e215f347ecd0d5f15e88bf444d834d057114695', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: 'a48b90ff1bbf176302973169d0d9e831dfb97bfa', selectedValue: (_g = this.window) === null || _g === void 0 ? void 0 : _g.toString(), onSelectChange: e => {
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
            ] }), index.h("p", { key: '39e77ad867cca70e783ca29f0fa2f19bf6ec5415', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: 'b1498ca93b3d8ea160cd9fec1bbb5494733a7077', onDateRangeChanged: e => {
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
            }, fromDate: moment.hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: moment.hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: moment.hooks().format('YYYY-MM-DD'), withOverlay: false }))), index.h("div", { key: '09b23443b82a65eb959daf13cb4adac2bb20d700', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: '38cc6d80b05c71bb7c8832d8c0b34a751bc6aaf1', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: '7d7bda81d4a740bbb49125baf27c5e751bd977f9', checked: (_h = this.filters) === null || _h === void 0 ? void 0 : _h.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } }))));
    }
};
IrSalesByChannelFilters.style = IrSalesByChannelFiltersStyle0;

const irSalesByChannelTableCss = ".sc-ir-sales-by-channel-table-h{display:block;width:100%}.legend.sc-ir-sales-by-channel-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-by-channel-table{background:#6692b3}.channel-cell.sc-ir-sales-by-channel-table{width:100%}.task-row.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.sales-by-channel-table__progress-col.sc-ir-sales-by-channel-table{width:50%}.sales-by-channel-table__progress-col.single.sc-ir-sales-by-channel-table{display:none !important}@media (min-width: 768px){.sales-by-channel-table__progress-col.single.sc-ir-sales-by-channel-table{display:table-cell !important}}.outer-container.sc-ir-sales-by-channel-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-by-channel-table tfoot.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-bottom:0}.flag.sc-ir-sales-by-channel-table{height:16px;width:23px;border-radius:3px}";
const IrSalesByChannelTableStyle0 = irSalesByChannelTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{background:#e3f3fa !important}.selected.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-by-channel-table,.ir-table-row.sc-ir-sales-by-channel-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-by-channel-table{text-transform:capitalize}.sortable.sc-ir-sales-by-channel-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background:#e2e6ea3f !important}.sortable.sc-ir-sales-by-channel-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-by-channel-table svg.sc-ir-sales-by-channel-table{color:var(--blue)}";
const IrSalesByChannelTableStyle1 = tableCss;

const IrSalesByChannelTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.visibleCount = 10;
        this.properties = new Map();
        this.handleLoadMore = () => {
            this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
        };
    }
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
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        const isSingleProperty = this.mode === 'property';
        return (index.h("div", { key: 'f9d18873c0f28c24c90035bb79dbc05b1d7956af', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: '6a06e70c006e427b6e3cd13f62d4264cd164e774', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '52de2eb4e89ed52201e4d321a4b136d248606aea', class: "table-header" }, index.h("tr", { key: '54333b0ef66d7525abd983ceea211d8a4fca96f6' }, index.h("th", { key: 'dfb8b43edf087674015abba0bc40f62eb06c5977', class: "text-left" }, "Channel"), index.h("th", { key: 'd2a9fbf894f68e89fb707c28181ca256bc78b954', class: "text-center" }, "Room nights"), index.h("th", { key: 'b8139ced3f02fb13f39797471e05e390f2df4000', class: "text-right" }, "Room Revenue"), index.h("th", { key: 'cd9cb2bd13e85471f7b7718d9f8a88086ea719b4', class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), index.h("tbody", { key: 'f9ed77be53f378b9951b29da39791eefec68ebe7' }, this.records.length === 0 && (index.h("tr", { key: 'a838b157925adfc5871291309782428cb113fa9f' }, index.h("td", { key: '7064248437639419835313174730fe9275082df9', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g;
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (index.h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, index.h("td", { class: "text-left" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_a = record.last_year) === null || _a === void 0 ? void 0 : _a.SOURCE) ? 'font-weight-bold' : ''}` }, record.SOURCE), ((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.SOURCE) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.NIGHTS) ? 'font-weight-bold' : ''}` }, record.NIGHTS), ((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.NIGHTS) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), index.h("td", { class: "text-right " }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.REVENUE) ? 'font-weight-bold' : ''}` }, utils.formatAmount(record.currency, record.REVENUE)), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.REVENUE) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, utils.formatAmount(record.currency, record.last_year.REVENUE))))), index.h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (index.h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("ir-progress-indicator", { percentage: mainPercentage }), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.PCT) && index.h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" }))))));
        })), isSingleProperty && (index.h("tfoot", { key: '7a385d49991c93c513558e132c79a4634bf1a29f' }, index.h("tr", { key: 'c117c8093408c76429d6ef7d263d4fd9bb1b3239', style: { fontSize: '12px' } }, index.h("td", { key: '6ad5cf7ebc8cde47dc446edbbe7376a375c52101', colSpan: 4 }, index.h("div", { key: 'f052e2f138127a5ad79f55c9f7508f3f4f8b734b', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, index.h("div", { key: '56fa5ddf2228d86d5c761fe564f176eda3e624ec', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'bebf4e63b77ef58fda9064bb0cd159ae0a65bc2f', class: "legend bg-primary" }), index.h("p", { key: '79ac28af6748b60603bc66daf34ea42e27bac536', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: 'dde912263c3a0b0111892e512710c3942bc73046', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'fde2efa43dd31872ec29e4c566d7aec449ff7118', class: "legend secondary" }), index.h("p", { key: '98fb15b3342d0a46e2e0150bb34f981cc0d8b821', class: "p-0 m-0" }, "Previous year")))))))), this.visibleCount < this.records.length && (index.h("div", { key: '00feb91924d46e0aa0f91e3ebcdf6d61bb92cbc8', class: 'd-flex mx-auto' }, index.h("ir-button", { key: 'afe8d61dea6cc07a2f9267967f63f4e9f091eb30', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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