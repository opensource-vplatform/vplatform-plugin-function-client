/**
 *	求浮点数的值(将浮点值四舍五入为最接近的值)
 *  代码示例:Round(3.555,2)返回值为3.56
 *  参数数量:2
 *  参数1--要舍入的数(小数类型),参数2--舍入的位数(整数类型)
 *  返回值为小数
 */
vds.import("vds.object.*", "vds.number.*");
var main = function(arg1, arg2) {
    if (vds.object.isUndefOrNull(arg1) || vds.object.isUndefOrNull(arg2))
        throw new Error("求浮点数的值函数参数为空，请检查");
    var result = (new Number(arg1)).toString();
    if (result.toUpperCase() == "NAN" || !vds.object.isNumber(arg2))
        throw new Error("求浮点数的值函数参数不是数字，请检查");

    return vds.number.toFixed(arg1, arg2);
}
export{    main}