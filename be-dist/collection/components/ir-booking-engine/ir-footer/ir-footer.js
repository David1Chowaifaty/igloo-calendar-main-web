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
        return (h("footer", { key: '1817edbd2433ae76f68398f5fd3bccf5ea84abb9', class: "footer" }, h("ul", { key: '1bdb2d141feb9e9f463b1eb33bf31c06c6a03734', class: "footer-list" }, h("li", { key: 'b39d35364b8fb872a055be486bd046a6a1c70883', class: "footer-item" }, h("p", { key: '5e72a4d1873a599dd3fdf2467fea015f15ff1161', class: "footer-text" }, app_store.app_data.affiliate ? app_store.app_data.affiliate.name : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '3b0699ee9e54433969f4f61940d2ac653d40a328' }, "-"), h("ir-button", { key: '69cacc4df32356b45c91c2c630c721c45f0e7ba9', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: localizedWords.entries.Lcz_Contact }), h("span", { key: '1e2a54e459bd5da2a2848de78d947a76c10a6b46' }, "-"), h("ir-button", { key: 'dc0446e2934e2721fd3c617c52b4ba824aa2e645', label: localizedWords.entries.Lcz_PrivacyPolicy, buttonStyles: { padding: '0', background: 'transparent' }, variants: "link", onButtonClick: () => this.openPrivacyPolicy.emit(null) })), h("li", { key: '9cb007d09d2f3befdb8a5bcf549789d57382cea5', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: 'f08e947f0b1a618b8270d7148f98efb9bc0b3a8f' }, h("p", { key: '8a27062a345c70433d45e9bda127c117df55d762', class: "text-end text-xs text-gray-400" }, "V", this.version, " - Powered by"), h("a", { key: '85ca561359a3536a04da58fc9631e93ff9ea8af5', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '964a275cca0ac7613effc166718bb9cf9f2c71a0', width: 120, height: 30 })))), h("ir-dialog", { key: '49c568563d4d2fbfccec35be92003d8c01567d3b', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '25f7d5a448c4d8d5199cc40b3fd36f7877fbe916', class: "dialog-body", slot: "modal-body" }, h("h1", { key: 'e06bfa3b032b6c8a9194ded8b345e3c7a15b030a', class: "dialog-title" }, localizedWords.entries.Lcz_ContactInformation), h("div", { key: '7943131c85c93079316b7f58ad73a47c92f80c57', class: "contact-info" }, h("span", { key: '21c58f8670a6382c749baffcc7d2987f5985a8d2' }, h("label", { key: '10b6b04ce290e82033f6d91419d0bec97adc1d12' }, localizedWords.entries.Lcz_Address, ":")), h("div", { key: '6ea86b5415a23d90bd667a7996ae24ea00d38e60' }, renderPropertyLocation())), h("div", { key: '654dce4d36ed3362b798fb212a2200b2612a7e34', class: "contact-info" }, h("span", { key: '5f62cd0f8f292212636d8fe0911b0ebdc46c5da8' }, h("label", { key: '02ecd7e7e146b6f1501271e9ff06fdf163ef27d6' }, localizedWords.entries.Lcz_Phone)), h("a", { key: '13b8c7063dc9b62ffc04f2e3caa680a825673799', class: "contact-link", href: `tel:${this.getPhoneNumber().join('')}` }, this.getPhoneNumber().join(' '))), this.renderPropertyEmail()))));
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
