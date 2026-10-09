import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '4bfdab72034742cc9aac87a7eb064a09b1fa8627', style: { background: 'white' } }, h("ir-custom-button", { key: 'f90186a11f921d90e9e23ad518bfd5d18a3733fc', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'e36f425e7ebdaaf824711b6fea457fbbedc14c15', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'd479d016cf9a87758d93273b8679ad7e2f0d8fd6', style: { background: 'white' } }, h("table", { key: '32ff705f3b50f70fe28c04cbd461884d3f77c165', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '1d62c50804eafc5e1f017b6e55fc5f2e306fde72' }, "This", h("code", { key: '54cb0aa35bccf8514182ff263ea47352cb15be9a' }, "<caption>"), "describes the table"), h("thead", { key: 'ac6d40f82dce31615e1e1b35e5f3b3478fa20e39' }, h("tr", { key: 'ce3250c53481c9ba0773f1bc6bd9611851216c72' }, h("th", { key: 'f602b111ec755764af7f6ffa3936062ff2ee8051' }, "First column"), h("th", { key: '1125aa90345894a836e471ea34ca171ccfa06754' }, "Second column"), h("th", { key: '21dc998e5d5031db86bd711b7fedc5cc9c836c62' }, "Third column"), h("th", { key: '4c7010721f310f81319cfb7081c06617ba6a17d3' }, "Final column"))), h("tbody", { key: 'ce13847ccfbe6f6dd03f5077184fe54de8d7192c' }, h("tr", { key: '2359f9ad8fe6897dcd66a72b6da31c362b415207' }, h("td", { key: 'addd73848d9a2d6124a785136fca9393ee204a86' }, "Data"), h("td", { key: 'cbcb019595f335257ffb33e4ffccd43237b917d2' }, "Data"), h("td", { key: '8478d6c01e4522a9ec66369f1efbb638831d5bea' }, "Data"), h("td", { key: '5bbd1de7d275c910ef98d1cadf0e775215909d5f' }, "Data")), h("tr", { key: '35ba9782fcdd3a86ca87f8ae05961465ea5dad6e' }, h("td", { key: 'f8ab1d4ae70324f3f69b5497c5d7b039d9a57f61' }, "Data"), h("td", { key: '69f81240633fa62f84334587e4f59c3657554083' }, "Data"), h("td", { key: '51355d5df154b2b718cf6fdb56052b991261251c' }, "Data"), h("td", { key: '8101844167faba0360fef68e77bbdd6096187eab' }, "Data")), h("tr", { key: '8d954bc833d8b3773e2028ca52b31ae0f46b64d3' }, h("td", { key: '877b9982b2a23b47c36ac085f52df57d0c4ee07b' }, "Data"), h("td", { key: '7b5d4d5c4b50c19f44dfa3da0b649f77ace0a496' }, "Data"), h("td", { key: '3d2a03f1e7c655f431e51f82a7048f875939d26a' }, "Data"), h("td", { key: 'daa2f2d07877efb8559655ad7eb65b33ecf143ba' }, "Data")), h("tr", { key: 'bd651b5ad2492c98832a4d89608f3e6efa92b388' }, h("td", { key: '6d30b4376eb5823dc6f4ac9e6eb75d76068a2f85' }, "Data"), h("td", { key: '6704dd315bafa832d40ea46af3fd5f9a5bb290ea' }, "Data"), h("td", { key: '30cd9db51b8abdc3022b2a333080e88b2c79fc9c' }, "Data"), h("td", { key: '152affc3f83a7a161fbd4c95c7a385d02d8b30d9' }, "Data")))))));
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
