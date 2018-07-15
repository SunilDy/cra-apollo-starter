import gql from 'graphql-tag';

const user = gql`
    query user($name:String!,$password:String!) {
        user(name:$name,password:$password){
            name
            password
        }
    }
`;

export {
    user
}