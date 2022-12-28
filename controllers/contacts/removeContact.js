const { Contact } = require("..//..//models/contact");

const { HttpError } = require("../../helpers");

const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json({ message: "Contact delete" });
  } catch (error) {
    next(error);
  }
};

module.exports = removeContact;
