
const Resolver = {
    Query: {
        getTopTen: (_, args, { dataSources }) =>
            dataSources.queryAPI.getVideo(args),
        getVideoByID: (_, args, { dataSources }) =>
            dataSources.queryAPI.getVideoByID(args),
        hello: (_, args, { dataSources }) =>
            dataSources.queryAPI.printArgs(args),
    },
    Mutation: {
        uploadFile: (_, args, { dataSources }) => {
            //uploadFile bc this could be anything
            console.log("resolver args: ", args)
            dataSources.mutationAPI.uploadFile(args)
        }
    }
}

module.exports = Resolver;