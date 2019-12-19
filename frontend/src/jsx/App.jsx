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
const sampleIssue = {  status: 'New', owner: 'Pieta',  title: 'Completion date should be optional', };


class IssueFilter extends React.Component{
	render(){
		return(
			<div>
				Placeholder IssueFilter
			</div>
		);
	}
}



// if component only have props, it can to represent as function
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
function IssueTable(props){
		const issuesRows=props.issues.map(issue => <IssueRow key={issue.id}  issue={issue}></IssueRow>);
		// const rowStyle = {border:"1px solid silver", padding:4};
		return(			
			<table className="bordered-table">
				<thead>
					<tr>						          
					 	<th>ID</th>            
					 	<th>Status</th>            
					 	<th>Owner</th>            
					 	<th>Created</th>            
					 	<th>Effort</th>            
					 	<th>Due Date</th>            
					 	<th>Title</th>          						 
					</tr>
				</thead>
				<tbody>
					{issuesRows}					
				</tbody>
			</table>
		);

}
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

const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');
function jsonDateReviver(key,value)
{
	if(dateRegex.test(value)) return new Date(value);
	return value;
}
function IssueRow(props){	
		const issue = props.issue;
		return(
			<tr>
				{/*<td style={style}>{this.props.issue_id}</td>*/}
				{/*<td style={style}>{this.props.issue_title}</td>*/}
				{/*<td style={style}>{this.props.children}</td>*/}
				      
			 	<td>{issue.id}</td>        
			 	<td>{issue.status}</td>        
			 	<td>{issue.owner}</td>        
			 	<td>{issue.created.toDateString()}</td>			 	
			 	<td>{issue.effort}</td>        
			 	<td>{issue.due ? issue.due.toDateString() : ''}</td> 			 	
			 	<td>{issue.title}</td>      				 
			</tr>
		);	
}

class IssueAdd extends React.Component{
	constructor()
	{
		super();
		// setTimeout(() => {      this.props.createIssue(sampleIssue);    }, 2000); 
		this.handleSubmit=this.handleSubmit.bind(this);		
	}
	handleSubmit(e)
	{
		e.preventDefault();
		// get form by name
		const form = document.forms.issueAdd;
		const issue={
			owner:form.owner.value,
			title:form.title.value,
			status:"new"
		}
		this.props.createIssue(issue);
		form.owner.value = "";
		form.title.value = "";
	}
	render(){
		return(
			 <form name="issueAdd" onSubmit={this.handleSubmit}>       
			  <input type="text" name="owner" placeholder="Owner" />        
			  <input type="text" name="title" placeholder="Title" />        
			  <button>Add</button>      
			 </form> 
		);
	}
}

class IssueList extends React.Component{
	constructor()
	{
		super();
		this.state = {issues:[]}
		this.createIssue = this.createIssue.bind(this); 		
	}

	createIssue(issue) {    
  		issue.id = this.state.issues.length + 1;    
  		issue.created = new Date();    
  		const newIssueList = this.state.issues.slice();    
  		newIssueList.push(issue);    
  		this.setState({ issues: newIssueList });  
  	}

	componentDidMount()
	{
		this.loadData();
	}

	async loadData()
	{
		// setTimeout(()=>{
		// 	this.setState({issues:initialIssues});
		// },500);
		const query = `
			query{
				issueList{
					id title status owner created effort due
				}
			}
		`;

		const response = await fetch('/graphql',{
			method:'POST',
			headers: { 'Content-Type': 'application/json'},
			body:JSON.stringify({query})
		});
		// const result = await response.json();
		const body = await response.text();
		const result = JSON.parse(body,jsonDateReviver);
		this.setState({issues:result.data.issueList});
	}

	render(){
		return(
			<React.Fragment>
				<h1>Inventio Issue Tracker</h1>
				<IssueFilter/>
				<hr/>
				<IssueTable issues={this.state.issues} />
				<hr/>
				{/* set bind, because I need the IssueList context "this", when createIssue is execute, use the issuelist context*/}
				{/* <IssueAdd createIssue={this.createIssue.bind(this)} />*/}
				<IssueAdd createIssue={this.createIssue} />
			</React.Fragment>
		);
	}
}

const element = <IssueList/>;
ReactDOM.render(element,document.getElementById('content'));
