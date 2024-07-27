import connectDB from './db/index.js'

connectDB();


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