// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

// Private variables
Alloy.Globals.baseUrl = "http://localhost/seo/";

/**
 * Get all the Categories!
 */
Alloy.Globals.getCategories = function( callback ) {
	// Create a url to fetch from
    var url = "?/api";
    
    // Fetch the data
    this.fetch( url, function() {
    	// Process the results
    	var response = JSON.parse( this.responseText );
    	var results = response.types;
    	
    	// Send the results to the callback
    	callback( results );
    } );
};

/**
 * Get all the Jobs!
 */
Alloy.Globals.getJobList = function( callback ) {
	// Create a url to fetch from
    var url = "?/api";
    
    // Fetch the data
    this.fetch( url, function() {
    	// Process the results
    	var response = JSON.parse( this.responseText );
    	var results = response.results;
    	
    	// Send the results to the callback
    	callback( results );
    } );
};

/**
 * Get all the jobs for a particular category!
 */
Alloy.Globals.getJobsForCategory = function( category, callback ) {
	// Create a url to fetch from
	var url = "?/api/category/" + category;
	
	// Fetch the data
	this.fetch( url, function() {
		// Process the response
		var response = JSON.parse( this.responseText );
		var results = response.results;
		
		// Send the results to the callback
		callback( results );
	} );
};

/**
 * Get a single job
 */
Alloy.Globals.getJob = function( number, callback ) {
	// Create a url to fetch from
	var url = "?/api/detail/" + number;
	
	// Fetch the data
	this.fetch( url, function() {
		// Process the response
		var response = JSON.parse( this.responseText )
		var result = response.result;
		
		// Send the result to the callback
		callback( result );
	} );
};

/**
 * Fetch a result from the server
 */
Alloy.Globals.fetch = function( url, callback ) {
	// Initialize a network request client
	var xhr = Titanium.Network.createHTTPClient();
    
    // Provide a callback
    xhr.onload = callback;
    
    // Open the provided URL
    xhr.open('GET', this.baseUrl + url);
 
    // Send the data
    xhr.send();
};
