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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (h("footer", { key: '8b6c2175915cfb081511b48d0a76c48e5c6fe11d', class: "footer" }, h("ul", { key: 'a2f9f2c1c49289926178d4fa2e4fba61b4a79b88', class: "footer-list" }, h("li", { key: '86ccdc9d918c7300b1b338b678d3778522b084c5', class: "footer-item" }, h("p", { key: '440af83e53e78b4604c7caa285e3fc206463fab8', class: "footer-text" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '9bde58eb6c12cf70a92c5b13f6202dcf22e20840' }, "-"), h("ir-button", { key: 'dd6752ba2da930edc309c2765bd4110613681984', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: '599b68afc8a4a98658f5a305bae163aaaea9fea3' }, "-"), h("ir-privacy-policy", { key: 'edbe8b66435f536748c64a9c03850512b4f57c35', label: "Policy" })), h("li", { key: '722574283b7139d437e6058bc112d7b79ddbe672', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: 'acbebf4fed9bfd536b7476cec755163bb553bce5' }, h("a", { key: 'f070f844dc5a181abc60e98530da91e396e512aa', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: 'f2e040ea54478dc9be35f889f8f51d8c35a16f73', width: 120, height: 40 })))), h("ir-dialog", { key: 'adc3a1ff86de686f4805df3985ad0ea3f69333b4', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: 'e60da15439fb8838768824de1e98f7e5766ed77f', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '7a084926d031fd6b74c3a01143a23fe62e1afbf0', class: "dialog-title" }, "Contact information"), h("div", { key: 'd71223ad7c340d4daa0fea5173ec9b1160c91bbc', class: "contact-info" }, h("span", { key: 'f5c5e03ccb2a31cb594b31ab0289d69bd9e68905' }, h("label", { key: 'adbb8458c2e71eef6cfe19e49ca01827e74ba594' }, "Address:")), h("div", { key: '51f4647137f0629be326da9aceaefe9bf038f1c7' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: 'b75e2b66a30c0cf3bab87a9934e4ff84a9a54750', class: "contact-info" }, h("span", { key: '062da2fca119b5035e7ee93ef2945b92f0294994' }, h("label", { key: '06b01281b7819891aee4ed6b33c5568bf5e61d0e' }, "Phone:")), h("a", { key: 'd1c168e59c474be1ca63959101fb3c84f0ef0169', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.phone)), this.renderPropertyEmail()))));
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
