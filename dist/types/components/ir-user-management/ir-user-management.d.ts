import { User } from "../../models/Users";
import { AllowedUser } from './types';
export declare class IrUserManagement {
    language: string;
    baseUrl: string;
    ticket: string;
    propertyid: number;
    p: string;
    isSuperAdmin: boolean;
    userTypeCode: string | number;
    baseUserTypeCode: string | number;
    userId: string | number;
    currentTrigger: any;
    user: User;
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
    private superAdminId;
    componentWillLoad(): void;
    ticketChanged(newValue: string, oldValue: string): void;
    handleResetData(e: CustomEvent): Promise<void>;
    private initializeApp;
    private handleSocketMessage;
    updateUserVerificationStatus(result: {
        id: string | number;
    }): void;
    private fetchUsers;
    private fetchUserTypes;
    disconnectedCallback(): void;
    render(): any;
}
