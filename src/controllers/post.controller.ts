import {Request, Response} from 'express';
import  db  from '../database';
import { Post } from '../interface/post.interface';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';


//Consulta
export async function getPosts(req: Request, res: Response): Promise<void>{
    let result: any;
    try {
        result = await db.querySelect('SELECT * FROM post');
        console.log(result)
        if (!result){
          res.status(200).json({message: 'sin resultado'})
        }
        
        res.status(200).json(result);
    } catch (e) {
        res.status(400).json({error: e, message: 'Error en la funcion getPost'})
    }
    
    
}

//Isertar o Agregar
export async function createPost(req: Request, res: Response) {

    const newPost: Post = req.body;
    let result: any;
    try {

        result = await db.querySelect('INSERT INTO post SET ?', [newPost]);
        console.log(result)
        newPost.id = result.insertId;
        res.status(200).json({
            message: 'Post Created',
            id: newPost.id

        });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error, message: 'Error en la funcion getPosts'})
        
    }

}


//Consultar por ID
export async function getPostID(req: Request, res: Response) {

    const id = req.params.postID;
    let post: Post[]=[];
    let result: any;

    try {

        result = await db.querySelect('SELECT * FROM post WHERE id = ?', [id]);
    
        console.log(result)
        if(!result){
            res.status(200).json('No hay datos')
        }
        post = result
        res.status(200).json(post)
        
    } catch (error) {

        console.log(error);
        res.status(400).json({ error: error, message: 'Error en la funcion getPostId'})

    }
}

//Eliminar o Borrar por ID
export async function deletePost(req: Request, res: Response) {

    const id = req.params.postID;
    let post: Post[]=[];
    let result: any;

    try {

        result = await db.querySelect('DELETE FROM post WHERE id = ?', [id]);
    
        console.log(result)
        if(!result){
            res.status(200).json('No se encontro Post')
        }
        post = result
        res.status(200).json('Post se elimino correctamente')
        
    } catch (error) {

        console.log(error);
        res.status(400).json({ error: error, message: 'Error al eliminar Post'})

    }
}


//Actualizar Datos
export async function updatePost(req: Request, res: Response) {

    const id = req.params.postID;
    const updatePost: Post = req.body;
    let post: Post[]=[];
    let result: any;

    try {

        result = await db.querySelect('UPDATE post set ? WHERE id = ?', [ updatePost, id ]);
    
        console.log(result)
        if(!result){
            res.status(200).json('No se encontro Post')
        }
        post = result
        res.status(200).json('Se actualizo exitosamente')
        
    } catch (error) {

        console.log(error);
        res.status(400).json({ error: error, message: 'Error al acutualizar Post'})

    }
}