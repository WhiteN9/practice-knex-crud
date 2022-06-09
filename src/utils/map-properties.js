const lodash = require("lodash");

// The mapProperties() function accepts a configuration parameter, which is an object
// where the key specifies the original property name
// and the value specifies the new property name.
// The mapProperties() function returns a new function 
// that can be used over and over to modify multiple data objects

//the return function:
//1st, first check if the object exists, 
//2nd, then Object.entries() returns an array of 
//a given object's own enmurable string-keyed property [key,value] pairs.
//3rd, then the array is reduced through a reducer callback function
    //Within the reducer callback function:
    //In each iteration, it calls lodash.set.
    //lodash.set method is used to set the value at path of object and returns a new set object.
    //lodash.set(object, path, value)
    //object parameter holds the object to modify.
    //path parameter holds the path of the property to set. It will be array or string.
    //value parameter holds the value to set
    //i.e.
    //lodash.set(category, category_name, "candles") 



function mapProperties(configuration) {
  return (data) => {
    if (data) {
      return Object.entries(data).reduce((accumulator, [key, value]) => {
        return lodash.set(accumulator, configuration[key] || key, value);
      }, {});
    }
    return data;
  };
}

module.exports = mapProperties;

// Object.entries() method returns an array of
// a given object's own enumrable string-keyed property [key, value] pairs.
// const obj = { foo: 'bar', baz: 42 };
// console.log(Object.entries(obj));
// [ ['foo', 'bar'], ['baz', 42] ]
