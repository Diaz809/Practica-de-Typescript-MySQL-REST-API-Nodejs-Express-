"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(index_controller_1.IndexWelcome);
exports.default = router;
//# sourceMappingURL=index.routes.js.map