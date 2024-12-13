import type { Metadata } from "next";
import type { NextLayout } from "@types";

import "@styles/globals.scss"

import { cn } from "@utlis";
import Navbar from "@navbar/index";
import { Providers } from "@/providers";
import NextTopLoader from "nextjs-toploader";
import { inter, poppins } from "@styles/fonts";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

export const metadata: Metadata = {
	applicationName: "Clouidify",
	creator: "Ayush Bhatt",
	icons: "/favicon.ico"
};

const RootLayout: NextLayout = ({ children }) =>
{
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body
				className={cn(
					inter.variable,
					poppins.variable,
					"relative w-screen h-screen overflow-hidden antialiased bg-neutral-800 font-inter",
				)}
			>
				<NextSSRPlugin
         			 /**
					 * The `extractRouterConfig` will extract **only** the route configs
					 * from the router to prevent additional information from being
					 * leaked to the client. The data passed to the client is the same
					 * as if you were to fetch `/api/uploadthing` directly.
					 */
					routerConfig={extractRouterConfig(ourFileRouter)}
				/>

				<Providers>
					<main className="flex items-center justify-between w-screen h-screen p-5 gap-7">
						<Navbar />

						<div className="flex relative flex-col items-center justify-start flex-1 h-full gap-6 overflow-hidden bg-neutral-100 rounded-2xl">
							{children}
						</div>
					</main>
				</Providers>

				<NextTopLoader
					showSpinner={false}
					color="#f97316"
				/>
			</body>
		</html>
	)
};

export default RootLayout;