"use server";

import { cookies } from "next/headers";
import { Cookie } from "./struct";

export async function getServerCookie(name: string): Promise<Cookie> {
	const cookieStore = cookies();
	const cookie = cookieStore.get(name) as Cookie;
	return cookie;
}
