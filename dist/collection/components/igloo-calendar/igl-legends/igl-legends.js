import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'fd3b2c0caca6f43b13cb2d837c04d8fb87ccb2b5', class: "legendContainer pr-1 text-left" }, h("div", { key: 'e051a89e73cb33823b632a302c2f5762ee39e4fb', class: 'w-full' }, h("div", { key: 'db5c339fe7c4458c99fb6b0dc0a398ae7e0a7b2c', class: 'w-full' }, h("div", { key: '109006e3981968ad9748b4897a28c76885b05fc4', class: "stickyHeader pt-1 " }, h("p", { key: '4878c167be8c1095d0b2a8181f5267a72b7e0ff3', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'c1b4dd5e873ff1ee55ef010e58003db9b97882f4', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '54edcfa6d4931bf1b6785ad59fe3333d13da5743', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '6a43413d4af83f2fd29677e0b7823e98ed5aafeb', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '2cdc34b847033ed597e3428d40d120b1fd689d7d' })), h("div", { key: 'e44b1a640e446500e2ab5c1699d161164e76fe4c', class: "mt-2 pl-1" }, h("table", { key: 'f71417c3a7d3702c52b5b394b5dc6ea0cb8d7921' }, this.legendData.map((legendInfo, i) => (h("tr", { key: `legend_${i}`, class: "legendRow " }, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { backgroundColor: legendInfo.color } })), h("td", null, h("span", { class: "font-small-3" }, legendInfo.name))))), h("tr", { key: '99dfa819d97123a01dc5fbb105b56e96292ea52f', class: "legendRow" }, h("td", { key: '51f9ae5675052a02c7eeb687390456ac3b333994' }, h("div", { key: '414c9325c3ea4c8432601eba007c392a9306fb42', class: "legend_cell mr-2" })), h("td", { key: '6deac55865d0532b9e2a72cca7c2c055f990804e' }, h("span", { key: '0a9b7ba00bbb79fd88794917c842ac55a962ce8b', class: "font-small-3" }, "No availability or stop sale"))))), h("hr", { key: '4861827fba10ae59b27bfae927a0f0e698a30d93' }), h("div", { key: '83feb129cc85697b8cc23aaf1bd369f895c0285f', class: "mt-2" }, h("div", { key: 'ca59cba6dfb8880c64fa7f6bb156c2a06bae904b', class: "legendCalendar" }, h("div", { key: '78812258d1d654df4c9052b5fc80700ba0871931', class: "legendRow align-items-center" }, h("div", { key: '16d565600ec2f8e81ad24ac628f1f591f6d9dc46', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '04e705a9e67374146b48a65b2ce84e0f19ae938c' }, "MAR 2022")), h("div", { key: 'ec55ba0eb93270fdd2ad50d5b32abf8a4ed73ee0', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '8a751f30361fb7a45a651221bfdda6810cc42607', class: "legendRow" }, h("div", { key: '0ad978b5e83af1505f10f90748e29efbec909c26', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '096a6daae124a157be1c5bfa1c06a9f99664c9b7', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '2b1b85c89de3cd24425125fde77555cd70070284', class: "highphenLegend" }, h("div", { key: '33f2416d95f03ddf53546e73f39107198718a088' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '8bee768b3514fe15baa12cfd6700d38b581bd71d', class: "legendRow" }, h("div", { key: '63bac30bd100ae0784c35b6354b29cad7f341fd2', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '49312dd5127460f8c3c9015ce9051a726955b2bd', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '428bb1e10949c5168acaee069b4227e1c700ff58', class: "legendRow" }, h("div", { key: '69258390c92930caa4d7c2c1847e6b8733a3c39b', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '73635db3c66900615a297fae7b2c0e7a3d0bb311', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'e15ecfbb18e440bcdca5ae3dada6b4e8ac1cd808', class: "legendRow" }, h("div", { key: '244759832fb553803a2b86113f7ee77f9e5a9445', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'f199e194f6944ad98f1f74a8c4b3df1663d1d851', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
