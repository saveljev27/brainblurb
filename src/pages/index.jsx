import MainContent from '@/components/MainContent';
import logo from '/public/assets/logo.svg';
import Head from 'next/head';
import PageHead from '@/components/PageHead';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHead
        title={'Brainblurb | Home'}
        description={'Brainblurb'}
        ogImg={logo.src}
      />
      <div className="flex overflow-hidden flex-col bg-white">
        <MainContent />
      </div>
    </>
  );
}
