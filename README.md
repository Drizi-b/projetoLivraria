# 📚 Terasteel Bookstore - Documentação do Projeto

## 📋 Visão Geral

A **Terasteel Bookstore** é uma livraria online desenvolvida como projeto acadêmico, oferecendo uma experiência completa de e-commerce para venda de livros. O sistema permite navegação por categorias, filtros, carrinho de compras e simulação de checkout.

## 🎯 Objetivos do Projeto

- Criar uma experiência de e-commerce funcional para livros
- Implementar sistema de carrinho de compras inteligente
- Oferecer interface responsiva e intuitiva
- Simular processo completo de compra online
- Demonstrar integração frontend/backend

## 🏗️ Arquitetura do Sistema

### Frontend
- **Tecnologias**: HTML5, CSS3, JavaScript (Vanilla)
- **Estrutura**: SPA (Single Page Application) com navegação por seções
- **Responsividade**: Design adaptável para diferentes dispositivos

### Backend
- **Tecnologia**: Node.js com Express.js
- **Banco de Dados**: PostgreSQL
- **API**: RESTful para operações CRUD de livros

## 📁 Estrutura de Arquivos

```
projetoLivraria/
├── frontend/
│   ├── assets/                 # Imagens e recursos
│   │   ├── logo.png           # Logo da loja
│   │   ├── logo.ico           # Favicon
│   │   ├── foto_*.jpeg        # Fotos da equipe
│   │   └── livro_*.jpg        # Capas dos livros
│   ├── index.html             # Página principal
│   ├── cadastro.html          # Cadastro de livros
│   ├── contato.html           # Formulário de contato
│   ├── informacoes.html       # Sobre a empresa
│   ├── checkout.html          # Finalização de compra
│   ├── detalhe.html           # Detalhes do livro
│   ├── cadastrarUsuario.html  # Cadastro de usuários
│   ├── script.js              # Lógica principal
│   ├── cadastro.js            # Lógica do cadastro
│   ├── checkout.js            # Lógica do checkout
│   ├── detalhe.js             # Lógica dos detalhes
│   └── styles.css             # Estilos globais
├── backend/
│   ├── routes/
│   │   └── livros.js          # Rotas da API de livros
│   ├── server.js              # Servidor principal
│   └── package.json           # Dependências do backend
└── README.md                  # Esta documentação
```

## 🚀 Funcionalidades Principais

### 1. Página Inicial (index.html)
- **Hero Section**: Promoção Black Week com countdown
- **Catálogo de Livros**: Exibição dinâmica com filtros
- **Categorias**: Fantasia, Terror, Autoajuda, Ficção Científica, Clássicos, Mangás
- **Carrinho**: Sidebar com resumo em tempo real
- **Benefícios**: Seção destacando vantagens da loja

### 2. Sistema de Carrinho
- Adição/remoção de itens
- Controle de quantidade com validação de estoque
- Cálculo automático do total
- Persistência durante a sessão
- Interface sidebar responsiva

### 3. Filtros e Busca
- **Filtro por Categoria**: Todos, Fantasia, Terror, Autoajuda, etc.
- **Filtro de Promoção**: Apenas itens em promoção
- **Busca Textual**: Por título, autor ou categoria
- **Combinação de Filtros**: Múltiplos filtros simultâneos

### 4. Gestão de Livros (Backend)
- **CRUD Completo**: Create, Read, Update, Delete
- **Validação**: Campos obrigatórios e tipos de dados
- **Controle de Estoque**: Verificação de disponibilidade
- **API RESTful**: Endpoints padronizados

### 5. Páginas Secundárias
- **Contato**: Formulário com validação
- **Informações**: História da empresa e equipe
- **Cadastro**: Adição de novos livros
- **Checkout**: Simulação de compra completa

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Estilização e responsividade
- **JavaScript ES6+**: Lógica de negócio
- **Fetch API**: Comunicação com backend

### Backend
- **Node.js**: Runtime JavaScript
- **Express.js**: Framework web
- **PostgreSQL**: Banco de dados relacional
- **pg**: Driver PostgreSQL para Node.js
- **CORS**: Middleware para requisições cross-origin

## 📊 Banco de Dados

