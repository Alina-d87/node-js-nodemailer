const { User } = require("../../models/user");

const { HttpError, sendEmail } = require("../../helpers");

require("dotenv").config();
const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.verify) {
    throw HttpError(404, "Missing required field email");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify you email",
    html: `<a target="blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.json({ message: `Verefy email resend` });
};
module.exports = resendVerifyEmail;
