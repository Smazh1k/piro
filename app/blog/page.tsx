"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type PostSummary = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/posts", { signal: controller.signal })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Nie udało się pobrać wpisów.");
        }

        return data as PostSummary[];
      })
      .then(setPosts)
      .catch((fetchError: unknown) => {
        if (fetchError instanceof Error && fetchError.name !== "AbortError") {
          setError(fetchError.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <section className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-center text-4xl font-bold">Blog</h1>
        <p className="mb-10 text-center text-gray-400">
          Aktualności i historie ze świata Scenicznej.
        </p>

        {loading && <p className="text-center text-gray-400">Ładowanie wpisów...</p>}
        {error && (
          <p role="alert" className="rounded-xl bg-red-950 p-5 text-center text-red-200">
            {error}
          </p>
        )}
        {!loading && !error && posts.length === 0 && (
          <p className="rounded-xl bg-[#15171d] p-8 text-center text-gray-300">
            Nie ma jeszcze opublikowanych wpisów.
          </p>
        )}

        <div className="space-y-5">
          {posts.map((post) => (
            <article key={post.id} className="rounded-2xl bg-[#15171d] p-6">
              <p className="mb-2 text-sm text-gray-400">
                {new Date(post.publishedAt).toLocaleDateString("pl-PL")}
              </p>
              <h2 className="mb-3 text-2xl font-semibold">{post.title}</h2>
              <p className="mb-5 text-gray-300">{post.excerpt}</p>
              <Link
                href={`/blog/${encodeURIComponent(post.slug)}`}
                className="font-medium text-blue-400 hover:underline"
              >
                Czytaj więcej
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}