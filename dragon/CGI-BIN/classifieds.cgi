#!/usr/bin/perl

# Name: e-Classifieds (Free Edition)
# Version: 2.3
# Last Modified: 8-15-99 by Philip A. Hagen

# The user-configurable variables are listed below.  You need to define these
# before uploading the program, or it will not work properly.
# Most of these variables are in the following format:

# $variable = "value";

# The # symbol will not be in front of the actual variables, however, as this
# is used to "comment out" lines in Perl.  In other words, lines that begin with
# the # symbol are ignored by Perl when it executes the program.  The $ sign
# is used to indicate variables in Perl, while the items in between the quotation
# marks represent the assigned value of that variable.  The semicolon indicates
# the end of the statement.  Therefore, in the example above, if you wanted to
# change the value for that variable, the only thing that you should change is
# the portion in between the quotation marks. For example, to change the value
# of the variable $variable to "red", you would edit it as follows:

# $variable = "red";

# Again, you would not put the # symbol in front of $variable.  We did that
# here only because this is an example that we do not want the program to 
# actually execute.

# Two other things you should note are that if you use quotation marks as part
# of the value (in other words, inside of the quotation marks that define the
# value), then you must "comment them out" by putting a back slash symbol (the
# "\" symbol) in front of them.  For example:

# $variable = "The \"red\" light";

# Also, if you use the @ symbol in any of your value statements, you must
# similarly comment it out by putting a backslash symbol in front of it,
# such as in the following:

# $my_email_address = "me\@mydomain.com";

#################################################################
# The variables are defined below.

# $script_url should be set to the full URL of this classifieds program on your
# server.

$script_url = "http://thunder.prohosting.com/~dzine/cgi-bin/classifieds/classifieds.cgi";

# $master_admin_email_address should be set to your e-mail address

$master_admin_email_address="world_maker\@yahoo.com";

# $admin_name should be set to the name of the administrator

$admin_name = "Max Battcher";

# $sitename should be set to the name of your web site

$sitename = "DRAGONzine";

# $siteurl should be set to the full URL of your web site

$siteurl = "http://thunder.prohosting.com/~dzine/";

# $slogan should be set to whatever slogan or catchphrase you use for your site

$slogan = "\"Umm...  your slogan here.\"";

# $sendmail should be set to the full server path to sendmail on your Unix server
# By default, this is set to "/usr/sbin/sendmail", but on many Unix systems, it is
# located at "/usr/lib/sendmail".  If you don't know this, you might try typing 
# "whereis sendmail" or "which sendmail" from a Telnet prompt.
# If you are running this program on Windows NT, you should set this to "".  You
# will not be able to use the e-mail routines for this program on a Windows NT
# server.  The commercial versions of the program include e-mail routines for
# both Windows NT and Unix.

$sendmail = "";

# The following variable specifies the administrative password.  You can
# (and should) change this to whatever you want.

$admin_password = "oscarmayer";

# The following variable specifies the special multiplier that will be
# used to generate a unique password for each ad.  Please change this from
# the default so that other users of this program will not be able to guess
# your users' passwords.  Also, we recommend against setting this to a round
# number such as 1000, etc.  It's much better to use a random number such as
# 2748, etc.

$password_multiplier = "9983";

# If set equal to "on", $notify_add will cause the program to notify the administrator
# by e-mail anytime that an ad is posted to the system

$notify_add = "off";

# If set equal to "on", $reply_user will cause the program to send a reply e-mail
# to the user who just posted an ad thanking them and reminding them of their ad
# number so that they can delete their ad in the future

$reply_user = "off";

# If set equal to "on", $notify_delete will cause the program to notify the
# administrator by e-mail anytime someone deletes an ad

$notify_delete = "off";

# If set equal to "on", $notify_delete_all will cause the program to notify the
# administrator by e-mail anytime someone uses the administrative function to delete
# all ads in a category.  Normally, you would receive this message after deleting the
# ads yourself, but this could be useful for informing you if someone obtains your
# administrative password and deletes all ads in a particular category without your
# knowledge or permission.

$notify_delete_all = "off";

# $classdir should point to the full internal server path (not a URL) to the new directory that you created
# for this program where the ads.counter file and the HTML pages for the ads will be
# stored.  For Unix servers, this new directory should have its permissions set to 777.
# For Windows NT users, this should point to the full server path to this directory,
# beginning with the drive letter and using forward slashes instead of backslashes,
# such as "d:/InetPub/wwwroot/classifieds".

$classdir = "/html/cgi-bin/classifieds";

# $htmldir should point to the full URL of the new directory that you created for
# this program where the ads.counter file and the HTML pages for the ads will be
# stored.  You should also store the e-Classifieds logo graphic here, as the license
# for this free product requires you to display this logo in order to protect our
# trademark rights, intellectual property rights, and other legal rights.
# Do *not* include the trailing slash ("/") at the end.

$htmldir = "http://thunder.prohosting.com/~dzine/classifieds";

# The @categories array defines the ad categories that the program will use.  For each
# category, you need to list it in the following format:
# "Long Name of Category|shortname", where the long name is the name that will be displayed
# at the top of pages in that category.  This can contain several words and spaces.  The
# short name can contain only one word with no spaces, as this is used internally by the
# program for keeping track of the categories.

@categories = ("Art|art", "Books|books", "Other Stuff|stuff");

