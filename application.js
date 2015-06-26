// Part I

// $(document).ready(function() {
// 	$('button').on('click', function() {
// 	console.log('button');
// 	});
// });

// $(document).ready(function() {
// 	$('#button1').on('click', function() {
// 	var text = $('<p>Some Text</p>');
// 	$('body').append(text);
// 	});
// });

// $(document).ready(function() {
// 	$('#button2').on('click', function() {
// 	var heading1 = $('<h1>Heading 1</h1>');
// 	$('body').append(heading1);
// 	});
// });

// $(document).ready(function() {
// 	$('#button3').on('click', function() {
// 	var list = $('<ul><li>One</li><li>Two</li><li>Three</li></ul>')
// 	$('body').append(list);
// 	});
// });

// Part II

// $(document).ready(function() {

// $('p').on('mouseover', function() {
// 		$('p').css ( {
// 			'color' : 'pink' 
// 		});
// 	});

// $('h1').append('!');

// $('a').on('click', function() {
// 	if(confirm('Are you sure you want to leave this page?')) {
// 	} else {
// 		$(this).remove();
// 		return false;
// 	}
// });
// });

//Part III
$(document).ready(function() {

$('.big-button').on('click', function() {
	$('body').append("<div class='popup'><p>What's up?</p></div>");
	$('body').append("<button class='closebutton'>Goodbye</button>");
});
$('body').on('click', '.closebutton', function(event){
	event.preventDefault();
	$('.popup').remove();
	$('.closebutton').remove();
});
});





