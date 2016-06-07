function ltData () {
	this.addr = ""
	
	// For DRAGONzine:
	this.volis = 0
	this.author = ""
	this.genre = ""					// Line 10
	this.family = ""
	this.department = ""
	this.dragondef = 0	// For Redundancy check...
}
ltData.prototype = new dataData(0)

function ltDataArray (ltextent) {
	this.volisArray = new dataArray(0)
	this.authorArray = new dataArray(0)
//		this.authorArray.DefData("mb","Max Battcher")
//		this.authorArray.DefData("oc","Olivia Cole")
	this.genreArray = new dataArray(0)
	this.familyArray = new dataArray(0)
	this.depArray = new dataArray(0)

	this.DefLink = ltDefLink
	this.DefDragon = ltDefDragon
	this.PrintLinks = ltPrintLinks
	this.Search = ltSearch
}
ltDataArray.prototype = new dataArray()
ltDataArray.prototype.dataType = "ltData()"

function ltDefLink(linkName, linkAddr, linkTitle) {
	this.DefData(linkName, linkTitle)
	this[linkName].addr = linkAddr
	this[this[linkName].idnum].addr = linkAddr
	return linkName
}

// For DRAGONzine:

function ltDefDragon(intID,volis,author,genre,family,department) {
	this[intID].volis = volis
	this[intID].author = author
	this[intID].genre = genre
	this[intID].family = family
	this[intID].department = department
	this[intID].dragondef = 1			// Line 50

	// Update Twin Entry
	if (this[intID].idnum != intID && this[this[intID].idnum].dragondef != 1) {
		tempID = this[intID].idnum
		this.DefDragon(tempID,volis,author,genre,family,department)
	}
	if (this[intID].name != intID && this[this[intID].name].dragondef != 1) {
		tempID = this[intID].name
		this.DefDragon(tempID,volis,author,genre,family,department)
	}						// Line 60
}

function ltPrintLinks() {
	temp2Write = "<table>"+
	  "<tr><th>ID #</th><th>Name</th><th>Address</th><th>Title</th><th>Volis</th><th>Author</th><th>Genre</th><th>Family</th><th>Department</th></tr>"
	for (i=0; i<=this.extent; i++) {
		temp2Write += "<tr><td>"+
		  this[i].idnum+") "+"</td><td>"+
		  this[i].name+"</td><td>"+
		  this[i].addr+"</td><td>"+		// Line 70
		  this[i].title+"</td><td>"+

		// For DRAGONzine
		  this[i].volis+"</td><td>"+
		  this[i].author+"</td><td>"+
		  this[i].genre+"</td><td>"+
		  this[i].family+"</td><td>"+
		  this[i].department+"</td></tr>"
	}
	temp2Write += "</table>"			// Line 80
	document.write(temp2Write)
}

function ltSearch(fieldName,ltInfo) {
	tempTable = new ltDataArray(0)
	for (i=0;i<=this.extent;i++) {
		if (this[i][fieldName] == ltInfo) {
			tempTable.DefDragon(tempTable.DefLink(this[i].name, this[i].addr, this[i].title), this[i].volis, this[i].author, this[i].genre, this[i].family, this[i].department)
		}
	}
	return tempTable
}