# The following variable defines any special HTML code that you want to place in
# between the <HEAD> and </HEAD> tags on each page.  This could include meta tags
# or JavaScript, but in most cases, you'll probably just want to leave this set
# equal to "".  Be sure to put a backslash in front of any quotation marks that
# appear inside of your header code, and in front of the @ symbol anywhere that
# it appears.

$head_code = "";

# The following variable defines the background color of all pages.

$bgcolor = "#000000";

# The following variable defines the background graphic (if any) to be used on
# all pages.

$background = "";

# The following variable defines the default text color.

$text_color = "#ff0000";

# The following variable defines the color for hypertext links.

$link_color = "#0000ff";

# The following variable defines the color for visited links.

$vlink_color = "#ff0000";

# The following variable defines the color for active links.

$alink_color = "#ffff00";

# The following variable defines the HTML that will appear in the upper left hand
# corner of the pages.  Please begin your HTML code on the
# line after the <<END_OF_HTML; code, and end it on the line just above the
# END_OF_HTML code.  Also, please be sure to "comment
# out" any @ symbols in your HTML by placing the
# backslash symbol ("\") in front of them.
# You might set this to use a text link to your site's home page (the
# default setting below) or to display a small logo that would link to your
# site's main home page.  If you use a logo here, it should be no larger than about
# 110 pixels in width, or it may cause distortion of the display for some users
# viewing your site using resolutions of 640 x 480 or less.

$upper_left_corner = <<END_OF_HTML;
<a href="http://thunder.prohosting.com/~dzine/">DRAGONzine</a><p>
END_OF_HTML

# The following variable defines the HTML that will appear at
# the top of the main section of the pages.  Please begin your HTML code on the
# line after the <<END_OF_HTML; code, and end it on the line just above the
# END_OF_HTML code.  Also, please be sure to "comment
# out" any @ symbols in your HTML by placing the
# backslash symbol ("\") in front of them.
# This is where you would put your logo or banner that you wanted to display
# at the top of the pages if you wanted to replace the large e-Classifieds
# logo that is there by default.

$header = <<END_OF_HTML;
<img src="$htmldir/../images/logofire.gif" alt="DRAGONzine">
END_OF_HTML

# The following variable defines the HTML that will appear at
# the bottom of the main section of the pages.  Please begin your HTML code on the
# line after the <<END_OF_HTML; code, and end it on the line just above the
# END_OF_HTML code.  Also, please be sure to "comment
# out" any @ symbols in your HTML by placing the
# backslash symbol ("\") in front of them.
# You might want to put your copyright notice or other information here.

$footer = <<END_OF_HTML;
<p>
<font size=1>
<i>Content copyright &copy; 1999 <a
href="$siteurl">$sitename</a>. All rights reserved.<br>
Please send your questions, comments, or bug reports to the <a
href="mailto:$master_admin_email_address">Webmaster</a>.</i></font></center>
END_OF_HTML

# End of user-configurable variables.  You should not edit anything past this line.

#################################################################################

# The following subroutine (pagesetup) defines the HTML that will appear at
# the beginning of every page created by this program.  You should modify
# only the text in between the "print qq~" and the "~;" statements.
# Due to the complicated table structure used by the interface and the intertwined Perl
# code, we strongly recommend against editing this code unless you are in expert in both
# advanced HTML and Perl.
# Also, please note that the license for this free program expressly forbids removal
# of the e-Classifieds logo from the displays.  Thank you for your cooperation.

sub pagesetup
{
  local ($title) = @_;

print qq~
  <HTML>
  <HEAD>
  <TITLE>$title</TITLE>
$head_code
  </HEAD>
<BODY bgcolor="$bgcolor" background="$background" text="$text_color" link="$link_color" vlink="$vlink_color" alink="$alink_color">
<table width=620 border=0 cellpadding=0 cellspacing=0>
<tr>
<td valign=top>
<table align=left width=120 border=0 cellpadding=0 cellspacing=0>
<tr>
<td align=center>~;

if ($small_logo_url ne "") {
print qq~
<a href="$siteurl"><img src="$small_logo_url" border=0 alt="$sitename Home"></a><p>~;
}

else {
print qq~
<a href="$siteurl"><font size=4>$sitename Home</font></a><p>~;
}

print qq~
<table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#ddddff">
      <tr>
        <td align="center" bgcolor="#8080ff"><table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#00056C">
          <tr>
            <td align="left"><img src="$htmldir/top_left_corner.gif" alt="left" WIDTH="7" HEIGHT="7"></td>
            <td align="right"><img src="$htmldir/top_right_corner.gif" alt="right" WIDTH="7" HEIGHT="7"></td>
          </tr>
        </table>
        </td>
      </tr>

      <tr>
        <td align="center" bgcolor="#00056C"><font color="#FFFFFF" size="1" face="MS SANS SERIF"><b>Search Options</b></font></td>
      </tr>
      <tr>

        <td valign="middle" height="20" align=center>
<font size="1" face="MS SANS SERIF" color="941403"><p align="center"><a href="$script_url">Search Ads</a></font>
</td>
      </tr>
</form>

      <tr>
        <td align="center" bgcolor="#00056C"><font color="#FFFFFF" size="1" face="MS SANS SERIF"><b>Ad Options</b></font> </td>
      </tr>
      <tr>
        <td bgcolor="#ddeeee" valign="middle" height="20"><font size="1" face="MS SANS SERIF" color="941403"><p align="center"><a href="$script_url?place_ads">Place Ads</a></font></td>
      </tr>
      <tr>
        <td bgcolor="#ddeeee" valign="middle" height="20"><font size="1" face="MS SANS SERIF" color="941403"><p align="center"><a href="$script_url?delete_ads">Delete Ads</a></font></td>
      </tr>
	<tr>
        <td align="center" bgcolor="#00056C"><b><font color="#FFFFFF" size="1" face="MS SANS SERIF">Other Options</font></b> </td>
      </tr>
      <tr>
        <td valign="middle" height="20"><font size="1" face="MS SANS SERIF" color="941403"><p align="center"><a href="$script_url?admin">Admin</a></font></td>
      </tr>

      <tr>
        <td valign="middle" height="20"><font size="1" face="MS SANS SERIF" color="941403"><p align="center"><a href="$script_url">Classifieds Home</a></font></td>
      </tr>

      <tr>
        <td align="center" bgcolor="#00056C" height=5><font color="#00056C" size=1>&#151;</td>
      </tr>

      <tr>
        <td align="center" bgcolor="#ddeeee"><a href="http://www.e-classifieds.net/"><img src="$htmldir/eclass_free.gif" width=116 height=44 alt="Powered by e-Classifieds" border=0></a></td>
      </tr>


    </table>
    <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#00056C">
      <tr>
        <td align="left" valign="top"><img src="$htmldir/bot_left_corner.gif" alt="left" WIDTH="7" HEIGHT="7"></td>
        <td align="right" valign="top"><img src="$htmldir/bot_right_corner.gif" alt="right" WIDTH="7" HEIGHT="7"></td>
      </tr>
    </table>


</center>
<p>

</td></tr></table>
</td>
<td>
<table width=12 border=0><tr><td></td></tr></table>
</td>
<td valign=top>
<table width=480 border=0>
<tr>
<td align=center>
$header
</td></tr>
<tr>
<td><center>
<font face=arial size=2>~;
}

