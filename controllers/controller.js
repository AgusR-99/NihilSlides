const motd = require("../models/motd");
const asyncWrapper = require("../middleware/async");

const getMotd = asyncWrapper(async (req, res) => {
  const msg = await motd.find({});
  res.status(200).json({ msg });
});

module.exports = { getMotd };
