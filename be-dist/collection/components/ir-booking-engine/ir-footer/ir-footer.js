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
        return (h("footer", { key: '308086dd9435e1385ba7fce8bc07f02a6dd65fb3', class: "footer" }, h("ul", { key: '12d8e50a6758754a27fe20b011566455703a6ffc', class: "footer-list" }, h("li", { key: 'bf9f5c8db7d2aa3dd93b68cfdec829bcbadfd03d', class: "footer-item" }, h("p", { key: 'fb2d4aa9d76208222298693942f62f519d12f1b7', class: "footer-text" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: 'ced9c8a00d0a57466227d11c7839b88dad602462' }, "-"), h("ir-button", { key: 'fcc68450d6ca11c0797fe01096333dbe8ec121a8', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: 'e72351a0992a9704f9ce316b6205c7e3c7dad08b' }, "-"), h("ir-privacy-policy", { key: '48da8cfa3f2c8cb49cbaf774f41d671e6cc5f776', label: "Policy" })), h("li", { key: '46302e7206318564efd41d340124c81180c45ac7', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: 'bdcb70eb7a9cb782522a1aa456c2404ca0e47a2f' }, h("a", { key: '83ea1016041844aeb0ae8179523f72746b6a108a', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '36514befcbecb4eda0549dce6cb24ce225459312', width: 120, height: 40 })))), h("ir-dialog", { key: 'afda8199ed72c2deff9c35bc1fb4c29386617e16', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '61a5572625a9186728807380fcf1406176b45f38', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '62df6028ab29e4c62e1b40cd5c10f3d475657d73', class: "dialog-title" }, "Contact information"), h("div", { key: 'bd594f04a6477edb531242bb7395e0a111fc9e95', class: "contact-info" }, h("span", { key: 'd54dff092fcdc7031b881f43d261b57acc75fa72' }, h("label", { key: '835f6b0424cf3ba86117ba27381e6023ae36d219' }, "Address:")), h("div", { key: 'fe988aa12de2569ead23e07979d0ea3db202f6e1' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: 'f94e03cc306caf9342338bab8c0d692592514ee8', class: "contact-info" }, h("span", { key: '2b22c26a1969ea2e91e671b35d343c23a4ddf274' }, h("label", { key: 'ed07d41de191c529a163eeed6e827ee8fb4de3e9' }, "Phone:")), h("a", { key: '579eda8b832f5d836c86630f88e1ec870ecbaa86', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, ((_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.country) === null || _j === void 0 ? void 0 : _j.phone_prefix) || '', " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
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
