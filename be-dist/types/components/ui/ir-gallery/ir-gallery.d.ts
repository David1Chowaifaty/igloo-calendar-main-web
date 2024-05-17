import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrGallery {
    images: {
        url: string;
        alt: string;
    }[];
    totalImages: number;
    openGallery: EventEmitter<null>;
    private swiperInstance;
    carouselEl: HTMLDivElement;
    nextEl: HTMLElement;
    prevEl: HTMLElement;
    componentWillLoad(): void;
    componentDidLoad(): void;
    initializeSwiper(): void;
    reinitializeSwiper(): void;
    render(): any;
}
