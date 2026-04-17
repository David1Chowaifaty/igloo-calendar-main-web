import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'bffbb0923e5a0f8c3de8d5bed6ec816d4b9441a2', style: { background: 'white' } }, h("ir-custom-button", { key: '5e8a7f986ec0c1eca3ebdd82d078449b6e0c1e33', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '64fe4c9d69d196398df48beb0726882ffe905f89', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'fa69b76f2bd237951d14628eecd35ebf39114bcc', style: { background: 'white' } }, h("table", { key: '8d790b065fa97e08df7de12652ec353b6c4bbea9', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '166edd1147336cd54bbe5ecb7c41be6cf381ed90' }, "This", h("code", { key: 'ed1ae5a1d40fea73a50f06367fcef2c9bc4e0f23' }, "<caption>"), "describes the table"), h("thead", { key: '3cb2bd37e8fde97c404b8ec20e56f53e00ca2e8d' }, h("tr", { key: '32f01ce1640373ef173e29527e4ffb554630cc69' }, h("th", { key: 'd62847e4697bd1ebf774754da1952fb9a1270663' }, "First column"), h("th", { key: '918cee8d077b2c34c90c1ed9b640f84f8e7dafed' }, "Second column"), h("th", { key: '18ebcb6f5d656e51ff4f87372a0c1c09576939b4' }, "Third column"), h("th", { key: '725acbd9de98da516bd0560caa668ce75c5ef4db' }, "Final column"))), h("tbody", { key: '3e60cc8963e95cec07ff66b573171a5155e291fe' }, h("tr", { key: '026ca351b5fff294169a9f86d98d3516e498140b' }, h("td", { key: '6a9a457cf92fc2dc594d525a61a40ed1c4dad193' }, "Data"), h("td", { key: 'a559222da9f508f9aa9019b9dd239d052cfc45c7' }, "Data"), h("td", { key: '5e87073e436b7b340e7863215c5a2008b7ba2253' }, "Data"), h("td", { key: '8181696e5c3d78fd967d37721fd0fec51227656f' }, "Data")), h("tr", { key: '71278ae3d91725fc134a1a8e73bf01c32bcf58af' }, h("td", { key: 'e15e326a236d1f3ce7484cfd6a07f839c5d63369' }, "Data"), h("td", { key: '5f72e26b09dc959e1f0b95e9931c63badd397ba9' }, "Data"), h("td", { key: 'c74fc86302011cdeec77533cd2d8e28234e9d4c3' }, "Data"), h("td", { key: '7822a9fb35874a4029947a2e81015c555f2a1e3b' }, "Data")), h("tr", { key: 'd85247f4b024fde33dd4470e3752dc8cd3d536fd' }, h("td", { key: '9d1ff008b706f74931e36df1345895ae8f41445a' }, "Data"), h("td", { key: '184aed860b88159acf7c6a3d66d670de67fca998' }, "Data"), h("td", { key: '80cba13de1ee9cebd1e1cb82da0bc7eb5c9a5d49' }, "Data"), h("td", { key: '65c588efed401a311fd76e436fb3d143ada14a94' }, "Data")), h("tr", { key: 'f102d90deb00dad6b26b553122a343af2ff246bb' }, h("td", { key: '51049af0fa4c3eb893bcbd52f61c948bd6f42d77' }, "Data"), h("td", { key: '0610fd52e37726d3df7f3945a14d4e2164999f74' }, "Data"), h("td", { key: '3cee548c5081c3896165dfa9030b59827542b58d' }, "Data"), h("td", { key: '59c68ca737f9174d09f068657184b635a26cf270' }, "Data")))))));
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
