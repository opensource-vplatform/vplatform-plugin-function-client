/**
 *	流水号函数
 */
vds.import("vds.object.*");
vds.import("vds.exception.*");
vds.import("vds.rpc.*");
var main = function (key) {

    if (vds.object.isUndefOrNull(key))
        throw vds.exception.newConfigException("传入参数不能为空，请检查");

    try {
        return executeExpression(key);
    } catch (e) {
        throw e;
    }
}

var executeExpression = function (key) {
    var expression = "GenerateSequenceNumberQuick(\"" + key + "\")",
        result = null;

    vds.rpc.callCommandSync("WebExecuteFormulaExpression", null, {
        "isOperation": true,
        "operationParam": {
            "expression": expression
        },
        "success": function (rs) {
            result = rs.data.result;
        },
        "fail": function(e) {
            throw e;
        }
    });

    return result;
}

export { main }