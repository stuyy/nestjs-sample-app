import { Controller, Req, Post, UseGuards, Get, Res, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthenticatedGuard } from '../guards/auth.guard';
import { LoginGuard } from '../guards/login.guard';

@Controller()
export class AuthController {

  @UseGuards(LoginGuard)
  @Post('auth/login')
  async login(@Req() req: Request, @Res() res: Response) {
    res
      .status(200)
      .json(req.user);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('auth/authorized')
  async getAuthenticatedUser(@Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.OK).json({ msg: 'Good' });
  }
}
