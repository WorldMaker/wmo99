/*** Dragon Toolbar Script ***/

// -== Define Toolbars ==- //

bar = new Array()
bar[1] = ""
bar[1] += lCreateIntLink("news", '<img src="images/realm.jpg" border=0>')+
	'<img src="images/eyes.jpg" border=0>'+
	'<img src="images/prints.jpg" border=0>'+
	'<img src="images/books.jpg" border=0>'+
	'<img src="images/portal.jpg" border=0>'

bar[2] = ""
bar[2] += '<img src="images/portal.jpg" border=0>'+
	lCreateIntLink("news", '<img src="images/news.jpg" border=0>')+
	'<img src="images/comix.jpg" border=0>'

bar[3] = ""
bar[3] += 'Family Bar - | Homepage | Overview | FAQ'

bar[4] = ""
bar[4] += 'Author Bar - | Bio | Reccomendations | '+
	symbolTable.addSymbol("shortcut")+
	'Homepage'

bar[5] = ""
bar[5] += "Sitemap"

function bCreateBar(barnum) {
	return bar[barnum]
}
