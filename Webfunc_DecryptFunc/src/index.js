/**
 * DecryptFunc 解密函数
 * 输入：decryptValue：需要解密的值 
 *       type：解密类型 支持【AES】
 *       algorithmKey：密钥。aes加密下必填
 * 输出：解密后的值
 */
vds.import("vds.exception.*");
var main = function (decryptValue, type, algorithmKey) {
    var result = "";
    if(decryptValue == null){
        var exception = vds.exception.newConfigException("解密的值不能为空!");
        throw exception;
    }
    if(type == null) {
        var exception = vds.exception.newConfigException("解密的类型不能为空!");
        throw exception;
    }
    if(type.toLowerCase() == "aes" && algorithmKey == null) {
        var exception = vds.exception.newConfigException("aes解密需要指定密钥");
        throw exception;
    }
    
    if(type.toLowerCase() == 'aes') {
        result = math.decryptWithKey(decryptValue, "aes", algorithmKey);
    }
    return result;
}
export{    main}