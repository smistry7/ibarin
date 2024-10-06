import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout/Layout';
import Ring from '../public/assets/icons/ring.svg';

import Location from '../public/assets/icons/location.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Header Mobile */}
        <section
          id="beranda"
          className="flex lg:hidden bg-cover bg-center  w-full h-screen  items-start py-14"
          style={{ backgroundImage: 'url(/assets/prewedding-home.png)' }}
        >
          <div className="flex flex-col  w-full relative">
            <div className="absolute h-full w-full bg-dark-450 bg-blur-2px"></div>
            <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10">
              <p className="font-habibi ">Marriage of</p>
              <h4 className="font-great-vibes text-5xl mb-4 mt-6">
                Simon & Corlyn
              </h4>
              <p className="font-habibi ">5 May 2025</p>
            </div>
          </div>
        </section>
        {/* End Header Mobile */}
        <section
          id="beranda-dekstop"
          className="hidden lg:grid bg-dark-500 py-14 lg:py-0 mb:pb-6 grid-flow-col grid-cols-2 gap-4 row-span-4 h-screen"
        >
          <div className="flex flex-col text-white px-8 pb-20 pt-28 justify-end">
            <div className="flex flex-col text-center my-auto">
              <p>
                “Love is patient, love is kind. It does not envy, it does not boast, it is not proud.
                 It does not dishonor others, it is not self-seeking, it is not easily angered, 
                 it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. 
                 It always protects, always trusts, always hopes, always perseveres.”
              </p>
              <p>( Corinthians 13:4-7 (NIV) )</p>
            </div>
            <div className="flex flex-col ">
              <p className="font-habibi">Marriage of</p>
              <h4 className="font-great-vibes text-5xl mb-4 mt-6">
                Simon & Corlyn
              </h4>
              <p className="font-habibi ml-auto">5 May 2025</p>
            </div>
          </div>
          <div className="flex w-full relative">
            <Image
              src="/ibarin/assets/prewedding-home.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
        </section>
        <section
          id="resepsi"
          className="bg-dark-500 py-14  mb:pb-6 grid grid-flow-row gap-4 row-span-4 h-screen"
        >
          <div className="flex flex-col  w-full relative lg:h-full">
            <div className="absolute h-full w-full bg-dark-450 bg-blur-2px lg:hidden"></div>
            <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10 lg:my-auto">
              <p className="font-habibi lg:hidden">Marriage of</p>
              <h4 className="font-great-vibes text-5xl lg:text-7xl mb-4 mt-6 ">
                Simon & Corlyn
              </h4>
              <p className="lg:hidden font-habibi ">5 May 2025</p>
            </div>
          </div>
          <div className="flex w-full px-8 text-white font-habibi text-sm md:text-base lg:text-xl">
            <div className="flex flex-col w-1/2 text-center px-2 break-words">
              <p>Son of</p>
              <p>Simon dad</p>
              <p>Simon mom</p>
            </div>
            <div className="flex flex-col w-1/2 text-center px-2 break-words ">
              <p>Daughter of</p>
              <p>Corlyn dad</p>
              <p>Corlyn mom</p>
            </div>
          </div>
          <div className="flex flex-col mx-auto h-40 lg:h-full items-center justify-center w-full px-8">
            <div className="flex flex-col md:flex-row w-full">
              <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
                <Ring className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto" />
                <div className="flex flex-col text-white font-habibi justify-between h-full">
                  <p className="text-base md:text-lg lg:text-3xl">
                    Marriage ceremony{' '}
                  </p>
                  <p className="text-xs md:text-base lg:text-lg">
                     08.00 - 10.00am
                  </p>
                </div>
              </div>

              <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
                <img
                  src="/ibarin/assets/icons/resepsi.svg"
                  className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto"
                />
                <div className="flex flex-col text-white font-habibi justify-between h-full">
                  <p className="text-base md:text-lg lg:text-3xl">Reception </p>
                  <p className="text-xs md:text-base lg:text-lg">
                     7:00pm 
                  </p>
                </div>
              </div>
            </div>
            <p className="hidden md:block mt-12 lg:mt-auto mx-auto text-lg text-white font-habibi">
              Pendrell Hall, Codsall Wood, Wolverhampton, WV8 1QP            
            </p>
          </div>
        </section>
        <section
          id="gallery"
          className="bg-dark-500 pt-8 md:pt-0 lg:pt-32 pb-24 lg:pb-8 grid grid-flow-row gap-4 grid-rows-7 lg:grid-rows-5 grid-cols-2 lg:grid-cols-3 h-screen px-4 lg:px-8"
        >
          <h1 className="col-span-2  text-5xl font-great-vibes my-auto mx-auto text-white lg:hidden">
            Gallery
          </h1>
          <div className="flex row-span-3 ">
            <Image
              src="/ibarin/assets/gallery-mobile/photo-1.png"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex  row-start-3 col-start-2 row-span-3 lg:row-span-5 bg-white">
            <Image
              src="/ibarin/assets/gallery-mobile/photo-2.png"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-1 col-start-2 lg:col-start-3 row-start-2  lg:row-span-2">
            <Image
              src="/ibarin/assets/gallery-mobile/photo-3.png"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-1 lg:row-span-3">
            <Image
              src="/ibarin/assets/gallery-mobile/photo-4.png"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-2 lg:row-span-2 col-span-2 lg:col-span-1 w-full relative">
            <Image
              src="/ibarin/assets/gallery-mobile/photo-5.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
        </section>
      </Layout>
    </div>
  );
}
