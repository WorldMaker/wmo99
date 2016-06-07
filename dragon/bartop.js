/*
Add-to-favorites Script
Created by David Gardner (toolmandav@geocities.com)
No warranty of any kind comes with this script!
Permission granted to Dynamic Drive (http://dynamicdrive.com) 
to post and feature this script on their DHTML archive
*/

function addbookmark(){
if (document.all)
window.external.AddFavorite(bookmarkurl,bookmarktitle)
}

if (pagenumber == 4) {
	document.write('<img src=\"images/mid.gif\"><a class=\"chlnk\" style=\"cursor:hand\" HREF onClick=\"this.style.behavior=\'url(#default#homepage)\';this.setHomePage(\'http://thunder.prohosting.com/~dzine/\');\"><img src=\"images/sethome.gif\"></a>')
}

if (pagenumber == 26) {
	document.write('<a class=\"chlnk\" style=\"cursor:hand\" HREF onClick=\"this.style.behavior=\'url(#default#homepage)\';this.setHomePage(\'http://thunder.prohosting.com/~dzine/portal.htm\');\"><img src=\"images/sethome.gif\"></a>')
}

if (pagenumber == 4) {
	var bookmarkurl="http://thunder.prohosting.com/~dzine/"
	var bookmarktitle="DRAGONzine"
	document.write('<br><a onclick=\"addbookmark()\"><img style=\"cursor:hand\" src=\"images/setfav.gif\"></a><img src=\"images/mid.gif\">')
}

document.write('<table align=center cellpadding=0 cellspacing=0 width=\"135\" style=\"margin-left: 2; margin-right: 20; color: white; font-family: Tribune\">')
document.write('<tr><td align=center><a href=\"incharge.htm\">Who\'s In Charge?</a></td></tr>')
document.write('<tr><td align=center><a href=\"contrib.htm\">Contribute</a><br></td></tr><tr><td align=center><A href=\"sitemap.htm\">Sitemap</a><br></td></tr>')
document.write('<tr><td align=center><A HREF=\"copy.htm\">Copyright</a><br></td></tr><tr><td align=center><a href=\"ad.htm\">Advertise!</a></td></tr><tr><td align=center><A HREF=\"changes.htm\">Changes</A></td></tr>')
document.write('</table><br>')