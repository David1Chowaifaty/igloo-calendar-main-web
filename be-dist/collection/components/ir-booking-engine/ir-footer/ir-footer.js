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
        return (h("div", { class: "contact-info" }, h("label", null, localizedWords.entries.Lcz_Email, ":"), h("a", { href: `mailto:${email}`, class: "contact-link" }, email)));
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
        return (h("footer", { key: '3d43a425ae7a96fc0f908174a6d1d557d5a0fc6d', class: "footer" }, h("ul", { key: 'e2013cfca899a20a72851e7f2afd4603f7f16fba', class: "footer-list" }, h("li", { key: '45c33bbe442f564d4276074c527296ee215d81f7', class: "footer-item" }, h("p", { key: '50ff473045cd638cf6b4761a8bf519f2d50d4203', class: "footer-text" }, app_store.app_data.affiliate ? app_store.app_data.affiliate.name : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '77bc802d96c6be7067021cb1cbc58956233dcd3f' }, "-"), h("ir-button", { key: '1c4c114077a4d44efbc1f25eb30f5890ccd2fc71', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: localizedWords.entries.Lcz_Contact }), h("span", { key: '68908357f106c26ec1319a7476b0369df1f45d58' }, "-"), h("ir-privacy-policy", { key: '282a8d09082be3504bf6dcf2628e16d840c124ee', label: localizedWords.entries.Lcz_PrivacyPolicy, policyTriggerStyle: { textTransform: 'capitalize' } })), h("li", { key: '88fe7354b8383b63e516bd2c66f32d7d8b31206a', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '68a08b0e8d8ebd37be23b599258144bfbb825ab9' }, h("p", { key: '563fe742be91779025e96346745a5bd68300ca4c', class: "text-end text-xs text-gray-400" }, "V", this.version, " - Powered by"), h("a", { key: '5558c408318c06d53867680c4f8d620727d89026', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: 'e451f1bbeb5557ac1a11e4f9fd9e9555918b77a8', width: 120, height: 30 })))), h("ir-dialog", { key: '3f6903351a7be2e9c9c01b4a2fa8bdc738bdadb4', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '7370a7903543b58c33c4c2131803b735d8c60a9f', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '5321b8ff4cd50c455ff0cd6472619c88ee3418d6', class: "dialog-title" }, localizedWords.entries.Lcz_ContactInformation), h("div", { key: 'bf51624410b4e650309091369be580aef492f1cf', class: "contact-info" }, h("span", { key: '0e0dec027ef026878fe251d2940d6713da7889fa' }, h("label", { key: '28c41c81105d907ed0e2a82094f59567204d853b' }, localizedWords.entries.Lcz_Address, ":")), h("div", { key: 'aa79d4d68bcdd0016636eb5b5912436eca95630d' }, renderPropertyLocation())), h("div", { key: '94dccabf8288c5d26a2cce8298f936c2c6299688', class: "contact-info" }, h("span", { key: 'a406f7bd1b08ed669ac71b4a6ffb26f9554997b4' }, h("label", { key: '18557fe3b84f75f570c2d4bd3949a4e601654425' }, localizedWords.entries.Lcz_Phone)), h("a", { key: '7a78aace5d3828ada0092ef36500ab429be85a55', class: "contact-link", href: `tel:${this.getPhoneNumber().join('')}` }, this.getPhoneNumber().join(' '))), this.renderPropertyEmail()))));
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
