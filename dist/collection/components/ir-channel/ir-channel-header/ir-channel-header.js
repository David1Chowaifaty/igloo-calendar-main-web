import { Host, h } from "@stencil/core";
export class IrChannelHeader {
    constructor() {
        this.headerTitles = [];
        this.selectedIndex = 0;
    }
    componentDidLoad() {
        this.updateActiveIndicator();
    }
    disconnectedCallback() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
    handleTabSelection(index) {
        this.selectedIndex = index;
        this.updateActiveIndicator();
        this.tabChanged.emit(this.headerTitles[this.selectedIndex].id);
    }
    updateActiveIndicator() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        requestAnimationFrame(() => {
            const selectedTab = this.el.querySelector(`li.tab[data-state="selected"]`);
            if (selectedTab) {
                const { left, width } = selectedTab.getBoundingClientRect();
                const parentLeft = this.el.getBoundingClientRect().left;
                const position = left - parentLeft;
                this.activeIndicator.style.width = `${width}px`;
                this.activeIndicator.style.transform = `translateX(${position}px)`;
            }
        });
    }
    render() {
        return (h(Host, { key: 'ebc7b4740333e52146e0bf524d06a14798261e26' }, h("ul", { key: 'b21c8e5383a95db7b802813317dc98ec85062e2f', class: "px-1" }, this.headerTitles.map((title, index) => (h("li", { class: `tab ${title.disabled ? 'text-light' : ''}`, key: title.id, onClick: () => {
                if (!title.disabled)
                    this.handleTabSelection(index);
            }, "data-disabled": title.disabled, "data-state": this.selectedIndex === index ? 'selected' : '' }, title.name)))), h("span", { key: '54a871ff7c54eec9af678c828c82cf9088f3516f', class: "active-indicator", ref: el => (this.activeIndicator = el) })));
    }
    static get is() { return "ir-channel-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-channel-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-channel-header.css"]
        };
    }
    static get properties() {
        return {
            "headerTitles": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ id: string; name: string; disabled: boolean }[]",
                    "resolved": "{ id: string; name: string; disabled: boolean; }[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "selectedIndex": {}
        };
    }
    static get events() {
        return [{
                "method": "tabChanged",
                "name": "tabChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-channel-header.js.map
