import { z } from './index4.js';

const SignInValidtor = z.object({
    email: z.string().email(),
    booking_nbr: z.string().min(4),
});
const SignUpValidtor = z.object({
    email: z.string().email(),
    password: z.string().min(4),
    first_name: z.string().min(1),
    last_name: z.string().min(1),
});

export { SignInValidtor as S, SignUpValidtor as a };

//# sourceMappingURL=auth.validator.js.map