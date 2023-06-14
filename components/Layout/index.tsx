import Head from "next/head";
import HeaderNav from "../HeaderNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Head>
          <title>Movie Club</title>
          <meta name="description" content="Movie Club" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderNav />
        <div>{children}</div>
      </div>
    </>
  );
}
