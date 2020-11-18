const System = require('systemic');
const seatsController = require('./seats-controller');

module.exports = new System({ name: 'controller' })
  .add('controller.seats', seatsController())
	.dependsOn('config', 'logger')
	.add('controller')
  .dependsOn({
    component: 'controller.seats',
    destination: 'seats'
  });
