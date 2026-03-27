import { r as registerInstance, a as createEvent, i as getElement, h, e as Host } from './index-7b3961ed.js';
import { h as hkTasksStore, j as updateSearchField } from './hk-tasks.store-c7c0934a.js';
import { l as locales } from './locales.store-daef23cc.js';
import './index-17663a35.js';
import './calendar-data-cdc01d0d.js';

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:flex;gap:1rem;flex-wrap:wrap}.action-buttons.sc-ir-tasks-header{display:flex;align-items:center}.search-filter-container.sc-ir-tasks-header{flex:1 1 0%}.clean-button.sc-ir-tasks-header{display:none}@media (min-width: 640px){.sc-ir-tasks-header-h{flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:1rem}.search-filter-container.sc-ir-tasks-header{display:flex}.action-buttons.sc-ir-tasks-header{justify-content:stretch}.clean-button.sc-ir-tasks-header{display:flex}}";

const IrTasksHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.headerButtonPress = createEvent(this, "headerButtonPress", 7);
    }
    get el() { return getElement(this); }
    headerButtonPress;
    cleanAndInspectEl;
    cleanEl;
    prevSelectedCount = 0;
    componentDidRender() {
        const count = hkTasksStore.selectedTasks.length;
        if (count > this.prevSelectedCount) {
            if (!this.cleanAndInspectEl) {
                this.cleanAndInspectEl = this.el.querySelector('#cleanInspectAnimation');
            }
            if (!this.cleanEl) {
                this.cleanEl = this.el.querySelector('#cleanAnimation');
            }
            if (this.cleanAndInspectEl)
                this.cleanAndInspectEl.play = true;
            if (this.cleanEl)
                this.cleanEl.play = true;
        }
        this.prevSelectedCount = count;
    }
    render() {
        return (h(Host, { key: '28ecab3d33211eb0eb286418128605a8292a9832' }, h("div", { key: '949b78c4c59a4c5061ae8a0b4ca57f6c5a0a9fe8', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input", { key: '1ed6ee546d507f68ae34c5eef801b3285c920d71', placeholder: "Search unit", class: "search-filter-input", value: hkTasksStore.searchField, "onText-change": e => updateSearchField(e.detail) }, h("wa-icon", { key: 'c6658888ec2c6c9f19c928aedcdc69168b4e52bf', name: "magnifying-glass", slot: "start" }))), h("div", { key: 'fdf255e357fb5be510dce7c47e2d3b922e8649c8', class: "action-buttons", style: { gap: '1rem' } }, h("ir-custom-button", { key: 'fccf0375fc4b1a90fb1eeb4ebc229bd2dffa6673', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, h("wa-icon", { key: 'cb62439fe1e0834667997a4b0c6c58ff1964a97d', slot: "end", name: "file-excel" }), locales.entries.Lcz_Export), h("ir-custom-button", { key: '23819c85b5f462c7f189ae93c6b7c122ca4e4888', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, locales.entries.Lcz_Archives), h("wa-animation", { key: 'f5c79b545e66e1eec1db80414324f20d8a3b27e1', iterations: 1, id: "cleanInspectAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: 'f755798a33fe95942e30884d1b484f14366982ca', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasksStore.selectedTasks.length > 0) }, "Clean & Inspect")), h("wa-animation", { key: 'efab6854bf3b8cca83b2c068da55788dedd776bc', iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: 'b24badd36360305ddb3dec4976f5d408b839e054', disabled: !(hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, variant: "brand" }, "Cleaned")))));
    }
};
IrTasksHeader.style = irTasksHeaderCss;

export { IrTasksHeader as ir_tasks_header };

//# sourceMappingURL=ir-tasks-header.entry.js.map