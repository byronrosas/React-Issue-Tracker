/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/graphQLFetch.js":
/*!*****************************!*\
  !*** ./src/graphQLFetch.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return graphQLFetch; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

function graphQLFetch(_x) {
  return _graphQLFetch.apply(this, arguments);
}

function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(query) {
    var variables,
        response,
        body,
        result,
        error,
        details,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            variables = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _context.prev = 1;
            _context.next = 4;
            return fetch(window.ENV.UI_API_ENDPOINT, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: query,
                variables: variables
              })
            });

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.text();

          case 7:
            body = _context.sent;
            result = JSON.parse(body, jsonDateReviver);

            if (result.errors) {
              error = result.errors[0];

              if (error.extensions.code === 'BAD_USER_INPUT') {
                details = error.extensions.exception.errors.join('\n');
                alert("".concat(error.message, ":\n ").concat(details));
              } else {
                alert("".concat(error.extensions.code, ": ").concat(error.message));
              }
            }

            return _context.abrupt("return", result.data);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            alert("Error in sending data to server: ".concat(_context.t0.message));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  }));
  return _graphQLFetch.apply(this, arguments);
}

/***/ }),

/***/ "./src/jsx/App.jsx":
/*!*************************!*\
  !*** ./src/jsx/App.jsx ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Page_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Page.jsx */ "./src/jsx/Page.jsx");






 // import IssueList from './IssueList.jsx'; 
// const element = (
// 	<div title="Outer div">
// 		<h1>Hello Word!</h1>
// 	</div>
// );
// ReactDOM.render(element,document.getElementById('content'));
// class HelloWorld extends React.Component{
// 	render(){
// 		const continents = ['Africa','America','Asia','Australia','Europe'];
// 		const helloContinents = Array.from(continents, c => `Hello ${c}!`);
// 		const message = helloContinents.join(' ');
// 		return (
// 			 <div title="Outer div">
// 			 	<h1>{message}</h1>
// 			 </div>
// 			);
// 	}
// }
// const element = <HelloWorld/>
// ReactDOM.render(element,document.getElementById('content'));
// const initialIssues = [  {
// 				id: 1, status: 'New', owner: 'Ravan', effort: 5,    created: new Date('2018-08-15'), due: undefined,    title: 'Error in console when clicking Add',
// 			},
// 			{
// 				id: 2, status: 'Assigned', owner: 'Eddie', effort: 14,    created: new Date('2018-08-16'), due: new Date('2018-08-30'),    title: 'Missing bottom border on panel',
// 			},
// 			];

/* eslint "react/react-in-jsx-scope": "off" */

/* eslint "react/jsx-no-undef": "off" */

/* eslint "no-alert": "off" */

