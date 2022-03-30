import Head from 'next/head'
import Image from 'next/image'
import test1 from '../public/test1.png';
import test2 from '../public/test2.png';
import test3 from '../public/test3.jpeg';

const RemoteUrl = 'https://s1.ax1x.com/2022/03/29/qcCko6.jpg';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next App 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">Unoptimized</h1>
      <main>
        <div>Layout: fill</div>
        <div style={{ width: '100%', height: '50vh', overflow: 'hidden', position: 'relative' }}>
          <Image
            unoptimized
            src={test1}
            alt="test1"
            layout='fill'
            loading='eager'
          />
        </div>
        <div>Layout: responsive</div>
        <div style={{ width: '100%' }}>
          <Image
            unoptimized
            src={RemoteUrl}
            alt="remote"
            width={2048}
            height={1365}
            layout='responsive'
            loading='eager'
          />
        </div>
        <div>Layout: intrinsic</div>
        <div>
          <Image
            unoptimized
            src={test2}
            alt="test2"
            layout='intrinsic'
            loading='eager'
          />
        </div>

        <div>Layout: fixed</div>
        <div>
          <Image
            unoptimized
            src={test3}
            alt='test3'
            width={1280}
            height={854}
            layout='fixed'
            loading='eager'
          />
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          width: 100%;
          margin: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
