import Ember from 'ember';
import config from '../../config/environment';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

const {
	Controller,
	inject: { service }
} = Ember;

export default Controller.extend({
	auth: service('auth-manager'),
	selectedMentor: null,
	displayMessage: false,
	mentorRegistered: Ember.computed('model',function(){
		console.log('Hello');
		this.get('model').foreach(function(mentor){
			console.log(mentor);
		});
		return false;
	}),


	// setup our query params
	queryParams: ["page", "perPage"],

	// set default values, can cause problems if left out
	// if value matches default, it won't display in the URL
	page: 1,
	perPage: 5,

	// can be called anything, I've called it pagedContent
	// remember to iterate over pagedContent in your template
	pagedContent: pagedArray('model', {
		page: Ember.computed.alias("parent.page"),
		perPage: Ember.computed.alias("parent.perPage")
	}),

	// binding the property on the paged array
	// to a property on the controller
	totalPages: Ember.computed.oneWay("pagedContent.totalPages"),

	actions: {
		submit: function(mentor, user){
			var t = this;
			var data = {
				'mentor': mentor.id,
				'user': user,
			};
			Ember.$.post(config.domainURL+'/api/addMentor/', data, function(response){
				if(response.data.success){
					t.get('auth').set('mentorAdded','You have registered for this mentor successfully');
				}
			});
			this.set('modal1',false);
		},

		setMentor: function(mentor){
			this.set('selectedMentor', mentor);
		}
	}
});	