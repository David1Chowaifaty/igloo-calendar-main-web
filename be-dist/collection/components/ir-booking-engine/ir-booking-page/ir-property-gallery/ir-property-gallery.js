import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatImageAlt } from "../../../../utils/utils";
import { Fragment, h } from "@stencil/core";
import { v4 } from "uuid";
export class IrPropertyGallery {
    constructor() {
        this.display = 'default';
        this.property_state = 'gallery';
        this.roomType = undefined;
        this.activeIndex = 0;
    }
    handleOpenGallery(e) {
        if (window.innerWidth > 650) {
            this.activeIndex = e.detail;
            this.irDialog.openModal();
        }
    }
    handleOpenCarouselGallery() {
        this.irDialog.openModal();
    }
    showPlanLimitations({ withRoomSize = true, showMoreTag = false }) {
        if (!this.roomType) {
            return null;
        }
        const { adult_nbr, children_nbr } = this.roomType.occupancy_max;
        const maxNumber = adult_nbr + children_nbr;
        const renderOccupancy = () => (h("div", { class: "flex items-end gap-1" }, h("div", { class: "flex items-center" }, h("ir-icons", { svgClassName: "size-3", name: "user" }), h("p", null, adult_nbr)), children_nbr > 0 && (h("div", { class: "flex items-center" }, h("ir-icons", { svgClassName: "size-3", name: "child" }), h("p", null, children_nbr)))));
        const renderRoomSize = () => withRoomSize &&
            this.roomType.size > 0 && (h("p", null, this.roomType.size, h("span", { class: "ordinal" }, "m", h("sup", null, "2"))));
        if (maxNumber > 4) {
            return (h("div", { class: "capacity-container pointer-events-none absolute -bottom-0 z-40 flex w-full items-center justify-between bg-white/80 px-2 py-1 pb-2 text-sm" }, h("div", { class: "flex items-center gap-2" }, h("p", null, localizedWords.entries.Lcz_Maximum), renderOccupancy()), renderRoomSize(), showMoreTag && (h("div", { class: "flex items-center gap-1.5" }, h("span", null, localizedWords.entries.Lcz_More), h("span", null, h("ir-icons", { name: "arrow-up-right-from-square", svgClassName: "size-3" }))))));
        }
        return (h("div", { class: "capacity-container pointer-events-none absolute -bottom-0 z-40 flex w-full items-center justify-between bg-white/80 px-2 py-1 pb-2 text-sm" }, h("div", { class: "flex items-center gap-2" }, h("p", null, localizedWords.entries.Lcz_Maximum), h("div", { class: "flex items-center" }, [...Array(adult_nbr)].map((_, i) => (h("ir-icons", { svgClassName: "size-3", key: i, name: "user" }))), [...Array(children_nbr)].map((_, i) => (h("ir-icons", { key: i, svgClassName: "size-3", name: "child" }))))), renderRoomSize(), showMoreTag && (h("div", { class: "flex items-center gap-1.5" }, h("span", null, localizedWords.entries.Lcz_More), h("span", null, h("ir-icons", { name: "arrow-up-right-from-square", svgClassName: "size-3" }))))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const images = this.property_state === 'carousel' ? this.roomType.images : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.images;
        return (h("div", { key: '5280a02ab73aacc8c5ad7f835a7bd3b9dc6158e0' }, this.property_state === 'gallery' ? (h("ir-gallery", { totalImages: (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.images.length, images: (_d = (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.images) === null || _d === void 0 ? void 0 : _d.map(i => ({ url: i.url, alt: formatImageAlt(i.tooltip) })), maxLength: 5, disableCarouselClick: true, enableCarouselSwipe: true })) : (h(Fragment, null, h("div", { class: `carousel-container relative aspect-[16/9] w-full overflow-hidden  ${this.display === 'default' ? 'md:hidden' : ''}` }, this.roomType.images.length === 0 ? (h(Fragment, null, h("div", { onClick: () => this.irDialog.openModal(), class: "gallery-img icon  bg-gray-300 text-white" }, h("ir-icons", { name: "image", svgClassName: "size-10 mb-4" })), this.showPlanLimitations({ showMoreTag: true, withRoomSize: true }))) : this.roomType.images.length === 1 ? (h("img", { onClick: () => this.irDialog.openModal(), class: "gallery-img object-cover ", src: this.roomType.images[0].url, alt: formatImageAlt(this.roomType.images[0].tooltip, (_e = this.roomType) === null || _e === void 0 ? void 0 : _e.name) })) : (h("ir-carousel", { carouselClasses: "pg_carousel", onCarouselImageIndexChange: e => (this.activeIndex = e.detail), slides: (_g = (_f = this.roomType) === null || _f === void 0 ? void 0 : _f.images) === null || _g === void 0 ? void 0 : _g.map(img => {
                var _a;
                return ({
                    alt: formatImageAlt(img.tooltip, (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.name),
                    id: v4(),
                    image_uri: img.url,
                });
            }) })), this.showPlanLimitations({ showMoreTag: true, withRoomSize: true })), this.display === 'default' && (h("div", { class: "hidden  md:block" }, h("div", { class: "carousel-container relative mb-1 w-full rounded-md md:max-h-[200px] md:w-auto xl:max-h-[250px] " }, this.roomType.images.length === 0 ? (h(Fragment, null, h("div", { onClick: () => this.irDialog.openModal(), class: "gallery-img icon hover:bg-gray-400" }, h("ir-icons", { name: "image", svgClassName: "size-10 mb-4" })), this.showPlanLimitations({ showMoreTag: true, withRoomSize: true }))) : ((_h = this.roomType.images) === null || _h === void 0 ? void 0 : _h.length) === 1 ? (h(Fragment, null, h("img", { onClick: () => this.irDialog.openModal(), src: this.roomType.images[0].url, alt: formatImageAlt(this.roomType.images[0].tooltip, (_j = this.roomType) === null || _j === void 0 ? void 0 : _j.name), class: "h-full w-full cursor-pointer rounded-[var(--radius,8px)] object-cover " }), this.showPlanLimitations({ showMoreTag: true, withRoomSize: true }))) : (h(Fragment, null, h("ir-carousel", { onCarouselImageIndexChange: e => (this.activeIndex = e.detail), slides: (_k = this.roomType.images) === null || _k === void 0 ? void 0 : _k.map(img => {
                var _a;
                return ({
                    alt: formatImageAlt(img.tooltip, (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.name),
                    id: v4(),
                    image_uri: img.url,
                });
            }) }), this.showPlanLimitations({ showMoreTag: true, withRoomSize: true })))))))), h("ir-dialog", { key: '53664f910a02c6d75dc053fe44947c84863a9518', ref: el => (this.irDialog = el), closeButton: false }, h("div", { key: 'ec1963565062293e81213f561b97a33efea11085', slot: "modal-body", class: "modal-container max-h-[80vh] overflow-y-auto px-4 pb-4  pt-0 md:p-4 md:pt-0", dir: "ltr" }, h("div", { key: 'f74af1dd2fffa191173f0779eec9705f4c148b55', class: " sticky top-0 z-50 mb-2 flex w-full  items-center justify-between bg-white py-2 md:pt-4", dir: app_store.dir }, h("h2", { key: 'c5daab617da04e83501f7858e4a895df89c27374', class: "text-lg font-semibold md:text-xl" }, this.property_state === 'carousel' ? this.roomType.name : (_l = app_store.property) === null || _l === void 0 ? void 0 : _l.name), h("ir-button", { key: 'c782c2360c891723827fcbdc9b0f5c07f2df9a5c', iconName: "xmark", variants: "icon", onButtonClick: () => this.irDialog.closeModal() })), h("section", { key: '3739dbdaffaa7b085c16ad59f28117eba4dcf32f', class: "max-h-[80vh]" }, images.length > 0 && (h("div", { key: 'af5c21b761e9202f3a5be0755804c7767d065968', class: "coursel_gallery_container hidden sm:block" }, h("ir-carousel", { enableCarouselSwipe: true, activeIndex: this.activeIndex, dir: app_store.dir, key: ((_m = this.roomType) === null || _m === void 0 ? void 0 : _m.id) + '_' + app_store.dir, slides: images === null || images === void 0 ? void 0 : images.map(img => {
                var _a;
                return ({
                    alt: formatImageAlt(img.tooltip, (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.name),
                    id: v4(),
                    image_uri: img.url,
                });
            }), onCarouselImageClicked: e => {
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }))), this.property_state === 'carousel' && (h("section", { key: '3cfb3a8e1fa7ea909269b38a7401ef7ecf8b3629', class: 'z-0 py-4 text-sm', dir: app_store.dir }, h("ir-room-type-amenities", { key: '3e8355788672256d412e17fd49a7386b223eea6c', aminities: (_o = app_store.property) === null || _o === void 0 ? void 0 : _o.amenities, roomType: this.roomType }))))))));
    }
    static get is() { return "ir-property-gallery"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-property-gallery.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-property-gallery.css"]
        };
    }
    static get properties() {
        return {
            "display": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'grid' | 'default'",
                    "resolved": "\"default\" | \"grid\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "display",
                "reflect": true,
                "defaultValue": "'default'"
            },
            "property_state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'carousel' | 'gallery'",
                    "resolved": "\"carousel\" | \"gallery\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "property_state",
                "reflect": false,
                "defaultValue": "'gallery'"
            },
            "roomType": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "RoomType",
                    "resolved": "RoomType",
                    "references": {
                        "RoomType": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::RoomType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get states() {
        return {
            "activeIndex": {}
        };
    }
    static get listeners() {
        return [{
                "name": "openGallery",
                "method": "handleOpenGallery",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "carouselImageClicked",
                "method": "handleOpenCarouselGallery",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-property-gallery.js.map
