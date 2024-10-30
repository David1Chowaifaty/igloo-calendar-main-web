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
        return (h("footer", { key: 'd5b7d8b7eaf7ba1d73456c68442d27eda4c708dc', class: "footer" }, h("ul", { key: '1cc579652ed8d97e216e7ca713cd743f921a5f80', class: "footer-list" }, h("li", { key: '00877d473d9529b4da7cf03377d83cd1a3f0db8e', class: "footer-item" }, h("p", { key: '4483e04d29ec47f7e0b94c1759ead5aa97e1927b', class: "footer-text" }, app_store.app_data.affiliate ? app_store.app_data.affiliate.name : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '09a9ab7235c2000d1f51737522844fd9625f6d68' }, "-"), h("ir-button", { key: '1078be333e5e55bfc1fc04013dfdc5417205c06b', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: localizedWords.entries.Lcz_Contact }), h("span", { key: '79ad7096e205b30fb04199980bcfb0694a87e512' }, "-"), h("ir-button", { key: '29ca3d55260b919348a1550746ff30709b07e811', label: localizedWords.entries.Lcz_PrivacyPolicy, buttonStyles: { padding: '0', background: 'transparent' }, variants: "link", onButtonClick: () => this.openPrivacyPolicy.emit(null) })), h("li", { key: '9af8ae8e3205669935efebee7ea65e021c1af8cb', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '8e609ffa67bddbd235d4587e3eb72fd78bab1f9f' }, h("p", { key: '115fee8d97e2eba6dcf7115733bed0d1bbd1c4a6', class: "text-end text-xs text-gray-400" }, "V", this.version, " - Powered by"), h("a", { key: 'fe3fd547e391415892ddeb35d11404f95aa95d4a', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '75c9eb5e6944a515195bd78853e8edff9cccd3c6', width: 120, height: 30 })))), h("ir-dialog", { key: 'fd96312f3736a2ddafda7da0f508ab33533de70c', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '86de5e22da8caffeed53965fce5f32c02e121b00', class: "dialog-body", slot: "modal-body" }, h("h1", { key: 'a916380e37bf45e08beac9230653174c5d456ec3', class: "dialog-title" }, localizedWords.entries.Lcz_ContactInformation), h("div", { key: '98a510c820c043345bb14926e048db55403f53c1', class: "contact-info" }, h("span", { key: '11345083bfa43b41a4b7438902596e43bfea8561' }, h("label", { key: '4e59816ea72d50b1ef619b173e50bd217915e6ab' }, localizedWords.entries.Lcz_Address, ":")), h("div", { key: '2561004611f4b9d863c23a2b2e391d246c5a40e1' }, renderPropertyLocation())), h("div", { key: '762e70a820e3b282af0ad76dce50a3021fb22994', class: "contact-info" }, h("span", { key: '0f300d29869a35fc66f270f327ae2eb162eeb711' }, h("label", { key: '5a458ef20729418d77a7ca94979abc3fab87ae99' }, localizedWords.entries.Lcz_Phone)), h("a", { key: 'cbc6943f87dda95695e7ea859d8eec21821b6d63', class: "contact-link", href: `tel:${this.getPhoneNumber().join('')}` }, this.getPhoneNumber().join(' '))), this.renderPropertyEmail()))));
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
