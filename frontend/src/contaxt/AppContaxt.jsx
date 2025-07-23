import {createContext, useContext, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

const AppContext = createContext();

export const AppProvider = ({children})=>{
    
    const navigate = useNavigate();
    const [token,setTokan]= useState(null);
    const [blogss,setBlogs]=useState([]);
    const[input,setInput]=useState('');

    const fetchBlog = async ()=>{
        try {
         const {data} =  await axios.get('/api/blog/all');
         data.success ? setBlogs(data.blogs) : toast.error(data.message);
        } catch (error) {
            toast.error(error.message)
        }

        
    }


    useEffect(()=>{
        fetchBlog();
        const token = localStorage.getItem('token');
        if (token) {
            setTokan(token);
            axios.defaults.headers.common['Authorization'] = `${token}`
        }
    },[])

    const value = {
        axios,navigate,token,setTokan,blogss,setBlogs,input,setInput
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

}

export const useAppContext = ()=>{
    return useContext(AppContext)
}