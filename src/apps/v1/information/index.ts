import { Request, Response } from "express";
import { getManager, getRepository } from "typeorm";
import { UserAccount } from "../../../entity/user_account";

const insert = [
  async (req: Request, res: Response) => {
    const entityManager = getManager()

    let user = new UserAccount({
      email : `emailtest@gmail.com`,
      password: `passwordtest12345`
    });

    try {
      let userCreated = await entityManager.save(UserAccount, user)

      if (userCreated)
      {
        await res.status(200).json(
          {
            code: 200,
            message: "Insert Succeed",
            data: userCreated
          }
        )
      } else {
        await res.status(400).json(
          {
            code: 400,
            message: "Insert Failed"
          }
        )
      }
    } catch (err) {
      await res.status(401).json(
        {
          code: 401,
          message: err
        }
      )
    }
  }
]

const list = [
  async (req: Request, res: Response) => {
    let users = await getManager().find(UserAccount);
    if (users) {
      await res.status(200).json(
        {
          code: 200,
          message: "List Information",
          data: users
        }
      )
    } else {
      await res.status(400).json(
        {
          code: 400,
          message: "Get List Failed"
        }
      )
    }
  }
]

const get = [
    async (req: Request, res: Response) => {
        await res.status(200).json(
          {
            code: 200,
            message: "Get Information"
          }
        );
    }
]

const find = [
  async (req: Request, res: Response) => {
      await res.status(200).json(
        {
          code: 200,
          message: "Find Information"
        }
      );
  }
]

export default {
  insert,
  get,
  find,
  list
}