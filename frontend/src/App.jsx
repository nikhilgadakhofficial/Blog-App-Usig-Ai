import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Layout from "./pages/admin/Layout"
import Dashboard from "./pages/admin/Dashboard"
import AddBlog from "./pages/admin/AddBlog"
import ListBlog from "./pages/admin/ListBlog"
import Comments from "./pages/admin/Comments"
import Login from "./components/adminComponts/Login"
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from "./contaxt/AppContaxt"
function App() {
 
  const {token} = useAppContext()

  return (
  <>
 <div>
  <Toaster/>
  <Routes>

<Route path="/" element={<Home/>}></Route>
<Route path="/blog/:id" element={<Blog/>}></Route>

<Route path="/admin" element={ token ? <Layout/> : <Login/>}>
<Route index element={<Dashboard/>}/>
<Route path="addBlog" element={<AddBlog/>}/>
<Route path="listBlog" element={<ListBlog/>}/>
<Route path="comments" element={<Comments/>}/>
</Route>

  </Routes>
 </div>
  </>
  )
}

export default App