# The following subroutine (pageclose) defines the HTML that will appear
# at the end of every page created by this program.  You should modify
# only the text in between the "print qq~" and the "~;" statements.

sub pageclose
{
print qq~<center>
<p>
$footer
<br>
<font size=1>Powered by e-Classifieds.  Copyright &copy; 1995-1999 Hagen Software Inc. All rights reserved.</font></center>
</td></tr></table>
</td></tr></table></td></tr></table></body></html>~;
}

# This subroutine defines the HTML for the pages that store the ads for each category.
# You should modify only the text in between the "print qq~" and the "~;" statements.
# Due to the complicated table structure used by the interface and the intertwined Perl
# code, we strongly recommend against editing this code unless you are in expert in both
# advanced HTML and Perl.
# Also, please note that the license for this free program expressly forbids removal
# of the e-Classifieds logo from the displays.  Thank you for your cooperation.

sub print_default_html {
print HTMLFILE qq~
  <HTML>
  <HEAD>
  <TITLE>$sitename Classifieds - $long_category_name</TITLE>
$head_code
  </HEAD>
<BODY bgcolor="$bgcolor" background="$background" text="$text_color" link="$link_color" vlink="$vlink_color" alink="$alink_color">
<table width=620 border=0 cellpadding=0 cellspacing=0>
<tr>
<td valign=top>
<table align=left width=120 border=0 cellpadding=0 cellspacing=0>
<tr>
<td align=center>~;

if ($small_logo_url ne "") {
print HTMLFILE qq~
<a href="$siteurl"><img src="$small_logo_url" border=0 alt="$sitename Home"></a><p>~;
}

else {
print HTMLFILE qq~
<a href="$siteurl"><font size=4>$sitename Home</font></a><p>~;
}

print HTMLFILE qq~
<table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#ddddff">
      <tr>
        <td align="center" bgcolor="#8080ff"><table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#00056C">
          <tr>
            <td align="left"><img src="$htmldir/top_left_corner.gif" alt="left" WIDTH="7" HEIGHT="7"></td>
            <td align="right"><img src="$htmldir/top_right_corner.gif" alt="right" WIDTH="7" HEIGHT="7"></td>
          </tr>
        </table>
        </td>
      </tr>

      <tr>
        <td align="center" bgcolor="#00056C"><font color="#FFFFFF" size="1" face="MS SANS SERIF"><b>Search Options</b></font></td>
      </tr>
      <tr>

        <td valign="middle" height="20" align=center>
<font size="1" face="MS SANS SERIF" color="941403"><p align="center"><a href="$script_url">Search Ads</a></font>
</td>
      </tr>
</form>

      <tr>
        <td align="center" bgcolor="#00056C"><font color="#FFFFFF" size="1" face="MS SANS SERIF"><b>Ad Options</b></font> </td>
      </tr>
      <tr>
        <td bgcolor="#ddeeee" valign="middle" height="20"><font size="1" face="MS SANS SERIF" color="941403"><p align="center"><a href="$script_url?place_ads">Place Ads</a></font></td>
      </tr>
      <tr>
        <td bgcolor="#ddeeee" valign="middle" height="20"><font size="1" face="MS SANS SERIF" color="941403"><p align="center"><a href="$script_url?delete_ads">Delete Ads</a></font></td>
      </tr>
	<tr>
        <td align="center" bgcolor="#00056C"><b><font color="#FFFFFF" size="1" face="MS SANS SERIF">Other Options</font></b> </td>
      </tr>
      <tr>
        <td valign="middle" height="20"><font size="1" face="MS SANS SERIF" color="941403"><p align="center"><a href="$script_url?admin">Admin</a></font></td>
      </tr>

      <tr>
        <td valign="middle" height="20"><font size="1" face="MS SANS SERIF" color="941403"><p align="center"><a href="$script_url">Classifieds Home</a></font></td>
      </tr>

      <tr>
        <td align="center" bgcolor="#00056C" height=5><font color="#00056C" size=1>&#151;</td>
      </tr>

      <tr>
        <td align="center" bgcolor="#ddeeee"><a href="http://www.e-classifieds.net/"><img src="$htmldir/eclass_free.gif" width=116 height=44 alt="Powered by e-Classifieds" border=0></a></td>
      </tr>


    </table>
    <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#00056C">
      <tr>
        <td align="left" valign="top"><img src="$htmldir/bot_left_corner.gif" alt="left" WIDTH="7" HEIGHT="7"></td>
        <td align="right" valign="top"><img src="$htmldir/bot_right_corner.gif" alt="right" WIDTH="7" HEIGHT="7"></td>
      </tr>
    </table>


</center>
<p>

</td></tr></table>
</td>
<td>
<table width=12 border=0><tr><td></td></tr></table>
</td>
<td valign=top>
<table width=480 border=0>
<tr>
<td align=center>
$header
</td></tr>
<tr>

<td><center>
<font face=arial size=2>

<H2><font color="#0000ff">$sitename Classifieds - $long_category_name</font></H2>

<!--Do not edit past this line-->

<center>
<p>
$footer
<br>
<font size=1><i>Powered by e-Classifieds. Copyright &copy; 1995-1999 Hagen Software Inc. All rights reserved.</i></font></center><br>
</td></tr></table>
</td></tr></table></td></tr></table></body></html>~;
}

