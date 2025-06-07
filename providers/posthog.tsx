"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import type { PropsWithChildren } from "react";

if (typeof window !== "undefined") {
	const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
	const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

	if (!key) {
		console.error("PostHog key is missing");
	} else if (!host) {
		console.error("PostHog host is missing");
	} else {
		posthog.init(key, {
			api_host: host,
			person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
		});
	}
}
export function CSPostHogProvider({ children }: PropsWithChildren<unknown>) {
	return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
