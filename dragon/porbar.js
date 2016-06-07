// Portal Bar

var pablet
pablet = ""

pablet += "<div style=\"background: url(\'images/p_back.jpg\')\">&nbsp;"
if (porpage == "main") {
	pablet += "<a href=\"portal.htm\"><img border=0 vspace=5 src=\"images/p_portd.jpg\"></a>&nbsp;"
}
else {
	pablet += "<a href=\"portal.htm\"><img border=0 vspace=5 src=\"images/p_port.jpg\"></a>&nbsp;"
}
if (porpage == "comix") {
	pablet += "<a href=\"comix.htm\"><img border=0 vspace=5 src=\"images/p_comxd.jpg\"></a>&nbsp;"
}
else {
	pablet += "<a href=\"comix.htm\"><img border=0 vspace=5 src=\"images/p_comx.jpg\"></a>&nbsp;"
}
if (porpage == "news") {
	pablet += "<a href=\"news.htm\"><img border=0 vspace=5 src=\"images/p_newd.jpg\"></a>&nbsp;"
}
else {
	pablet += "<a href=\"news.htm\"><img border=0 vspace=5 src=\"images/p_new.jpg\"></a>&nbsp;"
}

pablet += "</div>"

document.write(pablet)