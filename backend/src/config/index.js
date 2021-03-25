import { config } from "dotenv";

config();

 const PORT = process.env.PORT;
 const MONGO_URL = process.env.MONGO_URL;
 const URL = process.env.URL;


 export { PORT , MONGO_URL, URL }