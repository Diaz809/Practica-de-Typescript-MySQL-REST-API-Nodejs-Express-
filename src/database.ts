/*import {createPool} from 'mysql2/promise';

export async function connect(){

    const connection = await createPool({

        host: 'localhost',
        user: 'root',
        database: 'node_mysql_ts',
        connectionLimit: 10
    })

    return connection;
};
*/
import mysql from "mysql2/promise";
//import keys from './keys';

class database {

    cnn: any;

    async conectarBD() {
       
        this.cnn = await mysql.createPool({ 
            host: 'localhost',
            password: "",
            user: 'root',
            database: 'node_mysql_ts',
            connectionLimit: 10
        });        
        try {            
            let testconection = await this.cnn.query (`use node_mysql_ts`);
            console.log(`Database node_mysql_ts conected!` );
        } catch (error) {
            console.log(`ERROR database conection!: ${error} `);
        }
    }

    getC() {
        return this.cnn;
    }

    private desconectarDB() {
       
        this.cnn.end(() => { });
    }

    async querySelect(sql: string, data?: any) {

        let result: any = null;
        if (!data) {
            result = await this.cnn.query(sql);
        } else {
            result = await this.cnn.query(sql, data);
        }
       
        return result[0];
    }
}

const db = new database();

export default db;
