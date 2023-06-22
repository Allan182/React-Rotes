import styles from './Error404.module.css';

export default function Error404() {

    return (
        <div className={styles.component}>
            <div className={styles.container}>
                <h1> 404 Error </h1>
                <p> Page not Found.</p>
            </div>
        </div>
    )
}
