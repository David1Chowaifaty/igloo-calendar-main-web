import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '431366b1e25a42096140fc3e9c65a76b21b7c595', style: { background: 'white' } }, h("ir-custom-button", { key: '4ddbb4650f799571ec59d222dcb3fd0ce52a699f', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '928891de97a25f7e8d78c98d90e1a6430b64b18f', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '69109628db2f45f210be3d835adc9c18ebd8aefe', style: { background: 'white' } }, h("table", { key: '7fb29eb1c95cfac724caf9ce44dfa057c3c23104', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '605826aaf5df7aeb4d939fd23236d4fc6246cd4c' }, "This", h("code", { key: '3e5340260537ee3e13dd5dabe55222964a086f21' }, "<caption>"), "describes the table"), h("thead", { key: 'cc387833a086073116c1fbaf5f89af7db6f855b5' }, h("tr", { key: '6d95d5d2a2dd3aa6619cecd3144dbf97c1476986' }, h("th", { key: '2df3ad9a6d7eb3f768e631c577338ad70cb5592f' }, "First column"), h("th", { key: 'f5250ae92281562dfa9c3141f8fa69fde2083820' }, "Second column"), h("th", { key: 'fb6d6168ee4288560ada565e7bbfb30b17abcfd6' }, "Third column"), h("th", { key: '9ff202cea2b4d96111892a92970a0a0f2a193c65' }, "Final column"))), h("tbody", { key: '9a59955d4c49620853bdce9f545a092f73bb3e87' }, h("tr", { key: '5683d2b692869af1deaf3629308e2790b4c64d04' }, h("td", { key: 'a8e6fe66b2ae83912b69c6e868eb9404a16e08fb' }, "Data"), h("td", { key: '9fb6679a7aad57b46a179ad59d4eade37bd0c016' }, "Data"), h("td", { key: '5a29360ec48bc1b4ab6726c6b8246382c1a76107' }, "Data"), h("td", { key: '5d870e5c88ffcfbe90e0dbfcf4f666881109a085' }, "Data")), h("tr", { key: 'eee05a7e51a661df005076e0d3840cbb38d3a02f' }, h("td", { key: '79f1c738165a8976363ffc6474baec863e913028' }, "Data"), h("td", { key: '428980d6a57dd8f56bd1779a730d817dbb3d1fc9' }, "Data"), h("td", { key: '1b218860e4ed7c7a5af817530348362574c9e058' }, "Data"), h("td", { key: '9bb8137f81a74e68c7a46a3bf03f617a2f7e1594' }, "Data")), h("tr", { key: 'f7ba7c023427a1e4b8f0e91ad738433cc9a97354' }, h("td", { key: '768797f2e46fe7c8e10774a9dbdf050f8de56435' }, "Data"), h("td", { key: 'a8b528491653051530bad695c1a6e66fcf794754' }, "Data"), h("td", { key: '65d0d0f99ad8c90c8c7f7e479f9209bdacf35636' }, "Data"), h("td", { key: '912b819cd3fdf4c0880914b6024430e71605f6f0' }, "Data")), h("tr", { key: 'e4e94c600ab58c17c96ce5135b105fa44c72f159' }, h("td", { key: 'a3e28567654469c691e3d79b21eb1ba1322c2db2' }, "Data"), h("td", { key: '2ccdfa55978cc462e4815b836d1e5bcfe7612885' }, "Data"), h("td", { key: '669c1a54bcf0c9cf955f0c80996cdda928ab665c' }, "Data"), h("td", { key: '25f2e5314fed69a569f2c4b6c3541f238018e54c' }, "Data")))))));
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
