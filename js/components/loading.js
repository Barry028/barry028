var loadingEl =
'<div id="logo_loader">\
	<div class="loader-cnt">\
		<div class="loader">\
		    <svg viewBox="0 0 80 80">\
		        <circle id="test" cx="40" cy="40" r="32"></circle>\
		    </svg>\
		</div>\
		<div class="loader triangle">\
		    <svg viewBox="0 0 86 80">\
		        <polygon points="43 8 79 72 7 72"></polygon>\
		    </svg>\
		</div>\
		<div class="loader">\
		    <svg viewBox="0 0 80 80">\
		        <rect x="8" y="8" width="64" height="64"></rect>\
		    </svg>\
		</div>\
	</div>\
</div>';

document.write(loadingEl);
document.onreadystatechange = completeLoading;

function completeLoading() {
	switch (document.readyState) {
	  case "loading":
	    // The document is still loading.
	    break;
	  case "interactive":
	    // The document has finished loading. We can now access the DOM elements.
	    // But sub-resources such as scripts, images, stylesheets and frames are still loading.
		// const span = document.createElement("span");
		// span.textContent = "A <span> element.";
		// document.body.appendChild(span);
	    break;
	  case "complete":
	    var loadingMask = document.getElementById('logo_loader');
    	loadingMask.parentNode.removeChild(loadingMask);
    	
	    break;
	}
}



