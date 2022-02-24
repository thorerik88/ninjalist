import { useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [router])

    return ( 
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <h2>You will be re-directed in 3 seconds...</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;