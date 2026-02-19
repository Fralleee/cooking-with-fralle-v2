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
	},
};

export default withPayload(nextConfig);
