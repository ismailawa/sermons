import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findUser(email);

        if (user) {

            try {
                const isMatch = await bcrypt.compare(password, user.password as string);
                if (isMatch) {
                    return user;
                }
                return null
            } catch (error) {
                return error;
            }
        }
        return null;
    }

    async login(user: any) {
        const payload = { user: user, id: user._id };
        this.logger.log(payload);
        return {
            token: this.jwtService.sign(payload),
            user: user
        }
    }
}
