import { Express } from "express-serve-static-core";
import User from "../needs/User";



const router = express.Router();

router.get("/getuser/:id",async(req,res)=>{
   
        const user = await User.findbyId(req.params.id);
    
});