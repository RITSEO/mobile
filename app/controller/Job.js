Ext.define('seo-mobile.controller.Job', {
	extend: 'Ext.app.Controller',

	requires: 'seo-mobile.model.Job',

	config: {
		views: [
			'job.Index',
			'job.Detail'
		],
		
		routes: {
			'': 'index',
			'/job/:id': 'detail'
		},
		
		refs: {
			
		}
	},

	/**
	 *	Fired on the initialization
	 */
	launch: function() {
		// console.log( "I LAUNCHED" );
	},

	/**
	 *  List all jobs on campus
	 */
	index: function() {
		console.log( "Hello I'm a Main" );
	},

	/**
	 *  Detail a particular job
	 */
	detail: function( id ) {
		console.log( "Hello I'm a Detail" );
	}
});