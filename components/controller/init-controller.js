module.exports = () => {
	const start = async ({ app, config, store }) => {
		const getDay = () => {
			const seats = store.seats.get();
			const bookings = store.bookings.get();

			const list = seats.map(s => {
				const match = bookings.find(booking => booking.seat === s.id);
				return {
					user: match ? match.user : null,
					seat: s.id,
					status: match ? 'unavailable' : 'available',
				};
			});

			return list;
		};

		return { getDay };
	};

	return { start };
};
