import Link from 'next/link'
import Head from 'next/head';
import { useState } from 'react';
import styles from './index.module.css';
import utilStyles from './utils.module.css';

const siteTitle = 'Práctica DMSI';
const name = 'Borja Medina Ramos';

export default function HomeLayout({ children }) {
  return (
    <div className={utilStyles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Página para el desarrollo de la práctica de NEXT.js, REACT Y REST" />
        {/* Otras etiquetas meta y enlaces pueden ir aquí */}
      </Head>
      <header className={utilStyles.header}>
        <Link href="/">
            <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
        </Link>
        <nav>
          <Link href="/pet">
            Ir a la página de mascotas
          </Link>{' '}
          |{' '}
          <Link href="/images">
            Ir a la página de imágenes
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={utilStyles.footer}>
        <p>&copy; {new Date().getFullYear()} {name}</p>
      </footer>
    </div>
  );
}
