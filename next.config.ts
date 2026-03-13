import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	trailingSlash: true,
	images: {
		remotePatterns: [
			{ hostname: "*.public.blob.vercel-storage.com" },
		],
	},
	experimental: {
		viewTransition: true,
		optimizePackageImports: ["lucide-react"],
	},
	headers: async () => [
		{
			source: "/(.*)",
			headers: [
				{ key: "X-Frame-Options", value: "DENY" },
				{ key: "X-Content-Type-Options", value: "nosniff" },
				{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
			],
		},
	],
};

export default withPayload(nextConfig);
