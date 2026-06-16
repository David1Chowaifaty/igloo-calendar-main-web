import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '6f7f15ded8271e4ecb6e089bf2ce938cb4702c6c', style: { background: 'white' } }, h("ir-custom-button", { key: '0cc8ae94c56e2de4e7b9a439d98446034e9785df', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '70d080e4d274d305e75589b496e402ef51eb8523', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'dc1ca5bd54772fe107e0b256e23f1f95f9e89197', style: { background: 'white' } }, h("table", { key: '94b802736eb506f0e2c9d49f819b752911cc32ba', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'b71880936a51369d16ff8bb35695bbf0081145ac' }, "This", h("code", { key: '88f9df03638226dc14b838080422458bcbb0ccde' }, "<caption>"), "describes the table"), h("thead", { key: '0bf15820eaa40fcb074cc7e5661de5c9536e6233' }, h("tr", { key: '8672262a3a47b627356c6a80ca5237c052024978' }, h("th", { key: '57d7b88adfb0b527eaa21010010b8bcbca34ab14' }, "First column"), h("th", { key: '02f8e931d4838317982951385bfbc375226f13af' }, "Second column"), h("th", { key: '83c75d81dc82dbad5bc503aac3cc487a41672d39' }, "Third column"), h("th", { key: '3655f986f544bb7760f42ba420ddf0209fbc17ae' }, "Final column"))), h("tbody", { key: '5058f2cafb4f889b672a77e8d7e625b2f3f87b68' }, h("tr", { key: '2af32d9f4b0c43271264f9fcf471e8fb4aae0deb' }, h("td", { key: '8b58714c0b4fc309e227da0e56a5cbf828629591' }, "Data"), h("td", { key: '8bae8befeaa10596c8f15fb5fadaa3fdedf6ccc1' }, "Data"), h("td", { key: '84b7addb8e58136fdd26c7b691af31e24d857c37' }, "Data"), h("td", { key: 'c0f50b13412428587c42f243ef31b0b02ca873b6' }, "Data")), h("tr", { key: '91332713ed322e9509c36314441a28dc55cb0f26' }, h("td", { key: 'd454e8024e3fab936e7a2a0d340aabfb64f65a91' }, "Data"), h("td", { key: '58700d21fa2ddf977a3043b53f74ee80e4340960' }, "Data"), h("td", { key: 'b1fc90c73c207bbc519edbfe8afe00ab1068d3cb' }, "Data"), h("td", { key: '1367d80b877ea370165d02a98a26b94cf2151933' }, "Data")), h("tr", { key: '6548f0e453138dd52ee140a1b29189dba87e9296' }, h("td", { key: 'abe530b07b2dd59b8f3e2dd9109528c5e0409aa2' }, "Data"), h("td", { key: '46b11d49fd943d0fafe199242f423a37c88ea4a2' }, "Data"), h("td", { key: '403fd86738371962ac8e4916f5fdcadec2b215ce' }, "Data"), h("td", { key: 'e86e97a4b0cfa6bc150bfd2fd8b0b3e9dd453f8c' }, "Data")), h("tr", { key: '75bbc0df78dfcf790260a8cb78969f5257e37c27' }, h("td", { key: '1148d0398e45c3a6e71f6827e573556272711b36' }, "Data"), h("td", { key: 'c13bbac69b37c087f2180b30f63e0cfcd161b06d' }, "Data"), h("td", { key: 'bfdabbb14cbd151a2cbe277090fcfaad5903e013' }, "Data"), h("td", { key: 'a6cfec43042c748935fca1a942ffd323d8f5106d' }, "Data")))))));
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
