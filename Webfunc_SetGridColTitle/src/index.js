/**
 *  设置表格列标题
    代码示例：
    SetGridColTitle("JGDataGrid1","name,code","名称,编码")
    返回值为：无
    参数1：表格控件编码，必填（字符串类型）
    参数2：需要修改的实体字段名，必填（字段串类型，多个字段用英文逗号分隔）
    参数3：修改的标题，必填（字符串类型，个数要与参数2对应）
 *
 */
vds.import("vds.exception.*", "vds.object.*", "vds.widget.*");
var main = function (widgetCode, fieldStr, titleStr) {
    //获取函数传入的参数
    if (vds.object.isUndefOrNull(widgetCode) || widgetCode === "") {
        var exception = vds.exception.newConfigException("列表控件名不能为空！");
        throw exception;
    }
    if (vds.object.isUndefOrNull(fieldStr) || fieldStr === "") {
        var exception = vds.exception.newConfigException("需要修改的字段名不能为空！");
        throw exception;
    }
    if (vds.object.isUndefOrNull(titleStr) || titleStr === "") {
        var exception = vds.exception.newConfigException("需要设置的列标题不能为空！");
        throw exception;
    }

    var widget = vds.widget.getProperty(widgetCode, "widgetObj");
    var fieldList = fieldStr.split(",");
    var titleList = titleStr.split(",");
    for (var i = 0; i < fieldList.length; i++) {
        var field = widget.getFieldByName(fieldList[i]);
        if (field) {
            widget.setFieldTitle(fieldList[i], titleList[i]);
        }
    }
}
export { main }