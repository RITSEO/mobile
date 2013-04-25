// Initialize an empty array for the categories
var data = [];

// Fetch the categories
Alloy.Globals.getCategories(
	function( results ) {
		// Create a section
		var section = Ti.UI.createTableViewSection();

		// Add a list item for all jobs at the top
		section.add(
			Alloy.createController('category', {
				code: null,
				label: 'All Jobs'
			}).getView()
		);

		// Loop through the results
		for( x in results ) {
			// Create a set of arguments
			var args = {
				code: x,
				label: results[x]
			};
			
			// Add the list item
			section.add(
				Alloy.createController('category', args).getView()
			);
		}
		
		// Push the data onto the section
		data.push( section );
		
		// Pass the data to the widget
		$.ds.tableView.data = data;
	}
);

// Create a reference to the inner window
Alloy.Globals.ds = $.ds;

// Store the current view
Alloy.Globals.currentView = Alloy.createController("jobList").getView(); 

// Add the view to the inner window
$.ds.innerwin.add( Alloy.Globals.currentView );

// Open the window
$.win.open();