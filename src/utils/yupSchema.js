import * as yup from "yup";

export const shemaTaskEdit = yup.object().shape({
  titulo: yup.string().required("Título obrigatório"),
  descricao: yup.string().required("Descrição obrigatória"),
  prioridade: yup.string().required("Prioridade obrigatória"),
  responsavel: yup.string().required("Responsabilidade obrigatória"),
  deadline: yup.string().required("Deadline obrigatória"),
  status: yup.string().required("Status obrigatório"),
  categoria: yup.string().required("Categoria obrigatória"),
});

export const shemaTaskAdd = yup.object().shape({
  titulo: yup.string().required("Título obrigatório"),
  descricao: yup.string().required("Descrição obrigatória"),
  prioridade: yup.string().required("Prioridade obrigatória"),
  responsavel: yup.string().required("Responsabilidade obrigatória"),
  deadline: yup.string().required("Deadline obrigatória"),
});
