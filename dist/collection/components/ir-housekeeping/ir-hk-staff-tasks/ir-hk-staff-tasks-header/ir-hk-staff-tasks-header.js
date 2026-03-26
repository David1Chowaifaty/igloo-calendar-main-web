import { h } from "@stencil/core";
export class IrHkStaffTasksHeader {
    render() {
        return (h("header", { key: '6f794243f3a4059a6ffca74e013ebeee2576b555', class: "tasks-header" }, h("div", { key: '6a387035abbe98582544653d7205ab80ac0921dd', class: "tasks-header__inner" }, h("div", { key: '7212635be5127bf02bb6ca53307f0d4e730b0028', class: "tasks-header__brand" }, h("img", { key: '94c2a21ac4db85a7fb0020e5c3eed38d48086474', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "IglooRooms logo" }), h("span", { key: 'f3a4bf539992a120fae054e0c66e781f8f1e38f7', class: "tasks-header__name" }, "Housekeeper name")), h("div", { key: '0c71b0320a024d9c8be7f144c7ea52fe6a5919e5', class: "tasks-header__actions" }, h("wa-select", { key: 'ac21bd6ca75ea9624fd8e804029bde08eec059f6', size: "small", defaultValue: 'en' }, h("wa-option", { key: 'd245d7f5c615966f7265ebdebf2322025af20fbd', value: "en" }, "En"), h("wa-option", { key: '6bc6c99b8cea81b186c0a81e4bee076ff371ae53', value: "ar" }, "Ar"), h("wa-option", { key: '19079faca2a603dcb6f1fee692627d8ae37f641f', value: "el" }, "El")), h("ir-custom-button", { key: '8606ef6ddc4e037243e3cebf8f4d7b32bd0e402e', variant: "danger", appearance: "plain" }, h("wa-icon", { key: '7732bf3ba12b0ef9d5dd2a6e32cf09ac2420341f', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
    }
    static get is() { return "ir-hk-staff-tasks-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-staff-tasks-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-staff-tasks-header.css"]
        };
    }
}
//# sourceMappingURL=ir-hk-staff-tasks-header.js.map
