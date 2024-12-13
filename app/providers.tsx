"use client"

import { useEffect, useState } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export function Providers({ children }: {
    children: React.ReactNode;
})
{
	const { toasts } = useToasterStore();

	const [ queryClient ] = useState(() => new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 5,
			},
		},
	}));

	useEffect(() => {
		toasts
		  .filter((t) => t.visible) // Only consider visible toasts
		  .filter((_, i) => i >= 3) // Is toast index over limit?
		  .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) for no exit animation
	  }, [toasts]);

	return (
		<NextUIProvider>
			<Toaster toastOptions={{ position: "top-center" }} />
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</NextUIProvider>
	);
};