/* Arquivo JavaScript principal do site */

// A função abaixo "processa" os dados recebidos do formulário de contato, localizado na página contato.html
function contatoForm(){
	var nome = document.getElementById('nome').value;
	var email = document.getElementById('email').value;
	var assunto = document.getElementById('assunto').value;
	var mensagem = document.getElementById('nome').value;

	// Verifica se todos os campos do formulário estão preenchidos
	if(!isEmpty(nome) && !isEmpty(email) && isEmail(email) && !isEmpty(assunto) && !isEmpty(mensagem)){
		alert('Mensagem enviada com sucesso! Retornaremos o mais rápido possível!');
	} 
}

function isEmpty(valor){
	return valor.trim().length == 0;
}

function isEmail(valor){
	// Expressão regular p/ validação de e-mail (baseada na validação do HTML5)
	var expressaoRegular = "/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/";
	return valor.match(expressaoRegular) != null;	
}

function exibeDescricaoImagem(imagemSelecionada){
	var texto = '';

	switch(imagemSelecionada){
		case 1:
			texto = 'Tela de carregamento do game, exibindo uma animação com o logo do jogo ao fundo.'
			break;
		case 2:
			texto = 'Menu inicial do game. A partir daqui você já pode começar a sua diversão (e o seu aprendizado, é claro) no Lixeiro Simulator!'
			break;
		case 3:
			texto = 'Com o objetivo de ser o mais claro possível, todas as fases do game possuem um simples tutorial. Onde lhe é apresentado todas as instruções necessárias para aproveitar o máximo a experiência fornecida pelo game!'
			break;
		case 4:
			texto = "Essa é a fase 3 (três) do game, que também é conhecida como 'Reciclando'. Nesta etapa você tem 60 segundos para direcionar todos os resíduos que irão aparecer na tela para a cesta de lixo correta. Existe ao todo uma quantidade de 5 resíduos."
			break;
	}

	document.getElementById('descricao-imagem').innerHTML = texto;
}