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
        return (h("footer", { key: '0127ba80d07934682308bf599d9b72ceba6325b6', class: "footer" }, h("ul", { key: '844028c798cd96c6c72a5f64755debbedcfcffb5', class: "footer-list" }, h("li", { key: '53cb29978793b90094d378ba65787b7ce7b5dd09', class: "footer-item" }, h("p", { key: 'd2492e46fdae85c74a5a0d72ce1ef2f0ba296a72', class: "footer-text" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '50e10215f6598a4bc83e3443bd9036f489626d8a' }, "-"), h("ir-button", { key: '633b82578ba5b40916180f2c44ef50fce7c8f753', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: '18b58437d1768d240e1cd3a8b02329163b7dff21' }, "-"), h("ir-privacy-policy", { key: 'd90566cfc6543df1d7b5423973a3a481fc384fb5', label: "Policy" })), h("li", { key: '08080572b843dfeb5e70b07e958a7dc9efca5b2a', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '8d6818269d4647b3738e6afce3fda4c30296f484' }, h("a", { key: '55d491521306420e155bd6f13a4e5f5ca1928240', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '539d1aca4a1cdb5cf0f316b859fccd6111838e6c', width: 120, height: 40 })))), h("ir-dialog", { key: 'fb587124c009e7dd2163869203fb344a0dfacdb7', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: 'fb846fa596877a3d6ccf3e7044ecd4e02f18110a', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '859bfb5da4c07bf7c57ec9ec3e0e0454f1a77abc', class: "dialog-title" }, "Contact information"), h("div", { key: 'e8ac6c68cd04cf50f7aebc885654332dff6db9cc', class: "contact-info" }, h("span", { key: 'a415bc9bfeaf51bc77c02112b5bc767512f39a9b' }, h("label", { key: 'b2e1b9bb57aae836dba704c5998d1e4049277fce' }, "Address:")), h("div", { key: '9b0eceeae1c9507ea03a43be0738d53085d94a8f' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: '620aed11b224dea7aefbbe33bd0f0a89946e9c99', class: "contact-info" }, h("span", { key: '7de1bdb24a985e9bd51e44233464a65b26cf42b8' }, h("label", { key: 'cb4e8935f6bcc836f4d5f7a27e408e415ca3fe09' }, "Phone:")), h("a", { key: '61b5af7e651920e9ed8772a09d2d7f5d16650130', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, ((_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.country) === null || _j === void 0 ? void 0 : _j.phone_prefix) || '', " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
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
