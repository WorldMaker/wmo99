function blCreateHeader (txtTitle) {
	return '<span class="headText">'+
		txtTitle+
		'</span><span class="headEnd">&nbsp;</span><br>'
}

function blCreateTitle (txtTitle) {
	return '<div class="title">'+ 
		txtTitle+
		'</div>'
}

function blCreateBlurb (txtBlurb) {
	return '<div class="blurb">'+
		txtBlurb+
		'</div>'
}

function blCreateBox (txtBox, Threed, ThreedLight, ThreedDark, ThreedBG) {
	if (Threed) {
		if (!ThreedLight) {ThreedLight='2px #EEEEEE solid'}
		if (!ThreedDark) {ThreedDark='2px gray solid'}

		temp3d = ""
		temp3d += '<table style="'
		if (Threed == 1) {
			temp3d += 'border-top: '+ThreedLight+'; border-left: '+ThreedLight+';'
			temp3d += 'border-right: '+ThreedDark+'; border-bottom: '+ThreedDark+';'
		}
		if (Threed == -1) {
			temp3d += 'border-right: '+ThreedLight+'; border-bottom: '+ThreedLight+';'
			temp3d += 'border-top: '+ThreedDark+'; border-left: '+ThreedDark+';'
		}
		if (ThreedBG) {
			temp3d += 'background: '+ThreedBG+';'
		}
		temp3d += '"><tr><td>'+
			txtBox+
			'</td></tr></table>'
		return temp3d
	}
	return '<table class="box" align="right"><tr><td>'+
		txtBox+
		'</td></tr></table>'
}

function blCreateSpotlight (department) {
	if (department == "top") {department = "welcome"}
	return '<table background="images/lines.gif" width="100%"><tr><td><img src="'+
	"images/" + department + ".gif"+
	'" id="spotlight" speed="10"></td></tr></table>'
}