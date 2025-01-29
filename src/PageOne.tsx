import { useSuspenseQuery } from "@tanstack/react-query";
import sleepAsync from "./sleep";

export default function PageOne() {
    const { data } = useSuspenseQuery({
        queryKey: ['random-number'],
        queryFn: async () => {
          await sleepAsync(3 * 1000);
          return Math.random() * 100;
        },
      });
    return (
        <div>
            Page
            <br />
            Random number: {data}
        </div>
    );
}