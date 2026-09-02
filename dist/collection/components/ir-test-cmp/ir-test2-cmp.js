import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '31a8c2f675491b4081376961663b1b6e69a6b2c8', style: { background: 'white' } }, h("ir-custom-button", { key: '4b3bfb42e706bcaf68afac1eee9da3f7d55cfac9', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '1708e02be4fb50e48813bee9bb2b3bcadb5d453a', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'c1d34b24ea26a24278eeefdffe6d66494abd5209', style: { background: 'white' } }, h("table", { key: '334bbc4f458cce4d8b2738b1498803010b327ed1', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '2dbf9600579d47fbbfb10c7af61eff4ae000b56a' }, "This", h("code", { key: '9b0cea51d82d9b04d4a9edb3dd9dcba58f5ced81' }, "<caption>"), "describes the table"), h("thead", { key: '4179fa088d76e4ed1eafc8c265465de20d8a4bff' }, h("tr", { key: 'd179db9b8d6ce11faae9db431ad4f77f463a4561' }, h("th", { key: '8687a5b2d130219b3be134107ae61bd2374051b3' }, "First column"), h("th", { key: 'bca65fa590ff8aee800f37b0a43785b0856c9ae0' }, "Second column"), h("th", { key: '963edb89644e0f0fc504b303a428232148432409' }, "Third column"), h("th", { key: '303c08261feef9c3df5a9f8e6876032712f08be1' }, "Final column"))), h("tbody", { key: 'b0c4ce193321f81833172cc51fc275315f5b13aa' }, h("tr", { key: '530d3256ab89d61b9fb902c21b270146ab5655c3' }, h("td", { key: '47a449948bb7ebfd556f7242738849f0cbcf7b35' }, "Data"), h("td", { key: '04e206b39f00f9cf19407c7af5c986f731e07972' }, "Data"), h("td", { key: '921851b512cff3d74c7f01f0ff281eecf967f3e5' }, "Data"), h("td", { key: '97132baec542761d3790f61f18cc1d9a6fbacca7' }, "Data")), h("tr", { key: '4eedfb4e1ded98003a8b78ef159fa19a1a22f957' }, h("td", { key: '8717c7116f23f1b2bd51f310558050774f0efc4a' }, "Data"), h("td", { key: 'd8aa3af2300ee9f72f996aff9fec2387df5bd5e5' }, "Data"), h("td", { key: '3877122972004b2988a00d79e8a590f9f3cbd456' }, "Data"), h("td", { key: '41a33cb72ad6ab1104b9137f4679caa4c35e718b' }, "Data")), h("tr", { key: '9f29942dc8f0e530547625589411eda963078b58' }, h("td", { key: '190d22f499b0f9c4357c93a5efb4617d98b2f163' }, "Data"), h("td", { key: 'addef788437bc5d845f78d51372a32e26c7ea301' }, "Data"), h("td", { key: '2c04221910dd2164b0b74762b74bde8029b9df70' }, "Data"), h("td", { key: '6e477773e2d3d31abd4bab4a021b3e999d6c5f97' }, "Data")), h("tr", { key: '615f6247ca0d998998d7744bdc7c468eb9899a5b' }, h("td", { key: 'e167ccb78c83fb027a53e0672f0ea481b2e3be40' }, "Data"), h("td", { key: 'aa67593214ef225fc2c46178af56c1aa07505b98' }, "Data"), h("td", { key: '5200aa7c79b962f4833c143841d33e7aa91876d1' }, "Data"), h("td", { key: 'c54b9c54a6247309842e2a24df51edd5db9d678f' }, "Data")))))));
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
