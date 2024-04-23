import { Host, h } from "@stencil/core";
export class IrBookingListing {
    render() {
        return (h(Host, { key: '102d1d24d09b6e2c7dbeadc5022fd36a31764c01' }, h("div", { key: '1169a6397f7838ab4289e2f95f1def443ddde8b6', class: 'p-4' }, h("div", { key: 'cdf914a3bcf7a84ebff29b833834dec96a2d0b7f', class: "table-container shadow-md" }, h("table", { key: 'e8dcf9152e214bbed5e8a3247817c41c8a9545a3', class: "table" }, h("thead", { key: 'a2df4b0ad86c1389e11373662eb55a437d2700ad' }, h("tr", { key: 'e5ac665d799d0baa663ab337930d74278fbe55e8', class: "table-header" }, h("th", { key: '35c4143027e57ccc32f800d14eddf6b13355ff26', class: "table-head" }, "ID"), h("th", { key: '85cf973ea16ce6e6e91489bc1b6293fab1c219e6', class: "table-head" }, "Name"), h("th", { key: '59dcea77eab1ff2b5e113a3d11196f5ac9e42b04', class: "table-head" }, "Email"), h("th", { key: '9d083cc4a308387a1b524a4d03daac2bba86cf2e', class: "table-head" }, "City"), h("th", { key: '5f6a08b14e18556d705a450a8cfa61d89de0b5d0', class: "table-head" }, "Country"), h("th", { key: 'a19132f86eb76123ef696147412e1481a28d6c5e', class: "table-head" }, "Zip Code"))), h("tbody", { key: 'e48d82f5191d94c690f2ea067870f4b9ffc714aa', class: 'table-body' }, [...new Array(10)].map((_, i) => (h("tr", { class: "table-row" }, h("td", { class: "table-cell" }, i), h("td", { class: "table-cell" }, "Name ", i), h("td", { class: "table-cell" }, "email", i, "@example.com"), h("td", { class: "table-cell" }, "City ", i), h("td", { class: "table-cell" }, "Country ", i), h("td", { class: "table-cell" }, "Zip", i)))))), h("div", { key: '13c72463a93e09a18c5012bd7050cec414fbdc8e', class: "flex items-center justify-between px-[20px] py-[16px] " }, h("ir-button", { key: '1456f3b6d163036403edaf3f34c4e97ca4ae7f5c', variants: "outline", label: "Previous", haveLeftIcon: true }, h("ir-icons", { key: '74a010bd34cb3499ba27fc8771dd08b893cc5578', name: "arrow_left", slot: "left-icon", svgClassName: "size-3" })), h("ir-button", { key: 'cc456041c79ee2413ed9faa35abe05ab7fdc9ed1', variants: "outline", label: "Next", haveRightIcon: true }, h("ir-icons", { key: '6645c231d15e0f410855e65172b93400c97fbfbd', name: "arrow_right", slot: "right-icon", svgClassName: "size-3" })))))));
    }
    static get is() { return "ir-booking-listing"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-listing.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-listing.css"]
        };
    }
}
//# sourceMappingURL=ir-booking-listing.js.map
