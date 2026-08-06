import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-6xl">
          Store Not Found
        </h1>

        <p className="mt-6 text-brand-dark/60">
          The store you're looking for doesn't exist.
        </p>

        <Link
          href="/stores"
          className="mt-10 inline-block border px-8 py-4"
        >
          Back to Directory
        </Link>
      </div>
    </main>
  );
}