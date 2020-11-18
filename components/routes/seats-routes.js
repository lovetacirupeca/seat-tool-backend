module.exports = () => {
	const start = async ({ app, config, controller }) => {
    console.log(controller)
		app.get('/seats', (req, res) => res.json(controller.seats.fetchAll()));

		return Promise.resolve();
	};

	return { start };
};