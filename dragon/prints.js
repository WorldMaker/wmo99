document.write('<a href=\"books.htm\"><img border=0 src=\"images/barbooks.gif\"></a>')

document.write('<br><br><CENTER>')
document.write('<DIV ALIGN=CENTER STYLE=\"width: 110; border-left: 1px #EEEEEE solid; border-top: 1px #EEEEEE solid; border-bottom: 1px gray solid; border-right: 1px gray solid; color: white\"><DIV STYLE=\"font-size: 8pt\">Editor:<br><a href=\"mailto:zuruchu@hotmail.com\">Max Battcher</a><BR><BR>Assistant Editor:<BR><a href=\"mailto:morella14@yahoo.com\">Laura Ellis</a><BR><BR>Contributing&nbsp;Editors:<BR><A HREF=\"mailto:simon_nova@yahoo.com\">Pat DeSpain</A></DIV></DIV>')
document.write('</CENTER>')

document.write('<br><br><center>WorldMaker<br>Online Hits:<br><a href="http://member.linkexchange.com/cgi-bin/fc/fastcounter-login?190781" target="_top"><img border="0" src="http://fastcounter.linkexchange.com/fastcounter?190781+381569"></a><BR><font face="arial" size="1"><a href="http://www.fastcounter.com/fc-join" target="_top">LE FastCounter</a></font></center><br>')
day = new Date()
seed = day.getTime()
ran = parseInt(((seed - (parseInt(seed/1000,10) * 1000))/10)/100*numstories + 1,10)
document.write('<DIV STYLE=\"margin-left: 10; width: 110; border-left: 1px #EEEEEE solid; border-top: 1px #EEEEEE solid; border-bottom: 1px gray solid; border-left: 1px gray solid; background: lightgrey; color: black; font-size: 8pt\">&nbsp;&nbsp;View&nbsp;a&nbsp;Random&nbsp;Story:&nbsp;<br>' +
	'&nbsp;&nbsp;' + storlist[ran] + '<br>&nbsp;&nbsp;<SMALL>#' + ran + '\\' + numstories + '</DIV>')

document.write('<form method=\"GET\" action=\"http://www.whatUseek.com/cgi-bin/zoom.go\" target=\"_self\"><input type=\"hidden\" name=\"autocustomize\" value=\"1\"><div align=\"left\"><table border=\"0\" cellpadding=\"2\" cellspacing=\"0\"><tr><td><input type=\"text\" name=\"query\" size=\"15\"></td></tr><tr><td><input type=\"submit\" value=\"Search\" name=\"Submit\"></td></tr><tr><td><div align=\"center\" style=\"font-color: white\"><center><p style=\"font-color: white\"><input type=\"radio\" value=\"db_23061\" checked name=\"db\"><small style=\"color: white\">This Site</small></td></tr><tr><td align=center><input type=\"radio\" name=\"db\" value=\"db\"><small style=\"color: white\">The Web</small></td></tr></table></div></form>')

if (pagenumber != 4) {
document.write('<br><br><center><!-- BEGIN WEBSIDESTORY CODE v5 --><!-- COPYRIGHT 1998-1999 WEBSIDESTORY, INC. ALL RIGHTS RESERVED.  U.S. PATENT PENDING. --><A HREF=\"http://rd1.hitbox.com/rd?acct=WQ5909025NVV38EN0&p=s\"><IMG SRC=\"http://hg1.hitbox.com/HG?hc=w132&l=y&hb=WQ5909025NVV38EN0&l=e&cd=1&n=' + pagenumber + '\" height=62 width=88 ALT=\"Click Here!\" border=0></A><!-- END WEBSIDESTORY CODE  --></center><br><br>')
}