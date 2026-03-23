import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrServiceAssigneeSelect {
    /**
     * The agent to assign the service to.
     */
    agent: {
        id: number;
        name: string;
        code: string;
    } | null;
    /**
     * Currently selected service assignee type.
     */
    assigneeType: 'agent' | 'guest';
    /**
     * Label displayed above the assignment selector.
     */
    label: string;
    /**
     * Emits when the service assignee changes.
     */
    assignmentChange: EventEmitter<'agent' | 'guest'>;
    render(): any;
}
