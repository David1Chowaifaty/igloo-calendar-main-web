import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '3d6e107c030e84de55e1d9601c1e4bc9a85a7284', style: { background: 'white' } }, h("ir-custom-button", { key: '83de226163c919aa9a9dede503f70202fa5e221c', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'b6f6d5ce6b7a09fcf72a021a784558bad66ad869', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '45dfe0ad6c306e48b4172bc751b899978f43104d', style: { background: 'white' } }, h("table", { key: '3d465ffd6e71f12ea03b96a2c3486732141d4fdc', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'd685b03fcfbc5b099e8f30fac6a0c1e806ae888b' }, "This", h("code", { key: '2cc6bfefd648d27eec9d9cbf9913b0fc8dd5f8ac' }, "<caption>"), "describes the table"), h("thead", { key: '64689683f63f370ebf9435e1bc54c6938456b816' }, h("tr", { key: 'c7012890d4bfd0978a07ae8bf879bd6b124ebeb6' }, h("th", { key: '9e6f690adc3d01ee10c3e59e0451f6851e080cdd' }, "First column"), h("th", { key: '09a31c3d3e7b50729e79a640036962c9046c2d7b' }, "Second column"), h("th", { key: '7305634c204b9c4f7028bf8113415f47cec2140c' }, "Third column"), h("th", { key: 'cf6769c622e8c48cbfc25ebf92e60db47a0490ae' }, "Final column"))), h("tbody", { key: '94915703738f2548c200da6c7d3a88e1ba8e9077' }, h("tr", { key: '37638c9b9028dd55c93d308a1c092b37305747da' }, h("td", { key: 'a08648745f7ab1cf9ed50d3f302b733ff201ebc6' }, "Data"), h("td", { key: 'f9866cc6c8ca8adb6db92cebf03013ca87057ae0' }, "Data"), h("td", { key: '5067e9ab8405c27de17b3063922f5906151a7019' }, "Data"), h("td", { key: 'a33fa54db342ae1e48111520d5d83782961886bc' }, "Data")), h("tr", { key: '189424493115a61f6960cdc02aa8a1071619b5fc' }, h("td", { key: '07db841a7438d356e96447308a4fc11d4c726ba7' }, "Data"), h("td", { key: 'f6a0a27f7d1a94d2ed63787a89b891ed282b91a1' }, "Data"), h("td", { key: 'cc511b6d22b7992d6ee979488de0b831a01fa472' }, "Data"), h("td", { key: '4f733eb478f8be25a626a84e6a41103af74c4416' }, "Data")), h("tr", { key: '96e3d338a9a3f286d24f0dc28daeb6997e8ac18f' }, h("td", { key: 'eff840d6e6e875a51c9e509e604c07c6e081b528' }, "Data"), h("td", { key: '8d6dbabd41a7e660bc100aa466bf2c35a898917d' }, "Data"), h("td", { key: 'fc058e215f606467a40f1fa958889ca500e218cd' }, "Data"), h("td", { key: '3988d02e3c60e4fbcbae338362f61736ffed939f' }, "Data")), h("tr", { key: 'baa7c76f1b232ce888dbb07bc57cb8371e70d8e9' }, h("td", { key: 'c78f1c5f78cec5e5291817b5c9c1a196b4573346' }, "Data"), h("td", { key: 'f2484c5e196dc038f4f46ee3bd351449703449c9' }, "Data"), h("td", { key: '83871fa17ef5224023025de73663c2790cf2e830' }, "Data"), h("td", { key: '8f066d7b6501e3374461e304e447d2c5900060ea' }, "Data")))))));
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
