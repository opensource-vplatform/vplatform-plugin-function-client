/**
 * 编码字符串累加或累减
 * @author	huangjr
 * @since	20120705
 * @param {Object} numberCode	能转换成数值的编码字符串
 * @param {Object} num	加减值
 */
vds.import("vds.string.*");
var main = function(numberCode,num) {

    if (typeof numberCode == "string" && numberCode != "")
        numberCode = vds.string.trim(numberCode);

    return vds.string.numberAdd(numberCode, num);
}
export{    main}