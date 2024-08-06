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
        return (h("footer", { key: '9996c38198ddd025eb4bb583b6ab77b1f20f3a2f', class: "footer" }, h("ul", { key: '208a735c9524d0fd521106df208f35da08ad2c51', class: "footer-list" }, h("li", { key: '0f5d16f575821fc686dfa624d629afdfdb701473', class: "footer-item" }, h("p", { key: '4fbd442d84f7e50917c9a6ad99ab5afcebbde65f', class: "footer-text" }, app_store.app_data.affiliate ? app_store.app_data.affiliate.name : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '0dffd5f960bff0ad928ff55de7f3996008ffb2c9' }, "-"), h("ir-button", { key: 'c12b0215d8c1ec5e42bba2b998eecd6f38e6e297', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: '66f66822c455483ba7c76c2dec9c8917e70bba1f' }, "-"), h("ir-privacy-policy", { key: '997fb11c406f5b2840e94ed29813fe30178f3973', label: "Policy" })), h("li", { key: '2bf520a3b4bb3e46b23a53291b302ad709b1ac8c', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '776dd9c0414c043da6cd5b832fdf71117a99c6ed' }, h("p", { key: '3cd85a24d4af442571f8292a9ccbd1679697a99b', class: "text-end text-xs text-gray-400" }, "V", this.version, " - Powered by"), h("a", { key: '3f6754ddb8c127d59cf2ab14359a6d830cf47add', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: 'ab7ad66b0a2a44a1a17a172eb9f842a3f8b15ffd', width: 120, height: 30 })))), h("ir-dialog", { key: '46521b0e5a2900ab61395e54b4ba95d7e18377ed', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '53604c19e72d51e57ac46a573209e8dbd0c13fb2', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '84322297360c3081a030af66697aac242316b739', class: "dialog-title" }, "Contact information"), h("div", { key: 'bdfac504808d91772af7ce97c22582fc85c82929', class: "contact-info" }, h("span", { key: 'e457decbe65157bba8aa8b099ac16f6bd6493ffc' }, h("label", { key: '9d984bb9aa765ff63a8764a6467d95154f89fd72' }, "Address:")), h("div", { key: 'eaa2e7e28164389717ecda00b582ebb3609afb5f' }, renderPropertyLocation())), h("div", { key: 'ee172e7a66d1947f70088a32a6c527d434402c69', class: "contact-info" }, h("span", { key: '233654c76823b6fbc6fce6de03e96d19bd42db01' }, h("label", { key: '604466d5079a1451b9b5e02ec47915a25dfeacca' }, "Phone:")), h("a", { key: 'b300675e2f2515a2c06b02cf3eb2546136d4d96a', class: "contact-link", href: `tel:${this.getPhoneNumber().join('')}` }, this.getPhoneNumber().join(' '))), this.renderPropertyEmail()))));
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
