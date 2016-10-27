
//* Author: Neil Crowley
//* Date : 2016/04/22
//* Ref: www.jquerymobile.com

//Set variable listCreate to true.
	var listCreate = true; 
	//Function to trigger jsonFunction when button with id of jsonSearch is clicked.
	function start(){ 
	document.getElementById("jsonSearch").addEventListener("click", jsonFunction);

	}; 

//Function to pull and loop through information from JSON file array and append desired data to 'mylist' and 'pages' id tags as detailed. 
function jsonFunction(){
		if (listCreate == true) {
		$.getJSON("js/facts.json", function(data) {
		$.each(data, function(i, item) {
		for (i=0; i<=10; i++) {
		if (i==0) {
  $("#pages").append('<div data-role = "page" class="stats" id ="'+data.facts[i].ID +'" style="background-image:url('+data.facts[i].Image+');"><h1 id="text">'+ data.facts[i].Text +'</h1><a class="ui-btn" data-transition="slidedown" data-position="fixed" id="home" href="javascript:document.location.reload(true);">Home</a><a class="ui-btn" data-transition="slide" data-position="fixed" id="next" href="index.html#'+data.facts[i+1].ID +'">Next</a></div>');
  }
  else if (i<=9) {
  $("#pages").append('<div data-role = "page" class="stats" id ="'+data.facts[i].ID +'" style="background-image:url('+data.facts[i].Image+');"><h1 id="text">'+ data.facts[i].Text +'</h1><a class="ui-btn" data-transition="slidedown" data-position="fixed" id="home" href="javascript:document.location.reload(true);">Home</a><a class="ui-btn" data-transition="slideup" data-position="fixed" id="back" href="index.html#'+data.facts[i-1].ID +'">Back</a><a class="ui-btn" data-transition="slide" data-position="fixed" id="next" href="index.html#'+data.facts[i+1].ID +'">Next</a></div>');
  }
  else {
  $("#pages").append('<div data-role = "page" class="stats" id ="'+data.facts[i].ID +'" style="background-image:url('+data.facts[i].Image+');"><h1 id="text">'+ data.facts[i].Text +'</h1><a class="ui-btn" data-transition="slidedown" data-position="fixed" id="home" href="javascript:document.location.reload(true);">Home</a><a class="ui-btn" data-transition="slideup" data-position="fixed" id="back" href="index.html#'+data.facts[i-1].ID +'">Back</a><a class="ui-btn" data-transition="slide" data-position="fixed" id="help" href="https://www.dosomething.org/us/campaigns" target="_blank">Help Stop Climate Change!</a></div>');
  }
  $('#mylist').append('<li><a class="ui-btn" data-transition="flip" href="#'+data.facts[i].ID +'">'+ data.facts[i].Name +'</a></li>');
  //Change variable listCreate to false to stop list from displaying more than once.
	listCreate = false;
	};

  //Refresh list view so it continually shows in JQuery display mode.
  $('#mylist').listview('refresh');

      });
    });
  };
};








