vds.import("vds.environment.*");
var main = function() {
    var hostUrl = "";
    if (window.GlobalVariables) {
        hostUrl = GlobalVariables.getServerUrl();
        if(hostUrl && hostUrl.indexOf("http") == 0){
            var index = hostUrl.indexOf("/");
            hostUrl = hostUrl.substring(index+2);
        }
    }else{
        hostUrl = window.location.host + vds.environment.getContextPath();
    }
    return hostUrl;
    
}
export{    main}