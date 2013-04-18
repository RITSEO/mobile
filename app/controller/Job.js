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
			'job/:id': 'detail'
		}
	},

	/**
	 *	Fired on the initialization
	 */
	launch: function() {},

	/**
	 *  List all jobs on campus
	 */
	index: function() {},

	/**
	 *  Detail a particular job
	 */
	detail: function( id ) {
		console.log( id );
	}
});