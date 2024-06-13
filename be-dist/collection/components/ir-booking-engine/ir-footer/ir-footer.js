import BeLogoFooter from "../../../assets/be_logo_footer";
import app_store from "../../../stores/app.store";
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
        const { email } = (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.contacts) === null || _b === void 0 ? void 0 : _b.find(c => c.type === 'booking');
        if (!email) {
            return null;
        }
        return (h("div", { class: "contact-info" }, h("label", null, "Email:"), h("a", { href: `mailto:${email}`, class: "contact-link" }, email)));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (h("footer", { key: '6095e849881a8a7cc7f9fdbcd87069c35423c853', class: "footer" }, h("ul", { key: '96a33f4ec24ea9ac0ecd56bd539a44bbdf191e4c', class: "footer-list" }, h("li", { key: 'ac7b9c7f18aad6dfcfefa4411c57787838518e2c', class: "footer-item" }, h("p", { key: '4954bf83cbd90a718e8aa8fab96984c644aafbf8', class: "footer-text" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '628009a3c7f023ffcc32177984ebd392162da4ba' }, "-"), h("ir-button", { key: 'd5d420d8250db17a3f7e1281a03a102bd8cb01d3', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: '9886bf2ca068cd6933b6420eafe1f34a78d20cf1' }, "-"), h("ir-privacy-policy", { key: 'e604f555ef6be4b03b9e03b4047ae03a2184e9e4', label: "Policy" })), h("li", { key: '00fba625c88136731fd10afd8e6c0399b3ccfb75', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '73a0bc2f73d3fe8a872170952e6bff18371b2c7c' }, h("a", { key: '5bbd93bf0e553ce1c4ba790779f2eeb09cf1b1e9', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '0b89d64ccc07d5ea365a2c15e6a3d2ef653ca53a', width: 120, height: 40 })))), h("ir-dialog", { key: 'e138be93156df0fa7383a8e02298a157e11b33f2', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '1229e3df279af38bda65d587d515d3ad0090b194', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '22fd524b3ffad0334cdf3cc6cf9efc33e1e2d7d3', class: "dialog-title" }, "Contact information"), h("div", { key: '29555c716cb98c9ee7bab31607171319991492d4', class: "contact-info" }, h("span", { key: '7e9d5beb7b45b15bb2ea8650411e7ccfbf153546' }, h("label", { key: 'cc12fee038ebbb24d21304328dd8b477a96e6178' }, "Address:")), h("div", { key: '56edd7892f0d657dad2eece18f2cb33910068901' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: 'ca32eb64eafffaa8aa6d2c4ab6692cf169468fb1', class: "contact-info" }, h("span", { key: 'b032b523a564d158508f84d9a92c652f76d116a0' }, h("label", { key: 'c417cdff559c0ba4c0942b43ddc6dd0cbd6e26e9' }, "Phone:")), h("a", { key: 'be194934201f28a4978fe3941412cc4a5e76ee22', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, ((_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.country) === null || _j === void 0 ? void 0 : _j.phone_prefix) || '', " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.phone)), this.renderPropertyEmail()))));
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
}
//# sourceMappingURL=ir-footer.js.map
