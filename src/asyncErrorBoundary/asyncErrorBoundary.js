function asyncErrorBoundary(delegate, defaultStatus) {
  return (request, response, next) => {
    Promise.resolve()
      .then(() => delegate(request, response, next)) //the callback is executed upon the Promise is fulfilled/resolve
      .catch((error = {}) => {
        //the callback is executed upon the Promise is rejected
        const { status = defaultStatus, message = error } = error;
        next({
          status,
          message,
        });
      });
  };
}

module.exports = asyncErrorBoundary;
