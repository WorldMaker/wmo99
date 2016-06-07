<HTML>

<HEAD>
<LINK REL="StyleSheet" HREF="cover.css">
<SCRIPT SRC="js/datarray.js"></SCRIPT>
<SCRIPT SRC="js/blurb.js"></SCRIPT>
<SCRIPT SRC="js/link.js"></SCRIPT>
<SCRIPT SRC="js/linktablebackup.js"></SCRIPT>
<SCRIPT SRC="js/symbol.js"></SCRIPT>
<SCRIPT SRC="js/commonsymbols.js"></SCRIPT>
<SCRIPT SRC="dragonsymbols.js"></SCRIPT>
<SCRIPT SRC="dragonlinks.js"></script>
<title>DRAGONzine</title>
<script>
document.linkData = linkTable["<?php echo $intid?>"]; pagenumber = document.linkData.idnum

// Ugh!!

//ns4 = (document.layers)? true:false
//ie4 = (document.all)? true:false

// Show/Hide functions for non-pointer layer/objects
//function show(id) {
//	if (ns4) document.layers[id].visibility = "show"
//	else if (ie4) (eval(id)).style.visibility = ""
//}

//function hide(id) {
//	if (ns4) document.layers[id].visibility = "hide"
//	else if (ie4) (eval(id)).style.display = "hidden"
//}

</script>
</HEAD>

<BODY topmargin="0" leftmargin="0" marginwidth="0" marginheight="0">
<Table Cellspacing=5 Width="780">
<tr>
	<td colspan=3 height="60" valign=center bgcolor="Black">
	  <center><script src="banner.js"></script></center>
	</td>
</tr>
<tr>
	<td colspan=3 height="30" bgcolor="Black">
	  <center><img src="images/realm.jpg"><img src="images/eyes.jpg"><img src="images/prints.jpg"><img src="images/books.jpg"><img src="images/portal.jpg"></center>
	</td>
</tr>
<tr>
	<td width="80%" valign=top>
	<script>document.write(blCreateSpotlight(document.linkData.department))</script>
	
	<?php readfile($intid . ".htm")?>

	</td>
	<td rowspan=2 background="images/marble.jpg" width="1">
	 &nbsp;<!-- vert bar -->
	</td>
	<td rowspan=2 width="20%" valign=top>
	 <font face="Monotype.Com" size="2">
		<script src="sidebar.js"></script>
	 </font>
	</td>
</tr>
<tr>
	<td height="30" bgcolor="Black">
	 <script>
	  if (document.linkData.department == "portal" || document.linkData.department == "top") {
	   document.write('<center><img src="images/portal.jpg"><img src="images/news.jpg"><img src="images/comix.jpg"></center>')
	  }
	 </script>
	</td>
</tr>
<tr>
	<td colspan=3 height="30" bgcolor="Black">
	  <center><img src="images/realm.jpg"><img src="images/eyes.jpg"><img src="images/prints.jpg"><img src="images/books.jpg"><img src="images/portal.jpg"></center>
	</td>
</tr>
<tr>
	<td colspan=3>
	 <center><small>Copyright &copy; 2000 DRAGONzine.  Please read the Copyright statement for full copyright information.<br>ISSN: 1526-2294</small></center>
	</td>
</tr>
</Table>

<script language="JavaScript1.2">

/*
Moving light on image script
© Dynamic Drive (www.dynamicdrive.com)
For full source code, installation instructions,
100's more DHTML scripts, and Terms Of
Use, visit dynamicdrive.com
*/


if (document.all&&window.spotlight){
var x=new Array()
var direction=new Array()
var y=new Array()
if (spotlight.length==null){
spotlight[0]=document.all.spotlight
x[0]=0
direction[0]="right"
y[0]=spotlight[0].height
spotlight[0].filters.light.addPoint(100,50,100,255,255,255,90)
}
else

for (i=0;i<spotlight.length;i++){
x[i]=0
direction[i]="right"
y[i]=spotlight[i].height
spotlight[i].filters.light.addPoint(100,50,100,255,255,255,90)
}
}

function slidelight(cur){
spotlight[cur].filters.light.MoveLight(0,x[cur],y[cur],200,-1)

if (x[cur]<spotlight[cur].width+200&&direction[cur]=="right")
x[cur]+=10
else if (x[cur]>spotlight[cur].width+200){
direction[cur]="left"
x[cur]-=10
}
else if (x[cur]>-200&&x[cur]<-185){
direction[cur]="right"
x[cur]+=10
}
else{
x[cur]-=10
direction[cur]="left"
}
}

if (document.all&&window.spotlight){
if (spotlight.length==null)
setInterval("slidelight(0)",spotlight[0].speed)
else
for (t=0;t<spotlight.length;t++){
var temp='setInterval("slidelight('+t+')",'+spotlight[t].speed+')'
eval(temp)
}
}
</script>
</BODY>

</HTML>