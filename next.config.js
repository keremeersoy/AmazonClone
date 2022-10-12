module.exports = {
	images: {
		domains: ["links.papareact.com", "fakestoreapi.com"],
	},
	env: {
		NEXT_PUBLIC_GOOGLE_ID: "502230243370-qam2h542qa82jdc73guhsp36pe2arr0s.apps.googleusercontent.com",
		NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: "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",
		stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
		stripe_secret_key: process.env.STRIPE_SECRET_KEY,
	},
};

