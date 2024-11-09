export const equipamentosResource = {
  name: "equipamentos",
  meta: {
    select: `
      *,
      responsavel:pessoas!equipamentos_responsavel_id_fkey(id,nome,telefone,celular)
    `,
    canDelete: true,
  }
};