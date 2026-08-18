import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'a2c9ddbb54eccd98e898c427cd0a72e8d731416b', style: { background: 'white' } }, h("ir-custom-button", { key: 'c305128df41696395270a9197d76f343bf29d07c', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '429f5d02ebdc7cf90b91a024f0941a908281582d', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'ab79e18fca0903e83f79f528afa4242f30d74966', style: { background: 'white' } }, h("table", { key: 'd8df9a9e726cf66155fd3ee7e1f1e89dd550085c', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '2d6dcf2d341f14fc67b20589a3cff96fabba1b82' }, "This", h("code", { key: '0e22e94b5645fe34999aa73b500071295794e869' }, "<caption>"), "describes the table"), h("thead", { key: '271a5b83c7c4761a6d81ed2b3ac14ee6711e28e0' }, h("tr", { key: 'beb18a8bf4db45ed8186e73fd8ea8d588b9e9eb4' }, h("th", { key: '91947da7ee498cc39ae42b7814a66a628b7e40b2' }, "First column"), h("th", { key: '6ed848b8c3c320e67801e695d088872f3a6b26bf' }, "Second column"), h("th", { key: '57ee48e89c34695c84499c6c1672854133630764' }, "Third column"), h("th", { key: 'ffe0d6612508c499f380fd91e9ba6186254f308e' }, "Final column"))), h("tbody", { key: 'e947d3551004ee36fe60da1f5a01a39debded382' }, h("tr", { key: '378482486c365e4eaee45d9f69f8f7c081de539c' }, h("td", { key: 'b67bda70ce346e370cd252e65a316878247fcef4' }, "Data"), h("td", { key: '4074dbeb12d8eca25ac6661eaa42269515405cd3' }, "Data"), h("td", { key: '8d376534c9830ada932483a84424b7c3cd812512' }, "Data"), h("td", { key: 'df20faf3f0ac99eb38f9970f844a7432976ed051' }, "Data")), h("tr", { key: '8d86118555175404a3a12a4c1f6ba9651126cd16' }, h("td", { key: '6933c4bddf6650db4be8afdad512b6605c45ad62' }, "Data"), h("td", { key: '828cc79185091663cf01661fdcfe689784a06bfc' }, "Data"), h("td", { key: '797ce0c3d8ddc3ed6f456d70858dd9c3582ef382' }, "Data"), h("td", { key: '3e1f619a568a9aadf2fe881e0ab72b11d035d3c8' }, "Data")), h("tr", { key: '35941b2a98c1124f6c6c9753ddbaf4e3d6189ad6' }, h("td", { key: 'af3574056602bcd6aebd12e734d7b8663e5d13d9' }, "Data"), h("td", { key: 'ebf856d0aa054d2447da7963eb5ea1f63362852f' }, "Data"), h("td", { key: '87bb9444e6b8e341ab943b59a02eabef8afa8144' }, "Data"), h("td", { key: '4219a14a4f3786b75ec7a9d561e94952c3d708f9' }, "Data")), h("tr", { key: 'e9bd1dffedb9f336017535c9ce59b497132a1483' }, h("td", { key: 'b571bdec0e6d7d09cf949c2ec736016c7c5bc35c' }, "Data"), h("td", { key: '49281d5ef25df8cdd09389c60643940354d89509' }, "Data"), h("td", { key: '52a68f121cc449a5c766da23726e45fdd6c119be' }, "Data"), h("td", { key: 'ac5a1ba4a0c9b1fc40077c765708f9de4431ae3e' }, "Data")))))));
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
