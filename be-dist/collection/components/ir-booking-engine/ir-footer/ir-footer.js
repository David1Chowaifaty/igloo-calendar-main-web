import BeLogoFooter from "../../../assets/be_logo_footer";
import app_store from "../../../stores/app.store";
import { renderPropertyLocation } from "../../../utils/utils";
import { h } from "@stencil/core";
export class IrFooter {
    constructor() {
        this.socials = {
            '006': 'whatsapp',
            '002': 'instagram',
            '001': 'facebook',
            '005': 'skype',
            '004': 'youtube',
            '003': 'twitter',
        };
        this.version = undefined;
    }
    renderLocationField(field, withComma = true) {
        if (!field) {
            return '';
        }
        return withComma ? `, ${field}` : field;
    }
    renderPropertyEmail() {
        var _a, _b;
        let { email } = (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.contacts) === null || _b === void 0 ? void 0 : _b.find(c => c.type === 'booking');
        if (!email) {
            return null;
        }
        if (app_store.app_data.affiliate) {
            email = app_store.app_data.affiliate.email;
        }
        return (h("div", { class: "contact-info" }, h("label", null, "Email:"), h("a", { href: `mailto:${email}`, class: "contact-link" }, email)));
    }
    getPhoneNumber() {
        var _a, _b, _c;
        let country_prefix = ((_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.country) === null || _b === void 0 ? void 0 : _b.phone_prefix) || '';
        let mobile = (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.phone;
        if (app_store.app_data.affiliate) {
            country_prefix = app_store.app_data.affiliate.country.phone_prefix;
            mobile = app_store.app_data.affiliate.phone;
        }
        return [country_prefix, mobile];
    }
    render() {
        var _a, _b;
        return (h("footer", { key: '59f0b29a4b279135f321fa3f0e2c34c13818d802', class: "footer" }, h("ul", { key: 'e439ba4f2bb54a59e8ab4eeb82b6125c9f33e474', class: "footer-list" }, h("li", { key: '72c79df07e24c41082e0c2cc896d53e516d9f46b', class: "footer-item" }, h("p", { key: '983559c8b9afcb1186f52c82999fb4e8de05f275', class: "footer-text" }, app_store.app_data.affiliate ? app_store.app_data.affiliate.name : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '7ad94790d8528be6752098e87c0d22647249785d' }, "-"), h("ir-button", { key: 'ff78e0a3f874e34f5bb1c5946c0e7bc063d2ec38', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: 'd9eaa5c11d0d2afbee34e5b18e16f9594d684577' }, "-"), h("ir-privacy-policy", { key: '392c35b9c3db4b24dd99629a85c4cf6648113116', label: "privacy policy", policyTriggerStyle: { textTransform: 'capitalize' } })), h("li", { key: '8bf3be864369a52a2587eec4dff5bc5d35f211d4', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: 'cd8ff4477c701afb52431303a7d66169f7d80eb7' }, h("p", { key: 'bb68cc9919145a5350b3e85f00af8fe26644f9ee', class: "text-end text-xs text-gray-400" }, "V", this.version, " - Powered by"), h("a", { key: '890c7e623a4d0e82cfa8cb1d6e2ac2763a9acf5e', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '9ff140ad5e612079dffd409f39875fb4001f9561', width: 120, height: 30 })))), h("ir-dialog", { key: 'b297c4020d86ed83ba5b642bc240bd006f963c12', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '2dc6dc29af5ee8c4a35d4139a68bf26cdff27b54', class: "dialog-body", slot: "modal-body" }, h("h1", { key: 'b26fe4d1ec4dde602f356c6a304315221f00987f', class: "dialog-title" }, "Contact information"), h("div", { key: '514ec07df6584b0928394475754146c89d5b7ab3', class: "contact-info" }, h("span", { key: 'ebf9a17ff8a4f72e992c58ddda8b138dfabd1d8e' }, h("label", { key: '4cd5e98e8bd2198a887d56ecf4ac576dfb9209c4' }, "Address:")), h("div", { key: '0cdecfd43abe15c2b4cacebdaa50c2ae15039b30' }, renderPropertyLocation())), h("div", { key: '2dff036f0d0fba641fc74374de00b4d64afd6ed1', class: "contact-info" }, h("span", { key: '61e0911fc10ea8c0c7c6625260957e302a0694a5' }, h("label", { key: '858025ad8fe965532e52e002bc219026c8bd281d' }, "Phone:")), h("a", { key: '104eef667983e4f504cbb115fb45dd75935153c0', class: "contact-link", href: `tel:${this.getPhoneNumber().join('')}` }, this.getPhoneNumber().join(' '))), this.renderPropertyEmail()))));
    }
    static get is() { return "ir-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-footer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-footer.css"]
        };
    }
    static get properties() {
        return {
            "version": {
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
                "attribute": "version",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-footer.js.map
