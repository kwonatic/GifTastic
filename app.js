// import React, { Fragment } from 'react';

$(document).ready(function () {
    //fruits
    var topics = ["banana", "apple", "pineapple", "honeydew", "mango", "orange"]
    var searchQuery = topics[i];

    function handleSearch() {
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            
            a.attr("data-type", topics[i]);
            a.text(topics[i]);

        }
    }

    $(document).on("click", "search-btn", function () {
        $("search-btn").removeClass("active");
        $(this).addClass("active");
    
$.ajax({
        url: queryURL,
        method: "GET"
    }) 
    .then(function(response) {
        var results = response.data
    })
})


var searchQuery = $(this).attr("data-type");
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&api_key=lQYDXTvb5PkVkQUJYC97PYOl7cWOukTv&limit=5");
    xhr.done(function (data) { console.log("success got data", data); });

    // <button name={n.likes} onClick={this.IncrementItem(index, n._id)}>Like</button>


})