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
        return (h("footer", { key: '03796ecde2561f3fac7cca537b6d5280ba25d4fe', class: "footer" }, h("ul", { key: '9672839c02603d1e4d6620cd19d0fc9190cef4f6', class: "footer-list" }, h("li", { key: '0b3eb8aac8863d5365c10da968428b9434090a2b', class: "footer-item" }, h("p", { key: '529ee6549c6de05d8a27b4734313a6a6364da902', class: "footer-text" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '770968599ece2a4fdb0d9ecae38adc405a42fb83' }, "-"), h("ir-button", { key: '27046dd29961895a356c800c02713921591b967d', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: '0d3740c129f109da56d6fe01764d2c3300462564' }, "-"), h("ir-privacy-policy", { key: 'fa6025f173e81660cf15e6478311cf1c48154b2c', label: "Policy" })), h("li", { key: 'b074f576587d14fed34625e07d30f320f864d7f5', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '4332eb46ff67c9daedbe3cd0460db781b9da3e9f' }, h("a", { key: 'c5192ce71fdf80bdd45f4303001755dc85f1fed3', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '53e1b591aa19b1edf398754c41e39410ec963177', width: 120, height: 40 })))), h("ir-dialog", { key: 'bf82e5064df0e181552b31de40db2643b46d1cf1', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '9abcf7be6c565804557479cd21096abe46746444', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '9b31c4c2dcd7016ca62cb078b18a6f9ceba5129f', class: "dialog-title" }, "Contact information"), h("div", { key: 'd8cf792d28239a69d92b788bcc546c9a11159d3b', class: "contact-info" }, h("span", { key: '7cd27b19f22695765efaf3be4421f3371bc6b878' }, h("label", { key: '74f13fa4b0628e7d9d6bb2d2c6f9eb056040b9fc' }, "Address:")), h("div", { key: 'a3fe216926eb022530d8ddddc34fdd70367b2ab7' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: '2f2daa20b70a057cfc09eed01e73d6b560cd06d9', class: "contact-info" }, h("span", { key: 'b788422f48e65589c6dbd607d01b7af1b9aa40e6' }, h("label", { key: '76515dec2b751963b79d9437ae71010cd0559091' }, "Phone:")), h("a", { key: 'cfab16680f27a76680402bec554a084759828b6f', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, ((_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.country) === null || _j === void 0 ? void 0 : _j.phone_prefix) || '', " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
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
