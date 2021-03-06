/**
 * IsEntityLastRow(判断当前行是否为实体末行) 
     代码示例:IsEntityLastRow("book")  返回值为：true
     参数数量:1
     参数1(字符串类型，必填，实体编码)
     返回值为布尔型
 *
 */
vds.import("vds.ds.*","vds.exception.*");
var main = function (param) {
    
    var args = param.getArgs();
    var sourceName = args[0];
    if(sourceName == undefined || sourceName == null || sourceName == '') {
        //throw new Error("参数错误！实体名称必填!");	
        var exception = vds.exception.newConfigException("参数错误！实体名称必填!");
        throw exception;
    }

    if(!dbManager.exists({
            "datasourceName": sourceName
        })) {
        //throw new Error("实体不存在！sourceName=" + sourceName);
        var exception = vds.exception.newConfigException("实体不存在！");
        throw exception;
    }

    // 源记录集合
    var datasource = vds.ds.lookup(sourceName);
    
    var records = datasource.getAllRecords();
    if(records)
        records = records.toArray();
    
    if(records == null || records.length == 0) {
        return false;
    }

    var currRecord = datasource.getCurrentRecord();
    return currRecord.getSysId() === datasource.getAllRecords().last().getSysId();
    
}
export{    main}