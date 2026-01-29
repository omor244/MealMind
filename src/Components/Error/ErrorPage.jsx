import { Link, useNavigate, useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
         
            <div className="mb-8">
                <div className="w-24 h-24 bg-[#FF4500] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" rx="20" fill="#FF4500" />
                        <path d="M35 30V45M35 30V25M35 30H30V45C30 50 35 55 35 60V75M35 30H40V45C40 50 35 55 35 60" stroke="white" strokeWidth="6" strokeLinecap="round" />
                        <path d="M60 25C65 25 70 35 70 50C70 55 65 60 60 60V75" stroke="white" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                </div>
            </div>

            <h1 className="text-9xl font-bold text-[#FF4500]">404</h1>
            <h2 className="text-3xl font-semibold mt-4 text-gray-800">Oops! Page Not Found</h2>
            <p className="text-gray-600 mt-2 max-w-md">
                {error?.statusText || error?.message || "The page you are looking for might have been removed or is temporarily unavailable."}
            </p>

            <div className="mt-8 flex gap-4">
                <Link
                    to="/"
                    className="px-6 py-3 bg-[#FF4500] text-white font-bold rounded-lg hover:bg-[#e63e00] transition-all shadow-md"
                >
                    Back to Home
                </Link>
                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 border-2 border-[#FF4500] text-[#FF4500] font-bold rounded-lg hover:bg-orange-50 transition-all"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;