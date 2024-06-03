import { useRouteError } from "react-router-dom";


function ErrorElement() {
    let error = useRouteError();
    return (
        <div className="flex items-center ">
            <div className="text-center m-auto"><h1 className="text-5xl bold">{error?.status} Error {error.statusText}</h1></div>

        </div>
    )
}

export default ErrorElement
