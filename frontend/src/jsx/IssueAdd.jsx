import React from 'react'; 
import PropTypes from 'prop-types';

export default class IssueAdd extends React.Component {	    
  constructor() {
    super();
    // setTimeout(() => {      this.props.createIssue(sampleIssue);    }, 2000);
    this.handleSubmit = this.handleSubmit.bind(this);    
    
    // verify, createIssue prop will be required
    IssueAdd.propTypes = {  createIssue: PropTypes.func.isRequired, };
  }

  handleSubmit(e) {
    e.preventDefault();
    // get form by name
    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
    };
    // this.props.createIssue(issue);
    const { createIssue } = this.props;
    createIssue(issue);
    form.owner.value = '';
    form.title.value = '';
  }

  render() {
    return (
      <form name="issueAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="owner" placeholder="Owner" />
        <input type="text" name="title" placeholder="Title" />
        <button type="submit">Add</button>
      </form>
    );
  }
}