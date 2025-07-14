import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets';

function Comments() {
  const [comments,setComments] = useState([]);
  const [filter, setFilter] = useState('Not Approved');

  const fetchComments = ()=>{
    setComments(comments_data);
  }
  useEffect(()=>{
    fetchComments();
  },[])
  return (
    <div className=' flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
     <div className=' flex justify-between items-center max-w-3xl'>
      <h1>Comments</h1>
      <div className=' flex gap-4'>

      <button onClick={()=>{setFilter('Approved')}} className={` shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === "Approved" ? " text-primary" : " text-gray-700"}`}>Approved</button>

      <button onClick={()=>{setFilter("Not Approved")}} className={` shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === "Not Approved" ? " text-primary" : " text-gray-700"}`}>Not Approved</button>
      </div>

     </div>

    <div className=' relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg scrollbar-hide'>
    <table className=' w-full text-sm text-gray-500 '>
        <thead>
          <tr>
            <th scope='col' className=' px-6 py-3 '>Blog Title & Comment</th>
            <th scope='col' className=' px-6 py-3 max-sm:hidden'>Date</th>
            <th scope='col' className=' px-6 py-3 '>Action</th>
          </tr>
        </thead>
        <tbody>
          {comments_data.filter((comment)=>{
            if (filter === "Approved") {
              return comment.isApproved === true
            }
            return comment.isApproved === false;
          }).map((comm))}
        </tbody>
    </table>
    </div>

    </div>
  )
}

export default Comments