	// color links to swatches in produts
	// link structure > https://yoursite.com/product/name-color
	$(document).ready(function() {
	    var core_link = window.location.href; // getting current url
	    //var core_link = "https://yoursite.com/product/name-color"; //core url hardcoded for testing
	    var char = '-'; // define the product and color separation character
	    var start = core_link.indexOf(char) + 1; // finding the index of separator
	    var end = start + char.length; // defining color part of the url

	    //var tail = core_link.substring(0, start - 1) + core_link.substring(end); // same as color part of the url
	    var tail = core_link.substring(end - 1);
	    var head = core_link.substring(0, end - 1)

	    /*
    // this part is used while testing the development
    $(".swatch-color").on('click', function(event){
    	var clicked_color = 
      var url = head;
      window.location.href = url + 'test';
		});
    
    $(".swatch__tooltip").click(function(e) {
    var clickedValue = $(e.target).text();
    alert(clickedValue);
  	});
    */

	    $(".swatch-color").click(function(event) { //capturing the click event of respective swatch
	        var url = head;
	        //var color = $(".swatch__tooltip").html();  
	        var color = $(this).attr("data-value") + '/'; //getting the color for the link through swatch's data-value
	        if (tail !== color) { // stop redirecting selected color again
	            window.location.href = url + color; // directs to the respective product according to swatch color.
	        }
	    });
	})
