import { h } from "@stencil/core";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { onAppDataChange } from "../../../stores/app.store";
export class IrCarousel {
    constructor() {
        this.slides = [];
        this.activeIndex = 0;
        this.enableCarouselSwipe = false;
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
            this.swiperInstance = null;
        }
        this.initializeSwiper();
    }
    initializeSwiper() {
        if (this.swiperInstance) {
            return;
        }
        this.swiperInstance = new Swiper(this.carouselEl, {
            modules: [Navigation, Pagination],
            simulateTouch: this.enableCarouselSwipe,
            allowTouchMove: this.enableCarouselSwipe,
            direction: 'horizontal',
            touchMoveStopPropagation: this.enableCarouselSwipe,
            navigation: {
                nextEl: this.nextEl,
                prevEl: this.prevEl,
            },
        });
        this.swiperInstance.on('slideChange', s => {
            this.carouselImageIndexChange.emit(s.activeIndex);
        });
        this.swiperInstance.slideTo(this.activeIndex);
    }
    handleActiveIndexChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.swiperInstance.slideTo(newValue);
        }
    }
    render() {
        return (h("div", { key: '887f175091158d14c5abbbd60e5ca47415fe9516', class: "swiper", ref: el => (this.carouselEl = el) }, h("div", { key: 'd0789fa1454452e9e85139a34df882f03dcdb3eb', class: "swiper-wrapper" }, this.slides.map(slide => (h("div", { class: "swiper-slide", "data-swipable": this.enableCarouselSwipe }, h("img", { src: slide.image_uri, onClick: () => this.carouselImageClicked.emit(null), key: slide.id, alt: slide.alt }))))), h("div", { key: '15a313a00cc4a4659c52da41af1c2e1842aaf85d', class: "swiper-pagination" }), h("div", { key: 'b92258d373fc9ad16ce0be04eb955228c3e1d00f', class: "swiper-button-prev lg:size-7", ref: el => (this.prevEl = el) }, h("svg", { key: 'cbe559b5fd1b4ad8c97f174d1ac43468e46c4d9c', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '864391393778755f9736c057c8f2ba52e70e239b', fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("div", { key: '8e3988ed455f1489c0722dbbe721367f3428fb2c', class: "swiper-button-next lg:size-7", ref: el => (this.nextEl = el) }, h("svg", { key: 'ca38570d5bf08afa642a16dfb3c50e5ce8a9a2bd', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: 'df3133df6c6d9912eb350b94f7380a61027dc19c', fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))));
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
            },
            "activeIndex": {
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
                "attribute": "active-index",
                "reflect": false,
                "defaultValue": "0"
            },
            "enableCarouselSwipe": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "enable-carousel-swipe",
                "reflect": false,
                "defaultValue": "false"
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
            }, {
                "method": "carouselImageIndexChange",
                "name": "carouselImageIndexChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "activeIndex",
                "methodName": "handleActiveIndexChange"
            }];
    }
}
//# sourceMappingURL=ir-carousel.js.map
