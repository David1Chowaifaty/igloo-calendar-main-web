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
        return (h("footer", { key: '5159f204534aee9f887341f573a129773d64aa7e', class: "footer" }, h("ul", { key: 'e87a492bd66d258beef04721f395684465675c51', class: "footer-list" }, h("li", { key: 'f15a71ad4bc3185dd064f8ee4e335b0bc149de55', class: "footer-item" }, h("p", { key: 'edbe581fd110a29ba251c26ccff89c4a9cdb4634', class: "footer-text" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: 'bfa71cbb3c01f30ea5356cd9606464d7993f7466' }, "-"), h("ir-button", { key: '91d380c3cef4e8462d1f3b0fc1ba342c46eb6a66', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: 'bd38d093135ae354942364e4a0215478367c7a00' }, "-"), h("ir-privacy-policy", { key: '0f56288f4d2eb66c022757725045e0ae7859bb96', label: "Policy" })), h("li", { key: '0b5c125d8f5f81d129c9cc38ccb5898556abc2e8', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: 'd9bd607067d68bf7857a09fffb5e822caabc8280' }, h("a", { key: 'a69492e733f90abd26bdb001be3a8131a355dcf6', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: 'c238628898193e26fa4545291f17e0c166e44e20', width: 120, height: 40 })))), h("ir-dialog", { key: '5ec10f82de1e3301780ff1a32d9f037f62ae89f5', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '25a1903732a2116984a464326ce3cecd5690ef07', class: "dialog-body", slot: "modal-body" }, h("h1", { key: 'c837cfd2e7d6cb79192e9894fe1cfa783dd2d25a', class: "dialog-title" }, "Contact information"), h("div", { key: '6c42e8b92640af38dc4995254d594e2e1f0487de', class: "contact-info" }, h("span", { key: '6a061cc812e9d9ef68fb070387746cbb1db6abbc' }, h("label", { key: '271214f638f376f50d06f62e9a194f3a75122862' }, "Address:")), h("div", { key: 'e9c0f77fe65fd1f19f533cc9da571d5263811fc2' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: '70017654eed608a7bcbc529ad7dc48e4e195f267', class: "contact-info" }, h("span", { key: '0fd1e7e3172dc286a05612656e1de7c05fa9b37a' }, h("label", { key: 'd21b74ac97647a18ccee3953c91116a9e9d95af3' }, "Phone:")), h("a", { key: 'f5121549f1996d8f87be62c0b2b9f7307d3e0dff', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, ((_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.country) === null || _j === void 0 ? void 0 : _j.phone_prefix) || '', " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
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
