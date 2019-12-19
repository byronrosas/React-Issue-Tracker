"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
var sampleIssue = {
  status: 'New',
  owner: 'Pieta',
  title: 'Completion date should be optional'
};

var IssueFilter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  function IssueFilter() {
    _classCallCheck(this, IssueFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(IssueFilter).apply(this, arguments));
  }

  _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, "Placeholder IssueFilter");
    }
  }]);

  return IssueFilter;
}(React.Component); // if component only have props, it can to represent as function
//class IssueTable extends React.Component{
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


function IssueTable(props) {
  var issuesRows = props.issues.map(function (issue) {
    return React.createElement(IssueRow, {
      key: issue.id,
      issue: issue
    });
  }); // const rowStyle = {border:"1px solid silver", padding:4};

  return React.createElement("table", {
    className: "bordered-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "ID"), React.createElement("th", null, "Status"), React.createElement("th", null, "Owner"), React.createElement("th", null, "Created"), React.createElement("th", null, "Effort"), React.createElement("th", null, "Due Date"), React.createElement("th", null, "Title"))), React.createElement("tbody", null, issuesRows));
} // if component only have props, it can to represent as function
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


var dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

function IssueRow(props) {
  var issue = props.issue;
  return React.createElement("tr", null, React.createElement("td", null, issue.id), React.createElement("td", null, issue.status), React.createElement("td", null, issue.owner), React.createElement("td", null, issue.created.toDateString()), React.createElement("td", null, issue.effort), React.createElement("td", null, issue.due ? issue.due.toDateString() : ''), React.createElement("td", null, issue.title));
}

var IssueAdd =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(IssueAdd, _React$Component2);

  function IssueAdd() {
    var _this;

    _classCallCheck(this, IssueAdd);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueAdd).call(this)); // setTimeout(() => {      this.props.createIssue(sampleIssue);    }, 2000); 

    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
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
        status: "new"
      };
      this.props.createIssue(issue);
      form.owner.value = "";
      form.title.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        name: "issueAdd",
        onSubmit: this.handleSubmit
      }, React.createElement("input", {
        type: "text",
        name: "owner",
        placeholder: "Owner"
      }), React.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Title"
      }), React.createElement("button", null, "Add"));
    }
  }]);

  return IssueAdd;
}(React.Component);

var IssueList =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(IssueList, _React$Component3);

  function IssueList() {
    var _this2;

    _classCallCheck(this, IssueList);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(IssueList).call(this));
    _this2.state = {
      issues: []
    };
    _this2.createIssue = _this2.createIssue.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(IssueList, [{
    key: "createIssue",
    value: function createIssue(issue) {
      issue.id = this.state.issues.length + 1;
      issue.created = new Date();
      var newIssueList = this.state.issues.slice();
      newIssueList.push(issue);
      this.setState({
        issues: newIssueList
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var query, response, body, result;
      return regeneratorRuntime.async(function loadData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // setTimeout(()=>{
              // 	this.setState({issues:initialIssues});
              // },500);
              query = "\n\t\t\tquery{\n\t\t\t\tissueList{\n\t\t\t\t\tid title status owner created effort due\n\t\t\t\t}\n\t\t\t}\n\t\t";
              _context.next = 3;
              return regeneratorRuntime.awrap(fetch('/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: query
                })
              }));

            case 3:
              response = _context.sent;
              _context.next = 6;
              return regeneratorRuntime.awrap(response.text());

            case 6:
              body = _context.sent;
              result = JSON.parse(body, jsonDateReviver);
              this.setState({
                issues: result.data.issueList
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("h1", null, "Inventio Issue Tracker"), React.createElement(IssueFilter, null), React.createElement("hr", null), React.createElement(IssueTable, {
        issues: this.state.issues
      }), React.createElement("hr", null), React.createElement(IssueAdd, {
        createIssue: this.createIssue
      }));
    }
  }]);

  return IssueList;
}(React.Component);

var element = React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('content'));