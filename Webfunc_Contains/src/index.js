/**
 *	检查指定的字符串中是否包含被另一指定的模式串
 *  代码示例:Contains("asdfe","df") 返回值为 true
 *  参数数量:2
 *  参数1(字符串类型) 参数2(字符串类型)
 *  返回值为布尔类型
 */
vds.import("vds.object.*", "vds.string.*");
var main = function(str1, str2) {
    if (vds.object.isUndefOrNull(str1))
        str1 = "";
    if (vds.object.isUndefOrNull(str2))
        str2 = "";
    str1 = String(str1);
    str2 = String(str2);

    return vds.string.indexOf(str1, str2, 0) >= 0;
}
export{    main}