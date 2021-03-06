/**
 * 整数乘积 代码示例:bigMul(3,5)返回值为15 参数数量:2 参数1--乘数(数字类型),参数2--被乘数(数字类型) 返回值为整数
 */
vds.import("vds.object.*", "vds.math.*");
var main = function(multiplier1,multiplier2) {
    if (vds.object.isUndefOrNull(multiplier1) || vds.object.isUndefOrNull(multiplier2))
        throw new Error("整数乘积函数的因数为空，请检查");
    if (isNaN(multiplier1) || isNaN(multiplier2))
        throw Error("整数乘积函数的因数不是数字，请检查");

    multiplier1 = vds.math.round(multiplier1);
    multiplier2 = vds.math.round(multiplier2);

    return vds.math.multiply(multiplier1, multiplier2);
}
export{
    main
}