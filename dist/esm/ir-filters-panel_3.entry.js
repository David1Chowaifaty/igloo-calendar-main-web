import { r as registerInstance, c as createEvent, h } from './index-60982d00.js';
import { l as locales } from './locales.store-629477c2.js';
import { h as hooks } from './moment-ab846cee.js';
import { f as formatAmount } from './utils-763db862.js';
import './index-c4cf83be.js';
import './index-6ecc32cd.js';
import './calendar-data-462ba979.js';
import './axios-aa1335b8.js';

const irFiltersPanelCss = ".sc-ir-filters-panel-h{display:block;height:100%}.filters-panel.sc-ir-filters-panel{height:100%}.filters-panel.sc-ir-filters-panel>.card.sc-ir-filters-panel{height:100%}.filters-panel__header.sc-ir-filters-panel{display:flex;align-items:center;justify-content:space-between}.filters-panel__title-group.sc-ir-filters-panel{display:flex;align-items:center;flex:1 1 auto;gap:0.5rem}.filters-panel__header-actions.sc-ir-filters-panel{display:flex;align-items:center;gap:0.5rem}.filters-panel__content.sc-ir-filters-panel{margin-top:0.5rem}.filters-panel__content.collapse.sc-ir-filters-panel:not(.show){display:none}.filters-panel__content-inner.sc-ir-filters-panel{display:flex;flex-direction:column}.filters-panel__footer.sc-ir-filters-panel{display:flex;align-items:center;gap:1rem;margin-top:0.75rem}.filters-panel__footer--start.sc-ir-filters-panel{justify-content:flex-start}.filters-panel__footer--center.sc-ir-filters-panel{justify-content:center}.filters-panel__footer--end.sc-ir-filters-panel{justify-content:flex-end}.filters-panel__footer--space-between.sc-ir-filters-panel{justify-content:space-between}.filters-panel__footer--space-around.sc-ir-filters-panel{justify-content:space-around}@media (min-width: 768px){.filters-panel--persistent.sc-ir-filters-panel .collapse-btn.sc-ir-filters-panel{display:none}.filters-panel--persistent.sc-ir-filters-panel .filters-panel__content.collapse.sc-ir-filters-panel:not(.show){display:block}}";
const IrFiltersPanelStyle0 = irFiltersPanelCss;

