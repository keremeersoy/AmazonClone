module.exports = {
	images: {
		domains: ["links.papareact.com", "fakestoreapi.com"],
	},
	env: {
		NEXT_PUBLIC_GOOGLE_ID: "502230243370-qam2h542qa82jdc73guhsp36pe2arr0s.apps.googleusercontent.com",
		NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: "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",
		NEXT_PUBLIC_STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
		NEXT_PUBLIC_STRIPE_SECRET_KEY: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
		NEXT_PUBLIC_STRIPE_SIGNING_SECRET: process.env.NEXT_PUBLIC_STRIPE_SIGNING_SECRET,
	},
};

