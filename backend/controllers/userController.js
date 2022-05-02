const User = require("../models/userModel.js");
const bcryptjs = require("bcryptjs");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "Your Email",
    pass: "Your Password",
  },
});

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ success: false, error: "All fields required" });
    }

    const findUser = await User.findOne({ email });
    if (findUser) {
      return res
        .status(400)
        .json({ success: false, error: "User already exists" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    let mailOptions = {
      from: "sandeshhiremath034@gmail.com",
      to: email,
      subject: "Welcome From Codehub",
      text: `Welcome ${username} to Codehub.`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      }
    });
    res.status(201).json({ success: true, user });
  } catch (error) {
    console.log(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, error: "All fields required" });
    }
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid Login Credentials" });
    }
    const passValid = await bcryptjs.compare(password, findUser.password);
    if (!passValid) {
      res
        .status(400)
        .json({ success: false, error: "Invalid Login Crendentials" });
    } else {
      res.status(200).json({ success: true, user: findUser });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
