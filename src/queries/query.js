import gql from 'graphql-tag';

const user = gql`
    query user($name:String!,$password:String!) {
        user(name:$name,password:$password){
            name
            password
        }
    }
`;

const allUsers = gql`
    query {
        users {
            name
        }
    }
`;

const addUserMutation = gql`
    mutation user($name:String!,$password:String!) {
        addUser(name:$name, password:$password) {
            name
            password
        }
    }
`;

export {
    user,addUserMutation,allUsers
}