########################################################################

sub print_header {
print "Content-type: text/html\n\n";
}

#######################################################################
#               Read and Parse Form Data                              #
#######################################################################

   # Get the input
   read(STDIN, $buffer, $ENV{'CONTENT_LENGTH'});

   # Split the name-value pairs
   @pairs = split(/&/, $buffer);

   foreach $pair (@pairs) {
      ($name, $value) = split(/=/, $pair);

      # Un-Webify plus signs and %-encoding
      $value =~ tr/+/ /;
      $value =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
      $value =~ s/<!--(.|\n)*-->//g;

      if ($allow_html != 1) {
         $value =~ s/<([^>]|\n)*>//g;
      }
      else {
         unless ($name eq 'body') {
	    $value =~ s/<([^>]|\n)*>//g;
         }
      }

      $in{$name} = $value;
   }

$current_date = &get_date;

if (($in{'add_item_button'} ne "") || ($ENV{'QUERY_STRING'} =~ /place_ads/))
  {
  &print_header;
  &pagesetup("Post Classified Ad Form");
  &generic_form_header;
  &add_entry_form;
  &pageclose;
  exit;
  }

elsif ($in{'post_ad_button'} ne "") {
  &print_header;
	&post_ad;
	}

elsif (($in{'delete_item_button'} ne "") || ($ENV{'QUERY_STRING'} =~ /delete_ads/))
  {
  &print_header;
  &pagesetup("Delete Classified Ad Form");
  &generic_form_header;
  &delete_search_form;
  &pageclose;
  exit;
  } 

elsif ($in{'delete_button'} ne "") {
  &print_header;
	&delete;
	}

elsif (($in{'admin_button'} ne "") || ($ENV{'QUERY_STRING'} =~ /admin/))
  {
  &print_header;
  &pagesetup("Admin Logon");
  &generic_form_header;
  &delete_all_form;
  &pageclose;
  exit;
  } 


elsif ($in{'delete_all_button'} ne "") {
  &print_header;
	&delete_all;
	}

elsif ($in{'view_ads_button'} ne "") {
	&view_ads;
	}

else  {
  &print_header;
  &pagesetup;
  &display_frontpage;
  &pageclose;
	}

sub view_ads {
	if ($in{'category'} eq "") {
  &print_header;
	&category_error;
	}
	if (-e "$classdir/$in{'category'}.html") {
#	print "<meta http-equiv=\"refresh\" content=\"1; # url=$htmldir/$in{'category'}.html\">\n";
	print "Location: $htmldir/$in{'category'}.html\n\n";
	}
	else {
  &print_header;
	&no_ads_message;
	}
	exit;
	}

sub no_ads_message
  {
  &pagesetup("No Matches Found");
  print qq~<center><h2>No Matches Found</h2></center>
  <BLOCKQUOTE>
  We're sorry, but it appears that there currently are no ads in this category.  Please go back and try another category.
  </BLOCKQUOTE><p><center>
<form>
<input type=button value="<< Go Back " onClick="history.go(-1)"></form></center>~;
&pageclose;
  }

