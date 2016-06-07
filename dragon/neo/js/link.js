function lCreateLink(linkAddr, linkTitle) {
	return '<a href="'+
		linkAddr+
		'">'+
		linkTitle+
		'</a>'
}

function lCreateIntLink(linkInt, linkTitle) {
	if (linkTitle) {
		return lCreateLink(linkTable[linkInt].addr, linkTitle)
	}
	return lCreateLink(linkTable[linkInt].addr,linkTable[linkInt].title)
}

function lBuildPHPLink(linkInt,fp) {
	if (fp) {return 'frontpage.php3?intid='+linkInt}
	return 'dragon.php3?intid='+linkInt
}