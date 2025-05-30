import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: '96c79d8051f61106da3da8a8c101d497a7899f49', class: "legendContainer pr-1 text-left" }, h("div", { key: '0d525247cf46f0873454a5700712170a9c24de67', class: 'w-full' }, h("div", { key: '5bb234cd871afcd689149f5e72dd1fbb8c5bce5b', class: 'w-full' }, h("div", { key: '4ebbf92d46c85e1e0072df34c6de7aa8d4409fd8', class: "stickyHeader pt-1 " }, h("p", { key: '448fdc60f91d5f9870cd5d7a194b34bdea8f3bf9', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'b0c551f75ec3f3a462fb546a4038df99585fa23c', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '3d751b38fb8a0bb742a9c0a4d301b7163d3fb07f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'fc40ed39b1f0434367487099f6440831021ecfc4', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '944b6d5c297d0123d3084377392cc8c8a5ff8c0d' })), h("div", { key: '0bdf3b642a4ec3e5d8489a0a3bc61a762a8fbd62', class: "mt-2 pl-1" }, h("table", { key: '3bad2be7b8679a1f0ace5119e9a42376420d98a1' }, this.legendData.map((legendInfo, i) => (h("tr", { key: `legend_${i}`, class: "legendRow " }, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { backgroundColor: legendInfo.color } })), h("td", null, h("span", { class: "font-small-3" }, legendInfo.name))))), h("tr", { key: 'c97e58e3a6fb9b5b43bb26af09a3e8aa8c36cbfb', class: "legendRow" }, h("td", { key: 'cb805f90095875636dd572add86b2b6409ec50cf' }, h("div", { key: 'c35ab53a751177755e4722f1b62100dd52f7fa44', class: "legend_cell mr-2" })), h("td", { key: '231682f5ac6a0ca1c3061255bad13c4a9e9d8afb' }, h("span", { key: 'aae9a607d3cf78ee1d44ea298b3b212448abe85c', class: "font-small-3" }, "No availability or stop sale"))))), h("hr", { key: '4a0b6312cbccfcb371c324322c22ebfed39fff11' }), h("div", { key: '2730fe8a12414bb76eb9abeb9ef180a455292442', class: "mt-2" }, h("div", { key: 'a565d95e04f227308f37cceb873ee1095e8b2ae9', class: "legendCalendar" }, h("div", { key: 'cafa5a0179961327c1c32b73f6f2689a82a6e15c', class: "legendRow align-items-center" }, h("div", { key: 'a38d33e517555a38c617fee35deecbce3ac79613', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '5c9670104c339d0d950ff3f4f39c7244dc5b4167' }, "MAR 2022")), h("div", { key: '914aa37d9e6d9fbf544a1ddfd16237dec31873d5', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '56683d169cd5618b024e70d58ae65090d4142365', class: "legendRow" }, h("div", { key: '4a13338a3fe9697ae8a89e97fa600da1278e8b91', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'a91d73363ecfda71a14e31a6d4e19df5b857b0b6', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: 'ab41a007e7ba684dbf1f8a70fb8bb81f2d171808', class: "highphenLegend" }, h("div", { key: '80dffd0bf35cc24cbd843336e5d8768bdbabcb5a' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '6c93b94b89f57e28228f704e24e5cc06562c1621', class: "legendRow" }, h("div", { key: 'c7a20d730af9362f4f9941d5f7388f09e43b712b', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '3ce4047e47114bf9e9731301d83fb68db32ec7ea', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '933f7170b1758e60683b572c2fbf44368f940650', class: "legendRow" }, h("div", { key: 'ca08298ce5d9d16f0a8f8e7395863a3e66627ceb', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '0bd3588f196b47651285b47511c3583051591797', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'edf8a3a8cba698863b1c59b911f49c35acd39768', class: "legendRow" }, h("div", { key: 'eb077b44837a94a5ca6898784efe835cc7146974', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '3099575f593ec0b6c7a3628f9d09610cf0d5aafc', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
