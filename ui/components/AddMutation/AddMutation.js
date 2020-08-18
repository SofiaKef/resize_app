import React from 'react';
import { Button } from 'react-bootstrap';
import { compose, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { monthDayYear } from '../../../modules/dates';
import { documents } from '../../queries/Documents.gql';
import { addDocument } from '../../mutations/Documents.gql';

/*
const Docs = ({ data }) => (
  <React.Fragment>
    <h1>Blog Posts</h1>
    {data && data.documents && data.documents.map(({ _id, title, createdAt }) => (
      <div key={_id}>
        <p>Posted on {monthDayYear(createdAt)}</p>
        <h2>{title}</h2>
      </div>
    ))}
  </React.Fragment>
);

Docs.propTypes = {
  data: PropTypes.object.isRequired,
};

export default graphql(documents)(Docs);
*/
const newTitle = 'this is title';
const newBody = 'this is body';

const AddMutation = ({ data, addDoc }) => (
  <React.Fragment>
    <div>
      {data &&
        data.documents &&
        data.documents.map(({ _id, title, createdAt, body }) => (
          <div key={_id}>
            <p>
              Posted on
              {monthDayYear(createdAt)}
            </p>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
      <Button bsStyle="danger" onClick={() => addDoc({ variables: { newTitle, newBody } })}>
        Delete Post
      </Button>
    </div>
  </React.Fragment>
);

export default compose(
  graphql(documents),
  graphql(addDocument, {
    name: 'addDocument',
  }),
)(AddMutation);
