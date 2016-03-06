/// <reference path="../../_references.ts" />
APP.config(function ($provide) {
    $provide.decorator('$rootScope', function ($delegate) {
        $delegate.constructor.prototype.$bus = function () {
            var scope = this;
            var bus = $.extend({}, postal, {
                subscribe: function overridePostalSubscribe() {
                    var subDef = postal.subscribe.apply(postal, arguments);
                    scope.$on('$destroy', function () {
                        subDef.unsubscribe();
                    });
                    return subDef;
                }
            });
            return bus;
        };
        return $delegate;
    });
});
