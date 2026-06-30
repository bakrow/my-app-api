import jwt from "jsonwebtoken";

export const generateToken = (
  payload,
  secret = process.env.JWT_SECRET,
  expiresIn = process.env.JWT_EXPIRES_IN,
) => {
  return jwt.sign(payload, secret, { expiresIn: expiresIn || '1h' });
};

export const verifyToken = (token, secret = process.env.JWT_SECRET) => {
  return jwt.verify(token, secret);
};
