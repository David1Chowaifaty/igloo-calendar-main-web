import { h } from "@stencil/core";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { onAppDataChange } from "../../../stores/app.store";
export class IrCarousel {
    constructor() {
        this.slides = [];
    }
    componentWillLoad() {
        onAppDataChange('dir', () => {
            this.reinitializeSwiper();
        });
    }
    componentDidLoad() {
        this.initializeSwiper();
    }
    reinitializeSwiper() {
        if (this.swiperInstance) {
            this.swiperInstance.destroy(true, true);
        }
        this.initializeSwiper();
    }
    initializeSwiper() {
        this.swiperInstance = new Swiper(this.carouselEl, {
            modules: [Navigation, Pagination],
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
    render() {
        return (h("div", { key: 'fc44138229a34a4acbf02903f7e8d82af14eb798', class: "swiper", ref: el => (this.carouselEl = el) }, h("div", { key: '343c3a28d8b65dc10f7576bfcb714f682d22374f', class: "swiper-wrapper" }, this.slides.map(slide => (h("div", { class: "swiper-slide" }, h("img", { src: slide.image_uri, onClick: () => this.carouselImageClicked.emit(null), key: slide.id, alt: slide.alt }))))), h("div", { key: '821bffbd12b8918989e0f0d4c6ce4756842695e3', class: "swiper-pagination" }), h("div", { key: 'b0060886705493ceaf2a0eedd1a8b2721d1beb16', class: "swiper-button-prev lg:size-7", ref: el => (this.prevEl = el) }, h("svg", { key: '2d302fb46a0af71e660218f93ae13f1bf7588a9e', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '14e58281745c194ace54986033b38ed0b084c1b8', fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("div", { key: '62a6966a5879c8a5483d87c2121973ac3807b74d', class: "swiper-button-next lg:size-7", ref: el => (this.nextEl = el) }, h("svg", { key: 'da3d6b96647c62e9e97200d0b93dfcfb0d9769b1', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '4696e3f389ab4050ecbd0898c2f155d85dc9d864', fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))));
    }
    static get is() { return "ir-carousel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-carousel.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-carousel.css"]
        };
    }
    static get properties() {
        return {
            "slides": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TCarouselSlides[]",
                    "resolved": "TCarouselSlides[]",
                    "references": {
                        "TCarouselSlides": {
                            "location": "import",
                            "path": "./carousel",
                            "id": "src/components/ui/ir-carousel/carousel.ts::TCarouselSlides"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            }
        };
    }
    static get events() {
        return [{
                "method": "carouselImageClicked",
                "name": "carouselImageClicked",
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
//# sourceMappingURL=ir-carousel.js.map
