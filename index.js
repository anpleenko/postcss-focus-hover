var postcss = require('postcss');

module.exports = postcss.plugin('postcss-focus-hover', function () {
    return function (css) {
        css.walkRules(function (rule) {
            if (rule.selector.indexOf(':hover') !== -1) {
                var focuses = [];
                rule.selectors.forEach(function (selector) {
                    if (selector.indexOf(':hover') !== -1) {
                        focuses.push(selector.replace(/:hover/g, ':focus'));
                    }
                });
                if (focuses.length) {
                    rule.selectors = rule.selectors.concat(focuses);
                }
            }

            if (rule.selector.indexOf(':only-hover') !== -1) {
                var hovered = [];
                rule.selectors.forEach(function (selector) {
                    if (selector.indexOf(':only-hover') !== -1) {
                        hovered.push(selector.replace(/:only-hover/g, ':hover'));
                    }
                });
                if (hovered.length) {
                    rule.selectors = hovered;
                }
            }
        })
    };
});
