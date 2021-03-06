/**
 *	流水号函数
 */
vds.import("vds.object.*");
vds.import("vds.exception.*");
vds.import("vds.rpc.*");
var main = function(key, model, sn) {

    if (vds.object.isUndefOrNull(key) || vds.object.isUndefOrNull(model))
        throw vds.exception.newConfigException("传入参数不能为空，请检查");

    if (vds.object.isUndefOrNull(sn))
        sn = null;
        
    try {        
        return executeExpression(key, model, sn);
    } catch (e) {
        throw e;
    }
   
}

var executeExpression = function( key, model, sn) {
    var expression = "GenerateSequenceNumber(\"" + key + "\",\"" + model + "\",\"" + sn + "\")",
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

export{    
    main
}