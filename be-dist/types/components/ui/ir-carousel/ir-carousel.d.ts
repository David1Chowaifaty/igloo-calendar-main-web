import { EventEmitter } from '../../../stencil-public-runtime';
import { TCarouselSlides } from './carousel';
export declare class IrCarousel {
    slides: TCarouselSlides[];
    activeIndex: number;
    enableCarouselSwipe: boolean;
    styles: Partial<CSSStyleDeclaration>;
    carouselClasses: string;
    carouselImageClicked: EventEmitter<null>;
    carouselImageIndexChange: EventEmitter<number>;
    private swiperInstance;
    private carouselEl;
    private prevEl;
    private nextEl;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleStylesChange(): void;
    applyStyles(): void;
    reinitializeSwiper(): void;
    initializeSwiper(): void;
    handleActiveIndexChange(newValue: number, oldValue: number): void;
    render(): any;
}
