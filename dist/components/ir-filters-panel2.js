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
        return (h("div", { key: '16dbc49d4473c7ad157ca624c2f360377ed0cf44', class: panelClasses }, h("div", { key: '830195502eb57ba69b1c5293c119fb29fa6a85db', class: cardClass }, h("div", { key: '3921a9b5fce74c8f16af88be0fa546ad95ab4cb3', class: headerClasses }, h("div", { key: 'e97b043b9d5eff7e70ec5d390f4538122beeec65', class: "filters-panel__title-group" }, h("slot", { key: 'efe6b26db474ea1d8759ce806524ad89e6747a59', name: "header-icon" }, this.renderDefaultIcon()), this.filterTitle && h("h4", { key: 'e5bcd1a1467e27a3601ef982a19795d448e15163', class: "filters-panel__title m-0 p-0 flex-grow-1" }, this.filterTitle), h("slot", { key: 'fda91af5d4d6d115d4f188443e14600dad39e0e9', name: "header-title-extra" })), h("div", { key: '3a63693f2b6e8589c5868020bb7038e79bcb0e0b', class: "filters-panel__header-actions" }, h("slot", { key: '1f43dafb7f88edb481debd10f25719b8fdadaba2', name: "header-actions" }), this.renderCollapseButton(collapsed))), h("div", { key: '04dad531a906ff1fcf79f87b3ae197afaba68051', id: this.targetId, class: {
                'filters-panel__content': true,
                'collapse': true,
                'show': !collapsed,
            }, "aria-hidden": collapsed ? 'true' : 'false' }, h("div", { key: '3fc4d6b7b94ebf98ceb080bb5da29c805e898328', class: contentWrapperClasses, style: { gap: this.contentGap } }, h("slot", { key: '12d08841012d2ec3ecbcf80888133b25206b3bb3' }), !this.hideDefaultActions && (h("div", { key: '5775193a91ac52483528a748fe91a85e20b7134a', class: footerClasses }, h("slot", { key: '7e8c572e9940d06dd6cc07541e1d76b6227e96f9', name: "actions" }, h("ir-button", { key: 'c789b2af3089d902e66f22f1bb88e336aca5360e', btn_type: "button", "data-testid": `${this.actionTestId}-reset`, text: this.resetLabel, size: "sm", btn_color: "secondary", btn_disabled: this.disableReset, onClickHandler: this.handleReset.bind(this) }), h("ir-button", { key: '88f9f0c43dacad0296b2b395b5a326d6e7098e95', btn_type: "button", "data-testid": `${this.actionTestId}-apply`, isLoading: this.isApplyLoading, text: this.applyLabel, size: "sm", btn_disabled: this.disableApply, onClickHandler: this.handleApply.bind(this) })))))))));
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