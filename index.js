function updateObjectWithKeyAndValue(object,key,value){
 var clone = Object.assign({},object);
      clone[key]=value;
      return clone;
}
