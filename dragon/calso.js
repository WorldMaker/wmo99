/*********************************************************************
		The Calso Bar (pronounced See Also Bar) is 
		organized into two sections which appear in the
		bar, the Family and Author.  More will be done
		with the bar in the future.
 *********************************************************************/

/*

variables:

famtype -> Family Type
author -> Author
genre -> Genre

families:

mp -> Mexican Penguin
az -> Azeroth
k -> Kayos
sf -> Sun Fox
azc -> Azeroth: Crusade
pc -> Professor Carpworth

authors:

mb -> Max
pd -> Pat
le -> Laura
oc -> Olivia
ue -> Ernest Stewart

*/

if (famtype != "") {
	document.write("<img src=\"images/mid.gif\"><br>=Also In This Family=<br><img src=\"images/mid.gif\"><br>")

	if (famtype == "mp") {
		document.write(storlist[4] + "<br><br>" + storlist[6] + "<br><br>" + storlist[9] + "<br><br>" + storlist[14])
	}
	if (famtype == "azc") {
		document.write("=Crusade=<br><br>" + storlist[18] + "<br><br>=Azeroth=<br><br>")
		famtype = "az"
	}
	if (famtype == "k") {
		document.write("=Kayos=<br><br>" + storlist[11] + "<br><br>" + storlist[15] + "<br><br>" + storlist[16] + "<br><br>=Azeroth=<br><br>")
		famtype = "az"
	}
	if (famtype == "az") {
		document.write(storlist[7] + "<br><br>" + storlist[8] + "<br><br>" + storlist[10] + "<br><br>" + storlist[13])
	}
	if (famtype == "sf") {
		document.write(storlist[17] + "<br><br>" + storlist[24] + "<br><br>" + storlist[27])
	}
	if (famtype == "pc") {
		document.write(storlist[21] + "<br><br>" + storlist[25] + "<br><br>" + storlist[26])
	}
}

if (author != "") {
	if (famtype != "") {document.write("<br><br>")}
	document.write("<img src=\"images/mid.gif\"><br>=Also By This Author=<br><img src=\"images/mid.gif\"><br>")

	if (author == "le") {
		document.write(storlist[2])
	}
	if (author == "pd") {
		document.write(storlist[12])
	}
	if (author == "mb") {
		document.write(storlist[1] + "<br><br>" + storlist[3] + "<br><br>" + storlist[4] + "<br><br>" + storlist[5] + "<br><br>" + storlist[6] + "<br><br>" + storlist[7] + "<br><br>" + storlist[8] + "<br><br>" + storlist[9] + "<br><br>" + storlist[10] + "<br><br>" + storlist[11] + "<br><br>" + storlist[13] + "<br><br>" + storlist[15] + "<br><br>" + storlist[14] + "<br><br>" + 
		storlist[16] + "<br><br>" + storlist[18] + "<br><br>" + storlist[20] + "<br><br>" + storlist[21] + "<br><br>" + storlist[25] + "<br><br>" + storlist[26] + "<br><br>" + storlist[29])
	}
	if (author == "oc") {
		document.write(storlist[17] + "<br><br>" + storlist[24] + "<br><br>" + storlist[27])
	}
	if (author == "ue") {
		document.write(storlist[19] + "<br><br>" + storlist[22] + "<br><br>" + storlist[23])
	}
	if (author == "ik") {
		document.write(storlist[28])
	}
}