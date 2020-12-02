module.exports = () => {
	const start = async ({ app, config, controller }) => {
		console.log(controller);
		app.get('/current-day', (req, res) => {
			const currentDay = controller.getCurrentDay();
			return res.json(currentDay);
		});

		return Promise.resolve();
	};

	return { start };
};
