import styles from './Post.module.css'

export default function Post(props) {

    return (
        <div className={styles.post}>
            <div className={styles.id}>
                {props.post.id}
            </div>

            <div className={styles.container}>
                <span className={styles.titulo}> Curso: {props.post.title} </span>
                <span className={styles.slug}> Slug: {props.post.slug} </span>
            </div>

        </div>
    )
}
