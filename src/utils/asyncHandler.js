const asyncHandeller = (requestHandeller) => async (req, res, next) => {
  try {
    await requestHandeller(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      messsage: error.messsage,
    });
  }
};

export { asyncHandeller };