sub add_entry_form {
print qq~

<table border=0 cellpadding=4 cellspacing=4 width=470>
<tr>
<td bgcolor="#e8e8e8">
<center><font size=4>Contact Information</font></center><p>
Please provide the following contact information.  Required fields are denoted by *.<p>
<table><tr><td colspan=2>Your Name*<br><input type=text name=name size=20 maxlength=20 value="$fields[0]"></td>
</tr>
<tr><td colspan=2>Street Address<br><input type=text name=street size=40 maxlength=40 value="$fields[1]"></td></tr>
<tr><td>City<br><input type=text name=city size=20 maxlength=40 value="$fields[2]">
</td>
<td>State/Province<br><input type=text name=state size=20 maxlength=40 value="$fields[3]">
</td></tr>
<tr><td>Zip/Postal Code<br><input type=text name=zip size=20 maxlength=20 value="$fields[4]"></td>
<td>Country<br>
<input type=text name=country size=20 maxlength=20 value="$fields[5]">
</td></tr>
<tr>
<td>Telephone Number<br>
<input type=text name=phone size=20 maxlength=20 value="$fields[5]">
</td>
<td>E-mail Address*<br><input type=text name=email size=20 maxlength=40 value="$fields[6]"></td>
</tr>
<tr><td colspan=2>URL of your home page<br><input type=text name=url size=50 maxlength=50 value="$fields[7]"></td></tr>
<tr><td colspan=2>
<INPUT TYPE="checkbox" NAME="display_address"> Check here if you want to display your postal address and telephone number in your ad</td>
</tr>
</table>
</td></tr></table>
<p>

<table border=0 cellpadding=4 cellspacing=4 width=470>
<tr>
<td bgcolor="#ccccff">
<center><font size=4>Your Ad</font></center><p>
Please fill in the details of your ad below.  Required fields are denoted by *.<p>
<table width=100%><tr><td>

<TABLE width=100% BORDER="0">
  <TR>
  <TD COLSPAN = "3"><P><CENTER><B>Categories</B>*</CENTER>

Please check the category that you want to place your ad in</TD>
  </TR>~;

foreach $category (@categories) {
    	@fields = split (/\|/, $category);
print qq~
<tr>
<td><INPUT TYPE="radio" NAME="category" VALUE="$category"> $fields[0]</td></tr>~;
  }

print qq~
</table>
<p>
</td></tr>
<tr>
<td>If none of the categories above was applicable for your ad, what categories would you like to see us add here?<br><input type=text name=category_wanted size=50 maxlength=50 value="$fields[10]"></td></tr>

<tr>
<td>Caption*<br><input type=text name=caption size=50 maxlength=50 value="$fields[10]"></td></tr>
<tr>
<td>Text of your ad (HTML is not allowed.  Hit the Return key once for a line break, or twice for a new paragraph.)*<br>
<TEXTAREA NAME="text" ROWS=5 COLS=50 wrap=physical>$fields[11]</TEXTAREA><p>
</td></tr>
<p>
</table>
</td></tr></table>
<p>
<input type=submit name="post_ad_button" value="Post My Ad">
<input type=reset value="Clear All"><p>
</form>~;
}

