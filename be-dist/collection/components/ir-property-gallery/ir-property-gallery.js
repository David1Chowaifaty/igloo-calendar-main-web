import { Fragment, h } from "@stencil/core";
import { v4 } from "uuid";
export class IrPropertyGallery {
    constructor() {
        this.exposed_property = undefined;
        this.property_state = 'gallery';
        this.roomType = undefined;
    }
    handleOpenGallery() {
        this.irDialog.openModal();
    }
    handleOpenCarouselGallery() {
        this.irDialog.openModal();
    }
    renderAmeneties() {
        const checkAmenity = (code) => {
            var _a;
            return (_a = this.exposed_property) === null || _a === void 0 ? void 0 : _a.amenities.find(a => a.code === code);
        };
        const wifi = checkAmenity('freewifi');
        const climatecontrol = checkAmenity('climatecontrol');
        const balcony = checkAmenity('balcony');
        return (h("ul", { class: "flex items-center text-xs text-green-500 gap-2 flex-wrap" }, wifi && (h("li", { class: "flex items-center gap-2" }, h("ir-icons", { name: "wifi", svgClassName: "size-4" }), " ", h("span", null, wifi.description))), climatecontrol && (h("li", { class: "flex items-center gap-2" }, h("ir-icons", { name: "snowflake", svgClassName: "size-4" }), " ", h("span", null, climatecontrol.description))), balcony && (h("li", { class: "flex items-center gap-2" }, h("ir-icons", { name: "sun", svgClassName: "size-4" }), " ", h("span", null, balcony.description)))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (!this.exposed_property) {
            return null;
        }
        return (h("div", null, this.property_state === 'gallery' ? (h("ir-gallery", { totalImages: this.exposed_property.images.length, images: (_a = this.exposed_property.images) === null || _a === void 0 ? void 0 : _a.map(i => i.url).slice(0, 5) })) : (h(Fragment, null, h("div", { class: "flex text-gray-700 flex-wrap items-center gap-2 font-normal md:hidden text-sm py-2" }, ((_b = this.roomType) === null || _b === void 0 ? void 0 : _b.bedding_setup.length) > 0 && (h(Fragment, null, h("ir-icons", { name: "bed" }), ' ', (_d = (_c = this.roomType) === null || _c === void 0 ? void 0 : _c.bedding_setup) === null || _d === void 0 ? void 0 :
            _d.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - ")))))), this.renderAmeneties()), h("div", { class: "relative md:hidden block w-full h-48 carousel-container   rounded-md" }, h("ir-carousel", { slides: (_f = (_e = this.roomType) === null || _e === void 0 ? void 0 : _e.images) === null || _f === void 0 ? void 0 : _f.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })) })), h("div", { class: "relative hidden md:block py-2" }, h("div", { class: "w-full md:w-auto md:max-h-[150px] mb-1 lg:max-h-[250px]  carousel-container   rounded-md" }, h("ir-carousel", { slides: (_g = this.roomType.images) === null || _g === void 0 ? void 0 : _g.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })) })), ((_j = (_h = this.roomType) === null || _h === void 0 ? void 0 : _h.bedding_setup) === null || _j === void 0 ? void 0 : _j.length) > 0 && (h("div", { class: " text-gray-700 items-center gap-2 font-normal hidden md:flex md:flex-wrap text-sm py-2" }, h("ir-icons", { name: "bed" }), ' ', (_l = (_k = this.roomType) === null || _k === void 0 ? void 0 : _k.bedding_setup) === null || _l === void 0 ? void 0 :
            _l.map((bed_setup, index) => (h("p", { key: bed_setup.code }, bed_setup.name, " ", index < this.roomType.bedding_setup.length - 1 && h("span", null, " - ")))))), this.renderAmeneties(), h("ir-button", { onButtonClick: () => this.irDialog.openModal(), variants: "ghost", label: "More details" })))), h("ir-dialog", { ref: el => (this.irDialog = el) }, h("div", { slot: "modal-body", class: "modal-container px-2 md:px-4 b-4 max-h-[80vh]" }, h("div", { class: " bg-white z-50 h-14 flex justify-between items-center w-full" }, h("h2", { class: "font-semibold text-lg md:text-xl" }, this.property_state === 'carousel' ? this.roomType.name : this.exposed_property.name), h("ir-button", { variants: "icon", onButtonClick: () => this.irDialog.closeModal() }, h("div", { slot: "btn-icon" }, h("ir-icons", { name: "xmark" })))), h("div", { class: "max-h-[70%] py-4" }, h("ir-carousel", { slides: this.exposed_property.images.map(img => ({
                alt: img.tooltip,
                id: v4(),
                image_uri: img.url,
            })) })), this.property_state === 'carousel' && (h("section", { class: 'text-sm mt-4' }, h("h2", { class: "text-lg font-medium mb-5" }, "Facilities and services"), h("ir-facilities", { properties: this.exposed_property }), h("p", { innerHTML: (_m = this.exposed_property) === null || _m === void 0 ? void 0 : _m.description.location_and_intro, class: "py-2" })))))));
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
            "exposed_property": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IExposedProperty",
                    "resolved": "IExposedProperty",
                    "references": {
                        "IExposedProperty": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::IExposedProperty"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
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
