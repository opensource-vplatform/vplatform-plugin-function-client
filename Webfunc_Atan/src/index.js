/**
 * 反正切 代码示例:Atan(1) 0.7853981633974483 参数数量:1 参数1--指定的角度(小数类型) 返回值为小数
 */
vds.import("vds.object.*", "vds.math.*", "vds.number.*");
var main = function (num) {
    if (vds.object.isUndefOrNull(num)) {
        throw new Error("反正切函数参数为空，请检查");
    }
    if (!vds.object.isNumber(num)) {
        throw new Error("反正切函数参数不是数字，请检查");
    }

    var result = vds.number.toFixed(vds.math.atan(num), 10);
    return Number(result);
}
export {
    main
}