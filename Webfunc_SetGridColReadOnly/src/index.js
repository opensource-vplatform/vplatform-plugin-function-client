/**
 *  设置表格列是否只读
    代码示例：
    SetGridColReadOnly("JGDataGrid1","name,code",true)
    返回值为：无
    参数1：表格控件编码，必填（字符串类型）
    参数2：需要修改的实体字段名，必填（字段串类型，多个字段用英文逗号分隔）
    参数3：是否只读，必填（布尔类型）
 *
 */
vds.import("vds.exception.*", "vds.object.*", "vds.widget.*");
var main = function (widgetCode, fieldStr, readOnly) {
    //获取函数传入的参数

    if (vds.object.isUndefOrNull(widgetCode) || widgetCode === "") {
        var exception = vds.exception.newConfigException("列表控件名不能为空！");
        throw exception;
    }
    if (vds.object.isUndefOrNull(fieldStr) || fieldStr === "") {
        var exception = vds.exception.newConfigException("需要设置的字段名不能为空！");
        throw exception;
    }
    if (vds.object.isUndefOrNull(readOnly) || readOnly === "") {
        var exception = vds.exception.newConfigException("需要设置的只读值不能为空！");
        throw exception;
    }

    var widget = vds.widget.getProperty(widgetCode, "widgetObj");
    var fieldList = fieldStr.split(",");
    if (readOnly == "false" || readOnly == false) {
        readOnly = false;
    } else {
        readOnly = true;
    }

    for (var i = 0; i < fieldList.length; i++) {
        var field = widget.getFieldByName(fieldList[i]);
        if (field) {
            field.canEdit = !readOnly;
        }
    }
}
export { main }