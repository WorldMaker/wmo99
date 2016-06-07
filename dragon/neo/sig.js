if (document.linkData.author != "") {
	sig = "<br>"
	sig +=	blCreateHeader("Signature")
	if (document.linkData.genre != "") {
		sig += blCreateBox(document.linkData.genre)
	}

	if (document.linkData.author == "mb") {
		sig += blCreateBlurb(blCreateBox('<I>Max Battcher (<a href=\"mailto:world_maker@yahoo.com\">world_maker@yahoo.com</a>), aka WorldMaker, is the editor of DRAGONzine, and a big Sci-Fi fan.</I>',1,"2px red solid","2px red solid","white"))
	}
	if (document.linkData.author == "pd") {
		sig += blCreateBlurb(blCreateBox('<I>Pat DeSpain (<a href=\"mailto:simon_nova@yahoo.com\">Simon_Nova@yahoo.com</a>) is a contributing editor of DRAGONzine.  He loves fantasy.</I>',1,"2px red solid","2px red solid","white"))
	}
	if (document.linkData.author == "le") {
		sig += blCreateBlurb(blCreateBox('<I>Laura Ellis (<a href=\"mailto:morella14@yahoo.com\">morella14@yahoo.com</a>) is the Assistant Editor for DRAGONzine.  She also writes Fantasy and Poetry.</I>',1,"2px red solid","2px red solid","white"))
	}
	if (document.linkData.author == "oc") {
		sig += blCreateBlurb(blCreateBox('<I>Olivia Cole (<a href=\"mailto:streampaw@hotmail.com\">StreamPaw@hotmail.com</a>) is a 6<sup>th</sup> Grader.  She has submitted <u>The Sun Fox</u> as her first story to DRAGON.</I>',1,"2px red solid","2px red solid","white"))
	}
	if (document.linkData.author == "ue") {
		sig += blCreateBlurb(blCreateBox('<I>Ernest Stewart (<a href=\"mailto:uncle-ernie@usa.net\">Uncle-Ernie@usa.net</a>) has submitted these three short stories from his book, <U>He Never Came Back</U>.  Copyright &copy; 1999 Ernest Stewart.</I>',1,"2px red solid","2px red solid","white"))
	}
	if (document.linkData.author == "ik") {
		sig += blCreateBlurb(blCreateBox('<I>Isabella Kraft (<a href=\"mailto:bosco324@aol.com\">Bosco324@aol.com</a>) has kindly submitted this interesting story to DRAGONzine.  It is copyright &copy; 1999 by Isabella Kraft.</I>',1,"2px red solid","2px red solid","white"))
	}
	document.write(sig)
}