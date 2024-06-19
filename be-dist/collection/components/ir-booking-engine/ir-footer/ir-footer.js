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
        return (h("footer", { key: '87d713d330439ebcf9fe589c7c137a7db0571cb0', class: "footer" }, h("ul", { key: '4ab53dc3e6c4780164c4b81dda4a709f9adac4e5', class: "footer-list" }, h("li", { key: '5416afc78c3c521db818ec3ee23882e563136356', class: "footer-item" }, h("p", { key: 'ec7fbc34f9451ee102fb230c93465f11a12acbec', class: "footer-text" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '878d6c1641dee6335a3b8eb5dab8980440dbadd0' }, "-"), h("ir-button", { key: '6051273f2d6cba5ca6c174b1af7905b006da0152', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: '3cce64d525850ec1897dbb53989bf7a05a4cdcb9' }, "-"), h("ir-privacy-policy", { key: 'b672069d132c633dd58b66a56894a29525b70cac', label: "Policy" })), h("li", { key: '0f6ebb873d2d4bbcb709d336f62c95b177c10557', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '4d2c9ff0e558cb33d0a2fb04df690991468d5273' }, h("a", { key: 'e85d8b2b6809949f147530d42caca61d1122adba', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: 'b3b572857de0a541c62ee8e26e23f7b25720380c', width: 120, height: 40 })))), h("ir-dialog", { key: '700955be0236bc2065334e4808961d88671fe0c7', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '97b08dc4d42073ff366ed15fd071cecb301f3052', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '7ae63d0452826fdce1caeedc8dfb35f994675bfb', class: "dialog-title" }, "Contact information"), h("div", { key: 'e702f138995fa90d542a5190f7ce10922521e29f', class: "contact-info" }, h("span", { key: 'b1324704fb0b7a9d4ed4ed888d23c9c60e7f590d' }, h("label", { key: '589091035c443d206fb382e2567f7a8713a68897' }, "Address:")), h("div", { key: 'bcc0c9e0ffb3e66ccf27c6a8c033c8abe5480f8d' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: '44f9c538601cf665d69879fe6601b71870479f7d', class: "contact-info" }, h("span", { key: '305a67143a766c753d15f23e8c567b7892696e80' }, h("label", { key: '53a70aa33a462574fb5037252f02664135859679' }, "Phone:")), h("a", { key: 'a03d6d475751a64013a808114047e3733b49e3ba', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, ((_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.country) === null || _j === void 0 ? void 0 : _j.phone_prefix) || '', " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
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
