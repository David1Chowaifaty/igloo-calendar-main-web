import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';

const IrSeoInjector$1 = /*@__PURE__*/ proxyCustomElement(class IrSeoInjector extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    get el() { return this; }
    static get watchers() { return {
        "pageTitle": ["updateMetaTags"],
        "pageDescription": ["updateMetaTags"],
        "pageKeywords": ["updateMetaTags"]
    }; }
}, [0, "ir-seo-injector", {
        "pageTitle": [1, "page-title"],
        "pageDescription": [1, "page-description"],
        "pageKeywords": [1, "page-keywords"]
    }, undefined, {
        "pageTitle": ["updateMetaTags"],
        "pageDescription": ["updateMetaTags"],
        "pageKeywords": ["updateMetaTags"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-seo-injector"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-seo-injector":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSeoInjector$1);
            }
            break;
    } });
}

const IrSeoInjector = IrSeoInjector$1;
const defineCustomElement = defineCustomElement$1;

export { IrSeoInjector, defineCustomElement };

//# sourceMappingURL=ir-seo-injector.js.map