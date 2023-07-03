import jwt from "jsonwebtoken";
const sign = (payload) => {
  return jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
};
const verify = (payload) => {
  return jwt.verify(payload, process.env.SECRET);
};
export { sign, verify };
