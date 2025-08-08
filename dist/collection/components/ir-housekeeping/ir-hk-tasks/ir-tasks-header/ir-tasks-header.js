import { updateSearchField, hkTasksStore } from "../../../../stores/hk-tasks.store";
import locales from "../../../../stores/locales.store";
import { h, Host } from "@stencil/core";
export class IrTasksHeader {
    handleCleanedButtonAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (h(Host, { key: '40ed42472d5037a653e26928cf61ab08a4c854af' }, h("div", { key: 'b346458f84f9cc405cb5bb16b9d76cdd91b9f85a', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input-text", { key: '816fb87072c5cbd98f7e5d9879c9355ae49a4b19', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasksStore.searchField, onTextChange: e => updateSearchField(e.detail) }, h("ir-icons", { key: '8c5e22ff577cef976fa6c98841eea23886218a0e', name: "search", slot: "icon" }))), h("div", { key: '1a5de79fd9c6e1e1855a1e428f5c900d1fd27724', class: "action-buttons", style: { gap: '1rem' } }, h("ir-button", { key: '5be8dd74821c4bf816fb0b69070e91264df8c599', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), h("ir-button", { key: '27d889cb9581f4091caeffc134a1b1dd31ca64cf', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), h("ir-button", { key: '08c34c7b4509d5cca8115436a59fc941a8f44e11', class: "d-none d-md-flex", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasksStore.selectedTasks.length > 0), text: 'Cleaned', ref: el => (this.btnRef = el) }))));
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
                    "original": "{ name: 'cleaned' | 'export' | 'archive' }",
                    "resolved": "{ name: \"cleaned\" | \"export\" | \"archive\"; }",
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
