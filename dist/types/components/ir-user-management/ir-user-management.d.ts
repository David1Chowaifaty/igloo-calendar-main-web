import { User } from "../../models/Users";
import { AllowedUser } from './types';
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
    allowedUsersTypes: AllowedUser[];
    private token;
    private roomService;
    private userService;
    private bookingService;
    private userTypes;
    private socket;
    ticketChanged(newValue: string, oldValue: string): void;
    handleResetData(e: CustomEvent): Promise<void>;
    private initializeApp;
    private handleSocketMessage;
    updateUserVerificationStatus(result: {
        id: string | number;
        is_email_verified: boolean;
    }): void;
    private fetchUsers;
    private fetchUserTypes;
    disconnectedCallback(): void;
    render(): any;
}
