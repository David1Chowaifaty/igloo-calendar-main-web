import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '1d3a72dc49ac8baa4f05238ce50f73600794eff1', style: { background: 'white' } }, h("ir-custom-button", { key: '1fc382ad1b4ea5efc8823948fb00b0d2561f57b0', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '77e50f26eaca34da115bb96b6e5453bc68d1c8db', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '932dfd727b408623ad6244a6130f25f20e979ef0', style: { background: 'white' } }, h("table", { key: 'f83fd795b300df0c0fdec276b101d654f68d1b60', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'ade8bc59e3979794d21d55c65e829dc849a14139' }, "This", h("code", { key: 'a40abb06b6d8ed911c4cfe97ec75f7d4638664e8' }, "<caption>"), "describes the table"), h("thead", { key: 'ee4c191de125e1bb0dca0b6d429e131ae080ccd5' }, h("tr", { key: '7421294c91d8db45c902b9ebbb8540686e84a620' }, h("th", { key: '02a10066072b3dc0570a0240a1bc1205125b318a' }, "First column"), h("th", { key: 'af6285427789861da08a5a9535c940e736095cdc' }, "Second column"), h("th", { key: '096113942d3394933907fb566c5a9f840aec135a' }, "Third column"), h("th", { key: '214d5fdf2bfa6bdf7da30c813488c02230342b64' }, "Final column"))), h("tbody", { key: '8dcf1b3ee4f2ddf2bc7e132ff28aa3c9b6e87579' }, h("tr", { key: 'ea2dc6d5ef024c5c220e6bbf34736b2dea6ba126' }, h("td", { key: 'f3c444295a603301754d316e4893c8f1d4621c5c' }, "Data"), h("td", { key: '9aace7f40314c88cd9ad286e52718394a567ad03' }, "Data"), h("td", { key: 'a4560e5064138f527fa72574615d14a03c85b1ad' }, "Data"), h("td", { key: '236bfd1c49da5774045ab6b4d203a49050a62e13' }, "Data")), h("tr", { key: '6fdc215e03dcd2060acb78f36995e5eab2abe7a7' }, h("td", { key: '805e0203892fb44bd76b12cdec1748996163a49f' }, "Data"), h("td", { key: '7fe42bba846d387ac67803140d7fba67748a161f' }, "Data"), h("td", { key: 'e6428cf5b6f8b6c88fd69d4fa3e49ddbaf1b6822' }, "Data"), h("td", { key: 'd5ced390939f2a3d04566a717bccfe7372c58fef' }, "Data")), h("tr", { key: 'd925bb4d20c2a418aa54803bd13cdc0da39ea5f1' }, h("td", { key: '1024dafee7ec6ac47c234c33af2a40985752dd7e' }, "Data"), h("td", { key: '829b5023a2d193a0394d9b051946ced414e8648e' }, "Data"), h("td", { key: '9f5b884468c5bfdcc7e8139ced0dcf95d35f2958' }, "Data"), h("td", { key: 'a21c2072dfc659cd0fa11b3d1c2d7f9a465aa08e' }, "Data")), h("tr", { key: '927686b7f4be025db9a7a2d915ae6706c247889b' }, h("td", { key: 'cb6b41b5ee452003809eff452d7d3cbdf3ea7511' }, "Data"), h("td", { key: '35bf0807c21d6565b0dd73dcf5bfec4c475dc973' }, "Data"), h("td", { key: 'c5b05bf3a1c5f16fc3577a486217fb6b107f66b8' }, "Data"), h("td", { key: 'a18c38dd2fa9a1815ffac02b3fba7fe409914aa1' }, "Data")))))));
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
