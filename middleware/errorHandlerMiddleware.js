import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    const StatusCode = err.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR
    const msg = err.message || 'ERRRORRRR, Try again Later'
    res.status(StatusCode).json({ msg });
  }

  export default errorHandlerMiddleware;