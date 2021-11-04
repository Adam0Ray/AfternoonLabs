const encode = (string) =>{

    let solution = ""
    for(let i = 0 ; i < string.length; i++) {
        if (string.charAt(i) === "q"){
            solution +="e"
        } else if (string.charAt(i) === "w"){
            solution +="r"
        } else if (string.charAt(i) === "e"){
            solution +="t"
        } else if (string.charAt(i) === "r"){
            solution +="y"
        } else if (string.charAt(i) === "t"){
            solution +="u"
        } else if (string.charAt(i) === "y"){
            solution +="i"
        } else if (string.charAt(i) === "u"){
            solution +="o"
        } else if (string.charAt(i) === "i"){
            solution +="p"
        } else if (string.charAt(i) === "o"){
            solution +="q"
        } else if (string.charAt(i) === "p"){
            solution +="w"
        } else if (string.charAt(i) === "a"){
            solution +="d"
        } else if (string.charAt(i) === "s"){
            solution +="f"
        } else if (string.charAt(i) === "d"){
            solution +="g"
        } else if (string.charAt(i) === "f"){
            solution +="h"
        } else if (string.charAt(i) === "g"){
            solution +="j"
        } else if (string.charAt(i) === "h"){
            solution +="k"
        } else if (string.charAt(i) === "j"){
            solution +="l"
        } else if (string.charAt(i) === "k"){
            solution +="a"
        } else if (string.charAt(i) === "l"){
            solution +="s"
        } else if (string.charAt(i) === "z"){
            solution +="c"
        } else if (string.charAt(i) === "x"){
            solution +="v"
        } else if (string.charAt(i) === "c"){
            solution +="b"
        } else if (string.charAt(i) === "v"){
            solution +="n"
        } else if (string.charAt(i) === "b"){
            solution +="m"
        } else if (string.charAt(i) === "n"){
            solution +="z"
        } else if (string.charAt(i) === "m"){
            solution +="x"
        } else {
            solution +=string.charAt(i)
        }
}
return solution
}
console.log(encode("I love cryptography!"))
console.log(encode("I sqnt byiwuqjydwki!"))