function updateObjectWithKeyAndValue(object,key,value){
  var newObject = Object.assign({},object)
  return newObject;
  
  object[key]=value;
  return object;
}
