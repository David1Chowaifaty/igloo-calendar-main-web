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
        return (h(Host, { key: '65a1f22843d24fc90960fb655ccbe8f843c88463', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: '2c1ea2bcba6d4aaabc8bdb02117ae23b2f221bde', class: 'w-full' }, h("div", { key: 'c002de36ef7ee97309810c0267040e5e129596e9', class: 'w-full' }, h("div", { key: '37405f7b74bb3b3c49e0ad315458a91fb87432e0', class: "stickyHeader pt-1 " }, h("p", { key: 'f11a480246ba067cb3063cc7dc6e34472e738ce6', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '1532ab17ed2aaeb8788470cd4e2439594c9b294a', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: 'eb7a1b6f924ec51afd5b9dc41f59a8d7bb2f4d4f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'e09e61cd15d257b95b1299aa18253a8a26f9335d', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: 'f1efe7be68b9750063cd4057cac428dd46335777' })), h("div", { key: 'b576e6de7472444d21cd06398f86be7aaa586571', class: "mt-2 pl-1" }, h("table", { key: 'b78febc7ccc4d5862dcb1d883ac49b0f75ab4e1f' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: 'a6e2ccc4f637e55ae3dfa0e8a29fc39b37b43228' }, h("td", { key: 'd156d873c634c36957971ec6501c63696e79b91c', colSpan: 2 }, h("hr", { key: '72d3066800b1006b44276c38b104c9f651b9b830', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: 'cd2ee07144976cfb8354f155352330c386881cad' }, h("th", { key: 'a481166dea99d1f765c1ec7da7fa3afcca7f53df', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: '203d325806422bc7ed054f2d5e9b583d1b51c2d4', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: 'dd0b1324b05eaa7002566ba4e0353fea698eeb4c' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: '99a3981af815c1fa73a42528c79b8751b34721ec' }, h("td", { key: '6da3b606cdf49e2e7a8e933b0e7457cf46befc9b', colSpan: 2 }, h("hr", { key: 'df30ffce8f411db3bc6a08c4d556ddc22bf08efb', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '702cf12de593e6bc250acd869db0375ba0512d73' }, h("th", { key: '648a605812ad39a58730516699f98640e6938505', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: '92c8b731579263b5a1ff247ad785130e9732a6f0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '855f6b94a7afbb303b53c368f5bca8f12cc3adf9' }, "Use your own colors"), h("ir-new-badge", { key: '9a92c7928a203322d112ecfaf890ad06b3283a09' })))), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
        }))), h("hr", { key: '5283b8f9228e8eedc7e22e57673af253adbe84a2', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: 'e34f2a7d61e48e0160baeeb6af5b7dd02bf85670', class: "mt-1" }, h("div", { key: '3a40ca46db9f0dba058ce9c72678c456252e3163', class: "legendCalendar" }, h("div", { key: '4dfc07789793d63ac1df0928260a76493c3ec8e1', class: "legendRow align-items-center" }, h("div", { key: '92604ade02946a77faed2af2866901ef1cd74ce5', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '0d7fbae6fac52e8eb708c5d9446f1a86a50140a3' }, "MAR 2022")), h("div", { key: '72d962231af7997c3220978ba7f8e0626f7094d4', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'e2a7b8a20dc7987fe42bbf95689b510d6ca35aa4', class: "legendRow" }, h("div", { key: 'b901e3f6369dff03a437cfcff9f34ae276275d45', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: '2e8eadfcf6f7190495ba4b174d233fbd574ff810', pill: true }, "3")), h("div", { key: '1d0d1611ed8592de08216a2454f06f4b882664eb', class: "highphenLegend" }, h("div", { key: '488d0e6a8d3aeb4073834cf9c0f2666218c3b62c' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '0b4281e670d2211f4999137151f1bd855b9ee134', class: "legendRow" }, h("div", { key: 'f2a1b7358e5cd41e35452f856b60b6754ec74a6a', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '62bc8640352c72842fbeb73cce32f7fc533a7f93', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'f77d601a7ea4a1db0a8497179fd12afbff24b525', class: "legendRow" }, h("div", { key: 'b98eb65d3fbbf8ebc5321a9c1c2ae22b488361d0', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '3b8b8d90fb7a20475914b825b50a08efdcd3726c', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '8058b06e1f93211e832caeb9fb1021351c890e06', class: "legendRow" }, h("div", { key: 'b5542b7d817b9c298a723f9a328a51077525f372', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '33b058e96409b7de843b30841a6c9f5290178e63', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
