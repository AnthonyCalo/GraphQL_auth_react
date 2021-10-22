const gql = require("graphql-tag");
const graphql= require('graphql');
const { ModuleFilenameHelpers } = require("webpack");
const { GraphQLID } = require("graphql");
const {GraphQLObjectType,
GraphQLString}=graphql


const UserType=new GraphQLObjectType({
    name: "UserType",
    fields: {
        id: {type: GraphQLID},
        email: { type: GraphQLString}
    }
});

module.exports=UserType;