'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-sd8HJHNy.js');
require('./locales.store-D6DJIhoZ.js');

const irFiltersPanelCss = () => `.sc-ir-filters-panel-h{display:block;height:100%}.filters-panel.sc-ir-filters-panel{height:100%}.filters-panel.sc-ir-filters-panel>.card.sc-ir-filters-panel{height:100%}.filters-panel__header.sc-ir-filters-panel{display:flex;align-items:center;justify-content:space-between}.filters-panel__title-group.sc-ir-filters-panel{display:flex;align-items:center;flex:1 1 auto;gap:0.5rem}.filters-panel__header-actions.sc-ir-filters-panel{display:flex;align-items:center;gap:0.5rem}.filters-panel__content.sc-ir-filters-panel{margin-top:0.5rem}.filters-panel__content.collapse.sc-ir-filters-panel:not(.show){display:none}.filters-panel__content-inner.sc-ir-filters-panel{display:flex;flex-direction:column}.filters-panel__footer.sc-ir-filters-panel{display:flex;align-items:center;gap:1rem;margin-top:0.75rem}.filters-panel__footer--start.sc-ir-filters-panel{justify-content:flex-start}.filters-panel__footer--center.sc-ir-filters-panel{justify-content:center}.filters-panel__footer--end.sc-ir-filters-panel{justify-content:flex-end}.filters-panel__footer--space-between.sc-ir-filters-panel{justify-content:space-between}.filters-panel__footer--space-around.sc-ir-filters-panel{justify-content:space-around}@media (min-width: 768px){.filters-panel--persistent.sc-ir-filters-panel .collapse-btn.sc-ir-filters-panel{display:none}.filters-panel--persistent.sc-ir-filters-panel .filters-panel__content.collapse.sc-ir-filters-panel:not(.show){display:block}}`;

let panelId = 0;
const IrFiltersPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filterToggle = index.createEvent(this, "irFilterToggle");
        this.filterApply = index.createEvent(this, "irFilterApply");
        this.filterReset = index.createEvent(this, "irFilterReset");
    }
    /** Panel headline text */
    filterTitle = t.t('Lcz_Filters', { fallback: 'Filters' });
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
    applyLabel = t.t('Lcz_Apply', { fallback: 'Apply' });
    /** Reset button copy */
    resetLabel = t.t('Lcz_Reset', { fallback: 'Reset' });
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
        return (index.h("div", { key: '3f1c0a8da63d5953d45715a1fab30bd1e00bfe84', class: panelClasses }, index.h("div", { key: '10f0005c7c31fd9adfd1e92f4977a87237dddce7', class: cardClass }, index.h("div", { key: '9505bb7d0e3aec464c81d8bf4eda7549f76520df', class: headerClasses }, index.h("div", { key: '8ccb8d34fa98a5ab306adff25dd78381f92dca48', class: "filters-panel__title-group" }, index.h("slot", { key: '23bce67e868da18688440059d90bdf7fd3bc601a', name: "header-icon" }, this.renderDefaultIcon()), this.filterTitle && index.h("h4", { key: 'eae8c386a5096c2557b6364fc7ad49a9791b3a5a', class: "filters-panel__title m-0 p-0 flex-grow-1" }, this.filterTitle), index.h("slot", { key: '31bd33cbcd5f3767cfa173abfd48623620548572', name: "header-title-extra" })), index.h("div", { key: 'ac44c8e5b1a0ddf2bc20f25f02dabd0786dff5a3', class: "filters-panel__header-actions" }, index.h("slot", { key: '1744329a12e8bc5cbca16283782a6bc12bbb3cd2', name: "header-actions" }), this.renderCollapseButton(collapsed))), index.h("div", { key: '6ed6a1fcc4f7f3bd20c65bcd267fd8110c46fa63', id: this.targetId, class: {
                'filters-panel__content': true,
                'collapse': true,
                'show': !collapsed,
            }, "aria-hidden": collapsed ? 'true' : 'false' }, index.h("div", { key: 'af31985120f2c5f8c172005d9c54dc4709676a56', class: contentWrapperClasses, style: { gap: this.contentGap } }, index.h("slot", { key: 'e4a5e5c3b71ecd3b215e5cf6aa878ff5831e018d' }), !this.hideDefaultActions && (index.h("div", { key: '68c653761229dc6d89c1792470610cab811f1339', class: footerClasses }, index.h("slot", { key: '3a8d882eebe8f6bbddcda8bdec76182bc97505ea', name: "actions" }, index.h("ir-button", { key: '1ba8d19ebab5634a73e678a1fd67edccee347da4', btn_type: "button", "data-testid": `${this.actionTestId}-reset`, text: this.resetLabel, size: "sm", btn_color: "secondary", btn_disabled: this.disableReset, onClickHandler: this.handleReset.bind(this) }), index.h("ir-button", { key: 'aa7241001ed1505a8aad756470bccb5477390958', btn_type: "button", "data-testid": `${this.actionTestId}-apply`, isLoading: this.isApplyLoading, text: this.applyLabel, size: "sm", btn_disabled: this.disableApply, onClickHandler: this.handleApply.bind(this) })))))))));
    }
    static get watchers() { return {
        "collapsed": [{
                "handleCollapsedChange": 0
            }]
    }; }
};
IrFiltersPanel.style = irFiltersPanelCss();

exports.ir_filters_panel = IrFiltersPanel;
