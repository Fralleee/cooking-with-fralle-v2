"use client";

import { useEffect, type PropsWithChildren } from "react";

export function CSPostHogProvider({ children }: PropsWithChildren<unknown>) {
	useEffect(() => {
		const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
		const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

		if (!key || !host) {
			return;
		}

		import("posthog-js").then((posthogModule) => {
			posthogModule.default.init(key, {
				api_host: host,
				capture_pageview: true,
				person_profiles: "identified_only",
			});
		});
	}, []);

	return <>{children}</>;
}
