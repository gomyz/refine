export const usuariosResource = {
  name: "usuarios",
  meta: {
    select: `
      *,
      pessoa:pessoas!usuarios_pessoa_id_fkey(id,nome,email,telefone,celular),
      perfil:perfis!usuarios_perfil_id_fkey(id,descricao,permissoes)
    `,
    canDelete: true,
  }
}; 