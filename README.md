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

## Dashboard de audiência e SEO

O dashboard do `/admin` consulta dados reais do Google Analytics 4 e do Search Console. Sem essas conexões, ele mostra que falta configuração e não preenche o painel com números fictícios.

1. Ative a Google Analytics Data API e a Search Console API no projeto do Google Cloud e crie uma conta de serviço. Mantenha o arquivo JSON de credenciais privado.
2. Dê acesso de leitor ao e-mail da conta de serviço na propriedade do GA4 e no Search Console.
3. Configure `GOOGLE_SERVICE_ACCOUNT_JSON` no Vercel para Preview e Production como variável secreta e faça um novo deploy.

Os identificadores públicos do GA4 e do Search Console ficam em `src/analyticsConfig.js`. A coleta de visualizações começa após publicar essa configuração.

Para visualizar localmente, coloque as mesmas variáveis de servidor em `.env.local`. O GA4 começa a acumular visitas após ser ativado; o painel oferece períodos de 7, 28 e 90 dias. O relatório do Search Console depende do histórico disponível nessa propriedade.

O editor continua local ao navegador até que uma base de dados seja conectada; autenticação protege o painel, mas não sincroniza artigos entre dispositivos.
