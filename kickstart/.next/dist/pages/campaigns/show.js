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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _ContributeForm = require("../../components/ContributeForm");

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _campaign = require("../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/felixlepoutre/Documents/webdev/eth-course/kickstart/pages/campaigns/show.js?entry";


var campaignShow = function (_Component) {
	(0, _inherits3.default)(campaignShow, _Component);

	function campaignShow() {
		(0, _classCallCheck3.default)(this, campaignShow);

		return (0, _possibleConstructorReturn3.default)(this, (campaignShow.__proto__ || (0, _getPrototypeOf2.default)(campaignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(campaignShow, [{
		key: "renderCards",
		value: function renderCards() {
			var _props = this.props,
			    balance = _props.balance,
			    manager = _props.manager,
			    minimumContribution = _props.minimumContribution,
			    requestsCount = _props.requestsCount,
			    approversCount = _props.approversCount;

			var items = [{
				header: manager,
				meta: "Address of manager",
				description: "The manager created this campaign and can create requests to withdraw money",
				style: { overflowWrap: "break-word" }
			}, {
				header: minimumContribution,
				meta: "Minimum contribution (wei)",
				description: "You must contribute at least this much wei to become an approver"
			}, {
				header: requestsCount,
				meta: "Number of Requests",
				description: "A request tries to withdraw money from the contract. Requests must be approved by approvers"
			}, {
				header: approversCount,
				meta: "Number of Approvers",
				description: "Number of people who have already donated to this campaign"
			}, {
				header: _web2.default.utils.fromWei(balance, "ether"),
				meta: "Campaign balance (ether)",
				description: "The balance is how much money this campaign has left to spend"
			}];
			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, _react2.default.createElement("h3", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, "Campaign show!"), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, _react2.default.createElement(_routes.Link, {
				route: "/campaigns/" + this.props.address + "/requests",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			}, "View requests")))))));
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var campaign, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								campaign = (0, _campaign2.default)(props.query.address);
								_context.next = 3;
								return campaign.methods.getSummary().call();

							case 3:
								summary = _context.sent;
								return _context.abrupt("return", {
									minimumContribution: summary[0],
									balance: summary[1],
									requestsCount: summary[2],
									approversCount: summary[3],
									manager: summary[4],
									address: props.query.address
								});

							case 5:
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

	return campaignShow;
}(_react.Component);

exports.default = campaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ29udHJpYnV0ZUZvcm0iLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwid2ViMyIsIkxpbmsiLCJjYW1wYWlnblNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7OztnQ0FlUztnQkFPVCxLQVBTLEFBT0o7T0FQSSxBQUVaLGlCQUZZLEFBRVo7T0FGWSxBQUdaLGlCQUhZLEFBR1o7T0FIWSxBQUlaLDZCQUpZLEFBSVo7T0FKWSxBQUtaLHVCQUxZLEFBS1o7T0FMWSxBQU1aLHdCQU5ZLEFBTVosQUFHRDs7T0FBTTtZQUNMLEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtpQkFIRCxBQUlFLEFBQ0Q7V0FBTyxFQUFFLGNBTkcsQUFDYixBQUtRLEFBQWdCO0FBTHhCLEFBQ0MsSUFGWTtZQVFiLEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtpQkFYWSxBQVFiLEFBSUU7QUFKRixBQUNDO1lBS0QsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO2lCQWpCWSxBQWNiLEFBSUU7QUFKRixBQUNDO1lBS0QsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO2lCQXZCWSxBQW9CYixBQUlFO0FBSkYsQUFDQztZQU1RLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ1QixBQUNTLEFBQTRCLEFBQ3BDO1VBRkQsQUFFTyxBQUNOO2lCQTdCRixBQUFjLEFBMEJiLEFBSUUsQUFHSDtBQVBDLEFBQ0M7d0NBTUssQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtlQUFuQjtpQkFBUCxBQUFPLEFBQ1A7QUFETztJQUFBOzs7OzJCQUdDLEFBQ1I7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLG1DQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7ZUFBcEI7aUJBQUEsQUFDRTtBQURGO1dBREQsQUFDQyxBQUNFLEFBQUssQUFHUCxnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO2VBQXBCO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO2VBQXBDO2lCQVBILEFBQ0MsQUFLQyxBQUNDLEFBR0Y7QUFIRTt5QkFHRCxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUM7MkJBQ3FCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQURqQzs7ZUFBQTtpQkFBQSxBQUdDO0FBSEQ7QUFDQyxzQkFFQSxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMseUNBQU8sU0FBUjtlQUFBO2lCQUFBO0FBQUE7TUFuQlAsQUFDQyxBQUVDLEFBVUMsQUFDQyxBQUNDLEFBR0MsQUFDQyxBQVFQOzs7Ozt3RyxBQXZGNEI7Ozs7O1lBQ3RCO0EsbUJBQVcsd0JBQVMsTUFBQSxBQUFNLE0sQUFBZixBQUFxQjs7ZUFFaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7WUFBOUM7QTs7OEJBRWdCLFFBRGYsQUFDZSxBQUFRLEFBQzdCO2tCQUFTLFFBRkgsQUFFRyxBQUFRLEFBQ2pCO3dCQUFlLFFBSFQsQUFHUyxBQUFRLEFBQ3ZCO3lCQUFnQixRQUpWLEFBSVUsQUFBUSxBQUN4QjtrQkFBUyxRQUxILEFBS0csQUFBUSxBQUNqQjtrQkFBUyxNQUFBLEFBQU0sTSxBQU5ULEFBTWU7QUFOZixBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUZILEEsQUEzRjJCOztrQkEyRjNCLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmVsaXhsZXBvdXRyZS9Eb2N1bWVudHMvd2ViZGV2L2V0aC1jb3Vyc2Uva2lja3N0YXJ0In0=