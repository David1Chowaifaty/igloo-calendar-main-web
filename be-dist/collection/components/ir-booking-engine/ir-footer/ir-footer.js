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
        return (h("footer", { key: 'd910f9a13e9af3d9c11127cc41b67566b60121a5', class: "flex items-center  border-t px-4 py-2 lg:px-6" }, h("ul", { key: '46097a300189701053c51b1e97dd329b3253dcdf', class: "mx-auto flex w-full max-w-6xl flex-col items-center  justify-between space-y-2 md:flex-row md:space-y-0" }, h("li", { key: '8e3e4c8df8962856d0afd2cf4417fe19b12343f2', class: "flex w-full items-center justify-center gap-1.5 md:w-fit md:justify-between" }, h("p", { key: '31cad0025821837cf291584af5089dd009271f10', class: "font-medium" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("span", { key: 'e3e63831be66588b9c95d9d9dd58d6798784ab15' }, "-"), h("ir-button", { key: 'adcef8af184836e987aca6aab52a1c399fd16315', onButtonClick: () => this.contactDialog.openModal(), buttonStyles: { padding: '0' }, variants: "link", label: "Contact" }), h("span", { key: '83e6bc526e1c0b99f2972fe6ebd8b1a46fcb0ea2' }, "-"), h("ir-privacy-policy", { key: '5fe5b2c70dc263f627a8944dc7b51b2855973899', label: "Policy" })), h("li", { key: '2ab83223d6ed3d5684c3683c1986dfd64aa0e294', class: "flex items-center gap-4" }, (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name }, h("ir-icons", { name: this.socials[media.code] })));
        })), h("li", { key: '1e116dffefaa4bf52b9f51f8d452983de9f6adba', class: "" }, h("a", { key: 'bb1e9b5e92293d1f2f21363c338c434ca4bf2972', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: 'c9ea9d1d98226101c6b645d1348f06e7ce359df8', width: 120, height: 60 })))), h("ir-dialog", { key: '7e633afca8483213ab5af8e2c31178757fba1256', ref: el => (this.contactDialog = el), style: { '--ir-dialog-max-width': '25rem' } }, h("div", { key: '68fb9b0ab9b7657952a3216c76d29ec538fea3c3', class: "max-h-[83vh] overflow-y-auto p-4  text-[var(--gray-600,#475467)] md:p-6", slot: "modal-title" }, h("h1", { key: 'ddc15986454370de8b52122ccbb6b6f2704acc77', class: "mb-4 text-xl font-semibold text-[var(--gray-700,#344054)]" }, "Contact information"), h("div", { key: '1726f491cf86e464f5a3f11a68292882255a138d', class: "text-sm" }, h("label", { key: 'caa84353843181cb9e5c37c2e703af2ef28554a3' }, "Phone:"), h("a", { key: '93ac7aa13cccb5ee424bbc6110458dbbfd614dfe', slot: "dialog-body", href: `tel:${(_c = app_store.property) === null || _c === void 0 ? void 0 : _c.phone}` }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.phone))))));
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
