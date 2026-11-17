# ✈️🏖️🏔️ Viagem a Dois — Florianópolis & Urubici (15 a 22 de Março de 2027)

Site completo e colaborativo desenvolvido a partir da planilha `roteiro.xlsx` para organizar a viagem de **Manaus (MAO) → Florianópolis (FLN) & Urubici**.

## ✨ Funcionalidades

1. **📊 Visão Geral & Voos**:
   - Cartões de embarque de Ida (`15/03/2027 • MAO 03:55 » FLN 10:50`) e Volta (`22/03/2027 • FLN 20:00 » MAO 01:40`, valor total `R$ 1.690,00`).
   - Contagem regressiva em tempo real até o embarque.
   - Indicadores de progresso do checklist, roteiro, hospedagens e orçamento.
2. **🗺️ Roteiro Dia a Dia (15/03 a 22/03/2027)**:
   - Todos os 24 períodos (Manhã, Tarde e Noite) importados da planilha.
   - Destaque especial para o **Dia do Aniversário (17/03/2027)**.
   - Filtros por cidade (`Florianópolis`, `Urubici`, `Dia do Aniversário`) e por status (`Pendente`, `Confirmado`, `Concluído`).
   - Botão direto para abrir cada passeio no **Google Maps** e opção de adicionar/editar passeios.
3. **🏡 Controle de Hospedagens**:
   - Os 3 períodos da planilha (`Florianópolis 15–17/03`, `Urubici 17–21/03` e `Florianópolis 21–22/03`).
   - Campo para colar links do **Airbnb / Booking**, anotar valores e atualizar o status (`A pesquisar`, `Opções separadas`, `Reservado`, `Pago`).
4. **✅ Reservas e Checklist da Viagem**:
   - Todos os 12 itens da planilha (`Passagens aéreas`, `Carro alugado`, `Chalé em Urubici`, `Aniversário`, `Morro da Igreja`, `Balneabilidade`, etc.).
   - Divisão de tarefas por responsável (Pessoa 1, Pessoa 2 ou Ambos) e marcação rápida com 1 clique.
5. **💰 Controle Financeiro Completo (Divisão a Dois)**:
   - Comparativo de **Total Previsto vs. Total Pago vs. Falta Pagar**.
   - **Cálculo automático de divisão 50/50**: mostra quanto cada pessoa já desembolsou e calcula automaticamente quem precisa transferir quanto para igualar as contas.
6. **☁️ Sincronização em Tempo Real para 2 Pessoas + Exportação `.xlsx`**:
   - Sincroniza na nuvem gratuitamente via **Firebase Realtime Database** e gera um **Link de Convite** automático para enviar no WhatsApp da segunda pessoa.
   - Botão **📥 Exportar .xlsx** que gera novamente a planilha Excel atualizada com todas as abas (`DADOS DO VOO`, `ROTEIRO`, `HOSPEDAGEM`, `RESERVA E CHECKLIST DA VIAGEM` e `FINANCEIRO`).

---

## 🌐 Como colocar o site online gratuitamente (em 1 minuto)

### Opção 1: Netlify Drop (Mais rápida — sem precisar de conta no GitHub)
1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arraste a pasta `c:\code\ferias` para a página.
3. Pronto! O Netlify vai gerar um link público (ex: `https://viagem-floripa-urubici.netlify.app`) que vocês dois podem acessar pelo celular ou computador.

### Opção 2: Vercel ou GitHub Pages
- Basta subir os arquivos (`index.html`, `styles.css`, `app.js`) em um repositório do GitHub e ativar o **GitHub Pages** ou importar na **Vercel**.

---

## 👫 Como ativar a sincronização em tempo real entre vocês dois

1. Acesse [console.firebase.google.com](https://console.firebase.google.com/) com sua conta Google e clique em **Criar um projeto**.
2. No menu lateral esquerdo, clique em **Criação (Build)** → **Realtime Database** → **Criar banco de dados**.
3. Escolha a opção **Iniciar no modo de teste (Test mode)** e conclua.
4. Copie a URL do seu banco (algo como `https://sua-viagem-default-rtdb.firebaseio.com`).
5. No topo do site da viagem, clique em **"Sincronizar Online (2 Pessoas)"**, cole a URL e clique em **"Conectar e Sincronizar Agora"**.
6. Clique em **"🔗 Copiar Link de Convite para a 2ª Pessoa"** e envie no WhatsApp: quando a outra pessoa abrir esse link, o navegador dela já se conecta automaticamente ao mesmo banco!
