//Article class
class Article {
  constructor(imageUrl, cost, description) {
    this.imageUrl = imageUrl;
    this.cost = cost;
    this.description = description;
  }

  get dollarSigns() {
    var costValue = this.cost.substr(1,this.cost.length);
    if(costValue < 100.00){
      return "$";
    } 
  } 
}

//dbFilter
function dbFilter(unfilteredItem){
    var imageUrl = unfilteredItem["PHOTO IMAGE"][0].src;
    var cost = unfilteredItem[`PRODUCTDD LINK`][0].text;
    var description = unfilteredItem["PRODUCTDL LINK"][0].text;
    return {
        imageUrl,
        cost,
        description
    }
}

//addItemToPage 
function addItemToPage(itemImage, itemPrice, itemDesc) {

	$("#galleryRow").append(`<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 lv-column">
								<div>
                                    <a href="#">
                                        <img src= ${itemImage} class="lv-image" alt="...">
                                        <div class="caption">
                                    </a>
                                    <h3 class="lv-text lv-" style="height:40px; color:black;">
                                        ${itemDesc.toLowerCase()}
                                        <br>
                                        ${itemPrice}
                                    </h>
	      							</div>
							 	</div>
								</div>`)
};

//displayCard
function displayCard(event) {
    event.preventDefault();
    $("#cardWrapper").html("");
    var imageSrc = event.target.src;
    
    clothingArticles.forEach(function(item,index){  
        if (item.imageUrl == imageSrc) {    
            $("#cardWrapper").append(
            
                `<dialog id="dialog" class="fixed-transparent">
                    <div class="wrapper">
                        <div class="img-wrapper">
                            <img class="lv-img" src=${item.imageUrl}>
                        </div>
                        <div class="lv-container lv-text">
                            <p class="lv-text" >${item.description}</p>
                            <p class="lv-text" >${item.cost}</p>
                        </div>
                    </div>
                </dialog>`)
            $('dialog')[0].showModal();
        } 
    })  
}

//addClickListener
function addClickListener() {
    $(".lv-image").on('click', function(event){
      displayCard(event);
   });
}
