import { r as registerInstance, c as createEvent, h } from './index-7e96440e.js';
import { l as locales } from './locales.store-cb784e95.js';
import { h as hooks } from './moment-ab846cee.js';
import { j as formatAmount } from './utils-9546bb29.js';
import './index-f100e9d2.js';
import './index-87419685.js';
import './calendar-data-2ae53dc9.js';

const irFiltersPanelCss = ".sc-ir-filters-panel-h{display:block;height:100%}.filters-panel.sc-ir-filters-panel{height:100%}.filters-panel.sc-ir-filters-panel>.card.sc-ir-filters-panel{height:100%}.filters-panel__header.sc-ir-filters-panel{display:flex;align-items:center;justify-content:space-between}.filters-panel__title-group.sc-ir-filters-panel{display:flex;align-items:center;flex:1 1 auto;gap:0.5rem}.filters-panel__header-actions.sc-ir-filters-panel{display:flex;align-items:center;gap:0.5rem}.filters-panel__content.sc-ir-filters-panel{margin-top:0.5rem}.filters-panel__content.collapse.sc-ir-filters-panel:not(.show){display:none}.filters-panel__content-inner.sc-ir-filters-panel{display:flex;flex-direction:column}.filters-panel__footer.sc-ir-filters-panel{display:flex;align-items:center;gap:1rem;margin-top:0.75rem}.filters-panel__footer--start.sc-ir-filters-panel{justify-content:flex-start}.filters-panel__footer--center.sc-ir-filters-panel{justify-content:center}.filters-panel__footer--end.sc-ir-filters-panel{justify-content:flex-end}.filters-panel__footer--space-between.sc-ir-filters-panel{justify-content:space-between}.filters-panel__footer--space-around.sc-ir-filters-panel{justify-content:space-around}@media (min-width: 768px){.filters-panel--persistent.sc-ir-filters-panel .collapse-btn.sc-ir-filters-panel{display:none}.filters-panel--persistent.sc-ir-filters-panel .filters-panel__content.collapse.sc-ir-filters-panel:not(.show){display:block}}";
const IrFiltersPanelStyle0 = irFiltersPanelCss;

