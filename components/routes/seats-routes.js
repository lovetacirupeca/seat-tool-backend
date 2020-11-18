module.exports = () => {
	const start = async ({ app, config }) => {
		app.get('/seats', (req, res) => res.json([]));

		return Promise.resolve();
	};

	return { start };
};