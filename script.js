const urlBase = "https://href.li/?https://rateioninja.info/area-do-aluno/cursos/?wpexp_sysead_download=true&conteudo_id=21257&conteudo_id_google_drive=";

function Geeks() {
  table = document.getElementById("tabela");

  for (i = 0; i < document.getElementsByTagName("li").length; i++) {

    element_name = document.getElementsByTagName("li")[i];

    nomeArquivoGoogleDrive = element_name.getAttributeNode("data-nome-arquivo-google-drive").value;
    idArquivoGoogleDrive = element_name.getAttributeNode("data-id-arquivo-google-drive").value;

    horario_modificacao = document.getElementsByTagName("span")[i].outerHTML;

    // Insere uma linha no fim da tabela.
    let newRow = table.insertRow();

    // Insere uma coluna na nova linha
    CellNomeArquivo = newRow.insertCell();
    // Insere conteúdo na coluna
    CellNomeArquivo.innerHTML = "<a href=" + urlBase + idArquivoGoogleDrive + ">" + nomeArquivoGoogleDrive + "</a> ";

    // Insere uma coluna na nova linha
    CelIdArquivo = newRow.insertCell();
    // Insere conteúdo na coluna
    CelIdArquivo.innerHTML = idArquivoGoogleDrive;

    // Insere uma coluna na nova linha
    CellHorarioModificacao = newRow.insertCell();
    // Insere conteúdo na coluna
    CellHorarioModificacao.innerHTML = horario_modificacao;

    //console.table([{nomeArquivoGoogleDrive},{idArquivoGoogleDrive}, {horario_modificacao}]);

  }

  var tr = document.getElementById("tablehead").style.display = "inherit";
}

function ComandosSql() {
  document.write("INSERT INTO MATERIA_AULA_01('NOME_ARQUIVO_GOOGLE_DRIVE','ID_ARQUIVO_GOOGLE_DRIVE','HORARIO_MODIFICACAO') VALUES('0_Noções Básicas.mp4','1LYMxW_zOtlHzgxCVUfPOkSHW8AKxEOXg','02/10/2020 15:07:13'");
}
