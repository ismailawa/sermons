import { Controller, Get, Post, Body, Request, Param, Put, Delete, Req, UseGuards, Logger} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
    private readonly logger = new Logger(UsersController.name);

    constructor(private readonly usersService: UsersService){}

    @Post()
    createUser(
     @Body() user: createUserDto ){
      return this.usersService.createUser(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getUsers(@Request() req): any {
        this.logger.log(req.id);
        return this.usersService.getUsers();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    getUser(@Param("id") id: string): any {
        
    }

    @UseGuards(JwtAuthGuard)
    @Put(":id")
    editUser(@Param("id") id: string): any {
       
    }

    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    deleteUser(@Param("id") id: string): any {
       
    }
}