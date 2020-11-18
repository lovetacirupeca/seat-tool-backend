module.exports = () => {
	const start = async ({ app, config }) => {
    const fetchAll = () => {
      return []
    }

		return {fetchAll};
	};

	return { start };
};