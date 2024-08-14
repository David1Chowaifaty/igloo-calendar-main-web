import BeLogoFooter from "../../../assets/be_logo_footer";
import app_store from "../../../stores/app.store";
import { renderPropertyLocation } from "../../../utils/utils";
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
        let { email } = (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.contacts) === null || _b === void 0 ? void 0 : _b.find(c => c.type === 'booking');
        if (!email) {
            return null;
        }
        if (app_store.app_data.affiliate) {
            email = app_store.app_data.affiliate.email;
        }
        return (h("div", { class: "contact-info" }, h("label", null, "Email:"), h("a", { href: `mailto:${email}`, class: "contact-link" }, email)));
    }
    getPhoneNumber() {
        var _a, _b, _c;
        let country_prefix = ((_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.country) === null || _b === void 0 ? void 0 : _b.phone_prefix) || '';
        let mobile = (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.phone;
        if (app_store.app_data.affiliate) {
            country_prefix = app_store.app_data.affiliate.country.phone_prefix;
            mobile = app_store.app_data.affiliate.phone;
        }
        return [country_prefix, mobile];
    }
    render() {
        var _a, _b;
        return (h("footer", { key: '53cb5c136092d90980f77c63bb26e3b94db06478', class: "footer" }, h("ul", { key: '36f25efd78e707682f7e806afd912afbab3eabca', class: "footer-list" }, h("li", { key: '078ed3be90383e08fcbcb21010eb01f2a18377bf', class: "footer-item" }, h("p", { key: '7d6f0ebbc3e4a5db29e2ecf433d337ae00119c77', class: "footer-text" }, app_store.app_data.affiliate ? app_store.app_data.affiliate.name : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '704978909edf069017956d7f1e9f6148f7e7aee4' }, "-"), h("ir-button", { key: 'd5f1e21bba6132e98f416d173bda4efe24856446', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: '2693c19807e93f26f3393b27340ccf8d94ea2b3c' }, "-"), h("ir-privacy-policy", { key: 'f73ada2da87a2ccafe5d8a7cd6462ffc58961261', label: "privacy policy", policyTriggerStyle: { textTransform: 'capitalize' } })), h("li", { key: '2030b59c5769be475a555f704edbdc5cd5696e36', class: "social-media" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "social-link" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: 'b127a4db3fe26caad3f3fc37657f0f5e150e6552' }, h("p", { key: '7b2aee3862ecb09fd6d863d43c51f962282647a1', class: "text-end text-xs text-gray-400" }, "V", this.version, " - Powered by"), h("a", { key: 'a49197f3c8749c54f49d85a91c26db15c97cd818', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: 'ecc7c005d4e374b77b05be40b1f4c48341144208', width: 120, height: 30 })))), h("ir-dialog", { key: '6fde2fd4ad398423d1aee1b8729ff006017d76df', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: 'c1c69fb7f80515da9f89a74a24ada4e90a4565fd', class: "dialog-body", slot: "modal-body" }, h("h1", { key: '28fb529aa5ebce985211808881a167dbeb793c92', class: "dialog-title" }, "Contact information"), h("div", { key: '77d085682d5f1350f5ec54332539bff6cbfa3024', class: "contact-info" }, h("span", { key: '290f79f1f870d748aaec7400a2126196afbdda5b' }, h("label", { key: '7d4e92e1542acdca97d6483033f93fb3a3c48ae9' }, "Address:")), h("div", { key: 'a4452155de32972217ff4d86b209cfcdbae4bd29' }, renderPropertyLocation())), h("div", { key: '6637d741f287b38e752541ec7df2bd0e295ca50a', class: "contact-info" }, h("span", { key: 'a663e164619c8b160c47a330e0cfaa24f1dd5052' }, h("label", { key: 'd82b0455ec4c2bd564bbef2f66d7caa4cb66d295' }, "Phone:")), h("a", { key: '5e5c663b105a884de1d3588104e1ea8bcad4715b', class: "contact-link", href: `tel:${this.getPhoneNumber().join('')}` }, this.getPhoneNumber().join(' '))), this.renderPropertyEmail()))));
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
