import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '16cf3c701ef3f9f21abeb924037fe799b16af60e', style: { background: 'white' } }, h("ir-custom-button", { key: '6ff4c13e8cb7e047677f3ab705ff834a1bad43bd', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '34994027f7423ac079ba5641fb5a98e4f5483b17', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'de9ff22d1a35dd21d9646ac0560f06cfbbf9d3da', style: { background: 'white' } }, h("table", { key: '8f9847e7570e83e4360e79c59ba58c0237892a6b', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'c2347c7fa2c170a08df42af4bb5ff4b412a196b4' }, "This", h("code", { key: 'f79232bd2b5bf7facd2f40f600a884ec5f3643fc' }, "<caption>"), "describes the table"), h("thead", { key: '78d5ca1e763573127fbf9bcf1dcf8d87e0cd9c37' }, h("tr", { key: 'a0b1568226d50babb4bf5dd4a8599e6a2cc0c6b1' }, h("th", { key: '34391d88e88dc7e960535c6b815dd5277c64dcd3' }, "First column"), h("th", { key: '1f9f7dd588e0015384cef338adf65ce6a416a56e' }, "Second column"), h("th", { key: '1badcc6cbe2eeb13b224b99ed30519db09703abb' }, "Third column"), h("th", { key: '914294f3807c7877945e2f7224b9926cf25fe8aa' }, "Final column"))), h("tbody", { key: 'c4001548ad8fea8336cacbbea26a75a8923de077' }, h("tr", { key: '9f70906c97b73647005db9a7426347b77e212b7d' }, h("td", { key: 'dbaeb5b3d9b446cadecbcc1b08a8ba244d58f112' }, "Data"), h("td", { key: '093d2b4e2d41753035317dd6c547f4778b36977f' }, "Data"), h("td", { key: 'b631d912512119c04c264af8fbb1963608f1ec99' }, "Data"), h("td", { key: '2645df563cdaacc25fc013b6de45a0b6c7226d08' }, "Data")), h("tr", { key: 'a76c74b6fa2ce8b58ccdb22c6ba9b191865bd918' }, h("td", { key: '27827402eededc571ba42f43b4702da8ed60067f' }, "Data"), h("td", { key: 'd485ea83685ee7b6f3b87573506363fe5c66c11c' }, "Data"), h("td", { key: '610f515ff2a8b24201a51a225a0ad4cb9bd5245c' }, "Data"), h("td", { key: '21ee718fdd81b7a991d118a4378b7f81aa6ede48' }, "Data")), h("tr", { key: '880a6a5e87b2cd93d5cc48ef3c5a5de2416ce4f4' }, h("td", { key: '566be6ac03dc8734127f6e49d0a9c9c99a2b6784' }, "Data"), h("td", { key: '379829e12ddf4e8490c4bb3491edd981821e453e' }, "Data"), h("td", { key: 'ba9282ea5c13ec06cea90152c24add101c9d93e8' }, "Data"), h("td", { key: '3ebdcf4c0cc90b12d9cea1670f88ef0238b7bee2' }, "Data")), h("tr", { key: 'efd9cebfa55e9a05aa7b1eb376c751864faf0320' }, h("td", { key: '816359a8dd8e424796d8f9e75f2bf5463ca84ff8' }, "Data"), h("td", { key: 'd85cf07ff31c553217c9b81b6518b977840f3eb7' }, "Data"), h("td", { key: 'a79dea5ad6fb28b417b656d8337d95612ff39060' }, "Data"), h("td", { key: '0d7015c33bcd82365b45080e99a535a8ec397641' }, "Data")))))));
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
