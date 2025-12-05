import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="grid min-h-full place-items-center bg-base-100 px-6 py-24 sm:py-32 lg:px-8 transition-colors">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-base-content sm:text-7xl">
          Page not found
        </h1>

        <p className="mt-6 text-lg text-base-content/60 sm:text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-content shadow hover:bg-primary/80 transition-all"
          >
            Go back home
          </Link>

          <Link
            to="/contact"
            className="text-sm font-semibold text-base-content hover:underline"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
