import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: '634a144d0a5580a75c14b56237b90e5ac9843bef', class: "legendContainer pr-1 text-left" }, h("div", { key: '3736132bf7232eef8451b050eba23ff4c728c0d3', class: 'w-full' }, h("div", { key: '442f4e7b996991670d4515da17ec481435f35bfb', class: 'w-full' }, h("div", { key: '66939d01e547b1efb943ccd19bfc9ba7ca3d114e', class: "stickyHeader pt-1 " }, h("p", { key: 'eb79c743cd67ea32a2800542663603c30e415a3a', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'a108278bc10b8f08d4a90647846087ab14d483d1', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: 'e8a6f85a920274550ddbef6e385d5f57f4ad44f7', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'b156e0b05962aef40416a89505b757dbcf9d8edd', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '1cf672abd16eb14c0c422a1db35d3907bec56001' })), h("div", { key: '6bfe3d972081835dac3dafb70ca29b6f640e225b', class: "mt-2 pl-1" }, h("table", { key: '39204dba23fcea9ed540cea348f188e5b62b42bb' }, this.legendData.map(legendInfo => {
            console.log(legendInfo);
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { backgroundColor: legendInfo.color } })), h("td", null, h("span", { class: "font-small-3" }, legendInfo.name))));
        }))), h("hr", { key: '39997dea254afeacd3f129c6d1f89bc9d92a246f' }), h("div", { key: 'dc184c6254f1b5707cd238c51fe87a392cce90cd', class: "mt-2" }, h("div", { key: 'c41233feec7649ef2aabab262d077a483388945d', class: "legendCalendar" }, h("div", { key: '4a35a6116e000f5b223c565f4c0a10b2a98c9750', class: "legendRow align-items-center" }, h("div", { key: '13333fdff20a5c46c8119c7cf76e39237a65d1c9', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '20eae65119ef67767f3e9512c42d8afdc8b5a9df' }, "MAR 2022")), h("div", { key: 'aaefce1df33a31cf3581ca1ca12fb9dc50aabd74', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '242cfdf169b3267b9064dde1480a94b4d6f622ee', class: "legendRow" }, h("div", { key: 'b606fd723b961bec15964df6484162be677a9bc2', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'c615cf58783218be436588bfac1f2de2be32c74a', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: 'f6093b4c48b7316ddee2322acd9c45d29e0f001a', class: "highphenLegend" }, h("div", { key: '17255b9bb2a07704087486393ff8b20a4d80ba2d' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '0f2f03a1c10ab14ee4f78455359d2e96fdf92903', class: "legendRow" }, h("div", { key: '2a1d2a82a95b5094dc525a030ac2ad122ca59309', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '331182ce4d3022598c8587f2ea6dc779c0b2a6ff', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '7b961e4b7945e711f1debbab4ccb44f8ea4dacf7', class: "legendRow" }, h("div", { key: '60f1afd3bb68e0137d48948ef5838883d78ce7a9', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'deee58533f714f0ccbbab5435ecfb49e2f5115bd', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '0784423c3984114a308333b54b9c9f9e58cb1fd1', class: "legendRow" }, h("div", { key: 'bc3161ae34e0954a2dba71517eaa7e38b8f44be2', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '60b119a455576f175a62139f3af69c95866ff68c', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
