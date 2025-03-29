import { getPayload } from "payload";
import { headers as getHeaders } from "next/headers.js";
import config from "@/payload.config";
import RecipeList from "./(components)/recipe-list";

export default async function Page() {
	const headers = await getHeaders();
	const payloadConfig = await config;
	const payload = await getPayload({ config: payloadConfig });
	const { user } = await payload.auth({ headers });
	return <RecipeList />;
}
