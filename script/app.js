(() => {
	// set up the puzzle pieces and boards
	// buttons at the buttom of the page
	const navButtons = document.querySelectorAll("#buttonHolder img");

	//functions go here => what we want to have happen when our triggers fire
	function changeImageSet() {
		// change the thumbnail images on the left to match the btton images
		// and set a background image on the drop zone container
		debugger;
	}


	// add some event handling for the nav navButtons
	navButtons.forEach(button => button.addEventListener('click', changeImageSet));
})();
