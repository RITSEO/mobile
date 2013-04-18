Ext.define('seo-mobile.model.Job', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [
			{ name: 'job_number', type: 'auto' },
			{ name: 'department', type: 'auto' },
			{ name: 'contact', type: 'auto' },
			{ name: 'phone', type: 'auto' },
			{ name: 'show_phone', type: 'auto' },
			{ name: 'job_title', type: 'auto' },
			{ name: 'wage', type: 'auto' },
			{ name: 'duties', type: 'auto' },
			{ name: 'description', type: 'auto' },
			{ name: 'required', type: 'auto' },
			{ name: 'preferred', type: 'auto' },
			{ name: 'skills', type: 'auto' },
			{ name: 'shift_hours', type: 'auto' },
			{ name: 'start_date', type: 'auto' },
			{ name: 'post_date', type: 'auto' },
			{ name: 'email', type: 'auto' },
			{ name: 'show_email', type: 'auto' },
			{ name: 'tty', type: 'auto' }
		],

		proxy: {
			type: 'ajax',
			url: 'http://localhost/seo/?/api/detail/',
			reader: {
				type: 'json',
				rootProperty: 'results'
			}
		}
	}
});
