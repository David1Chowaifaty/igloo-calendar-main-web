import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'e1ce041cc1ac885d5026b2a35194635e9422d978', class: "legendContainer pr-1 text-left" }, h("div", { key: '882ea80551f18e16d9bc59bc7e9d50427470abcc', class: 'w-full' }, h("div", { key: '61dd618de8398c57ad8aa8e82a4e41098c7dd1d9', class: 'w-full' }, h("div", { key: '6cc098cddbe15f6b863fd6c892528dfca5698936', class: "stickyHeader pt-1 " }, h("p", { key: 'c687057ae10b151fb4786dc88e4d6c4a698d91f0', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '72f12670c7c003b24462ab170a3d3fe0694649aa', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: 'ffc01566f2a9d7560e654d36730a039253f3b609', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'bd527ef8faa77a53d00c72b880190fb1a0d3b553', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '14489453ee412d3dd02a96e9a3f7663d8b2aa27c' })), h("div", { key: '13d98b348b6fbf999a10a7e6f8edfb30a0a23206', class: "mt-2 pl-1" }, this.legendData.map(legendInfo => (h("div", { class: "legendRow " }, h("div", { class: `legend_${legendInfo.design} mr-1`, style: { backgroundColor: legendInfo.color } }), h("span", { class: "font-small-3" }, legendInfo.name))))), h("hr", { key: '7468164ce23e2ded9a244b9586abd0ec459665c5' }), h("div", { key: 'e8aa9295136b48efb9583a201508fcd9ea5bbd01', class: "mt-2" }, h("div", { key: '71e4b6e834c4bd6ff9642af29339096d235b9ea7', class: "legendCalendar" }, h("div", { key: 'a15dc9818cb1e2b37085a138dedb269db9a961f6', class: "legendRow align-items-center" }, h("div", { key: '9f17821980bb6d3831e84a480ba0fc74c5db0839', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '61d9c0216f25054e1648f89ef6bb0f00bb4eb05e' }, "MAR 2022")), h("div", { key: '8c9d56564d23958ffcd182a70f6e7bc4866a392f', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '9ac744560e8cc95bc7fb04a0b761dbabecc71a9d', class: "legendRow" }, h("div", { key: 'f9a75578773b34015e00a1525de844d7d0ef6fb7', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'a7e455b4c1d49237a8cf58a70666930cf128b604', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '8c4536beea66e132b249214c7030ce5ee63d7665', class: "highphenLegend" }, h("div", { key: 'f9e04e681c83785492a3530b5725092b6ae43d6e' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '5bfdda7fc83d6e6480a44e28752c03d18eaf44bf', class: "legendRow" }, h("div", { key: 'f858845fbabcad79e026955e319b2161c0325979', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'a8ab4b381e766bd9383ce739325313a27c03f304', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '9e595fbc5b2e827ad96358e9511f466259fb3d77', class: "legendRow" }, h("div", { key: '3032cb2ba50f6d20424836b054c7d81d2104f6ac', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '84e8f6b5ef374d2be4ab4655a9f39224bb354e20', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'c181700514d2b75654760105babd3803a4b90dab', class: "legendRow" }, h("div", { key: '2a3435485a7f356df8465c3b01eee9dff955449e', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '06063900c9a14fe104cf988a912c6236bac3309b', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
