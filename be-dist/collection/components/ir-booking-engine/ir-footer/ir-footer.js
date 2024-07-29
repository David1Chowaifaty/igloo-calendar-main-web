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
        this.version = undefined;
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
        return (h("footer", { key: '3ecea117a7466f034b3158880698e84c194303d0', class: "footer" }, h("ul", { key: 'f621b08f58b8b34eb670cb7ba35b492b870d1f01', class: "footer-list" }, h("li", { key: '5a86e06724752b3500a6ce88e3c5b32d62d3bdd0', class: "footer-item" }, h("p", { key: '1734525d2fd98e053ddf6c7678f84bcca8ff22b8', class: "footer-text" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '03bdb0fffae88df30af288f3de0c988d9d35eb5d' }, "-"), h("ir-button", { key: 'cd371a8000b464ecec4a4862b6eca72a25a0d224', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: 'b68e21683e5f20c6352c5d9d82ee2c308495d596' }, "-"), h("ir-privacy-policy", { key: '80b4c7c015e72f69e973bcb1fb173ca7e78d8bbd', label: "Policy" })), h("li", { key: 'a22c6cd1f5137bd2d25aa71bc2de45551f02e208', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: 'f44b5cd70070073e0869ec1af764725e786a2c3c' }, h("p", { key: 'a4d4776d4a28933a245bc57bd4e879893c692054', class: "text-end text-xs text-gray-400" }, "V", this.version, " - Powered by"), h("a", { key: '284b1aa8a195325ef8626928697709276e0201fa', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '4171835660815c8495ff6787c207dbeaf2687ed3', width: 120, height: 30 })))), h("ir-dialog", { key: '1a4632826ceb9efeb621d4622b3c3715a37d772c', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '1b279d52c4d9e635f99d5d7fb66dd7c50a1d14cf', class: "dialog-body", slot: "modal-body" }, h("h1", { key: 'b4d68e0c34b94dd54923087597d5e2c16cccfa97', class: "dialog-title" }, "Contact information"), h("div", { key: 'a4b175c056fb96106252ade6035a1e3589ecdc1c', class: "contact-info" }, h("span", { key: '337371dd8b53ec43e041efa7017c7eb352b243b6' }, h("label", { key: '0d4743e84c4a6f827f1c67b677ed61b3d025e6fa' }, "Address:")), h("div", { key: '7ba72048d7f7095a367c9a24cc85cb145ea6bc3d' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: 'fd0a697f28fba426b376e04b6305b462ac40ffc9', class: "contact-info" }, h("span", { key: 'ee94a2dd39142d4246e828dc22ab24487366af9e' }, h("label", { key: 'b28e3f2952e6a336e1e2774f1a8a8cbe682cb964' }, "Phone:")), h("a", { key: '390c3daf86c3a5ad10c0af13f1f8ea0bfd8305f1', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, ((_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.country) === null || _j === void 0 ? void 0 : _j.phone_prefix) || '', " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
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
    static get properties() {
        return {
            "version": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "version",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-footer.js.map
