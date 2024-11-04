const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-conteiner__texto')
    paragrafo.innerHTML`voce sabia que o mundo ${dados.total_pessoas_mundo} de pessoas que aproximadamente${dados.total_pessoas_conectadas} estao conectadas em redes sociais passam em media ${dados.tempo_medio} horas conectadas.`
}

vizualizarInformacoesGlobais()