
// This is a coommon file made for errors (consuming from here)

export const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};
