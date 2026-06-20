import logger from '../utils/logger.js';
import { NodeEnv } from '../constants/common.js';
const errorMiddleware = (err, req, res, next) => {
	logger.error(err.message, err.stack);
	if (res.headersSent) return next(err);
  res.status(500).json({ message: 'Something went wrong!' });
};
export default errorMiddleware;
export { errorMiddleware };