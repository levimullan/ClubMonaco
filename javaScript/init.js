
//initialize variables
var unfilterArray = data.extractorData.data[0].group;
var clothingArticles = [];

//run filter array, push to new array and add to page
unfilterArray.forEach(function(unfilteredItem, index){
    var filteredItem = dbFilter(unfilteredItem);
    var article = new Article(filteredItem.imageUrl, filteredItem.cost, filteredItem.description);
    clothingArticles.push(article);
    addItemToPage(article.imageUrl, article.cost, article.description);
});

//run search function
$("#search").on('submit', function(event) {
    event.preventDefault();
    $("#galleryRow").html("");

    clothingArticles.forEach(function(item,index) {
        
        var input = $("#someInput").val().toLowerCase();
        var description = item.description.toLowerCase();
        if (description.indexOf(input) > -1) {

            //add item to page with arguements 
            addItemToPage(item.imageUrl, item.cost, item.description);
            addClickListener();
        }
    });
});

//run addClicklisteners 
addClickListener();