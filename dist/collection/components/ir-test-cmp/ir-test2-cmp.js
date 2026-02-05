import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'a782cc673cb4b6b0ac7ecb0f5a2ffe1052c3c7fd', style: { background: 'white' } }, h("ir-custom-button", { key: '53917aa7161ef7aea2ec38d1e43dcc0ac6004986', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'b0d18053f92e3a88b43fb53cd0748344451564cf', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'bc3e1142bb9d28857fd06e29a8ce5acd3b3afded', style: { background: 'white' } }, h("table", { key: '74f7287e59369c0b77098f854dc615b8b135bcd7', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '631ea2d49b39795c154e8d244113afc7fd713624' }, "This", h("code", { key: 'c7a94cb31c6c3b3dad6905a61ee6dec955afd6c1' }, "<caption>"), "describes the table"), h("thead", { key: '95dd58a840668932e80202716403b3ee1e19754c' }, h("tr", { key: 'fcb900b9fe6ef9845cbbc5b3e5095f393b962e8e' }, h("th", { key: '45b46c5396378ff2a2d7a153c38a84985dfb6456' }, "First column"), h("th", { key: '2b2123a80680969759633037a2b80a4caa2b9efb' }, "Second column"), h("th", { key: '7aac7e74c8b3262e4ccae8f97abb8acffb92f918' }, "Third column"), h("th", { key: '350cdf5abd6e1fcf0ecb1b09ed14e61b5cad4bd6' }, "Final column"))), h("tbody", { key: 'd0804b5e9516e38bd8aae2b2c92b71e159b9c1ad' }, h("tr", { key: 'f6cbcd4235c5c24e8c78278d7dffc09dbadfe5ac' }, h("td", { key: '8b720baead7054a858575d60190acb8899cbb06f' }, "Data"), h("td", { key: '45f6921cf0510ba5053c1942fd5f172cbef9fa87' }, "Data"), h("td", { key: '2e1553834673764d9b8f41dbfa20b4a088818a36' }, "Data"), h("td", { key: 'ffa36b12d2d25cd21f5cf4434e13734f57063f90' }, "Data")), h("tr", { key: '153df2beff82d756096d01f13e7912721fb9f5e8' }, h("td", { key: 'ebc7ad60876813ea12e46c58e1e21b4cdc291e68' }, "Data"), h("td", { key: 'ae692c049c50441940c5c20c8f8cc0451d8a4093' }, "Data"), h("td", { key: '0030856fb9eed84e84808feff787dcab0221aaea' }, "Data"), h("td", { key: '9efffdfd1e76df9fae9f808c78cbb80b10f7dd28' }, "Data")), h("tr", { key: '1189edbb31496cbb540a6bfda74518ac889f7e1b' }, h("td", { key: '2edf3e6a0b7f52d0433e65078fdf8eb1bd786cee' }, "Data"), h("td", { key: 'e41b63f487a858ad928f12fde7f5e092c01c9d6e' }, "Data"), h("td", { key: '13beca8f692981f6478589715c5b284868e3614f' }, "Data"), h("td", { key: 'bd57a36a203b1742789a090c66b32cc188fce5dc' }, "Data")), h("tr", { key: 'f6bc5c639092d8d2c6a0d093149606c7814aa86d' }, h("td", { key: 'c7b58c06cf627b476284bba75d027ca74812fef9' }, "Data"), h("td", { key: '9dbca2fed0db40d4f29b91fcd80e531fb6c8020e' }, "Data"), h("td", { key: 'd5e29e3cb3b9e37e8690d680d89e6d5bcb8bcf6e' }, "Data"), h("td", { key: '317042f7f8ba04fbf194fc7fb9695164e502c464' }, "Data")))))));
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
