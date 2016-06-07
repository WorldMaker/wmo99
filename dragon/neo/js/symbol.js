/*****************************************************************
  *  Symbol Database and Insertion Routines                       *
   *****************************************************************/

function sData() {
	this.name = ""
	this.data = ""
	this.font = ""
	this.color = ""
	this.idnum = 0		// Line 10
}

function sDataArray(extent) {
	this.counter = 0
	this.extent = extent
	for (i=0; i<=this.extent; i++) {
		this[i] = new sData()
	}
	this.setSymbol = sSetSymbol
	this.listSymbols = sListSymbols		// Line 20
	this.addSymbol = sAddSymbol
	this.printSymbolCode = sPrintSymbolCode
}

function sSetSymbol(symName, symData, symFont, symColor) {
	if (this.counter > this.extent) {
		this.extent++
		this[this.extent] = new sData()
	}
	this[this.counter].name = symName
	this[this.counter].data = symData	// Line 30
	this[this.counter].font = symFont
	this[this.counter].color = symColor
	this[this.counter].idnum = this.counter
	this[this[this.counter].name] = this[this.counter]
	this.counter++
}

function sListSymbols(printSC) {
	temp2Write = "<table>"+
	  "<tr><th>ID #</th><th>Name</th><th>Symbol</th></tr>"
	for (i = 0; i<=this.extent; i++) {	// Line 40
		temp2Write += "<tr><td>"+
		 this[i].idnum + ") " + "</td><td>"+
		 this[i].name + "</td><td>"
	if (printSC) {
		temp2Write += this.printSymbolCode(i)
	}
	if (!printSC) {
		temp2Write += this.addSymbol(i)
	}
	temp2Write += '</td></tr>'
	}
	temp2Write += "</table>"
	document.write(temp2Write)
}
// Line 50
function sAddSymbol(symID, symColor) {
	temp = ""
	if (symColor || this[symID].color != "" || this[symID].font != "") {
		temp += '<font'
		if (symColor) {
			temp += ' color="'+ symColor + '"'
		}
		else if (this[symID].color != "") {
			temp += ' color="'+ this[symID].color + '"'
		}		// Line 60

		if (this[symID].font != "") {
			temp +=  ' face="' + this[symID].font + '"' 
		}
		temp += '>'
	}
	temp += this[symID].data
	if (this[symID].color != "" || this[symID].font != "" || symColor) {
		temp += '</font>'
	}
	return temp
}

function sPrintSymbolCode(symID, symColor) {
	temp = ""
	if (symColor || this[symID].color != "" || this[symID].font != "") {
		temp += '&lt;font'
		if (symColor) {
			temp += ' color="'+ symColor + '"'
		}
		else if (this[symID].color != "") {
			temp += ' color="'+ this[symID].color + '"'
		}		// Line 60

		if (this[symID].font != "") {
			temp +=  ' face="' + this[symID].font + '"' 
		}
		temp += '&gt;'
	}
	temp += this[symID].data
	if (this[symID].color != "" || this[symID].font != "" || symColor) {
		temp += '&lt;/font&gt;'
	}
	return temp
}