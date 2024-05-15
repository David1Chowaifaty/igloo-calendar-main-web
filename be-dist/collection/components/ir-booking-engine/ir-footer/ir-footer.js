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
    renderLocationField(fieled, withComma = true) {
        if (!fieled) {
            return '';
        }
        return withComma ? `, ${fieled}` : fieled;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (h("footer", { key: 'e3e83a76bf46a0a1b48c4c286dc7dc455a4f57b7', class: "flex items-center  border-t px-4 py-2 lg:px-6" }, h("ul", { key: '12110dd57e96ef7fa1f70dc3367c23111faa6db2', class: "mx-auto flex w-full max-w-6xl flex-col items-center  justify-between space-y-2 md:flex-row md:space-y-0" }, h("li", { key: 'b2abbe20311a4f1f1a091533772d4f4263299c75', class: "flex w-full items-center justify-center gap-1.5 md:w-fit md:justify-between" }, h("p", { key: 'e5c9ececec0989d70f5ca39861534b9323b90c19', class: "font-medium" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '213255520f1b14cc8ee39142a1acc8c48eb166b8' }, "-"), h("ir-button", { key: '18dc9da45c9208b99d33477977859929c931f2da', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: '73319db8bfcf4fb30a5ba0c53368794aec5219ce' }, "-"), h("ir-privacy-policy", { key: '7e28c03da4a93ad152b6398d5a6f2560f9d422c5', label: "Policy" })), h("li", { key: '8ce4197596d3b8420b4f17508b1ade98fe04dd91', class: "flex items-center gap-2.5" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            if (!this.socials[media.code]) {
                return null;
            }
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name, class: "button-icon" }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '47d07b4a03d5de6962dbc8fcd2ad9d82ed497e22', class: "" }, h("a", { key: 'a36074d83795c910a3b8467a147c90f9fa38c95f', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '235615f382f56d658521d5972bfe31507ea02da9', width: 120, height: 40 })))), h("ir-dialog", { key: '86c8698d954fd8573e58ee871c38e010ae4d6fa8', closeButton: true, ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '9d123e032f364503655dfca1d5bf7f9c2cd41add', class: "max-h-[83vh] overflow-y-auto p-4  text-[var(--gray-600,#475467)] md:p-6", slot: "modal-body" }, h("h1", { key: '60cde24ec76135420599f8c0e0b5f79ba08c0436', class: "mb-4 text-xl font-semibold text-[var(--gray-700,#344054)]" }, "Contact information"), h("div", { key: 'bb0b8bfcf993ae41097997eb16d192efd1d2a83f', class: "mb-2.5 flex items-center gap-1 text-sm" }, h("span", { key: 'f1ffe21947dfa9a9eb894cd18119111016dc5bd3' }, h("label", { key: '703e71a19121ae10696cfdd251e48c070cc9ec8f' }, "Address:")), h("div", { key: '2e5cb9ffab403267688f112139dd3ea6ada1fd9e' }, this.renderLocationField((_c = app_store.property) === null || _c === void 0 ? void 0 : _c.city.name, false), this.renderLocationField((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.area), this.renderLocationField((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.postal), this.renderLocationField((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.country.name))), h("div", { key: 'c2b9d3bde17c8bf08dcb4f8128b9c290e712c375', class: "flex items-center gap-1 text-sm" }, h("span", { key: 'b5ecbcd5470c4d5818d0c9954fa0ef83105779e3' }, h("label", { key: '97ff1a3ab660b60bb1206a231c115c944b703606' }, "Phone:")), h("a", { key: '03aad5dcf058d5bf5f9a36011ba03b4aeb28165e', class: "hover:text-slate-700 hover:underline", href: `tel:${(_g = app_store.property) === null || _g === void 0 ? void 0 : _g.phone}` }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.phone))))));
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
