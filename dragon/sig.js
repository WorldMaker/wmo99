var sig
sig = ''

// Arrow Sign: <sup><font color="blue" face="monotype sorts">&#216;</font>F</sup>

// Genre Icon
if (genre == "sf") {
	sig += '<img src=\"images/zscifi.gif\" align=right>'
}
if (genre == "sfm") {
	sig += '<img src=\"images/zscifi.gif\" align=right><img src=\"images/zmyst.gif\" align=right>'
}
if (genre == "sff") {
	sig += '<img src=\"images/zscifi.gif\" align=right><img src=\"images/zfant.gif\" align=right>'
}
if (genre == "f") {
	sig += '<img src=\"images/zfant.gif\" align=right>'
}
if (genre == "unk") {
	sig += '<img src=\"images/zunk.gif\" align=right>'
}
if (genre == "o") {
	sig += '<img src=\"images/zoth.gif\" align=right>'
}

// Author's SIG
if (author == "mb") {
	sig += '<I>Max Battcher (<a href=\"mailto:zuruchu@hotmail.com\">Zuruchu@hotmail.com</a>) is also the editor of DRAGONrealm, and a big Sci-Fi fan.</I>'
}
if (author == "pd") {
	sig += '<I>Pat DeSpain (<a href=\"mailto:simon_nova@yahoo.com\">Simon_Nova@yahoo.com</a>) is a contributing editor of DRAGONrealm.  He loves fantasy, specifically Tolkien\'s <u>Lord of the Rings</u>.</I>'
}
if (author == "le") {
	sig += '<I>Laura Ellis (<a href=\"mailto:morella14@yahoo.com\">morella14@yahoo.com</a>) is the Assistant Editor for DRAGONrealm.  She also writes Fantasy and Poetry.</I>'
}
if (author == "oc") {
	sig += '<I>Olivia Cole (<a href=\"mailto:streampaw@hotmail.com\">StreamPaw@hotmail.com</a>) is a 6<sup>th</sup> Grader.  She has submitted <u>The Sun Fox</u> as her first story to DRAGON.</I>'
}
if (author == "ue") {
	sig += '<I>Ernest Stewart (<a href=\"mailto:uncle-ernie@usa.net\">Uncle-Ernie@usa.net</a>) has submitted these three short stories from his book, <U>He Never Came Back</U>.  Copyright &copy; 1999 Ernest Stewart.</I>'
}
if (author == "ik") {
	sig += '<I>Isabella Kraft (<a href=\"mailto:bosco324@aol.com\">Bosco324@aol.com</a>) has kindly submitted this interesting story to DRAGONzine.  It is copyright &copy; 1999 by Isabella Kraft.'
}

