function getCookieVal (offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1)
    endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}
//
//  Function to correct for 2.x Mac date bug.  Call this function to
//  fix a date object prior to passing it to SetCookie.
//  IMPORTANT:  This function should only be called *once* for
//  any given date object!  See example at the end of this document.
//
function FixCookieDate (date) {
  var base = new Date(0);
  var skew = base.getTime(); // dawn of (Unix) time - should be 0
  if (skew > 0)  // Except on the Mac - ahead of its time
    date.setTime (date.getTime() - skew);
}
//
//  Function to return the value of the cookie specified by "name".
//    name - String object containing the cookie name.
//    returns - String object containing the cookie value, or null if
//      the cookie does not exist.
//
function GetCookie (name) {
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)
      return getCookieVal (j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break; 
  }
  return null;
}
//
//  Function to create or update a cookie.
//    name - String object containing the cookie name.
//    value - String object containing the cookie value.  May contain
//      any valid string characters.
//    [expires] - Date object containing the expiration data of the cookie.  If
//      omitted or null, expires the cookie at the end of the current session.
//    [path] - String object indicating the path for which the cookie is valid.
//      If omitted or null, uses the path of the calling document.
//    [domain] - String object indicating the domain for which the cookie is
//      valid.  If omitted or null, uses the domain of the calling document.
//    [secure] - Boolean (true/false) value indicating whether cookie transmission
//      requires a secure channel (HTTPS).  
//
//  The first two parameters are required.  The others, if supplied, must
//  be passed in the order listed above.  To omit an unused optional field,
//  use null as a place holder.  For example, to call SetCookie using name,
//  value and path, you would code:
//
//      SetCookie ("myCookieName", "myCookieValue", null, "/");
//
//  Note that trailing omitted parameters do not require a placeholder.
//
//  To set a secure cookie for path "/myPath", that expires after the
//  current session, you might code:
//
//      SetCookie (myCookieVar, cookieValueVar, null, "/myPath", null, true);
//
function SetCookie (name,value,expires,path,domain,secure) {
  document.cookie = name + "=" + escape (value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}

//  Function to delete a cookie. (Sets expiration date to start of epoch)
//    name -   String object containing the cookie name
//    path -   String object containing the path of the cookie to delete.  This MUST
//             be the same as the path used to create the cookie, or null/omitted if
//             no path was specified when creating the cookie.
//    domain - String object containing the domain of the cookie to delete.  This MUST
//             be the same as the domain used to create the cookie, or null/omitted if
//             no domain was specified when creating the cookie.
//
function DeleteCookie (name,path,domain) {
  if (GetCookie(name)) {
    document.cookie = name + "=" +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}

function Openme(newin) {
        flyout=window.open(newin,"flyout","resizable=yes,scrollbars=no,width=600,height=200,top=15,left=15")
	return flyout
}

function themeMe () {
	pork = Openme("bunk.htm")
	pork.head.innerHTML = '<script src=\"theme.js\"></script>'
	pork.icon.innerHTML = '<img align=\"right\" src=\"images/theme.gif\">'
	pork.trayname.innerHTML = '<span style="size: x-large">ThemeMaster v1.22</span>'
	pork.content.innerHTML = '<br><BUTTON ONCLICK=\"rndMe()\">I\'m cool, I\'m hip, I Deserve Random Themes!</BUTTON>'
	pork.content.innerHTML = pork.content.innerHTML + '<BR><BUTTON ONCLICK=\"rndMeNot()\">On Second thought, I don\'t want them, and I don\'t deserve them!</BUTTON>'
	pork.content.innerHTML = pork.content.innerHTML + '<BR>Fav. Theme: &nbsp;<BUTTON ONCLICK=\"rnd(1)\">1</BUTTON><BUTTON ONCLICK=\"rnd(2)\">2</BUTTON><BUTTON ONCLICK=\"rnd(3)\">3</BUTTON><BUTTON ONCLICK=\"rnd(4)\">4</BUTTON><BUTTON ONCLICK=\"rnd(5)\">5</BUTTON>'
	pork.content.innerHTML = pork.content.innerHTML + '<BR><BUTTON ONCLICK=\"rndNoSpot()\">I know your spot is cooler than Geocities\', and Smaller,<BR> and Less Annoying, but I am allergic to them.</BUTTON>'
}

var num = 5
day = new Date()
seed = day.getTime()
ran = parseInt(((seed - (parseInt(seed/1000,10) * 1000))/10)/100*num + 1,10)

number = GetCookie("NUM")
if (number == "1") {ran = 1}
if (number == "2") {ran = 2}
if (number == "3") {ran = 3}
if (number == "4") {ran = 4}
if (number == "5") {ran = 5}
rnd = GetCookie("RND")
if (rnd == "YES") {ran = ran}
else {ran = 1}

if (ran == 1) {logo.innerHTML = '<img align=right src=\"images/logo.gif\">'}

if (ran == 2) {

	logo.innerHTML = '<img align=right src=\"images/sunset.gif\">' 
	body.style.background = 'White'
	corner.innerHTML = '<img src=\"images/wcorner.gif\" align=\"top\">'
	cornerb.innerHTML = '<img src=\"images/wcornerb.gif\">'
	cornerc.innerHTML = '<img src=\"images/wcornerc.gif\" align=\"absbottom\">'
	cornerd.innerHTML = '<img src=\"images/wcornerd.gif\" align=\"absbottom\">'
	wmosm.innerHTML = '<a href=\"http://members.xoom.com/WrldMakr/\"><img src=\"images/wmosmw.gif\" class=\"float\"></a>'
	}

if (ran == 3) {logo.innerHTML = '<img align=right src=\"images/sunsetblack.gif\">'}

if (ran == 4) {logo.innerHTML = '<img align=right src=\"images/wmoblue.gif\">'}

if (ran == 5) {
	logo.innerHTML = '<img align=right src=\"images/wmowhite.gif\">'
	body.style.background = 'White'
	corner.innerHTML = '<img src=\"images/wcorner.gif\" align=\"top\">'
	cornerb.innerHTML = '<img src=\"images/wcornerb.gif\">'
	cornerc.innerHTML = '<img src=\"images/wcornerc.gif\" align=\"absbottom\">'
	cornerd.innerHTML = '<img src=\"images/wcornerd.gif\" align=\"absbottom\">'
	wmosm.innerHTML = '<a href=\"http://members.xoom.com/WrldMakr/\"><img src=\"images/wmosmw.gif\" class=\"float\"></a>'
}

tray.innerHTML = tray.innerHTML + '<img style=\"cursor: hand\" src=\"images/themesm.gif\" onmousedown=\"themeMe()\" align=\"right\">'

if (GetCookie("SPOT") == "NO") { wmosm.innerHTML = '' }

document.write('<center><a href="http://www.alladvantage.com/go.asp?refid=BJR450"><img src="images/alladv.gif" border=0 alt="Join AllAdvantage.com"></a></center>')