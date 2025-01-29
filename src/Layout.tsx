import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Navbar from "./Navbar";
import { useSuspenseQuery } from "@tanstack/react-query";
import sleepAsync from "./sleep";

export default function Layout() {
    const { data: user } = useSuspenseQuery({
        queryKey: ['user'],
        queryFn: async () => {
          await sleepAsync(5 * 1000);
          return { username: "Foo bar" };
        },
      });
    return (
        <div>
            <Navbar username={user.username} />
            <Menu />
            <Outlet />
        </div>
    );
}