sub post_ad {

$counter = 0;

if (($in{'name'} eq "") || ($in{'email'} eq "") || ($in{'category'} eq "") || ($in{'caption'} eq "") || ($in{'text'} eq "")) {
	&required_error;
}

@fields = split (/\|/, $in{'category'});
$long_category_name = $fields[0];
$short_category_name = $fields[1];
$in{'text'} =~ s/\n/<br>/g;

# Lock the file for security so the file is not damaged if more than one user tries to access it at the same time.
		
 $quit = 0;
 while ($quit != 1) {
	if (-e "$classdir/$short_category_name.lock") {
		# The file exists, time to take a nap
		sleep(1);
	}
	else {
	
	# Create the lock file, thereby locking the Classified Ad file
	open (LOCK,">$classdir/$short_category_name.lock");
	close LOCK;
	}
	
	# Open the data file to read the number of the last post
	open (ADFILE, "$classdir/ads.counter");
	$old_counter = <ADFILE>;
	# chop $old_counter;

	# Update the Ad Number by one
	$old_counter++;
	$new_counter = $old_counter;
	
	# Rewrite the data file
	open (ADFILE, ">$classdir/ads.counter");
	print ADFILE "$new_counter";
	close(ADFILE);

$password = $new_counter * $password_multiplier;

# If it doesn't already exist, create the HTML file where the ads will be
# stored for this category

	unless (-e "$classdir/$short_category_name.html") {
	open (HTMLFILE,"+>$classdir/$short_category_name.html");
	&print_default_html;
	close (HTMLFILE);	
	}

	# Append the user's ad and description to the ad file

	open(ADFILE,"$classdir/$short_category_name.html") || die $!;
		@main = <ADFILE>;
		close(ADFILE);
	open(ADFILE,">$classdir/$short_category_name.html") || die $!;
	      foreach $main_line (@main) {
	         if ($main_line =~ /<!--Do not edit past this line-->/) {

	            	print ADFILE "<!--Do not edit past this line-->\n";
			print ADFILE "<!-- $new_counter $in{'name'} $in{'email'} $current_date -->\n";

  print ADFILE qq~<TABLE BORDER="1" CELLPADDING=2 cellspacing=2 width="470">
  <TR BGCOLOR="#000F99" background="$htmldir/blueblack.gif"><th colspan=2><FONT FACE="Arial" SIZE="3" COLOR="#ffffff">$in{'caption'}</FONT></th></tr><TR>
<TD>
<TABLE BORDER=0 cellpadding=2 CELLSPACING=1 WIDTH=460>
<TR>
	<TD WIDTH=60 VALIGN="TOP"><FONT FACE="Arial" SIZE="2" COLOR="#008000">Ad Number:</FONT></TD>
	<TD WIDTH=160 VALIGN="TOP"><FONT FACE="Arial" SIZE="2" COLOR="#CC0000"><B>$new_counter</B></FONT></TD>
	<TD WIDTH=60 VALIGN="TOP"><FONT FACE="Arial" SIZE="2" COLOR="#008000">Date Posted:</FONT></TD>
	<TD WIDTH=160 VALIGN="TOP"><FONT FACE="Arial" SIZE="2" COLOR="#CC0000"><B>$current_date</B></FONT></TD>

</TD>
</TR>
<TR>
	<TD VALIGN="TOP" WIDTH=60 rowspan=2><FONT FACE="Arial" SIZE="2" COLOR="#008000">Contact:</FONT></TD>
	<TD WIDTH=160 VALIGN="TOP" rowspan=2><FONT FACE="Arial" SIZE="2">$in{'name'}<br>~;
if ($in{'display_address'} eq "on") {
  print ADFILE qq~
$in{'street'}<br>
$in{'city'}, $in{'state'} $in{'zip'}<br>
$in{'country'}~;
  }

print ADFILE qq~
</font></td>
	<TD WIDTH=60 VALIGN="TOP"><FONT FACE="Arial" COLOR="#008000" SIZE="2">Telephone:</FONT></TD>
	<TD WIDTH=160 VALIGN="TOP"><FONT FACE="Arial" SIZE="2">~;
if ($in{'display_address'} eq "on") {
  print ADFILE qq~
$in{'phone'}~;
  }

print ADFILE qq~
</FONT></TD>
</tr>
<TR>
	<TD WIDTH=60 VALIGN="TOP"><FONT FACE="Arial" COLOR="#008000" SIZE="2">E-mail:</FONT></TD>
	<TD WIDTH=160 VALIGN="TOP"><FONT FACE="Arial" SIZE="2"><a href="mailto:$in{'email'}">$in{'email'}</a></FONT></TD>
</TR>
<TR>
	<TD WIDTH=60><FONT FACE="Arial" COLOR="#008000" SIZE="2">Web Site:</FONT></TD>
	<TD COLSPAN=3><FONT FACE="Arial" SIZE="2"><a href="$in{'url'}">$in{'url'}</a><br></FONT></TD>
</TR>
</table>
<br>
	<TABLE CELLSPACING=0 CELLPADDING=0 BORDER=0 WIDTH=460><TR>
	<TD><FONT FACE="Arial" SIZE="2" COLOR="#000F99"><B>Description</B></FONT><BR>
	<FONT FACE="Arial" SIZE="2">$in{'text'}</FONT></td>
	</tr></TABLE></TD>
	</TR>	
</table><p>\n
~;
			print ADFILE "<!-- end $new_counter -->\n";
	         }
	         else {
	            print ADFILE "$main_line";
	         }
	      }

	# unlock the lock file
	unlink("$classdir/$short_category_name.lock");

if (($reply_user eq "on") && ($sendmail ne "")) {

      open( MAIL, "|$sendmail -t " )
         || die "can't open sendmail: $email: $!\n";
      print MAIL "To: $in{'email'}\n";
      print MAIL "From: $master_admin_email_address\n";
      print MAIL "Subject: $sitename Classified Ads\n";
      print MAIL "Reply-to: $master_admin_email_address\n\n";

      print MAIL "Thank you for submitting your classified ad in the $long_category_name section of the $sitename Classified Ads.  Your ad has been posted and appears as follows:\n\n";
	print MAIL "Ad Number: $new_counter\n";
	print MAIL "Subject: $in{'caption'}\n";
	print MAIL "Posted on: $current_date\n";
	print MAIL "Reply to: $in{'name'} at $in{'email'}\n";
	print MAIL "Text of ad: $in{'text'}\n";
	print MAIL "URL (if any): $in{'url'}\n\n";
	print MAIL "You can come back at any time and delete your posting as necessary.  We hope you enjoy the new $sitename Classified Ads and will come back often.

Your ad has been assigned a special password for editing purposes.  Please make a note of your ad number and your password now for future reference.  You will need them if you ever want to delete your classified ad.  The ad number and password for this ad are as follows:

ad number: $new_counter
password: $password

If you did not post a classified ad on the $sitename Classifieds and believe that you have received this by mistake, please accept our apologies and notify us immediately.  As a security measure, you are receiving this message because someone used your e-mail address when posting a classified ad on the $sitename Classified Ads.\n\n";
	print MAIL "Sincerely,\n\n";
	print MAIL "$admin_name, Webmaster\n";
	print MAIL "$sitename\n";
	print MAIL "$siteurl\n";
	print MAIL "$slogan\n";
	close(MAIL);
  }

if (($master_admin_email_address ne "") && ($notify_add eq "on") && ($sendmail ne ""))
{
      open( MAIL, "|$sendmail -t " )
         || die "can't open sendmail notify: $master_admin_email_address: $!\n";
      print MAIL "To: $master_admin_email_address\n";
      print MAIL "From: $master_admin_email_address\n";
      print MAIL "Subject: New Classified Ad\n";
      print MAIL "The following classified ad was added to the $long_category_name section of the $sitename Classified Ads by $in{'name'}:\n\n";
	print MAIL "Ad Number: $new_counter\n";
	print MAIL "Password: $password\n";
	print MAIL "Subject: $in{'caption'}\n";
	print MAIL "Posted on: $current_date\n";
	print MAIL "Reply to: $in{'name'} at $in{'email'}\n";
	print MAIL "Text of ad: $in{'text'}\n";
	print MAIL "URL (if any): $in{'url'}\n\n";
	print MAIL "They recommended the following new categories (this will be blank if they made no recommendations): $in{'category_wanted'}";
	close(MAIL);
}

	&successful_addition_message;
	$quit = 1;
}

} # End of sub post_ad

