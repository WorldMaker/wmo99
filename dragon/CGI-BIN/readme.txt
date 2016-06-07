Readme for e-Classifieds--Free Edition

This file contains important instructions for the e-Classifieds Free Edition.

Free Edition (Version 2.1--February 15, 1999)
__________________________________________________________________________________

Thank you for downloading the e-Classifieds Free Edition.  We believe that e-Classifieds is the most powerful and versatile suite of classified ads software for web sites available, and many others agree.  Our customers now include several NBC television stations, the Baltimore Ravens of the National Football League, a number of newspapers, and the leading computer magazine in Europe, among others.  We hope that you will enjoy the e-Classifieds Free Edition.  We also hope that if your needs ever outgrow the capabilities of the Free Edition, you will consider purchasing one of our commercial versions, which offer many more features than the Free Edition, including more robust security and data integrity, as well as many powerful features not available anywhere else.  You can find out more about our commercial offerings at the e-Classifieds web site at "http://www.e-classifieds.net".  You can also receive news on free upgrades to the Free Edition, new product offerings, and useful tips for your classifieds section by signing up for our newsletter at the e-Classifieds web site.

By following the instructions below, you should enjoy this low-maintenance, yet feature-packed program for a long time.  You may want to print this file for future reference.  If you haven't already done so, we also ask that you carefully read the license for this product, which is contained in the license.txt file.  Specifically, please note that in order to protect our intellectual property rights, trademark rights, and other legal rights, the license specifically forbids removal of the e-Classifieds logo from the product or from the pages displayed by this program.  The logo is only 2k in size and also is quite small and unobtrusive, so it should not harm or interfere with the loading of the pages in any way.  Thank you for your cooperation.

Installing the Program
--------------------------

Please consult the detailed instructions in the install.txt file in order to install the program on your server.  Once you have successfully installed the program, you may want to consult the sections below for modifying and refining your classifieds section.

Setting Yourself up as the Admin
--------------------------------

When you first installed the script, you should have set the $admin_password variable in the CLASSIFIEDS.CGI file to the special administrative password that you will use to control various aspects of the program.  If not, you should do so now.  As the admin, you will have the ability to delete any ad posted by any user at any time from the web interface simply by choosing the "Delete Ads" link and then entering the ad information, ad number, and your administrative password.  You can also delete all ads in a particular category by clicking on the "Admin" link contained in the table along the left side of each page.  If you would prefer not to have this link visible to your viewers, you can remove it from the table by editing the HTML contained in the "sub pagesetup" section of the CLASSIFIEDS.CGI file.  If you do so, you will then need to go to the following special URL to access the Admin functions:

http://www.yourdomain.com/cgi-bin/classifieds/classifieds.cgi?admin

Of course, you would adjust the URL above to point to the actual location of the classifieds.cgi file on your server. 

Modifying the HTML
------------------

To modify the HTML that defines the appearance of all pages within the program, all you have to do is to modify certain variables contained in the CLASSIFIEDS.CGI file.  You can also edit the HTML that appears at the top and the bottom of all pages by editing the $header and $footer variables.  If you do so, please be sure to "comment out" any quotation marks or @ symbols that you use in your HTML by placing the backslash symbol (the \ symbol) in front of them.  Failure to do so will cause a syntax error that will cause the program not to run.

If you are feeling really adventurous, you can also modify the HTML for many of the forms that constitute the "guts" of the program by modifying the various subroutines contained farther down in the CLASSIFIEDS.CGI file.  You can also edit the text of the various e-mail messages that are sent out by the program.  Please be advised, however, that due to the extremely high likelihood of creating syntax errors and breaking the program, we strongly advise against editing anything other than the initial variables in the CLASSIFIEDS.CGI file.  You should not even attempt to edit the other subroutines unless you are an expert in Perl and CGI programming.  Moreover, since these subroutines are not designed to be modified by end users, and also since this product has been provided to you for free, we will provide no support whatsoever for problems that you may encounter as a result of editing these routines.  If you edit these routines and then run into problems, we will charge you for any technical support in trying to fix these problems, and even then, we may not be able to help you.  In other words, please proceed with extreme caution!

Windows NT e-mailing
--------------------

This program does not include support for e-mailing from a Windows NT server (our commercial versions do include this).  It does include support for e-mail using the Unix sendmail program.

Program Maintenance
-------------------

Unlike our commercial versions, this program does not have the ability to automatically purge old ads or to automatically send out e-mail notices to users whose ads are about to expire.  Therefore, you will have to manually purge ads or entire categories from time to time if the HTML pages containing the ads become too large and unwieldy.

Data Reliability and Security (Deleting Ads, Year 2000 issues)
---------------------------------------------------------------

In comparison to our commercial versions, the security and data integrity mechanisms of the Free Edition are quite crude.  For example, it contains a very simple mechanism for creating the passwords that are assigned to each ad.  Clever users may be able to figure out this mechanism.  If they do so, they will be able to delete ads posted by other users.  Therefore, please be aware that this program contains very weak security (our commercial versions contain much stronger security mechanisms).  Moreover, as is stated in the license that accompanies this program, we specifically do *not* warrant that this program is "Year 2000 compliant".

In other words, please do not store any mission-critical data using the Free Edition.

Scalability
-----------

The e-Classifieds Free Edition does not use the same storage format for the ads that our commercial versions use.  The commercial versions store the ads in a database format.  The Free Edition writes each ad to the HTML page for the category that the ad was placed in.  As a result, it is not nearly as scalable as our commercial versions.  Once a particular category has a number of ads, such as 30-50 or more, the HTML page for that category will start to take quite a while to load.  You may want to delete some or all of the ads from time to time in order to reduce the page loading times.  If you need greater scalability, please consider purchasing one of our commercial versions, as they offer the ability to store thousands of ads at a time.

No Technical Support
--------------------

Since the e-Classifieds Free Edition is provided to you at no charge, we provide absolutely no technical support whatsoever for the Free Edition.  If technical support is important to you, we ask that you consider purchasing one of our commercial versions, for which we do provide technical support.  We will even install one of the commercial versions on your web server for a modest fee.  Any attempts to contact us requesting technical support for the Free Edition will be ignored.  You may submit bug reports for the Free Edition to bugs@e-classifieds.net.

Enjoy your new classified ads program!