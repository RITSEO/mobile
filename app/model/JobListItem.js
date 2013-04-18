Ext.define('seo-mobile.model.JobListItem', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [
			{ name: 'id', type: 'auto' },
            { name: 'job_number', type: 'auto' },
            { name: 'job_title', type: 'auto' },
            { name: 'category', type: 'auto' },
            { name: 'added', type: 'auto' },
            { name: 'twitter_code', type: 'auto' }
		],

		proxy: {
			type: 'ajax',
			url: 'http://localhost/seo/?/api/',
			reader: {
				type: 'json',
				rootProperty: 'results'
			}
		}
	}
});