/* eslint "react/no-multi-comp": "off" */
// const sampleIssue = { status: 'New', owner: 'Pieta', title: 'Completion date should be optional' };
// eslint-disable-next-line react/prefer-stateless-function
// class IssueFilter extends React.Component {
//   render() {
//     return (
//       <div>
// 				Placeholder IssueFilter
//       </div>
//     );
//   }
// }
// if component only have props, it can to represent as function
// class IssueTable extends React.Component{
// constructor(){
// super();
// this.state={issues:initialIssues}
// this.state={issues:[]}
// setTimeout(() => {      this.createIssue(sampleIssue);    }, 2000);
// }
//  	createIssue(issue) {
//  		issue.id = this.state.issues.length + 1;
//  		issue.created = new Date();
//  		const newIssueList = this.state.issues.slice();
//  		newIssueList.push(issue);
//  		this.setState({ issues: newIssueList });
//  	}
// componentDidMount()
// {
// 	this.loadData();
// }
// loadData()
// {
// 	setTimeout(()=>{
// 		this.setState({issues:initialIssues});
// 	},500);
// }
//	render(){
// const issues = [  {
// 		id: 1, status: 'New', owner: 'Ravan', effort: 5,    created: new Date('2018-08-15'), due: undefined,    title: 'Error in console when clicking Add',
// 	},
// 	{
// 		id: 2, status: 'Assigned', owner: 'Eddie', effort: 14,    created: new Date('2018-08-16'), due: new Date('2018-08-30'),    title: 'Missing bottom border on panel',
// 	},
// 	];
// const issuesRows=issues.map(issue => <IssueRow key={issue.id} rowStyle={rowStyle} issue={issue}></IssueRow>);
// const issuesRows=issues.map(issue => <IssueRow key={issue.id}  issue={issue}></IssueRow>);
// const issuesRows=this.state.issues.map(issue => <IssueRow key={issue.id}  issue={issue}></IssueRow>);
// const issuesRows=this.props.issues.map(issue => <IssueRow key={issue.id}  issue={issue}></IssueRow>);
// const rowStyle = {border:"1px solid silver", padding:4};
// return(
// 	<table className="bordered-table">
// 		<thead>
// 			<tr>
// 			 	<th>ID</th>
// 			 	<th>Status</th>
// 			 	<th>Owner</th>
// 			 	<th>Created</th>
// 			 	<th>Effort</th>
// 			 	<th>Due Date</th>
// 			 	<th>Title</th>
// 			</tr>
// 		</thead>
// 		<tbody>
// 			{issuesRows}
// 		</tbody>
// 	</table>
// );
// }
// }
// function IssueTable({ issues }) {  
//   // const issuesRows = props.issues.map((issue) => <IssueRow key={issue.id} issue={issue} />);
//   const issuesRows = issues.map((issue) => <IssueRow key={issue.id} issue={issue} />);
//   // const rowStyle = {border:"1px solid silver", padding:4};
//   return (
//     <table className="bordered-table">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Status</th>
//           <th>Owner</th>
//           <th>Created</th>
//           <th>Effort</th>
//           <th>Due Date</th>
//           <th>Title</th>
//         </tr>
//       </thead>
//       <tbody>
//         {issuesRows}
//       </tbody>
//     </table>
//   );
// }
// if component only have props, it can to represent as function
// class IssueRow extends React.Component{
// 	render(){
// 		// const style = this.props.rowStyle;
// 		const issue = this.props.issue;
// 		return(
// 			<tr>
// 				{/*<td style={style}>{this.props.issue_id}</td>*/}
// 				{/*<td style={style}>{this.props.issue_title}</td>*/}
// 				{/*<td style={style}>{this.props.children}</td>*/}
// 			 	<td>{issue.id}</td>
// 			 	<td>{issue.status}</td>
// 			 	<td>{issue.owner}</td>
// 			 	<td>{issue.created.toDateString()}</td>
// 			 	<td>{issue.effort}</td>
// 			 	<td>{issue.due ? issue.due.toDateString() : ''}</td>
// 			 	<td>{issue.title}</td>
// 			</tr>
// 		);
// 	}
// }
// const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');
// function jsonDateReviver(key, value) {
//   if (dateRegex.test(value)) return new Date(value);
//   return value;
// }
// function IssueRow({ issue }) {  
//   // const { issue } = props;
//   return (
//     <tr>
//       {/* <td style={style}>{this.props.issue_id}</td> */}
//       {/* <td style={style}>{this.props.issue_title}</td> */}
//       {/* <td style={style}>{this.props.children}</td> */}
//       <td>{issue.id}</td>
//       <td>{issue.status}</td>
//       <td>{issue.owner}</td>
//       <td>{issue.created.toDateString()}</td>
//       <td>{issue.effort}</td>
//       <td>{issue.due ? issue.due.toDateString() : ''}</td>
//       <td>{issue.title}</td>
//     </tr>
//   );
// }

