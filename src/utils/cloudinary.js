import { v2 as cloudinary} from 'cloudinary';
import fs from 'fs'

cloudinary.config(
    {
        cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
        api_key : process.env.CLOUDINARY_API_KEY,
        api_secret : process.env.CLOUDINARY_API_SECRET
    }
)

const uploadOnCloudinary = async (localFilePath) =>{
    try {
        const response =  await cloudinary.uploader.upload(localFilePath , {
            resource_type : 'auto'
        })
        console.log('file is successfully uploaded on cloudinary url : ',response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)
        console.log('The file is not uploaded successfully on cloudinary')
        return null; 
    }
}

export {uploadOnCloudinary}  