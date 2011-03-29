self.onmessage = function(event){
	self.postMessage("Hello, " + event.data + "!");
}
