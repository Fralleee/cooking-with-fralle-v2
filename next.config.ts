import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	trailingSlash: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		viewTransition: true,
	},
};

export default withPayload(nextConfig);
