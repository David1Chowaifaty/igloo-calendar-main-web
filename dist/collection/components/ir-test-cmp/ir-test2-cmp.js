import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '9f4b608a8c1844d8ac8422f1081af573a6b2617e', style: { background: 'white' } }, h("ir-custom-button", { key: 'e435544851709e70101d994d62060b99fc0f7135', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'f9478215bb1707801374c59035d084530b63a872', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '990a683c6db059c43b62599db47eb9b717e898e3', style: { background: 'white' } }, h("table", { key: '27ae8b4ec0d0f7110580ae22b5d9289485bfecb3', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '584fee68ba82e776205d0ab3429c41fefaeb3035' }, "This", h("code", { key: 'a7e40c1c1809f98b5234e11de302c094d7b8de6d' }, "<caption>"), "describes the table"), h("thead", { key: '3eae2bb9d419ffeb7245edd95b066126322671c3' }, h("tr", { key: '93a7a4596002de1f916bb37108a3db9afbe19f2f' }, h("th", { key: 'a827941d5703fbe3f26f73c49fd18b3b52c0bb1b' }, "First column"), h("th", { key: '35b2ed82c5f19ad41ecd2e517f1deb57ad54f75e' }, "Second column"), h("th", { key: 'b1f706b9e1ae3941e907288ad4a59b6161db16bb' }, "Third column"), h("th", { key: '1960043505ffb06d66b6678947670575e2d73c8d' }, "Final column"))), h("tbody", { key: 'c930f34528966b68ff0b200a524406afc417171f' }, h("tr", { key: '47bacd0b1ab1b13017b0b4bcc68add90e52908e8' }, h("td", { key: 'effbf81a47d514f92554f68c731dd6d85b5613c4' }, "Data"), h("td", { key: '4e48623891ff96d1254cab111d2848c6ee6c0f3b' }, "Data"), h("td", { key: 'b50d327c51a8725a1cd20b1eb5d123e2e0cad1db' }, "Data"), h("td", { key: '303f501cf2fd401a2189f4c38d97284e5c71ad4d' }, "Data")), h("tr", { key: 'a7f69e2d448c2407528151763961f9479a9e376d' }, h("td", { key: 'b9a7ea39a628ee24a1fa1a12aa7b9f9f3470e929' }, "Data"), h("td", { key: '2eb7c6d0ac69e5dfbd997b24e9145c8f5f48e160' }, "Data"), h("td", { key: 'ff8bf283ef077f970c48fc6c2f2c2580ef289fd5' }, "Data"), h("td", { key: '9910b73b37b419b0ae0414d7cb7969846fef09fc' }, "Data")), h("tr", { key: '38acd5147ff125fb76d7b8700c3bd58c7a3408ca' }, h("td", { key: '8ee403227cfd460b6924009d43a1266ea2cc3ef1' }, "Data"), h("td", { key: '18604fa7b2480d6696aa5f00fe58995f39c2695c' }, "Data"), h("td", { key: 'a35035235cdabbe3d61c85d6521082205f66f32e' }, "Data"), h("td", { key: '34240c3662070e3353bda861de89a36e7bd706d6' }, "Data")), h("tr", { key: 'bc52fb6836033f622ba0c34268523fb3a6f15a7d' }, h("td", { key: 'c838f3a00d97036ce5504b406be44d5a16b5446b' }, "Data"), h("td", { key: '178d45efd426e1284976216854159bbe56d1f7f9' }, "Data"), h("td", { key: 'cdf3eca31fdddc87d0b5a26cb3e6cd3d6d14d701' }, "Data"), h("td", { key: '766e56a8941d946fae3fd56c716e85d849703af9' }, "Data")))))));
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
