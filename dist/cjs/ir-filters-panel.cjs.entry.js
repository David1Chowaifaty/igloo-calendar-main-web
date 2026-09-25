'use strict';

var index = require('./index-CQkpA5n3.js');
var t = require('./t-C54QV4_c.js');
require('./locales.store-BMTss6fG.js');

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
        return (index.h("div", { key: '761ce841d1028547b7e085acbc653eedcc046247', class: panelClasses }, index.h("div", { key: '8e4defc2192caf5ff68727e38893cc9bd0698473', class: cardClass }, index.h("div", { key: 'd5ae8bf30b9baf6d7f2fba564f90aa15e2d28afc', class: headerClasses }, index.h("div", { key: '17d1fb1640f13236c174b03c91b40eab5328b64f', class: "filters-panel__title-group" }, index.h("slot", { key: '16ceac9e2a27dc331262af63eb036bf4a6f895f6', name: "header-icon" }, this.renderDefaultIcon()), this.filterTitle && index.h("h4", { key: '4a7919f28276154c0eaf2a018f9344f748609dc3', class: "filters-panel__title m-0 p-0 flex-grow-1" }, this.filterTitle), index.h("slot", { key: '79c98243c59c8a21947651385a0d13fa415a94bc', name: "header-title-extra" })), index.h("div", { key: '1abdf1ac660b85fc38c8bd334303dff4b6932c60', class: "filters-panel__header-actions" }, index.h("slot", { key: '1f053847b6557a9e95bdeceff110671e8b09c72a', name: "header-actions" }), this.renderCollapseButton(collapsed))), index.h("div", { key: '0df3afa4d82d5d642a56c25fe594211a8c816f22', id: this.targetId, class: {
                'filters-panel__content': true,
                'collapse': true,
                'show': !collapsed,
            }, "aria-hidden": collapsed ? 'true' : 'false' }, index.h("div", { key: '98e9f8fb45b1d5aff7a8ab7c07e76acf03245357', class: contentWrapperClasses, style: { gap: this.contentGap } }, index.h("slot", { key: '8bec9f874adb9ca3030e17377b2742d88dbb7839' }), !this.hideDefaultActions && (index.h("div", { key: '06a1d833d15fb1caddd8cd3ea09f1dc3192e82b6', class: footerClasses }, index.h("slot", { key: '9096839c6468b0a6892c9cdecf2fd4ccbc9f8849', name: "actions" }, index.h("ir-button", { key: '7d14c74e2ade459e0544d2fc28d637330623ab58', btn_type: "button", "data-testid": `${this.actionTestId}-reset`, text: this.resetLabel, size: "sm", btn_color: "secondary", btn_disabled: this.disableReset, onClickHandler: this.handleReset.bind(this) }), index.h("ir-button", { key: 'b697b3fdd33e3eece8c2e453cb0e19ccfa3c152e', btn_type: "button", "data-testid": `${this.actionTestId}-apply`, isLoading: this.isApplyLoading, text: this.applyLabel, size: "sm", btn_disabled: this.disableApply, onClickHandler: this.handleApply.bind(this) })))))))));
    }
    static get watchers() { return {
        "collapsed": [{
                "handleCollapsedChange": 0
            }]
    }; }
};
IrFiltersPanel.style = irFiltersPanelCss();

exports.ir_filters_panel = IrFiltersPanel;
