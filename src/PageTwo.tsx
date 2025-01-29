import { useSuspenseQuery } from "@tanstack/react-query";
import sleepAsync from "./sleep";

const chars = "zoplqsdcjzxkl";

export default function PageTwo() {
  
    const { data } = useSuspenseQuery({
        queryKey: ['random-char'],
        queryFn: async () => {
          await sleepAsync(3 * 1000);
          return chars[Math.round(Math.random() * chars.length)];
        },
      });
    return (
        <div>
            Page
            <br />
            Random char: {data}
        </div>
    );
}