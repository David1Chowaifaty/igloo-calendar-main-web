import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '55491b3431fd1c30f716849370a2d760ee4df561', style: { background: 'white' } }, h("ir-custom-button", { key: 'b170e59a35d1ba2071b03f95255c12d887458c7b', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'a468ed49e7407d71a6579de17e6b6754c9d27659', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '952d6404693abfed99c4b0c40bc8f1ac81af7372', style: { background: 'white' } }, h("table", { key: '013789b9c5fe02e10cbce16dba031aeb2ff6823f', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '3150ce6ff4d1efd67beea7a6ddbcfaf733af9f18' }, "This", h("code", { key: 'ca36a6883a45f7da61c6d1bc2c9faf8b0b151bba' }, "<caption>"), "describes the table"), h("thead", { key: '021dfe42c5eb61868d83a3bcd050586f8e504521' }, h("tr", { key: '5a03dab809e93858b625d2d5686a11a968826879' }, h("th", { key: '65060b9941558159482c9616331f67242279e119' }, "First column"), h("th", { key: '89183d5ae6a381fd9350bb4f8c1f7d788348f9c9' }, "Second column"), h("th", { key: '50c27504b6d02e1eeba69f1fe44b6c0428bbe1d1' }, "Third column"), h("th", { key: '1955e8b942e815724e0dc6a7897d51e64ad7a1b1' }, "Final column"))), h("tbody", { key: '7609466f2195aae43864ad2af4fefcec50852eb8' }, h("tr", { key: '06a59147651756700a6761dd41f4c504b50b123b' }, h("td", { key: 'f5b47e6858c620c8dca795b7c424329c42a08956' }, "Data"), h("td", { key: 'ba6cdbb36af4d702a21b0dc741d6da5e5a6eeb87' }, "Data"), h("td", { key: '62798c993665f71fa9ffef6e64f6b66ead23245b' }, "Data"), h("td", { key: '9142c4be88358679417fcc5281147c05bcabf584' }, "Data")), h("tr", { key: 'aea052fd0dd3d2ed9cddabeaa945aaf16db6fa2f' }, h("td", { key: '80df196c88e1982b90ae5aec87dc9e3b005ab2d5' }, "Data"), h("td", { key: '29f0bef2c9311dc2f5d89ccb920e753968ae7616' }, "Data"), h("td", { key: 'e1e429cfaa0de4ffa129bd5f9092aae7d10ac387' }, "Data"), h("td", { key: '3308743d17bb6233e1930483af30ac9fd413c573' }, "Data")), h("tr", { key: 'a5cec8f607ae04955c30d28b280d6cd444931149' }, h("td", { key: 'ff84e6a489e2eefbedc2214bcc24a61736d59902' }, "Data"), h("td", { key: 'eb0147af347a5413b3cbc687b544ea465c1a5f3a' }, "Data"), h("td", { key: 'c419b2e7686022dd1a2a54b8ddc4bcac72856d6e' }, "Data"), h("td", { key: '303ec81f6df44264df998d40ecf3cbbd2a682f8a' }, "Data")), h("tr", { key: '800fb17913d33433b7c633efc661f0f253d5ceb6' }, h("td", { key: 'd2b47a96112d0cb3537f4c6691a3005e0af0d0ac' }, "Data"), h("td", { key: 'c22569b1ac759eafa5f7760160dff1ceca3e2ce5' }, "Data"), h("td", { key: '045fb6fc63dde8fbcd367a3057982be1c6e86c58' }, "Data"), h("td", { key: 'da3c86887029a8c1af2f235861a1db70e7461667' }, "Data")))))));
    }
    static get is() { return "ir-test2-cmp"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-test-cmp.css", "../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-test-cmp.css", "../../common/table.css"]
        };
    }
}
//# sourceMappingURL=ir-test2-cmp.js.map
