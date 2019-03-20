// console.log(urlEncode(arr||obj).slice(1))//调用
var urlEncode = function(param) {
    var paramStr = '';
		if(param instanceof Array){
			 for (let i=0; i< param.length;i++) {
				 for (var p in param[i]) {
				 	paramStr += '&'+p+'='+param[i][p];
				 }	
			 }
		}else if(param instanceof Object){
			for (var p in param) {
				paramStr += '&'+p+'='+param[p];
			}	
		}
    return paramStr;

}
  module.exports = {
    // CusBASE64: __BASE64,
	urlEncode:urlEncode,//
	// encoder:base64decode
  }