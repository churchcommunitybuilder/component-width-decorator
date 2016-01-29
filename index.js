'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactDOM = require('react-dom');
var elementResizeEvent = require('element-resize-event');

module.exports = function componentWidth(ParentComponent) {
  return (function (_ParentComponent) {
    _inherits(ComponentWidth, _ParentComponent);

    function ComponentWidth(props) {
      _classCallCheck(this, ComponentWidth);

      _get(Object.getPrototypeOf(ComponentWidth.prototype), 'constructor', this).call(this, props);
      if (this.props.initialComponentWidth !== undefined && this.props.initialComponentWidth !== null) {
        this.state = Object.assign({}, this.state || {}, {
          componentWidth: this.props.initialComponentWidth
        });
      }
    }

    _createClass(ComponentWidth, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var domNode = ReactDOM.findDOMNode(this);

        this.setState({
          componentWidth: domNode.getBoundingClientRect().width
        });

        elementResizeEvent(domNode, this.onResize.bind(this));

        if (_get(Object.getPrototypeOf(ComponentWidth.prototype), 'componentDidMount', this)) {
          _get(Object.getPrototypeOf(ComponentWidth.prototype), 'componentDidMount', this).apply(this, arguments);
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (_get(Object.getPrototypeOf(ComponentWidth.prototype), 'componentDidUpdate', this)) {
          _get(Object.getPrototypeOf(ComponentWidth.prototype), 'componentDidUpdate', this).apply(this, arguments);
        }
        var domNode = ReactDOM.findDOMNode(this);

        if (domNode.getElementsByClassName('resize-sensor').length === 0) {
          elementResizeEvent(domNode, this.onResize.bind(this));
        }
      }
    }, {
      key: 'onResize',
      value: function onResize() {
        var domNode = ReactDOM.findDOMNode(this);

        this.setState({
          componentWidth: domNode.getBoundingClientRect().width
        });
      }
    }]);

    return ComponentWidth;
  })(ParentComponent);
};
