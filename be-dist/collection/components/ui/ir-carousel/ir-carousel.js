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
        return (h("div", { key: '103e83863ffb37afe2c21c6769d26bcba5528e7c', class: "swiper", ref: el => (this.carouselEl = el) }, h("div", { key: 'ba47b84bb5b9850e0f8dc01767dce2d8ea4213b2', class: "swiper-wrapper" }, this.slides.map(slide => (h("div", { class: "swiper-slide" }, h("img", { src: slide.image_uri, onClick: () => this.carouselImageClicked.emit(null), key: slide.id, alt: slide.alt }))))), h("div", { key: '2eec3b0b4bb596af4aecd50e360000a8b1090857', class: "swiper-pagination" }), h("div", { key: 'e2b27fc478e6fff49009194746d6dc5683f44dae', class: "swiper-button-prev lg:size-7", ref: el => (this.prevEl = el) }, h("svg", { key: 'ac8c99b145cd69e7f0dc9385ac1dc65237175660', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '909a1f670aff36584dff2c579441ea02d0a687d6', fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("div", { key: 'a3206772cb679dbd4d7be7762d905afc2242ff3c', class: "swiper-button-next lg:size-7", ref: el => (this.nextEl = el) }, h("svg", { key: '0fa65e289eeeb04b2e9e09262ed5e5484f155d36', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: 'fb9e01da398ccb34923e4cce6570b83e0317af8e', fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))));
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
