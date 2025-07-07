import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: '09a4b45323e60e75ab06593109177a8c17a43265', class: "legendContainer pr-1 text-left" }, h("div", { key: 'e0ca0f6f5c624bf39cc0a844bcd2834fc1565744', class: 'w-full' }, h("div", { key: '2c89d5630c90d063831fc07b90b312856feaad59', class: 'w-full' }, h("div", { key: '96d4ac5a377ee2f7a62c4128447cecd4b5ba210c', class: "stickyHeader pt-1 " }, h("p", { key: '48011fbe62c5eaddb2a151ff7b49fab85f354671', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '890f08a1b4992a2c03bac71595f0e3d2117c3be6', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: 'ca85669675d35a45f8a1bb6f4b050ce41d1f109b', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '6dddafb574590b336ee75d42d076bf9bbfc775c4', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: 'd1572d48153f894cde8195d4e279f2bd30779ffb' })), h("div", { key: '5a78b5162409d45472092f55512771e66a5da6fd', class: "mt-2 pl-1" }, h("table", { key: 'd7d872754b020f14f061a4289378b2d96e209499' }, this.legendData.map(legendInfo => {
            console.log(legendInfo);
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { backgroundColor: legendInfo.color } })), h("td", null, h("span", { class: "font-small-3" }, legendInfo.name))));
        }))), h("hr", { key: 'c4acf53f76e8085c45d8a992355fa09f227ff2f4' }), h("div", { key: '5997b5546b478373bf1f863f840bd1284f5439d6', class: "mt-2" }, h("div", { key: '3d6ca4db3f74c411326c3ac464b235f2ad636d1e', class: "legendCalendar" }, h("div", { key: 'bc54e5e10d034bcf2a51f530922d6201a9759446', class: "legendRow align-items-center" }, h("div", { key: '11a3a8d47bd42c188014ff0187813849d0464968', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '34fcce814de08683456bccd10f1ea3c4bf54bb2f' }, "MAR 2022")), h("div", { key: '8d0aafb64f67a6761ce87349af1ff94cd14b3923', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'ec4816ed54aae3294bed7bb2d7ae68196a138a3a', class: "legendRow" }, h("div", { key: '295c29eed70648491a36ca173845edf0450b2f57', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '8732635402c8748825939e95916ba31212c56b90', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '0ea41889d3b2573fc29844a2ec562b3f7fa10862', class: "highphenLegend" }, h("div", { key: '524b8cdb9935ca883e016299ed2661ff9b92635c' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'd33803755544ebd3cceef25e71e9c96ad00bd05e', class: "legendRow" }, h("div", { key: 'f7673904dfc5f746f367bfeb1d745b50da335436', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '8043650537fd2541705c239951f2094034346ba9', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'fe31bbab45adb3901200c20089feddbc47118e6e', class: "legendRow" }, h("div", { key: '144304a944c97286bf2c22b9427bc1b010f3f4f3', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'bb51ec64bacac8928770a1e37d6b433767a5532e', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'f035baeaf4801292a0fe1b065426f84a2769400b', class: "legendRow" }, h("div", { key: '9df11207273122edbd4faef31b8bdfdd7641478e', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '3d101ef9868441df7b5670a8243e9e750b8f302b', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
