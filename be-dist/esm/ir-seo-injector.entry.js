import { r as registerInstance, g as getElement } from './index-21632897.js';

const IrSeoInjector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "pageTitle": ["updateMetaTags"],
        "pageDescription": ["updateMetaTags"],
        "pageKeywords": ["updateMetaTags"]
    }; }
};

export { IrSeoInjector as ir_seo_injector };

//# sourceMappingURL=ir-seo-injector.entry.js.map