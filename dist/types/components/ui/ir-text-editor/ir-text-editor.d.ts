import { EventEmitter } from '../../../stencil-public-runtime';
import { PluginConstructor, ToolbarConfigItem } from 'ckeditor5';
export declare class IrTextEditor {
    el: HTMLElement;
    value: string;
    error: boolean;
    placeholder: string;
    plugins: (string | PluginConstructor)[];
    pluginsMode: 'replace' | 'add';
    toolbarItems: ToolbarConfigItem[];
    toolbarItemsMode: 'replace' | 'add';
    textChange: EventEmitter<string>;
    private editorInstance;
    private baseToolbarItems;
    private basePlugins;
    componentDidLoad(): void;
    onValueChanged(newValue: string): void;
    onErrorChanged(newValue: boolean, oldValue: boolean): void;
    initEditor(): Promise<void>;
    handletextChange(data: string): void;
    disconnectedCallback(): void;
    render(): any;
}
