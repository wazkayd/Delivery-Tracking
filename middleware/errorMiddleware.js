const notFound = (req, res, next) => {
  res.status(404).json({
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
};

const errorHandler = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      message: 'Invalid JSON payload'
    });
  }

  const status = err.status || err.statusCode || 500;
  const message =
    status === 500 ? 'Server error' : err.message || 'Request failed';

  res.status(status).json({ message });
};

module.exports = {
  notFound,
  errorHandler
};