sub successful_addition_message
  {

  &pagesetup("Success: Your Ad has been posted to the Classifieds");
  print qq~
  <h3>Your ad has been successfully posted!</h3></center>
Your ad has been assigned a special password for editing purposes.  Please make a note of your ad number and your password, as you will need them if you ever want to delete this ad.  Your ad number and your password are the following:
<blockquote>
ad number: <b>$new_counter</b><br>
password: <b>$password</b>
</blockquote>
  <P>~;
  &pageclose;
  }

sub required_error
  {
&pagesetup("Missing Field");

  print qq~
<center><h1>Missing Field</h1></center>\n
We're sorry, but you did not select a value for a required field.  All fields must be filled in.  Please go BACK and make sure that you have selected a value for all of the required fields.  Thank you.
<center>
<form>
<input type=button value="<< Go Back " onClick="history.go(-1)"></form></center>
~;
&pageclose;
      exit;
  }  

sub delete_search_form {

  print qq~
<h2>Delete Your Ad</h2><p></center>
To delete your classified ad, please fill out all fields in the form below and click on the "Delete This Ad" button.  To delete your ad, you must select the category that this ad appears in and enter your name and e-mail address exactly as they appear in your ad.  You also must enter the ad number and the password that was sent to you after you posted this ad.  If the form is not filled out completely and accurately, your ad will not be deleted.<P>

<table border=0 cellpadding=4 cellspacing=4 width=470>
<tr>
<td bgcolor="#e8e8e8">
<center><font size=4>Ad Information</font></center><p>
<table><tr><td>Please select the category where your ad is located:<br>
<SELECT NAME = "category">~;
foreach $category (@categories) {
    	@fields = split (/\|/, $category);
print qq~<OPTION value="$fields[1]">$fields[0]~;
   }
print qq~
</select>
</td>
</tr>
<tr><td>Your Name<br><input type=text name=name size=40 maxlength=40></td></tr>
<tr><td>E-mail Address<br><input type=text name=email size=40 maxlength=40></td>
</tr>
<tr><td>Ad Number<br><input type=text name=addno size=10 maxlength=50></td></tr>
<tr><td>Password<br><input type=password name=password size=20 maxlength=50></td></tr>
<tr><td align=center><input type=submit name="delete_button" value="Delete This Ad">
<input type=reset value="Clear All"></td></tr>
</table>
</td></tr></table>
<p>
</form>
<HR>~;
}

sub delete {
if (($in{'name'} eq "") || ($in{'email'} eq "") || ($in{'addno'} eq "") || ($in{'password'} eq "")  || ($in{'category'} eq "")) {
	&required_error;
}

	unless (-e "$classdir/$in{'category'}.html") {
	&no_ads_message;
	exit;
	}

# Lock the file for security so the file is not damaged if more than one user tries to access it at the same time.
		
$quit = 0;
while ($quit != 1) {
	if (-e "$classdir/$in{'category'}.lock") {
		# The file exists, time to take a nap
		sleep(1);
	}
	else {
	
	# Create the lock file, thereby locking the Classified Ad file
	open (LOCK,">$classdir/$in{'category'}.lock");
	close LOCK;
	}

	# Delete the user's ad and description from the ad file

	open(ADFILE,"$classdir/$in{'category'}.html") || die $!;
		@main = <ADFILE>;
		close(ADFILE);

	$ad_to_delete = "0";
	$deleted_ad_found = "0";
	open(ADFILE,">$classdir/$in{'category'}.html") || die $!;
	      foreach $main_line (@main) {
	         if ($main_line =~ /<!-- $in{'addno'} $in{'name'} $in{'email'}/) {

		if (($in{'password'} eq "$admin_password") || ($in{'password'} == ($in{'addno'} * $password_multiplier))) {
			$ad_to_delete = "1";
			$deleted_ad_found = "1";
				}
		else {
			$deleted_ad_found = "1";
			$incorrect_password = "1";
		}

		   }
		   if ($ad_to_delete eq "1"){
		$deleted_ad .= "$main_line";
			if ($main_line =~ /<!-- end $in{'addno'} -->/) {
				$ad_to_delete = "0";
			}
	         }
	         else {
	            print ADFILE "$main_line";
	         }
	      }
		close(ADFILE);

	# unlock the lock file
	unlink("$classdir/$in{'category'}.lock");

	if ($incorrect_password eq "1"){
	&password_error;
	}
	elsif ($deleted_ad_found eq "0"){
	&unsuccessful_modification_message;
	}
	else {
	&successful_deletion_message;

if (($master_admin_email_address ne "") && ($notify_delete eq "on") && ($sendmail ne ""))
{
      open( MAIL, "|$sendmail -t " )
         || die "can't open sendmail notify: $master_admin_email_address: $!\n";
      print MAIL "To: $master_admin_email_address\n";
      print MAIL "From: $master_admin_email_address\n";
      print MAIL "Subject: Classified Ad Deleted\n";
      print MAIL "Reply-to: $in{'email'}\n\n";
      print MAIL "Ad number $in{'addno'} was deleted from the $in{'category'} section of the $sitename Classified Ads by $in{'name'}.\n\n";
	close(MAIL);
}
	}
	$quit = 1;
} # End of while ($quit != 1)
exit;
}

sub password_error
  {
&pagesetup("Error: Incorrect Password");

  print qq~
<center><h1>Error: Incorrect Password</h1></center>\n
We're sorry, but you did not enter the correct password.  Please go BACK and make sure that you have entered the correct password.  Thank you.<p>
<center>
<form>
<input type=button value="<< Go Back " onClick="history.go(-1)"></form></center>
~;
&pageclose;
  }  

