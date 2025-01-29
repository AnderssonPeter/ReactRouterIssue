import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from "react";
import Loading from "./Loading";
import Layout from "./Layout";
import GlobalError from "./GlobalError";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 0
    }
  }
});

const Routes = [
  {
    path: "/",
    errorElement: <GlobalError />,
    element: (
      <Suspense name="PreLayout" fallback={<Loading name="PreLayout" />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        errorElement: <GlobalError />,
        element: (
          <Suspense name="MainContent" fallback={<Loading name="MainContent" />}>
            <Outlet />
          </Suspense>
        ),
        children: [
          {
            path: '1',
            element: <PageOne />
          },
          {
            path: '2',
            element: <PageTwo />
          }
        ]
      }
    ]
  }
] satisfies RouteObject[];

const router = createBrowserRouter(Routes);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
