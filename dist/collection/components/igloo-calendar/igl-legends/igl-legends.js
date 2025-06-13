import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: '96c79d8051f61106da3da8a8c101d497a7899f49', class: "legendContainer pr-1 text-left" }, h("div", { key: '0d525247cf46f0873454a5700712170a9c24de67', class: 'w-full' }, h("div", { key: '5bb234cd871afcd689149f5e72dd1fbb8c5bce5b', class: 'w-full' }, h("div", { key: '4ebbf92d46c85e1e0072df34c6de7aa8d4409fd8', class: "stickyHeader pt-1 " }, h("p", { key: '448fdc60f91d5f9870cd5d7a194b34bdea8f3bf9', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'b0c551f75ec3f3a462fb546a4038df99585fa23c', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '3d751b38fb8a0bb742a9c0a4d301b7163d3fb07f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'fc40ed39b1f0434367487099f6440831021ecfc4', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '944b6d5c297d0123d3084377392cc8c8a5ff8c0d' })), h("div", { key: '0bdf3b642a4ec3e5d8489a0a3bc61a762a8fbd62', class: "mt-2 pl-1" }, h("table", { key: '3bad2be7b8679a1f0ace5119e9a42376420d98a1' }, this.legendData.map(legendInfo => {
            console.log(legendInfo);
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { backgroundColor: legendInfo.color } })), h("td", null, h("span", { class: "font-small-3" }, legendInfo.name))));
        }))), h("hr", { key: 'f71300d3e09a319c93304475b90dfbe35b007e1f' }), h("div", { key: '2ad920983fdddded2c8721552f214e22d4ce7542', class: "mt-2" }, h("div", { key: 'cccae5e6462a47593270c2d53952e6dea07c5b9f', class: "legendCalendar" }, h("div", { key: '9252eded99ae486b100730097fdb22113b824406', class: "legendRow align-items-center" }, h("div", { key: '38a3eec788e3b5b7aeb03520c194a9c977b9ffaa', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '0fdca1e54b98725722f329010976e4952cf88e63' }, "MAR 2022")), h("div", { key: '383149fae67cd91309e6fc53ec5fbbad42e8287a', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'ccbd578512a2dba03ffc76758aed646342b2155d', class: "legendRow" }, h("div", { key: '28d5517eae0ad830c55e98bcdbcb1c03548fa503', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '256a907c10503ce23a29cea0faf43ff0e6df9f58', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '643a86bfc555de555284459c05eb41ffe85519a0', class: "highphenLegend" }, h("div", { key: '469c87b066275e845295ef686a0c51e96ccb296a' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '47f2474d21f5ac14b13b5b9445543974901b0a3c', class: "legendRow" }, h("div", { key: 'f667b78b8ed3d72b2ff3f4def933fe68a17f7b00', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '5cb8a232424518fc0d4520349c1168b58a8af5bc', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '2e4b1058bc2ee1a63d129fd3e33712e40c437299', class: "legendRow" }, h("div", { key: 'd985f067ff72e096d6fbe5a6bddc0a26346f8ff7', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '89f6a7428f8a3c435b52587af6c3db53a1a3164f', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'fbe6f89480e5fbd5f54f6d839a85bac43129f08f', class: "legendRow" }, h("div", { key: 'f26a411e42bee2247f097566cbb966a3b3b0087d', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'cdb2d30c8b45d396224766b85629fb0669843eff', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
    }
    static get is() { return "igl-legends"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-legends.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-legends.css"]
        };
    }
    static get properties() {
        return {
            "legendData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get events() {
        return [{
                "method": "optionEvent",
                "name": "optionEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=igl-legends.js.map
