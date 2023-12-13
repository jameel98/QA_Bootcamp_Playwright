import { request } from "@playwright/test";
import { loginRequest } from "./request/login-request";

const BASE_URL = 'https://www.rami-levy.co.il';

export class LoginApi {

    async login(userData: loginRequest) {
        const context = await request.newContext();
        return await context.post(`${BASE_URL}/api/v2/site/auth/login`, { data: userData })
    }
}