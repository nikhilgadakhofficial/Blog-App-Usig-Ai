import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableItems from '../../components/adminComponts/BlogTableItems';
import toast from 'react-hot-toast';
import { useAppContext } from '../../contaxt/AppContaxt';
function ListBlog() {
  const [blogs, setBlogs] = useState([]);

  const {axios} = useAppContext();

  const fetchBlog = async()=>{
     try {
      const {data} = await axios.get('/api/admin/blogs');
      if (data.success) {
        setBlogs(data.blogs);
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchBlog();
  },[])
  return (
   <>
   <div className=' flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
    <h1>All Blogs</h1>

 <div className=' relative h-4/5 mt-4 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
        <table className=' w-full text-sm text-gray-600'>
          <thead className=' text-xs text-gray-600 text-left uppercase'>
             <tr>
              <th scope='col' className=' px-2 py-4 xl:px-6'>#</th>
               <th scope='col' className=' px-2 py-4'>Blog Title </th>
                <th scope='col' className=' px-2 py-4 max-sm:hidden'> Date </th>
                <th scope='col' className=' px-2 py-4 max-sm:hidden'>Status</th>
                 <th scope='col' className=' px-2 py-4'> Actions</th>
             </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index)=>{
             return <BlogTableItems key={blog._id} blog={blog} fetchBlog={fetchBlog} index={index+1} />
})}
          </tbody>
        </table>

      </div>

   </div>
   </>
  )
}

export default ListBlog