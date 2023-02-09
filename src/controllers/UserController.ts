import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-error";
import { userRepository } from "../repositories/userRepository";
import bcrypt from 'bcrypt'

export class UserController {
  async create(req: Request, res: Response) {
    const { name, login, password } = req.body

    const userExists = await userRepository.findOneBy({ login: login })

    if (userExists) {
      throw new BadRequestError('E-mail já cadastrado!')
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = userRepository.create({
      name,
      login,
      password: hashPassword,
    })

    await userRepository.save(newUser)

    const { password: _, ...user } = newUser

    return res.status(201).json(user)
  }
}