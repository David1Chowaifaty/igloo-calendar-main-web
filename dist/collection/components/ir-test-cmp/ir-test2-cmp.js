import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '2abe05ad75c2ff8aa28ce352639a94cb7ff2454b', style: { background: 'white' } }, h("ir-custom-button", { key: '437ca5a314072530ccad610a93dc80bd39552654', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '9e98223583041f623561d07b931a69754a4f80b2', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '20827302882bd9a4b0fc84d0302423d3012f7d6e', style: { background: 'white' } }, h("table", { key: 'e91d95fd1a25a8b12d7b3e8d47e2c4681a24a4fb', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '1d0d87e1ab62ae1d525153226d2de62817729af8' }, "This", h("code", { key: '843f57b9eb5027df21cefbcbfd35a0a4882ac913' }, "<caption>"), "describes the table"), h("thead", { key: '9bef7c566872d640d27b4293868b7e146e6e5fff' }, h("tr", { key: '83722797a8c0e802b09e5c1d141a4b7b081b662b' }, h("th", { key: 'af3349636c2bdde917b11bf6f7dcc0fc04f07981' }, "First column"), h("th", { key: '2f0fea054224ef768023bad7872b0a5768987249' }, "Second column"), h("th", { key: '6c02ece8c99d127dd4aec7d0fd3aef146c9f384b' }, "Third column"), h("th", { key: 'a8f8afdf3476b2e1b1dec8afa82dce0f743b3361' }, "Final column"))), h("tbody", { key: '9009eec89327c9126447fc1c10e139bdb45bf4c7' }, h("tr", { key: '94024ffd7d272125dfdd57a3bab752eb1290cfa2' }, h("td", { key: 'e6518df841a6626d080982f271227d38af2c825d' }, "Data"), h("td", { key: '3eda1132edc4238daf0e9149e82c88ef5bf8c3c5' }, "Data"), h("td", { key: '1c00ae83e022c6ba936ca68df961b2c43a637ac4' }, "Data"), h("td", { key: 'a68686f6436ebc28bbf39f3194067f9fa4a760d7' }, "Data")), h("tr", { key: '64b6719b22b9488765aac43f23f75d20b2279268' }, h("td", { key: '9599aa8104af9edfc52be49e2c3acf229b39274f' }, "Data"), h("td", { key: 'c2691c39cd72524195872220595b8eb474d253c6' }, "Data"), h("td", { key: '864434bade1ed42a45d2d926d4c23122e4b2d58a' }, "Data"), h("td", { key: '3a75de8c029a7d3e4be4078c30a2086de74ac27c' }, "Data")), h("tr", { key: 'c7ea739d0482cdff1182cc8a471f35755a105e52' }, h("td", { key: '28e160e6ede8c364a50774b395d62c27da6da78b' }, "Data"), h("td", { key: '5a21a1e04864c63d878d1c88445bf8b56060299a' }, "Data"), h("td", { key: '0b6b7e426131d3897f241e8ee13a019e3b2a704c' }, "Data"), h("td", { key: '93e04349838a52d76343708163104cb4711aa692' }, "Data")), h("tr", { key: 'e48b46135683caa1ae1aa97b8e2221eccfaa72ae' }, h("td", { key: 'ac3ec8b8858c0b3eb69892e6b720742fa75b6882' }, "Data"), h("td", { key: '58f4c2972f993cc5c098d2db6755022de510db6e' }, "Data"), h("td", { key: 'ad9c33d216e34fdd3c26ebd147879d997a598b53' }, "Data"), h("td", { key: '95f27715d0dcb48fa6f9a48942496892c98383b4' }, "Data")))))));
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
