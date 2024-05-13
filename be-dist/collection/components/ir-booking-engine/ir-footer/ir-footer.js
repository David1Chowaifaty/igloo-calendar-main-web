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
    render() {
        var _a, _b, _c, _d;
        return (h("footer", { key: '3dae475921ceab531fffe62656ba56728e9b4155', class: "flex items-center  border-t px-4 py-2 lg:px-6" }, h("ul", { key: '560c258c1d4da8bd577874ab4bd8cea0a51fd5ce', class: "mx-auto flex w-full max-w-6xl flex-col items-center  justify-between space-y-2 md:flex-row md:space-y-0" }, h("li", { key: '6b8d2c774531c9b375db565c3150112a60d60372', class: "flex w-full items-center justify-center gap-1.5 md:w-fit md:justify-between" }, h("p", { key: '1dc84e953fce802b67220d37e7502d1f53fa6695', class: "font-medium" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: '4da6a96456ff6d19a4fa9031cba69c8de67b7c14' }, "-"), h("ir-button", { key: '166a218509ff319fbaefe83299e717bb28e80de7', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: 'abbf34a8d62abb5af60f55ac88e4a834618c5873' }, "-"), h("ir-privacy-policy", { key: '3c1bc6bc5d3e9c3d1b5d09166e5250f3b3e2b7ff', label: "Policy" })), h("li", { key: 'cbf510e991c42c357fdaf4eac0413b6904aa47e2', class: "flex items-center gap-4" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: 'c7f15e79bc40427d7fc5ac99685b6d3760127489', class: "" }, h("a", { key: 'd68364020bebd7d2140ba9c09ad82faea918fb09', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '992300cc3eca85287d66ad9e617a7f71a1da34db', width: 120, height: 60 })))), h("ir-dialog", { key: 'afe72e24cffbd6dcd5bae998c98a144c60b0b757', ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '1bba669e5854eee93d748aaaee43ba54a339a178', class: "max-h-[83vh] overflow-y-auto p-4  text-[var(--gray-600,#475467)] md:p-6", slot: "modal-title" }, h("h1", { key: 'b9ccc91e5c9f632ad8da10a4b76340c3aabee3a2', class: "mb-4 text-xl font-semibold text-[var(--gray-700,#344054)]" }, "Contact information"), h("div", { key: '52465b0c42f93396f73132004850f14c895fa3c9', class: "text-sm" }, h("label", { key: 'cf9377fb52f87d841eda847d354502ea066e4fc5' }, "Phone:"), h("a", { key: 'aa5cf0c8d82c0c4cbe81490dd3effcc4f39cff6e', slot: "dialog-body", href: `tel:${(_c = app_store.property) === null || _c === void 0 ? void 0 : _c.phone}` }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.phone))))));
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
