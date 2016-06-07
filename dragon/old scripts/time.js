function showTheHours(theHour) {
if (theHour > 0 && theHour < 13) {
if (theHour == "0") theHour = 12;
return (theHour);
}
if (theHour == 0) {
return (12);
}
return (theHour-12);
}
function showZeroFilled(inValue) {
if (inValue > 9) {
return "" + inValue;
}
return "0" + inValue;
}
function showAmPm() {
if (now.getHours() < 12) {
return (" AM");
}
return (" PM");
}
function showTheTime() {
now = new Date
time.innerHTML = showTheHours(now.getHours()) + ":" + showZeroFilled(now.getMinutes()) + showAmPm()
setTimeout("showTheTime()",1000)
}
// End -->