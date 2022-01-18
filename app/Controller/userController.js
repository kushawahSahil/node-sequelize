const bcrypt = require('bcrypt');
const saltRounds = 10;
const { GeneralResponse } = require("../utils/response");
const { GeneralError } = require("../utils/error");
const config = require("../utils/config");
const logger = require('../loggers/logger');
const db = require('../dbConnection/db');
const user = db.user;



exports.registration = async (req, res, next) => {
    try {
        const findUser = await user.findOne({ where: { Email: req.body.Email } });
        if (!findUser) {
            const encryptedPassword = await bcrypt.hash(req.body.Password, saltRounds);
            const value = {
                Name: req.body.Name,
                gender: req.body.gender,
                Image: req.file.filename,
                Email: req.body.Email,
                Password: encryptedPassword,
            }
            const registerUser = await user.create(value);
            if (registerUser) {
                await next(
                    new GeneralResponse(
                        req.body.Name + "Successfully Registered....",
                        undefined,
                        config.HTTP_CREATED
                    )
                );


            } else {
                await next(
                    new GeneralError(
                        "User Registration Failed....",
                        undefined,
                        config.HTTP_ACCEPTED
                    )
                );
            }
        } else {
            await next(
                new GeneralError(
                    "User email already exist",
                    undefined
                )
            );
        }

    } catch (err) {
        logger.error("err", err)
    }
}


exports.login = async (req, res, next) => {
    try {
        const User = await user.findOne({ where: { Email: req.body.Email } });
        if (User == null) {
            res.send("User Not Found...");
        }
        const compare = await bcrypt.compare(req.body.Password, User.Password);
        if (compare) {
            await next(
                new GeneralResponse(
                    "Login Successfully.....",
                    undefined,
                    config.HTTP_CREATED
                )
            );
        } else {
            await next(
                new GeneralError(
                    "Email and Password Incorrect...",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }

    } catch (err) {
        logger.error("err", err)
    }

};


exports.viewProfile = async (req, res, next) => {
    const Email = req.user.Email
    try {

        const User = await user.findOne({ where: { Email } });
        if (User) {
            res.send(User);
        } else {

            await next(
                new GeneralError(
                    "ViewProfile is Not Showing...",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );

        }

    } catch (err) {
        logger.error("err", err)
    }
};

exports.updateProfile = async (req, res, next) => {
    try {

        const Email = req.user.Email
        const User = await user.findOne({ where: { Email: Email } });
        if (User) {
            const updateUser = {
                Name: req.body.Name,
                gender: req.body.gender,
                Email: req.body.Email,
            }
            if (req.file) {
                updateUser.Image = req.file.filename
            }

            const updatedUser = await user.update(updateUser, {
                where: { Email: Email }
            });

            if (updatedUser) {
                await next(
                    new GeneralResponse(
                        "User Updated...",
                        undefined,
                        config.HTTP_CREATED
                    )
                );
            }


        } else {

            await next(
                new GeneralError(
                    "User not found.....",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );

        }
    } catch (err) {
        console.log("err", err);
    }

};

exports.resetPassword = async (req, res, next) => {
    try {

        const Email = req.user.Email
        const User = await user.findOne({ where: { Email } });
        if (User) {
            const compare = await bcrypt.compare(req.body.CurrentPassword, User.Password);
            if (compare) {
                const updatePassword = { Password: await bcrypt.hash(req.body.Password, saltRounds) };
                const updateUser = await user.update(updatePassword, { where: { Email: Email } });
                if (updateUser) {
                    await next(
                        new GeneralResponse(
                            "Your Password has been Reset...",
                            undefined,
                            config.HTTP_CREATED
                        )
                    );
                } else {
                    await next(
                        new GeneralError(
                            "Your Password has not been Reset!",
                            undefined,
                            config.HTTP_ACCEPTED
                        )
                    );
                }
            } else {
                await next(
                    new GeneralError(
                        "Current Password is incorrect!",
                        undefined,
                        config.HTTP_ACCEPTED
                    )
                );
            }
        }

    } catch (err) {
        logger.error("err", err)
    }
};