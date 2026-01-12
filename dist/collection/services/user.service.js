var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Debounce } from "../decorators/debounce";
import { sleep } from "../utils/utils";
import axios from "axios";
export class UserService {
    async sendVerificationEmail() {
        // throw new Error('Method not implemented.');
        await sleep(400);
    }
    async checkUserExistence(params) {
        const { data } = await axios.post('/CheckUserExistence', params);
        return data.My_Result;
    }
    async handleExposedUser(params) {
        const { base_user_type_code, property_id, ...rest } = params;
        let body = { ...rest };
        if ([1, 4].includes(Number(base_user_type_code))) {
            body = { ...body, property_id };
        }
        const { data } = await axios.post('/Handle_Exposed_User', body);
        console.warn('data<==>', data);
        return data.My_Result;
    }
    async getExposedPropertyUsers({ property_id }) {
        const { data } = await axios.post('/Get_Exposed_Property_Users', { property_id });
        return data.My_Result;
    }
}
__decorate([
    Debounce(300)
], UserService.prototype, "checkUserExistence", null);
//# sourceMappingURL=user.service.js.map
