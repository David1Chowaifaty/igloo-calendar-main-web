import { EventEmitter } from '../../../stencil-public-runtime';
import { TCarouselSlides } from './carousel';
export declare class IrCarousel {
    slides: TCarouselSlides[];
    carouselImageClicked: EventEmitter<null>;
    private swiperInstance;
    private carouselEl;
    private prevEl;
    private nextEl;
    componentWillLoad(): void;
    componentDidLoad(): void;
    reinitializeSwiper(): void;
    initializeSwiper(): void;
    render(): any;
}
