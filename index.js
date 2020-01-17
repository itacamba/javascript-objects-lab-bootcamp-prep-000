function updateObjectWithKeyAndValue(object,key,value){
 var clone = Object.assign({},object); // first I created a variable to hold the new object without modifying the original
      clone[key]=value;// I added new values to the clone, and it will print, the original values plus the new ones.
      return clone;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value;
  return object;
}
function deleteFromObjectByKey(object,key){
  var clone = Object.assign({},object);
  delete clone[key];
}

function destructi
