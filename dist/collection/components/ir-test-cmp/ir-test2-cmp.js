import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '19443b9f83007b65e9318b2d38767315d7ca40f4', style: { background: 'white' } }, h("ir-custom-button", { key: '72e7d6dba3107afa50060bf12be98c7e1a1ff78b', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '440be4ca0523d5a79471ab423b4c52097e38d2b5', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'e20ef5a39656fec79be98fb82e1acd108ab2ca09', style: { background: 'white' } }, h("table", { key: '4d56acbcd244fcdea1c32b3fd5cf06d7da75b3b7', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '506da735f393d1f359b3cfef4ff119828da14b45' }, "This", h("code", { key: '42cfd90b15f2a48c60d226e63740864996497af0' }, "<caption>"), "describes the table"), h("thead", { key: '2d80c81ea9e03f308073a7fb2f81bbbb7a8b3146' }, h("tr", { key: '5ca27e16e091dae2b56d8a0238770c30e8c6eac1' }, h("th", { key: 'e3902bfb168dae7677f5498be669c162992f4fc7' }, "First column"), h("th", { key: 'acf0ea7405ab1b1900bfdb9d19b52aa368d1891c' }, "Second column"), h("th", { key: '0dfff7950c8147d63fc1e70782bbe9989c871b98' }, "Third column"), h("th", { key: 'c9466e072577c6e5421f104aa3e09a7fe59edf99' }, "Final column"))), h("tbody", { key: '54a9f8921b1d1b229127a94cc88e25a226a39bf0' }, h("tr", { key: '877e4206828158f745e424a89eb77f2ced0733ef' }, h("td", { key: 'a5e2adbc2290058e046016f6c8672c376a3dbe12' }, "Data"), h("td", { key: '685dd58a8245490c027e8c11af5cfaea36511c1d' }, "Data"), h("td", { key: '99fbc8b25d082fa121ead042596a61c93da702bf' }, "Data"), h("td", { key: 'e9d09aa38b8551308715e94ca7b3f64e90d4e5e5' }, "Data")), h("tr", { key: 'eaaf69634a93a0c3f93aac5b1ceb137b3b55dec7' }, h("td", { key: 'd758512073599d1ad75829ad7d2a7c429b7984aa' }, "Data"), h("td", { key: '735a9a40c148191bdda37d16d6940836b679a819' }, "Data"), h("td", { key: '2050a14a8f4732167ea8a822e90a40c6844dbab6' }, "Data"), h("td", { key: '16904367c65e37b32ab54a30d14370fe43d73bae' }, "Data")), h("tr", { key: '9f7a628c97b8d76c525183a7e58a037b918990b9' }, h("td", { key: '6c07c88729e094a7a914b842b01955ec45888121' }, "Data"), h("td", { key: '57bf515a44a625ea5ab1eb8c9be385b906bfb987' }, "Data"), h("td", { key: '338c6fea963244df1c930d3cfd4016c5aba027b7' }, "Data"), h("td", { key: '1f4cb4a63136114adf42de524645adb49d5a5c36' }, "Data")), h("tr", { key: 'bce196f31fbd319dd739002bdda725f44ccbf9ea' }, h("td", { key: '3e79f201e3b297b980bdeb9a186f3b146da951b2' }, "Data"), h("td", { key: '5e92141ff06a41e0ec9f0abb7be2a30b5a286f5c' }, "Data"), h("td", { key: '26f2c5e4dfb970e21b2c699daa941a5a4ab5f38f' }, "Data"), h("td", { key: '752d766bbb774dc3e674ecf44c0db16a57cc0580' }, "Data")))))));
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
