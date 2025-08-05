import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: '2095ad61e38a5e7cdce9a44ec66d33317623aec2', class: "legendContainer pr-1 text-left" }, h("div", { key: '0d85f37c7fdfb6aef31de12014329ba8330b903a', class: 'w-full' }, h("div", { key: '85846211649baf493f46746d0b96d3e6ab95a1d6', class: 'w-full' }, h("div", { key: 'bdb5676d30b38d9da126c3ff3bc8c5f5b9ac7bbd', class: "stickyHeader pt-1 " }, h("p", { key: '50df8974c6e8f1a5dc4bec5274e0cbcd234f4b8b', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '26246e7aaa339064af8d02c96a8c00860dd3b719', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '59d289c25e5900796e9192bfa6d6606c6440dcae', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '279f3dd300c61a07eabba3c9a2ddc833ee481881', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '7582ddc55925003b9180484666af666fd0a4e6ae' })), h("div", { key: '91df73f41832d4b8748143926069fe285f4376af', class: "mt-2 pl-1" }, h("table", { key: 'dd754219a23fdce1368afb89964cd2da4dd3e632' }, this.legendData.map(legendInfo => {
            console.log(legendInfo);
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { backgroundColor: legendInfo.color } })), h("td", null, h("span", { class: "font-small-3" }, legendInfo.name))));
        }))), h("hr", { key: 'e8d4dc2a927c585194d803f93e2d00d5c3443892' }), h("div", { key: 'c0f6e5dea10693b99f67cee1410a24a222cca205', class: "mt-2" }, h("div", { key: '23222c146c739d45280ff4948d036aa7d0b359d6', class: "legendCalendar" }, h("div", { key: '23caa923ef9e3ab130bce65e5a82bb9cf1fc87e9', class: "legendRow align-items-center" }, h("div", { key: '557f5a803aa8006fcd756b1208e0eb7524b8a439', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '6f0fcfce9a9959d3c3e3f22a6fcf5e14b706c7b0' }, "MAR 2022")), h("div", { key: 'd2e711b6e89e4f2a202643f0f18d79f0d697d396', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '6fb38bf0f94d2adc84aa49f7fd7d310e773740b0', class: "legendRow" }, h("div", { key: 'a71f79e00e1c30e20a08eb97135b9cd3eedda618', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '55d7d3b1074f66ae42aba501195370326f1928f3', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: 'e4c0d3d1f91c2a34746e6f52df4ed931e21da195', class: "highphenLegend" }, h("div", { key: '03be88f3ed228d0a8bfb4a23ca614476731e2880' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'b07099d143d8fa3d730d0b1a87be330208900a1e', class: "legendRow" }, h("div", { key: '13bc3621222d62b3e318fd1206cb6e2a649d2460', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '341c5e2072743eee65e5642b45eb3a427d2a224e', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '598a75eda2006a18f27fd4c4324fce68d53475b2', class: "legendRow" }, h("div", { key: '5029721ba51bc3e7bfe5aa14e8a2556b8eea8799', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'b98aa370434bb42d1034c3c313a258f84f88addc', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '24675011f52f9bd490db133d4b1aa5d9e38b3c0b', class: "legendRow" }, h("div", { key: '1c4016fd494906fc62f1e901903133c7937f71c6', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'b12bca4565ce90351d97f185574573375ee0bf30', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
