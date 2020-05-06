const Mutations = {
  async createItem(parents, args, ctx, info) {
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );

    return item;
  },
};

module.exports = Mutations;
