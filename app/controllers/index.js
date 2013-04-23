// Initialize an empty array for the categories
var data = [];

// Fetch the categories
Alloy.Globals.getCategories(
	function( results ) {
		// Create a section
		var section = Ti.UI.createTableViewSection();

		// Add a list item for all jobs at the top
		section.add(Alloy.createController('menurow', {
			code: null,
			title: 'All Jobs'
		}).getView());

		// Loop through the results
		for( x in results ) {
			var args = {
				code: x,
				title: results[x]
			};
			
			section.add(Alloy.createController('menurow', args).getView());
		}
		
		// Push the data onto the section
		data.push( section );
		
		// Pass the data to the widget
		$.ds.tableView.data = data;
	}
);

// Maintain the current view
var currentView = $.ds.innerwin;

console.log( currentView );

// Swap views on menu item click
$.ds.tableView.addEventListener('click', function selectRow(e) {
	if (currentView.id != e.row.customView) {
		$.ds.innerwin.remove(currentView);
		currentView = Alloy.createController(e.row.customView).getView();
		$.ds.innerwin.add(currentView);
	}
	$.ds.toggleSlider();
});

// Open the window
$.win.open();