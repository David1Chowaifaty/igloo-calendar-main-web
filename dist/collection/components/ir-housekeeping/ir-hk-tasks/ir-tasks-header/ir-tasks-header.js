import { updateSearchField, hkTasksStore } from "../../../../stores/hk-tasks.store";
import { h, Host } from "@stencil/core";
import { t } from "../../../../services/locale/t";
export class IrTasksHeader {
    el;
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
        return (h(Host, { key: '192733ebf6c3346f0a550bb666d2594ff3123d07' }, h("div", { key: '77893fac474e13eee8346ebf802b3aa88a9635ea', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input", { key: '3546c61545a6d64171e85bac7b0ef028ff001310', placeholder: t('Lcz_SearchUnit', { fallback: 'Search unit' }), class: "search-filter-input", value: hkTasksStore.searchField, "onText-change": e => updateSearchField(e.detail) }, h("wa-icon", { key: '093ec54b29545c4ca9f42a238700bbb1368eca3a', name: "magnifying-glass", slot: "start" }))), h("div", { key: '3ca8914d7fd778618695da506cb1eee1d169064e', class: "action-buttons", style: { gap: '1rem' } }, h("ir-custom-button", { key: 'd7a6f60ddb9bd2a155a498d5064bb9fc7dae1827', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, h("wa-icon", { key: 'd92c7b6894a32fa4366577c5a6c780d787212333', slot: "start", name: "download" }), t('Lcz_Export', { fallback: 'Export' })), h("ir-custom-button", { key: '535169839a792202ac701cd2ffce3a3b15b38f77', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, t('Lcz_Archives', { fallback: 'Archives' })), h("wa-animation", { key: '51d8e601dbf04f876fbb15e96ecd829c95f49a88', iterations: 1, id: "cleanInspectAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: 'a2a80d40307b2d75d0c08c4d1d152c964c409bd7', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasksStore.selectedTasks.length > 0) }, t('Lcz_CleanAndInspect', { fallback: 'Clean & Inspect' }))), h("wa-animation", { key: 'cc56b648df7651944111e20cbd3d0a4cb873898f', iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '5423e710993bcc88283beb16717aaeaa17a99df1', disabled: !(hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, variant: "brand" }, t('Lcz_Cleaned', { fallback: 'Cleaned' }))))));
    }
    static get is() { return "ir-tasks-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-tasks-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-tasks-header.css"]
        };
    }
    static get events() {
        return [{
                "method": "headerButtonPress",
                "name": "headerButtonPress",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ name: 'cleaned' | 'export' | 'archive' | 'clean-inspect' }",
                    "resolved": "{ name: \"export\" | \"cleaned\" | \"clean-inspect\" | \"archive\"; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
