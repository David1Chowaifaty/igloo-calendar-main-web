import { handleBodyOverflow } from "../../../utils/utils";
import { h } from "@stencil/core";
export class IrSidebar {
    constructor() {
        this.side = 'right';
        this.showCloseButton = true;
        this.open = false;
    }
    applyStyles() {
        for (const property in this.sidebarStyles) {
            if (this.sidebarStyles.hasOwnProperty(property)) {
                this.sidebarRef.style[property] = this.sidebarStyles[property];
            }
        }
    }
    handleSidebarStylesChange() {
        this.applyStyles();
    }
    componentWillLoad() {
        // this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidLoad() {
        // If esc key is pressed, close the modal
        this.applyStyles();
        // document.addEventListener('keydown', this.handleKeyDown);
    }
    handleOpenChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            handleBodyOverflow(newValue);
        }
    }
    handleKeyDown(e) {
        if (e.key === 'Escape') {
            e.stopImmediatePropagation();
            e.stopPropagation();
            return this.toggleSidebar();
        }
        else {
            return;
        }
    }
    async toggleSidebar() {
        this.irSidebarToggle.emit(this.open);
    }
    render() {
        let className = '';
        if (this.open) {
            className = 'active';
        }
        else {
            className = '';
        }
        return [
            h("div", { key: '90caf29f1ae0521badb9a7e03a0820815dd6b4f3', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            h("div", { key: 'd68f83cf921070471a0b12dfa47357e635d08c22', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (h("div", { key: '6af60878699a2ed342993d5b9412daf5a23355be', class: 'sidebar-title' }, h("p", { key: '64beba2e02d8898c7ad518b9f2cfd6a58d40dad2', class: 'p-0 m-0' }, this.label), h("div", { key: '226b621971bfd96b8dc28f2333781c9169049677', class: 'p-0 m-0 sidebar-icon-container' }, h("ir-icon", { key: '85592d23a29ef444bb28038e34fc00c13a45e663', class: "", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, h("svg", { key: '444bc69f72e52da7c0feccb7aa3b8346d0e59c87', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: 'ae67f3bbd75b9789d439903a50b14e699ad75286', fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))), h("slot", { key: '0215377e1620841a638a344148edcdc7ba8e67bb', name: "sidebar-body" })),
        ];
    }
    static get is() { return "ir-sidebar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sidebar.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sidebar.css"]
        };
    }
    static get properties() {
        return {
            "name": {
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
                "getter": false,
                "setter": false,
                "attribute": "name",
                "reflect": false
            },
            "side": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'right' | 'left'",
                    "resolved": "\"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "side",
                "reflect": false,
                "defaultValue": "'right'"
            },
            "showCloseButton": {
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
                "getter": false,
                "setter": false,
                "attribute": "show-close-button",
                "reflect": false,
                "defaultValue": "true"
            },
            "open": {
                "type": "boolean",
                "mutable": true,
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
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            },
            "sidebarStyles": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Partial<CSSStyleDeclaration>",
                    "resolved": "{ [x: number]: string; accentColor?: string; alignContent?: string; alignItems?: string; alignSelf?: string; alignmentBaseline?: string; all?: string; animation?: string; animationComposition?: string; animationDelay?: string; animationDirection?: string; animationDuration?: string; animationFillMode?: string; animationIterationCount?: string; animationName?: string; animationPlayState?: string; animationTimingFunction?: string; appearance?: string; aspectRatio?: string; backdropFilter?: string; backfaceVisibility?: string; background?: string; backgroundAttachment?: string; backgroundBlendMode?: string; backgroundClip?: string; backgroundColor?: string; backgroundImage?: string; backgroundOrigin?: string; backgroundPosition?: string; backgroundPositionX?: string; backgroundPositionY?: string; backgroundRepeat?: string; backgroundSize?: string; baselineShift?: string; baselineSource?: string; blockSize?: string; border?: string; borderBlock?: string; borderBlockColor?: string; borderBlockEnd?: string; borderBlockEndColor?: string; borderBlockEndStyle?: string; borderBlockEndWidth?: string; borderBlockStart?: string; borderBlockStartColor?: string; borderBlockStartStyle?: string; borderBlockStartWidth?: string; borderBlockStyle?: string; borderBlockWidth?: string; borderBottom?: string; borderBottomColor?: string; borderBottomLeftRadius?: string; borderBottomRightRadius?: string; borderBottomStyle?: string; borderBottomWidth?: string; borderCollapse?: string; borderColor?: string; borderEndEndRadius?: string; borderEndStartRadius?: string; borderImage?: string; borderImageOutset?: string; borderImageRepeat?: string; borderImageSlice?: string; borderImageSource?: string; borderImageWidth?: string; borderInline?: string; borderInlineColor?: string; borderInlineEnd?: string; borderInlineEndColor?: string; borderInlineEndStyle?: string; borderInlineEndWidth?: string; borderInlineStart?: string; borderInlineStartColor?: string; borderInlineStartStyle?: string; borderInlineStartWidth?: string; borderInlineStyle?: string; borderInlineWidth?: string; borderLeft?: string; borderLeftColor?: string; borderLeftStyle?: string; borderLeftWidth?: string; borderRadius?: string; borderRight?: string; borderRightColor?: string; borderRightStyle?: string; borderRightWidth?: string; borderSpacing?: string; borderStartEndRadius?: string; borderStartStartRadius?: string; borderStyle?: string; borderTop?: string; borderTopColor?: string; borderTopLeftRadius?: string; borderTopRightRadius?: string; borderTopStyle?: string; borderTopWidth?: string; borderWidth?: string; bottom?: string; boxShadow?: string; boxSizing?: string; breakAfter?: string; breakBefore?: string; breakInside?: string; captionSide?: string; caretColor?: string; clear?: string; clip?: string; clipPath?: string; clipRule?: string; color?: string; colorInterpolation?: string; colorInterpolationFilters?: string; colorScheme?: string; columnCount?: string; columnFill?: string; columnGap?: string; columnRule?: string; columnRuleColor?: string; columnRuleStyle?: string; columnRuleWidth?: string; columnSpan?: string; columnWidth?: string; columns?: string; contain?: string; containIntrinsicBlockSize?: string; containIntrinsicHeight?: string; containIntrinsicInlineSize?: string; containIntrinsicSize?: string; containIntrinsicWidth?: string; container?: string; containerName?: string; containerType?: string; content?: string; contentVisibility?: string; counterIncrement?: string; counterReset?: string; counterSet?: string; cssFloat?: string; cssText?: string; cursor?: string; cx?: string; cy?: string; d?: string; direction?: string; display?: string; dominantBaseline?: string; emptyCells?: string; fill?: string; fillOpacity?: string; fillRule?: string; filter?: string; flex?: string; flexBasis?: string; flexDirection?: string; flexFlow?: string; flexGrow?: string; flexShrink?: string; flexWrap?: string; float?: string; floodColor?: string; floodOpacity?: string; font?: string; fontFamily?: string; fontFeatureSettings?: string; fontKerning?: string; fontOpticalSizing?: string; fontPalette?: string; fontSize?: string; fontSizeAdjust?: string; fontStretch?: string; fontStyle?: string; fontSynthesis?: string; fontSynthesisSmallCaps?: string; fontSynthesisStyle?: string; fontSynthesisWeight?: string; fontVariant?: string; fontVariantAlternates?: string; fontVariantCaps?: string; fontVariantEastAsian?: string; fontVariantLigatures?: string; fontVariantNumeric?: string; fontVariantPosition?: string; fontVariationSettings?: string; fontWeight?: string; forcedColorAdjust?: string; gap?: string; grid?: string; gridArea?: string; gridAutoColumns?: string; gridAutoFlow?: string; gridAutoRows?: string; gridColumn?: string; gridColumnEnd?: string; gridColumnGap?: string; gridColumnStart?: string; gridGap?: string; gridRow?: string; gridRowEnd?: string; gridRowGap?: string; gridRowStart?: string; gridTemplate?: string; gridTemplateAreas?: string; gridTemplateColumns?: string; gridTemplateRows?: string; height?: string; hyphenateCharacter?: string; hyphens?: string; imageOrientation?: string; imageRendering?: string; inlineSize?: string; inset?: string; insetBlock?: string; insetBlockEnd?: string; insetBlockStart?: string; insetInline?: string; insetInlineEnd?: string; insetInlineStart?: string; isolation?: string; justifyContent?: string; justifyItems?: string; justifySelf?: string; left?: string; readonly length?: number; letterSpacing?: string; lightingColor?: string; lineBreak?: string; lineHeight?: string; listStyle?: string; listStyleImage?: string; listStylePosition?: string; listStyleType?: string; margin?: string; marginBlock?: string; marginBlockEnd?: string; marginBlockStart?: string; marginBottom?: string; marginInline?: string; marginInlineEnd?: string; marginInlineStart?: string; marginLeft?: string; marginRight?: string; marginTop?: string; marker?: string; markerEnd?: string; markerMid?: string; markerStart?: string; mask?: string; maskClip?: string; maskComposite?: string; maskImage?: string; maskMode?: string; maskOrigin?: string; maskPosition?: string; maskRepeat?: string; maskSize?: string; maskType?: string; mathDepth?: string; mathStyle?: string; maxBlockSize?: string; maxHeight?: string; maxInlineSize?: string; maxWidth?: string; minBlockSize?: string; minHeight?: string; minInlineSize?: string; minWidth?: string; mixBlendMode?: string; objectFit?: string; objectPosition?: string; offset?: string; offsetAnchor?: string; offsetDistance?: string; offsetPath?: string; offsetPosition?: string; offsetRotate?: string; opacity?: string; order?: string; orphans?: string; outline?: string; outlineColor?: string; outlineOffset?: string; outlineStyle?: string; outlineWidth?: string; overflow?: string; overflowAnchor?: string; overflowClipMargin?: string; overflowWrap?: string; overflowX?: string; overflowY?: string; overscrollBehavior?: string; overscrollBehaviorBlock?: string; overscrollBehaviorInline?: string; overscrollBehaviorX?: string; overscrollBehaviorY?: string; padding?: string; paddingBlock?: string; paddingBlockEnd?: string; paddingBlockStart?: string; paddingBottom?: string; paddingInline?: string; paddingInlineEnd?: string; paddingInlineStart?: string; paddingLeft?: string; paddingRight?: string; paddingTop?: string; page?: string; pageBreakAfter?: string; pageBreakBefore?: string; pageBreakInside?: string; paintOrder?: string; readonly parentRule?: CSSRule; perspective?: string; perspectiveOrigin?: string; placeContent?: string; placeItems?: string; placeSelf?: string; pointerEvents?: string; position?: string; printColorAdjust?: string; quotes?: string; r?: string; resize?: string; right?: string; rotate?: string; rowGap?: string; rubyPosition?: string; rx?: string; ry?: string; scale?: string; scrollBehavior?: string; scrollMargin?: string; scrollMarginBlock?: string; scrollMarginBlockEnd?: string; scrollMarginBlockStart?: string; scrollMarginBottom?: string; scrollMarginInline?: string; scrollMarginInlineEnd?: string; scrollMarginInlineStart?: string; scrollMarginLeft?: string; scrollMarginRight?: string; scrollMarginTop?: string; scrollPadding?: string; scrollPaddingBlock?: string; scrollPaddingBlockEnd?: string; scrollPaddingBlockStart?: string; scrollPaddingBottom?: string; scrollPaddingInline?: string; scrollPaddingInlineEnd?: string; scrollPaddingInlineStart?: string; scrollPaddingLeft?: string; scrollPaddingRight?: string; scrollPaddingTop?: string; scrollSnapAlign?: string; scrollSnapStop?: string; scrollSnapType?: string; scrollbarColor?: string; scrollbarGutter?: string; scrollbarWidth?: string; shapeImageThreshold?: string; shapeMargin?: string; shapeOutside?: string; shapeRendering?: string; stopColor?: string; stopOpacity?: string; stroke?: string; strokeDasharray?: string; strokeDashoffset?: string; strokeLinecap?: string; strokeLinejoin?: string; strokeMiterlimit?: string; strokeOpacity?: string; strokeWidth?: string; tabSize?: string; tableLayout?: string; textAlign?: string; textAlignLast?: string; textAnchor?: string; textCombineUpright?: string; textDecoration?: string; textDecorationColor?: string; textDecorationLine?: string; textDecorationSkipInk?: string; textDecorationStyle?: string; textDecorationThickness?: string; textEmphasis?: string; textEmphasisColor?: string; textEmphasisPosition?: string; textEmphasisStyle?: string; textIndent?: string; textOrientation?: string; textOverflow?: string; textRendering?: string; textShadow?: string; textTransform?: string; textUnderlineOffset?: string; textUnderlinePosition?: string; textWrap?: string; textWrapMode?: string; textWrapStyle?: string; top?: string; touchAction?: string; transform?: string; transformBox?: string; transformOrigin?: string; transformStyle?: string; transition?: string; transitionBehavior?: string; transitionDelay?: string; transitionDuration?: string; transitionProperty?: string; transitionTimingFunction?: string; translate?: string; unicodeBidi?: string; userSelect?: string; vectorEffect?: string; verticalAlign?: string; visibility?: string; webkitAlignContent?: string; webkitAlignItems?: string; webkitAlignSelf?: string; webkitAnimation?: string; webkitAnimationDelay?: string; webkitAnimationDirection?: string; webkitAnimationDuration?: string; webkitAnimationFillMode?: string; webkitAnimationIterationCount?: string; webkitAnimationName?: string; webkitAnimationPlayState?: string; webkitAnimationTimingFunction?: string; webkitAppearance?: string; webkitBackfaceVisibility?: string; webkitBackgroundClip?: string; webkitBackgroundOrigin?: string; webkitBackgroundSize?: string; webkitBorderBottomLeftRadius?: string; webkitBorderBottomRightRadius?: string; webkitBorderRadius?: string; webkitBorderTopLeftRadius?: string; webkitBorderTopRightRadius?: string; webkitBoxAlign?: string; webkitBoxFlex?: string; webkitBoxOrdinalGroup?: string; webkitBoxOrient?: string; webkitBoxPack?: string; webkitBoxShadow?: string; webkitBoxSizing?: string; webkitFilter?: string; webkitFlex?: string; webkitFlexBasis?: string; webkitFlexDirection?: string; webkitFlexFlow?: string; webkitFlexGrow?: string; webkitFlexShrink?: string; webkitFlexWrap?: string; webkitJustifyContent?: string; webkitLineClamp?: string; webkitMask?: string; webkitMaskBoxImage?: string; webkitMaskBoxImageOutset?: string; webkitMaskBoxImageRepeat?: string; webkitMaskBoxImageSlice?: string; webkitMaskBoxImageSource?: string; webkitMaskBoxImageWidth?: string; webkitMaskClip?: string; webkitMaskComposite?: string; webkitMaskImage?: string; webkitMaskOrigin?: string; webkitMaskPosition?: string; webkitMaskRepeat?: string; webkitMaskSize?: string; webkitOrder?: string; webkitPerspective?: string; webkitPerspectiveOrigin?: string; webkitTextFillColor?: string; webkitTextSizeAdjust?: string; webkitTextStroke?: string; webkitTextStrokeColor?: string; webkitTextStrokeWidth?: string; webkitTransform?: string; webkitTransformOrigin?: string; webkitTransformStyle?: string; webkitTransition?: string; webkitTransitionDelay?: string; webkitTransitionDuration?: string; webkitTransitionProperty?: string; webkitTransitionTimingFunction?: string; webkitUserSelect?: string; whiteSpace?: string; whiteSpaceCollapse?: string; widows?: string; width?: string; willChange?: string; wordBreak?: string; wordSpacing?: string; wordWrap?: string; writingMode?: string; x?: string; y?: string; zIndex?: string; zoom?: string; getPropertyPriority?: (property: string) => string; getPropertyValue?: (property: string) => string; item?: (index: number) => string; removeProperty?: (property: string) => string; setProperty?: (property: string, value: string, priority?: string) => void; }",
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
                },
                "getter": false,
                "setter": false
            },
            "label": {
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
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "irSidebarToggle",
                "name": "irSidebarToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "toggleSidebar": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "sidebarStyles",
                "methodName": "handleSidebarStylesChange"
            }, {
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-sidebar.js.map
