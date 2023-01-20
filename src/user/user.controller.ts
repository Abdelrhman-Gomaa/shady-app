import { 
    Body, 
    Controller, 
    Get, 
    Post, 
    UseGuards, 
    ValidationPipe 
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { ChangePasswordDto } from './dto/change.password.dto';
import { CreateUserDto } from './dto/create.user.dto';
import { LoginUserDto } from './dto/login.user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Get()
    async findAll(): Promise<User[]>{
        return await this.userService.findAll()
    }

    @Post('/register')
    async register(@Body(ValidationPipe) createUserDto: CreateUserDto){
        return await this.userService.register(createUserDto)
    }

    @Post('/login')
    async login(@Body(ValidationPipe) loginUserDto: LoginUserDto): Promise<{accessToken: string}>{
        return await this.userService.signIn(loginUserDto)
    }

    /*@Post('/changePass')
    @UseGuards(AuthGuard())
    async changePassword(@Body(ValidationPipe) cahngePasswordDto: ChangePasswordDto){
        return await this.userService.changePass(cahngePasswordDto)
    }*/
    
    //@Patch()
    //@Delete()
}
