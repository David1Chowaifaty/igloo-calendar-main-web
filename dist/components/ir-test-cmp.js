import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-m-combobox2.js';
import { d as defineCustomElement$2 } from './ir-notifications2.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background-color:darkblue;width:100%;padding:1rem}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;color:#4b5563;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}.hotel-name.sc-ir-test-cmp{display:none !important}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.d-none.sc-ir-test-cmp{display:none !important}.d-md-none.sc-ir-test-cmp{display:block !important}.d-md-block.sc-ir-test-cmp{display:none !important}.d-md-flex.sc-ir-test-cmp{display:none !important}@media (min-width: 768px){.d-md-none.sc-ir-test-cmp{display:none !important}.d-md-block.sc-ir-test-cmp{display:block !important}.d-md-flex.sc-ir-test-cmp{display:flex !important}}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp$1 = /*@__PURE__*/ proxyCustomElement(class IrTestCmp extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.countryOptions = [];
        this.customOptions = [];
        this.isLoadingCountries = false;
        this.isLoadingCustom = false;
        this.staticOptions = [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3 ajnajanjanjna janajnjanjan najnajnajn ajnaj' },
            { value: 'option4', label: 'Option 4' },
            { value: 'option5', label: 'Option 5' },
        ];
        this.handleStaticOptionChange = (event) => {
            this.selectedStaticOption = event.detail;
        };
        this.handleCountryChange = (event) => {
            this.selectedCountry = event.detail;
        };
        this.handleCustomOptionChange = (event) => {
            this.selectedCustomOption = event.detail;
        };
        this.handleCountrySearch = async (event) => {
            const query = event.detail;
            if (!query || query.length < 2) {
                this.countryOptions = [];
                return;
            }
            this.isLoadingCountries = true;
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(query)}`);
                if (response.ok) {
                    const countries = await response.json();
                    this.countryOptions = countries
                        .map(country => ({
                        value: country.cca2,
                        label: country.name.common,
                    }))
                        .slice(0, 10); // Limit to 10 results
                }
                else {
                    this.countryOptions = [];
                }
            }
            catch (error) {
                console.error('Error fetching countries:', error);
                this.countryOptions = [];
            }
            finally {
                this.isLoadingCountries = false;
            }
        };
        this.handleCustomSearch = async (event) => {
            const query = event.detail;
            if (!query || query.length < 2) {
                this.customOptions = [];
                return;
            }
            this.isLoadingCustom = true;
            // Simulate API call with timeout
            setTimeout(() => {
                this.customOptions = [
                    { value: `custom-${query}-1`, label: `Custom Result 1 for "${query}"` },
                    { value: `custom-${query}-2`, label: `Custom Result 2 for "${query}"` },
                    { value: `custom-${query}-3`, label: `Custom Result 3 for "${query}"` },
                ];
                this.isLoadingCustom = false;
            }, 500);
        };
        this.handleCustomOptionClick = (option) => {
            if (this.customComboboxRef) {
                this.customComboboxRef.selectOptionFromSlot(option);
            }
        };
        this.notificationCount = 0;
        this.isMobileMenuOpen = false;
        this.toggleMobileMenu = () => {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        };
    }
    render() {
        return (h(Host, { key: '0799693e2747ba2ab6a2391625019e074d3ae36c' }, h("nav", { key: '7d3ed4e9b1355018bdb694923016a0b20d464ba3', class: "modern-navbar" }, h("span", { key: '130f721478f295ee2e63ac4f0ce18a1c3ecc3d4c', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '7270e464552ea79ec5f9fa33d16c26031c318c60', class: "navbar-container" }, h("div", { key: '4171c937064c09de271377a22c67556101562333', class: "navbar-left" }, h("button", { key: 'ca1b12a4ef6d5decbe315cf68b063badad834836', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'efb320de3c78f411eb26b177bfe07665f08e98e4', class: "hamburger-icon" }, h("span", { key: 'ddffcebe4ceddc681967f38a5336dad443da590d' }), h("span", { key: 'a514d1ada13e387ae9ad63bc989841dcc494fd00' }), h("span", { key: '11d685e9040a44b7270fc1f81cf226ab6c0723ea' }))), h("div", { key: '6ee5613d1d76b6544cc4419b234c95c3080948bf', class: "navbar-brand" }, "Logo"), h("div", { key: '59619ec8d892886efb5e4d5266424b465cf8ff6f', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '3755c0d4b2e50dca78e16e9c821d1ed90b1bebb3', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '599fb559146564c56468c12cec4fcef4004ccb83', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'a030cbfc5d74bacb02f79fc91d26269070d7b412', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '0f2c5fd8b140af437b407ff7758608c71b57e537', notificationCount: this.notificationCount }))), h("div", { key: '700b1ab76a3f4e29a3e70a1c905a7a214b31905c', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '24ddb83d66411c32a4f5457adcd81c4821bd431f', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '21d2738490db307ebdbe43cebae83a2b65d5f2bc', class: "navbar-right" }, h("ul", { key: '41362aada247c1cd59ad83649f09b5b89fbadd71', class: "nav-items d-none d-md-flex" }, h("li", { key: 'e825a6e4f8be2367f12e1003b060e1f243d768ec', class: "nav-item" }, h("a", { key: '4d26bca4d4211bab3e8435bea03d3cbf130d01e1', href: "#", class: "nav-link" }, "a")), h("li", { key: '2cded1cda85211ac7edea1b2fc617371a01f6b78', class: "nav-item" }, h("a", { key: '00ad6bc1eea9cefa46acee4f967c0f1b4e0fea16', href: "#", class: "nav-link" }, "b")), h("li", { key: 'ae54bb7eedf1b4fa4823e763264b8e0ed395fec4', class: "nav-item" }, h("a", { key: '470c5f69411c6b7df15df9c705ee88d7bd5e2ce5', href: "#", class: "nav-link" }, "c")), h("li", { key: '1289c110f4f503b7d36cdd9462969928ec22d6a3', class: "nav-item" }, h("a", { key: '2b84ab8a4460a8d0838e4469b6751c34734268f6', href: "#", class: "nav-link" }, "d")), h("li", { key: '753bad76c22d53a5b91f7c01ff83e29f24286871', class: "nav-item" }, h("div", { key: 'd8915fecab878936f425e2d9a6a23cecdbdf2d59', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'b272509637f9749227936b1407d3cd405bdac04f', notificationCount: this.notificationCount }))))), h("div", { key: 'e948c8f19de9e3472bfddbe03025c190c0631c40', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '249b98087490f2156255660d003b5dc7197a9601', class: "mobile-menu-header" }, h("div", { key: 'f3644267092fc6d62f8dcc2e39b6184204563b8b', class: "hotel-name" }, "Hotel Name"), h("button", { key: '6715e9f99e3400f367830259112958ff1d3c895a', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '5db0fb53b37b7861b603ff871c1dce2d638292d1', class: "mobile-search" }, h("ir-m-combobox", { key: 'c9880508f8713237681cbe7ee6133becc5ff8ef2', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ul", { key: 'd0ceddf0f8dbb7d2cde8ad6965191570f93dca53', class: "mobile-nav-items" }, h("li", { key: '1a788a21490dbbcff188d663dcc8df945d4e6fd1', class: "mobile-nav-item" }, h("a", { key: '5f80fd3c668f413f3b12b27f20bb8d1849b6c5f7', href: "#", class: "mobile-nav-link" }, "a")), h("li", { key: 'a946cc29c140cb2f063240caceb33312cc489182', class: "mobile-nav-item" }, h("a", { key: 'e48e2c9f4379d5c917bbc07f9c310ec1200319ae', href: "#", class: "mobile-nav-link" }, "b")), h("li", { key: '971a53cf2e9dbd28d208af6588871d03e7ed6ef6', class: "mobile-nav-item" }, h("a", { key: '528444d03c522bcfdeff537fd4319cc9bff47f62', href: "#", class: "mobile-nav-link" }, "c")), h("li", { key: 'f77b3ae5a246f1e2d76127fc8f5053093c418deb', class: "mobile-nav-item" }, h("a", { key: 'a99329893bf9f3c3fff54bf2d9afc73449ea3e7a', href: "#", class: "mobile-nav-link" }, "d"))))), h("div", { key: '715458d1104a743db2679fa3336fe866ee23e5dd', class: "submenus d-none d-md-block" })), h("section", { key: 'b158c96421d9cf2260151ded6c1499958425bdca', class: "p-2" }, h("div", { key: '50be9f6ff74e73f0c93f6252945f1bb2c5101716', class: "row g-3" }, h("div", { key: '06d1119cdb5b42431c450280e6ebdf848b9aca3b', class: "col-md-3" }, h("h5", { key: '53f772453ce02d328084c2b8ac7169c4c1b4e8d8' }, "Static Options Example"), h("ir-m-combobox", { key: '9b47bb0e5ca4554f37f9b23247bb28a36eed9175', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }), this.selectedStaticOption && h("p", { key: 'd79e0b71a7f0788737ef85dd83bddb3d6a37271e', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '1a7a0a8575a3f18e870136a3823c1097ef2d8e6a', class: "col-md-3" }, h("h5", { key: '64b9b1e866482a3fd0de0857894ee5dd46984ded' }, "External API - Countries"), h("ir-m-combobox", { key: 'fd48b7d7f5727115ca0f22ccaf8d58c2e85a7a7b', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'f39767bb26f768f92e8c02038f848101aba0c959', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '0f61b525bc5971ca0aa2ec5f1179c2150691a339', class: "col-md-3" }, h("h5", { key: '52522a4d162e8cfafd5fa6052e834b4d7e84a38c' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '30188ae7bcda01e6f372a11d44d85744b497c82c', ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'cf23c0c7d4b3fef6db0b3fde35c5142bc6ad8026', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '0f0dca00688c3d5f25f0052bdbf4dd20b6ae59ce', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '95f90804e01fd0195fd54cd29781d9cd258d3c59', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '8ec446047bf2d0feb5666849d3a07c5eaa0ce191', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'fea2e70b26029bacd6cd6b21a58126bf16a8f99e', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '4189db43fd1ee5ffeb735343dbaa529471be2bce', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'faf724188a39afb6cc167dd84d63a9d82c10716c', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")))));
    }
    static get style() { return IrTestCmpStyle0; }
}, [2, "ir-test-cmp", {
        "dates": [32],
        "selectedStaticOption": [32],
        "selectedCountry": [32],
        "selectedCustomOption": [32],
        "countryOptions": [32],
        "customOptions": [32],
        "isLoadingCountries": [32],
        "isLoadingCustom": [32],
        "notificationCount": [32],
        "isMobileMenuOpen": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-test-cmp", "ir-button", "ir-icons", "ir-m-combobox", "ir-notifications"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-test-cmp":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTestCmp$1);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-m-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-notifications":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrTestCmp = IrTestCmp$1;
const defineCustomElement = defineCustomElement$1;

export { IrTestCmp, defineCustomElement };

//# sourceMappingURL=ir-test-cmp.js.map