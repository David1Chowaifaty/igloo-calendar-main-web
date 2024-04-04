export default class Stack<TData> {
    private _topNode;
    private _count;
    count(): number;
    isEmpty(): boolean;
    push(value: TData): void;
    pop(): TData;
    peek(): TData;
}
