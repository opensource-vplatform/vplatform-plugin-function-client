/**
 *	用于把字符串转换为小写
 *  代码示例:ToLower('ABCD') 返回值为'abcd'
 *  参数数量:1
 *  参数1(字符串类型)
 *  返回值为字符串类型
 */
vds.import("vds.object.*", "vds.string.*");
var main = function(arg1) {
    if (vds.object.isUndefOrNull(arg1))
        return "";

    arg1 = String(arg1);
    return vds.string.toLowerCase(arg1);
}
export{    main}