let panelId = 0;
const IrFiltersPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.filterToggle = createEvent(this, "irFilterToggle", 7);
        this.filterApply = createEvent(this, "irFilterApply", 7);
        this.filterReset = createEvent(this, "irFilterReset", 7);
    }
    /** Panel headline text */
    filterTitle = locales.entries.Lcz_Filters;
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
    applyLabel = locales.entries.Lcz_Apply;
    /** Reset button copy */
    resetLabel = locales.entries.Lcz_Reset;
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
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })));
    }
    renderCollapseButton(collapsed) {
        if (!this.showCollapseButton) {
            return null;
        }
        return (h("ir-button", { variant: "icon", "aria-expanded": !collapsed ? 'true' : 'false', "aria-controls": this.targetId, class: "collapse-btn toggle-collapse-btn", icon_name: collapsed ? this.collapseIconClosed : this.collapseIconOpen, visibleBackgroundOnHover: true, onClickHandler: this.toggleCollapse.bind(this), btn_type: "button", style: { '--icon-size': '1.6rem' } }));
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
        return (h("div", { key: 'c82bf4235762260ce2a7eb96b774f7789fd7a895', class: panelClasses }, h("div", { key: '4003dff7f4561ec200cd727e9c5b50dc5b859774', class: cardClass }, h("div", { key: 'f65ee2f89bda7e444a47e6fe69e7a0040ea9176a', class: headerClasses }, h("div", { key: '631fc8fb317131148c2105348fdb83b9ed0ede07', class: "filters-panel__title-group" }, h("slot", { key: '5ebaa6adc9e29e70b018e1450f5477ea27639961', name: "header-icon" }, this.renderDefaultIcon()), this.filterTitle && h("h4", { key: '7969af7f372a97b5cd554207170aa00b85b33b1f', class: "filters-panel__title m-0 p-0 flex-grow-1" }, this.filterTitle), h("slot", { key: '11c01e666df5c76e8e9469f99c2eebcfbcb71b28', name: "header-title-extra" })), h("div", { key: 'e6c8be6ee37b68046dcf2e0040e803dd5401f675', class: "filters-panel__header-actions" }, h("slot", { key: '0f9bac4a42ad70741668dca1f4da543a0390e820', name: "header-actions" }), this.renderCollapseButton(collapsed))), h("div", { key: '66188f7e691407c278975189f66e6a04fd804fc9', id: this.targetId, class: {
                'filters-panel__content': true,
                'collapse': true,
                'show': !collapsed,
            }, "aria-hidden": collapsed ? 'true' : 'false' }, h("div", { key: 'f616e13a8bd97b40d07b5376fe5536b18d00c3fd', class: contentWrapperClasses, style: { gap: this.contentGap } }, h("slot", { key: '1cc50f879d4ea8e47858875907c65f168b20bb13' }), !this.hideDefaultActions && (h("div", { key: '59ab9deab9be566957cd415eee6199744494f371', class: footerClasses }, h("slot", { key: 'e8c2fa815154ac707d2bfef6330c1fb7573ab312', name: "actions" }, h("ir-button", { key: '2184a92e73fe48f319805552ed1713bb54d41ec5', btn_type: "button", "data-testid": `${this.actionTestId}-reset`, text: this.resetLabel, size: "sm", btn_color: "secondary", btn_disabled: this.disableReset, onClickHandler: this.handleReset.bind(this) }), h("ir-button", { key: '029fdeb5afc7a983e434c624ace58ac5bc8aece2', btn_type: "button", "data-testid": `${this.actionTestId}-apply`, isLoading: this.isApplyLoading, text: this.applyLabel, size: "sm", btn_disabled: this.disableApply, onClickHandler: this.handleApply.bind(this) })))))))));
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
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters", 7);
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
        return (h("ir-filters-panel", { key: '5dc8a9f1b31b642503798d0ad43c9f48d3ed3f93', isApplyLoading: this.isLoading, onIrFilterApply: () => {
                this.applyFilters.emit(this.filters);
            }, onIrFilterReset: () => {
                this.filters = { ...this.baseFilters };
                this.applyFilters.emit(this.filters);
            } }, h("fieldset", { key: '54461e625f42fe1b90ba36bbd2603311539b9ef1', class: "pt-1 filter-group" }, h("label", { key: '7484d5639c38e482da0fdb311dd255df87103689', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: 'cfd1662b8925d5ebc1bbec0d19aa2e15174da048', selectedValue: this.filters?.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), this.allowedProperties.length > 1 && (h("fieldset", { key: '0aa93cdeea567d1ed72d62eff967f58b17b260f8', class: "filter-group" }, h("label", { key: '1864005e10636fe18487af5dd18833765ba677ff', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Properties"), h("ir-m-combobox", { key: 'ea48d1a97d2052acf47b861b85481ab0e150ce74', defaultOption: this.filters?.LIST_AC_ID?.length === this.allowedProperties?.length ? 'all' : this.filters?.LIST_AC_ID[0]?.toString(), onOptionChange: e => {
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
            ] }))), h("fieldset", { key: '15b0283bddc267139c493c8a6ebbb7dbe93e771d', class: "filter-group" }, h("label", { key: 'ed3ad082b6822c411ceeab723f72335175985fcb', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: '5e1009490637df3ec560525bf5bad3152e7ef760', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '61aa36f78e8d8457fa42929e5ac5ad6948e0dc34', selectedValue: this.window?.toString(), onSelectChange: e => {
                const dateDiff = Number(e.detail);
                const today = hooks();
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
            ] }), h("p", { key: '53f402f025ac27c286d78ad8bdbeac18acfad721', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '411c71a10494dfd77483723798d6a9fd395db068', onDateRangeChanged: e => {
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
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: 'c4405178204f1de9bb1d68d507256a8d7c073e25', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '7cc92bcb2e84ab18b4254dc18bde76d2a14f3709', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: '84cb582ab8d5ef3d1d970284464f892ca2155742', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } }))));
    }
};
IrSalesByChannelFilters.style = IrSalesByChannelFiltersStyle0;

