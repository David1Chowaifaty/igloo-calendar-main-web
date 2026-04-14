import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '2b5e8359aae9ca4a85cee87e8acfd6130efa06ee', style: { background: 'white' } }, h("ir-custom-button", { key: 'a858de34212492eadd698bb3b5b8df6f6829298e', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '6e9e2a9e6d8d30bf7c3ac8205d878aeac53d7a12', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '346725a8557e7bb85bf7a5d25f7ae03b9c4a200f', style: { background: 'white' } }, h("table", { key: '2826079b2df57148c1d8f00c75cb1770f68398c8', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '8ce9c35fab4625d1d1652ad889d8a4a1b71480a1' }, "This", h("code", { key: '940655ed239c3d61fe77d5e9207bb79bcba853b2' }, "<caption>"), "describes the table"), h("thead", { key: 'b4a3dc0cca6015f622a8cc934a1f2b778f4524d9' }, h("tr", { key: 'c5ba0dad00dfad6dac9c61efbdbe1af8c576e6c6' }, h("th", { key: '93d2ca811f1e9c43b379cd534f9608891fd5c02b' }, "First column"), h("th", { key: '5ea4901ebbcac1b0c92227acf8b324fe5a8576a0' }, "Second column"), h("th", { key: '8240f1361c39cbbc9279d8701761d6a30cd5ce01' }, "Third column"), h("th", { key: '686c15d72baa10b60b0d4654b054e68aecef3600' }, "Final column"))), h("tbody", { key: 'a02271b2190b6c25001c3a75afc322fb5c101b56' }, h("tr", { key: 'caec962e969a74581e530e0c3f93b4f246102798' }, h("td", { key: '4c9558aac7d008fbb96021cee30d2e7966e4521f' }, "Data"), h("td", { key: '061ad2de5ae3af0428a1cae04a6237bee90b6117' }, "Data"), h("td", { key: '8709c8cc1498fec6e00c1f3edeb0f664ea5dbf1f' }, "Data"), h("td", { key: '5add34c9f8f9aa8f1a03abaeef47ad2c4e36d144' }, "Data")), h("tr", { key: 'a09be1b20b2c135c0eac3598b0deffa31e46c896' }, h("td", { key: 'e419832becfaf96e5b66c59176b5bf9d636dcc09' }, "Data"), h("td", { key: '2ef3761209e9ed16c69214780a674a2466115c60' }, "Data"), h("td", { key: 'a37e49186a2bd41d065c26a7d29122e3d64aab67' }, "Data"), h("td", { key: 'c674b70a0ed6e5f5dae1fb436564fe5dca462878' }, "Data")), h("tr", { key: '8b3c7d05d68907b06e35141ed51667bb49c82bec' }, h("td", { key: '70a2ccd1eee998c5fa3a01276d253fd3572c3291' }, "Data"), h("td", { key: 'a4e80dc068245d23c384d51c9ed799f2d8d21f0f' }, "Data"), h("td", { key: '44bbe981602a3d72ed3eb414a4e0b2040db26d5b' }, "Data"), h("td", { key: '3dbba0331e002583bcafcfc0bf3b49ba2adb090c' }, "Data")), h("tr", { key: 'ce83f4821dee00341870bc4f8b8cf1b6f9129b2b' }, h("td", { key: '49d4e8a5006c1e2f91a8b9d2d72c407effe3c62c' }, "Data"), h("td", { key: '92e0f8b4ea4660d80e54e4d93f40667e73952ec5' }, "Data"), h("td", { key: 'cdb658575b1dc9029d245580bb75ea77b1e2f1dc' }, "Data"), h("td", { key: 'f10fc24518972984d60eba7c676d2c54531233f5' }, "Data")))))));
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
