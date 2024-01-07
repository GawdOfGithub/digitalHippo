"use client"
import { PropsWithChildren, useState } from "react";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "@/trpc/client"; // Assuming correct path to trpc module

const QueryProvider = ({children}:PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    trpc.createClient({ // Call createClient directly on the imported trpc object
      links: [
        httpBatchLink({
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
          fetch(url, options) {
            // Ensure correct handling of options
            return fetch(url, options);
          },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
     <QueryClientProvider client={queryClient}>
    
     </QueryClientProvider>
    </trpc.Provider>
  );
};

export default QueryProvider

//3 hr 14 min