import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 100,
  message: "Too many requests, please try again later.",
});

export default rateLimiter;
