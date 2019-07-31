"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require("../../../routes");

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require("../../../components/RequestRow");

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/felixlepoutre/Documents/webdev/eth-course/kickstart/pages/campaigns/requests/index.js?entry";


var RequestIndexPage = function (_Component) {
	(0, _inherits3.default)(RequestIndexPage, _Component);

	function RequestIndexPage() {
		(0, _classCallCheck3.default)(this, RequestIndexPage);

		return (0, _possibleConstructorReturn3.default)(this, (RequestIndexPage.__proto__ || (0, _getPrototypeOf2.default)(RequestIndexPage)).apply(this, arguments));
	}

	(0, _createClass3.default)(RequestIndexPage, [{
		key: "renderRows",
		value: function renderRows() {
			var _this2 = this;

			return this.props.requests.map(function (request, index) {
				return _react2.default.createElement(_RequestRow2.default, {
					id: index,
					key: index,
					request: request,
					address: _this2.props.address,
					approversCount: _this2.props.approversCount,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 29
					}
				});
			});
		}
	}, {
		key: "render",
		value: function render() {
			var Header = _semanticUiReact.Table.Header,
			    Row = _semanticUiReact.Table.Row,
			    HeaderCell = _semanticUiReact.Table.HeaderCell,
			    Body = _semanticUiReact.Table.Body;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement("h3", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, "Request list"), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/new", __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement(_semanticUiReact.Button, {
				primary: true,
				floated: "right",
				style: { "margin-bottom": 10 },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, "Add request"))), _react2.default.createElement(_semanticUiReact.Table, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement(Header, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement(Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, "ID"), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, "Description"), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, "Amount"), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, "Recipient"), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, "ApprovalCount"), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, "Approve"), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, "Finalize"))), _react2.default.createElement(Body, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, this.renderRows())), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, "Found ", this.props.requestCount, " requests"));
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var address, campaign, requestCount, approversCount, requests;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								address = props.query.address;
								campaign = (0, _campaign2.default)(address);
								_context.next = 4;
								return campaign.methods.getRequestsCount().call();

							case 4:
								requestCount = _context.sent;
								_context.next = 7;
								return campaign.methods.approversCount().call();

							case 7:
								approversCount = _context.sent;
								_context.next = 10;
								return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
									return campaign.methods.requests(index).call();
								}));

							case 10:
								requests = _context.sent;
								return _context.abrupt("return", { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

							case 12:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return RequestIndexPage;
}(_react.Component);

exports.default = RequestIndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkxheW91dCIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleFBhZ2UiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsImFwcHJvdmVyc0NvdW50IiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyZW5kZXJSb3dzIiwicmVxdWVzdENvdW50IiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFROztBQUNqQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7OytCQWtCUTtnQkFDWjs7ZUFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2xEOzJCQUNDLEFBQUM7U0FBRCxBQUNLLEFBQ0o7VUFGRCxBQUVNLEFBQ0w7Y0FIRCxBQUdVLEFBQ1Q7Y0FBUyxPQUFBLEFBQUssTUFKZixBQUlxQixBQUNwQjtxQkFBZ0IsT0FBQSxBQUFLLE1BTHRCLEFBSzRCOztnQkFMNUI7a0JBREQsQUFDQyxBQVFEO0FBUkM7QUFDQyxLQUREO0FBRkYsQUFBTyxBQVdQLElBWE87Ozs7MkJBYUM7T0FBQSxBQUNBLFNBREEsQUFDa0MsdUJBRGxDLEFBQ0E7T0FEQSxBQUNRLE1BRFIsQUFDa0MsdUJBRGxDLEFBQ1E7T0FEUixBQUNhLGFBRGIsQUFDa0MsdUJBRGxDLEFBQ2E7T0FEYixBQUN5QixPQUR6QixBQUNrQyx1QkFEbEMsQUFDeUIsQUFFakM7OzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSxpQ0FBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDO2FBQUQsQUFFQzthQUZELEFBRVMsQUFDUjtXQUFPLEVBQUUsaUJBSFYsQUFHUSxBQUFtQjs7ZUFIM0I7aUJBQUE7QUFBQTtBQUNDLE1BTEosQUFFQyxBQUNDLEFBQ0MsQUFTRixrQ0FBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQ7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRDs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSx1QkFBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUZELEFBRUMsQUFDQSxnQ0FBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUhELEFBR0MsQUFDQSwyQkFBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUpELEFBSUMsQUFDQSw4QkFBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUxELEFBS0MsQUFDQSxrQ0FBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQU5ELEFBTUMsQUFDQSw0QkFBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQVRILEFBQ0MsQUFDQyxBQU9DLEFBR0YsK0JBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUFPO0FBQVA7QUFBQSxXQXpCRixBQWFDLEFBWUMsQUFBTyxBQUFLLEFBRWIsZ0NBQUEsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFBWSxlQUFBLEFBQUssTUFBakIsQUFBdUIsY0E1QnpCLEFBQ0MsQUEyQkMsQUFHRjs7Ozs7d0csQUFqRTRCOzs7OztZQUNwQjtBLGtCQUFZLE0sQUFBTSxNLEFBQWxCLEFBQ0Y7QSxtQkFBVyx3QixBQUFBLEFBQVM7O2VBQ0MsU0FBQSxBQUFTLFFBQVQsQUFBaUIsbUIsQUFBakIsQUFBb0M7O1lBQXpEO0E7O2VBQ3VCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGlCLEFBQWpCLEFBQWtDOztZQUF6RDtBOztpQ0FFaUIsQUFBUSxVQUN4QixTQUFOLEFBQU0sQUFBUyxlQUFmLEFBQ0UsT0FERixBQUVFLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3hCO2dCQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLE9BQWpDLEFBQU8sQUFBaUMsQUFDeEM7QSxBQUxvQixBQUN0QixTQUFBLENBRHNCOztZQUFqQjtBO3lDQVFDLEVBQUUsU0FBRixTQUFXLFVBQVgsVUFBcUIsY0FBckIsY0FBbUMsZ0IsQUFBbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRFQsQSxBQXJFK0I7O2tCQXFFL0IsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmVsaXhsZXBvdXRyZS9Eb2N1bWVudHMvd2ViZGV2L2V0aC1jb3Vyc2Uva2lja3N0YXJ0In0=