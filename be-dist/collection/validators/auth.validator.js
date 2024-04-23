import { z } from "zod";
export const SignInValidtor = z.object({
    email: z.string().email(),
    password: z.string().min(4),
});
export const SignUpValidtor = z.object({
    email: z.string().email(),
    password: z.string().min(4),
    first_name: z.string().min(1),
    last_name: z.string().min(1),
});
//# sourceMappingURL=auth.validator.js.map
