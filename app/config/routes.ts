export const ROUTES =
{
	HOME: "/",
	CHAT: (chatId: string) => `/ai-chat/${chatId}`,
	DOCS: "/all-documents",
	SIGN_IN: "/sign-in",
} as const;