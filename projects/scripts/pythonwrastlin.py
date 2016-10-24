#!/usr/bin/python
# -*- coding: utf-8 -*-
__version__ = "0.1.0"
__author__ = "Angus Alves"
__credits__ = "Props to my peeps"
__copyright__ = "(C) 2016-2016 Angus Alves. MIT"

import sys,os,shutil,date

class PythonWrastler:
    def __init__(self,packagename=None,author=None,credits=None,created=None,crholder=None,license=None):
        
        self.packagename = packagename
        self.author = author
        self.credits = credits
        self.created = created
        self.crholder = crholder
        self.license = license
        self.year = date.strftime("%Y")
        
    def getParams(self):
        self.packagename = raw_input("[?] Enter a name for this package")
        self.author = raw_input("[?] Enter the name of the author")
        self.credits = raw_input("[?] Enter the credits")
        self.created = raw_input("[?] Enter the year created(yyyy)")
        self.crholder = raw_input("[?] Enter the name of copy right holder")
        self.license = raw_input("[?] Enter the type of license")
        
    def setupProject(self,getparams):
        if getparams==True:
            self.getParams()
        else:
            if type(self.packagename) is not str:
                return "[-] Missing package name"
            elif type(self.author) is not str:
                return "[-] Missing author"
            elif type(self.credits) is not str:
                return "[-] Missing credits"
            elif type(self.created) is not str:
                return "[-] Missing year created"
            elif type(self.crholder) is not str:
                return "[-] Missing name of copy right holder"
            elif type(self.license) is not str:
                return "[-] Missing type of license"
        shutil.copyfile("../templates/pythoned.py","./"+self.packagename+".py")
        pyf = open("./"+self.packagename+".py","r+")
        pyfcontents = pyf.read()
        pyfcontents.replace("{!packagename}", self.packagename)
        pyfcontents.replace("{!author}", self.author)
        pyfcontents.replace("{!credits}", self.credits)
        pyfcontents.replace("{!created}", self.created)
        pyfcontents.replace("{!crholder}", self.crholder)
        pyfcontents.replace("{!license}", self.license)
        pyfcontents.replace("{!year}", self.year)

def main():
    if len(sys.argv) == 7:
        pw = PythonWrastler(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6])
        pw.setupProject(False)
    else:
        pw = PythonWrastler()
        pw.setupProject(True)

if __name__ == "__main__":
    main()