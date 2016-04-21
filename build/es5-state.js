(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

window.state = _index2.default;

},{"./index":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (node, className, active) {

    if (typeof active === 'undefined') {
        return service.has(node, 'is-' + className);
    }

    return service[active === 'toggle' ? 'toggle' : 'test'](node, 'is-' + className, active);
};

function hasClassInList(node, c) {
    return node.classList.contains(c);
}

function addClassInList(node, c) {
    node.classList.add(c);
    return true;
}

function removeClassInList(node, c) {
    node.classList.remove(c);
    return false;
}

function hasClassInName(node, c) {
    return (' ' + node.className + ' ').indexOf(' ' + c + ' ') > -1;
}

function addClassInName(node, c) {
    if (!hasClassInName(node, c)) {
        var className = node.className + ' ' + c;
        node.className.baseVal ? node.className.baseVal = className : node.className = className;
    }
    return true;
}

function removeClassInName(node, c) {
    var className = (' ' + node.className + ' ').replace(new RegExp(' ' + c + ' ', 'g'), ' ').trim();
    node.className.baseVal ? node.className.baseVal = className : node.className = className;
    return false;
}

var service = {
    has: function has(node, c) {
        if (!node || !c) return false;
        return 'classList' in node ? hasClassInList(node, c) : hasClassInName(node, c);
    },
    add: function add(node, c) {
        if (!node || !c) return;
        return 'classList' in node ? addClassInList(node, c) : addClassInName(node, c);
    },
    remove: function remove(node, c) {
        if (!node || !c) return;
        return 'classList' in node ? removeClassInList(node, c) : removeClassInName(node, c);
    },
    toggle: function toggle(node, c) {
        return this[!this.has(node, c) ? 'add' : 'remove'](node, c);
    },
    test: function test(node, c, active) {
        return this[!!active ? 'add' : 'remove'](node, c);
    }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZXM1LXN0YXRlLmpzIiwic3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7Ozs7QUFDQSxPQUFBLEFBQU87Ozs7Ozs7OztrQkNvRFEsVUFBQSxBQUFVLE1BQVYsQUFBZ0IsV0FBaEIsQUFBMkIsUUFBUSxBQUU5Qzs7UUFBSyxPQUFBLEFBQU8sV0FBWixBQUF1QixhQUFjLEFBQ2pDO2VBQU8sUUFBQSxBQUFRLElBQVIsQUFBYSxjQUFwQixBQUFPLEFBQXlCLEFBQ25DO0FBRUQ7O1dBQU8sUUFBUSxXQUFBLEFBQVcsV0FBWCxBQUFzQixXQUE5QixBQUF5QyxRQUF6QyxBQUFrRCxjQUFsRCxBQUE4RCxXQUFyRSxBQUFPLEFBQTJFLEFBQ3JGO0E7O0FBNURELFNBQUEsQUFBUyxlQUFULEFBQXlCLE1BQXpCLEFBQStCLEdBQUksQUFDL0I7V0FBTyxLQUFBLEFBQUssVUFBTCxBQUFlLFNBQXRCLEFBQU8sQUFBeUIsQUFDbkM7OztBQUVELFNBQUEsQUFBUyxlQUFULEFBQXlCLE1BQXpCLEFBQStCLEdBQUksQUFDL0I7U0FBQSxBQUFLLFVBQUwsQUFBZSxJQUFmLEFBQW9CLEFBQ3BCO1dBQUEsQUFBTyxBQUNWOzs7QUFFRCxTQUFBLEFBQVMsa0JBQVQsQUFBNEIsTUFBNUIsQUFBa0MsR0FBSSxBQUNsQztTQUFBLEFBQUssVUFBTCxBQUFlLE9BQWYsQUFBdUIsQUFDdkI7V0FBQSxBQUFPLEFBQ1Y7OztBQUVELFNBQUEsQUFBUyxlQUFULEFBQXlCLE1BQXpCLEFBQStCLEdBQUksQUFDL0I7V0FBTyxPQUFLLEtBQUwsQUFBVSxpQkFBVixBQUF3QixjQUF4QixBQUFzQyxXQUFVLENBQXZELEFBQXdELEFBQzNEOzs7QUFFRCxTQUFBLEFBQVMsZUFBVCxBQUF5QixNQUF6QixBQUErQixHQUFJLEFBQy9CO1FBQUssQ0FBQyxlQUFBLEFBQWdCLE1BQXRCLEFBQU0sQUFBc0IsSUFBTSxBQUM5QjtZQUFJLFlBQWUsS0FBZixBQUFvQixrQkFBeEIsQUFBcUMsQUFDckM7YUFBQSxBQUFLLFVBQUwsQUFBZSxVQUFVLEtBQUEsQUFBSyxVQUFMLEFBQWUsVUFBeEMsQUFBa0QsWUFBWSxLQUFBLEFBQUssWUFBbkUsQUFBK0UsQUFDbEY7QUFDRDtXQUFBLEFBQU8sQUFDVjs7O0FBRUQsU0FBQSxBQUFTLGtCQUFULEFBQTRCLE1BQTVCLEFBQWtDLEdBQUksQUFDbEM7UUFBSSxZQUFZLE9BQUssS0FBTCxBQUFVLGlCQUFWLEFBQXdCLFFBQVMsSUFBQSxBQUFJLGFBQUosQUFBaUIsU0FBbEQsQUFBaUMsQUFBd0IsTUFBekQsQUFBZ0UsS0FBaEYsQUFBZ0IsQUFBc0UsQUFDdEY7U0FBQSxBQUFLLFVBQUwsQUFBZSxVQUFVLEtBQUEsQUFBSyxVQUFMLEFBQWUsVUFBeEMsQUFBa0QsWUFBWSxLQUFBLEFBQUssWUFBbkUsQUFBK0UsQUFDL0U7V0FBQSxBQUFPLEFBQ1Y7OztBQUVELElBQU07U0FDRyxhQUFBLEFBQVcsTUFBWCxBQUFpQixHQUFJLEFBQ3RCO1lBQUssQ0FBQSxBQUFDLFFBQVEsQ0FBZCxBQUFlLEdBQUksT0FBQSxBQUFPLEFBQzFCO2VBQU8sZUFBQSxBQUFlLE9BQU8sZUFBQSxBQUFlLE1BQXJDLEFBQXNCLEFBQXFCLEtBQUssZUFBQSxBQUFlLE1BQXRFLEFBQXVELEFBQXFCLEFBQy9FO0FBSlcsQUFLWjtTQUFLLGFBQUEsQUFBVyxNQUFYLEFBQWlCLEdBQUksQUFDdEI7WUFBSyxDQUFBLEFBQUMsUUFBUSxDQUFkLEFBQWUsR0FBSSxBQUNuQjtlQUFPLGVBQUEsQUFBZSxPQUFPLGVBQUEsQUFBZSxNQUFyQyxBQUFzQixBQUFxQixLQUFLLGVBQUEsQUFBZSxNQUF0RSxBQUF1RCxBQUFxQixBQUMvRTtBQVJXLEFBU1o7WUFBUSxnQkFBQSxBQUFXLE1BQVgsQUFBaUIsR0FBSSxBQUN6QjtZQUFLLENBQUEsQUFBQyxRQUFRLENBQWQsQUFBZSxHQUFJLEFBQ25CO2VBQU8sZUFBQSxBQUFlLE9BQU8sa0JBQUEsQUFBa0IsTUFBeEMsQUFBc0IsQUFBd0IsS0FBSyxrQkFBQSxBQUFrQixNQUE1RSxBQUEwRCxBQUF3QixBQUNyRjtBQVpXLEFBYVo7WUFBUSxnQkFBQSxBQUFXLE1BQVgsQUFBaUIsR0FBSSxBQUN6QjtlQUFPLEtBQU0sQ0FBQyxLQUFBLEFBQUssSUFBTCxBQUFVLE1BQVgsQUFBQyxBQUFnQixLQUFqQixBQUF1QixRQUE3QixBQUFxQyxVQUFyQyxBQUFpRCxNQUF4RCxBQUFPLEFBQXVELEFBQ2pFO0FBZlcsQUFnQlo7VUFBTSxjQUFBLEFBQVcsTUFBWCxBQUFpQixHQUFqQixBQUFvQixRQUFTLEFBQy9CO2VBQU8sS0FBTSxDQUFDLENBQUQsQUFBRSxTQUFGLEFBQVcsUUFBakIsQUFBeUIsVUFBekIsQUFBcUMsTUFBNUMsQUFBTyxBQUEyQyxBQUNyRDtBQWxCTCxBQUFnQjtBQUFBLEFBQ1oiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4vaW5kZXgnO1xud2luZG93LnN0YXRlID0gc3RhdGU7XG4iLCJmdW5jdGlvbiBoYXNDbGFzc0luTGlzdCggbm9kZSwgYyApIHtcbiAgICByZXR1cm4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoIGMgKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3NJbkxpc3QoIG5vZGUsIGMgKSB7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCBjICk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzSW5MaXN0KCBub2RlLCBjICkge1xuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSggYyApO1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3NJbk5hbWUoIG5vZGUsIGMgKSB7XG4gICAgcmV0dXJuIGAgJHsgbm9kZS5jbGFzc05hbWUgfSBgLmluZGV4T2YoIGAgJHsgYyB9IGAgKSA+IC0xO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzc0luTmFtZSggbm9kZSwgYyApIHtcbiAgICBpZiAoICFoYXNDbGFzc0luTmFtZSggbm9kZSwgYyApICkge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gYCR7bm9kZS5jbGFzc05hbWV9ICR7Y31gO1xuICAgICAgICBub2RlLmNsYXNzTmFtZS5iYXNlVmFsID8gbm9kZS5jbGFzc05hbWUuYmFzZVZhbCA9IGNsYXNzTmFtZSA6IG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3NJbk5hbWUoIG5vZGUsIGMgKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IGAgJHsgbm9kZS5jbGFzc05hbWUgfSBgLnJlcGxhY2UoIG5ldyBSZWdFeHAoIGAgJHsgYyB9IGAsICdnJyApLCAnICcgKS50cmltKCk7XG4gICAgbm9kZS5jbGFzc05hbWUuYmFzZVZhbCA/IG5vZGUuY2xhc3NOYW1lLmJhc2VWYWwgPSBjbGFzc05hbWUgOiBub2RlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IHNlcnZpY2UgPSB7XG4gICAgaGFzOiBmdW5jdGlvbiAoIG5vZGUsIGMgKSB7XG4gICAgICAgIGlmICggIW5vZGUgfHwgIWMgKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiAnY2xhc3NMaXN0JyBpbiBub2RlID8gaGFzQ2xhc3NJbkxpc3Qobm9kZSwgYykgOiBoYXNDbGFzc0luTmFtZShub2RlLCBjKTtcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24gKCBub2RlLCBjICkge1xuICAgICAgICBpZiAoICFub2RlIHx8ICFjICkgcmV0dXJuO1xuICAgICAgICByZXR1cm4gJ2NsYXNzTGlzdCcgaW4gbm9kZSA/IGFkZENsYXNzSW5MaXN0KG5vZGUsIGMpIDogYWRkQ2xhc3NJbk5hbWUobm9kZSwgYyk7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uICggbm9kZSwgYyApIHtcbiAgICAgICAgaWYgKCAhbm9kZSB8fCAhYyApIHJldHVybjtcbiAgICAgICAgcmV0dXJuICdjbGFzc0xpc3QnIGluIG5vZGUgPyByZW1vdmVDbGFzc0luTGlzdChub2RlLCBjKSA6IHJlbW92ZUNsYXNzSW5OYW1lKG5vZGUsIGMpO1xuICAgIH0sXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiAoIG5vZGUsIGMgKSB7XG4gICAgICAgIHJldHVybiB0aGlzWyAhdGhpcy5oYXMoIG5vZGUsIGMgKSA/ICdhZGQnIDogJ3JlbW92ZScgXSggbm9kZSwgYyApO1xuICAgIH0sXG4gICAgdGVzdDogZnVuY3Rpb24gKCBub2RlLCBjLCBhY3RpdmUgKSB7XG4gICAgICAgIHJldHVybiB0aGlzWyAhIWFjdGl2ZSA/ICdhZGQnIDogJ3JlbW92ZScgXSggbm9kZSwgYyApO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChub2RlLCBjbGFzc05hbWUsIGFjdGl2ZSkge1xuXG4gICAgaWYgKCB0eXBlb2YgYWN0aXZlID09PSAndW5kZWZpbmVkJyApIHtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2UuaGFzKCBub2RlLCBgaXMtJHtjbGFzc05hbWV9YCApO1xuICAgIH1cblxuICAgIHJldHVybiBzZXJ2aWNlW2FjdGl2ZSA9PT0gJ3RvZ2dsZScgPyAndG9nZ2xlJyA6ICd0ZXN0J10oIG5vZGUsIGBpcy0ke2NsYXNzTmFtZX1gLCBhY3RpdmUgKTtcbn1cbiJdfQ==
