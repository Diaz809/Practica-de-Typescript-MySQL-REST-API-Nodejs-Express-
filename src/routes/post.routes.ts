import { Router } from "express";
import { getPosts, createPost, getPostID,deletePost, updatePost } from "../controllers/post.controller";

class Posts {
    public  router: Router = Router ();

    constructor(){
        this.config()
    }

    config(): void{

        this.router.get('/all', getPosts);
        this.router.post('/add', createPost);
        this.router.get('/consultaid/:postID', getPostID);
        this.router.delete('/borrar/:postID', deletePost);
        this.router.put('/update/:postID', updatePost)

    }
}

const post = new Posts;
export default post.router;