let panelId = 0;
const IrFiltersPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.filterToggle = createEvent(this, "irFilterToggle", 7);
        this.filterApply = createEvent(this, "irFilterApply", 7);
        this.filterReset = createEvent(this, "irFilterReset", 7);
        /** Panel headline text */
        this.filterTitle = locales.entries.Lcz_Filters;
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
        this.applyLabel = locales.entries.Lcz_Apply;
        /** Reset button copy */
        this.resetLabel = locales.entries.Lcz_Reset;
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
        return (h("div", { key: '1cd6c0891b17a2920366ae6487bb093e0948a60b', class: panelClasses }, h("div", { key: 'cde03898cb829a5b7e298079ea79000aca5af11e', class: cardClass }, h("div", { key: '3d867ee21eef5149ec44eabd21a234af484f4531', class: headerClasses }, h("div", { key: 'c93f671e6d689226dce23d9fb6a8af83782c7e47', class: "filters-panel__title-group" }, h("slot", { key: 'a7fad196bcfe52e7ff0879eae95cc40efcae4efe', name: "header-icon" }, this.renderDefaultIcon()), this.filterTitle && h("h4", { key: '39524e6328b5b2b864c0865c82f1df14688ea9ea', class: "filters-panel__title m-0 p-0 flex-grow-1" }, this.filterTitle), h("slot", { key: '9705c50e1c04053b4eab2c97efb03204259bb416', name: "header-title-extra" })), h("div", { key: 'd0641d7b369feb4645dc170b3c0b89c329333b79', class: "filters-panel__header-actions" }, h("slot", { key: '4fcd23547a42776dc437d9d7fe54cbd2ed122e7d', name: "header-actions" }), this.renderCollapseButton(collapsed))), h("div", { key: '887f9c3b6470c1b5716477c4d84d25bb4dcacbca', id: this.targetId, class: {
                'filters-panel__content': true,
                'collapse': true,
                'show': !collapsed,
            }, "aria-hidden": collapsed ? 'true' : 'false' }, h("div", { key: 'ac4bb79782ad285d18a1eefd396c60e14236fde3', class: contentWrapperClasses, style: { gap: this.contentGap } }, h("slot", { key: 'c486e14de33b11704d463f51c3a3f6107bf153c8' }), !this.hideDefaultActions && (h("div", { key: '4b5197f6a48e05c50933d6c2530508f3597e83bc', class: footerClasses }, h("slot", { key: 'df397b4419815ff47faf7e0ec319519ba0ea9685', name: "actions" }, h("ir-button", { key: '0d4f291b0bda32e6aa038d33c80f5a78564248f8', btn_type: "button", "data-testid": `${this.actionTestId}-reset`, text: this.resetLabel, size: "sm", btn_color: "secondary", btn_disabled: this.disableReset, onClickHandler: this.handleReset.bind(this) }), h("ir-button", { key: '9f16955c4162f62fc3f5bd629c7ad13eff3ebc34', btn_type: "button", "data-testid": `${this.actionTestId}-apply`, isLoading: this.isApplyLoading, text: this.applyLabel, size: "sm", btn_disabled: this.disableApply, onClickHandler: this.handleApply.bind(this) })))))))));
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
        return (h("ir-filters-panel", { key: '08785cddeec8147e5ae9cd0402d0c0dbdb03c1ee', isApplyLoading: this.isLoading, onIrFilterApply: () => {
                this.applyFilters.emit(this.filters);
            }, onIrFilterReset: () => {
                this.filters = Object.assign({}, this.baseFilters);
                this.applyFilters.emit(this.filters);
            } }, h("fieldset", { key: '4983f5739dcf19032dfd27c835cc3670a3fc1b5c', class: "pt-1 filter-group" }, h("label", { key: '42cc77b211d73a77895c4bea0e5ff16a2adbf5c3', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: '657570362222f8fcf53c4f27b1ade4d1c4791f00', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), this.allowedProperties.length > 1 && (h("fieldset", { key: 'cc37ef0fbee4b60b7a43f41ee1aa5a38b955cb6b', class: "filter-group" }, h("label", { key: '54571732294c3be8be50213bdc8fdf50b74e9473', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Properties"), h("ir-m-combobox", { key: '9e9d4e89b8d7764c2c187070b1ec4fb1c50f1b0a', defaultOption: ((_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.LIST_AC_ID) === null || _c === void 0 ? void 0 : _c.length) === ((_d = this.allowedProperties) === null || _d === void 0 ? void 0 : _d.length) ? 'all' : (_f = (_e = this.filters) === null || _e === void 0 ? void 0 : _e.LIST_AC_ID[0]) === null || _f === void 0 ? void 0 : _f.toString(), onOptionChange: e => {
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
            ] }))), h("fieldset", { key: '67565307558e08ab906ef0fb5730aab0cec4c99f', class: "filter-group" }, h("label", { key: 'd6f47a3dd95f7c43a822a3136123d136b103f4a3', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: 'b5dc4c7249a6783957dcb0526fc98c3926c32d23', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '3a9b4c8028b9271c15c0a8ab1b1d107d46b32762', selectedValue: (_g = this.window) === null || _g === void 0 ? void 0 : _g.toString(), onSelectChange: e => {
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
            ] }), h("p", { key: 'c868d2074e154d3aab4113c00e3dd738e6741eb6', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '5f5699f2de52a337dd33062c7d5a7694d3eff6c2', onDateRangeChanged: e => {
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
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: 'ca10d85ec39f1356e547f694818633baa0918a02', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: 'd5427d862a13f88a7ea522455b8c6f92b729d911', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'd28bb0e11ac010fe18dc309a2cb43945d19e3d09', checked: (_h = this.filters) === null || _h === void 0 ? void 0 : _h.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
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
        registerInstance(this, hostRef);
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
        return (h("div", { key: '2f7519b9d689da66de904bccafc2beda6ce28f42', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '976e64e57b270071d1d83895bb849949c5b6b4be', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '53d936cb3ec57701ef2596b60166d1489bbf53c6', class: "table-header" }, h("tr", { key: 'fecfe6780e7845f88a47c94e45d8ddf48e9d6f73' }, h("th", { key: 'd0c97a7923b56ab74af55972505355d74c892396', class: "text-left" }, "Channel"), h("th", { key: '2c90525c36f6bd58f9f2e2f39859204bed11b874', class: "text-center" }, "Room nights"), h("th", { key: '4d6ad36dd4640013e0e782c869d6fc2eeef910ce', class: "text-right" }, "Room Revenue"), h("th", { key: '58e187e6af3dedaa8b3e82a355818ee062b63835', class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), h("tbody", { key: '1cbe14d7ac48a805af58e4b35af8983586f6c502' }, this.records.length === 0 && (h("tr", { key: '0a85d4fb2ab800c3fe639362171c5d27d9634830' }, h("td", { key: '292d6fc0d2dfb75e4e04d0c87fae671d01a0f640', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g;
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, h("td", { class: "text-left" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_a = record.last_year) === null || _a === void 0 ? void 0 : _a.SOURCE) ? 'font-weight-bold' : ''}` }, record.SOURCE), ((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.SOURCE) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.NIGHTS) ? 'font-weight-bold' : ''}` }, record.NIGHTS), ((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.NIGHTS) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), h("td", { class: "text-right " }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.REVENUE) ? 'font-weight-bold' : ''}` }, formatAmount(record.currency, record.REVENUE)), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.REVENUE) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(record.currency, record.last_year.REVENUE))))), h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.PCT) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" }))))));
        })), isSingleProperty && (h("tfoot", { key: '7a0f24c7661f896a370302a4b97cc1867c40bc0d' }, h("tr", { key: '63025374f9416d74bbe97960c2bce8f513d57b37', style: { fontSize: '12px' } }, h("td", { key: 'bfdf0c7657d4da94be5629783b1462bc0b812ff7', colSpan: 4 }, h("div", { key: '4b4766566d5537f65b84a31ebb3e6a789723f5e5', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '532d86531b9baa684e1a77e65f8ea15ad9613c12', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '3fcaee74910f869a79d4405add0f7abfc313d0ae', class: "legend bg-primary" }), h("p", { key: 'd850549eac47e92b30792681da3e5430ed280fb0', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '6d0a6421dce9c39f13253ece17401e78246b47d6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4aa9fd3b4cd501ce68de032a203d516449cffa59', class: "legend secondary" }), h("p", { key: 'f0b0ffac384fb2d195ff3a688855a5dd0b8fbfc1', class: "p-0 m-0" }, "Previous year")))))))), this.visibleCount < this.records.length && (h("div", { key: '8865f574b645196818ce8809cd014f7f434c8b2b', class: 'd-flex mx-auto' }, h("ir-button", { key: '6af9a9352d6f123df33a98c082caf58041a8c990', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
    static get watchers() { return {
        "allowedProperties": ["handlePropertiesChange"]
    }; }
};
IrSalesByChannelTable.style = IrSalesByChannelTableStyle0 + IrSalesByChannelTableStyle1;

export { IrFiltersPanel as ir_filters_panel, IrSalesByChannelFilters as ir_sales_by_channel_filters, IrSalesByChannelTable as ir_sales_by_channel_table };

//# sourceMappingURL=ir-filters-panel_3.entry.js.map