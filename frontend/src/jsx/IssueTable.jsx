import React from 'react';

import { Link } from 'react-router-dom';

function IssueRow({ issue }) {  
  // const { issue } = props;
  return (
    <tr>
      {/* <td style={style}>{this.props.issue_id}</td> */}
      {/* <td style={style}>{this.props.issue_title}</td> */}
      {/* <td style={style}>{this.props.children}</td> */}

      <td>{issue.id}</td>
      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{issue.created.toDateString()}</td>
      <td>{issue.effort}</td>
      <td>{issue.due ? issue.due.toDateString() : ''}</td>
      <td>{issue.title}</td>
      {/*<td><a href={`/#/edit/${issue.id}`}>Edit</a></td>*/}
      <td><Link to={`/edit/${issue.id}`}>Edit</Link></td>
    </tr>
  );
}

export default function IssueTable({ issues }) {  
  // const issuesRows = props.issues.map((issue) => <IssueRow key={issue.id} issue={issue} />);
  const issuesRows = issues.map((issue) => <IssueRow key={issue.id} issue={issue} />);
  // const rowStyle = {border:"1px solid silver", padding:4};
  return (
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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {issuesRows}
      </tbody>
    </table>
  );
}