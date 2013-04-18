Ext.define('seo-mobile.store.Jobs', {
	extend: 'Ext.data.Store',
	requires: 'seo-mobile.model.JobListItem',

	config: {
		storeId: 'Jobs',
		autoLoad: true,

		model: 'seo-mobile.model.JobListItem',

		proxy: {
			type: 'ajax',
			url: 'http://localhost/seo/?/api/',
			noCache: false,
			enablePagingParams: false,
			reader: {
				type: 'json',
				rootProperty: 'results'
			}
		}
	}
});