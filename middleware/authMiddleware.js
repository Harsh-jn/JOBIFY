import { UnauthenticatedError , UnauthorizedError , BadRequestError} from "../errors/customError.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser =  (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("authentication invalid");

  try {
    const {userId,role} = verifyJWT(token);

    const testuser = userId === '652564a95810be5952f99d16'

    req.user = {userId,role ,testuser};
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
};

export const authorizePermissions = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        throw new UnauthorizedError('Unauthorized to access this route');
      }
      next();
    };
  };

  export const checkForTestUser = (req,res,next) =>{
    if(req.user.testuser) throw new BadRequestError('Demo User, Read Only!!');
    next();
  }