webpackHotUpdate(6,{

/***/ 1226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(484);

var _routes = __webpack_require__(750);

var _Layout = __webpack_require__(1206);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(1220);

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = __webpack_require__(1229);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/felixlepoutre/Documents/webdev/eth-course/kickstart/pages/campaigns/requests/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/felixlepoutre/Documents/webdev/eth-course/kickstart/pages/campaigns/requests/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5mZDI0Y2EwY2Q4OGI0OGZmYWNjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzP2UzOTgyNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgUmVxdWVzdFJvdyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93XCI7XG5cbmNsYXNzIFJlcXVlc3RJbmRleFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG5cdFx0Y29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcblx0XHRjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuXHRcdGNvbnN0IHJlcXVlc3RDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcblx0XHRjb25zdCBhcHByb3ZlcnNDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZXJzQ291bnQoKS5jYWxsKCk7XG5cblx0XHRjb25zdCByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuXHRcdFx0QXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSlcblx0XHRcdFx0LmZpbGwoKVxuXHRcdFx0XHQubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKCk7XG5cdFx0XHRcdH0pXG5cdFx0KTtcblxuXHRcdHJldHVybiB7IGFkZHJlc3MsIHJlcXVlc3RzLCByZXF1ZXN0Q291bnQsIGFwcHJvdmVyc0NvdW50IH07XG5cdH1cblxuXHRyZW5kZXJSb3dzKCkge1xuXHRcdHJldHVybiB0aGlzLnByb3BzLnJlcXVlc3RzLm1hcCgocmVxdWVzdCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxSZXF1ZXN0Um93XG5cdFx0XHRcdFx0aWQ9e2luZGV4fVxuXHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0cmVxdWVzdD17cmVxdWVzdH1cblx0XHRcdFx0XHRhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9XG5cdFx0XHRcdFx0YXBwcm92ZXJzQ291bnQ9e3RoaXMucHJvcHMuYXBwcm92ZXJzQ291bnR9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgSGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHkgfSA9IFRhYmxlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxoMz5SZXF1ZXN0IGxpc3Q8L2gzPlxuXHRcdFx0XHQ8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxuXHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRwcmltYXJ5XG5cdFx0XHRcdFx0XHRcdGZsb2F0ZWQ9XCJyaWdodFwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IFwibWFyZ2luLWJvdHRvbVwiOiAxMCB9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRBZGQgcmVxdWVzdFxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxUYWJsZT5cblx0XHRcdFx0XHQ8SGVhZGVyPlxuXHRcdFx0XHRcdFx0PFJvdz5cblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+SUQ8L0hlYWRlckNlbGw+XG5cdFx0XHRcdFx0XHRcdDxIZWFkZXJDZWxsPkRlc2NyaXB0aW9uPC9IZWFkZXJDZWxsPlxuXHRcdFx0XHRcdFx0XHQ8SGVhZGVyQ2VsbD5BbW91bnQ8L0hlYWRlckNlbGw+XG5cdFx0XHRcdFx0XHRcdDxIZWFkZXJDZWxsPlJlY2lwaWVudDwvSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+QXBwcm92YWxDb3VudDwvSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XG5cdFx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0XHQ8L0hlYWRlcj5cblx0XHRcdFx0XHQ8Qm9keT57dGhpcy5yZW5kZXJSb3dzKCl9PC9Cb2R5PlxuXHRcdFx0XHQ8L1RhYmxlPlxuXHRcdFx0XHQ8ZGl2PkZvdW5kIHt0aGlzLnByb3BzLnJlcXVlc3RDb3VudH0gcmVxdWVzdHM8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEluZGV4UGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBTEE7QUFRQTtBQVJBO0FBQ0E7QUFRQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7O0FBUUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUE3REE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFFQTtBQUlBO0FBSEE7QUFDQTtBQUZBOztBQVFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=