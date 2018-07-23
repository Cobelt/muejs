'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CardItem = require('./CardItem');

Object.keys(_CardItem).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _CardItem[key];
        }
    });
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid2 = require('../Grid');

var _Grid3 = _interopRequireDefault(_Grid2);

require('./index.styl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Grid) {
    _inherits(Card, _Grid);

    function Card(props) {
        _classCallCheck(this, Card);

        var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

        _this.forceTemplate = true;
        _this.propsColumnsTemplate = '1fr';
        _this.propsRowsTemplate = '6.5fr 2.6fr 0.9fr';
        return _this;
    }

    _createClass(Card, [{
        key: 'getClassName',
        value: function getClassName() {
            return 'card' + (this.className ? ' ' + this.className : '');
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            return this.children.map(function (element, index) {
                return _react2.default.createElement(
                    _Grid2.GridElement,
                    { style: element.type.name === 'CardImage' ? { overflow: 'hidden' } : null, key: index + 1, row: index + 1 },
                    element
                );
            });
        }
    }]);

    return Card;
}(_Grid3.default);

exports.default = Card;