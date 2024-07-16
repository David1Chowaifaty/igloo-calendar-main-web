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
        return (h("footer", { key: 'dfb3c26bb0ea1fd69997426fb4a3b8b97f132223', class: "footer" }, h("ul", { key: '2fa18fbf54684173fedbdd725710d3e9b71a8347', class: "footer-list" }, h("li", { key: '1729e2c6443e6bf30c2cd38bdae4eb0ec2bde49b', class: "footer-item" }, h("p", { key: '1a562a8fea89ee4cbe491b72b8d0f052de26ebd2', class: "footer-text" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: 'b6c28c3944cd1465620ac895a04a3421cb98de00' }, "-"), h("ir-button", { key: '788b3c6c23d2ac879d8ac302f53fb66a32f27ed3', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: '701bfc3ee1edd500bb3eeb211807eb850b741c1d' }, "-"), h("ir-privacy-policy", { key: '5ad7384423379e71f4cf1f72bcc27555a9eb6fff', label: "Policy" })), h("li", { key: '7caa752fcac70ff25399e7aebe5cebe9331d7763', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '15357ed9241d712246a46719f72a00df05579133' }, h("p", { key: '277e0a4c31531207050c98c33e2cc37e7a2798d3', class: "text-end text-xs text-gray-400" }, "V:", this.version, " Powered by"), h("a", { key: 'd56087cb064e3ec727ad1f5159ed0dd922734985', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '212f7f166fc0de00702414e52797f345cd064a4e', width: 120, height: 30 })))), h("ir-dialog", { key: '3e58d2440db85263d481dabe029590de799ee0bd', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: 'b0521421bc9fb540ec698d11c532194cd70094a6', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '4a678d6e6a7afcb610cb8ceba00407b3311a6fd4', class: "dialog-title" }, "Contact information"), h("div", { key: 'ecb71f2a80326af1ff077226aadec40744a7d226', class: "contact-info" }, h("span", { key: '2cd00623e0950f6410df9f1c349fc77710293054' }, h("label", { key: '9ebcb23b2e82c8c2d3ed2f55d71b1c6bd26174cd' }, "Address:")), h("div", { key: 'b60eaf9fd0ede2184d24c69ea7a93c97e7771099' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: 'd1a16e609e97474d553f7c49b85992c492991cc3', class: "contact-info" }, h("span", { key: '0174b4d213ba45325db5e6f78a46291091fca31b' }, h("label", { key: 'daf90a874c2a9a178e0e317ae67e06da1458d224' }, "Phone:")), h("a", { key: '0f33d689c826d5c380b0d403bc607b0ba18c870c', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, ((_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.country) === null || _j === void 0 ? void 0 : _j.phone_prefix) || '', " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
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
