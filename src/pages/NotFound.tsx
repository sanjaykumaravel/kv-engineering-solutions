import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SEO from "@/components/SEO";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    console.error("404 Error: Page not found");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SEO
        title="404 - Page Not Found"
        description="Sorry, the page you are looking for does not exist."
        noindex
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <button
          onClick={() => router.push("/")}
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
