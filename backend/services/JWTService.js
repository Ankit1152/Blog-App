// const jwt = require('jsonwebtoken');
// const {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} = require('../config/index');
// const RefreshToken = require('../models/token');

// class JWTService{
//     // 1. Sign Access Token
//     static signAccessToken (payload, expiryTime) {
//         return jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn : expiryTime});
//     }
//     // 2. Sign Refresh Token
//     static signRefreshToken(payload, expiryTime) {
//         return jwt.sign(payload, REFRESH_TOKEN_SECRET, {expiresIn : expiryTime});
//     }
//     // 3. Verify Access Token
//     static verifyAccessToken (token) {
//         return jwt.verify(token, ACCESS_TOKEN_SECRET);     // returns payload
//     }
//     // 4. Verify Refresh Token
//     static verifyRefreshToken (token) {
//         return jwt.verify(token, REFRESH_TOKEN_SECRET);
//     }
//     // 5. Store Refresh Token
//     static async storeRefreshToken (token, userId) {
//         try {
//             const newToken = new RefreshToken({
//                 token : token,
//                 userId : userId
//             });

//             // store in DB
//             await newToken.save();

//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// module.exports = JWTService;

const jwt = require("jsonwebtoken");
const {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
} = require("../config/index");
const RefreshToken = require("../models/token");

class JWTService {
  // sign access token
  static signAccessToken(payload, expiryTime) {
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: expiryTime });
  }

  // sign refresh token
  static signRefreshToken(payload, expiryTime) {
    return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: expiryTime });
  }

  // verify access token
  static verifyAccessToken(token) {
    return jwt.verify(token, ACCESS_TOKEN_SECRET);
  }

  // verify refresh token
  static verifyRefreshToken(token) {
    return jwt.verify(token, REFRESH_TOKEN_SECRET);
  }

  // store refresh token
  static async storeRefreshToken(token, userId) {
    try {
      const newToken = new RefreshToken({
        token: token,
        userId: userId,
      });

      // store in db
      await newToken.save();
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = JWTService;
