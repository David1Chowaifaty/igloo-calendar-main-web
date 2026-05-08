import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irFiltersPanelCss = ".sc-ir-filters-panel-h{display:block;height:100%}.filters-panel.sc-ir-filters-panel{height:100%}.filters-panel.sc-ir-filters-panel>.card.sc-ir-filters-panel{height:100%}.filters-panel__header.sc-ir-filters-panel{display:flex;align-items:center;justify-content:space-between}.filters-panel__title-group.sc-ir-filters-panel{display:flex;align-items:center;flex:1 1 auto;gap:0.5rem}.filters-panel__header-actions.sc-ir-filters-panel{display:flex;align-items:center;gap:0.5rem}.filters-panel__content.sc-ir-filters-panel{margin-top:0.5rem}.filters-panel__content.collapse.sc-ir-filters-panel:not(.show){display:none}.filters-panel__content-inner.sc-ir-filters-panel{display:flex;flex-direction:column}.filters-panel__footer.sc-ir-filters-panel{display:flex;align-items:center;gap:1rem;margin-top:0.75rem}.filters-panel__footer--start.sc-ir-filters-panel{justify-content:flex-start}.filters-panel__footer--center.sc-ir-filters-panel{justify-content:center}.filters-panel__footer--end.sc-ir-filters-panel{justify-content:flex-end}.filters-panel__footer--space-between.sc-ir-filters-panel{justify-content:space-between}.filters-panel__footer--space-around.sc-ir-filters-panel{justify-content:space-around}@media (min-width: 768px){.filters-panel--persistent.sc-ir-filters-panel .collapse-btn.sc-ir-filters-panel{display:none}.filters-panel--persistent.sc-ir-filters-panel .filters-panel__content.collapse.sc-ir-filters-panel:not(.show){display:block}}";
const IrFiltersPanelStyle0 = irFiltersPanelCss;

let panelId = 0;
const IrFiltersPanel = /*@__PURE__*/ proxyCustomElement(class IrFiltersPanel extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h("div", { key: 'c758237c2d65794319ff00455573b30acd9e9474', class: panelClasses }, h("div", { key: 'b3a327f47be365879064b95573ea5c52212b43d8', class: cardClass }, h("div", { key: '7b7ce67cfa503bbac974ff8ecac4a4938c15650c', class: headerClasses }, h("div", { key: '46c8a1df4b95ff7d6c3670fd48f654cfd7e15c65', class: "filters-panel__title-group" }, h("slot", { key: 'dfbe6fc7654360774486cd269e495ba1dfe31f54', name: "header-icon" }, this.renderDefaultIcon()), this.filterTitle && h("h4", { key: '4a70be2358f1999815700043101ea63aec5fa738', class: "filters-panel__title m-0 p-0 flex-grow-1" }, this.filterTitle), h("slot", { key: 'e4093431979d4ba341c30a2628f0a5bc09b62e6a', name: "header-title-extra" })), h("div", { key: '28bc956f68d1be408d16f1d01bf1de84384c2077', class: "filters-panel__header-actions" }, h("slot", { key: 'c9c27ee05ef5d3194c4faabb0cc23b0a8e5bf35c', name: "header-actions" }), this.renderCollapseButton(collapsed))), h("div", { key: '0e600726f6aac01edf90a6397e0b2b19d5819986', id: this.targetId, class: {
                'filters-panel__content': true,
                'collapse': true,
                'show': !collapsed,
            }, "aria-hidden": collapsed ? 'true' : 'false' }, h("div", { key: 'cfccda250c88a24747584ec7d6f374cea8237542', class: contentWrapperClasses, style: { gap: this.contentGap } }, h("slot", { key: '8252fd37c2ccd5786d475364b7d798d419423163' }), !this.hideDefaultActions && (h("div", { key: 'e1e3666fb4544481d87a6445cf18f57f45aa8645', class: footerClasses }, h("slot", { key: '6c743c2a67166ce88f5f88d8ae548253034ead69', name: "actions" }, h("ir-button", { key: '405e516b156ee83233728ee71baef53745e128d3', btn_type: "button", "data-testid": `${this.actionTestId}-reset`, text: this.resetLabel, size: "sm", btn_color: "secondary", btn_disabled: this.disableReset, onClickHandler: this.handleReset.bind(this) }), h("ir-button", { key: '3373d4d4e5afa861d182f4e97c3b00dd2c608a74', btn_type: "button", "data-testid": `${this.actionTestId}-apply`, isLoading: this.isApplyLoading, text: this.applyLabel, size: "sm", btn_disabled: this.disableApply, onClickHandler: this.handleApply.bind(this) })))))))));
    }
    static get watchers() { return {
        "collapsed": ["handleCollapsedChange"]
    }; }
    static get style() { return IrFiltersPanelStyle0; }
}, [6, "ir-filters-panel", {
        "filterTitle": [1, "filter-title"],
        "collapseId": [1, "collapse-id"],
        "showCollapseButton": [4, "show-collapse-button"],
        "defaultCollapsed": [4, "default-collapsed"],
        "collapsed": [1540],
        "persistentOnDesktop": [4, "persistent-on-desktop"],
        "panelClass": [1, "panel-class"],
        "cardClass": [1, "card-class"],
        "headerClass": [1, "header-class"],
        "contentClass": [1, "content-class"],
        "contentGap": [1, "content-gap"],
        "actionsAlign": [1, "actions-align"],
        "hideDefaultActions": [4, "hide-default-actions"],
        "collapseIconOpen": [1, "collapse-icon-open"],
        "collapseIconClosed": [1, "collapse-icon-closed"],
        "applyLabel": [1, "apply-label"],
        "resetLabel": [1, "reset-label"],
        "disableApply": [4, "disable-apply"],
        "disableReset": [4, "disable-reset"],
        "isApplyLoading": [4, "is-apply-loading"],
        "actionTestId": [1, "action-test-id"],
        "internalCollapsed": [32]
    }, undefined, {
        "collapsed": ["handleCollapsedChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-filters-panel", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-filters-panel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrFiltersPanel);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrFiltersPanel as I, defineCustomElement as d };

//# sourceMappingURL=ir-filters-panel2.js.map