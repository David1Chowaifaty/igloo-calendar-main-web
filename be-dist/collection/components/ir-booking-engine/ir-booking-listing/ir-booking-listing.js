import { Host, h } from "@stencil/core";
export class IrBookingListing {
    render() {
        return (h(Host, { key: 'aa631c4c5bbb66a01ff3a92603fb92d9c8067e08' }, h("div", { key: '3e069075b2c1650e9472c39e74898f36ef91b009', class: 'p-4' }, h("div", { key: 'f26ea66b437ae958d68d0c963448e93fe8790346', class: "table-container shadow-md" }, h("table", { key: '4c1748458287f12b7d3a7eabf264d3219585bef4', class: "table" }, h("thead", { key: 'f3273ae112d09221d52cdf9ef815a70785c3a885' }, h("tr", { key: 'c53131730ec82d132d8463f2687b7e443cd3f219', class: "table-header" }, h("th", { key: 'adf41951fc3dd2eff009b572a0f48ae477bbc8ad', class: "table-head" }, "ID"), h("th", { key: '143be7e90da790875c429d98a13a83cf0bfeffa9', class: "table-head" }, "Name"), h("th", { key: 'f039d4daae673f2cdab451848f24be780441e499', class: "table-head" }, "Email"), h("th", { key: '0715da436a310bc43de9f19cbd4fca80b3b380b1', class: "table-head" }, "City"), h("th", { key: '270d0bcca07bbbce776b80ca528821d7db42b098', class: "table-head" }, "Country"), h("th", { key: '5efd8b0e3f229dd66fdcde777618675f05a27c77', class: "table-head" }, "Zip Code"))), h("tbody", { key: 'a13c853ae017b53db7f8311f8bf32f2205cf3d19', class: 'table-body' }, [...new Array(10)].map((_, i) => (h("tr", { class: "table-row" }, h("td", { class: "table-cell" }, i), h("td", { class: "table-cell" }, "Name ", i), h("td", { class: "table-cell" }, "email", i, "@example.com"), h("td", { class: "table-cell" }, "City ", i), h("td", { class: "table-cell" }, "Country ", i), h("td", { class: "table-cell" }, "Zip", i)))))), h("div", { key: 'ac961c00e233ec8d753ded4d4ac402ceb0d75a95', class: "flex items-center justify-between px-[20px] py-[16px] " }, h("ir-button", { key: '7d90c98005d8e0c0c45eab06faab5089b29f3594', variants: "outline", label: "Previous", haveLeftIcon: true }, h("ir-icons", { key: '745ff6addbde19814439e3425c87cdf501e43f47', name: "arrow_left", slot: "left-icon", svgClassName: "size-3" })), h("ir-button", { key: 'add17c54802cf8ae38c8fef3304b8d64a49a05b0', variants: "outline", label: "Next", haveRightIcon: true }, h("ir-icons", { key: 'd812d3ab1ec639c5296a2b7f38f73ac133f931b0', name: "arrow_right", slot: "right-icon", svgClassName: "size-3" })))))));
    }
    static get is() { return "ir-booking-listing"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-listing.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-listing.css"]
        };
    }
}
//# sourceMappingURL=ir-booking-listing.js.map
