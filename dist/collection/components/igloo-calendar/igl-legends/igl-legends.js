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
        return (h(Host, { key: 'cd1ce037d45cfa2621c52bf3530266d462b19bab', class: "legendContainer pr-1 text-left" }, h("div", { key: 'cbcf33535ddeaab4bfa26d4f859fb4417647c37a', class: 'w-full' }, h("div", { key: '9444092aa3e9c9efa0f97edc2f85c7f54c063c88', class: 'w-full' }, h("div", { key: 'f13eb8c439ba64731af58d23dad4e70ecf0b3003', class: "stickyHeader pt-1 " }, h("p", { key: 'f31e11aa43cefd8ba00345b02c2bb9536c990c14', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '5e71fef2e9725fea8480b1c72455739032c43666', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: 'dcdb5ffdeee2466f3cb5efe001df409366f99b69', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '5099c2dad4cdfb001780591c9f3d99367d125667', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: 'aa6e6a8c2e643ee3902503194a5f0ada5b052468' })), h("div", { key: '823c4bf38acf5557c8ffab5ce311c6aba5e4bfa7', class: "mt-2 pl-1" }, this.legendData.map(legendInfo => (h("div", { class: "legendRow " }, h("div", { class: `legend_${legendInfo.design} mr-1`, style: { backgroundColor: legendInfo.color } }), h("span", { class: "font-small-3" }, legendInfo.name))))), h("hr", { key: 'a59d39e146c3a50b13902ff7ca9c906774cf6004' }), h("div", { key: '0f5d9b45ace3b886a3d513b7b5dcab851cce6069', class: "mt-2" }, h("div", { key: '0cc83a943e07eafa4fe0cbbbffc0f409c3551063', class: "legendCalendar" }, h("div", { key: 'b2c3d84094efec784361c18c25c3bf548a8f81f2', class: "legendRow align-items-center" }, h("div", { key: '1a63340d81abd4896ee134520be4d4954502969a', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'c1947700837ac9d4130a6d33413c1f3767192c1a' }, "MAR 2022")), h("div", { key: '23be3f08cdb8bb17619b75e789d5082a78f2dbf8', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '6de24cd9d3a59b742f04426c18373008811cef39', class: "legendRow" }, h("div", { key: '75a19f789a270beea39cc8b5e1c49351436b6f68', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '47b04988084194cb6fb45c11beb5381ea5a5ae47', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '42754444adad17cc9692c3d6df6caf1a3e9aabd6', class: "highphenLegend" }, h("div", { key: 'fb2dc0dde56d598e83ee5a76146c508a58888407' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '83624b5fcd30adfacde9d21a10f147a22e58867e', class: "legendRow" }, h("div", { key: 'e24303aad5a2e5861d2ebb45ac39201e7a09a564', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'b0d8cd58610dd9763c1d9e8993ea1f4eebc0fbc3', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'd802e33f9848eaab658093501a9e15c07e9f9747', class: "legendRow" }, h("div", { key: 'b725ad06a2a414c4a590826dfe68a7bc0d28522c', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '2ec005b55f7ffa5b439c9c4b5b60438fad5a0a05', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '104e7a17b7b9baf6a90821901a86ea7867a44c30', class: "legendRow" }, h("div", { key: 'ad3e7a2de4d5ebcff6e8a212a78c3c57de8af8a9', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '29fc955c1fe2776ef29e2d4e93ad20e3be184392', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
