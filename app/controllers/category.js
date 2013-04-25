// Localize the data
var args = arguments[0] || {};

// Bind the data to view components
$.label.text = args.label || '';
$.row.customView = args.customView || '';
$.row.customTitle = $.label.text;

// Bind a click event to this row
$.row.addEventListener( 'click', function(event) {
	// Localize the ds store
	var _ = Alloy.Globals.ds;
	var code = args.code;
	
	// Clear out the inner view
	_.innerwin.remove( Alloy.Globals.currentView );
	
	// Get the jobs for the category
	Alloy.Globals.getJobsForCategory(
		code,
		function(results) {
			// Initialize a set of arguments to pass to the view
			var listData = {
				code: args.code,
				label: args.label,
				data: results
			};
			
			// Log the data
			console.log( listData );
			
			// Localize the current view
			Alloy.Globals.currentView = Allow.createController('jobList', listData).getView(); 
			
			// Initialize the window with a new controller
			_.innerwin.add( Alloy.Globals.currentView );
		}
	);
	
	// Toggle the drawer
	_.toggleSlider();
} );
