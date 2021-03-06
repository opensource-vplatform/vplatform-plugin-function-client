/**
 *	检查是否为空值
 *  代码示例:IsEmpty('abcd') 返回值为 false
 *  参数数量:1
 *  参数1(字符串类型)
 *  返回值为布尔类型
 */
vds.import("vds.object.*");
var main = function(param) {
    var args = param.getArgs(),
        argsLen = args ? args.length : 0,
        str = argsLen >= 1 ? args[0] : null;

    return vds.object.isUndefOrNull(str);
}
export{    main}