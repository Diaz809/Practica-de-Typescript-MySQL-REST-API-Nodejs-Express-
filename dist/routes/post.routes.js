"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
class Posts {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/all', post_controller_1.getPosts);
        this.router.post('/add', post_controller_1.createPost);
        this.router.get('/consultaid/:postID', post_controller_1.getPostID);
        this.router.delete('/borrar/:postID', post_controller_1.deletePost);
        this.router.put('/update/:postID', post_controller_1.updatePost);
    }
}
const post = new Posts;
exports.default = post.router;
//# sourceMappingURL=post.routes.js.map