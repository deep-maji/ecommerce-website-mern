import jwt from 'jsonwebtoken';

export function authenticateUser(req, res, next) {
  const token = req.headers["authorization"]; 

  if (!token) {
    return res.status(401).json({ message: 'You are not logged in' });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decoded.id; 
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}
