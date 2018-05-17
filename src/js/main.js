require.config({
    baseUrl: "./js",
    paths: {
        "jq": "jquery-2.1.1",
        "handle": "handlebars-v4.0.11"
    }
})
require(["jq", "handle"], function($, hand) {
    var tpl = $("#tpl").html();
    var template = hand.compile(tpl);
    var obj = {
        arr: ["推荐", "手机", "智能", "电视", "电脑", "张那"]
    };
    var html = template(obj);
    $("body").html(html);
})