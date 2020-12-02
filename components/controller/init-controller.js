module.exports = () => {
	const start = async ({ app, config, store }) => {
		const getCurrentDay = () => {
			const seats = store.seats.get();
			const bookings = store.bookings.get();
			return { seats, bookings };
		};

		return { getCurrentDay };
	};

	return { start };
};
