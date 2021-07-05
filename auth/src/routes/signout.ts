import express from "express";

const router = express.Router();

router.post(
  "/api/users/signout",
  (req: express.Request, res: express.Response) => {
    req.session = null;
    res.send({ message: "Signed out successfully!" });
  }
);

export { router as signoutRouter };