const irSalesByChannelTableCss = ".sc-ir-sales-by-channel-table-h{display:block;width:100%}.legend.sc-ir-sales-by-channel-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-by-channel-table{background:#6692b3}.channel-cell.sc-ir-sales-by-channel-table{width:100%}.task-row.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.sales-by-channel-table__progress-col.sc-ir-sales-by-channel-table{width:50%}.sales-by-channel-table__progress-col.single.sc-ir-sales-by-channel-table{display:none !important}@media (min-width: 768px){.sales-by-channel-table__progress-col.single.sc-ir-sales-by-channel-table{display:table-cell !important}}.outer-container.sc-ir-sales-by-channel-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-by-channel-table tfoot.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-bottom:0}.flag.sc-ir-sales-by-channel-table{height:16px;width:23px;border-radius:3px}";
const IrSalesByChannelTableStyle0 = irSalesByChannelTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-sales-by-channel-table{overflow-x:auto}.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-by-channel-table tbody.sc-ir-sales-by-channel-table tr.sc-ir-sales-by-channel-table:last-child>td.sc-ir-sales-by-channel-table{border-bottom:0 !important}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-sales-by-channel-table .empty-row.sc-ir-sales-by-channel-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-sales-by-channel-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{background:#e3f3fa !important}.selected.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-by-channel-table,.ir-table-row.sc-ir-sales-by-channel-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-by-channel-table{text-transform:capitalize}.sortable.sc-ir-sales-by-channel-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-sales-by-channel-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-by-channel-table svg.sc-ir-sales-by-channel-table{color:var(--blue)}.sticky-column.sc-ir-sales-by-channel-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-sales-by-channel-table,.data-table.sc-ir-sales-by-channel-table{height:100%}";
const IrSalesByChannelTableStyle1 = tableCss;

const IrSalesByChannelTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: '6eb68523d165414e6c0bc8c25e24cb72a47a4901', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '88abd15a9b123434b3ee09ed8eef6e264fdef6bd', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '0d966f2c08563925fabd4d656b79754374663d2e', class: "table-header" }, h("tr", { key: '903209ff32a16300941870c9f55686dd85120828' }, h("th", { key: 'f22aeed96fb653203ec3211f68e852cf28c8f4cb', class: "text-left" }, "Channel"), h("th", { key: '77df117793be88b21bf9aa323c260d7930561b3f', class: "text-center" }, "Room nights"), h("th", { key: '9ed1d85f97c0880c80fa87725745dc140c31f9f2', class: "text-right" }, "Room Revenue"), h("th", { key: '48a1a843cbbe59ea86569d9a2a54b3927e7d3b34', class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), h("tbody", { key: '19bc56e746b0c81344ec1beaebd02fce0e9c1921' }, this.records.length === 0 && (h("tr", { key: 'af4bf9098927cec6ea948bc1ce86f7d20d8a19ec' }, h("td", { key: 'f2bef986621d730506ebc039cc96c929dcd3ee5c', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, h("td", { class: "text-left" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.SOURCE ? 'font-weight-bold' : ''}` }, record.SOURCE), record.last_year?.SOURCE && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.NIGHTS ? 'font-weight-bold' : ''}` }, record.NIGHTS), record.last_year?.NIGHTS && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), h("td", { class: "text-right " }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.REVENUE ? 'font-weight-bold' : ''}` }, formatAmount(record.currency, record.REVENUE)), record.last_year?.REVENUE && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(record.currency, record.last_year.REVENUE))))), h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.PCT && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" }))))));
        })), isSingleProperty && (h("tfoot", { key: '5ad7a4e95c59c844a24f1eeacf11fa659dd24a4d' }, h("tr", { key: '1e421d6d1d9c0b12e4f786bc41d7c476a7f851ad', style: { fontSize: '12px' } }, h("td", { key: '4525431d4a8a11c50aa7c6b3ea9c1956613c8da5', colSpan: 4 }, h("div", { key: 'bcce5163b3c924d05551d97f619f73c5933a3ebb', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '6705090e08ad99c198ddcc4d9a1dc32d7cc16982', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5788a4f9ec56a884f101e6d0199e00c49cb944bf', class: "legend bg-primary" }), h("p", { key: '4acefa1583be043b93f886eb7a0866fddae630ec', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '5f25561b68ddebbc54108a6607b26475983e149b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '37a5dad6a21b5fb2efc003c801de6e8f9e635959', class: "legend secondary" }), h("p", { key: '005a1fbde9df5f66bca9118dfbb3a7b02236c001', class: "p-0 m-0" }, "Previous year")))))))), this.visibleCount < this.records.length && (h("div", { key: 'bf4e91c6030b11b8a8a02a0315714bb2e9022669', class: 'd-flex mx-auto' }, h("ir-button", { key: '707de1658ffdcc7d683e8ac960af604f530b6c3e', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
    static get watchers() { return {
        "allowedProperties": ["handlePropertiesChange"]
    }; }
};
IrSalesByChannelTable.style = IrSalesByChannelTableStyle0 + IrSalesByChannelTableStyle1;

export { IrFiltersPanel as ir_filters_panel, IrSalesByChannelFilters as ir_sales_by_channel_filters, IrSalesByChannelTable as ir_sales_by_channel_table };

//# sourceMappingURL=ir-filters-panel_3.entry.js.map