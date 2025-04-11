import { User } from './types';
export declare class IrUserManagement {
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    isSuperAdmin: boolean;
    isLoading: boolean;
    users: User[];
    property_id: number;
    private token;
    private roomService;
    ticketChanged(newValue: string, oldValue: string): void;
    private initializeApp;
    render(): any;
}
