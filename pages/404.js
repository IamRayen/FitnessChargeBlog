import Link from "next/link";

const NotFound = () => {
    return (
        <main className="grid min-h-full place-items-center py-24 px-6 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-orange">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-lightviolet sm:text-5xl">
                    Page not found
                </h1>
                <p className="mt-6 text-base leading-7 text-lightviolet">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10 flex items-center text-white justify-center gap-x-6">
                    <p>
                        Go back to{" "}
                        <Link
                            className="text-lg font-semibold"
                            href="/"
                        >
                            Homepage
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
