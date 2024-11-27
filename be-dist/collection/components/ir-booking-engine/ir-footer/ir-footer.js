import BeLogoFooter from "../../../assets/be_logo_footer";
import app_store from "../../../stores/app.store";
import localizedWords from "../../../stores/localization.store";
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
        return (h("div", { class: "contact-info" }, h("label", null, localizedWords.entries.Lcz_EmailAddress, ":"), h("a", { href: `mailto:${email}`, class: "contact-link" }, email)));
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
        return (h("footer", { key: 'd9fa89e71374b607ae4f4b3d193f9bfc9054f117', class: "footer" }, h("ul", { key: '005ae3a8e0af7663337fa9f419cf1bb5e5c95624', class: "footer-list" }, h("li", { key: '198816ddff70b90bcdc26338729d25f2536ba465', class: "footer-item" }, h("p", { key: '55ec86a7697d45446fcea9d4cd362777c98b79e2', class: "footer-text" }, app_store.app_data.affiliate ? app_store.app_data.affiliate.name : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '4fd07c9eed043b42e2f3f687b5d1f8603a35b33d' }, "-"), h("ir-button", { key: '1a30b676cab442b3215643bc8511d4da29d524a0', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: localizedWords.entries.Lcz_Contact }), h("span", { key: '305b9ea59547f7b1a948c41837d62338d90d77ef' }, "-"), h("ir-button", { key: '2d733bf7f9958e62d1b3df55ca1632b3f5d79ba0', label: localizedWords.entries.Lcz_PrivacyPolicy, buttonStyles: { padding: '0', background: 'transparent' }, variants: "link", onButtonClick: () => this.openPrivacyPolicy.emit(null) })), h("li", { key: '797e96a8e302a417e85e3251f69b0f9c74d53908', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '076b741c5b79333ee651fa41b138a8b9b1ad8ee5' }, h("p", { key: '61a681954be246d1a909886ad1ae67801cb30da4', class: "text-end text-xs text-gray-400" }, "V", this.version, " - Powered by"), h("a", { key: 'ebf53e08d6479a68f283f8a93155146d18c78c41', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '658a0900de446da1a8e1a8713acc698da28b2cf5', width: 120, height: 30 })))), h("ir-dialog", { key: '3e6f62f8a71a1ea7ab1380bb2353faef2a0aa311', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '076443bbcd8868b9f1f778378ab880ae3296139c', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '636f5a964a712daee76e619d93acdeedf926bdb9', class: "dialog-title" }, localizedWords.entries.Lcz_ContactInformation), h("div", { key: 'b823fac3d53afe937c445517a3de53132e54d436', class: "contact-info" }, h("span", { key: 'c7eeeba0d720fb0929b34383127ad2df0106cb64' }, h("label", { key: '941d16a07a5216286c237da0f8769a3ba98cf361' }, localizedWords.entries.Lcz_Address, ":")), h("div", { key: 'bbe8bdb0c24d13019593cce9bce0aec4168f2e5e' }, renderPropertyLocation())), h("div", { key: '4b1140dd7d7c7c3804f2ef325f0f18c9551a759e', class: "contact-info" }, h("span", { key: '3e8f76486bf6bf37ec8fb3c34c2499cac99bc7ef' }, h("label", { key: '87c5d3a4e0d5df2358a6591d4e273ed1c041b452' }, localizedWords.entries.Lcz_Phone)), h("a", { key: '0a6bf92e507da3838ee0285a3496fb125db96fcb', class: "contact-link", href: `tel:${this.getPhoneNumber().join('')}` }, this.getPhoneNumber().join(' '))), this.renderPropertyEmail()))));
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
    static get events() {
        return [{
                "method": "openPrivacyPolicy",
                "name": "openPrivacyPolicy",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-footer.js.map
