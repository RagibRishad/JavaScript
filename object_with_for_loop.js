
var traits = ['height', 'skin_tone', 'hairColor'];

var rahim = {
    height: 150,
    skin_tone: "Fair",
    hairColor: "Black"
}

// In order to use for loop, console.log(object_name[variable_name using in for loop[i]);

for(var i=0; i<traits.length; i++) {
    console.log(rahim[traits[i]])
}