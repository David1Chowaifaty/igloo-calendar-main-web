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
        return (h("div", { key: '377892f49326dedf517f534b2edddeff99387687', class: "swiper", ref: el => (this.carouselEl = el) }, h("div", { key: 'cfb2131c319efd5ea96e5e13dc8f7edb1336e8e7', class: "swiper-wrapper" }, this.slides.map(slide => (h("div", { class: "swiper-slide" }, h("img", { src: slide.image_uri, onClick: () => this.carouselImageClicked.emit(null), key: slide.id, alt: slide.alt }))))), h("div", { key: '817573e38a152972a8eab9f8566c0822e9898760', class: "swiper-pagination" }), h("div", { key: '07e2619e49e2cac7d232f4f6ee8418d3e62b37e6', class: "swiper-button-prev lg:size-7", ref: el => (this.prevEl = el) }, h("svg", { key: '27e581c48e0e04fdcf154bb5cd47ba9ec2b3baad', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '15c9ecdaba7ff4466d3dabaf0851aaff8dd6a15a', fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("div", { key: 'c35b6e4a9bf08426eaaa8d6f757ee2907d8a54aa', class: "swiper-button-next lg:size-7", ref: el => (this.nextEl = el) }, h("svg", { key: 'a946b02fc79a0beec44d9fdccec2ef66de1c0eaf', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '9eea72f2af1e97c84cf1090939a536cda8d818e5', fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))));
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
