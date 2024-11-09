export const veiculosResource = {
  name: "veiculos",
  meta: {
    select: `
      *,
      responsavel:pessoas!veiculos_responsavel_id_fkey(id,nome,telefone,celular),
      proprietario:pessoas!veiculos_proprietario_id_fkey(id,nome)
    `,
    canDelete: true,
  }
}; 