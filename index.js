'use strict'
var citiesAndAttractions = require('./cities-attractions.json');

/**
 * get all the cities and their attractions
 * @returns all states in nigeria with their attractions
 */
exports.getAll = function() {
  return citiesAndAttractions
}




/**
 * Find a city and the popular attractions in that city
 * @param {String} seach any state in Nigeria
 * @returns a list of the attractions in the state
 */

exports.findOne = function(search){
  
  return citiesAndAttractions.find(item => {
    return item.state == search
  })
}



/**
 * Get all the states in Nigeria
 * @returns an array of all states in Nigeria
 */
exports.onlyStates = function() {
  return citiesAndAttractions.map(function(item) {
    return item.state
  })
}



/**
 * Get only attractions
 * @returns a list of all attractions in all states, without the states
 */
exports.onlyAttractions = function() {
  return citiesAndAttractions.map(function(item) {
    return item.attractions
  })
}


