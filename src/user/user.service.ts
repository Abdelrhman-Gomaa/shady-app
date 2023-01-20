import { ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { Op } from 'sequelize';
import { ChangePasswordDto } from './dto/change.password.dto';
import { CreateUserDto } from './dto/create.user.dto';
import { LoginUserDto } from './dto/login.user.dto';
import { User } from './entities/user.entity';
import {JwtPayload} from './jwt.payload.interface'

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: typeof User,
        private readonly jwtService: JwtService
    ){}

    async findAll() {
        return await this.userRepository.findAll({include: {all: true}})
    }

    async register(createUserDto: CreateUserDto){
        const existUser = await this.userRepository.findOne({
            where: {
                [Op.or]: [{ username: createUserDto.username }, { email: createUserDto.email }]
            }
        })
        if(existUser) throw new ConflictException('username or email already exist')

        const salt = await bcrypt.genSalt()
        const password = createUserDto.password
        const hashPassword = await bcrypt.hash(password, salt)

        try{
            return await this.userRepository.create({
                username: createUserDto.username,
                email: createUserDto.email,
                salt: salt,
                password: hashPassword,
                isAdmin: createUserDto.isAdmin,
                nation: createUserDto.nation,
                phoneNumber: createUserDto.phoneNumber
            })
        }catch(error){
            console.log(error.message)
        }
        
    }

    async signIn(loginUserDto: LoginUserDto): Promise<{accessToken: string}>{
        const user = await this.validationUserPassword(loginUserDto)
        if(!user) {
            throw new UnauthorizedException('Invalid Credentials')
        }

        const payload: JwtPayload = { email: user.email , isAdmin: user.isAdmin }
        const accessToken = await this.jwtService.sign(payload)
        return { accessToken }
    }

    /*async changePass(changePasswordDto: ChangePasswordDto){
        const user = await this.validationUserPassword(changePasswordDto)
        
        const salt = await bcrypt.genSalt()
        const newpassword = changePasswordDto.newPassword
        const hashPassword = await bcrypt.hash(newpassword, salt)
        
                    
        //let newPass = await user.password
        try{
            user.password = hashPassword
            //return newPass
            return await this.userRepository.update({password: user.password},{where : {password : user.password}})
        }catch(error){
            return error.message
            //  throw new UnauthorizedException('Invalid Password')
            console.log(error.message)
        }
        //$2b$10$U06D9QeYFHYZmx8qeS/cQe2EGnQ8dhz6t/LS7boF0ZsF4cLHmaLNK
        
    }*/

    async validationUserPassword(loginUserDto: LoginUserDto){
        const user = await this.userRepository.findOne({where: {email: loginUserDto.email}})
        if(user){
            if(await user.validatePassword(loginUserDto.password)){
                const uservalidate = {
                    email: user.email,
                    isAdmin: user.isAdmin,
                    password: user.password
                }
                return uservalidate;
            }else{
                throw new UnauthorizedException('Invalid Password')
            }
        }else{
            return null;
        }
    }

}
