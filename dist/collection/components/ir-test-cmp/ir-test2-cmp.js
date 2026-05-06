import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '9a034fd0d6a2298ebbe4436b4f80efa5a12fc71d', style: { background: 'white' } }, h("ir-custom-button", { key: '0cd8a098e9ad81445686ef14d50c944b856e0847', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'c4395850e019e45514b6b205354034c4b75dc627', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'e11e551b95efb006128625e1ae452aae15989a89', style: { background: 'white' } }, h("table", { key: 'aaedbb5c3319878c346ffcfc40d60763c083157b', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '59a20397d274c8fcd03dc649d5484beb559d6a09' }, "This", h("code", { key: 'c4eeeb82b9b1ea590f1f6e6c312d1e1c4d767d7a' }, "<caption>"), "describes the table"), h("thead", { key: 'ebc8ccfaabf0c26ec146f36aa8c87fed3464f40a' }, h("tr", { key: 'cc9f2b734fd6eb61b2f1d72a2ae5e3f51345d4e6' }, h("th", { key: '812ce14d7d7200c1b3c695be3004b660046b2b6f' }, "First column"), h("th", { key: '3347c82e5f126768ac8bcac218733d37c8b1ae7c' }, "Second column"), h("th", { key: '3652ca30a4fced91df9f04c59891aadbe2db142c' }, "Third column"), h("th", { key: '610a7ad79f32ba37587c29cc89fbbdc08acf8325' }, "Final column"))), h("tbody", { key: 'c0820a702b5537803d686f91fae8bf4d3ce5330a' }, h("tr", { key: 'bac3f4572101ee09b783deb67e0c69a837ba1bc9' }, h("td", { key: 'cd355764351ed8d48d19d938b3076c2d86f51c01' }, "Data"), h("td", { key: '78695190914db9c00826b5e68bf3ec57af8dcb15' }, "Data"), h("td", { key: '301bfe15d6700d9f4052119d55624edbb063a952' }, "Data"), h("td", { key: 'a4f0a2d8cb513d245a5482e693120d222022e4f0' }, "Data")), h("tr", { key: '670d172777c14a2210c3eb977fb07325c89234b1' }, h("td", { key: 'f8f9e081b8dc22531bf15887e0daf2d43fccd090' }, "Data"), h("td", { key: '859d24e1ce5928aee666b2b554fdfefddad964d0' }, "Data"), h("td", { key: '07c64413b738e1a3098721d8d236b64fb17a462b' }, "Data"), h("td", { key: '18767e8753d05e993f1b2652b4bc244734e70bf3' }, "Data")), h("tr", { key: '9ed23d612b9fd2c42874fc88f1e7f7ae3a799572' }, h("td", { key: '837dcbb06af2597a47f3c8c30af98df77761bd8b' }, "Data"), h("td", { key: '519787c038cf7c3fe9d98a877377d06d5cfe7601' }, "Data"), h("td", { key: 'eb382c2574225ef6028f99c6e36820585bb37398' }, "Data"), h("td", { key: 'ab3f130ef6773984a997d5bcd6f8d86ac07486e3' }, "Data")), h("tr", { key: '055b899edaa9265c18e061d37eb5204df3764c25' }, h("td", { key: 'fcf5698beefe71a17bb6077e6cdf0788d8e4e6a3' }, "Data"), h("td", { key: 'e84c52b6caae27fdd3c1c9582d6d20a8fd679792' }, "Data"), h("td", { key: 'c76b4d289189e9536cb02fe5e0bd46ec33c41ea1' }, "Data"), h("td", { key: 'b1492f8c3b43272a0918ab21885e2ff338ef1c6b' }, "Data")))))));
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
