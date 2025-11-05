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
        return (h("div", { key: 'ad84c95c8d04f14fb0507dba6255cf487ae7e876', class: panelClasses }, h("div", { key: '88b48c601e1da89ce4844043ca1eebae221a5f64', class: cardClass }, h("div", { key: '2fb30e2a48f086d461a4bea33228db9f9be00097', class: headerClasses }, h("div", { key: '68114b2466bcdc2a05439c0754cc52011898731e', class: "filters-panel__title-group" }, h("slot", { key: 'c5d8c2f835c5c48deaf0e10ded93f3c55d2ee2e2', name: "header-icon" }, this.renderDefaultIcon()), this.filterTitle && h("h4", { key: 'eb1ac939ae7e2b01684536a194dc66fabcfa642b', class: "filters-panel__title m-0 p-0 flex-grow-1" }, this.filterTitle), h("slot", { key: '95094a75cc2e2675265e92222d4bebd0c31b9b53', name: "header-title-extra" })), h("div", { key: 'b0c823bee84c9c821bd1613da563bddd3392e812', class: "filters-panel__header-actions" }, h("slot", { key: '90483e97ab87c9dd166b3543ddca4ecdeb25c32d', name: "header-actions" }), this.renderCollapseButton(collapsed))), h("div", { key: '362795732d675b6b2740d9a1a9477fc0e2d800b5', id: this.targetId, class: {
                'filters-panel__content': true,
                'collapse': true,
                'show': !collapsed,
            }, "aria-hidden": collapsed ? 'true' : 'false' }, h("div", { key: '2d34ce372a1380fcd79de53336c64cbbc799f38e', class: contentWrapperClasses, style: { gap: this.contentGap } }, h("slot", { key: 'd7e32b9e834d0d1740ec1b5732d39afebe0d055b' }), !this.hideDefaultActions && (h("div", { key: '2268bd05bdea98e1f48f5d540f72f6b0d7b47f52', class: footerClasses }, h("slot", { key: 'addfe1bab5cd45c7174b532817ff2deeedc91f00', name: "actions" }, h("ir-button", { key: 'd9e9d1c09529a640e2732ccd265723f78404f0d1', btn_type: "button", "data-testid": `${this.actionTestId}-reset`, text: this.resetLabel, size: "sm", btn_color: "secondary", btn_disabled: this.disableReset, onClickHandler: this.handleReset.bind(this) }), h("ir-button", { key: '9e754b162c4fee56abbc7472c5f8e403a07e0a1e', btn_type: "button", "data-testid": `${this.actionTestId}-apply`, isLoading: this.isApplyLoading, text: this.applyLabel, size: "sm", btn_disabled: this.disableApply, onClickHandler: this.handleApply.bind(this) })))))))));
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