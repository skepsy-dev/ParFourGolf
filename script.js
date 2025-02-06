



// Show the expanded img modal and insert the clicked img.
function myFunction(imgs) {
        var expandImg = document.getElementById("expandedImg");
        // var imgText = document.getElementById("imgtext");
        expandImg.src = imgs.src;
        // imgText.innerHTML = imgs.alt;
        document.getElementById("img-bg-modal").style.display = "block";
    }

// Close Button IMG Modal
document.querySelector('.imgModal-close').addEventListener("click", function() {
	document.querySelector('.img-bg-modal').style.display = "none";
});

// Close IMG modal on escape button 
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelector('.img-bg-modal').style.display = "none";
  }
})





// Page Tabs changing function
function openPage(evt, pgName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("pageContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("pageLinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pgName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// Needl Work Pg Tabs changing function
function openNeedle(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("needleTabContent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("needleTabLinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenNeedle").click();




// Auction Pg Tabs changing function
function openAuction(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("auctionTabContent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("auctionTabLinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenAuction").click();





// Auction Catalog preview funcitons.
  var pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++)
    {
      var page = pages[i];
      if (i % 2 === 0)
        {
          page.style.zIndex = (pages.length - i);
        }
    }

  document.addEventListener('DOMContentLoaded', function(){
    for(var i = 0; i < pages.length; i++)
      {
        //Or var page = pages[i];
        pages[i].pageNum = i + 1;
        pages[i].onclick=function()
          {
            if (this.pageNum % 2 === 0)
              {
                this.classList.remove('flipped');
                this.previousElementSibling.classList.remove('flipped');
              }
            else
              {
                this.classList.add('flipped');
                this.nextElementSibling.classList.add('flipped');
              }
           }
        }
  })




