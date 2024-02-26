import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    constructor() {
        this.legendData = undefined;
    }
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: '03c6388fb05feb12ed4231f0397b384d40f7fbf1', class: "legendContainer pr-1 text-left" }, h("div", { key: '296f50a891a18a1b26513f5e7768f01021927481', class: 'w-full' }, h("div", { key: 'd9902c78c380a58611827b70d15a61edd59a79f0', class: 'w-full' }, h("div", { key: 'e4ff8dcd48f9b89201553b6090bc1c1182cdcaf4', class: "stickyHeader pt-1 " }, h("p", { key: '31237556aeac24946d42e27d24fced250b5b75df', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '63070b998141d30e611aacb783004e8423052ff1', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '9fb10f55a1885e8dce15e444becedae0931198d8', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '7023bfae94f15e484e49d15380ea19d714edaec1', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: 'ab708dcf3bc15c0385332d0ca324a7039ee697f6' })), h("div", { key: '040fcd2a1ef8564317ad5d2839cfe1b0351756f4', class: "mt-2 pl-1" }, this.legendData.map(legendInfo => (h("div", { class: "legendRow " }, h("div", { class: `legend_${legendInfo.design} mr-1`, style: { backgroundColor: legendInfo.color } }), h("span", { class: "font-small-3" }, legendInfo.name))))), h("hr", { key: 'b2cbbbe5f7975b504a3130616fd89fede10b9598' }), h("div", { key: '4878ae7fb62b228f3cc72284fd2c2ced21a62d3f', class: "mt-2" }, h("div", { key: 'ae4d1eb4e1624544f893243920082605c4e4b7d8', class: "legendCalendar" }, h("div", { key: 'ab322917954d1f71c9f47716b020c1608da77540', class: "legendRow align-items-center" }, h("div", { key: '41db285503591adc33fb389b17c09430c62f275e', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '19918594fdb715a35356fa0890641b376d9ca8a9' }, "MAR 2022")), h("div", { key: '825af840b94aeb3d644b7f75ac773344a8d8ff3b', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '8bc876a9e63346ed734d1e8271a7668f867cb2de', class: "legendRow" }, h("div", { key: '2943ea3f0878bcd8202e028ab8e4495c3d6753b0', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'd35d769ad56e87072befab02c5e4da31dc5d9a50', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '6c143daab2bae4c4cfec846d8cf26e7e3bc10e52', class: "highphenLegend" }, h("div", { key: '9e2cd25e661e843dc50dae8b4d5b2bbc1ce17052' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '27b35827e251a2aa8585b0c36d1034b34b4bd1ec', class: "legendRow" }, h("div", { key: 'ab11c17088c22ea86de99262477adaa99b87fb21', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '9959481e5d1f5d89e90caac5b3d71b007b568b73', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'c47b1060f1038e57a2e9ce27dcf0a57736b9491b', class: "legendRow" }, h("div", { key: '6206ca62c9f6afbbb904acbf7eaa4b0c603fabe6', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'e016d2c232e6a0466b8734afa6db081627a3a74f', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '1cf8b8680d3ed599044effc195243273148f3d32', class: "legendRow" }, h("div", { key: '182a1f8cf5acc4bb307f125ddb8a6f2d21800a23', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'f339a5838483c6530f898925f71366542fe4beb2', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
                }
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
