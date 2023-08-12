import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Find & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Prompts!</span>
      </h1>
      <p className="desc text-center">
        AI Prompts Bazaar is an open source project for discovering, sharing, &
        creating creative prompts!
      </p>

      {/* FEED */}
      <Feed />
    </section>
  );
};

export default Home;
