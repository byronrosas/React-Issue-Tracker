import React from 'react';
import IssueFilter from './IssueFilter.jsx'; 
import IssueTable from './IssueTable.jsx'; 
import IssueAdd from './IssueAdd.jsx'; 
import graphQLFetch from '../graphQLFetch.js';
import { Route } from 'react-router-dom';
import URLSearchParams from 'url-search-params';

export default class IssueList extends React.Component{	
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
  }

  async createIssue(issue) {
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
    const query = `mutation issueAdd($issue: IssueInputs!) 
						{      
							issueAdd(issue: $issue) {        
								id      
							}    
						}`;

    // const response = await fetch('/graphql',{
    // 	method:'POST',
    // 	headers: { 'Content-Type': 'application/json'},
    // 	body: JSON.stringify({ query,variables:{issue} })
    // });

    // this.loadData();
    const data = await graphQLFetch(query, { issue });
    if (data) {
      this.loadData();
    }
  	}

  componentDidMount(prevProps) {
    this.loadData();

  }
  componentDidUpdate(prevProps) {    
    const { location: { search: prevSearch } } = prevProps;    
    const { location: { search } } = this.props;    
    if (prevSearch !== search) {      
      this.loadData();    
    }  
  }

  async loadData() {
    // setTimeout(()=>{
    // 	this.setState({issues:initialIssues});
    // },500);
    const { location: { search } } = this.props;    
    const params = new URLSearchParams(search);    
    const vars = {};    
    if (params.get('status')) vars.status = params.get('status');
 
    const query = `query issueList($status: StatusType) {      issueList (status: $status) {        id title status owner        created effort due      }    }`;   
    // const response = await fetch('/graphql',{
    // 	method:'POST',
    // 	headers: { 'Content-Type': 'application/json'},
    // 	body:JSON.stringify({query})
    // });
    // const result = await response.json();
    // const body = await response.text();
    // const result = JSON.parse(body,jsonDateReviver);
    // this.setState({issues:result.data.issueList});
    console.log("VARS",vars);
    const data = await graphQLFetch(query,vars);
    if (data) {
      this.setState({ issues: data.issueList });
    }
  }
  render() {
  	const { issues } = this.state;
    return (
      <div>
        <h1>Inventio Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={issues} />
        <hr />
        {/* set bind, because I need the IssueList context "this", */}
        {/* when createIssue is execute, use the issuelist context */}
        {/* <IssueAdd createIssue={this.createIssue.bind(this)} /> */}
        <IssueAdd createIssue={this.createIssue} />
        <hr />
        <Route path="issue/:id" component={IssueDetail} />
      </div>
    );
  }
}