sub unsuccessful_modification_message
  {
  &pagesetup("Error: Ad Not Found");
  print qq~<center><h3>Error: Ad Not Found</h3></center>
  The ad you selected was not found.  Please make sure that you have entered your name, e-mail address, and ad number correctly on the deletion form.  Thank you.~;
  &pageclose;
  }

sub successful_deletion_message
  {
  &pagesetup("Success: Your ad has been successfully deleted");
  print qq~
  <center><h3>The Ad that you selected has been Deleted from the Classifieds!</h3>
  The following ad was deleted from the classifieds:<p>
$deleted_ad
  <P>~;
  &pageclose;
  }

sub delete_all_form {

  print qq~
<h2>Delete All Ads in a Category</h2><p></center>
If you are the administrator, you can delete all ads in a particular category using the form below.  You will need your administrative password to do so.  Please select the category that you wish to clear and enter your administrative password in the form below and click on the Delete All Ads button.<P>

<table border=0 cellpadding=4 cellspacing=4 width=470>
<tr>
<td bgcolor="#e8e8e8">
<center><font size=4>Ad Information</font></center><p>
<table><tr><td>Please select the category that you wish to clear:<br>
<SELECT NAME = "category">~;
foreach $category (@categories) {
    	@fields = split (/\|/, $category);
print qq~<OPTION value="$fields[1]">$fields[0]~;
   }
print qq~
</select>
</td>
</tr>
<tr><td>Administrative Password<br><input type=text name=password size=40 maxlength=40></td></tr>
<tr><td align=center><input type=submit name="delete_all_button" value="Delete All Ads">
</td></tr>
</table>
</td></tr></table>
<p>
</form>
<HR>~;
}

sub delete_all {
if ($in{'category'} eq "") {
	&required_error;
}

unless ($in{'password'} eq "$admin_password") {
	&admin_password_error;
}

	unless (-e "$classdir/$in{'category'}.html") {
	&no_ads_message;
	exit;
	}

	unlink("$classdir/$in{'category'}.html");

  &pagesetup("Success: All Ads Successfully Deleted");
  print qq~
  <h3>Ads Deleted</h3></center>
  All ads in the $in{'category'} category have been deleted.
  <P>~;
  &pageclose;

if (($master_admin_email_address ne "") && ($notify_delete_all eq "on") && ($sendmail ne ""))
{
      open( MAIL, "|$sendmail -t " )
         || die "can't open sendmail notify: $master_admin_email_address: $!\n";
      print MAIL "To: $master_admin_email_address\n";
      print MAIL "From: $master_admin_email_address\n";
      print MAIL "Subject: Classified Ads Deleted\n";
      print MAIL "This is simply a notification that all ads in the $in{'category'} category of the $sitename Classified Ads have been deleted.  If you did not perform this deletion, then someone has obtained your administrative password and deleted ads from your site.\n\n";
	close(MAIL);
	}

exit;

}

sub display_frontpage
  {

print qq~
</center>
Welcome to the <font color="#ff0000">$sitename</font> Classified Ads!  To view the ads, choose a category below and click on the View Ads button.  You may also choose one of the options along the left hand side of this page.<center>
<p>
<table border=0 width=100%>
<tr>
<td colspan=2 align=center><font size=4 face="arial">Classified Ad Categories</font>~;
&generic_form_header;
print qq~
</td>
</tr>~;
foreach $category (@categories) {
    	@fields = split (/\|/, $category);

print qq~
<tr><td><font face="arial"><INPUT TYPE="radio" NAME="category" VALUE="$fields[1]"> $fields[0]</font></td></tr>~;
  }


print qq~
<tr>
<td colspan=2 align=center>
<br><INPUT TYPE="image"  BORDER=0 align=top SRC="$htmldir/view.gif">
  <INPUT TYPE = "hidden" NAME = "view_ads_button"   
         VALUE = "Search for Matching Ads">
</td>
</tr>
</table>

<P>

</form>

  <P>~;
  }

sub generic_form_header
  {
  print qq~
  <FORM METHOD = "post" ACTION = "$script_url">~;
  }

sub get_date
  {

  local ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst,$date);   
  local (@days, @months);

  @days = ('Sunday','Monday','Tuesday','Wednesday','Thursday',
           'Friday','Saturday');
  @months = ('January','February','March','April','May','June','July', 
             'August','September','October','November','December');

$time = time;
    
  ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime($time);
  
  $year = (1900 + $year);

  if ($mon < 10)
    {
    $mon = "0$mon";
    }
  if ($mday < 10)
    {
    $mday = "0$mday";
    }
  $mon++;
$date = "$mon/$mday/$year";
  return $date;
  }

sub category_error
  {
&pagesetup("Error: No Category Chosen");

  print qq~
<center><h1>Error: No Category Chosen</h1></center>\n
We're sorry, but you did not select a category.  Please go BACK and make sure that you have selected a category.  Thank you.<p>
<center>
<form>
<input type=button value="<< Go Back " onClick="history.go(-1)"></form></center>
~;
&pageclose;
      exit;
  }  

sub admin_password_error
  {
&pagesetup("Error: Incorrect Password");

  print qq~
<center><h1>Error: Incorrect Password</h1></center>\n
We're sorry, but you did not enter the correct administrative password.  If you are the admin, please go BACK and make sure that you have entered the correct administrative password.  Thank you.<p>
<center>
<form>
<input type=button value="<< Go Back " onClick="history.go(-1)"></form></center>
~;
&pageclose;
      exit;
  }  
