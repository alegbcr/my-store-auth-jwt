const express = require('express');
const router = express.Router();
const passport = require('passport');

const InventoryService = require('../services/inventory.service');

const { checkRoles } = require('../middlewares/auth.handler');
const validatorHandler = require('../middlewares/validator.handler');

const {
  createInventorySchema,
  // updateInventorySchema,
  // getInventorySchema,
} = require('../schemas/inventory.schema');

const service = new InventoryService();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  async (req, res) => {
    const inventory = await service.find();
    res.json(inventory);
  }
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  validatorHandler(createInventorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newInventory = await service.create(body);
      res.status(201).json(newInventory);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
