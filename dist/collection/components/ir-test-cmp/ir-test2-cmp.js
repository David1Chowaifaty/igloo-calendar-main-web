import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'be12c59d76565c22e80b59629c2ee7bd90e6d213', style: { background: 'white' } }, h("ir-custom-button", { key: '6c24968813c16e37fd8fc3bb35ba4c78f99367a7', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '21e3a9addecae55ee8abe86cf39badea01aa88eb', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'af8bb19cafeb8704bc01e140d3165e227176ee04', style: { background: 'white' } }, h("table", { key: '200ffacc47f9da1fb9c17bb827c872e9b6f95cda', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'febd547f8745640aa4770ca81a558aefa3bb7bad' }, "This", h("code", { key: 'ca39f6a8de08e4e8429c7c16d116e1c2f9133bad' }, "<caption>"), "describes the table"), h("thead", { key: '8e50a4bac5e3ef801b5fbb94b4973d76b27d94a3' }, h("tr", { key: '74ba015a80c3537224876e73601ed87e6b9b178d' }, h("th", { key: 'e778e338c3a484b25b7faa5fe6b3b58147d7fbc9' }, "First column"), h("th", { key: 'e21577c1d1d8d4beb4bab22606850dab70ce8923' }, "Second column"), h("th", { key: 'adf86229be300b7615d54ad988ce52c30adff4c4' }, "Third column"), h("th", { key: 'ec2dc6bbeaa8a37c9ccd296683ed808c826777a3' }, "Final column"))), h("tbody", { key: '023f04cb2fb4d104215030ec5998181d117f07e9' }, h("tr", { key: 'e23479381e66b2e8690ad56f217f396468cd74b2' }, h("td", { key: 'bbb0c6dda14d84b1adaa41c49a71b61d8d6f4c67' }, "Data"), h("td", { key: '1d39515bf52f0ac5c6c745066f9638e029d5823e' }, "Data"), h("td", { key: '2c8df1199fb781268bd1fb235de09fa4a31cee7e' }, "Data"), h("td", { key: 'cd2929a44639447018d350be187cb09576506a99' }, "Data")), h("tr", { key: 'ee09d44a6872e4fbca802599eb277c696f146b93' }, h("td", { key: '051f12dc47e0d7d96f55191442ef15afffecae34' }, "Data"), h("td", { key: '9786fb13077e25941b99452d348160fbf139b48e' }, "Data"), h("td", { key: 'f0990cb658d77a7f0d3b25e7f9ab329b50e88e7d' }, "Data"), h("td", { key: '671a559a832a73d87ccbcd3117da4c4e3e8b960b' }, "Data")), h("tr", { key: '2082d4f0f0a9d964b99f174b2ecf8db88b8c6729' }, h("td", { key: '42f7565df34456efb8c20d5b2954df86bd3c3125' }, "Data"), h("td", { key: '144243074144242b686fd25202b5119da7042a79' }, "Data"), h("td", { key: '07996a48e9ca076ad60c9244ec6011e5ff3bd95e' }, "Data"), h("td", { key: '087282cc6718b4dc3a81681ccff6496826038144' }, "Data")), h("tr", { key: 'fd5d42c5107e7710fa39f29ca76af31666299c25' }, h("td", { key: '759ed60aa4806473bc36b80674e9b15933a97d6c' }, "Data"), h("td", { key: '99d12c08a3c4183783dde44ad591aab496e755a3' }, "Data"), h("td", { key: 'b892eed6d6685be1253a77880683705b54545e2f' }, "Data"), h("td", { key: 'df07c3e5709145db7ba8f5b8832ecccd9d876563' }, "Data")))))));
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
