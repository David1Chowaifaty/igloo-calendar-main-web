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
        return (h(Host, { key: '67d26735a3fc5a794ce1de55b21e4ce0efd4dc28' }, h("div", { key: '50a794e022d09e544b0d970c3a2072ed4fb0eda9', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input", { key: '36363a477113b4f871b78c600d3504a12e187081', placeholder: t('Lcz_SearchUnit', { fallback: 'Search unit' }), class: "search-filter-input", value: hkTasksStore.searchField, "onText-change": e => updateSearchField(e.detail) }, h("wa-icon", { key: '6c3e8fa5340741df028940b6a004566d8aef16c5', name: "magnifying-glass", slot: "start" }))), h("div", { key: '3d4a18882da12952224e2517c5aa218514d061d5', class: "action-buttons", style: { gap: '1rem' } }, h("ir-custom-button", { key: '269b6ffc766ca789f8aafc449f9f579789ea989a', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, h("wa-icon", { key: '5d0507a7f46c647c1eff53b1c621b4d5750e5cb6', slot: "start", name: "download" }), t('Lcz_Export', { fallback: 'Export' })), h("ir-custom-button", { key: '9168f4baf5cd220d4c5cc64e8837d42686c9c3c3', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, t('Lcz_Archives', { fallback: 'Archives' })), h("wa-animation", { key: '66140ef6ea57c28ebce60c4d0c1a864d37476eb9', iterations: 1, id: "cleanInspectAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '1be04b36aa1ed1424bb097d7b362a3063a0ab220', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasksStore.selectedTasks.length > 0) }, t('Lcz_CleanAndInspect', { fallback: 'Clean & Inspect' }))), h("wa-animation", { key: '7bd2be78ef920b413759924408caa37b4d1ca425', iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: 'c12d141c19b904608d841f1684a5fd4f3ec560ed', disabled: !(hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
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
