import { Request, Response } from "express";
import { UnauthorizedError } from "../helpers/api-error";
import { userRepository } from "../repositories/userRepository";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export class LoginController {
  async login(req: Request, res: Response) {
    const { username, password } = req.body

    const user = await userRepository.findOneBy({ username: username })

    if (!user) {
      throw new UnauthorizedError('E-mail ou senha invalidos!')
    }

    const verifyPass = await bcrypt.compare(password, user.password)

    if (!verifyPass) {
      throw new UnauthorizedError('E-mail ou senha invalidos!')
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', { expiresIn: '8h' })

    const { password: _, ...userLogin } = user

    return res.json({
      user: userLogin,
      token: token,
    })
  }

  async logout(req: Request, res: Response) {
    return res.json('User logged out successfully')
  } 

  async getProfile(req: Request, res: Response) {
    return res.json(req.user)
  }
}