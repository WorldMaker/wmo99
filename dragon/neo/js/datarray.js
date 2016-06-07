/****************************
  Basic Array Class...
	Stores a name and
    title...
 ****************************/

function dataData () {
	this.name = ""
	this.title = ""
	this.idnum = 0
}

function dataArray (extent, dataType) {
	this.extent = extent
	this.locked = 0
	this.isEmpty = true
	this.counter = 0
	if (this.extent > 0) {	// If extent is given more than zero
		this.locked = -1  // Make array undynamic...
	}

	if (this.dataType == "") {this.dataType == "dataData()"}

	if (this.extent > 0) {
		for (i=0; i<=this.extent; i++) {
			this[i] = new (eval(this.dataType))
		}
	}

	this.DefData = dataDefData
}

function dataDefData(dataName, dataTitle) {
	/************************************
		Basic Definition Function
	  Creates a new item if past the end
	  and dynamic.
	 ************************************/

	this.isEmpty = false
	if (this.counter > this.extent && this.locked == 0) {
		this[this.counter] = new (eval(this.dataType))
		this.extent++
	}
	if (this.counter > this.extent && this.locked == -1) {
		return -1
	}
	
	this[this.counter].name = dataName
	this[this.counter].title = dataTitle
	this[this.counter].idnum = this.counter
	this[dataName] = this[this.counter]		
	this.counter++					
	return dataName
}