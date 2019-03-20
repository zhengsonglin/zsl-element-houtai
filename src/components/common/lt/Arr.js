// console.log(urlEncode(arr||obj).slice(1))//调用
var Arr = {


}
var Obj={
	update(oldobj,newobj){
		for(var p in oldobj){
			if(newobj[p]){
				oldobj[p]= newobj[p];
			}
		}
		return oldobj;
	}
}
  module.exports = {
    // CusBASE64: __BASE64,
	Obj:Obj,//
	objUpdate:Obj.update
	// encoder:base64decode
  }