/* globals React ReactDOM PropTypes */
// class IssueAdd extends React.Component {	    
//   constructor() {
//     super();
//     // setTimeout(() => {      this.props.createIssue(sampleIssue);    }, 2000);
//     this.handleSubmit = this.handleSubmit.bind(this);    
//     // verify, createIssue prop will be required
//     IssueAdd.propTypes = {  createIssue: PropTypes.func.isRequired, };
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     // get form by name
//     const form = document.forms.issueAdd;
//     const issue = {
//       owner: form.owner.value,
//       title: form.title.value,
//       due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
//     };
//     // this.props.createIssue(issue);
//     const { createIssue } = this.props;
//     createIssue(issue);
//     form.owner.value = '';
//     form.title.value = '';
//   }
//   render() {
//     return (
//       <form name="issueAdd" onSubmit={this.handleSubmit}>
//         <input type="text" name="owner" placeholder="Owner" />
//         <input type="text" name="title" placeholder="Title" />
//         <button type="submit">Add</button>
//       </form>
//     );
//   }
// }
// async function graphQLFetch(query, variables = {}) {
//   try {
//     const response = await fetch(window.ENV.UI_API_ENDPOINT, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ query, variables }),
//     });
//     const body = await response.text();
//     const result = JSON.parse(body, jsonDateReviver);
//     if (result.errors) {
//       const error = result.errors[0];
//       if (error.extensions.code === 'BAD_USER_INPUT') {
//         const details = error.extensions.exception.errors.join('\n');
//         alert(`${error.message}:\n ${details}`);
//       } else {
//         alert(`${error.extensions.code}: ${error.message}`);
//       }
//     }
//     return result.data;
//   } catch (e) {
// 		 alert(`Error in sending data to server: ${e.message}`);
//   }
// }
// class IssueList extends React.Component {
//   constructor() {
//     super();
//     this.state = { issues: [] };
//     this.createIssue = this.createIssue.bind(this);
//   }
//   async createIssue(issue) {
//   		// issue.id = this.state.issues.length + 1;
//   		// issue.created = new Date();
//   		// const newIssueList = this.state.issues.slice();
//   		// newIssueList.push(issue);
//   		// this.setState({ issues: newIssueList });
//   	// 	const query = `mutation {
//     //   issueAdd(issue:{
//     //     title: "${issue.title}",
//     //     owner: "${issue.owner}",
//     //     due: "${issue.due.toISOString()}",
//     //   }) {
//     //     id
//     //   }
//     // }`;
//     // issue.due = issue.due.toISOString()
//     console.log('CREATE');
//     console.log(issue);
//     const query = `mutation issueAdd($issue: IssueInputs!) 
// 						{      
// 							issueAdd(issue: $issue) {        
// 								id      
// 							}    
// 						}`;
//     // const response = await fetch('/graphql',{
//     // 	method:'POST',
//     // 	headers: { 'Content-Type': 'application/json'},
//     // 	body: JSON.stringify({ query,variables:{issue} })
//     // });
//     // this.loadData();
//     const data = await graphQLFetch(query, { issue });
//     if (data) {
//       this.loadData();
//     }
//   	}
//   componentDidMount() {
//     this.loadData();
//   }
//   async loadData() {
//     // setTimeout(()=>{
//     // 	this.setState({issues:initialIssues});
//     // },500);
//     const query = `
// 			query{
// 				issueList{
// 					id title status owner created effort due
// 				}
// 			}
// 		`;
//     // const response = await fetch('/graphql',{
//     // 	method:'POST',
//     // 	headers: { 'Content-Type': 'application/json'},
//     // 	body:JSON.stringify({query})
//     // });
//     // const result = await response.json();
//     // const body = await response.text();
//     // const result = JSON.parse(body,jsonDateReviver);
//     // this.setState({issues:result.data.issueList});
//     const data = await graphQLFetch(query);
//     if (data) {
//       this.setState({ issues: data.issueList });
//     }
//   }
//   render() {
//   	const { issues } = this.state;
//     return (
//       <>
//         <h1>Inventio Issue Tracker</h1>
//         <IssueFilter />
//         <hr />
//         <IssueTable issues={issues} />
//         <hr />
//         {/* set bind, because I need the IssueList context "this", */}
//         {/* when createIssue is execute, use the issuelist context */}
//         {/* <IssueAdd createIssue={this.createIssue.bind(this)} /> */}
//         <IssueAdd createIssue={this.createIssue} />
//       </>
//     );
//   }
// }
// const element = <IssueList />;
// import IssueList from './IssueList.jsx';
// const element = <IssueList />;

var element = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["HashRouter"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Page_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null));
react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render(element, document.getElementById('content'));

if (false) {}

/***/ }),

/***/ "./src/jsx/Contents.jsx":
/*!******************************!*\
  !*** ./src/jsx/Contents.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _IssueList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueList.jsx */ "./src/jsx/IssueList.jsx");
/* harmony import */ var _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueReport.jsx */ "./src/jsx/IssueReport.jsx");
/* harmony import */ var _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssueEdit.jsx */ "./src/jsx/IssueEdit.jsx");






