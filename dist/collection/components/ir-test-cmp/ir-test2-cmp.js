import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '832f5a4e0769585a2d7bb1bd82515f77bb1768c8', style: { background: 'white' } }, h("ir-custom-button", { key: '4292914404f13ba5f88aa7cff47416f8661acd56', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '576e7ee28cf0a72ce67af0b19a9f63143cc57cbc', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'e072259a9320cc71bd97cca4158b7f24d643d3e4', style: { background: 'white' } }, h("table", { key: '9123a674c2a329b87bd6d5278e64ba41f1600692', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'f45f5c0ca8bfa5a63696b562c50a351dc27ed6ba' }, "This", h("code", { key: 'dd01ba0d7af4eeb167e8b91d9ecf3932c2da11a6' }, "<caption>"), "describes the table"), h("thead", { key: '4c6cd1d8ffe6ac274511fc5281119fc1370705a3' }, h("tr", { key: 'd6eaed2ad80863dfe7eae06f500ef7220712ca76' }, h("th", { key: '762fdee48dea1ea38ed0d05ceb2652ba3d5d51ef' }, "First column"), h("th", { key: '4d0845d412233eae4e6c0a760d8b9d3b6156e360' }, "Second column"), h("th", { key: 'e68a515b548ce8a99cebfcca071f62d07b0eb6e3' }, "Third column"), h("th", { key: 'aefeebed45a7b776b2173d396f92fa531b5dd43a' }, "Final column"))), h("tbody", { key: '95de79ae1f1a9cd71b5952d269dae2697f95b960' }, h("tr", { key: '21d3f317d9221a3d716162829891f19cc08590a1' }, h("td", { key: '0612a2c359fcad26bf18b910725b03bed82d58aa' }, "Data"), h("td", { key: '339cf2294a054a2afc8f12bfd13853d57ade4860' }, "Data"), h("td", { key: '1327f178ccf1c1113a194b7487b5e668fdddd98d' }, "Data"), h("td", { key: 'dd7d8d210dbf2ed1018ccc362ed681b99c1baba8' }, "Data")), h("tr", { key: '4732d77fe8d9b48d465ba0c430755c836f745c0d' }, h("td", { key: '6519374c9c8471dc625017a418b2311c26ff8e03' }, "Data"), h("td", { key: '777ccbff054f14e08d4a7a2f0d700d2276101a56' }, "Data"), h("td", { key: 'a49226ef951c0802a2ef7dc6937b12adeeb9d047' }, "Data"), h("td", { key: '06e59b19fc56325ef62e3af9d57279f200ce6786' }, "Data")), h("tr", { key: '9a31af1ecb9241e08cd152914d915f662a7b4d0b' }, h("td", { key: 'a12d4f549a23824cf20c3b14ff70e7310bfcc8d0' }, "Data"), h("td", { key: 'ada86d13da0305846327bf156d7c00e500a4b0c5' }, "Data"), h("td", { key: 'e8ec06667268e66f15b3a5f89df1864cb9e1b231' }, "Data"), h("td", { key: '7dbeacd7ea97f17403e19af5ea6c7d28e1c04745' }, "Data")), h("tr", { key: '9564671f36a7de36d39826e7935a474cf47ead92' }, h("td", { key: 'a08d4c406d1aeb349c7ae86c540ba331c56d3406' }, "Data"), h("td", { key: '6fe0690dfc41b247333fe0a8cfdb254235d246c4' }, "Data"), h("td", { key: '6606d87a374c3c59f44a541e42517c9a931836b1' }, "Data"), h("td", { key: '5ee4c98d55d4bb98542d7132d326bbaadc602546' }, "Data")))))));
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
