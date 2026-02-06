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
        return (h("footer", { key: 'd1dc79384d69982df162e78f87f8a01ec1f314d9', class: "footer" }, h("ul", { key: '5d91fea69f73ebb55621c2c1f69f055af138129a', class: "footer-list" }, h("li", { key: '6015d751b1523943fbb8ba734cd48b7612ff0edf', class: "footer-item" }, h("p", { key: 'a55075f91cc7cca97b1b3dc54768490da0073991', class: "footer-text" }, app_store.app_data.affiliate ? app_store.app_data.affiliate.name : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '56cb85d12417f154245362007ffc6d663f0d24b0' }, "-"), h("ir-button", { key: 'a3846aa80f87555c44bed64f3aea9657ab5ceb09', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: localizedWords.entries.Lcz_Contact }), h("span", { key: '9dfaaf6f35db6370a1e95ba06710451206c8bdbb' }, "-"), h("ir-button", { key: '1fd2010cea2b84e2e394695fd72f6d5a11032773', label: localizedWords.entries.Lcz_PrivacyPolicy, buttonStyles: { padding: '0', background: 'transparent' }, variants: "link", onButtonClick: () => this.openPrivacyPolicy.emit(null) })), h("li", { key: 'f7a7fd649f771d543924111393695a3784805706', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: 'cdf1f54524b8d6891d685da094dc5a3bf54b1a19' }, h("p", { key: '955bee6119b1ea5e5d8efdc867fa88cb35caca44', class: "text-end text-xs text-gray-400" }, "V", this.version, " - Powered by"), h("a", { key: '75d20c4d0f77e22fdb219ff4deb4b7bd08879ad0', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: 'e572032acba2c2b0d55a61dce911a9a9f295fd74', width: 110, height: 'auto' })))), h("ir-dialog", { key: '39c5a95728061b18c989b96de4289ea6f8e9951c', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: 'e9591374cb9535b1e389d836e5a3d17f149a728b', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '724cf39aac53fb1fd0814d88b71818c08495d029', class: "dialog-title" }, localizedWords.entries.Lcz_ContactInformation), h("div", { key: '99cd9f68dfb7b93231fe27c064aeceb1808e4b60', class: "contact-info" }, h("span", { key: 'e9364975f5b9031765075e3181ebc3601fd8909c' }, h("label", { key: '9a3321182861633f8a7ba646af21074c6b68df67' }, localizedWords.entries.Lcz_Address, ":")), h("div", { key: '3b0f560f27f2a9133ffabe5e65aa2412631c4d0b' }, renderPropertyLocation())), h("div", { key: '2f41b38411025f433acce6aaeb3bbb71f718c47d', class: "contact-info" }, h("span", { key: 'bb08413ec9bc29818c041816745a6db2f8f7d9f8' }, h("label", { key: '4ea07cb607c7276185b0e579fc3c1d5fef02c726' }, localizedWords.entries.Lcz_Phone)), h("a", { key: 'f43c51ab96f33abd4ede2f8cdd7f5f30b7abe6e3', class: "contact-link", href: `tel:${this.getPhoneNumber().join('')}` }, this.getPhoneNumber().join(' '))), this.renderPropertyEmail()))));
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
                "getter": false,
                "setter": false,
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
