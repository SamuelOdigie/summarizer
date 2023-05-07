"use client";
export default Demo;
import { useState, useEffect } from "react";

function Demo() {
  const [articles, setArticles] = useState({
    url: "",
    summary: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    alert("submitted");
    try {
      const response = await fetch(
        `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(
          articles.url
        )}&length=5`,
        {
          headers: {
            "x-rapidapi-host":
              "article-extractor-and-summarizer.p.rapidapi.com",
            "x-rapidapi-key":
              "7a201ff920msh788088c7da888bbp187279jsn887f82efe663",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setArticles({ ...articles, summary: data.summary });
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <section className="mt-16 w-full max-w-screen-xxl">
      <div className="flex justify-center items-center flex-col gap-2">
        <form className=" relative" onSubmit={handleSubmit}>
          <img
            src="https://media.istockphoto.com/id/1064124912/vector/link-icon-jpeg-picture-image-logo-sign-design-flat-app-ui-web-art-solid-style.jpg?s=170667a&w=0&k=20&c=mxgR85_cp1nISM348UejhMPhrz0uJpNy-4LgSQZJEz0="
            className="h-8 left-0 absolute rounded-full "
          />
          <input
            type="url"
            value={articles.url}
            placeholder="Enter a URL"
            onChange={(e) => setArticles({ ...articles, url: e.target.value })}
            className=" rounded-full focus:ring focus:outline-none pl-10 font-light font-sans py-1 
            "
          />
          <button
            type="submit"
            className=" border-solid border-1 border-gray-300 bg-gray-300 text-white font-bold rounded-full p-1 hover:outline"
          >
            submit
          </button>
        </form>
        <div className="flex justify-center items-center text-centre flex-col gap-2 m-17">
          {loading && (
            <p className=" justify-center items-center h-20 mx-14 p-5">
              Loading, please wait...
            </p>
          )}
          {articles.summary && !loading && (
            <p className=" justify-center items-center h-20 mx-14 p-5">
              {articles.summary}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
