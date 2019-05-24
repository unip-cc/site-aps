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
			texto = ''
			break;
		case 3:
			texto = ''
			break;
		case 4:
			texto = ''
			break;
	}

	document.getElementById('descricao-imagem').innerHTML = texto;
}