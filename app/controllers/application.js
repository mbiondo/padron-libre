import Ember from 'ember';

export default Ember.Controller.extend({
	afiliated: null,
	documuent: '',

	actions: {
		find: function () {
			var Datastore = require('nedb');
			var db = new Datastore({ filename: 'padron.db', autoload: true });	
			var _this = this;
			db.find({ matricula: this.get('document').toString()}, function (err, docs) {
			  if (docs) {
			  	_this.set('afiliated', docs[0]);
			  } else {
			  	_this.set('afiliated', null);
			  }
			});			
		},

		clear: function () {
			this.set('afiliated', null);
			this.set('documuent', '');
		},
	}
});
