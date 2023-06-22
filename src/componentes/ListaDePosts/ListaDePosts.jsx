import posts from '../../json/posts.json'
import Post from '../Post'

export default function ListaDePosts() {

    return (
        posts.map(e => {
            return <Post post={e}/>
        })
    )
  }
  