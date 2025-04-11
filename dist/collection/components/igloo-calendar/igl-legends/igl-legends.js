import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'e5dd327c1cec35f7160f03d57249be41a92d0ae9', class: "legendContainer pr-1 text-left" }, h("div", { key: '174d9d9ef96f6750105eccedf708e7aaff2c34ad', class: 'w-full' }, h("div", { key: '73199c192d3b1fda640218bed073f85f30bae390', class: 'w-full' }, h("div", { key: 'b543b5a5d8c78bcc33ce7869f676aaa2a8782fc4', class: "stickyHeader pt-1 " }, h("p", { key: '8a9fac4840f4f620355e878ac5c98dfc6274b326', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '3a9190ea5d27bce17183bb69fca8c82bbb6e2056', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '0bdb80374ef30fd7f32e6dcee052f1ea8a274738', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'a2f102616a8f9bfebdfb7845123f55af7bf81108', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: 'b3699e555190bb1c45c14a46c2c16a620ebcd9af' })), h("div", { key: '6975c0c7bec1b4a398578cd6fdab028b02de0a42', class: "mt-2 pl-1" }, this.legendData.map(legendInfo => (h("div", { class: "legendRow " }, h("div", { class: `legend_${legendInfo.design} mr-1`, style: { backgroundColor: legendInfo.color } }), h("span", { class: "font-small-3" }, legendInfo.name))))), h("hr", { key: '1b8f13775ea8cbe35bdebf4716d8f8d995bcb4f4' }), h("div", { key: '8c031e14291be7fc0e3ac45d2fd0f492855ff9ba', class: "mt-2" }, h("div", { key: '393781e27087e6985ce809f0c00abb0de9e0840b', class: "legendCalendar" }, h("div", { key: '485bb5b0d9b01eaaad30e27f69812380b18ff652', class: "legendRow align-items-center" }, h("div", { key: '3f13c9c1d459c79e6bba481305ef1fb4184e332e', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '9f7a4054bfe1c0e7310b36a98100a4be62904e1e' }, "MAR 2022")), h("div", { key: 'd1dd2f64b1ffe5576848f8682d17972157ac7d1e', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '94cedc7c806e5e496bb0c5cfae8f835aa4526a7d', class: "legendRow" }, h("div", { key: '82afd1d6fbe2daf7b5df7615b644f57911fa92c7', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'd9cb328ec2380de56d73d485185a87277481d507', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: 'a52b3d808b22e5efec2df882faf6ad3a8843857b', class: "highphenLegend" }, h("div", { key: '86c18154812190b0f802df0cb8a82a51e5468634' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'c3df21e96e442c52f0505b39c6421398efc29a0b', class: "legendRow" }, h("div", { key: 'bbf881dad021385078f9c99d2ca8cbb1dba8d85f', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'ca710d101aa3ac3fe80a9d0c7488d3d45433cdcc', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '18b1e780a893359d13228e98b9e3b1c5b13ebb5c', class: "legendRow" }, h("div", { key: '126ec58c641d688ed4ccc079402bcf71cd3c936d', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'e5e7e062b3b91baf063a9081c2d0961e4cd54cf5', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '7b4b2e51235ac908b7f915e28f4383598a74b023', class: "legendRow" }, h("div", { key: 'b76b56cb2792151c0886665d7850837ff01d1676', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '0c380ebf9c858ffecfd3824c41610dac281839c8', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
