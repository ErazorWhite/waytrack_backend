import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  status?: number;
  data?: any;
}

const globalErrorHandler = (
  err: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { status = 500, message = "Server error" } = err;
  if (process.env.NODE_ENV !== "development") {
    res.status(status).json({ message });
  } else {
    res.status(status).json({ msg: message, data: err.data, stack: err.stack });
  }
};

export default globalErrorHandler;
