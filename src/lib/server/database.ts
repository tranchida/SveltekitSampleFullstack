import { DataSource } from "typeorm";
import { Users } from "../../entity/Users"
import 'dotenv/config';

class TypeOrm {
    private static instance: Promise<DataSource> | null = null;
  
    private constructor() {
      // Private constructor to prevent external instantiation
    }
  
    public static getDb(): Promise<DataSource> {
        console.log('DATABASE_URL:', process.env.DATABASE_URL);
      if (!TypeOrm.instance) {
        TypeOrm.instance = new DataSource({
          type: 'postgres',
          url: process.env.DATABASE_URL,
          synchronize: true,
          entities: [Users],
          migrations: [],
          subscribers: [],
          logging: false,
        })
          .initialize()
          .then((fulfilled) => {
            console.info('Data Source has been initialized!');
            return fulfilled;
          })
          .catch((err) => {
            console.error('Error during Data Source initialization', err);
            throw err;
          });
      }
      return TypeOrm.instance;
    }
  }
  
  export default TypeOrm;