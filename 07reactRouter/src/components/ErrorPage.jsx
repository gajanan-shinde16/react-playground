import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
       <div className="bg-gray-500 h-70 text-center flex flex-col items-center justify-center">
            <h1 className="text-white text-2xl">Error Occurred</h1>
            <p className="text-red-500">{error.message}</p>
        </div>
    );
}

export default ErrorPage;