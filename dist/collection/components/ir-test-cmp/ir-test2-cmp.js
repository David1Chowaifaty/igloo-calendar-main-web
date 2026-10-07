import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'dcbd1640a586760e1f50e120e7f7b06f85c22233', style: { background: 'white' } }, h("ir-custom-button", { key: '3e571803914873e60ee71c977f8a04732a21a7fb', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '911bb904e9cb1b6d1db24099de79414867f6ea6b', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '560510fd4be1cefbc9794e6dcbae9fffd0bcc2e8', style: { background: 'white' } }, h("table", { key: '603774b4ad949fb2d590267813d3d6962b1f62e5', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'f2b8111e432849d157390db06e716bb42e52c548' }, "This", h("code", { key: 'f2a247130ece8ae49b9b8fd2d795eab4987d3d28' }, "<caption>"), "describes the table"), h("thead", { key: 'fc37d5b1e5d7cf9131a5a15d1f3701cfa27d1ab5' }, h("tr", { key: '74c1753d6ab31e96773e51c9a778e038177d96f9' }, h("th", { key: '346053d63fceabb9cf3d974576f44ebefb572d08' }, "First column"), h("th", { key: '860a78425ceb4347018ef01dfaa712157b3e809e' }, "Second column"), h("th", { key: 'cd103ddcc2440662ce3d2fc67f8a83e511625261' }, "Third column"), h("th", { key: 'd4b7504e72a74dd774499a9efe89788516673935' }, "Final column"))), h("tbody", { key: '959696fa97ac53e330d8e033b51622bd3ed4dc7d' }, h("tr", { key: '1b77ac772ccc58d8c255c3bb206ba0f9e0b0f23a' }, h("td", { key: '90960fe05c4a557094baea170aa7bfac0395c20a' }, "Data"), h("td", { key: 'd95e99f2cb9f7654d4c55d5cb98cd3433c5a67e0' }, "Data"), h("td", { key: '766b9fa7aa3a0620c35640f8eb342cdb93c97bb0' }, "Data"), h("td", { key: '205b7d25daff55ce7c7077255a34180d8359745e' }, "Data")), h("tr", { key: 'e4d886b63f22e1da2579d3176495500092ca7c66' }, h("td", { key: '4674628f65d3cb8a8eb368d9aea68a55e55a577f' }, "Data"), h("td", { key: '474d4cc55a4c969d353c17a97849d2aa942305cb' }, "Data"), h("td", { key: '4a437a489c68d207f627c0d7518b6955c1b50f28' }, "Data"), h("td", { key: '94516d0234fc837607470ee24d267231a30c055e' }, "Data")), h("tr", { key: '61dd3adb707d6bcf3d8f5957e7ea57f1ca777eca' }, h("td", { key: '0e107b08a15681da26a3dd6d9e8cb7170b8f2c2b' }, "Data"), h("td", { key: '8b6bb63584fa59b211f875b9a7a2101bc5573375' }, "Data"), h("td", { key: 'ce3505faf910e88ee235f4990667cfc066cb6790' }, "Data"), h("td", { key: 'd97dc0dbea8cb064fff422b77ba63f9890ed45a4' }, "Data")), h("tr", { key: '90c7c84ee58254674e1452fbc82006eff2cfac3f' }, h("td", { key: '74e7bc0a4e513049c1fa1086057afb205b18fce6' }, "Data"), h("td", { key: '94084e196a872f1a2ac40718bc414e853d07d165' }, "Data"), h("td", { key: '0dcf197fe19cfe0a6454517a94fe2a3bdc83b178' }, "Data"), h("td", { key: '6ca149f1423614148e890271354eb0dc8fda1cdd' }, "Data")))))));
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