var NotFound = function NotFound() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Page not found");
};

function Contents() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    exact: true,
    from: "/",
    to: "/issues"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/issues",
    component: _IssueList_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/edit/:id",
    component: _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/report",
    component: _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: NotFound
  }));
}

/***/ }),

/***/ "./src/jsx/IssueAdd.jsx":
/*!******************************!*\
  !*** ./src/jsx/IssueAdd.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueAdd; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var IssueAdd =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueAdd, _React$Component);

  function IssueAdd() {
    var _this;

    _classCallCheck(this, IssueAdd);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueAdd).call(this)); // setTimeout(() => {      this.props.createIssue(sampleIssue);    }, 2000);

    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this)); // verify, createIssue prop will be required

    IssueAdd.propTypes = {
      createIssue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    };
    return _this;
  }

  _createClass(IssueAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault(); // get form by name

      var form = document.forms.issueAdd;
      var issue = {
        owner: form.owner.value,
        title: form.title.value,
        due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10)
      }; // this.props.createIssue(issue);

      var createIssue = this.props.createIssue;
      createIssue(issue);
      form.owner.value = '';
      form.title.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        name: "issueAdd",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "owner",
        placeholder: "Owner"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Title"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit"
      }, "Add"));
    }
  }]);

  return IssueAdd;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/jsx/IssueEdit.jsx":
/*!*******************************!*\
  !*** ./src/jsx/IssueEdit.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function IssueEdit(_ref) {
  var match = _ref.match;
  var id = match.params.id;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "This is a placeholder for editing issue ".concat(id));
}

/***/ }),

/***/ "./src/jsx/IssueFilter.jsx":
/*!*********************************!*\
  !*** ./src/jsx/IssueFilter.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint "react/prefer-stateless-function": "off" */
 // import { Link } from 'react-router-dom';



var IssueFilter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  function IssueFilter() {
    var _this;

    _classCallCheck(this, IssueFilter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueFilter).call(this));
    _this.onChangeStatus = _this.onChangeStatus.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IssueFilter, [{
    key: "onChangeStatus",
    value: function onChangeStatus(e) {
      var status = e.target.value;
      var history = this.props.history;
      history.push({
        pathname: '/issues',
        search: status ? "?status=".concat(status) : ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Status:", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        onChange: this.onChangeStatus
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "(All)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "New"
      }, "New"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Assigned"
      }, "Assigned"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Fixed"
      }, "Fixed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Closed"
      }, "Closed")));
    }
  }]);

  return IssueFilter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // withRouter; exports wrapper with history


/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(IssueFilter)); // export default class IssueFilter extends React.Component {
//   render() {
//     return (
//       <div>
// 				// Placeholder IssueFilter
// 				{/*<a href="/#/issues">All Issues</a>*/}
// 				<Link to="/issues">All Issues</Link>
// 				{ ' | ' }
// 				{ <a href="/#/issues?status=New">New Issues</a>}
// 				<Link to={{ pathname:'/issues', search:'?status=New'}}>New Issues</Link>
// 				{ ' | ' }
// 				{/* <a href="/#/issues?status=Assigned">Assigned Issues</a>*/}
// 				<Link to={{ pathname:'/issues', search:'?status=Assigned'}}>Assigned Issues</Link>
//       </div>
//     );
//   }
// }

/***/ }),

