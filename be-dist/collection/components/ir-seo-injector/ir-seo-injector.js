export class IrSeoInjector {
    constructor() {
        this.pageTitle = undefined;
        this.pageDescription = undefined;
        this.pageKeywords = undefined;
    }
    updateMetaTags() {
        if (this.pageTitle) {
            document.title = this.pageTitle;
        }
        this.updateMeta('description', this.pageDescription);
        this.updateMeta('keywords', this.pageKeywords);
    }
    // Method to update or create a meta tag
    updateMeta(name, content) {
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('name', name);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    }
    // Lifecycle method to update meta tags when component loads
    componentWillLoad() {
        this.updateMetaTags();
    }
    render() {
        // This component does not render anything visible
        return null;
    }
    static get is() { return "ir-seo-injector"; }
    static get properties() {
        return {
            "pageTitle": {
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
                "attribute": "page-title",
                "reflect": false
            },
            "pageDescription": {
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
                "attribute": "page-description",
                "reflect": false
            },
            "pageKeywords": {
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
                "attribute": "page-keywords",
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "pageTitle",
                "methodName": "updateMetaTags"
            }, {
                "propName": "pageDescription",
                "methodName": "updateMetaTags"
            }, {
                "propName": "pageKeywords",
                "methodName": "updateMetaTags"
            }];
    }
}
//# sourceMappingURL=ir-seo-injector.js.map
