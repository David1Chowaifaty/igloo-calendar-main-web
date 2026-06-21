import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'aa0d1b07e11d0e770c07f943eac6f1087d61d5b2', style: { background: 'white' } }, h("ir-custom-button", { key: 'a6d6dccc457b0104bc4f069fc8270d4738fc9a91', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'fb0e74b908125e97a49ffc2f44abb30e472270cc', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '828350d57fc6cbdbdd267a23fdd2f9d37c8feff1', style: { background: 'white' } }, h("table", { key: 'f0073fd1f7b7190e9bdd8c2e110c27f684d78bd9', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '5f7b9ef335a03f1f22354a47aa20dfee759e7d46' }, "This", h("code", { key: '462a7a608f81b1a67e1746429c7becfe92be88db' }, "<caption>"), "describes the table"), h("thead", { key: 'bdd0afaa0a41aa87f3d0dfbd280d20e2ea2dfaa2' }, h("tr", { key: '77628ae92fc63e3e95926155ef5cd341892df2e1' }, h("th", { key: '6f15f7d6c51f29145bd96f1e9ed28414d7dbe250' }, "First column"), h("th", { key: '296f4ba12225e50add192f1b36432c01592a5227' }, "Second column"), h("th", { key: '223ee296fedaadc6829bac25b9f41798ac1afaee' }, "Third column"), h("th", { key: '8cf119ef314590556bd4d9f8889f30108b6ce510' }, "Final column"))), h("tbody", { key: 'f792168d2dfb63b0ea1ac265bb26feeb98b6abd5' }, h("tr", { key: '6f5471d31ca90c1ad3c591154460da1df46a6d34' }, h("td", { key: '549a95ce50436d6371caa54ec00c0579cb816adf' }, "Data"), h("td", { key: '9c15674a0daf27429bc6c68c26a1e2cd21223782' }, "Data"), h("td", { key: '6e15d99fb04adf51dbeaee0f53c7ab0fd167371b' }, "Data"), h("td", { key: '875c56b033ee5883a70c1879e3e5867c3aab75d1' }, "Data")), h("tr", { key: '8183224acabbb58b2c9e1b85053a8deb08e2fac8' }, h("td", { key: '934aa57ba6f6979062f98fefb2ef3b2ef010060a' }, "Data"), h("td", { key: 'afcaf193344efe072de2417849dd273ca6d92fa6' }, "Data"), h("td", { key: 'd11406ee0df74276efba3c58ebfc16ccf118d783' }, "Data"), h("td", { key: 'd5d48fde938c8d01831f992aac96ba2469da54f1' }, "Data")), h("tr", { key: '191c25e84dc4fe4355a789b10b78d806fa6728b9' }, h("td", { key: '58e215f68b37932f6f6ed86c2f0ef574759ed0d7' }, "Data"), h("td", { key: 'adacf529891ce0b6c39ce1ea2c8cb7bac220665e' }, "Data"), h("td", { key: '47eea4e4043b42d637251c6aa834e3dee6835dc9' }, "Data"), h("td", { key: '0fc79ab32624e8ed6191bd5be1516388678419c8' }, "Data")), h("tr", { key: 'ffb18091303a3c912de02d9b46c40f092c7fc02c' }, h("td", { key: 'd7fa79d71e3a664d5b3035f8b517e3ad6bb86d20' }, "Data"), h("td", { key: 'a0af3ee1eff8ff99f0e28b87fcabd476d465fd46' }, "Data"), h("td", { key: '126c570ccd772d4077a54328e91cbd2e0d425608' }, "Data"), h("td", { key: '8ce9899666afe1b65467a07f62b53c9c291e8e7a' }, "Data")))))));
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
