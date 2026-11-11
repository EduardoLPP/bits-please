# Bits, Please

Portal editorial responsivo sobre games, consoles, esports e PC gamer, construído com Vite e React.

## Desenvolvimento local

1. Instale dependências com `npm install`.
2. Defina `ADMIN_PASSWORD`, `SESSION_SECRET` e `PORT` em `.env.local`.
3. Rode `npm run dev` e abra o endereço informado pelo servidor.

O painel fica em `/admin`; visitantes sem sessão são encaminhados ao login. As matérias mockadas e alterações do editor ainda são salvas no `localStorage` deste navegador.

## Deploy no Vercel

- Framework preset: Vite; build command `npm run build`; output directory `dist`.
- Cadastre `ADMIN_PASSWORD` e `SESSION_SECRET` nas Environment Variables do projeto Vercel para Preview e Production. Gere um segredo forte e exclusivo para produção; não reutilize `.env.local`.
- As funções em `api/` cuidam do login e da proteção de `/admin`; `vercel.json` mantém as rotas de categoria da SPA funcionando.
- Não envie `.env.local` ao GitHub. Ele já está no `.gitignore`.

O editor continua local ao navegador até que uma base de dados seja conectada; autenticação protege o painel, mas não sincroniza artigos entre dispositivos.
