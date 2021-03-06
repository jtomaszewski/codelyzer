"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlFormatter = (function () {
    function HtmlFormatter() {
    }
    HtmlFormatter.prototype.format = function (e) {
        return "<li id=\"" + e.id + "\"><i class=\"warning-icon\"></i><span class=\"position\">[" + (e.startPosition.line + 1) + " - " + (e.endPosition.line + 1) + "]</span> " + this.linkify(e.failure) + " <span class=\"rule-name\">(" + e.ruleName + ")</span></li>";
    };
    HtmlFormatter.prototype.formatErrors = function (errors) {
        var _this = this;
        return errors.map(function (e) { return _this.format(e); }).join('');
    };
    HtmlFormatter.prototype.linkify = function (inputText) {
        var replacedText, replacePattern1, replacePattern2, replacePattern3;
        replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');
        return replacedText;
    };
    return HtmlFormatter;
}());
exports.HtmlFormatter = HtmlFormatter;
//# sourceMappingURL=html-formatter.js.map