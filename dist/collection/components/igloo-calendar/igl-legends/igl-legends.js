import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'c74b3430fd623b4baf65b06fd1b04557bbe0adfe', class: "legendContainer pr-1 text-left" }, h("div", { key: '2267bdf927dbc9ca0bce05695620e7106ee8d5b5', class: 'w-full' }, h("div", { key: '14a405d7ebd91f1ee016a79cde1f59afb81eed17', class: 'w-full' }, h("div", { key: '0e419208323bf2f0adfb9c33e9772ddc5c838f84', class: "stickyHeader pt-1 " }, h("p", { key: '6e36821518ac21a39353dc6b7d680f0a7099710e', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'a4d9b271e281025a81e907c130a7ada1baab470c', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '4263f710bd4dd9762a2d75d413c63d9c29930e9a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '01663fed09eaacd685ba29546b1fe5b6d39d080a', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: 'b1f623144165d41d535c7445ccea40ce75e64dce' })), h("div", { key: '57cc7a82b704e455ebc8cd2a29e000273a7c16ce', class: "mt-2 pl-1" }, h("table", { key: 'a730e4dc78bdddcf547b4d4d915f2abb2ace5e5d' }, this.legendData.map(legendInfo => {
            console.log(legendInfo);
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { backgroundColor: legendInfo.color } })), h("td", null, h("span", { class: "font-small-3" }, legendInfo.name))));
        }))), h("hr", { key: 'ae5c585e66ec32f0b354260e71b56d28c9b90438' }), h("div", { key: 'b026c9e59ebfbd461bdf11d3cd009949d4a5526e', class: "mt-2" }, h("div", { key: '6693fbfba1b947939b306ed8496e96b51970409a', class: "legendCalendar" }, h("div", { key: '3eed3828e6b1b6012d130fa9f206bb80711f9eb3', class: "legendRow align-items-center" }, h("div", { key: 'e95ced941da00c8de445b57f0eb8239384021ebc', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '043a0812fea2a20551606a99a5058d16b5db3ad1' }, "MAR 2022")), h("div", { key: '17cbefb5a116d53256314eab0671e94180215ba5', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'a579b97fb77b20e01b07f690f71433f92ee05e21', class: "legendRow" }, h("div", { key: 'dd476b5b18aa093533288385c3ffbc5a21cbe364', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'cbe430914d48c06d6768145b6eb6dfaa5f6960f6', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '8b956214160e994242fa278fd25c2995fe677550', class: "highphenLegend" }, h("div", { key: '1743e0e5797bad237f969f3e9b36885f1e7ec2ff' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '80fb5f39af93edc4ce7f27ecf906363076eb18fe', class: "legendRow" }, h("div", { key: 'c65565112d324969f25315791e902093e2efcfab', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '3cffa4c1f716917b31c6c435d26e57d68740a139', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'fdc5ce2aec2c5a316c86fa7d491e647f4d1bf758', class: "legendRow" }, h("div", { key: '91953c8937228582066b1f5f1bb2d3e0a17d97e4', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '457ed078c456fde5b42e6f700bb9b5586a01e6a2', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'd10ae963a39d19e48ddcb283413c3ee46ea85f09', class: "legendRow" }, h("div", { key: 'a5a421f57bd1a9a47c11f360cbbd7dd09e6c8311', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '8bbe76b1838ac3a4e2ee4716e381ef17bcc59f1c', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
