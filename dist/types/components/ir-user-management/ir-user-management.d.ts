import { User } from "../../models/Users";
export declare class IrUserManagement {
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    isSuperAdmin: boolean;
    userTypeCode: string | number;
    userId: string | number;
    isLoading: boolean;
    users: User[];
    property_id: number;
    private token;
    private roomService;
    private userService;
    private bookingService;
    private userTypes;
    ticketChanged(newValue: string, oldValue: string): void;
    private initializeApp;
    handleResetData(e: CustomEvent): Promise<void>;
    private fetchUsers;
    private fetchUserTypes;
    render(): any;
}
