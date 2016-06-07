/********************************************************************  
 *   iNOISE							    *
 *	The iNTERACTIVE Nuetral Online Interactive Selection Engine *
 *								    *
 *	The Power of Music.  The Power of Choice.		    *
 *								    *
 *   iNOISE is Created and (C) Copyright 1999 by WorldMaker.        *
 *	All Rights Reserved.					    *
 *								    *
 ********************************************************************/

function Openme(newin) {
        flyout=window.open(newin,"flyout","resizable=yes,scrollbars=no,width=600,height=200,top=15,left=15")
	return flyout
}

function inoise() {
	pork = Openme("inoise.htm")
}

tray.innerHTML = tray.innerHTML + '<img style=\"cursor: hand\" onclick=\"inoise()\" src=\"images/insm.gif\" align=\"right\">'