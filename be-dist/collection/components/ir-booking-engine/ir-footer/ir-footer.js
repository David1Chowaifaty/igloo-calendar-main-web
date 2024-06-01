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
        return (h("footer", { key: '85ab17367c67fe2188865b2995e86329d66981c0', class: "footer" }, h("ul", { key: '59b137c39d2e6fa6fd2526bbaf2f6884501b669e', class: "footer-list" }, h("li", { key: 'd5839a3d01f13cf3fd7fbfd7d5873666f05021fa', class: "footer-item" }, h("p", { key: '4300b621831606afa25c1aef1a155f67615a0719', class: "footer-text" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '2b70bb10e21bf8566707c93f4326d1d5c33a19b7' }, "-"), h("ir-button", { key: '336038506ce723f89ece4752ae956123b1af4eee', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: '452cd47438c587a42464775b90a580d62abf18a2' }, "-"), h("ir-privacy-policy", { key: 'dcf419f85634e58c1de7e8328972c8e8988b5ece', label: "Policy" })), h("li", { key: '077cc2335ce59cac56873e4914ced4318130a0ec', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: 'c94246060fdfde8479a8a46b3435e6465af8ab33' }, h("a", { key: '209eee0d0aff8caacd4027c792e1cfb1ea2fd120', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '1a6ad9ea6c18479bc410667fc51325318964b488', width: 120, height: 40 })))), h("ir-dialog", { key: '916712f7c0b432b7af73f0f2684ea69ab3e49ec1', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: 'aa9bf2eb67b5b2db28c41341713c7c9df72ffb3a', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '1eebf4bf7f2a603b57bddce4f3318108081e3a2f', class: "dialog-title" }, "Contact information"), h("div", { key: '191b25ab3f431fedc688a47bd856a775545cba04', class: "contact-info" }, h("span", { key: '5079b06753b5330280ad1a6c1b63994eee6e7332' }, h("label", { key: 'b6dd7731d97373455d9c633e1c35fb6a16c690fe' }, "Address:")), h("div", { key: 'c2bc960b4df38238edaa4f768a4ba5371b3fb32e' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: 'ae1d333a801fc3111334880dab3ce82b0b8d57df', class: "contact-info" }, h("span", { key: 'dabbfaa82423dbe97cd86031d0f0078dc35159e6' }, h("label", { key: '279b03bc98c7e4c48f8c4a602e3a431831155e76' }, "Phone:")), h("a", { key: '7c43666382a82f48ce9f02937e3056e0f62d1f6f', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, ((_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.country) === null || _j === void 0 ? void 0 : _j.phone_prefix) || '', " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
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
