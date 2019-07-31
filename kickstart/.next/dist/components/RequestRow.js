"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/felixlepoutre/Documents/webdev/eth-course/kickstart/components/RequestRow.js";


var RequestRow = function (_Component) {
	(0, _inherits3.default)(RequestRow, _Component);

	function RequestRow() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RequestRow);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							campaign = (0, _campaign2.default)(_this.props.address);
							_context.next = 3;
							return _web2.default.eth.getAccounts();

						case 3:
							accounts = _context.sent;
							_context.next = 6;
							return campaign.methods.approveRequest(_this.props.id).send({ from: accounts[0] });

						case 6:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, _this2);
		})), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							campaign = (0, _campaign2.default)(_this.props.address);
							_context2.next = 3;
							return _web2.default.eth.getAccounts();

						case 3:
							accounts = _context2.sent;
							_context2.next = 6;
							return campaign.methods.finalizeRequest(_this.props.id).send({ from: accounts[0] });

						case 6:
						case "end":
							return _context2.stop();
					}
				}
			}, _callee2, _this2);
		})), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RequestRow, [{
		key: "render",
		value: function render() {
			var Row = _semanticUiReact.Table.Row,
			    Cell = _semanticUiReact.Table.Cell;
			var _props = this.props,
			    id = _props.id,
			    request = _props.request,
			    approversCount = _props.approversCount;

			var readyToFinalize = request.approvalCount > approversCount / 2;

			return _react2.default.createElement(Row, {
				disabled: request.complete,
				positive: readyToFinalize && !request.complete,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			}, _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, id), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, request.description), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, "ETH ", _web2.default.utils.fromWei(request.value, "ether")), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, request.recipient), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, request.approvalCount, " / ", approversCount), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: "green", basic: true, onClick: this.onApprove, __source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, "Approve")), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: "blue", basic: true, onClick: this.onFinalize, __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, "Finalize")));
		}
	}]);

	return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7a04sQUFDTCxxRkFBWSxtQkFBQTtpQkFBQTtpRUFBQTtjQUFBO3NDQUFBO1dBQ0w7QUFESyxrQkFDTSx3QkFBUyxNQUFBLEFBQUssTUFEcEIsQUFDTSxBQUFvQjt1QkFEMUI7Y0FFWSxjQUFBLEFBQUssSUFGakIsQUFFWSxBQUFTOztXQUExQjtBQUZLLDJCQUFBO3VCQUFBO2NBR0wsU0FBQSxBQUFTLFFBQVQsQUFDSixlQUFlLE1BQUEsQUFBSyxNQURoQixBQUNzQixJQUR0QixBQUVKLEtBQUssRUFBRSxNQUFNLFNBTEosQUFHTCxBQUVDLEFBQVEsQUFBUzs7V0FMYjtXQUFBO3VCQUFBOztBQUFBO2VBQUE7QSxhLEFBUVosc0ZBQWEsb0JBQUE7aUJBQUE7bUVBQUE7Y0FBQTt3Q0FBQTtXQUNOO0FBRE0sa0JBQ0ssd0JBQVMsTUFBQSxBQUFLLE1BRG5CLEFBQ0ssQUFBb0I7d0JBRHpCO2NBRVcsY0FBQSxBQUFLLElBRmhCLEFBRVcsQUFBUzs7V0FBMUI7QUFGTSw0QkFBQTt3QkFBQTtjQUdOLFNBQUEsQUFBUyxRQUFULEFBQ0osZ0JBQWdCLE1BQUEsQUFBSyxNQURqQixBQUN1QixJQUR2QixBQUVKLEtBQUssRUFBRSxNQUFNLFNBTEgsQUFHTixBQUVDLEFBQVEsQUFBUzs7V0FMWjtXQUFBO3dCQUFBOztBQUFBO2dCQUFBO0E7Ozs7OzJCQVFKO09BQUEsQUFDQSxNQURBLEFBQ2MsdUJBRGQsQUFDQTtPQURBLEFBQ0ssT0FETCxBQUNjLHVCQURkLEFBQ0s7Z0JBQzJCLEtBRmhDLEFBRXFDO09BRnJDLEFBRUEsWUFGQSxBQUVBO09BRkEsQUFFSSxpQkFGSixBQUVJO09BRkosQUFFYSx3QkFGYixBQUVhLEFBQ3JCOztPQUFNLGtCQUFrQixRQUFBLEFBQVEsZ0JBQWdCLGlCQUFoRCxBQUFpRSxBQUVqRTs7MEJBQ0UsY0FBRDtjQUNXLFFBRFgsQUFDbUIsQUFDbEI7Y0FBVSxtQkFBbUIsQ0FBQyxRQUYvQixBQUV1Qzs7ZUFGdkM7aUJBQUEsQUFJQztBQUpEO0FBQ0MsSUFERCxrQkFJRSxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLE1BSkQsQUFJQyxBQUNBLHFCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsY0FMRCxBQUtDLEFBQWUsQUFDZiw4QkFBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUFXLHNCQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsUUFBbkIsQUFBMkIsT0FOdkMsQUFNQyxBQUFXLEFBQWtDLEFBQzdDLDJCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsY0FQRCxBQU9DLEFBQWUsQUFDZiw0QkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQ0U7QUFERjtBQUFBLGNBQUEsQUFDVSxlQUFrQixPQVQ3QixBQVFDLEFBR0EsaUNBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUNFO0FBREY7QUFBQSxjQUNFLEFBQVEsV0FBUixBQUFtQix1QkFDbkIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxPQUF0QixNQUE0QixTQUFTLEtBQXJDLEFBQTBDO2VBQTFDO2lCQUFBO0FBQUE7SUFBQSxFQWJILEFBV0MsQUFFRSxBQUtGLDZCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFDRTtBQURGO0FBQUEsY0FDRSxBQUFRLFdBQVIsQUFBbUIsdUJBQ25CLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsU0FBUyxLQUFwQyxBQUF5QztlQUF6QztpQkFBQTtBQUFBO0lBQUEsRUFyQkosQUFDQyxBQWtCQyxBQUVFLEFBT0o7Ozs7O0FBR0YsQSxBQXJEeUI7O2tCQXFEekIsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mZWxpeGxlcG91dHJlL0RvY3VtZW50cy93ZWJkZXYvZXRoLWNvdXJzZS9raWNrc3RhcnQifQ==