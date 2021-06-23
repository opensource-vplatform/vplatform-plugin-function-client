/**
 * 从指定的界面实体获取记录数 参数数量:1 参数1 表名 (字符串类型) 返回值为整数类型
 */
vds.import("vds.ds.*","vds.exception.*");
var main = function(dsName,operType) {
    if (dsName==null)
        throw vds.exception.newConfigException("实体名称不允许为空，请检查");
    if (operType==null)
        throw vds.exception.newConfigException("取消或选择类型没传参数，请检查");
    var datasource = vds.ds.lookup(dsName);
    if(!datasource) 
        throw vds.exception.newConfigException("实体变量无法识别！");
    var allRecords = datasource.getAllRecords().toArray();
    var operRecords = [];
    for(var i=0;i<allRecords.length;i++){
        var record = allRecords[i];
        if(datasource.isSelectedRecord({record:record})){
            continue;
        }
        operRecords.push(record);
    }
    if(operType=="select"){
        datasource.selectRecords(operRecords,true);
    }else{
        datasource.selectRecords(allRecords,false);
    }

    return operType;
}
export{    main}