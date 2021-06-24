import express from "express";
import { User } from "../models/user";
import { body } from "express-validator";
import { validateRequest } from "../middlewares/validate-request";
import { BadRequestError } from "../errors/bad-request-error";
import jwt from "jsonwebtoken";

interface RequestBody {
  email: string;
  password: string;
}

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters long"),
  ],
  validateRequest,
  async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body as RequestBody;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError("Email is in use!");
    }

    const user = User.build({ email, password });
    await user.save();

    // generate a jwt

    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );

    // store on the session object

    req.session = {
      jwt: userJwt,
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
