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
            return (h("div", { class: "capacity-container pointer-events-none absolute -bottom-0 z-10 flex w-full items-center justify-between bg-white/80 px-2 py-2 text-sm" }, h("div", { class: "flex items-center gap-2" }, h("p", null, localizedWords.entries.Lcz_Maximum), renderOccupancy()), renderRoomSize(), showMoreTag && (h("div", { class: "flex items-center gap-1.5" }, h("span", null, localizedWords.entries.Lcz_MoreDetails), h("span", null, h("ir-icons", { name: "arrow-up-right-from-square", svgClassName: "size-3" }))))));
        }
        return (h("div", { class: "capacity-container pointer-events-none absolute -bottom-0 z-10 flex w-full items-center justify-between bg-white/80 px-2 py-2 text-sm" }, h("div", { class: "flex items-center gap-2" }, h("p", null, localizedWords.entries.Lcz_Maximum), h("div", { class: "flex items-center" }, [...Array(adult_nbr)].map((_, i) => (h("ir-icons", { svgClassName: "size-3", key: i, name: "user" }))), [...Array(children_nbr)].map((_, i) => (h("ir-icons", { key: i, svgClassName: "size-3", name: "child" }))))), renderRoomSize(), showMoreTag && (h("div", { class: "flex items-center gap-1.5" }, h("span", null, localizedWords.entries.Lcz_MoreDetails), h("span", null, h("ir-icons", { name: "arrow-up-right-from-square", svgClassName: "size-3" }))))));
    }
    renderRoomtypeImages() {
        var _a, _b, _c, _d, _e, _f;
        return (h(Fragment, null, h("div", { class: `carousel-container relative  overflow-hidden  ${this.display === 'default' ? 'md:hidden' : ''}` }, this.roomType.images.length === 0 ? (h(Fragment, null, h("div", { onClick: () => this.irDialog.openModal(), class: "gallery-img icon  bg-gray-300 text-white" }, h("ir-icons", { name: "image", svgClassName: "size-10 mb-4" })), this.showPlanLimitations({ showMoreTag: true, withRoomSize: true }))) : this.roomType.images.length === 1 ? (h("img", { onClick: () => this.irDialog.openModal(), class: "gallery-img object-cover ", src: this.roomType.images[0].url, alt: formatImageAlt(this.roomType.images[0].tooltip, (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.name) })) : (h("ir-carousel", { carouselClasses: "pg_carousel", onCarouselImageIndexChange: e => (this.activeIndex = e.detail), slides: (_c = (_b = this.roomType) === null || _b === void 0 ? void 0 : _b.images) === null || _c === void 0 ? void 0 : _c.map(img => {
                var _a;
                return ({
                    alt: formatImageAlt(img.tooltip, (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.name),
                    id: v4(),
                    image_uri: img.url,
                    thumbnail: img.thumbnail,
                });
            }) })), this.showPlanLimitations({ showMoreTag: true, withRoomSize: true })), this.display === 'default' && (h("div", { class: "hidden  md:block" }, h("div", { class: "carousel-container relative mb-1 w-full rounded-md  md:w-auto  " }, this.roomType.images.length === 0 ? (h(Fragment, null, h("div", { onClick: () => this.irDialog.openModal(), class: "gallery-img icon hover:bg-gray-400" }, h("ir-icons", { name: "image", svgClassName: "size-10 mb-4" })), this.showPlanLimitations({ showMoreTag: true, withRoomSize: true }))) : ((_d = this.roomType.images) === null || _d === void 0 ? void 0 : _d.length) === 1 ? (h(Fragment, null, h("div", { onClick: () => this.irDialog.openModal(), class: "gallery-img icon hover:bg-gray-400" }, h("img", {
            // onClick={() => this.irDialog.openModal()}
            src: this.roomType.images[0].url, alt: formatImageAlt(this.roomType.images[0].tooltip, (_e = this.roomType) === null || _e === void 0 ? void 0 : _e.name), class: "single-image h-full w-full cursor-pointer\r\n                   object-cover "
        })), this.showPlanLimitations({ showMoreTag: true, withRoomSize: true }))) : (h(Fragment, null, h("ir-carousel", { onCarouselImageIndexChange: e => (this.activeIndex = e.detail), slides: (_f = this.roomType.images) === null || _f === void 0 ? void 0 : _f.map(img => {
                var _a;
                return ({
                    alt: formatImageAlt(img.tooltip, (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.name),
                    id: v4(),
                    image_uri: img.url,
                    thumbnail: img.thumbnail,
                });
            }) }), this.showPlanLimitations({ showMoreTag: true, withRoomSize: true }))))))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        const images = this.property_state === 'carousel' ? this.roomType.images : (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.images;
        return (h("div", { key: 'c67d0e2607c839574ad91aa032a31a2b7e6312bf' }, this.property_state === 'gallery' ? (h("ir-gallery", { totalImages: (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.images.length, images: (_d = (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.images) === null || _d === void 0 ? void 0 : _d.map(i => ({ url: i.url, alt: formatImageAlt(i.tooltip), thumbnail: i === null || i === void 0 ? void 0 : i.thumbnail })), maxLength: 5, disableCarouselClick: true, enableCarouselSwipe: true })) : (this.renderRoomtypeImages()), h("ir-dialog", { key: '45983d85b804b3a632b61142892d59abfbd95b09', ref: el => (this.irDialog = el), closeButton: false }, h("div", { key: '051c2257ed18e3596da351b3f4e14d274079b324', slot: "modal-body", class: this.property_state !== 'carousel'
                ? 'modal-container relative max-h-[80vh] overflow-y-auto px-4 pb-4  pt-0 md:p-4'
                : 'modal-container max-h-[90vh] overflow-y-auto px-4 pb-4  pt-0 md:p-4 md:pt-0', dir: "ltr" }, h("div", { key: 'cea4c2828c680c8350820fbf8c4955b48e4e9b50', style: { width: this.property_state !== 'carousel' ? '720px' : '100%' }, class: this.property_state !== 'carousel'
                ? 'absolute left-8  top-8 z-50 flex w-72 items-center justify-between text-white '
                : 'sticky top-0 z-50 mb-2 flex w-full  items-center justify-between bg-white py-2 md:pt-4', dir: app_store.dir }, h("h2", { key: 'b27b1171b5d551b1bd1e065d77467cab37509acc', class: "text-lg font-semibold md:text-xl" }, this.property_state === 'carousel' ? this.roomType.name : (_e = app_store.property) === null || _e === void 0 ? void 0 : _e.name), h("ir-button", { key: '17e2ec00e277e888388e5f87be675576215df36d', iconName: "xmark", variants: "icon", onButtonClick: () => this.irDialog.closeModal() })), h("section", { key: '46c4200fb7c0dbc33694d6c2890ac3174eeae318', class: "max-h-[80vh]" }, images.length > 0 && (h("div", { key: '763f9bd3c86ec93b52e99a2135433dcb1ba419ce', class: "carousel_gallery_container hidden sm:block" }, h("ir-carousel", { enableCarouselSwipe: true, activeIndex: this.activeIndex, dir: app_store.dir, key: ((_f = this.roomType) === null || _f === void 0 ? void 0 : _f.id) + '_' + app_store.dir, slides: images === null || images === void 0 ? void 0 : images.map(img => {
                var _a;
                return ({
                    alt: formatImageAlt(img.tooltip, (_a = this.roomType) === null || _a === void 0 ? void 0 : _a.name),
                    id: v4(),
                    image_uri: img.url,
                    thumbnail: img.thumbnail,
                });
            }), onCarouselImageClicked: e => {
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }))), this.property_state === 'carousel' && (h("section", { key: '77d75b6f23af8f3f8a4af0ea76c9bbfd0b6a4419', class: 'z-0 py-4 text-sm', dir: app_store.dir }, h("ir-room-type-amenities", { key: '8654f69f6d910e423f28e971dbd8a0fff86a5671', aminities: (_g = app_store.property) === null || _g === void 0 ? void 0 : _g.amenities, roomType: this.roomType }))))))));
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
