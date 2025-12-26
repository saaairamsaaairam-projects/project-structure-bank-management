exports.protectedTest = (req, res) => {
  res.json({
    message: "Protected route accessed successfully",
    user: {
      id: req.user._id,
      email: req.user.email,
    },
  });
};
