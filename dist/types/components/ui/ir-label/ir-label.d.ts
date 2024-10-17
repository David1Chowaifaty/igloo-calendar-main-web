import { EventEmitter } from '../../../stencil-public-runtime';
import { TIcons } from '../ir-icons/icons';
export declare class IrLabel {
    label: string;
    value: string;
    iconShown: boolean;
    image: {
        src: string;
        alt: string;
        style?: string;
    } | null;
    country: boolean;
    imageStyle: string;
    icon_name: TIcons;
    icon_style: string;
    ignore_value: boolean;
    placeholder: string;
    editSidebar: EventEmitter;
    openEditSidebar(): void;
    å: any;
    render(): any;
}
