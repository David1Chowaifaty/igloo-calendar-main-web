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
        return (h(Host, { key: 'ac8db4f8a757e38d5795c1441158d0dea3947c93' }, h("ul", { key: 'abf9f6a9bd59501edeb2dd0e28906d6619eeb6ca', class: "px-1" }, this.headerTitles.map((title, index) => (h("li", { class: `tab ${title.disabled ? 'text-light' : ''}`, key: title.id, onClick: () => {
                if (!title.disabled)
                    this.handleTabSelection(index);
            }, "data-disabled": title.disabled, "data-state": this.selectedIndex === index ? 'selected' : '' }, title.name)))), h("span", { key: '6e73572db054f6431be862ccd30decd512cdd260', class: "active-indicator", ref: el => (this.activeIndicator = el) })));
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
