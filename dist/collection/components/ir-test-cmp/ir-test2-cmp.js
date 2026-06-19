import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '495b6fca6d08c075f72c0f6f60956e309bbedafd', style: { background: 'white' } }, h("ir-custom-button", { key: 'e1031225c05567ec322400a00ccdfac1a87fd12b', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'ad810a683a5e34939ee403ffcb08a9ca70337153', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'e2a2629ddfe862db30fecd4bc1e2881cb85a8d97', style: { background: 'white' } }, h("table", { key: '3fcdc6ba2cc196f0c799c8212aaf063b000b6af2', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '07b885a3918a53346ffccd5703d1e6753f30efdb' }, "This", h("code", { key: '4e3b7fd811f1f24488a5b924e4b8da333001e78a' }, "<caption>"), "describes the table"), h("thead", { key: '61a18bd9e778e325e0ee4769271308b9f1b1296f' }, h("tr", { key: 'eccf7134c176f61f413b1057bd467243c727f473' }, h("th", { key: 'dee6f6967d3acfabe7c05deca21b3b48e2619294' }, "First column"), h("th", { key: '631d895fabb0c48be2a6ad2bda3259d39f5c258e' }, "Second column"), h("th", { key: 'c214bf481d07a8381bc7654fabf9d9a497fa6996' }, "Third column"), h("th", { key: '0e34c07cc38e457ec283113897087a71d2cf0a9b' }, "Final column"))), h("tbody", { key: 'c7c59b06227bf967484a4a9bc4f7eb94a21069e6' }, h("tr", { key: '58f5705d3fc32e48b77694981d81391d0007e9b3' }, h("td", { key: '0dbf45468c23b312310467ccf12aa6f648a6a379' }, "Data"), h("td", { key: '165d759eff4f0e36f1ed4e105c81b966a7bd2738' }, "Data"), h("td", { key: '8fb078dca4401934e559aa0125c8013f3c149f7f' }, "Data"), h("td", { key: '749a713c18a977308e9549d66625c873ee16d6b6' }, "Data")), h("tr", { key: 'a00130765b5178c08dbc541b0f3767a5b46d1198' }, h("td", { key: '755757d98669b1a4ab6a8e93678b01a5068f6cb9' }, "Data"), h("td", { key: 'e153bf3ac24eaedc4b27081df36ade2d67c4b301' }, "Data"), h("td", { key: '867e71086b320d2dc49bc97b0be07a14504406c3' }, "Data"), h("td", { key: '5075c7cd81b6a7e5d689388cdd176f3649929cb0' }, "Data")), h("tr", { key: 'b6feb68106d6fe71dae1616a41997bba708fb065' }, h("td", { key: '1f04aad42239258b718f10e796d6de86b51f0670' }, "Data"), h("td", { key: 'de80e25bf66568dcf753088c36b498fc6a62b4e8' }, "Data"), h("td", { key: '13df6e66a907e3b19ba11df94d107b5ccc895ca5' }, "Data"), h("td", { key: '46353bb976120cb360ac402c6db92dc90cf5a7fc' }, "Data")), h("tr", { key: '843ec95a56c609ec97eb87a215e7b4e4589f4838' }, h("td", { key: '4ee6878a12deb56e4bee6ccbaa33523801631c36' }, "Data"), h("td", { key: '4cda82df492d2a9bb6b62fa7aa63f9cf4dfc85ca' }, "Data"), h("td", { key: 'a85f749c8729e29882c7fc8b12bfa3ec547db016' }, "Data"), h("td", { key: 'e1baafbaf7984497350b071205d465771bc86c66' }, "Data")))))));
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
