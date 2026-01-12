import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'b3f44d85b622bcbb8bdeeaf0109aa531f61fe632', style: { background: 'white' } }, h("ir-custom-button", { key: '44bcf9b88441f21981a5af273d666cb6347bf1ee', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'f01d10797f2f4b95fc0d336e66ea3e3eb2022e0c', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '5afb8dc6c2a440929ad09e9783195b76a703ada8', style: { background: 'white' } }, h("table", { key: 'c515246f915acf26881fc179892698bc28c3f795', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '1e28cab5441bb9a5b1e8ead7a5087e373b47b962' }, "This", h("code", { key: '75af4e5c8ba1618916637a3230fb7907ed420267' }, "<caption>"), "describes the table"), h("thead", { key: '74f47d1e20b346869f198e18b11ec48dc8bfb5e6' }, h("tr", { key: 'ac91e546c8b0ca3f80b7306c3ca72ee90634eb05' }, h("th", { key: 'c34bcc2f6fbe884bedabe8d33237565cdef63bd7' }, "First column"), h("th", { key: '711d5cb0d974d4e28297d16ed6d919ad2d1fc007' }, "Second column"), h("th", { key: '959c0ca5ff31a240f0bde67bd2739abd1fd7341d' }, "Third column"), h("th", { key: '1902f465d10bcb2d333d08e637e867d32d69e775' }, "Final column"))), h("tbody", { key: '9f80454b134b3ad04367f9a5d64fb71c094e451a' }, h("tr", { key: '4f98ee9f158a0ed4e3a483cbda75cedd83b58e21' }, h("td", { key: '542676cb324a3488127778e53bf9c0c8ce9bc1cc' }, "Data"), h("td", { key: 'bc2c14d444f5821b6fffc4e3880ae090aef1e9d1' }, "Data"), h("td", { key: 'ba4514b0d7beebfb91d274766a270a4bbc2e21a6' }, "Data"), h("td", { key: 'e6012b46f42d57eaf635cb416f062d6ff824c9a4' }, "Data")), h("tr", { key: '2cb1e2d9f30a895bb4a3a1e68a21cfbd8c87d9bf' }, h("td", { key: '2a015034809f74c16085fc7ebc6f46d13bbb0d62' }, "Data"), h("td", { key: '0f2bb2d127e1b9c41b1bb6be268931b25735a98f' }, "Data"), h("td", { key: 'cedc75aaa059a1524598dfc565556cdb687e56ef' }, "Data"), h("td", { key: '0f32ff37971a4b69429b33f98d49066dcfbe7f65' }, "Data")), h("tr", { key: '500dd643c1032d3d37e16e5dbc9e6ea7059502ad' }, h("td", { key: '8264763a91373e6aea8586a8ccb00641cbcd2c9b' }, "Data"), h("td", { key: '262bdb4331b0ec3fa6e8e653f54c303b58bc3514' }, "Data"), h("td", { key: 'ef924cc74567ded6bfca0b9ca403b499b162a46d' }, "Data"), h("td", { key: '9f23ba858f7f94b3cabc88579d16fa6ff8994432' }, "Data")), h("tr", { key: '98e0225d4d4ab19ececf460ba5cea45a323228ba' }, h("td", { key: '55cd0a1700f193456a9868a22ebc702a1bb84bcf' }, "Data"), h("td", { key: '99ee717a322907ab2adf5a95f955b141f90f50ec' }, "Data"), h("td", { key: '6798e8f4e66f373e012905702558b1d52ca2d479' }, "Data"), h("td", { key: '60fe4137960fd3c3d9a170590d3ba6cc8a07cae3' }, "Data")))))));
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
