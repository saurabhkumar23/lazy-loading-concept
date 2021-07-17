let conditionObject = {
    root: null,
    threshold: "0.9"
}
let observer = new IntersectionObserver(callBack, conditionObject);
let elements = document.querySelectorAll(".video-container");
elements.forEach((el) => {
    observer.observe(el);
})



function callBack(entries) {
    // console.log(entries);
    entries.forEach((entry) => {
        let child = entry.target.children[0];
        // console.log(child.id)
        // play -> async work 
        // pause -> sync work
        // if (entry.isIntersecting) {
        //     console.log(child.id)
        // } else {
        //     console.log(child.id)

        // }
        
        child.play().then(function(){
            if (entry.isIntersecting == false) {
                child.pause();
            }  
        })
    })
}

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
