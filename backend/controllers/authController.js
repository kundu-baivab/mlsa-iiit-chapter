const User = require("../models/users");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const maxTime = 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "secret key", {
    expiresIn: maxAge,
  });
};

const createTok = (key) => {
  return jwt.sign({ key }, "sec key", { expiresIn: maxTime });
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

const handleErrors = (err) => {
  console.log(err.message, err.code);

  let errors = {
    username: "",
    email: "",
    password: "",
  };

  if (err.message === "incorrect username") {
    errors.username = "The username is not registered";
  }
  if (err.message === "incorrect password") {
    errors.password = "The password is incorrect";
  }

  if (err.code === 11000) {
    errors.email = "The email is already registered";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.signup_post = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    const token = createToken(user._id);

    //for production httpOnly, for application httpSecure
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });

    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.opening_get = (req, res) => {
  res.render("opening");
};

module.exports.opening_post = async (req, res) => {
  // const { password } = req.body;
  try {
    const tok = createTok("letmein12345");
    res.cookie("access", tok, { httpOnly: true, maxAge: maxTime });
    res.status(200).json({ message: "Token created successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Token creation failed" });
  }
};

module.exports.logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.cookie("access", "", { maxAge: 1 });
  res.redirect("/adminlogin");
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.login_post = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);

    const token = createToken(user._id);
    //for production httpOnly, for application httpSecure
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });

    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
