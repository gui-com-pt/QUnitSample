function Deve_Validar_Codigo(codigoAluno) {
    var resultado = new OutputJS();
    if (codigoAluno.length <= 4) {
        resultado.Codigo = false;
        resultado.Mensagem = "O código de aluno deverá ter no mínimo 4 caracteres.";
    }
    else {
        resultado.Codigo = true;
        resultado.Mensagem = "Código de aluno validado com sucesso";
    }
    return resultado;
}