// Author's Reccomendations
if (author == "mb") {
	sig += '<p><table bgcolor=black style=\"color: white\" width=100%><tr><td bgcolor=Gray>The Author Recommends:</td></tr><tr><td>'
	// SFM
	if (genre == "sfm") {
	sig += '<tr><td bgcolor=DarkGray>&nbsp;&nbsp;Science-Fiction Mystery:</td></tr>'
	sig += '<tr><td>'
	sig += '<A HREF=\"http://www.amazon.com/exec/obidos/ASIN/0451455924/dragonzine\">Sci-Fi Private Eye</a><sup><font color=\"blue\" face=\"monotype sorts\">&#216;</font>A</sup> [Anthology] (<a href=\"changes.htm#revrate\">MATURE</a>)<br>'
	sig += '<A HREF=\"http://www.amazon.com/exec/obidos/ASIN/0441005454/dragonzine\">Isaac Asimov\'s Detectives</a><sup><font color=\"blue\" face=\"monotype sorts\">&#216;</font>A</sup> [Anthology] (<a href=\"changes.htm#revrate\">MATURE</a>)<br>'
	sig += '<A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/view.asp?id=2303187&ref=1\">The Long Dark Teatime of the Soul</A> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=Douglas+Adams&startat=0\">Douglas Adams</A><br>'
	sig += '</td></tr>'
	}

	// SFF
	if (genre == "sff") {
	sig += '<tr><td bgcolor=DarkGray>&nbsp;&nbsp;Science-Fiction & Fantasy:</td></tr>'
	sig += '<tr><td>'
	sig += '<A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/view.asp?id=2350351&ref=1\">Dragonsinger</A> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=Anne+McCaffrey&startat=0\">Anne McCaffrey</A><br>'
	sig += '<A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/view.asp?id=2150906&ref=1\">All the Weyrs of Pern</A> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=Anne+McCaffrey&startat=0\">Anne McCaffrey</A><br>'
	sig += '</tr></td>'
	}
		
	// SF
	if (genre == "sf" || genre == "sfm" || genre == "sff") {
	sig += '<tr><td bgcolor=DarkGray>&nbsp;&nbsp;Science-Fiction:</td></tr>'
	sig += '<tr><td>'
	sig += '<A HREF=\"http://www.amazon.com/exec/obidos/ASIN/0441094996/dragonzine\">The Cat Who Walks Through Walls</A><sup><font color=\"blue\" face=\"monotype sorts\">&#216;</font>A</sup> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=Robert+A%2E+Heinlein&startat=0\">Robert A. Heinlein</A> (<a href=\"changes.htm#revrate\">MATURE</a>)<br>'
	sig += '<A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/view.asp?id=2235118&ref=2\">Dune</A> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=Frank+Herbert&startat=0\">Frank Herbert</A> (<a href=\"changes.htm#revrate\">PG</a>)<br>'
	sig += '<A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/view.asp?id=2150548&ref=1\">Fahrenheit 451</A> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=Ray+Bradbury&startat=0\">Ray Bradbury</A> (Classic)<br>'
	sig += '<A HREF=\"http://www.amazon.com/exec/obidos/ASIN/0886774292/dragonzine\">Forty Thousand in Gehenna</a><sup><font color=\"blue\" face=\"monotype sorts\">&#216;</font>A</sup> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=C%2E+J%2E+Cherryh&startat=0\">C. J. Cherryh</A><br>'
	sig += '<A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/view.asp?id=2156418&ref=2\">Foundation</A> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=Isaac+Asimov&startat=0\">Isaac Asimov</A><br>'
	sig += '<A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/view.asp?id=2193483&ref=2\">The Hitchhiker\'s Guide to the Galaxy</A> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=Douglas+Adams&startat=0\">Douglas Adams</A><br>'
	sig += '<A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/view.asp?id=2400416&ref=1\">The Man in the High Castle</A> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=Philip+K%2E+Dick&startat=0\">Philip K. Dick</A><br>'
	sig += '<A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/view.asp?id=2230090&ref=1\">Nemesis</a> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=Isaac+Asimov&startat=0\">Isaac Asimov</A><br>'
	sig += '<A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/view.asp?id=2198042&ref=1\">Startide Rising</A> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=David+Brin&startat=0\">David Brin</A> (<a href=\"changes.htm#revrate\">MATURE</a>)<br>'
	sig += '<A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/view.asp?id=2226229&ref=1\">The Rowan</A> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=Anne+McCaffrey&startat=0\">Anne McCaffrey</A><br>'
	sig += '<A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/view.asp?id=2322343&ref=1\">Timescape</A> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=Gregory+Benford&startat=0\">Gregory Benford</A> (old book...  :)<br>'
	sig += '</td></tr>'
	}

	// F
	if (genre == "f" || genre == "sff") {
	sig += '<tr><td bgcolor=DarkGray>&nbsp;&nbsp;Fantasy:</td></tr>'
	sig += '<tr><td>'
	sig += '<A HREF=\"http://www.amazon.com/exec/obidos/ASIN/0061051586/dragonzine\">Carpe Jugulum</A><sup><font color=\"blue\" face=\"monotype sorts\">&#216;</font>A</sup> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=Terry+Pratchett&startat=0\">Terry Pratchett</A><br>'
	sig += '<A HREF=\"oct99rv.htm\">The Last Dragonlord</A> by <A HREF=\"http://www.bmvs.com/sites/dragonbooks/books/qsearch.asp?by=author&keywords=Joanne+Bertin&startat=0\">Joanne Bertin</A><BR>'
	sig += '</tr></td>'
	}
	
	sig += '<tr><td bgcolor=Gray>Give a gift <b>and</b> support DRAGONzine:</td></tr>'
	sig += '<tr><td>The Author\'s <a href=\"http://www.amazon.com/exec/obidos/redirect?tag=dragonzine&path=wishlist/2LQMUCHWEOO4U\">Wish List</a>'
	sig += '</td></tr></table></p>'
}

document.write(sig)