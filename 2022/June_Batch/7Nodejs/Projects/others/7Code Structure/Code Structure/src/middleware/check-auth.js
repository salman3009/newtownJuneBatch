

module.exports = (req, res, next) => {
  try {
    next();
  } catch (error) {
    res.status(401).json({ message: "You are not authenticated!" });
  }
};
