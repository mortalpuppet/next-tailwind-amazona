import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '-Amazona' : 'Amazona'}</title>
        <meta name="description" content="An ECommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="h-12 flex justify-between shadow-md item-center">
            <Link className="text-lg font-bold" href="/">
              Amazona
            </Link>
            <div>
              <Link href="/cart">Cart</Link>
              <Link href="/login">Login</Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center h-10 item-center shadow-inner">
          Footer
        </footer>
      </div>
    </>
  );
}
