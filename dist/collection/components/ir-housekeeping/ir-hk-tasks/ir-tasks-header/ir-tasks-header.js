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
        return (h(Host, { key: 'f306ad52027c642ad222a7798c849cc9145ddbc2' }, h("div", { key: '5e87cf9e016b82608aaa571a5589209b8e40b2d8', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input", { key: '03c78340cd65242a27150b93ea0fae0a34b858b3', placeholder: t('Lcz_SearchUnit', { fallback: 'Search unit' }), class: "search-filter-input", value: hkTasksStore.searchField, "onText-change": e => updateSearchField(e.detail) }, h("wa-icon", { key: '5b5a84ced25d7dbd37044770a6235768f94c7785', name: "magnifying-glass", slot: "start" }))), h("div", { key: '64317b742b96bdfda3e529e4edaa939524668d31', class: "action-buttons", style: { gap: '1rem' } }, h("ir-custom-button", { key: 'e570ed6ea370c095f4021fd0dcbbcdac15425fcc', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, h("wa-icon", { key: '7f0199b815a9ffbba8e11c6d8b9799a5e1da670a', slot: "start", name: "download" }), t('Lcz_Export', { fallback: 'Export' })), h("ir-custom-button", { key: '9db0a0fe4877b820ddc14fc65d8c2cb07e265d10', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, t('Lcz_Archives', { fallback: 'Archives' })), h("wa-animation", { key: 'eb1b438f82009a96021983ed5d334f3581a66709', iterations: 1, id: "cleanInspectAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '512563bce44d6ef99f381c1ed9fe78dce9915517', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasksStore.selectedTasks.length > 0) }, t('Lcz_CleanAndInspect', { fallback: 'Clean & Inspect' }))), h("wa-animation", { key: 'f2b069d65b3739dfe1115cc2c8594d550846c66e', iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '94f358cf9e5eb028a1e97c9e0db8d3633515fe4f', disabled: !(hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
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
