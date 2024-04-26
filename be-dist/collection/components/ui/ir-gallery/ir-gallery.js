import { onAppDataChange } from "../../../stores/app.store";
import { h } from "@stencil/core";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
export class IrGallery {
    constructor() {
        this.images = [];
        this.totalImages = 0;
    }
    componentWillLoad() {
        onAppDataChange('dir', () => {
            this.reinitializeSwiper();
        });
    }
    componentDidLoad() {
        this.initializeSwiper();
    }
    initializeSwiper() {
        this.swiperInstance = new Swiper(this.carouselEl, {
            modules: [Navigation],
            simulateTouch: false,
            allowTouchMove: false,
            direction: 'horizontal',
            touchMoveStopPropagation: false,
            navigation: {
                nextEl: this.nextEl,
                prevEl: this.prevEl,
            },
        });
    }
    reinitializeSwiper() {
        if (this.swiperInstance) {
            this.swiperInstance.destroy(true, true);
        }
        this.initializeSwiper();
    }
    render() {
        return (h("div", { key: 'ce32252819fedc8cf7a6d66bee092e399eb573ba', class: "gallery-container" }, this.totalImages > 0 && (h("button", { onClick: () => this.openGallery.emit(null), class: "total-images-number" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "15.75", viewBox: "0 0 576 512" }, h("path", { fill: "currentColor", d: "M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", null, this.totalImages, " +"))), h("div", { key: '945ddbf04be32b69dc3426da92f52f4bf49a0fcc', class: "swiper", ref: el => (this.carouselEl = el) }, h("div", { key: 'a42a575ebd075ed9e95ee65f6c7ffbbd884b307b', class: "swiper-wrapper" }, this.images.map(image => (h("div", { class: "swiper-slide" }, h("button", { class: "absolute" }, h("p", { class: "sr-only" }, "open gallery")), h("img", { onClick: () => this.openGallery.emit(null), draggable: false, src: image, alt: "" }))))), h("div", { key: 'cc4fcae91328a384ef25561bfa5080b42b2be7f5', class: "swiper-button-prev", ref: el => (this.prevEl = el) }, h("svg", { key: '694b6d4f1174938dc4545e86447d7febc1d4244e', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '0aac70fafc666ce031a384a0221aaffa840986c5', d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("div", { key: '7f1424bf013be2a947c78aa0bc4cdf78c7725162', class: "swiper-button-next", ref: el => (this.nextEl = el) }, h("svg", { key: '2f1aca10962cf2261877d2e127e0611b998dfc8f', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '7469e4c56103e412e3799d78f572aac347eb1e0d', d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))), h("div", { key: '670d2171f4f4c45275adfcfb51aa1884dcf51c07', class: "gallery" }, this.images.map(image => (h("figure", { class: "gallery-item" }, h("button", { class: "absolute" }, h("p", { class: "sr-only" }, "open gallery")), h("img", { onClick: () => this.openGallery.emit(null), src: image, alt: "" })))))));
    }
    static get is() { return "ir-gallery"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-gallery.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-gallery.css"]
        };
    }
    static get properties() {
        return {
            "images": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            },
            "totalImages": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "total-images",
                "reflect": false,
                "defaultValue": "0"
            }
        };
    }
    static get events() {
        return [{
                "method": "openGallery",
                "name": "openGallery",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-gallery.js.map
