import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrModal {
    modalTitle: string;
    modalBody: string;
    showTitle: boolean;
    rightBtnActive: boolean;
    leftBtnActive: boolean;
    rightBtnText: string;
    leftBtnText: string;
    isLoading: boolean;
    autoClose: boolean;
    rightBtnColor: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    leftBtnColor: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    btnPosition: 'left' | 'right' | 'center';
    iconAvailable: boolean;
    icon: string;
    isOpen: boolean;
    closeModal(): Promise<void>;
    openModal(): Promise<void>;
    confirmModal: EventEmitter<any>;
    cancelModal: EventEmitter<any>;
    btnClickHandler(event: CustomEvent): void;
    item: any;
    render(): any[];
}
