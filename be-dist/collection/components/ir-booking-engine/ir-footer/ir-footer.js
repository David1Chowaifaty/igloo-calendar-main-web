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
        return (h("footer", { key: 'dc4b1c71d401ce97e5a8cebd01150d3970760d46', class: "footer" }, h("ul", { key: 'fd3bb134895913c528284ab8c9f59f50801a30cd', class: "footer-list" }, h("li", { key: '663ab4c101a5731a72ced41185bdc2f17a6ea630', class: "footer-item" }, h("p", { key: 'ac3a52d96cf73685afab42d0dd3f7f963320bdca', class: "footer-text" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: 'c051bbb7f52c9fd1f4fa0aef398dfa8259de8e83' }, "-"), h("ir-button", { key: '65ad4b047c10c2710b8f604110cb9c937ba55c6a', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: 'cf64eb11ce91153b4d4a953f49282a763fdccc9d' }, "-"), h("ir-privacy-policy", { key: '1aa2b93440cc28906be928aca23eb715501fb3e5', label: "Policy" })), h("li", { key: '0ec03c8cf0875d14e66bc0475fd1300a74d903ec', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '716a947d5c4d439ea1011dc1f973c5787a78d219' }, h("p", { key: '68cb6f6e6d0f140cb1f4bfe4b52048d7bc931482', class: "text-end text-xs text-gray-400" }, "V:2.0.1 Powered by"), h("a", { key: 'a8a8c7aaed7fc35ac9c380807e6b89fd39953df5', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: 'a7f22bb8002fc4ee72eb4ac00f0c2405a2fb12e9', width: 120, height: 30 })))), h("ir-dialog", { key: '0c877826e4a3bb351412586b750e2567470e9378', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: 'a5581dfd7baf920a081f4786fa3768a64249af28', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '109c66a3d1c7ab1d3e49d38910de8f098b89385f', class: "dialog-title" }, "Contact information"), h("div", { key: '0a8af9cfaebd3a5ac154895c99592d4add94ed6e', class: "contact-info" }, h("span", { key: '76809dd8b827f884b48970e02faa7cabd5e9a5c3' }, h("label", { key: '4035a40f58f40c58a33cf7323a3485cc5b4b7276' }, "Address:")), h("div", { key: 'b1b55023c79be592839e47263f4ed0d41d8bd506' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: '0ed370ab99f466864877ebc804b9d7aa34d81fed', class: "contact-info" }, h("span", { key: '09f4af8cbdc40e8d30a2906baf77baa1706f9b04' }, h("label", { key: '296d97fdf1dd4b4d679313ba7b25a5b604d99b0d' }, "Phone:")), h("a", { key: '49e4a3d20a97162c62ad9a24e9bcffff7c849779', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, ((_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.country) === null || _j === void 0 ? void 0 : _j.phone_prefix) || '', " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
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
