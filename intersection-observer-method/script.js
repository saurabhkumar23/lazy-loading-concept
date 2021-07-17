const images = document.querySelectorAll("img")

// create config object: rootMargin and threshold
// are two properties exposed by the interface
let options = {}

// register the config object with an instance
// of intersectionObserver
let observer = new IntersectionObserver(function(entries,observer) {
	// iterate over each entry
	entries.forEach((entry) => {
		// process just the images that are intersecting.
		// isIntersecting is a property exposed by the interface
		if(!entry.isIntersecting) {
            return
		}
        // custom function that copies the path to the img
		// from data-src to src
        const image = entry.target
        const newURL = image.getAttribute('data-src')
        image.src = newURL
		// the image is now in place, stop watching
		observer.unobserve(image)
	})
},options)

images.forEach((image) => {
	observer.observe(image)
});
