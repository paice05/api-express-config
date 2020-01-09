module.exports = (req, res, next) => {
  if (req.params.id >= 9) {
    next();
  } else {
    return res.status(401).json({
      message: "unauthorized"
    });
  }
};
