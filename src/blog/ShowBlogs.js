import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blogs'

//useState devuelve un valor con estado y una funcion para actualizarlo
//useEffect utiliza efecto que no controla 
const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect( () => {
        getBlogs()
    }, [])

    //procedimiento para mostrar todos los blogs 
    //nos conectamos con el backend por axios, le pasamos la URI
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimiento para eliminar un blog
    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`)
        getBlogs()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className='fa-solid fa-plus'></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog) => (
                                <tr key={blog.id}>
                                    <td> {blog.title}</td>
                                    <td> {blog.content}</td>
                                    <td>
                                        <Link to= {`/edit/${blog.id}`} className='btn btn-info' ><i className='fa-regular fa-pen-to-square'></i></Link>
                                        <button onClick={ () => deleteBlog(blog.id) } className='btn btn-danger'><i className='fa-solid fa-trash'></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default CompShowBlogs