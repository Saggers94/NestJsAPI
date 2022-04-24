import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
// import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // When you work with Nest JS, never use the underlying object of "Express"
  // Through req: Request, we can access the Express Request object and we can show "req.header", "req.body"
  // @Post('signup')
  // signup(@Req() req: Request) {
  //   console.log(req.body);
  //   return this.authService.signup();
  // }

  //The main advantage of using "@Body" is nest would get you right body based on the framework for you
  // @Post('signup')
  // signup(@Body() dto: AuthDto) {
  //   console.log({
  //     dto,
  //   });
  //   return this.authService.signup();
  // }

  // Using "ParseIntPipe" we validate the incoming data to make sure that it is a type of Int.
  // @Post('signup')
  // signup(
  //   @Body('email') email: string,
  //   @Body('password', ParseIntPipe) password: string,
  // ) {
  //   console.log({
  //     email,
  //     typeOfEmail: typeof email,
  //     typeOfPassword: typeof password,
  //     password,
  //   });
  //   return this.authService.signup();
  // }

  // Using Pipes for validation is very verbose because of which there's one more cleaner way to have
  // the validation on the data with 'class-validator' and
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log({
      dto,
    });
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
