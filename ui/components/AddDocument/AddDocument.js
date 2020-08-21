import gql from 'graphql-tag';
import React from 'react';
import { graphql, ApolloProvider, withApollo } from 'react-apollo';
import { useMutation, useQuery, ApolloProvider as ApolloHooksProvider, useApolloClient } from 'react-apollo-hooks';

// query component independent from mutation
/*
const GET_DOCUMENTS = gql`
  query documents {
    documents {
      _id
      isPublic
      title
      updatedAt
      createdAt
    }
  }
`;

function GetDocuments({ onDocSelected }) {
  const { loading, error, data } = useQuery(GET_DOCUMENTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name="doc" onChange={onDocSelected}>
      {data.documents.map((doc) => (
        <option key={doc._id} value={doc.title}>
          {doc.title}
        </option>
      ))}
    </select>
  );
}

export default GetDocuments;
*/

// mutation component independent from query
/*
const ADD_DOCUMENT = gql`
  mutation addDocument($title: String, $body: String) {
    addDocument(title: $title, body: $body) {
      _id
      isPublic
      title
      body
      createdAt
      updatedAt
      owner
    }
  }
`;

const AddDocument = () => {
  let input;
  const [addDocument, { data }] = useMutation(ADD_DOCUMENT);
  const title = 'this is title';
  const body = 'this is body';
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addDocument({ variables: { title, body } });
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddDocument;
*/


/* part of debugging
//export default graphql(ADD_DOCUMENT, { name: 'addDocument' })(AddDocument);

const ApolloRoutes = graphql(ADD_DOCUMENT, { name: 'addDocument' })(AddDocument);
const ApolloRoutesWithApollo = withApollo(ApolloRoutes);

export default function AddDocumentClass() {
  //const apolloClient = useApolloClient();
  return (

    <ApolloProvider client={apolloClient}>
      <ApolloHooksProvider client={apolloClient}>
        <ApolloRoutesWithApollo />
        <ApolloRoutes />
      </ApolloHooksProvider>
      , document.getElementById('root')
    </ApolloProvider>
    , document.getElementById('root')
  );
}
*/
