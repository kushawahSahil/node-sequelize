const passportJwt = require('passport-jwt');
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const db = require('../dbConnection/db');
const user = db.user;

module.exports = (passport) => {
    passport.use(
        new StrategyJwt({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.PRIVATE_KEY
        },
            async (jwtPayload, cb) => {
                await user.findOne({ where: { Email: jwtPayload.Email } }).then((user) => {
                    return cb(null, user);
                }).catch((error) => {
                    return cb(error);
                })
            })
    );
}