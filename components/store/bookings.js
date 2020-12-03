module.exports = () => {
	const start = async ({ app, config }) => {
		const get = date => [
			{
				seat: 1,
				user: 'menganato@gs.com',
			},
			{
				seat: 11,
				user: 'sutano@gs.com',
			},
		];

		return { get };
	};

	return { start };
};
