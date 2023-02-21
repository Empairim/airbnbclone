//@ts-nocheck
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import SmallCard from "../components/SmallCard.js";
import MediumCard from "../components/MediumCard.js";
import LargeCard from "../components/LargeCard.js";
import Footer from "../components/Footer.js";

const Home: NextPage = ({ exploreData, cardsData }) => {
  return (
    <div className=" overflow-hidden">
      <Head>
        <title>xAirBnBx</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className=" max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 ">
            Explore What's Nearby
          </h2>

          {/* Pull data from server - Api endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className=" text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://cdn.pixabay.com/photo/2016/01/19/15/48/luggage-1149289_1280.jpg"
          title="The World is just a click away"
          description="Wishlists curated by Airbnb"
          buttonText="Get Started"
        />
      </main>

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/NICS").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/0DQ5").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}

export default Home;
