import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '5ec329dd8e5aa9680b3152af299539cab02e1db7', style: { background: 'white' } }, h("ir-custom-button", { key: '9b0068e4e20b6557a1f6d256c1bf0c268411fd12', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '2f6cacad77a9ab5953baf2d3087fe25f1aa6ed76', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '2635adad2e00242e1942f4629494efb539b2ffad', style: { background: 'white' } }, h("table", { key: 'a205715e138a1e4c39b95206eee07187c7b9f9de', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '1cff27bbd0f53b1b7724f81458fa8e3b832d3711' }, "This", h("code", { key: 'b7a0f9123037cd081eed907f3b293682b192273a' }, "<caption>"), "describes the table"), h("thead", { key: 'ada6796d5c9a10f023f8a3519d5d851ccebe9fe1' }, h("tr", { key: 'd3de4570097f160facceeae12e16e81daca0d870' }, h("th", { key: '93e0b914ec45917c25529a7b08036676d17508c8' }, "First column"), h("th", { key: '9da97b2169c6c1e1dc58df618f4fa1664d343cac' }, "Second column"), h("th", { key: 'cf499fd01899979655f42a30f7760d1740862c0a' }, "Third column"), h("th", { key: '8eba14e4d2e6308ddea60532707b12ec296b47d5' }, "Final column"))), h("tbody", { key: '1035af9f2fa65f0b8fe5cce54b6f432833fc6aaa' }, h("tr", { key: 'bef7fc927e7d2851cd6c1bc6d932e00cbf3638f4' }, h("td", { key: 'aa98cb74efe2fc298d3ca8d65b3c4f34e0c56de7' }, "Data"), h("td", { key: '1da2d8f209ddcd44a7da68eb236a73d38a85ba02' }, "Data"), h("td", { key: '1012570ac655e7e488b52176351ab32a73aa9e2c' }, "Data"), h("td", { key: '83015f63fba54a736d6b14537852607e4f8a5eaa' }, "Data")), h("tr", { key: '5c887ccb75026aabcf96771351853d0179bb5529' }, h("td", { key: 'aecf60ec26ec5f67466f8ec57c2d849f74639628' }, "Data"), h("td", { key: '23d8dff7b3d8da36b57daf42d8f67b247d27dd03' }, "Data"), h("td", { key: 'a52f62279caf835da86aacca32f9140f51b4bb11' }, "Data"), h("td", { key: '858bb2e0d2cbf14838c0ba9e6f0b1248f5daaab0' }, "Data")), h("tr", { key: 'f052566ebed8db6d913f86f0df1b95496ef439bf' }, h("td", { key: '82beb6cd1ded3d379236f17076b88cd4559b7315' }, "Data"), h("td", { key: '5d1a9a8c223796385fb30b8ad3178c6abb6fb3d6' }, "Data"), h("td", { key: '8581c9c1ab4a1f02966c55a88428bcf5e879ccc0' }, "Data"), h("td", { key: '1234f18e9738b9e983225f084dbb739c6eefc8e1' }, "Data")), h("tr", { key: '3ce5718b9ae0b3cca3a300c0636e78fe48a2bcfc' }, h("td", { key: 'a7184c6cef25bd38a61c30c2a2a769b61ec7a4cc' }, "Data"), h("td", { key: 'f44f75a0f929a16d498b51b99bef622b554ca9d8' }, "Data"), h("td", { key: 'd1d019503cd547a0b239e595d88bb6cd7bc73c61' }, "Data"), h("td", { key: 'dc4a170209d7c8476b88bbd8093b821da504d69c' }, "Data")))))));
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
