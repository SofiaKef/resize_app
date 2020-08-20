import gql from 'graphql-tag';
import React from 'react';
import { graphql, ApolloProvider, withApollo } from 'react-apollo';
import { useMutation, ApolloProvider as ApolloHooksProvider, useApolloClient } from 'react-apollo-hooks';

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

/*
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