/***/ "./src/jsx/IssueList.jsx":
/*!*******************************!*\
  !*** ./src/jsx/IssueList.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/jsx/IssueFilter.jsx");
/* harmony import */ var _IssueTable_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueTable.jsx */ "./src/jsx/IssueTable.jsx");
/* harmony import */ var _IssueAdd_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueAdd.jsx */ "./src/jsx/IssueAdd.jsx");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url-search-params */ "./node_modules/url-search-params/build/url-search-params.node.js");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(url_search_params__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var IssueList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueList, _React$Component);

  function IssueList() {
    var _this;

    _classCallCheck(this, IssueList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueList).call(this));
    _this.state = {
      issues: []
    };
    _this.createIssue = _this.createIssue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IssueList, [{
    key: "createIssue",
    value: function () {
      var _createIssue = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(issue) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // issue.id = this.state.issues.length + 1;
                // issue.created = new Date();
                // const newIssueList = this.state.issues.slice();
                // newIssueList.push(issue);
                // this.setState({ issues: newIssueList });
                // 	const query = `mutation {
                //   issueAdd(issue:{
                //     title: "${issue.title}",
                //     owner: "${issue.owner}",
                //     due: "${issue.due.toISOString()}",
                //   }) {
                //     id
                //   }
                // }`;
                // issue.due = issue.due.toISOString()
                console.log('CREATE');
                console.log(issue);
                query = "mutation issueAdd($issue: IssueInputs!) \n\t\t\t\t\t\t{      \n\t\t\t\t\t\t\tissueAdd(issue: $issue) {        \n\t\t\t\t\t\t\t\tid      \n\t\t\t\t\t\t\t}    \n\t\t\t\t\t\t}"; // const response = await fetch('/graphql',{
                // 	method:'POST',
                // 	headers: { 'Content-Type': 'application/json'},
                // 	body: JSON.stringify({ query,variables:{issue} })
                // });
                // this.loadData();

                _context.next = 5;
                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__["default"])(query, {
                  issue: issue
                });

              case 5:
                data = _context.sent;

                if (data) {
                  this.loadData();
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createIssue(_x) {
        return _createIssue.apply(this, arguments);
      }

      return createIssue;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount(prevProps) {
      this.loadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevSearch = prevProps.location.search;
      var search = this.props.location.search;

      if (prevSearch !== search) {
        this.loadData();
      }
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var search, params, vars, query, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // setTimeout(()=>{
                // 	this.setState({issues:initialIssues});
                // },500);
                search = this.props.location.search;
                params = new url_search_params__WEBPACK_IMPORTED_MODULE_6___default.a(search);
                vars = {};
                if (params.get('status')) vars.status = params.get('status');
                query = "query issueList($status: StatusType) {      issueList (status: $status) {        id title status owner        created effort due      }    }"; // const response = await fetch('/graphql',{
                // 	method:'POST',
                // 	headers: { 'Content-Type': 'application/json'},
                // 	body:JSON.stringify({query})
                // });
                // const result = await response.json();
                // const body = await response.text();
                // const result = JSON.parse(body,jsonDateReviver);
                // this.setState({issues:result.data.issueList});

                console.log("VARS", vars);
                _context2.next = 8;
                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__["default"])(query, vars);

              case 8:
                data = _context2.sent;

                if (data) {
                  this.setState({
                    issues: data.issueList
                  });
                }

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "render",
    value: function render() {
      var issues = this.state.issues;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Inventio Issue Tracker"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueTable_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        issues: issues
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueAdd_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        createIssue: this.createIssue
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
        path: "issue/:id",
        component: IssueDetail
      }));
    }
  }]);

  return IssueList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/jsx/IssueReport.jsx":
/*!*********************************!*\
  !*** ./src/jsx/IssueReport.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueReport; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function IssueReport() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "This is a placeholder for the Issue Report"));
}

/***/ }),

/***/ "./src/jsx/IssueTable.jsx":
/*!********************************!*\
  !*** ./src/jsx/IssueTable.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



function IssueRow(_ref) {
  var issue = _ref.issue;
  // const { issue } = props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.owner), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.created.toDateString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.effort), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.due ? issue.due.toDateString() : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/edit/".concat(issue.id)
  }, "Edit")));
}

function IssueTable(_ref2) {
  var issues = _ref2.issues;
  // const issuesRows = props.issues.map((issue) => <IssueRow key={issue.id} issue={issue} />);
  var issuesRows = issues.map(function (issue) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IssueRow, {
      key: issue.id,
      issue: issue
    });
  }); // const rowStyle = {border:"1px solid silver", padding:4};

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "bordered-table"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Created"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Effort"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Due Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, issuesRows));
}

/***/ }),

/***/ "./src/jsx/Page.jsx":
/*!**************************!*\
  !*** ./src/jsx/Page.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contents_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contents.jsx */ "./src/jsx/Contents.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




function NavBar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/"
  }, "Home"), ' | ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/issues"
  }, "Issue List"), ' | ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/report"
  }, "Report"));
}

function Page() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBar, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contents_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/jsx/App.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/jsx/App.jsx */"./src/jsx/App.jsx");


/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map