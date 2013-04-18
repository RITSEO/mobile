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
				itemTpl: new Ext.XTemplate('<h2>{job_title}</h2>')
			}
		]
	}
});