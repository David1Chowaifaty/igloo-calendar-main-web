import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'e4e61029cdd652b8c12773469b411f9bb14257f1', style: { background: 'white' } }, h("ir-custom-button", { key: '087f7e6cccf4c09e35c92a9fe4c0aac9b047dffb', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'ce4eaaf99791c086588bdb1b7e011be890461c07', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '9bb1590695d337cd78d7f72718ec16732a684f92', style: { background: 'white' } }, h("table", { key: 'ffd777641de73950e619da51bece131c8e5577f3', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '79e0e90b0781a2acc89c7f6fda79976ba54b5a22' }, "This", h("code", { key: '2efb81bf17062e47acba52e94aa518947a9eeca5' }, "<caption>"), "describes the table"), h("thead", { key: '3ba6ff8a621e3a511d7431356f90a913dc499cb7' }, h("tr", { key: '259ba6b4c183b9653502123c926fe26761b9471d' }, h("th", { key: '2c65cf8029afbc2d5c198d7caf162b0355c3a7e8' }, "First column"), h("th", { key: 'fc781c43b0ed6ab0d107deb846a4b5ba460e276c' }, "Second column"), h("th", { key: 'bc18bd08c6983d03d26c1dea9f7c6d31318d13d2' }, "Third column"), h("th", { key: 'fd687530fcc89136428946563043edeb5d15fbff' }, "Final column"))), h("tbody", { key: 'c299463ca1200ef161f8d02115597ed796c3e9cd' }, h("tr", { key: '524c3a26d50fd575bf6643bbb7780fcf0010159c' }, h("td", { key: '91ce8bebeae7544496e73b0447052f0d16ffaaec' }, "Data"), h("td", { key: '5e17e24d11b01a4b8f50ae6b35f87765628f0d94' }, "Data"), h("td", { key: 'c17198c258143b1653f3a56d35de1c4f5e2dbe3a' }, "Data"), h("td", { key: 'a4bd3e203e1b4d8d19e5df7ad622b401d9d71a29' }, "Data")), h("tr", { key: '0231bca7fab5ddefbc88d6c3cc8e17cd83a93211' }, h("td", { key: '6af9803965a7d7ac23fc58202023789fc4ca965e' }, "Data"), h("td", { key: 'f626f903bcd2bd5bf6691d51213defb2d568c20a' }, "Data"), h("td", { key: '3cacb1d1afef7a13cd8b7ae3a4dc5c8f7573b6ad' }, "Data"), h("td", { key: 'd69876c958163a2492dd646ffed2e7fed5fd5c71' }, "Data")), h("tr", { key: '1ca85aabd46148d55f55402bebfee66bb838a705' }, h("td", { key: '57714423d125a9fa7abb36cfe9a044b19511dfd6' }, "Data"), h("td", { key: 'f527f9f56def8f45586ca766ab14790dce6c11fe' }, "Data"), h("td", { key: 'f38168c46df40e1a4975e4d922a1fb1d936875cc' }, "Data"), h("td", { key: 'a8019a1f5c68fe2edc8a2828f6cfc5eaf9401b37' }, "Data")), h("tr", { key: '9d4dabfa04b088b3d0787ebad6f1ed8531db16e1' }, h("td", { key: '8dd01fcca9cdd0e7f17c70a7ea54f16c7a02f658' }, "Data"), h("td", { key: 'f66906685503a8759831f5122e47fe7ba89c1c61' }, "Data"), h("td", { key: 'd14b72611c6d2ecb870d124a9adbbc629512f86c' }, "Data"), h("td", { key: 'f11ba0dd10236c7a469158b6af26d71aae311955' }, "Data")))))));
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
