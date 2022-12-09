import Link from 'next/link';
import styles from '../../styles/Content.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {content: data}
    };
}

const Content = ({ content }) => {
    return (
        <div>
            {content.map((item) => (
                <Link href={`/content/${item.id}`} key={item.id}>
                    <h3 className={styles.single}>{item.name}</h3> 
                </Link>
            ))}
        </div>
    );
}

export default Content;