import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'c37d0f181512c35ba569f731f48feeea2c28f388', style: { background: 'white' } }, h("ir-custom-button", { key: '4a5e2b4dca2114d5e8cf81154e28529c9899c3dc', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '589674d0a262c28359e719724c3487f27f6fb5c7', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '23add8c98f526e73eedeaf674b8d709c8a8091f3', style: { background: 'white' } }, h("table", { key: 'c1a6872e68b9f4f1aeacf532a758b9844ff056c0', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'd9c8601b10abf95706feda02a1c4fcbda07f775d' }, "This", h("code", { key: '09fcfddd479613b4f88d07047f287c5e9c8c4b24' }, "<caption>"), "describes the table"), h("thead", { key: '76f5ed907a884fb81722f04448ee3dba7bf44b12' }, h("tr", { key: '0e341f2b1433e7c458699891d709997543b58037' }, h("th", { key: 'd505ce2523b144a316bb212e2aeb75733fe749cf' }, "First column"), h("th", { key: '8d4198f0cb21f4c7d6933f9574c74045fb1de60d' }, "Second column"), h("th", { key: '1959bff0a5a077679bc4a6614cc2762d68686f54' }, "Third column"), h("th", { key: '34d040715047a85102367f7d7434a1f7647d4999' }, "Final column"))), h("tbody", { key: '54b284564552dbef6776887c746e5f06f280e043' }, h("tr", { key: 'a4abf66b7d10b387d9b03cb466ac21513f9435ee' }, h("td", { key: '1ea104882c7858c2afc0423316a98b3f6d1ad90e' }, "Data"), h("td", { key: 'c8dab4e000dc6af6aafad76e566281da307fd573' }, "Data"), h("td", { key: '0c192333f2fb68021f32ee071ebc36aca9d3fa93' }, "Data"), h("td", { key: 'c89b3596d534daeb73061b65bc3babd31e974412' }, "Data")), h("tr", { key: '1167222b0db8bc90f1151fc70463e183b58f0d80' }, h("td", { key: 'dc7159a5177860fbf45e014b05fc5bf1b7f62d97' }, "Data"), h("td", { key: '12b566199cf61465a9e5223841e636e9685e5f39' }, "Data"), h("td", { key: '052ed206f26f42a44b06a5fd6a9f19ad56092502' }, "Data"), h("td", { key: '5449832a40bfa7fbac38dc8015c731b20c1ac343' }, "Data")), h("tr", { key: '313615809f1c7974fabe9c76ea5a126afa8e0891' }, h("td", { key: 'a298e5819d5ab7e9810cd16f67c1d020df2b1245' }, "Data"), h("td", { key: 'cd148382e5299852d986398b5b844adb6be58637' }, "Data"), h("td", { key: 'cf3a331d342cfd39080e1ed3f43fde2b4a41a502' }, "Data"), h("td", { key: '36eba1c017c33c8aea631684b2708e008e60e545' }, "Data")), h("tr", { key: '43a064cf6ad5b9fa6d9a61fe2fc3268303db494e' }, h("td", { key: '48575d9b15c9ceb3ad8363276be40218ad9147dd' }, "Data"), h("td", { key: 'e625b723476d8e4b3b1343508739968a95dbbcf2' }, "Data"), h("td", { key: '89c2aa2b272c314ab9be765ed3d3d8ab4ef26e8c' }, "Data"), h("td", { key: 'cedfb58ead35af6a538112e7aefd7ca10050bc0d' }, "Data")))))));
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
