import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '64bd8a98ad432f8ec6e0916241d67b189f4c761b', style: { background: 'white' } }, h("ir-custom-button", { key: '4282e533c5d671d83be2791df3c9c20586b904c9', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'f979594abcbdaa2cabe7f35d89977c0f95c22923', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '93cd061f71745a837ef63b3c47ee4a3442b23fe1', style: { background: 'white' } }, h("table", { key: '1f95f520d8f7da2b431e5da6306ff77cfb4b03a7', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '9c08feaf23b67c59f45d637e933f9e30a1010e5d' }, "This", h("code", { key: 'ed6c6b2e0f4e6fb7722ffa8a5c6156f69860bd98' }, "<caption>"), "describes the table"), h("thead", { key: '965224052298cddceacaf418b240829e8b070721' }, h("tr", { key: 'e38840ca21faca3ed4d93f2f2a7fb19ba2dda76c' }, h("th", { key: 'c1159fe73ed832c0387ceae951569b8fadeac16b' }, "First column"), h("th", { key: 'a3efc037cb2bec0c148e3fb0566599995b409b72' }, "Second column"), h("th", { key: 'bc371a0e3f5651e5a552c7e331fb0c78461c8f8d' }, "Third column"), h("th", { key: '6678eb023490066638654933b1f3803494e22433' }, "Final column"))), h("tbody", { key: '0b85865c221e91cea78e85fae24b17e6e9713d16' }, h("tr", { key: 'ba5690d373c6e696a567c291db84be5445ec0453' }, h("td", { key: '0d52f5f2262c81a7d115c1aaec1d6d320fd953b8' }, "Data"), h("td", { key: 'ba72744c3fea70f786716d1c9314a10d4ce96a30' }, "Data"), h("td", { key: '24684e031f21e8f94793a42d83841f60773f1788' }, "Data"), h("td", { key: '4834e99b9b99f234afc5aa48863ac9a7e659d75c' }, "Data")), h("tr", { key: '0ee3c09ed88a47283824f22768d69d960916ca95' }, h("td", { key: '73269cae829fc58d31e0a45fdb90294de925c983' }, "Data"), h("td", { key: '8d746ff95344485607e2f9344fd78002895c063e' }, "Data"), h("td", { key: '2f7ee47b570d972077b9c563f25e96df65d382fe' }, "Data"), h("td", { key: '319b2bdee7ced3512dc92223ee5e89c88617cc01' }, "Data")), h("tr", { key: '7ae7c61ca8cf47fa17a8a30a423f929acb4f7241' }, h("td", { key: 'e0ce2f2777897b480e95fd9509b86f1b35ba1aa9' }, "Data"), h("td", { key: '8b922f774ebffcf73f78982ed7d89aad74495933' }, "Data"), h("td", { key: 'a466aa4b17834ad5f5d955582aeefa7693b4882d' }, "Data"), h("td", { key: '82f373476aa2ee95c5e1b88b928a6b3faad2c8c4' }, "Data")), h("tr", { key: '55a4f2a1ce5c529a257c2eb70f4589860c184fe5' }, h("td", { key: '50a5a67aa6f68fbb45d9050d3de6fb4991ef6d09' }, "Data"), h("td", { key: '89efa4fe7c0aa7a918378312032108abc06a8715' }, "Data"), h("td", { key: '30b4a1bb74cabbff053fecad0ba7c0c4c2246ebd' }, "Data"), h("td", { key: '62f7cf25847cc6cf15f85ff5e185f9c78c44736e' }, "Data")))))));
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
