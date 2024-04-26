import BeLogoFooter from "../../../assets/be_logo_footer";
import IntegrationIcons from "../../../assets/integration_icons";
import app_store from "../../../stores/app.store";
import { h } from "@stencil/core";
export class IrFooter {
    render() {
        var _a, _b, _c, _d;
        return (h("footer", { key: 'b73c551ba541f290881027286b6239b2af9e147e', class: "py-2 border-t  flex items-center px-4 lg:px-6" }, h("ul", { key: '820199498d098946dd18396d817fa729265a77be', class: "flex max-w-6xl mx-auto items-center flex-col space-y-2  justify-between w-full md:space-y-0 md:flex-row" }, h("li", { key: '85365ee415d1c051663c6a3f7592f9dd61cd4273', class: "flex justify-between md:flex-col w-full md:w-fit" }, h("p", { key: 'eb7786222ec70c5d9a67a0cd3423e53a92e30f62', class: "font-medium" }, (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.name), h("div", { key: '89f38f1717d68d4f5227873ffc0261a5c4622393', class: "flex items-center gap-2 md:gap-4 text-sm" }, h("a", { key: '828c6ef1c73eae75bb9397b2fb9aa51f68933853', href: `tel:${(_b = app_store.property) === null || _b === void 0 ? void 0 : _b.phone}` }, (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.phone), h("ir-privacy-policy", { key: '058f38c49164ec48943fdcb11707d81c0582675e' }))), h("li", { key: '80f7811fbaa888b428f66b007f2db664a7c4e2ac', class: "flex items-center gap-4" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name }, IntegrationIcons[media.code]));
        })), h("li", { key: 'efdd20d494a4db0e30195662d1f9a1fdffac059b', class: "" }, h("a", { key: 'c091c620caa52f1947361d326e60baa432c3d8e9', href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h(BeLogoFooter, { key: '9b7cb1b059ddbb90106a8eaf1a1849c1b56ceb79', width: 120, height: 60 }))))));
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
