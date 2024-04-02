"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.deletePost = exports.getPostID = exports.createPost = exports.getPosts = void 0;
const database_1 = __importDefault(require("../database"));
//Consulta
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        try {
            result = yield database_1.default.querySelect('SELECT * FROM post');
            console.log(result);
            if (!result) {
                res.status(200).json({ message: 'sin resultado' });
            }
            res.status(200).json(result);
        }
        catch (e) {
            res.status(400).json({ error: e, message: 'Error en la funcion getPost' });
        }
    });
}
exports.getPosts = getPosts;
//Isertar o Agregar
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = req.body;
        let result;
        try {
            result = yield database_1.default.querySelect('INSERT INTO post SET ?', [newPost]);
            console.log(result);
            newPost.id = result.insertId;
            res.status(200).json({
                message: 'Post Created',
                id: newPost.id
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).json({ error: error, message: 'Error en la funcion getPosts' });
        }
    });
}
exports.createPost = createPost;
//Consultar por ID
function getPostID(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postID;
        let post = [];
        let result;
        try {
            result = yield database_1.default.querySelect('SELECT * FROM post WHERE id = ?', [id]);
            console.log(result);
            if (!result) {
                res.status(200).json('No hay datos');
            }
            post = result;
            res.status(200).json(post);
        }
        catch (error) {
            console.log(error);
            res.status(400).json({ error: error, message: 'Error en la funcion getPostId' });
        }
    });
}
exports.getPostID = getPostID;
//Eliminar o Borrar por ID
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postID;
        let post = [];
        let result;
        try {
            result = yield database_1.default.querySelect('DELETE FROM post WHERE id = ?', [id]);
            console.log(result);
            if (!result) {
                res.status(200).json('No se encontro Post');
            }
            post = result;
            res.status(200).json('Post se elimino correctamente');
        }
        catch (error) {
            console.log(error);
            res.status(400).json({ error: error, message: 'Error al eliminar Post' });
        }
    });
}
exports.deletePost = deletePost;
//Actualizar Datos
function updatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postID;
        const updatePost = req.body;
        let post = [];
        let result;
        try {
            result = yield database_1.default.querySelect('UPDATE post set ? WHERE id = ?', [updatePost, id]);
            console.log(result);
            if (!result) {
                res.status(200).json('No se encontro Post');
            }
            post = result;
            res.status(200).json('Se actualizo exitosamente');
        }
        catch (error) {
            console.log(error);
            res.status(400).json({ error: error, message: 'Error al acutualizar Post' });
        }
    });
}
exports.updatePost = updatePost;
//# sourceMappingURL=post.controller.js.map