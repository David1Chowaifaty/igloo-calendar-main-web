import { Host, h } from "@stencil/core";
import { inlineOffset, inlineSign } from "../../../utils/direction";
export class IrChannelHeader {
    el;
    headerTitles = [];
    selectedIndex = 0;
    tabChanged;
    activeIndicator;
    animationFrameId;
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
                const tabRect = selectedTab.getBoundingClientRect();
                // Measured on the inline axis: the indicator starts at the strip's inline start,
                // which is the right edge under RTL, so a raw physical offset walks it the wrong way.
                const position = inlineOffset(tabRect, this.el.getBoundingClientRect());
                this.activeIndicator.style.width = `${tabRect.width}px`;
                this.activeIndicator.style.transform = `translateX(${position * inlineSign()}px)`;
            }
        });
    }
    render() {
        return (h(Host, { key: '1f48ec0bebcde206652671fd30f2848f1a5f63cb' }, h("ul", { key: 'bec48bfe90b005b9257d43faaf786b42230d517d', class: "px-1" }, this.headerTitles.map((title, index) => (h("li", { class: `tab ${title.disabled ? 'text-light' : ''}`, key: title.id, onClick: () => {
                if (!title.disabled)
                    this.handleTabSelection(index);
            }, "data-disabled": title.disabled, "data-state": this.selectedIndex === index ? 'selected' : '' }, title.name)))), h("span", { key: '5a9cabeb59eb6628598ffff5ce6c094b3c10f7e4', class: "active-indicator", ref: el => (this.activeIndicator = el) })));
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
