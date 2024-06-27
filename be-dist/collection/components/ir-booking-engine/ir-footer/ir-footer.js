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
        return (h("footer", { key: '92cfa683fa2285f0384533786dd9ddee1a45664f', class: "footer" }, h("ul", { key: '399ea6b8600ff89dac0eb861256ac6d58d596865', class: "footer-list" }, h("li", { key: '78c8711c9fa90e17ff1e9ff83d919e10c2bc5f61', class: "footer-item" }, h("p", { key: '53f15eeed56b79b0ee27e0c5fd8a01a411052ec9', class: "footer-text" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '94e7c0ab9cd620906ef897a286da654128b2903e' }, "-"), h("ir-button", { key: '2f847304b04b1cf71c6315a3dcf6772d57dca471', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: '2ca5b850901ba2ddba94cee52521ff951c7fb00f' }, "-"), h("ir-privacy-policy", { key: 'f923f162a55f5b8dda0e7449bfd7dcbe4e82bd7c', label: "Policy" })), h("li", { key: 'dfd89f403d4317c5f8c516f03f6d1c312fcd5d53', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '4a85655fe0ba29da20afb6aa3d16b79592b0692e' }, h("a", { key: '67ff7d55fceb709d5baf9b79aaf1bc0ce159b23c', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '0a841375ce805def4b4f2fdff6ae786a84311b2e', width: 120, height: 40 })))), h("ir-dialog", { key: '9b9a109bf837669a731e84237ee5e5d020402511', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '4536c6c12f12cd46c009a97657c86b14a5075ee4', class: "dialog-body", slot: "modal-body" }, h("h1", { key: 'c805b8588e9b26f5a99de0181e6950886987986e', class: "dialog-title" }, "Contact information"), h("div", { key: 'b6b84b186abc9054a84383a4fd0d4dc7e093a822', class: "contact-info" }, h("span", { key: '71f7f55c73073be2d53e11aeaaae52a6c4d899c6' }, h("label", { key: '59d35d6bb4d0b59e2d8808db891b5673aef17d51' }, "Address:")), h("div", { key: '3b1dc3846d12422677c241503818a108dff08c2d' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: 'ac053a1262729b14fb59458ced8edf33c944860d', class: "contact-info" }, h("span", { key: '051d4513d7dd393bc5ded0a73959021a1343eebb' }, h("label", { key: '75d46da342943ccd54af021178256c29beb3c501' }, "Phone:")), h("a", { key: '6c1661309170933a406c308e24bf1fc7584061d5', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, ((_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.country) === null || _j === void 0 ? void 0 : _j.phone_prefix) || '', " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
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
