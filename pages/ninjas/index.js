import styles from '../../styles/Ninjas.module.css';
import Head from '../../comps/Head';
import { BASE_URL, USER_URL } from '../../constants/api';
import Link from 'next/link';

export const getStaticProps = async () => {

    const response = await fetch(BASE_URL + USER_URL);
    const data = await response.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    
    console.log(ninjas)

    return ( 
        <>
            <Head title={"All Ninjas"} />
            <div>
                <h1>All Ninjas</h1>
                {ninjas.map(ninja => (
                    <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                        <a className={styles.single}>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>    
                ))}
            </div>
        </>
     );
}
 
export default Ninjas;