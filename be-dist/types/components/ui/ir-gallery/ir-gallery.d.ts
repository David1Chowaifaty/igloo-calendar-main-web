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
    openGallery: EventEmitter<number>;
    private swiperInstance;
    carouselEl: HTMLDivElement;
    nextEl: HTMLElement;
    prevEl: HTMLElement;
    componentWillLoad(): void;
    componentDidLoad(): void;
    initializeSwiper(): void;
    reinitializeSwiper(): void;
    private handleOpenGallery;
    render(): any;
}
