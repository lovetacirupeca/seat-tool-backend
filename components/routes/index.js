const System = require('systemic');
const adminRoutes = require('./admin-routes');
const seatsRoutes = require('./seats-routes');

module.exports = new System({ name: 'routes' })
	.add('routes.admin', adminRoutes())
	.dependsOn('config', 'logger', 'app', 'middleware.prepper', 'manifest')
	.add('routes.seats', seatsRoutes())
	.dependsOn('config', 'logger', 'app', 'controller')
	.add('routes')
	.dependsOn('routes.admin', 'routes.seats');
