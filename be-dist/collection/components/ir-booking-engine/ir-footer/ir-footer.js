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
        return (h("footer", { key: 'c75ca65f0bf2d729a103b360091a46dcc9148f36', class: "footer" }, h("ul", { key: '4b7fe9a9cd666ff5d7879e5c171d806d6ff5c98d', class: "footer-list" }, h("li", { key: '77f6bcbd5184da398c418af34cad7c7d3634d88d', class: "footer-item" }, h("p", { key: '8dc696bb6cc84a3e6ff1553276df6c96d2aeffc6', class: "footer-text" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: 'a04af05df895300bf342f945a7a8e571d5936ee6' }, "-"), h("ir-button", { key: '4ad05df6e9cd4c0d76c057e2ced6dfca988074eb', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: 'c0a599d2911edc875dd348168bcdf0675e8645f7' }, "-"), h("ir-privacy-policy", { key: 'bcca7938b8333aa083297bcbf06b5ee02bea5abf', label: "Policy" })), h("li", { key: '4e1eb38c8d82db6f637be4470204325d1506557f', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '60a0fce878decc3ca3ea127291e8c55b0d17f595' }, h("a", { key: '34e837c1bf8ab6b270acbedf644e47f51a3b069b', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '4c50e019ae3d09b279365774e7c46ee07251022f', width: 120, height: 40 })))), h("ir-dialog", { key: 'ce1bd84f39a1c9084c4061919d30c61082877406', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '804bddba7f2aac86904bea60434944a7a51f9d7b', class: "dialog-body", slot: "modal-body" }, h("h1", { key: 'e241fe853c7b940a617db40196b8b1861af0ce72', class: "dialog-title" }, "Contact information"), h("div", { key: '9cdd36040aba6ff562bfc61710215dd316fa8b71', class: "contact-info" }, h("span", { key: '362e07d128fd2b141eb82d7e1975dba4f19ff7b1' }, h("label", { key: '88f770691ad570c134716fd99536e09d2d261727' }, "Address:")), h("div", { key: '852958fa12524f1429f728deb435d382135e3a0c' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: '319bee29ae7edeeb5c134615fbdb436911516e74', class: "contact-info" }, h("span", { key: 'f5ba79ddf988e618fa7e37dbecf73ef4e63592bc' }, h("label", { key: '9b4e01ffa132ebf52c8641b06ab8d5a5a8044858' }, "Phone:")), h("a", { key: '00e84410bcb58c6f959446836fe17a10fb1748af', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, ((_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.country) === null || _j === void 0 ? void 0 : _j.phone_prefix) || '', " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
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
