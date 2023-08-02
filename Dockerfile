# Use a imagem oficial do Node.js como imagem base (escolha a versão adequada para a sua aplicação)
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos necessários para a aplicação
COPY package*.json /app/

# Instale as dependências
RUN npm install

# Copie o restante da aplicação
COPY . /app/

# Exponha a porta que sua aplicação Nest.js está ouvindo (certifique-se de que corresponde à porta configurada na sua aplicação)
EXPOSE 3000

# Comando para executar a aplicação Nest.js em modo de produção
CMD ["npm", "run", "start:dev"]
