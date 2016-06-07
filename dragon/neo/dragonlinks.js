linkTable = new ltDataArray(1)

//linkTable.DefDragon(
// linkTable.DefLink("neotest","neotest magazine cover.html","NeoTest"),  // DefLink Returns idnum
//	0, // Volis
//	"", // Author
//	"", // Genre
//	"", // Family
//	"realm") // Department

// Department: "top"

linkTable.DefDragon(linkTable.DefLink("jan00",lBuildPHPLink("jan00",1),"Frontpage"),109,"","","","top")
linkTable.DefDragon(linkTable.DefLink("feb00",lBuildPHPLink("feb00",1),"Frontpage"),110,"","","","top")
//linkTable.DefDragon(linkTable.DefLink("advertise","","Advertise!"),0,"","","","top")
//linkTable.DefDragon(linkTable.DefLink("changes","","Changes"),0,"","","","top")
//linkTable.DefDragon(linkTable.DefLink("contribute","","Contribute"),0,"","","","top")
//linkTable.DefDragon(linkTable.DefLink("copyright","","Copyright"),0,"","","","top")
linkTable.DefDragon(linkTable.DefLink("sitemap",lBuildPHPLink("sitemap"),"Sitemap"),0,"","","","top")
//linkTable.DefDragon(linkTable.DefLink("incharge","","Who's In Charge?"),0,"","","","top")

// Department: "eyes"
//linkTable.DefDragon(linkTable.DefLink("newsletter","","Newsletter"),0,"","","","eyes")
//linkTable.DefDragon(linkTable.DefLink("community","http://www.deja.com/~dragon/","Community"),0,"","","","eyes")

// Department: "portal"
//linkTable.DefDragon(linkTable.DefLink("comix","","Comix"),0,"","","","portal")
linkTable.DefDragon(linkTable.DefLink("news",linkTable["feb00"].addr,"News"),0,"","","","portal")

// Department: "prints"
//linkTable.DefDragon(linkTable.DefLink("prints","","Prints"),0,"","","","prints")

// Department: "books"
//linkTable.DefDragon(linkTable.DefLink("books","","Books"),0,"","","","books")
//linkTable.DefDragon(linkTable.DefLink("bookstore","","Bookstore"),0,"","","","books")
//linkTable.DefDragon(linkTable.DefLink("fatbrain","","FatBrain"),0,"","","","books")
//linkTable.DefDragon(linkTable.DefLink("amazon","","Amazon"),0,"","","","books")

// Author: "mb" --- WorldMaker Online
linkTable.DefDragon(linkTable.DefLink("mb",lBuildPHPLink("mb"),"Bio"),0,"mb","","","wmo")
linkTable.DefDragon(linkTable.DefLink("whynotnetscape",lBuildPHPLink("whynotnetscape"),"Why Not Netscape?"),0,"mb","Ed","","wmo")

// --Stories--

// Volis 109
linkTable.DefDragon(linkTable.DefLink("jan0001",lBuildPHPLink("jan0001"),"NEOTINTWURP"),109,"mb","SF","az","realm")
linkTable.DefDragon(linkTable.DefLink("jan0002",lBuildPHPLink("jan0002"),"Werewolves"),109,"mb","SF","pc","realm")
linkTable.DefDragon(linkTable.DefLink("jan0003",lBuildPHPLink("jan0003"),"The Sun Fox [p.4]"),109,"oc","F","sf","realm")

// Volis 110
linkTable.DefDragon(linkTable.DefLink("feb0001",lBuildPHPLink("feb0001"),"Doolittlism"),110,"mb","SF","","realm")