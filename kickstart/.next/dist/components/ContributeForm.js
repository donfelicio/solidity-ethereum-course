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

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/felixlepoutre/Documents/webdev/eth-course/kickstart/components/ContributeForm.js";


var ContributeForm = function (_Component) {
	(0, _inherits3.default)(ContributeForm, _Component);

	function ContributeForm() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ContributeForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: "",
			errorMessage: "",
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();
								campaign = (0, _campaign2.default)(_this.props.address);

								_this.setState({ loading: true });
								_context.prev = 3;
								_context.next = 6;
								return _web2.default.eth.getAccounts();

							case 6:
								accounts = _context.sent;
								_context.next = 9;
								return campaign.methods.contribute().send({
									from: accounts[0],
									value: _web2.default.utils.toWei(_this.state.value, "ether")
								});

							case 9:
								_context.next = 14;
								break;

							case 11:
								_context.prev = 11;
								_context.t0 = _context["catch"](3);

								_this.setState({ errorMessage: _context.t0.message });

							case 14:
								_this.setState({ loading: false, value: "" });
								_routes.Router.replaceRoute("/campaigns/" + _this.props.address);

							case 16:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, _this2, [[3, 11]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ContributeForm, [{
		key: "render",
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, _react2.default.createElement("label", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, "Amount to contribute"), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.value,
				onChange: function onChange(event) {
					_this3.setState({
						value: event.target.value,
						errorMessage: ""
					});
				},
				label: "ether",
				labelPosition: "right",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			})), _react2.default.createElement(_semanticUiReact.Message, {
				error: true,
				header: "Oops!",
				content: this.state.errorMessage,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, "Contribute"));
		}
	}]);

	return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJtZXNzYWdlIiwicmVwbGFjZVJvdXRlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFPLEFBQVM7O0FBQy9CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7Ozs7OzswTixBQUNMO1VBQVEsQUFDQSxBQUNQO2lCQUZPLEFBRU8sQUFDZDtZLEFBSE8sQUFHRTtBQUhGLEFBQ1AsVyxBQUtEO3dGQUFXLGlCQUFBLEFBQU0sT0FBTjtrQkFBQTtrRUFBQTtlQUFBO3VDQUFBO1lBQ1Y7Y0FBQSxBQUFNLEFBQ0E7QUFGSSxtQkFFTyx3QkFBUyxNQUFBLEFBQUssTUFGckIsQUFFTyxBQUFvQixBQUVyQzs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxTQUpOLEFBSVYsQUFBYyxBQUFXO3dCQUpmO3dCQUFBO2VBTWMsY0FBQSxBQUFLLElBTm5CLEFBTWMsQUFBUzs7WUFBMUI7QUFORyw0QkFBQTt3QkFBQTt3QkFPSCxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7ZUFDN0IsU0FEa0MsQUFDbEMsQUFBUyxBQUNmO2dCQUFPLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsT0FUM0IsQUFPSCxBQUFtQyxBQUVqQyxBQUFtQztBQUZGLEFBQ3hDLFNBREs7O1lBUEc7d0JBQUE7QUFBQTs7WUFBQTt3QkFBQTt3Q0FZVDs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBWnJCLEFBWVQsQUFBYyxBQUFvQjs7WUFFbkM7Y0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsT0FBTyxPQUFoQyxBQUFjLEFBQXlCLEFBQ3ZDO3VCQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQWY3QixBQWVWLEFBQTZDOztZQWZuQztZQUFBO3dCQUFBOztBQUFBOzZCQUFBO0E7Ozs7Ozs7Ozs7MkJBa0JGO2dCQUNSOzswQkFDQyxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7ZUFBbkQ7aUJBQUEsQUFDQztBQUREO0lBQUEsa0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLHlDQUFBLEFBQUM7V0FDTyxLQUFBLEFBQUssTUFEYixBQUNtQixBQUNsQjtjQUFVLHlCQUFTLEFBQ2xCO1lBQUEsQUFBSzthQUNHLE1BQUEsQUFBTSxPQURBLEFBQ08sQUFDcEI7b0JBRkQsQUFBYyxBQUVDLEFBRWY7QUFKYyxBQUNiO0FBSkgsQUFRQztXQVJELEFBUU8sQUFDTjttQkFURCxBQVNlOztlQVRmO2lCQUhGLEFBQ0MsQUFFQyxBQVlEO0FBWkM7QUFDQyx3QkFXRixBQUFDO1dBQUQsQUFFQztZQUZELEFBRVMsQUFDUjthQUFTLEtBQUEsQUFBSyxNQUhmLEFBR3FCOztlQUhyQjtpQkFmRCxBQWVDLEFBS0E7QUFMQTtBQUNDLHVCQUlELEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztlQUFwQztpQkFBQTtBQUFBO01BckJGLEFBQ0MsQUFvQkMsQUFLRjs7Ozs7QSxBQXBEMkIsQUF1RDdCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbnRyaWJ1dGVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mZWxpeGxlcG91dHJlL0RvY3VtZW50cy93ZWJkZXYvZXRoLWNvdXJzZS9raWNrc3RhcnQifQ==