const express = require('express');
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.visitor);
//localhost:8000/visitor
router.post("/register", controller.register);
//localhost:8000/visitor/register
router.delete("/delete", controller.delete);
//localhost:8000/visitor/register
router.get("/get_visitor", controller.get_visitor_by_id);

router.patch("/update", controller.update_visitor);

module.exports = router;