'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const locales_store = require('./locales.store-a1ac5174.js');
const moment = require('./moment-1780b03a.js');
const utils = require('./utils-ee4f3fbf.js');
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
        return (index.h("div", { key: '2ee74ee5034cc0419b8e92ffc338f11070374cf6', class: panelClasses }, index.h("div", { key: '466bff1dc18581243333866c0657ce31bf720644', class: cardClass }, index.h("div", { key: 'dd6dba1884c6e767df1c5993b6e2ada51bf01bd2', class: headerClasses }, index.h("div", { key: '648e3d9803bfa781d3d4d841797d44ac48a0bf68', class: "filters-panel__title-group" }, index.h("slot", { key: '7736b7ec370fcb15e7fd3569e25092c58c019cdd', name: "header-icon" }, this.renderDefaultIcon()), this.filterTitle && index.h("h4", { key: 'db0d601abb1b6f33d2e04cf806fa431bd50804d6', class: "filters-panel__title m-0 p-0 flex-grow-1" }, this.filterTitle), index.h("slot", { key: '5cabfc44416e13a8bd0bf2fbb61a2d8e0757bc60', name: "header-title-extra" })), index.h("div", { key: '754a68e4ea5ebfb80c08750ffbe1eee385040753', class: "filters-panel__header-actions" }, index.h("slot", { key: '84d76c7353f887bfed9657982204c333a48d8e86', name: "header-actions" }), this.renderCollapseButton(collapsed))), index.h("div", { key: '032c035200358b8c1f588f71578e3a2c9a91c521', id: this.targetId, class: {
                'filters-panel__content': true,
                'collapse': true,
                'show': !collapsed,
            }, "aria-hidden": collapsed ? 'true' : 'false' }, index.h("div", { key: 'e4910c74d883145a64a02548b6540dc73da72748', class: contentWrapperClasses, style: { gap: this.contentGap } }, index.h("slot", { key: 'a6cd4dd8069908359fa73588a5860cf9b2a8c839' }), !this.hideDefaultActions && (index.h("div", { key: '91e322fb151fd5820c35a3d865b6bfe6495e1908', class: footerClasses }, index.h("slot", { key: 'a4600aef3231dd9b48fe8ca62cd6d9af44fdc95f', name: "actions" }, index.h("ir-button", { key: '06a546b71bced38c4837705e6bc722a75e1ba9ea', btn_type: "button", "data-testid": `${this.actionTestId}-reset`, text: this.resetLabel, size: "sm", btn_color: "secondary", btn_disabled: this.disableReset, onClickHandler: this.handleReset.bind(this) }), index.h("ir-button", { key: 'db55812d39beb12c1b37041d858ffa3b169e87fd', btn_type: "button", "data-testid": `${this.actionTestId}-apply`, isLoading: this.isApplyLoading, text: this.applyLabel, size: "sm", btn_disabled: this.disableApply, onClickHandler: this.handleApply.bind(this) })))))))));
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
        return (index.h("ir-filters-panel", { key: 'f15cfbb3a168f99feea3d19d663a617ef49684a4', isApplyLoading: this.isLoading, onIrFilterApply: () => {
                this.applyFilters.emit(this.filters);
            }, onIrFilterReset: () => {
                this.filters = Object.assign({}, this.baseFilters);
                this.applyFilters.emit(this.filters);
            } }, index.h("fieldset", { key: '918d24da56f85a5717a2e13cfae942fdc28f35dc', class: "pt-1 filter-group" }, index.h("label", { key: 'ea6643cb84bd7083e7db38c63e90bca6503704f1', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), index.h("ir-select", { key: '7a59a515689105fb6aa4f842e8fb04970b4ce9c9', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), this.allowedProperties.length > 1 && (index.h("fieldset", { key: '9e234ce7fa3489e4e30ab55c15143bf41956187c', class: "filter-group" }, index.h("label", { key: '5762aed56bfdedd98a58a0e70c2c67f700388fbc', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Properties"), index.h("ir-m-combobox", { key: '8e6f62003cb8c18efe6e4b921f13edf00490ab52', defaultOption: ((_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.LIST_AC_ID) === null || _c === void 0 ? void 0 : _c.length) === ((_d = this.allowedProperties) === null || _d === void 0 ? void 0 : _d.length) ? 'all' : (_f = (_e = this.filters) === null || _e === void 0 ? void 0 : _e.LIST_AC_ID[0]) === null || _f === void 0 ? void 0 : _f.toString(), onOptionChange: e => {
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
            ] }))), index.h("fieldset", { key: 'c1007ee3be3196e2ee64e1a8e8f9cff9c6f2cce2', class: "filter-group" }, index.h("label", { key: '40399ac3b13b71bdb42dda54a568c7b4de4d24cd', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), index.h("div", { key: '8e4ded724edde7648abfae68a095eb38e6ba9302', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: '0d40ba6f1944c358b3f2f83e07365759a890ddb5', selectedValue: (_g = this.window) === null || _g === void 0 ? void 0 : _g.toString(), onSelectChange: e => {
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
            ] }), index.h("p", { key: 'e50279e1ed8914ef38a27205e4249c8da6f5d795', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: 'e56896787df701c55d3cff085cda867a79e3fa62', onDateRangeChanged: e => {
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
            }, fromDate: moment.hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: moment.hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: moment.hooks().format('YYYY-MM-DD'), withOverlay: false }))), index.h("div", { key: '27b5d90b75eb9ed6c67c5289395531baf1078852', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: '075f671287172d8dea725b5eefd9a203d078c8d4', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: '8b8dd3cffad8956f6dee4422414d7ae29bbf9ffc', checked: (_h = this.filters) === null || _h === void 0 ? void 0 : _h.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
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
        return (index.h("div", { key: '2c4a2cec4efadfdc17ecd696e4ede28485a60b27', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: '52483be7deeadd473f26c128483e7480d2330575', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '8cd77711fddb23c09b9f9ad1ad04d35fe917c720', class: "table-header" }, index.h("tr", { key: '4483c81e2ef044c88da3fe6ce7a2d5f9fc6eb770' }, index.h("th", { key: '93e6c051a5aa252ca6477f799d493b880877e842', class: "text-left" }, "Channel"), index.h("th", { key: 'c6127be923249083553a4d25d26629c9ea050ecf', class: "text-center" }, "Room nights"), index.h("th", { key: 'a03a62ee653288e7d5da3827862da38a72caff15', class: "text-right" }, "Room Revenue"), index.h("th", { key: '7ce2396fb8e9486ff2ee7a827c1a3d8b3d5020a2', class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), index.h("tbody", { key: 'bdd3681ae637026aad7acb3c6e1e6eb426b5485b' }, this.records.length === 0 && (index.h("tr", { key: '0267f897dca5e934a2082fa74653409d7804f7a8' }, index.h("td", { key: '984448abc64be4d97a184cbaab15b711071f8832', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g;
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (index.h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, index.h("td", { class: "text-left" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_a = record.last_year) === null || _a === void 0 ? void 0 : _a.SOURCE) ? 'font-weight-bold' : ''}` }, record.SOURCE), ((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.SOURCE) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.NIGHTS) ? 'font-weight-bold' : ''}` }, record.NIGHTS), ((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.NIGHTS) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), index.h("td", { class: "text-right " }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.REVENUE) ? 'font-weight-bold' : ''}` }, utils.formatAmount(record.currency, record.REVENUE)), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.REVENUE) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, utils.formatAmount(record.currency, record.last_year.REVENUE))))), index.h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (index.h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("ir-progress-indicator", { percentage: mainPercentage }), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.PCT) && index.h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" }))))));
        })), isSingleProperty && (index.h("tfoot", { key: '03e779e96eb8ddc13180b9129ef36141938132a1' }, index.h("tr", { key: 'f9d3092530f673b36e7676c15e103e9f688460c2', style: { fontSize: '12px' } }, index.h("td", { key: 'ee1b255092116a431b8d87d804870cb7e1616799', colSpan: 4 }, index.h("div", { key: 'ff21e477d0800cc56c72dcc9612cfe5f663fba51', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, index.h("div", { key: '9bd5ea40f610c97eb6281f229ee9b4ee7b97ba64', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '1e060b7d8f5be9d65c8c3bc6c5483258ddc47be7', class: "legend bg-primary" }), index.h("p", { key: '8f7e43b23d6bd8c58b437e7b2f3555ef1d3775ae', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: 'aa3eb1e9f3dc810476c7e16021a01c4950b98216', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '2f848e309d7352b6b724807611cec4a04e58538b', class: "legend secondary" }), index.h("p", { key: '38c46b1390bf06633c095bc563d3fafab7c60e70', class: "p-0 m-0" }, "Previous year")))))))), this.visibleCount < this.records.length && (index.h("div", { key: '24bf120b3a5a5a39d848ce2fb927dbb19a178893', class: 'd-flex mx-auto' }, index.h("ir-button", { key: 'b63d98d4c428760039af4d36da6ec0921db78a14', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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