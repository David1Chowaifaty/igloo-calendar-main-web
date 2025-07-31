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
        return (h("footer", { key: '1eb7707bb587bd83b6149f73ad28119dc4752a88', class: "footer" }, h("ul", { key: '82dbf68517ef0de61b7c8cd531cc45689f23845c', class: "footer-list" }, h("li", { key: '8885a70419dc4b1d03c0fdd224771ccaf4fc986a', class: "footer-item" }, h("p", { key: 'daf38cea174443464439f833197ac6db2b4730f9', class: "footer-text" }, app_store.app_data.affiliate ? app_store.app_data.affiliate.name : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '3c5f4c224392562672ddf137675cdb7b36f96ec8' }, "-"), h("ir-button", { key: '98a2c913f66db79bdf06b0d05c33b51559b4798b', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: localizedWords.entries.Lcz_Contact }), h("span", { key: 'ff94cb483276b023fb555cc7521c82f98f6cf059' }, "-"), h("ir-button", { key: '63e1884acd0eba12e76b0ba70880e7eb9d8e298d', label: localizedWords.entries.Lcz_PrivacyPolicy, buttonStyles: { padding: '0', background: 'transparent' }, variants: "link", onButtonClick: () => this.openPrivacyPolicy.emit(null) })), h("li", { key: '0fec15bb2ab3f2dce70b713a43de73c89f3023b8', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '3969cecaa2e45f2d57abfa0751c32e20762341f6' }, h("p", { key: '36f064e92679b73b8cf12343faf45799ee9b2b80', class: "text-end text-xs text-gray-400" }, "V", this.version, " - Powered by"), h("a", { key: '7f828e1afbe2c68a92646125e7d066c3b00c2b78', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '170a98a0bf9945cb93fb41313b6931c211f5373a', width: 110, height: 'auto' })))), h("ir-dialog", { key: '79e0bdec009886cb5d5c30107ae8541fdc60c7eb', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '0981db7c0abb1788875e5c4b84d0773d68b231e6', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '8c96b609c47b81fcbbaad7a54d4b06bd65e8888d', class: "dialog-title" }, localizedWords.entries.Lcz_ContactInformation), h("div", { key: 'd378f66bae914d5cd392c0148a3ed675f22644ba', class: "contact-info" }, h("span", { key: '4fce650de14c3baf46365ce8c17c4d4ca2fea1e9' }, h("label", { key: '8c10d98bfa72c1d609d514ecece081bec8f4ae9b' }, localizedWords.entries.Lcz_Address, ":")), h("div", { key: '53652a470b71157bccd143d8510dec18fa6b6434' }, renderPropertyLocation())), h("div", { key: 'ae62bcb35adc6a9614c40b047054d4e49ded4092', class: "contact-info" }, h("span", { key: '401153332fd19752a1c83485c0676ea499cdcb23' }, h("label", { key: '3855678b1c220b81c59bd737b02be7dbe79cdb98' }, localizedWords.entries.Lcz_Phone)), h("a", { key: '624c6bc57c9e977cb3e3c5cc3b33dc3ea0c0c227', class: "contact-link", href: `tel:${this.getPhoneNumber().join('')}` }, this.getPhoneNumber().join(' '))), this.renderPropertyEmail()))));
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
