import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '61d7d0fb6e072c6177a06c8c4d0478a143cfa186', style: { background: 'white' } }, h("ir-custom-button", { key: '496ef8c49822941cb88b71455bb851e1bb738d42', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '2a74dfe117a02bfbe289896f21e6be667a2b2d0c', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '34f3553cd84b85e3c23495e90f3eafc7ca2940ee', style: { background: 'white' } }, h("table", { key: 'd6fe35bfe8f987c80670902470216d2b4cb41e76', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '67b865810ff9b01828e092815fa62efcab2e7fe1' }, "This", h("code", { key: '7ee4df6c830b3cb8e420a66bb32d2a21e0430216' }, "<caption>"), "describes the table"), h("thead", { key: '072bca0d8e3d02ef201e38615911276df98c8d61' }, h("tr", { key: 'ae7f213e60e10fd7bae9b8879d368304c2697739' }, h("th", { key: 'd9db8ed8fbf3edd84e45368675e4d842fea93c9c' }, "First column"), h("th", { key: 'b484d28f56b7ca0c00b23ee71d1344f3e0c11909' }, "Second column"), h("th", { key: '42fa60351b8f938b9823b2c325a92ff811af883a' }, "Third column"), h("th", { key: 'd19a6522a3f19a3804c835156a8fcc6ff6b9c8d3' }, "Final column"))), h("tbody", { key: '4886f0350d083111e2a80f38236f78daefdc712a' }, h("tr", { key: '07ab74de28d01dd652cb5fb1483a8496c0fefecf' }, h("td", { key: '08c1dff054d0ec89c704e64f57739f078a8b473a' }, "Data"), h("td", { key: '11c8f076da0a1c557d0d2f5a6ef5554d67169474' }, "Data"), h("td", { key: '0b18634c32179f9cc1531c53444a9f85dfe2d6be' }, "Data"), h("td", { key: 'ee7670445cacc35d1b7bc0682756d263adfc1904' }, "Data")), h("tr", { key: '59dc16aaae3b68530b0cf1054480572d019d94d6' }, h("td", { key: '9163bf34d9b19fbb0818594647e3800a87c781cd' }, "Data"), h("td", { key: '392c5fd8bd5541644ad416140a2d42ef7f66cc41' }, "Data"), h("td", { key: 'ced4540ae2b0adea5fe44da0b24debe48ae5cdc9' }, "Data"), h("td", { key: '2571927fd0a1736049111dfea9e7169f8a707545' }, "Data")), h("tr", { key: '46bfe06772bed4a0f54509a576a4b30385281001' }, h("td", { key: '62cd76f8ebf4901e92e2eca19da6b5e982779fcb' }, "Data"), h("td", { key: 'a36a9a81180a9be1d097aee790693439efd9f85f' }, "Data"), h("td", { key: '98facfc581cd6050849db94bb1879527afc65c6f' }, "Data"), h("td", { key: '779572c4e535468df7335231a0c79917d1df7456' }, "Data")), h("tr", { key: '344807e0326c8a211a388358c6cfb18ad97112eb' }, h("td", { key: '7a50ac65968e1d5d4db94f699f10d1dcf43fd99b' }, "Data"), h("td", { key: 'cfd3191344a6f9f2b90200c770b37acfd5e3241b' }, "Data"), h("td", { key: '42e9cdfa3a183e6d0acf81742e422bbc58fdd1fe' }, "Data"), h("td", { key: 'e60c1ea132f9a27a4a4755fc847c2f1daa461553' }, "Data")))))));
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
