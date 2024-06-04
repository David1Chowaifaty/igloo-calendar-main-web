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
        return (h("div", { key: '0d54f8ddd86809d4f7deb20722c2791f56376159', class: "swiper", ref: el => (this.carouselEl = el) }, h("div", { key: '74bfd4097be88039411da9133f9900e38078df96', class: "swiper-wrapper" }, this.slides.map(slide => (h("div", { class: "swiper-slide" }, h("img", { src: slide.image_uri, onClick: () => this.carouselImageClicked.emit(null), key: slide.id, alt: slide.alt }))))), h("div", { key: 'b884c1f3ba9db1e8b31398529766bd1d85c3e8c2', class: "swiper-pagination" }), h("div", { key: 'bc70f0f511f61b4bd3cccf00948d8c2dfaa4597a', class: "swiper-button-prev lg:size-7", ref: el => (this.prevEl = el) }, h("svg", { key: 'eee34501a478eb5073025d5229737a8169982785', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: 'e809a4c5accc11522fa6dd9f489162f2b6d92382', fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("div", { key: 'ea104d99389c29335e7861ecac0f0fe27fc0664d', class: "swiper-button-next lg:size-7", ref: el => (this.nextEl = el) }, h("svg", { key: '4e1640cbe0c8f280f501ab3afb7ee63d1266aec9', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '30605152d0160acb64f50182b01692ce37b60471', fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))));
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
