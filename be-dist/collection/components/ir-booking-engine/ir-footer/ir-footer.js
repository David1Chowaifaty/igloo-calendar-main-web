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
        return (h("footer", { key: '6f7c633a90ac276d58931144d1874822c78e744d', class: "footer" }, h("ul", { key: '57c8ea499c755a10960851ed84c0f8c34d336170', class: "footer-list" }, h("li", { key: 'e8a2518c85a5a1a8793bf12aea1ed8462886cc27', class: "footer-item" }, h("p", { key: '63582402d50726d48fcd67e8d8af9eef9df9b674', class: "footer-text" }, app_store.app_data.affiliate ? app_store.app_data.affiliate.name : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: 'a8ef145f76608f755182980f5ba293a6fa7eec35' }, "-"), h("ir-button", { key: '7d8da7c884f1536ce0bed18196955bab2086ecf3', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: localizedWords.entries.Lcz_Contact }), h("span", { key: '498135aafa714551bad97db18ca88d90b21c90d6' }, "-"), h("ir-button", { key: 'f59be2fc25f75ac72ea7b56f0707de21152e71e7', label: localizedWords.entries.Lcz_PrivacyPolicy, buttonStyles: { padding: '0', background: 'transparent' }, variants: "link", onButtonClick: () => this.openPrivacyPolicy.emit(null) })), h("li", { key: '6f4fe7cb93223327ea367e5c93a72391daac8703', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: 'ce567686570348767ec393c1f3765eec9b35a06a' }, h("p", { key: 'd5438d2ffc53726a3eb7092bd1123e67ad54a574', class: "text-end text-xs text-gray-400" }, "V", this.version, " - Powered by"), h("a", { key: '1dc4b4d3a60653b8dc75a67cc3ae190ca2231dfd', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: 'b2925b4e78a90132d93fc1b4aaa840df3e4272a5', width: 120, height: 30 })))), h("ir-dialog", { key: '3d6b161f1c2d8b38fb886029cb21414f5090fc93', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '10c540cf53bf30d8d5861532dbcc7c758079ee4d', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '176b74d8526e77790f6fe4b00858e5ed53f28abe', class: "dialog-title" }, localizedWords.entries.Lcz_ContactInformation), h("div", { key: '0b14d7bbe71c05562152def42a53f3650292736c', class: "contact-info" }, h("span", { key: '17e538b327856f34df06abff4038b702a28c8407' }, h("label", { key: 'b12e044492ee14476031ab6fef8577d312c5c622' }, localizedWords.entries.Lcz_Address, ":")), h("div", { key: 'f8bb356c015ed48f5a9d0a1571c10afb0cb6f074' }, renderPropertyLocation())), h("div", { key: 'fec47bc74ede74aafaabd73ed90432ed5091f3de', class: "contact-info" }, h("span", { key: '4554c9969f241a3834559eb1922ac7c4580138b8' }, h("label", { key: '710cb2f88e12e28c32d1c592618d30752269b4a9' }, localizedWords.entries.Lcz_Phone)), h("a", { key: 'df0e56f3e3ccd18677cfddbcc3c6bd62cce30770', class: "contact-link", href: `tel:${this.getPhoneNumber().join('')}` }, this.getPhoneNumber().join(' '))), this.renderPropertyEmail()))));
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
