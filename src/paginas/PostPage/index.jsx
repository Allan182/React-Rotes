import { useParams } from "react-router-dom";
import posts from '../../json/posts.json'
import Error404 from "../../componentes/Error404/Error404";


function PostPage() {

    const parametros = useParams();
    console.log(parametros)

    const post = posts.find(e => e.id == Number(parametros.id))

    if (!post) {
        return (
            <Error404/>
        )
    }

    return (

        <div>
            <p> {post.id} </p>
            <p> {post.slug} </p>

        </div>

    )
}

export default PostPage;
