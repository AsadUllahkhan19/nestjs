import { AuthService } from "./auth.service";
import { Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(response: Response): void;
}
