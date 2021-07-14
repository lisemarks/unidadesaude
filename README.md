<h1 align="center"> Buscar unidade básica de saúde por bairro informado </h1>
<p align="justify"> Ao informar um bairro, o sistema lista todas as unidades básicas de saúde que estão localizadas nele. E mais, ao informar a latitude e longitude do seu endereço é mostrado a distancia em Kilometros da sua localidade até a unidade de saúde </p>

### Obs.: A aplicação considera apenas o bairro, ou seja, se o mesmo se repetir pelo Brasil é listado todos.

### API utilizada
[Unidades Básicas de Saúde (UBS)](https://dados.gov.br/dataset/unidades-basicas-de-saude-ubs/resource/1684b8d1-f8fd-4870-9556-31154b2d75c9)

### Features
- [x] Consulta por bairro
- [x] Consulta distância entre ccordenadas
- [ ] Consultar por bairro de um determinado estado
- [ ] Consultar por bairro de uma determinada cidade

### Pré-requisitos

Para testar a aplicação tenha instalado na sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código.

### Rodando a aplicação

# Clone o repositório
$ git clone <https://github.com/lisemarks/unidadesaude.git>

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ node index.js