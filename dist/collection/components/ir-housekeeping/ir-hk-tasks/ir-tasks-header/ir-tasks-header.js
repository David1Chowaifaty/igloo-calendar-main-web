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
        return (h(Host, { key: '057172a0d70a8f291b267bcc85a9142b40b0e269' }, h("div", { key: 'af4902c090571a5bfcd24cbd619d94fbdab63f76', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input", { key: 'eed9df2373de18cc49b2dbb8c56430ae0a9a8d67', placeholder: t('Lcz_SearchUnit', { fallback: 'Search unit' }), class: "search-filter-input", value: hkTasksStore.searchField, "onText-change": e => updateSearchField(e.detail) }, h("wa-icon", { key: '1cb147acc2c4a3701616f35f1563f74e2288607e', name: "magnifying-glass", slot: "start" }))), h("div", { key: '48361bbdb0b7f04f5f57563bfb4c22a96ce6873c', class: "action-buttons", style: { gap: '1rem' } }, h("ir-custom-button", { key: '5562911eb8fb0fbb921d3a732936391bcf07a830', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, h("wa-icon", { key: '0c5f5439740c6dea46beaa745c3d1d8642ef8972', slot: "start", name: "download" }), t('Lcz_Export', { fallback: 'Export' })), h("ir-custom-button", { key: 'b609f9cd569a0073da6e1418a0ce7bd7245cf8c7', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, t('Lcz_Archives', { fallback: 'Archives' })), h("wa-animation", { key: '6f139ba6d0e64ae17fb7183fb10e64a91add21f3', iterations: 1, id: "cleanInspectAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: 'f8725243de47a46127f187495a15f80bbaa9044b', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasksStore.selectedTasks.length > 0) }, t('Lcz_CleanAndInspect', { fallback: 'Clean & Inspect' }))), h("wa-animation", { key: 'd90eb1aa980a8e9dada5b1df852d28f9f31a68df', iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '25f7a13fde80b3290dbae94ef361786f54731247', disabled: !(hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
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
