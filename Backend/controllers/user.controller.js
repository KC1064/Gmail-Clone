import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password)
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });

    const user = await User.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({ message: "Email already exists", success: false });

    const Photo = `https://avatar.iran.liara.run/public`;
    const hashedPass = await bcrypt.hash(password, 10);
    await User.create({ fullname, email, password: hashedPass,profilePhoto:Photo});

    return res.status(201).json({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });

    const user = await User.findOne({ email });

    if (!user)
      return res
        .status(401)
        .json({ message: "Incorrect Email or Password", success: false });

    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch)
      return res
        .status(401)
        .json({ message: "Incorrect Password", success: false });

    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        samesite: "strict",
      })
      .json({
        message: `${User.fullname} logged in Succesfully`,
        user,
      });
  } catch (error) {}
};
