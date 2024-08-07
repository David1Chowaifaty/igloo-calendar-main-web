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
        return (h("footer", { key: '9996c38198ddd025eb4bb583b6ab77b1f20f3a2f', class: "footer" }, h("ul", { key: '208a735c9524d0fd521106df208f35da08ad2c51', class: "footer-list" }, h("li", { key: '0f5d16f575821fc686dfa624d629afdfdb701473', class: "footer-item" }, h("p", { key: '4fbd442d84f7e50917c9a6ad99ab5afcebbde65f', class: "footer-text" }, app_store.app_data.affiliate ? app_store.app_data.affiliate.name : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '0dffd5f960bff0ad928ff55de7f3996008ffb2c9' }, "-"), h("ir-button", { key: 'c12b0215d8c1ec5e42bba2b998eecd6f38e6e297', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: '66f66822c455483ba7c76c2dec9c8917e70bba1f' }, "-"), h("ir-privacy-policy", { key: '5519987d16556b0065511c9fbf44731310b669ea', label: "privacy policy", policyTriggerStyle: { textTransform: 'capitalize' } })), h("li", { key: '6c2bae036dfc35e37e71ba923f1111c8a39ff65e', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: 'd830186cf535e0bd2b620526dff605efecae1015' }, h("p", { key: '9d203d344a2a3a43d80b2e9dc3cdbac7d98a2cfa', class: "text-end text-xs text-gray-400" }, "V", this.version, " - Powered by"), h("a", { key: '39503b705f93a1b7a494959b1fda157585f4d4bc', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '5f1279d561b19c1fdb04fdc327630c32973f1c09', width: 120, height: 30 })))), h("ir-dialog", { key: '717ab1d34deed976662742d8e11f518312b29053', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '389c026feb10f485c252dedb417510802fe60758', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '9b2535ed8404dd4460a88eee2ea70998d045dd4a', class: "dialog-title" }, "Contact information"), h("div", { key: 'fc23e0e7881cd774745ee5d34cc5020bd64e1c9f', class: "contact-info" }, h("span", { key: '8dc31fac08fb792a4681620ab16a7bd0e224bc43' }, h("label", { key: 'b9b493dfabe1d53df07188c8eba5397f291e9415' }, "Address:")), h("div", { key: 'c576c5b3e96124235be8780fb6938b30eb464502' }, renderPropertyLocation())), h("div", { key: 'e30b9f76051ad768009608c62140a9d4325d09d4', class: "contact-info" }, h("span", { key: 'a985d4b6b1adb860affad94846f61f948301e602' }, h("label", { key: '0d346e6c67cfc9051376348e9e2fda7970af14fb' }, "Phone:")), h("a", { key: '37a8d3d057a132a60f56483043edb2340f212302', class: "contact-link", href: `tel:${this.getPhoneNumber().join('')}` }, this.getPhoneNumber().join(' '))), this.renderPropertyEmail()))));
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