### Tabela: livros
```sql
CREATE TABLE livros (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    autor VARCHAR(255),
    categoria VARCHAR(100),
    preco DECIMAL(10,2) NOT NULL,
    descricao TEXT,
    estoque INTEGER NOT NULL,
    promo BOOLEAN DEFAULT FALSE,
    imagem VARCHAR(255)
);
```

## 🔧 Configuração e Instalação

### Pré-requisitos
- Node.js (v14+)
- PostgreSQL (v12+)
- Navegador moderno

### Backend
```bash
cd backend
npm install
npm start
```

### Configuração do Banco
```javascript
// backend/routes/livros.js
const pool = new Pool({
  user: "postgres",
  host: "localhost", 
  database: "livraria",
  password: "123456",
  port: 5432,
});
```

### Frontend
Abrir `frontend/index.html` em um servidor local ou navegador.

## 📡 API Endpoints

### Livros
- `GET /livros` - Listar todos os livros
- `GET /livros/:id` - Buscar livro por ID
- `POST /livros` - Cadastrar novo livro
- `PUT /livros/:id` - Atualizar livro
- `DELETE /livros/:id` - Remover livro

### Exemplo de Requisição
```javascript
// Cadastrar livro
POST /livros
{
  "nome": "Dom Casmurro",
  "autor": "Machado de Assis", 
  "categoria": "Clássico",
  "preco": 29.90,
  "descricao": "Obra-prima da literatura brasileira",
  "estoque": 10,
  "promo": false
}
```

## 🎨 Design e UX

### Paleta de Cores
- **Primária**: #5a007a (Roxo)
- **Secundária**: #ffffff (Branco)
- **Destaque**: #ff6b35 (Laranja)
- **Texto**: #333333 (Cinza escuro)

### Componentes Principais
- **Header**: Logo, título e carrinho
- **Navigation**: Menu horizontal
- **Hero**: Seção promocional com countdown
- **Cards**: Livros, categorias e benefícios
- **Sidebar**: Carrinho deslizante
- **Forms**: Contato, cadastro e checkout

## 📱 Responsividade

O site é totalmente responsivo, adaptando-se a:
- **Desktop**: Layout completo com sidebar
- **Tablet**: Ajustes de grid e espaçamento
- **Mobile**: Menu colapsável e layout vertical

## 🔒 Segurança

### Frontend
- Escape de HTML para prevenir XSS
- Validação de formulários
- Sanitização de inputs

### Backend
- Prepared statements (SQL injection prevention)
- Validação de dados de entrada
- Tratamento de erros

## 🧪 Funcionalidades de Teste

### Dados de Exemplo
O sistema inclui 16 livros pré-cadastrados para demonstração:
- Fantasia: Harry Potter, O Hobbit, Narnia
- Terror: IT, Chamado de Cthulhu
- Autoajuda: Mindset, Hábitos Atômicos
- Ficção Científica: 1984, Duna
- Clássicos: Dom Casmurro, Orgulho e Preconceito
- Mangás: Naruto

### Simulação de Compra
- Carrinho funcional com cálculos reais
- Processo de checkout completo
- Validação de estoque
- Confirmação de pedido

## 👥 Equipe de Desenvolvimento

- **Andre Junior** - Desenvolvedor
- **Adriana Balon** - Desenvolvedora  
- **Lohany Valentim** - Desenvolvedora

## 🎯 Objetivos Acadêmicos Alcançados

1. **Frontend Moderno**: HTML5, CSS3, JavaScript ES6+
2. **Backend RESTful**: Node.js, Express, PostgreSQL
3. **Integração Completa**: Frontend ↔ Backend
4. **UX/UI Design**: Interface intuitiva e responsiva
5. **Gestão de Estado**: Carrinho e filtros dinâmicos
6. **Validação**: Frontend e backend
7. **Simulação E-commerce**: Fluxo completo de compra

## 🚀 Possíveis Melhorias Futuras

- Autenticação de usuários
- Sistema de avaliações
- Integração com gateway de pagamento real
- Notificações por email
- Painel administrativo
- Sistema de cupons de desconto
- Wishlist de produtos
- Histórico de pedidos

## 📞 Contato

**Terasteel Bookstore**
- Email: contato@terasteelbookstore.com
- Telefone: (11) 91234-5678
- Endereço: Rua das Livrarias, 123 - Centro, São Paulo, SP

---

*Projeto desenvolvido para fins acadêmicos - 2025*