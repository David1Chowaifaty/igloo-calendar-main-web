import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'fedb1a9ed370151fc3035fce2d9517302633949a', style: { background: 'white' } }, h("ir-custom-button", { key: 'b966688cf8a20883192ec37968548aebc9b02dd0', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '225a0258fedca7f4a390d6fda162da56720de8fd', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '32b711c5897fa99fdaad6d2a6d38a627b3d9dfe2', style: { background: 'white' } }, h("table", { key: 'dad370ce2c6e5a12867f95eea2ad9a7ab7517676', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'e138b97a9e337149347a4e0ea6a3036c0fff45af' }, "This", h("code", { key: 'e3ae57bec8020e321de576af74f7c94ead2a50f6' }, "<caption>"), "describes the table"), h("thead", { key: 'dc414f7ca8262fafea94f89eb71577cc7029af34' }, h("tr", { key: '0722daa45db4629227923cd1e13888218ae25f45' }, h("th", { key: 'e7ccbaaf5ef31a9b39dc54d5a5aee13da65b0f1d' }, "First column"), h("th", { key: 'b649c936067d0e2d3ed20dda0adc631fd2636f43' }, "Second column"), h("th", { key: 'b25fe8a01205030145b055adcd8674de7ab75144' }, "Third column"), h("th", { key: 'cdec707e524ea9ed62d9d5221e6e6b79d277178b' }, "Final column"))), h("tbody", { key: 'ee7f690b06e262b8ef19c83cfbd326b5acb758ea' }, h("tr", { key: 'bcc90ea2b0a762af8dcba56adffd9b7a1d8f099d' }, h("td", { key: 'b62b6d3199570a27c271cd2eb7c4276822f4d947' }, "Data"), h("td", { key: '0f0304aa94c6ef6e0392a959a16e7748a85c2f81' }, "Data"), h("td", { key: 'c08f515dfa736d30eced05c01084708ae2375d97' }, "Data"), h("td", { key: '9cb0bba9531ac65e7824539bfb2c2d21f02509b9' }, "Data")), h("tr", { key: 'c209b0d07ffd4085980ae3957a0bf45a0b6a6018' }, h("td", { key: 'fd93f148d610cffd7c96a639b03ebd8736ed8804' }, "Data"), h("td", { key: '7bc4ebaf738facc6945e79ae213751a1cb175a91' }, "Data"), h("td", { key: '98617d466691cb2440eb76a98cc9d2863da58a09' }, "Data"), h("td", { key: '2425c92c981560c0b77c6a48f11543b5790643e1' }, "Data")), h("tr", { key: '2576aaa3129ff705617ab26c6d01ac0dd9ff33f8' }, h("td", { key: '10042d7353ff3a00aa9d705181d1170a98e9c1aa' }, "Data"), h("td", { key: '5214c14a5208e324686d0d93cba9a2c2d42ad646' }, "Data"), h("td", { key: '2937db178493c664362abfad184f42450575e734' }, "Data"), h("td", { key: 'cdd726de519f66d5ed08079ee4879416df849d72' }, "Data")), h("tr", { key: '48b7847913771b2929a329348f91064edaa5af24' }, h("td", { key: '9959879cc8f49a02d4b67ea3f10e82ccb3d04130' }, "Data"), h("td", { key: 'cf39df86f051f84c4262d7e49b7eacf495606650' }, "Data"), h("td", { key: '0f91982401bf76750d023285ef9d2fab30459b4c' }, "Data"), h("td", { key: '1aee76363b94eda98733f32279594f4281b75213' }, "Data")))))));
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
