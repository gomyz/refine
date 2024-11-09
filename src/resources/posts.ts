export const postsResource = {
  name: "blog_posts",
  meta: {
    select: `
      *,
      categorias(id,nome)
    `,
    canDelete: true
  }
}; 