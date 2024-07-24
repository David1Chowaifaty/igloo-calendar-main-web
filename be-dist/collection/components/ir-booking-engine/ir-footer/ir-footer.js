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
        })), h("li", { key: '15357ed9241d712246a46719f72a00df05579133' }, h("p", { key: '277e0a4c31531207050c98c33e2cc37e7a2798d3', class: "text-end text-xs text-gray-400" }, "V", this.version, " - Powered by"), h("a", { key: 'f9bbad0a6789d37ac6cd9ca7a893e98cf59c49ff', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '5a0e8ec3591a00d7d6909f60004562372960b6fb', width: 120, height: 30 })))), h("ir-dialog", { key: '70dcaa05c9e14aaae4cb812f52a20ad68ec529c6', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: 'd28567a99d304aede42a56976efcdf0492f406c5', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '015678a49c0518799fe1fcdea623cdc8ea8bdd2a', class: "dialog-title" }, "Contact information"), h("div", { key: '47b139ee91cf268895ee69166f96632515508ec4', class: "contact-info" }, h("span", { key: '0b7e387f8f90c173615b75433adee349dce6b3ba' }, h("label", { key: 'a33cd6c1c67fe52b9c610ec30e80873867eeadec' }, "Address:")), h("div", { key: 'fe0d973c1ade6625ff785664ba413d028f4e04bf' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: '7d8dbaf62c96c9cc9ce83a403a064a26624682e8', class: "contact-info" }, h("span", { key: '96c9f16d2be94f432de43dc5d6b54c039ac668e0' }, h("label", { key: '48c0aa9b6f29d50d8699076a3ceb9e3e05da90a8' }, "Phone:")), h("a", { key: 'f3775bd91964e07d085b1cab453ee4b232967896', class: "contact-link", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, ((_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.country) === null || _j === void 0 ? void 0 : _j.phone_prefix) || '', " ", (_k = app_store.property) === null || _k === void 0 ? void 0 :
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
