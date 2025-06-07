"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect, type PropsWithChildren } from "react";

export function CSPostHogProvider({ children }: PropsWithChildren<unknown>) {
	useEffect(() => {
		const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
		const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

		if (!key || !host) {
			console.error("❌ PostHog key or host missing", { key, host });
			return;
		}

		posthog.init(key, {
			api_host: host,
			capture_pageview: true,
			person_profiles: "identified_only",
		});
	}, []);
	return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
