import { onlineResources } from "../../common/ir.common.resources";
import ApiClient from "../../models/ApiClient";
export class IrCommon {
    extraResources = '';
    disableResourceInjection;
    /** Sends the IRBE endpoints listed in `ApiClient` to the default base URL instead of the IRBE gateway. */
    disableIrbeRouting = false;
    resources = onlineResources;
    componentWillLoad() {
        ApiClient.setDisableIrbeRouting(this.disableIrbeRouting);
        this.parseRefs();
    }
    handleDisableIrbeRoutingChange(newValue) {
        ApiClient.setDisableIrbeRouting(newValue);
    }
    componentDidLoad() {
        this.initializeStyles();
    }
    hrefsChanged() {
        this.parseRefs();
        this.initializeStyles();
    }
    parseRefs() {
        if (this.disableResourceInjection) {
            return;
        }
        if (this.extraResources !== '')
            this.resources.push(JSON.parse(this.extraResources));
    }
    appendTag(tagName, attributes) {
        const tag = document.createElement(tagName);
        const selectorParts = [];
        Object.keys(attributes).forEach(attr => {
            tag.setAttribute(attr, attributes[attr]);
            selectorParts.push(`[${attr}="${attributes[attr]}"]`);
        });
        const selector = `${tagName}${selectorParts.join('')}`;
        const existingTag = document.querySelector(selector);
        if (!existingTag) {
            document.head.appendChild(tag);
        }
    }
    initializeStyles() {
        if (this.disableResourceInjection) {
            return;
        }
        this.resources.forEach(res => {
            if (res.isCSS) {
                this.appendTag('link', {
                    href: res.link,
                    rel: 'stylesheet',
                    type: 'text/css',
                });
            }
            if (res.isJS) {
                this.appendTag('script', {
                    src: res.link,
                });
            }
        });
    }
    render() {
        return null;
    }
    static get is() { return "ir-common"; }
    static get originalStyleUrls() {
        return {
            "$": ["../../global/app.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["../../global/app.css"]
        };
    }
    static get properties() {
        return {
            "extraResources": {
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
                "reflect": true,
                "attribute": "extra-resources",
                "defaultValue": "''"
            },
            "disableResourceInjection": {
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disable-resource-injection"
            },
            "disableIrbeRouting": {
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
                    "text": "Sends the IRBE endpoints listed in `ApiClient` to the default base URL instead of the IRBE gateway."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disable-irbe-routing",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "resources": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "disableIrbeRouting",
                "methodName": "handleDisableIrbeRoutingChange"
            }, {
                "propName": "extraResources",
                "methodName": "hrefsChanged"
            }];
    }
}
