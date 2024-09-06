function pesquisar(){
  let section = document.getElementById("produtos")
  let pesquisa = ""

  let campoPesquisa = document.getElementById("campo-pesquisa").value 
if (campoPesquisa == "") {
  section.innerHTML =`<p>Nada foi encontrado.</p>`
    
    return;
}
let nome = "";
for (let processador of processadores) {
  nome= processador.nome.toLocaleLowerCase();
  if (nome.includes(campoPesquisa)){
      pesquisa += `
      <div class="itens">
      <h2>${processador.nome}</h2>
      <img src="${processador.foto}" alt="">
      <p>
      ${processador.descricao}
      </p>
      <a href=${processador.compra} target="_blank">Link de Compra</a>
      </div>`}
  if (!pesquisa) {
    pesquisa =`<p>Nada foi encontrado,  Caso seja um processador entre em conato conosco para adicionarmos a lista</p>`
      }
  }
section.innerHTML = pesquisa
}
