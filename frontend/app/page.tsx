import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8 bg-white rounded-lg shadow-md">
        <header className="pb-6 border-b border-gray-300">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Tree Structure Manager
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Manage and persist a tree structure with a depth of 10,000 nodes.
          </p>
        </header>
        <main className="mt-6">
          <section className="my-6">
            <h2 className="text-2xl font-semibold text-gray-900">Features</h2>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li className="text-gray-700">
                Create and manage tree structures
              </li>
              <li className="text-gray-700">View and edit nodes</li>
              <li className="text-gray-700">Persist data efficiently</li>
            </ul>
          </section>
          <section className="my-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Get Started
            </h2>
            <div className="mt-4">
              <Link legacyBehavior href="/register">
                <a className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition">
                  Manage Your Tree
                </a>
              </Link>
            </div>
          </section>
        </main>
        <footer className="mt-8 text-center text-sm text-gray-600">
          <p>&copy; 2024 Tree Structure Manager. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
