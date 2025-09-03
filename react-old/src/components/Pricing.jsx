import React, { useEffect, useState } from 'react';
import Navbar from '../pages/Navbar';

export default function Pricing() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@inc.lumenxo'
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setPosts(data.items.slice(0, 3)); // take first 3 posts
        }
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Latest from LumenXo</h1>
          <p className="text-gray-300 mb-12 text-lg">
            Insights, trends, and stories from our team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md p-6 rounded-xl shadow transition"
              >
                <h3 className="text-xl font-semibold text-violet-400 mb-2">
                  {post.title}
                </h3>
                <p
                  className="text-gray-300 text-sm mb-4"
                  dangerouslySetInnerHTML={{
                    __html:
                      post.description.length > 150
                        ? `${post.description.slice(0, 150)}…`
                        : post.description,
                  }}
                />
                <p className="text-xs text-gray-500 mb-4">
                  {new Date(post.pubDate).toLocaleDateString()}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline text-sm font-medium"
                >
                  Read Full →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="https://medium.com/@inc.lumenxo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition"
            >
              View More on Medium →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
