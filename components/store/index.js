const System = require('systemic');
const bookingsStore = require('./bookings');
const seatsStore = require('./seats');
const usersStore = require('./users');

module.exports = new System({ name: 'store' })
	.add('bookings', bookingsStore())
	.dependsOn('config', 'logger')
	.add('seats', seatsStore())
	.dependsOn('config', 'logger')
	.add('users', usersStore())
	.dependsOn('config', 'logger')
	.add('store')
	.dependsOn('bookings', 'seats', 'users');
