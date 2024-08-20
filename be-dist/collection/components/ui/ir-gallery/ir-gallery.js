import { onAppDataChange } from "../../../stores/app.store";
import { h } from "@stencil/core";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
export class IrGallery {
    constructor() {
        this.images = [];
        this.totalImages = 0;
        this.maxLength = undefined;
        this.disableCarouselClick = false;
        this.enableCarouselSwipe = false;
        this.carouselStyles = undefined;
        this.carouselClasses = undefined;
    }
    componentWillLoad() {
        if (!this.maxLength) {
            this.maxLength = this.totalImages;
        }
        onAppDataChange('dir', () => {
            this.reinitializeSwiper();
        });
    }
    componentDidLoad() {
        this.initializeSwiper();
        setTimeout(() => {
            this.applyStyles();
        }, 10);
    }
    handleStylesChange() {
        this.applyStyles();
    }
    applyStyles() {
        if (!this.carouselStyles || !this.carouselEl) {
            return;
        }
        for (const property in this.carouselStyles) {
            if (this.carouselStyles.hasOwnProperty(property)) {
                this.carouselEl.style[property] = this.carouselStyles[property];
            }
        }
    }
    initializeSwiper() {
        if (this.swiperInstance) {
            return;
        }
        this.swiperInstance = new Swiper(this.carouselEl, {
            modules: [Navigation],
            simulateTouch: this.enableCarouselSwipe,
            allowTouchMove: this.enableCarouselSwipe,
            direction: 'horizontal',
            touchMoveStopPropagation: this.enableCarouselSwipe,
            navigation: {
                nextEl: this.nextEl,
                prevEl: this.prevEl,
            },
        });
    }
    reinitializeSwiper() {
        if (this.swiperInstance) {
            this.swiperInstance.destroy(true, true);
            this.swiperInstance = null;
        }
        this.initializeSwiper();
    }
    handleOpenGallery(index = 0) {
        if (this.totalImages <= 1) {
            return;
        }
        this.openGallery.emit(index);
    }
    render() {
        var _a;
        return (h("div", { key: '30876b18d447d32bcaa284faa4d97846a4a40c48', class: "gallery-container" }, this.totalImages > 1 && (h("button", { key: '04686cf5d284661be0d69e7b49eb4f8d0cdee374', onClick: () => this.handleOpenGallery(), class: "total-images-number" }, h("svg", { key: 'cc2ff3032a39923978f6d569755f7e4225a60a51', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "15.75", viewBox: "0 0 576 512" }, h("path", { key: '613af95864916d39bcca7aeb64ef230e11010962', fill: "currentColor", d: "M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: '969b9dc22bbe012fc0e4b07d20387cb54c703039' }, this.totalImages, " +"))), h("div", { key: '7c65bbdb67f8e90ead5cfab388e878c3d95f3142', class: `swiper ${(_a = this.carouselClasses) !== null && _a !== void 0 ? _a : ''}`, ref: el => (this.carouselEl = el) }, h("div", { key: 'b6fcf40685673356ec2a326604c19dd7bf26c076', class: "swiper-wrapper" }, this.images.map(image => (h("div", { class: "swiper-slide", "data-swipable": this.enableCarouselSwipe }, !this.disableCarouselClick && (h("button", { class: "absolute" }, h("p", { class: "sr-only" }, "open gallery"))), h("img", { "data-disabled": this.disableCarouselClick, onClick: () => {
                if (this.disableCarouselClick) {
                    return;
                }
                this.handleOpenGallery();
            }, importance: "high", draggable: false, src: image.url, alt: image.alt }))))), h("div", { key: '4b7b6d6100c34df88d782b1d83f8c98589fca46f', class: "swiper-button-prev", ref: el => (this.prevEl = el) }, h("svg", { key: '5d298ff5c8ec5f0beb7e841362226b19c6f83b81', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: 'a3b5b6d7f285e8207917def52c7060aca1241b5d', d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("div", { key: 'ae9e8648102f77ecda78bb57529678859066fe8d', class: "swiper-button-next", ref: el => (this.nextEl = el) }, h("svg", { key: '6c32acf0fda6d185d85d20a0718c4315537d3435', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '999e3ae866d766b799da7b42f6486706183a4b70', d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))), h("div", { key: '33f2e7463daf49057e255e4989b8d61ae1c16f19', class: 'gallery', "data-images": this.images.length }, this.images.slice(0, this.maxLength).map((image, idx) => (h("figure", { class: "gallery-item" }, h("button", { class: "absolute" }, h("p", { class: "sr-only" }, "open gallery")), h("img", { onClick: () => this.handleOpenGallery(idx), src: image.url, alt: image.alt })))))));
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
                    "original": "{ url: string; alt: string }[]",
                    "resolved": "{ url: string; alt: string; }[]",
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
            },
            "maxLength": {
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
                "attribute": "max-length",
                "reflect": false
            },
            "disableCarouselClick": {
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
                "attribute": "disable-carousel-click",
                "reflect": false,
                "defaultValue": "false"
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
            },
            "carouselStyles": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Partial<CSSStyleDeclaration>",
                    "resolved": "{ [x: number]: string; accentColor?: string; alignContent?: string; alignItems?: string; alignSelf?: string; alignmentBaseline?: string; all?: string; animation?: string; animationComposition?: string; animationDelay?: string; animationDirection?: string; animationDuration?: string; animationFillMode?: string; animationIterationCount?: string; animationName?: string; animationPlayState?: string; animationTimingFunction?: string; appearance?: string; aspectRatio?: string; backdropFilter?: string; backfaceVisibility?: string; background?: string; backgroundAttachment?: string; backgroundBlendMode?: string; backgroundClip?: string; backgroundColor?: string; backgroundImage?: string; backgroundOrigin?: string; backgroundPosition?: string; backgroundPositionX?: string; backgroundPositionY?: string; backgroundRepeat?: string; backgroundSize?: string; baselineShift?: string; baselineSource?: string; blockSize?: string; border?: string; borderBlock?: string; borderBlockColor?: string; borderBlockEnd?: string; borderBlockEndColor?: string; borderBlockEndStyle?: string; borderBlockEndWidth?: string; borderBlockStart?: string; borderBlockStartColor?: string; borderBlockStartStyle?: string; borderBlockStartWidth?: string; borderBlockStyle?: string; borderBlockWidth?: string; borderBottom?: string; borderBottomColor?: string; borderBottomLeftRadius?: string; borderBottomRightRadius?: string; borderBottomStyle?: string; borderBottomWidth?: string; borderCollapse?: string; borderColor?: string; borderEndEndRadius?: string; borderEndStartRadius?: string; borderImage?: string; borderImageOutset?: string; borderImageRepeat?: string; borderImageSlice?: string; borderImageSource?: string; borderImageWidth?: string; borderInline?: string; borderInlineColor?: string; borderInlineEnd?: string; borderInlineEndColor?: string; borderInlineEndStyle?: string; borderInlineEndWidth?: string; borderInlineStart?: string; borderInlineStartColor?: string; borderInlineStartStyle?: string; borderInlineStartWidth?: string; borderInlineStyle?: string; borderInlineWidth?: string; borderLeft?: string; borderLeftColor?: string; borderLeftStyle?: string; borderLeftWidth?: string; borderRadius?: string; borderRight?: string; borderRightColor?: string; borderRightStyle?: string; borderRightWidth?: string; borderSpacing?: string; borderStartEndRadius?: string; borderStartStartRadius?: string; borderStyle?: string; borderTop?: string; borderTopColor?: string; borderTopLeftRadius?: string; borderTopRightRadius?: string; borderTopStyle?: string; borderTopWidth?: string; borderWidth?: string; bottom?: string; boxShadow?: string; boxSizing?: string; breakAfter?: string; breakBefore?: string; breakInside?: string; captionSide?: string; caretColor?: string; clear?: string; clip?: string; clipPath?: string; clipRule?: string; color?: string; colorInterpolation?: string; colorInterpolationFilters?: string; colorScheme?: string; columnCount?: string; columnFill?: string; columnGap?: string; columnRule?: string; columnRuleColor?: string; columnRuleStyle?: string; columnRuleWidth?: string; columnSpan?: string; columnWidth?: string; columns?: string; contain?: string; containIntrinsicBlockSize?: string; containIntrinsicHeight?: string; containIntrinsicInlineSize?: string; containIntrinsicSize?: string; containIntrinsicWidth?: string; container?: string; containerName?: string; containerType?: string; content?: string; counterIncrement?: string; counterReset?: string; counterSet?: string; cssFloat?: string; cssText?: string; cursor?: string; cx?: string; cy?: string; d?: string; direction?: string; display?: string; dominantBaseline?: string; emptyCells?: string; fill?: string; fillOpacity?: string; fillRule?: string; filter?: string; flex?: string; flexBasis?: string; flexDirection?: string; flexFlow?: string; flexGrow?: string; flexShrink?: string; flexWrap?: string; float?: string; floodColor?: string; floodOpacity?: string; font?: string; fontFamily?: string; fontFeatureSettings?: string; fontKerning?: string; fontOpticalSizing?: string; fontPalette?: string; fontSize?: string; fontSizeAdjust?: string; fontStretch?: string; fontStyle?: string; fontSynthesis?: string; fontSynthesisSmallCaps?: string; fontSynthesisStyle?: string; fontSynthesisWeight?: string; fontVariant?: string; fontVariantAlternates?: string; fontVariantCaps?: string; fontVariantEastAsian?: string; fontVariantLigatures?: string; fontVariantNumeric?: string; fontVariantPosition?: string; fontVariationSettings?: string; fontWeight?: string; forcedColorAdjust?: string; gap?: string; grid?: string; gridArea?: string; gridAutoColumns?: string; gridAutoFlow?: string; gridAutoRows?: string; gridColumn?: string; gridColumnEnd?: string; gridColumnGap?: string; gridColumnStart?: string; gridGap?: string; gridRow?: string; gridRowEnd?: string; gridRowGap?: string; gridRowStart?: string; gridTemplate?: string; gridTemplateAreas?: string; gridTemplateColumns?: string; gridTemplateRows?: string; height?: string; hyphenateCharacter?: string; hyphens?: string; imageOrientation?: string; imageRendering?: string; inlineSize?: string; inset?: string; insetBlock?: string; insetBlockEnd?: string; insetBlockStart?: string; insetInline?: string; insetInlineEnd?: string; insetInlineStart?: string; isolation?: string; justifyContent?: string; justifyItems?: string; justifySelf?: string; left?: string; readonly length?: number; letterSpacing?: string; lightingColor?: string; lineBreak?: string; lineHeight?: string; listStyle?: string; listStyleImage?: string; listStylePosition?: string; listStyleType?: string; margin?: string; marginBlock?: string; marginBlockEnd?: string; marginBlockStart?: string; marginBottom?: string; marginInline?: string; marginInlineEnd?: string; marginInlineStart?: string; marginLeft?: string; marginRight?: string; marginTop?: string; marker?: string; markerEnd?: string; markerMid?: string; markerStart?: string; mask?: string; maskClip?: string; maskComposite?: string; maskImage?: string; maskMode?: string; maskOrigin?: string; maskPosition?: string; maskRepeat?: string; maskSize?: string; maskType?: string; mathDepth?: string; mathStyle?: string; maxBlockSize?: string; maxHeight?: string; maxInlineSize?: string; maxWidth?: string; minBlockSize?: string; minHeight?: string; minInlineSize?: string; minWidth?: string; mixBlendMode?: string; objectFit?: string; objectPosition?: string; offset?: string; offsetAnchor?: string; offsetDistance?: string; offsetPath?: string; offsetPosition?: string; offsetRotate?: string; opacity?: string; order?: string; orphans?: string; outline?: string; outlineColor?: string; outlineOffset?: string; outlineStyle?: string; outlineWidth?: string; overflow?: string; overflowAnchor?: string; overflowClipMargin?: string; overflowWrap?: string; overflowX?: string; overflowY?: string; overscrollBehavior?: string; overscrollBehaviorBlock?: string; overscrollBehaviorInline?: string; overscrollBehaviorX?: string; overscrollBehaviorY?: string; padding?: string; paddingBlock?: string; paddingBlockEnd?: string; paddingBlockStart?: string; paddingBottom?: string; paddingInline?: string; paddingInlineEnd?: string; paddingInlineStart?: string; paddingLeft?: string; paddingRight?: string; paddingTop?: string; page?: string; pageBreakAfter?: string; pageBreakBefore?: string; pageBreakInside?: string; paintOrder?: string; readonly parentRule?: CSSRule; perspective?: string; perspectiveOrigin?: string; placeContent?: string; placeItems?: string; placeSelf?: string; pointerEvents?: string; position?: string; printColorAdjust?: string; quotes?: string; r?: string; resize?: string; right?: string; rotate?: string; rowGap?: string; rubyPosition?: string; rx?: string; ry?: string; scale?: string; scrollBehavior?: string; scrollMargin?: string; scrollMarginBlock?: string; scrollMarginBlockEnd?: string; scrollMarginBlockStart?: string; scrollMarginBottom?: string; scrollMarginInline?: string; scrollMarginInlineEnd?: string; scrollMarginInlineStart?: string; scrollMarginLeft?: string; scrollMarginRight?: string; scrollMarginTop?: string; scrollPadding?: string; scrollPaddingBlock?: string; scrollPaddingBlockEnd?: string; scrollPaddingBlockStart?: string; scrollPaddingBottom?: string; scrollPaddingInline?: string; scrollPaddingInlineEnd?: string; scrollPaddingInlineStart?: string; scrollPaddingLeft?: string; scrollPaddingRight?: string; scrollPaddingTop?: string; scrollSnapAlign?: string; scrollSnapStop?: string; scrollSnapType?: string; scrollbarColor?: string; scrollbarGutter?: string; scrollbarWidth?: string; shapeImageThreshold?: string; shapeMargin?: string; shapeOutside?: string; shapeRendering?: string; stopColor?: string; stopOpacity?: string; stroke?: string; strokeDasharray?: string; strokeDashoffset?: string; strokeLinecap?: string; strokeLinejoin?: string; strokeMiterlimit?: string; strokeOpacity?: string; strokeWidth?: string; tabSize?: string; tableLayout?: string; textAlign?: string; textAlignLast?: string; textAnchor?: string; textCombineUpright?: string; textDecoration?: string; textDecorationColor?: string; textDecorationLine?: string; textDecorationSkipInk?: string; textDecorationStyle?: string; textDecorationThickness?: string; textEmphasis?: string; textEmphasisColor?: string; textEmphasisPosition?: string; textEmphasisStyle?: string; textIndent?: string; textOrientation?: string; textOverflow?: string; textRendering?: string; textShadow?: string; textTransform?: string; textUnderlineOffset?: string; textUnderlinePosition?: string; textWrap?: string; top?: string; touchAction?: string; transform?: string; transformBox?: string; transformOrigin?: string; transformStyle?: string; transition?: string; transitionDelay?: string; transitionDuration?: string; transitionProperty?: string; transitionTimingFunction?: string; translate?: string; unicodeBidi?: string; userSelect?: string; vectorEffect?: string; verticalAlign?: string; visibility?: string; webkitAlignContent?: string; webkitAlignItems?: string; webkitAlignSelf?: string; webkitAnimation?: string; webkitAnimationDelay?: string; webkitAnimationDirection?: string; webkitAnimationDuration?: string; webkitAnimationFillMode?: string; webkitAnimationIterationCount?: string; webkitAnimationName?: string; webkitAnimationPlayState?: string; webkitAnimationTimingFunction?: string; webkitAppearance?: string; webkitBackfaceVisibility?: string; webkitBackgroundClip?: string; webkitBackgroundOrigin?: string; webkitBackgroundSize?: string; webkitBorderBottomLeftRadius?: string; webkitBorderBottomRightRadius?: string; webkitBorderRadius?: string; webkitBorderTopLeftRadius?: string; webkitBorderTopRightRadius?: string; webkitBoxAlign?: string; webkitBoxFlex?: string; webkitBoxOrdinalGroup?: string; webkitBoxOrient?: string; webkitBoxPack?: string; webkitBoxShadow?: string; webkitBoxSizing?: string; webkitFilter?: string; webkitFlex?: string; webkitFlexBasis?: string; webkitFlexDirection?: string; webkitFlexFlow?: string; webkitFlexGrow?: string; webkitFlexShrink?: string; webkitFlexWrap?: string; webkitJustifyContent?: string; webkitLineClamp?: string; webkitMask?: string; webkitMaskBoxImage?: string; webkitMaskBoxImageOutset?: string; webkitMaskBoxImageRepeat?: string; webkitMaskBoxImageSlice?: string; webkitMaskBoxImageSource?: string; webkitMaskBoxImageWidth?: string; webkitMaskClip?: string; webkitMaskComposite?: string; webkitMaskImage?: string; webkitMaskOrigin?: string; webkitMaskPosition?: string; webkitMaskRepeat?: string; webkitMaskSize?: string; webkitOrder?: string; webkitPerspective?: string; webkitPerspectiveOrigin?: string; webkitTextFillColor?: string; webkitTextSizeAdjust?: string; webkitTextStroke?: string; webkitTextStrokeColor?: string; webkitTextStrokeWidth?: string; webkitTransform?: string; webkitTransformOrigin?: string; webkitTransformStyle?: string; webkitTransition?: string; webkitTransitionDelay?: string; webkitTransitionDuration?: string; webkitTransitionProperty?: string; webkitTransitionTimingFunction?: string; webkitUserSelect?: string; whiteSpace?: string; widows?: string; width?: string; willChange?: string; wordBreak?: string; wordSpacing?: string; wordWrap?: string; writingMode?: string; x?: string; y?: string; zIndex?: string; getPropertyPriority?: (property: string) => string; getPropertyValue?: (property: string) => string; item?: (index: number) => string; removeProperty?: (property: string) => string; setProperty?: (property: string, value: string, priority?: string) => void; }",
                    "references": {
                        "Partial": {
                            "location": "global",
                            "id": "global::Partial"
                        },
                        "CSSStyleDeclaration": {
                            "location": "global",
                            "id": "global::CSSStyleDeclaration"
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
            "carouselClasses": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "carousel-classes",
                "reflect": false
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
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "carouselStyles",
                "methodName": "handleStylesChange"
            }];
    }
}
//# sourceMappingURL=ir-gallery.js.map
