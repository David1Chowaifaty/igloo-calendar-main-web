export declare class IrImage {
    src: string;
    thumbnail: string;
    blurhash: string;
    width: number;
    height: number;
    alt: string;
    blurDataUrl: string;
    loaded: boolean;
    private imageRef;
    componentWillLoad(): void;
    decodeBlurHash(): void;
    handleImageLoad(): void;
    checkImageCached(): void;
    render(): any;
}
