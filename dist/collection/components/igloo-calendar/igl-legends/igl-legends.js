import { PropertyService } from "../../../services/property.service";
import calendar_data from "../../../stores/calendar-data";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    optionEvent;
    legendData;
    propertyService = new PropertyService();
    bookingColors = [];
    saveState = 'idle';
    saveError;
    loadingIndex = [];
    saveTimeout;
    disconnectedCallback() {
        if (this.saveTimeout) {
            clearTimeout(this.saveTimeout);
        }
    }
    handleSaveStateChange(newValue) {
        if (newValue === 'error' || newValue === 'idle') {
            this.loadingIndex = [];
        }
    }
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    syncCalendarExtra(colors) {
        const calendarExtra = calendar_data.property.calendar_extra ?? {};
        calendar_data.property.calendar_extra = {
            ...calendarExtra,
            booking_colors: colors.map(color => ({ ...color })),
        };
    }
    get propertyId() {
        return calendar_data.property?.id ?? calendar_data.property.id ?? null;
    }
    updateBookingColor(index, patch) {
        const bookingColors = calendar_data.property.calendar_extra?.booking_colors.map((color, idx) => (idx === index ? { ...color, ...patch } : color));
        this.syncCalendarExtra(bookingColors);
        if (this.saveState === 'saved') {
            this.saveState = 'idle';
        }
    }
    async persistBookingColors() {
        const propertyId = this.propertyId;
        if (!propertyId) {
            return;
        }
        if (this.saveState === 'saving') {
            return;
        }
        this.saveState = 'saving';
        this.saveError = undefined;
        try {
            await this.propertyService.setPropertyCalendarExtra({
                property_id: propertyId,
                value: JSON.stringify(calendar_data.property.calendar_extra),
            });
            this.saveState = 'saved';
            if (this.saveTimeout) {
                clearTimeout(this.saveTimeout);
            }
            this.saveTimeout = window.setTimeout(() => {
                this.saveState = 'idle';
                this.saveTimeout = undefined;
            }, 2000);
        }
        catch (error) {
            this.saveState = 'error';
            this.saveError = error instanceof Error ? error.message : String(error);
        }
    }
    handleNameInput(index, value) {
        this.updateBookingColor(index, { name: value });
    }
    handleBlur(index) {
        this.persistBookingColors();
        if (!this.loadingIndex.includes(index)) {
            this.loadingIndex = [...this.loadingIndex, index];
        }
    }
    handleLoaderComplete(index) {
        this.loadingIndex = this.loadingIndex.filter(currentIndex => currentIndex !== index);
    }
    render() {
        return (h(Host, { key: 'e875d5c55e976b2acfecad934b7fde6414254856', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: '553dd62a3885f6ab7594a7051fe9d9d9bce6b353', class: 'w-full' }, h("div", { key: '790c2cefb7391981f4daae999a7d360baa1383fc', class: 'w-full' }, h("div", { key: '8c32069a2a1e55e7a9d96e233aca3088932f0db9', class: "stickyHeader pt-1 " }, h("p", { key: 'aead08341b109ef0c2733391f9f5ef95449b6564', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '6a99693170700d9ece4b1dd8a55285cd9b120ab4', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '9b34c2f67d532cc3a3d00c1c60b7322042b7d4d7', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '82e53655b30dba900a1fa09df297b9fcc707a9bd', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '58d05a062a82516d161d984b68ba3de4516950fd' })), h("div", { key: '2e5055390825d82f8f8753de2ff714063bc5887c', class: "mt-2 pl-1" }, h("table", { key: 'a87edf49c777e43659661de0115f4abc2d30d092' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: '9620445e7e5ecbd912c8e8318104b14e7a3f572a' }, h("td", { key: '15fa7324160070ab17824675bf83813cc941797a', colSpan: 2 }, h("hr", { key: '7159c381398c2cd6afcb35fab77aae9c5c0c65f0', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '61ca3715a46dfa1eaa5c95f03dd6168e767e17e5' }, h("th", { key: 'facb9079a0c72df048c52aa2d38912d3c4f9b1f6', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: 'f656d70d93632e943b0fd905b153c1ac19c77a9b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '64543fcd7181edcafd97458a75520ee129919ee7' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: '6aa037cb7f641b3c927776ff325635894a643147' }, h("td", { key: '327f2c6e4715a5845a64d65b58698bb679489c7c', colSpan: 2 }, h("hr", { key: '7bb47d0ca9f48679170d45cdc0a1732876150302', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '83f9731e3b9222b595097787f3ba18aaec3291bb' }, h("th", { key: '23cbb0e38411386803a83a6031d33a3f673c2e85', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: '969247b482ef7a9ee35dfd48ede57fe12e3b08c8', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '65d1b3696572b1238c29c60e228eed20a6327316' }, "Use your own colors"), h("ir-new-badge", { key: '02af6ab44019653831115cfae1740a405f0badda' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("hr", { key: 'f5a11c4c407c9341601c2e4bf94804f296180706', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: '092b002b27def48c81b1a8f04c84879c94a29149', class: "mt-1" }, h("div", { key: 'f25b20caf54095818cf114e4a1a64aeb94fcbcdd', class: "legendCalendar" }, h("div", { key: 'a2fdbd6888d426f4270e37089777278c1c9e3b0d', class: "legendRow align-items-center" }, h("div", { key: 'a2d2efd54c7dc01380cd8d412b3e029676afa6ce', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '798a6bb65ee8a6de895a2936fb2ffbd5152636f8' }, "MAR 2022")), h("div", { key: 'cc0f373e966057f0ece4c020c4ee367650ae7530', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '5fc4f093b3e4115922068e203c11c9fa7fdf6d58', class: "legendRow" }, h("div", { key: '3c3310219e2060f59a792f12ab8bb5fc1bcf4c86', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'd4bff983e05848649f398195436949b1adadcdf3', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '81f0709a3befc274cbac29aef639f30f709b958b', class: "highphenLegend" }, h("div", { key: 'f60485d542d8ab957509e3ba6fb22807505e6b42' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '586be99fe318b2bcb28948f33330b926de95bda8', class: "legendRow" }, h("div", { key: 'a56f96e6018d70eeb39d30cc06ff22a82c3870fb', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'fe64d9e859b6e6d3f7b8392b09ccdfdcf0cc1201', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '628bfb39e2d006a32da5972340762da0911def76', class: "legendRow" }, h("div", { key: 'ce152e56e29eb80f929da54f271bed8931d3e89e', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '157c864ea9f2ae1cac0660cf9d70dbc120e7332b', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'de763ceb993502a1856e901c41c1a8849eaa3927', class: "legendRow" }, h("div", { key: '1f64e49f69bba51e02272f5f711e9ff4af4fb54d', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'dbec804905b2c7bb8cbe0e948a774b7ba36f075c', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
    static get states() {
        return {
            "bookingColors": {},
            "saveState": {},
            "saveError": {},
            "loadingIndex": {}
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
    static get watchers() {
        return [{
                "propName": "saveState",
                "methodName": "handleSaveStateChange"
            }];
    }
}
//# sourceMappingURL=igl-legends.js.map
