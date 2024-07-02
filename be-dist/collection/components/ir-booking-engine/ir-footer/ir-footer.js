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
        return (h("footer", { key: '70a0f6c5df608dfb378a3b14d54f8b7172866f5b', class: "footer" }, h("ul", { key: 'e8d887664781ff53a665714d45d34c077024f198', class: "footer-list" }, h("li", { key: '09e17a10e9534eafcb9a7680484727aab4a131f8', class: "footer-item" }, h("p", { key: 'a25ea6cc4d76bc38fbde4f2ad6d6c6c3f04ff4c3', class: "footer-text" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '8f32fcb94dc775009349983d55ea44a8d87489df' }, "-"), h("ir-button", { key: '6a7366e6b938a9af99a9665c7a88f6a7743e969b', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: 'c4f0fafbfdeafd620994faed31260c772241760d' }, "-"), h("ir-privacy-policy", { key: '31572a208e5568ddf7a367582e9c302d77fc1812', label: "Policy" })), h("li", { key: '12bba12cbbc3f11a72993b93dfae09d7004a1379', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: 'b2c53d0f6ac54d65efa618c0189d747ce60cbd0a' }, h("a", { key: '95b6d7e9571ef6e2885be91433e43f20f85e287c', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: 'c829e34baf519e998c4fe1fc350e35921e975ea5', width: 120, height: 40 })))), h("ir-dialog", { key: 'aa91fcf69f2120341f41416ac8cc893f6db772c6', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '80b331a1efd36a574364314350300bea429339c8', class: "dialog-body", slot: "modal-body" }, h("h1", { key: 'e37d17a5119b2857bb0e6373cce12bdca06a56cc', class: "dialog-title" }, "Contact information"), h("div", { key: '2d1295d28d38af6b0cc0b476fb08aa75ec9d88e3', class: "contact-info" }, h("span", { key: '2e53fa2d44c6e938a250baf57964db518ca6eb67' }, h("label", { key: '1d6a8d46b784a46228aa071f89a881b69502d207' }, "Address:")), h("div", { key: '2583224b5b1f1e3427b35cc0bf2a88632e54f344' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: '1621888aa05eb025fd7f80cf0f9d3087b3726a72', class: "contact-info" }, h("span", { key: '413cdc469d4b941d0993048cea358227bb8e2afd' }, h("label", { key: '07996f6528f033ff8ddcd4b4a89ce4856e5c9ac9' }, "Phone:")), h("a", { key: '783b5853e36b11de9c5583aa0a3190b7d93e923c', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, ((_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.country) === null || _j === void 0 ? void 0 : _j.phone_prefix) || '', " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
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
