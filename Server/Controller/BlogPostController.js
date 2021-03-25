import BlogData from "../Model/BlogPostModel.js";

const Posts = [];

class BlogController{
   
    static articles =(req, res) => {
        const blogId =  Posts.length +1;
        let{
            UserId,
            title,
            content,
        } = req.body;
        const timestamp = new Date(Date.now());
        const blog = new BlogData(
            blogId,UserId,title,content,timestamp
        );
        Posts.push(blog);
        const data = Posts.find((blog)=> blog.blogId === blogId);


        if(!data){
            return res.status(417).json({
                status: 417,
                message:"Blog not created",
                data
              });
        }
        return res.status(201).json({
            status: 201,
            message: "Blog created successfully",
            data
        });
    };
    
    static getAllBlogs=(req,res)=>{
        const data = Posts;
        return res.status(200).json({
            status:200,
            message:"all posts",
            data
        })
    }
    static getOneBlog = (req,res) => {

        const blogId = req.params.id;  

        const data = Posts.find(blog=> blog.blogId === parseInt(blogId));//OR const data = Posts.find((blog)=> blog.blogId == (blogId));

        if(!data){
            return res.status(417).json({
                status: 417,
                message:"post not found", 
              });
         
        }
        return res.status(200).json({
            status:200,
            message:"one post",
            data
        })
    }

    
    static deleteOnePost =(req,res) => {
    
        const blogId = req.params.id;  

        const data = Posts.findIndex(blog=> blog.blogId === parseInt(blogId));
        
        if(data > -1){
            Posts.splice(data, 1)
            return res.status(200).json({
                status:200,
                message: "Post deleted",
            
            })
        }  

        return res.status(417).json({
            status:417,
            message: "post does not exist ",
        
        })
    }

    static deleteAllPosts =(req,res) => {
    
        if(data){

        Posts.splice;
       
          return res.status(200).json({
                status:200,
                message: "Posts deleted",
                data
            });
        }
        return res.status(417).json({
            status:417,
            message: "Failed to delete posts ",
        
        })
    }

    static updateBlogPost = (req,res) =>{

        let{
            UserId,
            title,
            content,
        } = req.body;

        const timestamp = new Date(Date.now());

        const blogId =parseInt(req.params.id);    
            
        const dataIndex = Posts.findIndex(blog=> blog.blogId === blogId);

        const blog = new BlogData(blogId,UserId,title,content,timestamp);

        Posts[dataIndex] = blog;

        const data = Posts.find(blog => blog.blogId === blogId);

        if(dataIndex > -1){
            
            // const data = Posts.splice(dataIndex,1,blog );

            return res.status(200).json({
                status:200,
                message: "successfully updated",
                data
            });
    
        }
      return res.status(417).json({
          status : 417,
          message : "failed to update"

      });
    }    
      

}

export default BlogController;