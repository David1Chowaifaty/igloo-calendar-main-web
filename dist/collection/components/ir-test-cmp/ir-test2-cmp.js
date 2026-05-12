import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '0593bf25b82cc855135dfad54e2281aa00031460', style: { background: 'white' } }, h("ir-custom-button", { key: '139660680cdab298fb9b183c937c5491d7da617c', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '91604879653186bb0483fe90498e9256e70afac1', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'a3b7679ed71a795c0cbfda26c78bc99188f8e948', style: { background: 'white' } }, h("table", { key: 'e86de72e193eb8b7ec8eb168d7034cbb0cacd3f9', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '385bdf3382cb0f1a1ca505ac2cc009ab0a65d19c' }, "This", h("code", { key: '8192d0547c321e83e3ac771925ad10a4ef6419e0' }, "<caption>"), "describes the table"), h("thead", { key: '32232c519fbff39b2a4e0ac1e3ae6bf9994d9c09' }, h("tr", { key: '9f3fb839dda42ab3bce389b9e0ec4a721b09ec5a' }, h("th", { key: 'b384752a19775100cf2ee48a2ed1ad119911787f' }, "First column"), h("th", { key: '459d8f9fd6800e5b136b33aad463c9ae6803f0e6' }, "Second column"), h("th", { key: 'c6aca35b14e1a15cec0cbbe1bf7813d397a67edf' }, "Third column"), h("th", { key: '712f60b3c45b504ef03a025837ba89515ef7148d' }, "Final column"))), h("tbody", { key: 'c151eab6149d868ed935945ef3773e59dd66561b' }, h("tr", { key: '24bb5398cdc94086d2638f4eeb794739147d9586' }, h("td", { key: '4bba5055893d6eb957ff9e063674674b2a9e6d55' }, "Data"), h("td", { key: 'af0277d1e928bb89e4e659fc753869a97cee8c09' }, "Data"), h("td", { key: 'e9f670edb2e4d09bbd242f113fdeafa2002ef431' }, "Data"), h("td", { key: 'a498b432e9d681d84f89883a2faa94ed0b5e8821' }, "Data")), h("tr", { key: '2810b6fd5e3c9b520e54b32bc1f511383d0c2ba8' }, h("td", { key: '6d691865c194cc84ff4d47fa937b6a5589c91d80' }, "Data"), h("td", { key: '16bce1ec45e3ffdb4abd59c46ae334eb88edbce1' }, "Data"), h("td", { key: '32334afabdb92eec12d27e83d5ae0d9981a5993b' }, "Data"), h("td", { key: '0c9c56149ed636db443c853d8967974d018db6c5' }, "Data")), h("tr", { key: 'bef7206e21c334e31affa755cc23927057f837bd' }, h("td", { key: 'e87b27cdf185be053069db16872273c6a7aaffdd' }, "Data"), h("td", { key: '3ac8fc4f4d57d6bf4dea7c1c8c5e603facdb6cf7' }, "Data"), h("td", { key: '944fca5c60adb765d43d0d0c4719574e7f07e896' }, "Data"), h("td", { key: 'ed8a97dec4d55aef1e1ee2b720f227143c739177' }, "Data")), h("tr", { key: '989f72b2d080bdc3b298b4e45b4459fc2a8d58a8' }, h("td", { key: 'd692e33fddb9eb2d21f5727d6362f24343dd08d1' }, "Data"), h("td", { key: 'dc07beefb0057a0a7c98852811db4ea9439f9d52' }, "Data"), h("td", { key: 'e48e5106f0d428fe520141dff417b5e3e8cbe663' }, "Data"), h("td", { key: '96ca685bddf9f682b8d79e3506413fc5f593bc3b' }, "Data")))))));
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
