// The World Community Bar!!

// Variables may be outsourced!!  Variables are probably the only
// thing you want to change.
perbio = "94503"	// Your Bio number.  Blank ("") for none.
icqnum = "7324535"	// Your ICQ number.  Blank ("") for none.
//flagid = "am"		
			// Your Flag ID.  Blank ("") for none.
			// Flag IDs supported:

			// None currently

// End of variables...  You shouldn't really edit anything after this.

var pablet
pablet = ""

pablet += '<table bgcolor=' + wcColor + ' border=1><tr><td><center>'
pablet += '<IMG SRC=\"' + wcHead + '\"><img alt=\"My Status\" align=top src=\"http://online.mirabilis.com/scripts/online.dll?icq=' + icqnum + '&img=5\"><br>'
pablet += '<IMG SRC=\"' + wcH2G2 + '\"><FORM method=\"post\" action=\"http://www.h2g2.com/search.cgi\"><INPUT name=\"search\" type=\"text\" size=\"20\"/><INPUT type=\"Submit\" value=\"Search h2g2\"/></FORM>'
pablet += '<A HREF=\"http://www.h2g2.com\"><IMG BORDER=0 SRC=\"' + wcFrontPage + '\"></A><A HREF=\"http://www.h2g2.com/U' + perbio + '\"><IMG BORDER=0 SRC=\"' + wcMyPage + '\"></A><A HREF=\"http://www.h2g2.com/index.cgi\"><IMG BORDER=0 SRC=\"' + wcArticleList + '\"></A>'
pablet += '</center></td></tr></table>'

document.write(pablet)