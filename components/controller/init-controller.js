module.exports = () => {
	const start = async ({ app, config, store }) => {
		const getCurrentDay = () => {
			const seats = store.seats.get();
			return seats;
			// const booking = await store.booking.get();
		};

		return { getCurrentDay };
	};

	return { start };
};
