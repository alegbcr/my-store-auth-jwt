const express = require('express');
const passport = require('passport');

const AuthService = require('../services/auth.service');
const validatorHandler = require('../middlewares/validator.handler');
const { recoveryPassword } = require('../schemas/user.schema');
const service = new AuthService();

const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

router.post('/recovery', async (req, res, next) => {
  try {
    const { email } = req.body;
    const mail = await service.sendRecoveryMail(email);
    res.json(mail);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/change-password',
  validatorHandler(recoveryPassword, 'body'),
  async (req, res, next) => {
    try {
      const { token, newPassword } = req.body;
      const mail = await service.changePassword(token, newPassword);
      res.json(mail);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
