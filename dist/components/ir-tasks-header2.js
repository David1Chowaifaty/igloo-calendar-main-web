import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hkTasksStore, b as updateSearchField } from './hk-tasks.store.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:flex;gap:1rem;flex-wrap:wrap}.action-buttons.sc-ir-tasks-header{display:flex;align-items:center}.search-filter-container.sc-ir-tasks-header{flex:1 1 0%}.clean-button.sc-ir-tasks-header{display:none}@media (min-width: 640px){.sc-ir-tasks-header-h{flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:1rem}.search-filter-container.sc-ir-tasks-header{display:flex}.action-buttons.sc-ir-tasks-header{justify-content:stretch}.clean-button.sc-ir-tasks-header{display:flex}}";
const IrTasksHeaderStyle0 = irTasksHeaderCss;

const IrTasksHeader = /*@__PURE__*/ proxyCustomElement(class IrTasksHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.headerButtonPress = createEvent(this, "headerButtonPress", 7);
    }
    get el() { return this; }
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
        return (h(Host, { key: '96616de11d5acf48aa2494e9d1cf9aeeeab2f569' }, h("div", { key: '34818faf8602604b4a9fd77c70ea5441b9423136', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input", { key: '5518609614a915f8b569aaa77221bbaeeffbab19', placeholder: "Search unit", class: "search-filter-input", value: hkTasksStore.searchField, "onText-change": e => updateSearchField(e.detail) }, h("wa-icon", { key: '0e17f067c5bb82deb8715e62410991f0cece686c', name: "magnifying-glass", slot: "start" }))), h("div", { key: 'b4d0f5be45c2ffc2aefae1c0c2ccd64cf8cc65c6', class: "action-buttons", style: { gap: '1rem' } }, h("ir-custom-button", { key: 'b7b188212735728c1f88196bab6bbdf552201882', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, h("wa-icon", { key: 'a9bf600f9d284f10d9785a6c6401b7b0c038ee65', slot: "end", name: "file-excel" }), locales.entries.Lcz_Export), h("ir-custom-button", { key: 'c976fa1993ec29c9efab4f832c332a5488388868', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, locales.entries.Lcz_Archives), h("wa-animation", { key: '468d12e9c09ff75927c1c63c67e119696c856783', iterations: 1, id: "cleanInspectAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '79ae96f0d827bc56c6c58f30b83eb6e6cf3e90ec', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasksStore.selectedTasks.length > 0) }, "Clean & Inspect")), h("wa-animation", { key: '55992710a8f84873eeae14b13fc8defadfa84f06', iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '7c36469eccb88bce3dad9d447c8c8d9151de58fc', disabled: !(hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, variant: "brand" }, "Cleaned")))));
    }
    static get style() { return IrTasksHeaderStyle0; }
}, [2, "ir-tasks-header"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tasks-header", "ir-custom-button", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tasks-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTasksHeader);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrTasksHeader as I, defineCustomElement as d };

//# sourceMappingURL=ir-tasks-header2.js.map