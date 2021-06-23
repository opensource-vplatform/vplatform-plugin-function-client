/**
 *  滚动页面到指定控件所在位置
    代码示例：ScrollToPosition("JGDataGrid1")
    参数1：控件编码，必填(字符串类型)
    无返回值
 *
 */
vds.import("vds.exception.*");
var main = function (param) {
    //获取函数传入的参数
    var args = param.getArgs();
    var widgetCode = args[0];
    if( widgetCode== undefined || widgetCode=== ""){
        var exception = vds.exception.newConfigException("ScrollToPosition函数，控件编码不能为空！");
        throw exception;			
    }
    var widget = widgetContext.get(widgetCode, "widgetObj");
    if(widget){
        var scopeId = widget.getScopeId();
        var containerId = windowRelation.getByScopeId(scopeId);
        var positionDom = widget.getClipHandle();
        //var topX = widget.getOffsetTop();
        //var leftY = widget.getOffsetLeft();
        var topX = $(positionDom).offset().top;
        var leftY = $(positionDom).offset().left;
        if(containerId){
            var container = windowRelation.get(containerId);
            if(container.ele){
                var scrollEle = container.ele;
                var containerTop = $('#'+scrollEle).offset().top;
                var containerLeft = $('#'+scrollEle).offset().left;
                topX = topX-containerTop;
                leftY = leftY-containerLeft;
                $('#'+scrollEle).animate({
                    scrollTop: topX }, 0);
                $('#'+scrollEle).animate({
                    scrollLeft: leftY },0)
            }else{
                $('html, body').animate({
                    scrollTop:topX }, 0);
                $("html, body").animate({
                    scrollLeft:leftY },0);
            }
        }else{
            $('html, body').animate({
                scrollTop: topX }, 0);
            $("html, body").animate({
                scrollLeft:leftY },0);
        }
    }
}
export{    main}