/********************************
  * Creates DRAGON Sidebar       *
   ********************************/
lend = "<br>"
sidebar = ""
tempTable = new ltDataArray()

function sbBuildButton(initial){
//	bDiv = initial+'Button'
//	bdDiv = initial+'Buttond'
//	lDiv = initial+'Links'
//	temp = '<a name="'+
//		bDiv+'" href="javascript:'+
//		'hide(' + bDiv + '); '+
//		'show(' + bdDiv + '); '+
//		'show(' + lDiv + ')">'+
//		symbolTable.addSymbol("fTriRight")+
//		'</a><a name="'+
//		bdDiv+ '" href="javascript:'+
//		'show(' + bDiv + '); '+
//		'hide(' + bdDiv + '); '+
//		'hide(' + lDiv + ')">'+
//		symbolTable.addSymbol("fTriDown")+
//		'</a>'
	return symbolTable.addSymbol("fTriDown") //temp
}

if (document.linkData.department != "") {
	tempTable = linkTable.Search("name",document.linkData.department)
	if (tempTable.isEmpty == false) {
		sidebar += blCreateTitle(sbBuildButton("dp")+" "+lCreateIntLink(tempTable[0].name))
	}
	if (tempTable.isEmpty == true) {
		sidebar += blCreateTitle(sbBuildButton("dp")+" Department")
	}
	//sidebar += '<div name="dpLinks">'
	tempTable = linkTable.Search("department",document.linkData.department)
	for (i=0;i<=tempTable.extent;i++){
		sidebar += blCreateBlurb(lCreateIntLink(tempTable[i].name))
	}
	sidebar += lend //+ '</div>'
}


if (document.linkData.volis != 0) {
	tempTable = linkTable.Search("name",document.linkData.volis)
	if (tempTable.isEmpty == false) {
		sidebar += blCreateTitle(sbBuildButton("vo")+" "+lCreateIntLink(tempTable[0].name))
	}
	if (tempTable.isEmpty == true) {
		sidebar += blCreateTitle(sbBuildButton("vo")+" Issue")
	}
	//sidebar += '<div name="voLinks">'
	tempTable = linkTable.Search("volis",document.linkData.volis)
	for (i=0;i<=tempTable.extent;i++){
		sidebar += blCreateBlurb(lCreateIntLink(tempTable[i].name))
	}
	sidebar += lend //+ '</div>'
}

if (document.linkData.family != "") {
	tempTable = linkTable.Search("name",document.linkData.family)
	if (tempTable.isEmpty == false) {
		sidebar += blCreateTitle(sbBuildButton("fa")+" "+lCreateIntLink(tempTable[0].name))
	}
	if (tempTable.isEmpty == true) {
		sidebar += blCreateTitle(sbBuildButton("fa")+" Family")
	}
	sidebar += '<div name="faLinks">'
	tempTable = linkTable.Search("family",document.linkData.family)
	for (i=0;i<=tempTable.extent;i++){
		sidebar += blCreateBlurb(lCreateIntLink(tempTable[i].name))
	}
	sidebar += lend // + '</div>'
}	

if (document.linkData.author != "") {
	tempTable = linkTable.Search("name",document.linkData.author)
	if (tempTable.isEmpty == false) {
		sidebar += blCreateTitle(sbBuildButton("au")+" "+lCreateIntLink(tempTable[0].name))
	}
	if (tempTable.isEmpty == true) {
		sidebar += blCreateTitle(sbBuildButton("au")+" Author")
	}
	//sidebar += '<div name="auLinks">'
	tempTable = linkTable.Search("author",document.linkData.author)
	for (i=0;i<=tempTable.extent;i++){
		sidebar += blCreateBlurb(lCreateIntLink(tempTable[i].name))
	}
	sidebar += lend //+ '</div>'
}

if (document.linkData.genre != "") {
	tempTable = linkTable.Search("name",document.linkData.genre)
	if (tempTable.isEmpty == false) {
		sidebar += blCreateTitle(sbBuildButton("ge")+" "+lCreateIntLink(tempTable[0].name))
	}
	if (tempTable.isEmpty == true) {
		sidebar += blCreateTitle(sbBuildButton("ge")+" Genre")
	}
	//sidebar += '<div name="geLinks">'
	tempTable = linkTable.Search("genre",document.linkData.genre)
	for (i=0;i<=tempTable.extent;i++){
		sidebar += blCreateBlurb(lCreateIntLink(tempTable[i].name))
	}
	sidebar += lend //+ '</div>'
}

sidebar += blCreateTitle(sbBuildButton("rn")+" Random")
day = new Date()
seed = day.getTime()
ran = parseInt(((seed - (parseInt(seed/1000,10) * 1000))/10)/100*linkTable.extent + 1,10)
//sidebar += '<div name="rnLinks">'
sidebar += blCreateBlurb(lCreateIntLink(linkTable[ran].name)) + lend
//sidebar += '</div>'

sidebar += blCreateBox("<div style=\"font-size: 12\">Editor:<br><a href=\"mailto:zuruchu@hotmail.com\">Max Battcher</a><BR><BR>Assistant Editor:<BR><a href=\"mailto:morella14@yahoo.com\">Laura Ellis</a><BR><BR>Contributing&nbsp;Editors:<BR><A HREF=\"mailto:simon_nova@yahoo.com\">Pat DeSpain</A></div>",1,"2px #EEEEEE solid","2px gray solid","#C0C0C0")

document.write(sidebar)

/*if (document.linkData.department != "") {
	hide('dpButton')
	show('dpButtond')
	show('dpLinks')
}

if (document.linkData.volis != 0) {
	hide('voButton')
	show('voButtond')
	show('voLinks')
}

if (document.linkData.family != "") {
	hide('faButton')
	show('faButtond')
	show('faLinks')
}

if (document.linkData.author != "") {
	hide('faButton')
	show('faButtond')
	show('faLinks')
}

if (document.linkData.genre != "") {
	show('geButton')
	hide('geButtond')
	hide('geLinks')
}

show('rnButton')
hide('rnButtond')
hide('rnLinks')*/