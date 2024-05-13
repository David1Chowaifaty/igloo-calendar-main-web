export declare class IrGoogleAuth {
    componentDidLoad(): void;
    loadGoogleSignInScript(): void;
    initializeGoogleSignIn(): void;
    handleCredentialResponse(response: any): Promise<void>;
    signOut(): void;
    render(): any;
}
