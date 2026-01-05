import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '8df627ab16c98ed8090c6aa5b8dd8bf4082df09c', style: { background: 'white' } }, h("ir-custom-button", { key: '70083cbc225abc2096b6a32feabd13a553262778', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '2d65859445ffa5dfc7b97ecd0aeb631d3359f3ae', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '3cff2b1d699538248262444d535eca1ee1d2c572', style: { background: 'white' } }, h("table", { key: 'd5f92c2cb8eff43515b26c5037bf8ba3f81800d7', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '5a872239fb3db536a7d3b1c052fe5e0e2980a15b' }, "This", h("code", { key: 'a90b30f42c7485511ec34f537aeb143decc935db' }, "<caption>"), "describes the table"), h("thead", { key: '59f191fb3734edac77e4af6663b6e3c7e4f804f3' }, h("tr", { key: '465f031fea164645830292ad6a06008ed76125cb' }, h("th", { key: 'df404b798476ee3a561268eb94bd0fb7bba37672' }, "First column"), h("th", { key: 'a62511ab68435cd249190572c6bdafcaa32a0567' }, "Second column"), h("th", { key: 'abeb18b623358c6f1f3792975de826d43440980e' }, "Third column"), h("th", { key: 'd4d0f87e87d637e0c63991b195cc0d24a4db2d9f' }, "Final column"))), h("tbody", { key: 'c83ba657373020ae43025f2b8c1d3f81fb10f442' }, h("tr", { key: '01b1e9a7b3e621a9502ba3c804954a1b34798b33' }, h("td", { key: 'a4c685a63b7c19e36d9a54f7f698ea2b8d96374c' }, "Data"), h("td", { key: 'f2bb19dfac845290df7b5d3e67f3703aca1fb359' }, "Data"), h("td", { key: '7c20abd268ab6b2c44b463ee875e1c542409b8ab' }, "Data"), h("td", { key: 'bc356cde9dc20022d7035a1bed9257b3a8e17a60' }, "Data")), h("tr", { key: 'f98b1b4e0c1b4d7b5a5bc9026c754e12dccfb84c' }, h("td", { key: '2a96df85367e77baea0ccefb2b24e96c947538be' }, "Data"), h("td", { key: 'e56d76699803935c540c060bb10f7bef72c7f214' }, "Data"), h("td", { key: '54b446de8a95f6d0946ddbeb4478dbadb0a3a5de' }, "Data"), h("td", { key: 'cb837291718a355f0774d1b5ea83be33f135c01f' }, "Data")), h("tr", { key: '005969962e34c0a8dbdbe9c4aa73a71177394b52' }, h("td", { key: 'e6cb296ed3eb9eba23acd935d457775261910419' }, "Data"), h("td", { key: '1d97d368b6c66c397b6622c06d3fb1ff556f037c' }, "Data"), h("td", { key: '615f6159c3090c607a421ad34e0da702296bb8c4' }, "Data"), h("td", { key: '1b73f4aad20464db660094e05d85beb6a3dfd4b2' }, "Data")), h("tr", { key: '3808920fcdefc59ac78420b59f346209154c621c' }, h("td", { key: '1979fb4cdf273341f8bb5d553be3cc9eb5dbceae' }, "Data"), h("td", { key: '879819a442a7dd11d91e8971504651d8f625ae80' }, "Data"), h("td", { key: 'fe5cb584beb29ad1468ee4f11d75d7168e70ef5a' }, "Data"), h("td", { key: '8a251e864913ce99bb1038c22a9a8f267cbee6da' }, "Data")))))));
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
