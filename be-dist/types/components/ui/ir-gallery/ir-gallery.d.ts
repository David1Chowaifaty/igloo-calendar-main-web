import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrGallery {
    images: {
        url: string;
        alt: string;
    }[];
    totalImages: number;
    maxLength: number;
    disableCarouselClick: boolean;
    enableCarouselSwipe: boolean;
    carouselStyles: Partial<CSSStyleDeclaration>;
    carouselClasses: string;
    openGallery: EventEmitter<number>;
    private swiperInstance;
    carouselEl: HTMLDivElement;
    nextEl: HTMLElement;
    prevEl: HTMLElement;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleStylesChange(): void;
    applyStyles(): void;
    initializeSwiper(): void;
    reinitializeSwiper(): void;
    private handleOpenGallery;
    render(): any;
}
