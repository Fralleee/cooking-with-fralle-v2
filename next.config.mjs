import { withPayload } from "@payloadcms/next/withPayload";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
	"./src/app/(frontend)/i18n/request.ts",
);

/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		viewTransition: true,
	},
};

export default withPayload(withNextIntl(nextConfig));
