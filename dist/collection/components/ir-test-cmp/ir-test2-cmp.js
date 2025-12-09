import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'c156a1fec5314176e229ec69f0c3683997b2b42c', style: { background: 'white' } }, h("ir-custom-button", { key: '7ca5c573a0faf79c60c91188abb343dd7301fa15', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '2954d607090e198760cd50739b10ee3bc740a8b3', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '511ac10b7f4bbe38de959feaa7906f9aadca126c', style: { background: 'white' } }, h("table", { key: '48f901ac2760e07863ba9a0a04c4a690183af37b', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'bebb972690807cc5790b1924a150996a50e62221' }, "This", h("code", { key: '6196fe03543675bea4c3fe5c5de7cfb0d1c92f50' }, "<caption>"), "describes the table"), h("thead", { key: '20aa5a71eb3a4956eb664c78ed48ce6ddc29175c' }, h("tr", { key: '80f757ee96f3df768f96adb1180000ee24a7f9f8' }, h("th", { key: 'dbbc5892a10504267048bf124cd7579d68b5b4ec' }, "First column"), h("th", { key: '1d5e4c8b0a1fab32d9e30eb0205f80037334fe2f' }, "Second column"), h("th", { key: '81fe046c1c378dc71700d9e6280fd9f573fcbe13' }, "Third column"), h("th", { key: '81aca68bfe460ecd665b9e0e8c4d29ce7d95c2cf' }, "Final column"))), h("tbody", { key: 'e0c660a63dac446c5fa0ee5cec5c8f72f389c911' }, h("tr", { key: '5cdf94284f3fb3317a88413e0d8e6676125bf6f5' }, h("td", { key: '9388e91a32edd536355e1db557af34d99be212dc' }, "Data"), h("td", { key: '8eee419248708b3d0f54e72429d96844fbb355e5' }, "Data"), h("td", { key: 'd09ddec8d375535d6531008d1802f4e13389217d' }, "Data"), h("td", { key: '615b3256090f01f9f0dbc2de024b538de876a343' }, "Data")), h("tr", { key: '11c3356083e3b08e95c0872f52db73accd7c6308' }, h("td", { key: '3712d0dc59a7ddfb7ec4dff88193f091e811198b' }, "Data"), h("td", { key: '1933185b18209c5c3b502c9a17e057c2496b7739' }, "Data"), h("td", { key: '0e44adbcedee6b905113acdb66534d7bd0340a4d' }, "Data"), h("td", { key: '36c1ad5b581a0719a8c463cb309256c0009a5ca6' }, "Data")), h("tr", { key: 'dc9088dc6383b2c28fb208e05823c8a5484169c6' }, h("td", { key: '298a4ed20785ea1b6044fe99d947f1fc36d21647' }, "Data"), h("td", { key: '523168ee162fd456d70177fdf401c12323000443' }, "Data"), h("td", { key: 'd207559046dbdddc66bcdaaac2f514b44a236dcb' }, "Data"), h("td", { key: '8fad3f0c233ebc70034ef864620f8fb7c4db34c1' }, "Data")), h("tr", { key: '8426bc6aa5e81a2cfdaf54ee9b6ba120e1a8d537' }, h("td", { key: 'd6ded5781d56301b78e47fc1957973c1139177e3' }, "Data"), h("td", { key: '8462397db2e527012067e5380e2f2040fc27df1b' }, "Data"), h("td", { key: '2fa8c61bf64fcbe8b3e1be9f06f5b1f61bbe6c13' }, "Data"), h("td", { key: '1777a85799892ec17efc0636552fd82928207a06' }, "Data")))))));
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
