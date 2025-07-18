import Blog from "../models/Blog";


export const addBlog = async (req,res)=>{
    try {
        const {title,subTitle,description,category,isPublished } = JSON.parse(req.body.blog);

        const imageFile = req.file;

        if (!title || !description || !category || !isPublished) {
            return res.json({
                success : false,
                message : "Missing required fields",
            });
        }

        

    } catch (error) {
        
    }
}