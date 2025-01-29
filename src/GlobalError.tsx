import { useRouteError } from "react-router-dom";

export default function GlobalError() {
    const error = useRouteError();
    return (
        <div>
            GlobalError
            <div>
                Error: {error?.toString()}
            </div>
        </div>
    );
}