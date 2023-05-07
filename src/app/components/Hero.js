export default Hero;
import Link from "next/link";

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav
        className="w-full flex  pt-6
  mb-10 justify justify-between p-20"
      >
        <img
          src="https://thumbs.dreamstime.com/b/vector-logo-illustration-bird-gradient-colorful-174865038.jpg"
          alt="logo"
          className="w-12"
        />
        <Link href="https://github.com/SamuelOdigie">
          <button type="button" className="black_btn">
            Github
          </button>
        </Link>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br /> The Power of <br />{" "}
        <spar className=" bg-gradient-to-tr from-gray-600 via-slate-500 to-slate-200 clip bg-clip-text text-transparent">
          {" "}
          OpenAi GPT_4
        </spar>
      </h1>
      <h2 className="mt-16 text-center sm:text-lx text-gray-600 max-w-2-1 ">
        <p>
          OpenAi GPT_4 is a toolkit for summarizing articles with the power of
          OpenAI GPT_4 <br />
          simplify your reading with this amazing app which transforms articles
          into.
          <br />
          clear and concise summaries.
        </p>
      </h2>
    </header>
  );
}
