import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '1ac0aaab77a08ba1ab79137eb44dacc224d01cab', style: { background: 'white' } }, h("ir-custom-button", { key: 'fa092aa4ffece3bf7a2b83f457f11a3a4a352821', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'c87ecc05cc2fdce54362ec40dde87eeebbbd5b99', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '87eeeb874f215477db0737290521487f4daadb90', style: { background: 'white' } }, h("table", { key: 'd78650e753416e56a0d606be16a068d69bf196ba', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '22fe46770db625f82946287d0c01db3b2684638c' }, "This", h("code", { key: '35627500f0ca6fdb0fcef6135693821b4bb188bc' }, "<caption>"), "describes the table"), h("thead", { key: '2460234b4e8f555cec7492b0d47f274cb943d65f' }, h("tr", { key: 'e2132938482bb44c78ab15d27a810cb2d2723f54' }, h("th", { key: '3ca753e63b33f5136680cf794da7f1f1541bdc04' }, "First column"), h("th", { key: '3038e9bb39906163bec257746f1bc9cb72bb6202' }, "Second column"), h("th", { key: '11d056642736d89e09ba9e67218ba263e512c611' }, "Third column"), h("th", { key: '735f8eb4bfb88fbed4e890c712115cb9b0fcd507' }, "Final column"))), h("tbody", { key: 'fb00f59fed311279c7518ed5466cb514397ef20f' }, h("tr", { key: '19e99760b989f7e24ee11e49da4b4b559c44f2ca' }, h("td", { key: '20fd637b361f26317f59f09f7d0e76131c57fd8b' }, "Data"), h("td", { key: '8e8d63e257c87e9cc2ccb4d324074170ffe0e1a9' }, "Data"), h("td", { key: '3e2f196803780c08beea628a51be8ff8f4cb6550' }, "Data"), h("td", { key: '6f036a104e809acd70a7f62f6f44d86a13c90530' }, "Data")), h("tr", { key: '28c03e7f7e2b90786757bbd50a7e5d0d98b4c734' }, h("td", { key: '12ece547a7b95fd5971f08a7c99ec916552821c3' }, "Data"), h("td", { key: '368181f2c82d0809193b120e64d4a288b69cb0a2' }, "Data"), h("td", { key: '8d869b05310a0fad2a7b7e75bf673f895b32dc74' }, "Data"), h("td", { key: '8b449421690bc0b260f5fe81679db9efd8282d0d' }, "Data")), h("tr", { key: '0747d8e1b2d963be387005b2c6f9abe9bcfed766' }, h("td", { key: '1f3e37be01a89d9595094e29fa4ad1940fa16940' }, "Data"), h("td", { key: 'cd81a439519ec2b952a895317d48bea74a3c258c' }, "Data"), h("td", { key: 'c3af7ea39d410b37b033ea4ab78a240934140c0b' }, "Data"), h("td", { key: '84e12d458c57cb39c2618af145d4f5ca02b116aa' }, "Data")), h("tr", { key: '8a340d78214cb3870b357521f9b5daf35a212e4f' }, h("td", { key: 'd73c47fe08b9a2e64f589733d0d0930c6ab08ac0' }, "Data"), h("td", { key: 'ebb83814785431faa8e19194613185b339d146d3' }, "Data"), h("td", { key: 'e56a845c3ea9be57b0167da123090c48b666fb19' }, "Data"), h("td", { key: 'a9ba08a2ad01e8ac9b5015786e3a3aa273dac905' }, "Data")))))));
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
