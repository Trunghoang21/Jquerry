alert("Working");
$("h1").css("color", "red");
// the example above is about to select an h1 element and change it's property

$("h1").addClass("big-title");
// this is a example about adding a class to the element, and we can use 
// remove method to remove a class from an element.  

$("h1").addClass("big-title margin_50");

console.log($("h1").css("color"));
console.log($("h1").css("margin"));
// it is importance to separate the style to the css file and the 
// behavior of the webb site to the js file 

// changing the text in a element 
$("h1").text("Hi Trung");

$("a").attr("href","http://www.yahoo.com");
// Jquerry methods can be used to change the content of the attribute
// a class is also an html attribute

// next: how to add an event listener with JQuerry
// it's easier than using vanilla Javascript
$("h1").click(function(){
    $("h1").css("color","purple");
});

// here is the example if u are using DOM
for(var i = 0 ; i < 5; i++ ){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "red";
    });
}
$("input").keydown(event, function(event){
    $("h1").text(event.key);
} )

// can even use the .on method for adding listener
$("h1").on("mouseover", function(){
    $("h1").css("color","blue");
});

// we can use methods like before, after, prepend, append to add html element 
//with JQuerry 
$("h1").before("<button>hi</button>");


// and use the remove methods to remove the html element.