import connectDB from './db/index.js'
import {app} from './app.js~'

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4000 ,()=>{
        console.log("server is running at port",process.env.PORT);
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed",err)
});


// const app = express();

// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on('error' , (error)=>{
//             console.log("Err:",error)
//             throw error
//         })
//     } catch (error) {
//         console.log("Error: src/index.js",error);
        
//     }
// })()