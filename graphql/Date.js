var { GraphQLScalarType } = require("graphql");
var { Kind } = require("graphql/language");

const Date = {
    IsoDate: new GraphQLScalarType({
        name: "IsoDate",
        description: "Date custom scaler type",
        parseValue(value) {
            return new Date(value);
        },
        serialize(value) {
            return value.toISOString();
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return parseValue(ast.value);
            }
            return null;
        }
    })
};

module.exports = Date;
