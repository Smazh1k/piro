"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type PostArticle = {
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
};

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostArticle | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/posts?slug=${encodeURIComponent(id)}`, {
      signal: controller.signal,
    })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Nie udało się pobrać wpisu.");
        }

        return data as PostArticle;
      })
      .then(setPost)
      .catch((fetchError: unknown) => {
        if (fetchError instanceof Error && fetchError.name !== "AbortError") {
          setError(fetchError.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [id]);

  return (
    <article className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="mb-8 inline-block text-blue-400 hover:underline">
          &larr; Wróć do bloga
        </Link>
        {loading && <p className="text-gray-400">Ładowanie wpisu...</p>}
        {error && (
          <p role="alert" className="rounded-xl bg-red-950 p-5 text-red-200">
            {error}
          </p>
        )}
        {post && (
          <>
            <p className="mb-3 text-sm text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString("pl-PL")}
            </p>
            <h1 className="mb-5 text-4xl font-bold">{post.title}</h1>
            <p className="mb-8 text-xl text-gray-300">{post.excerpt}</p>
            <div className="whitespace-pre-wrap leading-relaxed text-gray-200">
              {post.content}
            </div>
          </>
        )}
      </div>
    </article>
  );
}