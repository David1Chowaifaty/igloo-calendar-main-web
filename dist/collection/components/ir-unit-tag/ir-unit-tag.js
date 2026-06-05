import { Fragment, h } from "@stencil/core";
import { v4 } from "uuid";
export class IrUnitTag {
    unit;
    showTooltip = false;
    _id = v4();
    resizeObserver;
    contentElement;
    measurementFrame;
    setContentRef = (el) => {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        this.contentElement = el || undefined;
        if (!this.contentElement) {
            return;
        }
        this.attachResizeObserver();
        this.scheduleTooltipUpdate();
    };
    componentDidLoad() {
        this.attachResizeObserver();
        this.scheduleTooltipUpdate();
    }
    disconnectedCallback() {
        this.resizeObserver?.disconnect();
        if (this.measurementFrame) {
            cancelAnimationFrame(this.measurementFrame);
            this.measurementFrame = undefined;
        }
    }
    onUnitChange() {
        this.scheduleTooltipUpdate();
    }
    attachResizeObserver() {
        if (typeof window === 'undefined' || !this.contentElement || typeof ResizeObserver === 'undefined') {
            return;
        }
        if (!this.resizeObserver) {
            this.resizeObserver = new ResizeObserver(() => this.scheduleTooltipUpdate());
        }
        this.resizeObserver.observe(this.contentElement);
    }
    scheduleTooltipUpdate() {
        if (typeof window === 'undefined') {
            return;
        }
        if (this.measurementFrame) {
            cancelAnimationFrame(this.measurementFrame);
        }
        this.measurementFrame = requestAnimationFrame(() => {
            this.measurementFrame = undefined;
            this.updateTooltipState();
        });
    }
    updateTooltipState() {
        if (typeof window === 'undefined') {
            return;
        }
        const content = this.contentElement;
        if (!content || !this.unit) {
            if (this.showTooltip) {
                this.showTooltip = false;
            }
            return;
        }
        const shouldShow = content.scrollWidth > content.clientWidth;
        if (shouldShow !== this.showTooltip) {
            this.showTooltip = shouldShow;
        }
    }
    render() {
        return (h(Fragment, { key: 'c3edef1ab4a82c31c32e1f419ca36bec0ec93a6d' }, this.showTooltip && h("wa-tooltip", { key: '3fdaf6a8ea754346398c744c67974fdf52e32a10', for: this._id }, this.unit), h("wa-tag", { key: 'd34db7d61388d4c4ea72c077ecb9a914d67254dc', id: this._id, class: "unit-tag__el", size: "small", appearance: "filled", variant: "brand" }, h("span", { key: 'a8237863cb5b0fde733966ea57375166daf8bff2', class: "unit-tag__content", ref: this.setContentRef }, this.unit))));
    }
    static get is() { return "ir-unit-tag"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-unit-tag.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-unit-tag.css"]
        };
    }
    static get properties() {
        return {
            "unit": {
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
                "getter": false,
                "setter": false,
                "attribute": "unit",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "showTooltip": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "unit",
                "methodName": "onUnitChange"
            }];
    }
}
//# sourceMappingURL=ir-unit-tag.js.map
