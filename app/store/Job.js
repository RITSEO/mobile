Ext.define('seo-mobile.store.Job', {
	extend: 'Ext.data.Store',
	requires: 'seo-mobile.model.Job',

	config: {
		storeId: 'Job',
		autoLoad: true,

		model: 'seo-mobile.model.Job',

		proxy: {
			type: 'ajax',
			url: 'http://localhost/seo/?/api/detail',
			noCache: false,
			enablePagingParams: false,
			reader: {
				type: 'json',
				rootProperty: 'results'
			}
		}
	}
});