export declare class IrImage {
    src: string;
    thumbnail: string;
    blurhash: string;
    width: number;
    height: number;
    alt: string;
    blurDataUrl: string;
    loaded: boolean;
    componentWillLoad(): void;
    decodeBlurHash(): void;
    handleImageLoad(): void;
    render(): any;
}
