Ext.define('seo-mobile.view.job.Index', {
	extend: 'Ext.Panel',
	
	xtype: 'joblist',
	alias: 'widget.jobIndex',
	
	requires: [
		'Ext.dataview.List',
		'Ext.TitleBar'
	],

	config: {
		layout: {
			type: 'card'
		},
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'On Campus Jobs'
			},
			{
				xtype: 'list',
				store: 'Jobs',
				itemTpl: new Ext.XTemplate( [
					'<a href="#job/{job_number}">',
						'<h2>{[this.getJobTitle(values)]}</h2>',
						'<p><b>Posted:</b> {[this.getPostedDate(values)]}</p>',
					'</a>'
				].join(''), {
					/**
					 *	Get the Job Title from the object
					 */
					getJobTitle: function( job ) {
						// Localize the title
						var str = job.job_title;

						// Return the string in title case
						return str.replace(
							/\w\S*/g,
							function(txt){
								return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
							}
						);
					},

					/**
					 *	Get the posted date from the object
					 */
					getPostedDate: function( job ) {
						// Get the date that it was added
						var added = parseInt( job.added, 10 );

						// Create a date object from the timestamp
						var date = new Date( added * 1000 );

						// Format the date
						return date.toLocaleDateString();
					}
				})
			}
		]
	}
});