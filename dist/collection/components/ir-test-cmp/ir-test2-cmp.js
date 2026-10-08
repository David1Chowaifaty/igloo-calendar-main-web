import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '134f20a6ca5e39e6e934e62ef6906eeeb301047e', style: { background: 'white' } }, h("ir-custom-button", { key: '7f0361e05fc4e0493573006e0337aef2132a55d9', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'e1450d44fe1bc94fc109eb6ef27cb65de076221f', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '3fc6a78bbf61926802560bb0a9532f53fd54ba29', style: { background: 'white' } }, h("table", { key: '3cfc7e66d8f7e857fbbb685437cc9efbee7e4be8', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'dfbe597055baddb2eee65c4cbfebad114740b038' }, "This", h("code", { key: 'ccfa88afae23a178ffc109bc77e088186e7ec59f' }, "<caption>"), "describes the table"), h("thead", { key: '9d3a737c5d2356a7014963808f37a511e28efcbd' }, h("tr", { key: 'e569248c7c471ab9676dba504ba1ab5f6517f246' }, h("th", { key: '5dd1ca41280ac93586fb57e7276b1ec197a65951' }, "First column"), h("th", { key: '25492a02f14b682c05f15f7ad72b9f6e71ac7260' }, "Second column"), h("th", { key: 'e83533afe8f1b74c3faa4e3bd50b746e710d5009' }, "Third column"), h("th", { key: '301854aecc8c0b1fbf0c5fffc072e1d2de06fac6' }, "Final column"))), h("tbody", { key: 'ce349080ffa80cfaba9fcf43c18f1454b9c11ad7' }, h("tr", { key: '8894106532fddf3905aa3a4ef97ac84b2b907bdd' }, h("td", { key: '61b26976a8ddde2aea8b2c5305664caf35f24ae0' }, "Data"), h("td", { key: 'cdcf255941c52900342bd133d0853aea45f3762f' }, "Data"), h("td", { key: 'ddf8c2993d708e3ee2fab2db6234379a96818513' }, "Data"), h("td", { key: 'f2b1c87ca4a77a4aef5f3f82625798648e78de02' }, "Data")), h("tr", { key: '2f3c3e0ee8c5a7fd8e2cd5578767666581199a02' }, h("td", { key: '9837c632e2324c914bdc0236fd9486d46cbaa7d5' }, "Data"), h("td", { key: 'e338dd58a411bee96adadddcbd5474e01b38e33f' }, "Data"), h("td", { key: 'dac98a918206cd07b308906ab3d028821968dae8' }, "Data"), h("td", { key: '0505647b2f7a345ea90229b2a07861c7732d2ab8' }, "Data")), h("tr", { key: '0cf6b2f7be90e69fed850936407fef5ee3f3b8f8' }, h("td", { key: '546bdbf66c681d92003bfead425555147ebd56e3' }, "Data"), h("td", { key: '7821be8483ee0429146df882420711498897fdd9' }, "Data"), h("td", { key: 'c5080e5bbffb0cd141c9241b0a9278c3110acad5' }, "Data"), h("td", { key: 'fa6d1e731776fd16eb1ce4bbde203878ecf14575' }, "Data")), h("tr", { key: '4876fad6046874f3fd1b3d8bc2ad1fa90e9e52db' }, h("td", { key: '6a55191eb53d3b31137a6f3eace2646f1d963b0a' }, "Data"), h("td", { key: '80ff2199693559014c3517e48bc76635ef794621' }, "Data"), h("td", { key: '6f2f7d2b72fd4409b67baac6ab169e972bcefa0a' }, "Data"), h("td", { key: 'f150af372f4d47a2fbc95ee8dd2015400e0c45f7' }, "Data")))))));
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
