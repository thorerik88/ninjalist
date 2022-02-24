import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>Pariatur nostrud magna magna commodo incididunt veniam id culpa eu nisi. Officia esse elit do magna duis excepteur excepteur est cupidatat nulla tempor fugiat adipisicing. Minim ea mollit occaecat sint et non consectetur minim irure culpa ea mollit excepteur.</p>
      <p className={styles.text}>Pariatur nostrud magna magna commodo incididunt veniam id culpa eu nisi. Officia esse elit do magna duis excepteur excepteur est cupidatat nulla tempor fugiat adipisicing. Minim ea mollit occaecat sint et non consectetur minim irure culpa ea mollit excepteur.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  )
}
