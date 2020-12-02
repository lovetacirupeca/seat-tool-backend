module.exports = () => {
	const start = async ({ app, config }) => {
		const foo = () => {
			console.log('Hoola');
		};
		return {
			foo,
		};
	};

	return { start };
};
