/**
 * Represents a single node in a linked list.
 * @template T The type of the value stored in the node.
 */
declare class ListNode<T> {
    /** The value contained in this node. */
    value: T;
    /** Reference to the next node in the list (or null if this is the last node). */
    next: ListNode<T> | null;
    /**
     * Creates a new ListNode.
     * @param value The value to store in the node.
     */
    constructor(value: T);
}
/**
 * A generic singly linked list implementation.
 * @template T The type of the values stored in the list.
 */
export declare class LinkedList<T> {
    /** The head (first node) of the linked list. */
    private head;
    /**
     * Appends a new value at the end of the list.
     * @param value The value to append.
     */
    append(value: T): void;
    /**
     * Prepends a new value at the start of the list.
     * @param value The value to prepend.
     */
    prepend(value: T): void;
    /**
     * Deletes the first occurrence of a value in the list.
     * @param value The value to delete.
     */
    delete(value: T): void;
    /**
     * Finds the first node containing the given value.
     * @param value The value to search for.
     * @returns The found node, or null if not found.
     */
    find(value: T): ListNode<T> | null;
    /**
     * Converts the linked list into a standard array.
     * @returns An array of all values in the list.
     */
    toArray(): T[];
    /**
     * Checks whether the list is empty.
     * @returns True if the list has no elements, false otherwise.
     */
    isEmpty(): boolean;
    /**
     * Returns the number of nodes in the list.
     * @returns The size of the list.
     */
    size(): number;
    /**
     * Removes all elements from the list.
     */
    clear(): void;
}
export {};
