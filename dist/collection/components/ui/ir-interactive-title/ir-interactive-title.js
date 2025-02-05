import { Host, h } from "@stencil/core";
export class IrInteractiveTitle {
    constructor() {
        this.popoverTitle = undefined;
        this.irPopoverLeft = '10px';
        this.hkStatus = undefined;
        this.cropSize = 15;
    }
    // private hkStatusColors = {
    //   green: '#57f707',
    //   red: 'rgb(199, 139, 36)',
    //   orange: '#ff9149',
    //   black: '#ff4961',
    // };
    componentWillLoad() {
        this.croppedTitle = this.popoverTitle;
    }
    componentDidLoad() {
        this.initializePopover();
    }
    initializePopover() {
        const titleElement = this.el.querySelector('.popover-title');
        if (titleElement) {
            const isOverflowing = titleElement.scrollWidth > titleElement.offsetWidth;
            if (isOverflowing) {
                this.croppedTitle = this.popoverTitle.slice(0, this.cropSize) + '...';
                this.croppedTitleEl.innerHTML = this.croppedTitle;
                $(titleElement).popover({
                    trigger: 'hover',
                    content: this.popoverTitle,
                    placement: 'top',
                });
            }
            else {
                $(titleElement).popover('dispose');
            }
        }
    }
    render() {
        return (h(Host, { key: '463ed6d00f505a0f26238c88703b6b293a741317', style: { '--ir-popover-left': this.irPopoverLeft } }, h("p", { key: 'ec9a2f75dfb93432a45e074bab82282e755e22e5', class: "popover-title", style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            } }, h("span", { key: 'af463641d1e377f7e03aae6e08e0730e6b1457a4', ref: el => (this.croppedTitleEl = el), class: "croppedTitle" }, this.croppedTitle), this.hkStatus && (h("div", { key: '148a658b1588946bb381406c97ad00d487148457', title: "This unit is dirty", class: `hk-dot` }, h("svg", { key: '3944a7df2eaae4eda252b57bb154830e377e4467', xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512" }, h("path", { key: 'e186afaf4ae795a170177f998ab9948df2628674',
            // fill="currentColor"
            d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" })))))));
    }
    static get is() { return "ir-interactive-title"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-interactive-title.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-interactive-title.css"]
        };
    }
    static get properties() {
        return {
            "popoverTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "popover-title",
                "reflect": false
            },
            "irPopoverLeft": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "ir-popover-left",
                "reflect": false,
                "defaultValue": "'10px'"
            },
            "hkStatus": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "hk-status",
                "reflect": false
            },
            "cropSize": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "crop-size",
                "reflect": false,
                "defaultValue": "15"
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-interactive-title.js.map
