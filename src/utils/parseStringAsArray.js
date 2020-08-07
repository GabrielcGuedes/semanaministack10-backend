module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim()); //remove o espaco de arrays.
}