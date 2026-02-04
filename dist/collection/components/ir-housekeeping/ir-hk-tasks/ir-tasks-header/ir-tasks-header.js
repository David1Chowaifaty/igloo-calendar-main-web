import { updateSearchField, hkTasksStore } from "../../../../stores/hk-tasks.store";
import locales from "../../../../stores/locales.store";
import { h, Host } from "@stencil/core";
export class IrTasksHeader {
    btnRef;
    headerButtonPress;
    handleCleanedButtonAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (h(Host, { key: 'd20f8d6f407d01f28adabb7450da9f16a3f6ee1f' }, h("div", { key: '501a1ba83d0f7f01ce23f12c0064025a39e8b219', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input-text", { key: 'f0b9d840e71d880b203af21ba33d3d9c799df793', class: "search-filter-input", placeholder: "Search unit", variant: "icon", value: hkTasksStore.searchField, onTextChange: e => updateSearchField(e.detail) }, h("ir-icons", { key: '4db7b5d44b3f5f48bd6c2619ea3e481a2fb33e93', name: "search", slot: "icon" }))), h("div", { key: '11104a900355295ddc73fbbfeb0ec99a3b29cc5e', class: "action-buttons", style: { gap: '1rem' } }, h("ir-button", { key: '16e0b1e2204c0f287f34b10178c7afafecb6d75f', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), h("ir-button", { key: 'd553c888d4ab69f2379516ffbfa40bf767c3599c', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), h("ir-button", { key: 'c3e59552d8715f8568bae004194c54468934d883', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasksStore.selectedTasks.length > 0), text: 'Cleaned', ref: el => (this.btnRef = el) }), h("ir-button", { key: 'cbe8fa6b5c1374b18df2982759c752c3bff47c7b', class: "clean-button", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !(hkTasksStore.selectedTasks.length > 0), text: 'Clean & Inspect', ref: el => (this.btnRef = el) }))));
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
