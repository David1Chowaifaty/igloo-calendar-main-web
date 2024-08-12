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
        return (h("footer", { key: '7db2bfda3ece49b11b7bfb8372ba608199e4a6a3', class: "footer" }, h("ul", { key: '5f018f0d3d81b5833636811008bcd4f2908a20a1', class: "footer-list" }, h("li", { key: '5b1cd4e0724652eb7c59ba720b452e2b2cc4cdb8', class: "footer-item" }, h("p", { key: '90f2a3ded843f6687f45baf18f3f79aa9a4fcf3e', class: "footer-text" }, app_store.app_data.affiliate ? app_store.app_data.affiliate.name : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: 'f0f8397e7a11dd1bb566e488813442a8ac7f4649' }, "-"), h("ir-button", { key: 'c0049eaecb0c51606633e6f146d72bcb0fd3c3e9', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: '0cba3ad0b9ba3e6ee3e7f26e6440f54707441482' }, "-"), h("ir-privacy-policy", { key: 'c6a09aa24348cd9e03a2ba0b0964e56dd577d10f', label: "privacy policy", policyTriggerStyle: { textTransform: 'capitalize' } })), h("li", { key: '42dff92c8967bd27360d4cae7726fd9c737b1b4d', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: 'b898ca3c09f4c3377695368cea69815d683c4843' }, h("p", { key: '225cc5a67d4371bbcabe516ab4d2a1e4a46e5622', class: "text-end text-xs text-gray-400" }, "V", this.version, " - Powered by"), h("a", { key: '12481c74bf7e3f242c6c7198b129e121ad27840a', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: 'db416e0a2dd9d62e57ec8f19046a08d5ee4350a2', width: 120, height: 30 })))), h("ir-dialog", { key: '277b88dd2f532720578dd60037f11c635d564ff0', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '5a5ed2145b751378adaaed7b80e5277c7fa5d11f', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '0a3cfca40d8f0bd988ba26d902b0f57f7893758f', class: "dialog-title" }, "Contact information"), h("div", { key: '2de9d9c2cbbfb5100a202f534ff3955b76175d08', class: "contact-info" }, h("span", { key: '5a19d2864109ddfc1dd793146910ecdaed5760ee' }, h("label", { key: '2343b8acce5a0337cfb4f2e383606265a9725fac' }, "Address:")), h("div", { key: '9b0893556a3e2997b496818918ca01bccc1162b7' }, renderPropertyLocation())), h("div", { key: '3c8e83fbbf91d9d47abcfbef5fa3f61bcf2a461f', class: "contact-info" }, h("span", { key: '9d9de5cb358eeacfbd91f5ba782aef42286e2e8e' }, h("label", { key: '88d0377b1e748297c076588ea05ba9e3ae68de76' }, "Phone:")), h("a", { key: '9830316869ac765e13093d0f01c2839a33ba63a1', class: "contact-link", href: `tel:${this.getPhoneNumber().join('')}` }, this.getPhoneNumber().join(' '))), this.renderPropertyEmail()))));
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
