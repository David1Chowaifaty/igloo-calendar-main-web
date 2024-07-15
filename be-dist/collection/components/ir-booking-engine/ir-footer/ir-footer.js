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
        return (h("footer", { key: '46389ce608c46bd687bee697594a7e332643801a', class: "footer" }, h("ul", { key: 'b9c3461313997e689139012316b1565a90876a05', class: "footer-list" }, h("li", { key: '6573a5e87c4bac90dce7cbb091275a4ebbb18703', class: "footer-item" }, h("p", { key: 'a44a6bd688abcd72ba3bb7ced42e0beccc0f909a', class: "footer-text" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '4c4817f1dd00a7b48fcb4c6ab9ef234895deff61' }, "-"), h("ir-button", { key: 'd1450463dc5ad98a87689e5344799ce30d18d9d7', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: 'ae546df247734902e0c7268dfdb87549def27c1a' }, "-"), h("ir-privacy-policy", { key: 'be15524e58ea3dec94f44d8ddb276cbe77d05518', label: "Policy" })), h("li", { key: '93189e240bfaaa3c6df805d9029c202b96fd534a', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '48fa23fa3a680a61de15bcec9b495e5836811b20' }, h("p", { key: '551dced7ec6aab229ccec624fbd1c70dcc31e10d', class: "text-end text-xs text-gray-400" }, "V:2.0.1 Powered by"), h("a", { key: '403d3344d1db04f1fb7d9830238d1d2072dac867', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '97a279200e06f2bed7ad054b0343d310d6e8438f', width: 120, height: 30 })))), h("ir-dialog", { key: 'c3aecd407bae1f890ea5fde6ab6045767af03255', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '48ff9987c9d810ea8a55ac81cc215a22ea83d7ed', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '3e8526aaf1ddf0078e1e8691ebc9c04da5a8eaaf', class: "dialog-title" }, "Contact information"), h("div", { key: '3d4e5d5afff181b1a6b74477a20724b91aa8ccd6', class: "contact-info" }, h("span", { key: 'c697b4d104fa29e842a17ac9e3da4fe114c40fe3' }, h("label", { key: '6b94328d51a746f095638888c6aaf986d828161f' }, "Address:")), h("div", { key: '0c4fce3b14f6ae287dd3108424f0b9faac4642a9' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: 'c63d63ce0daf58be84b2a4d080b1cb612e0d55a6', class: "contact-info" }, h("span", { key: '4e430b24c305ea9381903cf18ee4f72a66bd20ed' }, h("label", { key: '829406e6add8d841aa54fbb49e337d9df845bda1' }, "Phone:")), h("a", { key: '481a8f5da86b977b28917d09b74dbe5b21b02cdc', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, ((_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.country) === null || _j === void 0 ? void 0 : _j.phone_prefix) || '', " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
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
