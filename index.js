var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) { kittens.push("Ralph");
}

function destructivelyPrependKitten(name) { kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
kittens.pop();
return kittens;
}

function destructivelyRemoveFirstKitten()  {
kittens.shift();
return kittens;
}

function appendKitten(name) { kittens.concat("Ralph");
}
