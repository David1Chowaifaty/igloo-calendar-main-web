import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '06406f403bb84504b715fe2b30344c812831677e', style: { background: 'white' } }, h("ir-custom-button", { key: '1456f2aaa6e62d410bea8578f835c7266f9357d3', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '121f41cf6598589016cd50a556a1010af212e744', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '80a477af997999077c99ea5a216ef0257ce01090', style: { background: 'white' } }, h("table", { key: '5c08033448ba04e0a798f02700f4fd72a6df5ad5', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '5ea6a85ed99452e74dfe622af5593fcafb9e5d64' }, "This", h("code", { key: 'a9c6e6685263c977e1dc4e593090f65c1ee5b647' }, "<caption>"), "describes the table"), h("thead", { key: 'e63467efd049ebe3b510aaf7990ca54fd14714f5' }, h("tr", { key: '62ead2b0561f10be9f97a40b0443b58a92bf04be' }, h("th", { key: 'a41cb5a627eccaf1d05186ce0c5a9cb234e38405' }, "First column"), h("th", { key: '5b44fee84f2b1b3574fb52341c37294704daa2c1' }, "Second column"), h("th", { key: '59ffdc777e2494dc4ea0953b2a446cc8e16ff29b' }, "Third column"), h("th", { key: '0aa28b5a3172271564e87afbe440c03835c5a479' }, "Final column"))), h("tbody", { key: '5c5867996cd49a9171ce511fb3d1f2ddaf2aa44a' }, h("tr", { key: 'cddd1f5bb9fdd33fb49c4621039b6985135f42b9' }, h("td", { key: 'f1ab2b09ab89363cd05e69ff88d6b5847204fc95' }, "Data"), h("td", { key: '19f2a0f97158bbb6817c9a1ff8b2f0b26a552a5f' }, "Data"), h("td", { key: '440242ce7579ee05def6adb00e62ec7b177b318b' }, "Data"), h("td", { key: 'b64e7b61bd0f67748b75f1210cb4c30ce50dca3b' }, "Data")), h("tr", { key: 'b6048cb02be3aa01ac8723514b5ffe45c5e3a96e' }, h("td", { key: '483b5f51996e2324a2215a2b63143e5bd3094e42' }, "Data"), h("td", { key: 'aa1c0e8f7ae48fd28c32cc17ab313235f6f4c44f' }, "Data"), h("td", { key: '70c5476c51014085a413fef735470a19e7f8304c' }, "Data"), h("td", { key: '4e4328d7c34ab6c524e747ba3bd4fef98de4429d' }, "Data")), h("tr", { key: '1d1fa6a1451104eae14bb74979d558c7fa20e098' }, h("td", { key: 'b899ad1993f1eed11738b4106f936cdf4124d3fc' }, "Data"), h("td", { key: '32b625f4f9548192cadd932c84f9ac619378634c' }, "Data"), h("td", { key: 'ffca9fac0f5ee5ec4c66b90b73d0ec7f1abce490' }, "Data"), h("td", { key: '6d584024712b86fa8d8637dba70ae10b882d9e3b' }, "Data")), h("tr", { key: '8e3aea0b81837b62d0ee79c197bf17ff927fb1d8' }, h("td", { key: '9fe2131c2585b2f22cea60a8780eda88cd208d98' }, "Data"), h("td", { key: 'b316aea3dcebbe2c834982cb39549b5ce67d5b15' }, "Data"), h("td", { key: 'b507c84fb4f043506faa87de94d5de6a81eab971' }, "Data"), h("td", { key: '9d2957c16af3440587879c998d56fd8c839260cb' }, "Data")))))));
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
