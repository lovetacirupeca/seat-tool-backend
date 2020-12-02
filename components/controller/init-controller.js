module.exports = () => {
	const start = async ({ app, config, store }) => {
		store.users.foo();
	};

	return { start };
};
