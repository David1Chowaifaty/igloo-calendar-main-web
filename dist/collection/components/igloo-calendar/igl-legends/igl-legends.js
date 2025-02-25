import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: '9f1bfb9eb2fb78c282eb9b0aceff295c781ee0c3', class: "legendContainer pr-1 text-left" }, h("div", { key: '7769c56cfa9d5e29befce9ea60dc37a8309cf3ce', class: 'w-full' }, h("div", { key: '32e694b129172d37fefb4caf89cf3e4e26140d96', class: 'w-full' }, h("div", { key: 'd321d164c53ed05014118b1c56498a517d56545b', class: "stickyHeader pt-1 " }, h("p", { key: 'c362f96073784041d975da89de0c98e65b797355', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'e2ca52852002deb0506cba3ead19e4a6580bd5ea', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '0199412c97e81e1b03a3b0a9b3191ee8a7f53208', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '32a921297e31ad7304f72a5ae64b5cc13473d683', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '30d4e92f31f203acc6a746663d6ea3064853dea7' })), h("div", { key: '57a408bfa2c961da6a61e62b0d1c5e7b013a8fb9', class: "mt-2 pl-1" }, this.legendData.map(legendInfo => (h("div", { class: "legendRow " }, h("div", { class: `legend_${legendInfo.design} mr-1`, style: { backgroundColor: legendInfo.color } }), h("span", { class: "font-small-3" }, legendInfo.name))))), h("hr", { key: '55776886224a8c0d997b037de2468b4800f504d7' }), h("div", { key: 'fca29a2e8b85153a6680c0a80bce3f6ce68a81a5', class: "mt-2" }, h("div", { key: '6eedc9c5466acdcfcab1a977695a801d54412223', class: "legendCalendar" }, h("div", { key: '0d45f47867c39c15ff78cf3de1078f0832245eed', class: "legendRow align-items-center" }, h("div", { key: 'c57e6881b7319655e476c130e4270b27821ca999', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '79d69aada969cd6f0dcc15239764a21f2532f53a' }, "MAR 2022")), h("div", { key: 'e93365597b0b6a9b528f90fe3e9b7684d4e79615', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '1f46894670752e0d65efad1d9c48e901be66b438', class: "legendRow" }, h("div", { key: 'b264465b1af94359028544b7b73df364e129cdee', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'dd5326b6a68e7ecc39af27f7af33a21d65418ed6', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '5594515413ec1c70705bb902f13fc067628a66de', class: "highphenLegend" }, h("div", { key: '6026acdb8fd79110025848fa48b68f496d1e507f' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '02f46a10e3f3811943f90daa20d7c1c901f2f6ae', class: "legendRow" }, h("div", { key: '024a3c4f18742c8f7d3158eee50b5339c1dec64c', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '2af3e34c829600da85eaff58c52275acd0285020', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'a7077d29710d5a64549bc04b0c6ea2e1e800db63', class: "legendRow" }, h("div", { key: 'f75c6d15e5741715fcf6826f2bcf35c733c2221a', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'ebe0baef3a86950e38fbeb6e7ef2560302d80c38', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '0d4b72f643ddcbaab2bcfcbe37aca6e86e1fa944', class: "legendRow" }, h("div", { key: '8850b1e952e830bb8dc2c3d7766e310548082137', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'd9db0db301bd0b0e79d515594cae1d922a20f7cc', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
