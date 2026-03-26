import { updateSearchField, hkTasksStore } from "../../../../stores/hk-tasks.store";
import locales from "../../../../stores/locales.store";
import { h, Host } from "@stencil/core";
export class IrTasksHeader {
    cleanInspectAnimationRef;
    cleanedAnimationRef;
    headerButtonPress;
    handleCleanedButtonAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        requestAnimationFrame(() => {
            if (this.cleanedAnimationRef) {
                this.cleanedAnimationRef.play = true;
            }
            if (this.cleanInspectAnimationRef) {
                this.cleanInspectAnimationRef.play = true;
            }
        });
    }
    render() {
        return (h(Host, { key: '68d7b2216703d310cd306a4e7d8801725fce5319' }, h("div", { key: 'f9bf5a6decc1eaf9c1b8e3b0ea6bd6bb13cc8cb2', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input", { key: '80b57d5f4c5549ee56831881d70885f982a28d6d', placeholder: "Search unit", class: "search-filter-input", value: hkTasksStore.searchField, "onText-change": e => updateSearchField(e.detail) }, h("wa-icon", { key: '05ee91ce78e0cf768d5ef5b9808422dd9d784940', name: "magnifying-glass", slot: "start" }))), h("div", { key: '629c881360d9919f1b53ff7f2c202a9feea086c9', class: "action-buttons", style: { gap: '1rem' } }, h("ir-custom-button", { key: '037fbac46373498dd904eaa7b5a5612f50499eef', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, h("wa-icon", { key: '6f5ea8e1f105fd6fecfa48657f3f9b5c5ca38721', slot: "end", name: "file-excel" }), locales.entries.Lcz_Export), h("ir-custom-button", { key: '1f68597d810044bd09c53d736b83d6e7ccb62fe5', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, locales.entries.Lcz_Archives), h("wa-animation", { key: '4f99a75ccb720e11d2f4bde06b8450f41f34495b', class: "clean-button", iterations: 1, ref: el => (this.cleanInspectAnimationRef = el), name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '96b8cce67459ede76ee4ef708caae2347b5fbf25', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasksStore.selectedTasks.length > 0) }, "Clean & Inspect")), h("wa-animation", { key: '92973872f7331f13ec28ad7d534dbcf158e87428', class: "clean-button", iterations: 1, ref: el => (this.cleanedAnimationRef = el), name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '3a1f5a10be1d572ac15c15fa1833b88ebae8c0ac', disabled: !(hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, variant: "brand" }, "Cleaned")))));
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
    static get listeners() {
        return [{
                "name": "animateCleanedButton",
                "method": "handleCleanedButtonAnimation",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-tasks-header.js.map
