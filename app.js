// ============================================================================
// DADOS ORIGINAIS IMPORTADOS DE roteiro.xlsx
// ============================================================================
const DEFAULT_STATE = {
  updatedAt: Date.now(),
  config: {
    person1: 'Viajante 1',
    person2: 'Viajante 2',
    budgetGoal: 8890
  },
  flights: {
    outDate: '15/03/2027',
    outRoute: 'MAO 03:55 » FLN 10:50',
    outNotes: 'Saída de Manaus na madrugada de segunda; retirar carro alugado na chegada às 10h50',
    retDate: '22/03/2027',
    retRoute: 'FLN 20:00 » MAO 01:40',
    retNotes: 'Devolver carro alugado à tarde; chegada em Manaus às 01h40 de 23/03',
    totalCost: 1690.00
  },
  itinerary: [
    { id: 'iti-1', date: '15/03/2027', day: 'Segunda', city: 'Florianópolis', period: 'Manhã', activity: 'Chegada ao aeroporto às 10h50; retirar o carro alugado', notes: 'Voo sai de Manaus às 03h55; conferir horário e local da retirada do carro', status: 'Pendente' },
    { id: 'iti-2', date: '15/03/2027', day: 'Segunda', city: 'Florianópolis', period: 'Tarde', activity: 'Check-in, almoço e descanso; passeio pela Lagoa da Conceição e Avenida das Rendeiras', notes: 'Adaptar conforme cansaço da viagem e horário da hospedagem', status: 'Pendente' },
    { id: 'iti-3', date: '15/03/2027', day: 'Segunda', city: 'Florianópolis', period: 'Noite', activity: 'Jantar a dois', notes: 'Escolher restaurante ou lugar próximo à hospedagem', status: 'Pendente' },

    { id: 'iti-4', date: '16/03/2027', day: 'Terça', city: 'Florianópolis', period: 'Manhã', activity: 'Praia da Joaquina e Dunas da Joaquina', notes: 'Verificar previsão do tempo e condições do mar', status: 'Pendente' },
    { id: 'iti-5', date: '16/03/2027', day: 'Terça', city: 'Florianópolis', period: 'Tarde', activity: 'Praia Mole e almoço na região da Lagoa', notes: 'Passeio sujeito ao clima', status: 'Pendente' },
    { id: 'iti-6', date: '16/03/2027', day: 'Terça', city: 'Florianópolis', period: 'Noite', activity: 'Jantar e descanso', notes: 'Organizar malas para seguir à serra no dia seguinte', status: 'Pendente' },

    { id: 'iti-7', date: '17/03/2027', day: 'Quarta', city: 'Florianópolis → Urubici', period: 'Manhã', activity: 'Café da manhã especial, check-out e viagem de carro para Urubici', notes: 'Dia do aniversário; reservar tempo para o deslocamento', status: 'Pendente' },
    { id: 'iti-8', date: '17/03/2027', day: 'Quarta', city: 'Urubici', period: 'Tarde', activity: 'Check-in no chalé; aproveitar a hospedagem, banheira/hidromassagem e paisagem', notes: 'Priorizar chalé com banheira privativa; confirmar se há lareira', status: 'Pendente' },
    { id: 'iti-9', date: '17/03/2027', day: 'Quarta', city: 'Urubici', period: 'Noite', activity: 'Jantar especial de aniversário 🎂', notes: 'Planejar surpresa, decoração ou jantar no chalé/restaurante', status: 'Pendente' },

    { id: 'iti-10', date: '18/03/2027', day: 'Quinta', city: 'Urubici', period: 'Manhã', activity: 'Café da manhã e visita à Cascata do Avencal', notes: 'Confirmar ingresso, funcionamento e condições de acesso', status: 'Pendente' },
    { id: 'iti-11', date: '18/03/2027', day: 'Quinta', city: 'Urubici', period: 'Tarde', activity: 'Almoço e visita ao Morro do Campestre', notes: 'Confirmar acesso e condições climáticas', status: 'Pendente' },
    { id: 'iti-12', date: '18/03/2027', day: 'Quinta', city: 'Urubici', period: 'Noite', activity: 'Retorno ao chalé e descanso', notes: 'Noite livre', status: 'Pendente' },

    { id: 'iti-13', date: '19/03/2027', day: 'Sexta', city: 'Urubici', period: 'Manhã', activity: 'Passeio ao Morro da Igreja e região da Pedra Furada', notes: 'Acesso controlado; verificar autorização, regras e previsão do tempo antes de sair', status: 'Pendente' },
    { id: 'iti-14', date: '19/03/2027', day: 'Sexta', city: 'Urubici', period: 'Tarde', activity: 'Almoço e passeio pela região da serra', notes: 'Escolher alternativa caso o acesso esteja fechado ou o tempo esteja ruim', status: 'Pendente' },
    { id: 'iti-15', date: '19/03/2027', day: 'Sexta', city: 'Urubici', period: 'Noite', activity: 'Jantar aconchegante e descanso no chalé', notes: 'Levar agasalhos', status: 'Pendente' },

    { id: 'iti-16', date: '20/03/2027', day: 'Sábado', city: 'Urubici', period: 'Manhã', activity: 'Café da manhã e manhã livre no chalé', notes: 'Aproveitar a hospedagem sem pressa', status: 'Pendente' },
    { id: 'iti-17', date: '20/03/2027', day: 'Sábado', city: 'Urubici', period: 'Tarde', activity: 'Passeios leves, paisagens e fotografias', notes: 'Definir conforme clima e atrações próximas', status: 'Pendente' },
    { id: 'iti-18', date: '20/03/2027', day: 'Sábado', city: 'Urubici', period: 'Noite', activity: 'Última noite na serra', notes: 'Conferir malas e horário do check-out do dia seguinte', status: 'Pendente' },

    { id: 'iti-19', date: '21/03/2027', day: 'Domingo', city: 'Urubici → Florianópolis', period: 'Manhã', activity: 'Café da manhã, check-out e retorno de carro a Florianópolis', notes: 'Planejar paradas e tempo de estrada', status: 'Pendente' },
    { id: 'iti-20', date: '21/03/2027', day: 'Domingo', city: 'Florianópolis', period: 'Tarde', activity: 'Check-in e passeio por Santo Antônio de Lisboa', notes: 'Aproveitar o pôr do sol, se o tempo permitir', status: 'Pendente' },
    { id: 'iti-21', date: '21/03/2027', day: 'Domingo', city: 'Florianópolis', period: 'Noite', activity: 'Jantar e descanso', notes: 'Dormir em local com acesso conveniente ao aeroporto', status: 'Pendente' },

    { id: 'iti-22', date: '22/03/2027', day: 'Segunda', city: 'Florianópolis', period: 'Manhã', activity: 'Café da manhã e passeio pelo Centro Histórico; Praça XV de Novembro', notes: 'Manter programação flexível para não correr risco de perder o voo', status: 'Pendente' },
    { id: 'iti-23', date: '22/03/2027', day: 'Segunda', city: 'Florianópolis', period: 'Tarde', activity: 'Almoço, lembrancinhas e devolução do carro alugado', notes: 'Confirmar local e horário de devolução; chegar ao aeroporto com antecedência', status: 'Pendente' },
    { id: 'iti-24', date: '22/03/2027', day: 'Segunda', city: 'Florianópolis → Manaus', period: 'Noite', activity: 'Voo de retorno às 20h; chegada prevista a Manaus às 01h40 do dia 23/03', notes: 'Conferir bilhete, conexão e horário final atualizado', status: 'Pendente' }
  ],
  stays: [
    {
      id: 'stay-1',
      city: 'Florianópolis (1ª Etapa)',
      checkIn: '15/03/2027',
      checkOut: '17/03/2027',
      nights: 2,
      name: 'Preencher após escolher',
      link: '',
      price: 0,
      status: 'A pesquisar',
      notes: 'Sugestão: Região da Lagoa da Conceição ou próximo às praias do Leste (Joaquina / Mole).'
    },
    {
      id: 'stay-2',
      city: 'Urubici (Serra & Aniversário)',
      checkIn: '17/03/2027',
      checkOut: '21/03/2027',
      nights: 4,
      name: 'Priorizar chalé com banheira privativa e lareira',
      link: '',
      price: 0,
      status: 'A pesquisar',
      notes: 'Priorizar chalé romântico com banheira de hidromassagem privativa, aquecimento e, se possível, lareira.'
    },
    {
      id: 'stay-3',
      city: 'Florianópolis (Retorno)',
      checkIn: '21/03/2027',
      checkOut: '22/03/2027',
      nights: 1,
      name: 'Preferir hospedagem com acesso conveniente ao aeroporto',
      link: '',
      price: 0,
      status: 'A pesquisar',
      notes: 'Última noite antes do voo de 20h00; facilitar deslocamento até o Centro e Aeroporto.'
    }
  ],
  checklist: [
    { id: 'chk-1', item: 'Passagens aéreas', desc: 'Conferir nomes, datas, conexões, bagagem e horários', deadline: 'Antes da viagem', owner: 'Ambos', status: 'Concluído' },
    { id: 'chk-2', item: 'Carro alugado', desc: 'Reservar; conferir seguro, caução, quilometragem e retirada/devolução', deadline: '15/03 a 22/03', owner: 'Ambos', status: 'Pendente' },
    { id: 'chk-3', item: 'Hospedagem em Florianópolis', desc: 'Reservar 15–17/03 e 21–22/03', deadline: 'Antes da viagem', owner: 'Ambos', status: 'Pendente' },
    { id: 'chk-4', item: 'Chalé em Urubici', desc: 'Reservar 17–21/03; confirmar banheira privativa, aquecimento e lareira', deadline: 'Prioridade', owner: 'Ambos', status: 'Pendente' },
    { id: 'chk-5', item: 'Aniversário (16/03 - 17/03)', desc: 'Combinar café da manhã, decoração e jantar especial', deadline: 'Surpresa kk', owner: 'Ambos', status: 'Pendente' },
    { id: 'chk-6', item: 'Morro da Igreja', desc: 'Verificar autorização (ICMBio), regras e condições de acesso', deadline: 'Antes de 19/03', owner: 'Ambos', status: 'Pendente' },
    { id: 'chk-7', item: 'Cascata do Avencal e Morro do Campestre', desc: 'Confirmar funcionamento, ingressos e acessos', deadline: 'Antes dos passeios', owner: 'Ambos', status: 'Pendente' },
    { id: 'chk-8', item: 'Previsão do tempo', desc: 'Conferir chuva e temperaturas; preparar alternativas', deadline: 'Na semana da viagem', owner: 'Ambos', status: 'Pendente' },
    { id: 'chk-9', item: 'Balneabilidade', desc: 'Consultar condição das praias antes de entrar no mar (IMA-SC)', deadline: '16/03', owner: 'Ambos', status: 'Pendente' },
    { id: 'chk-10', item: 'Bagagem', desc: 'Separar roupas leves, casacos para a serra, calçados confortáveis e itens pessoais', deadline: 'Antes de embarcar', owner: 'Ambos', status: 'Pendente' },
    { id: 'chk-11', item: 'Documentos', desc: 'Separar documento com foto, CNH válida e comprovantes das reservas', deadline: 'Antes de embarcar', owner: 'Ambos', status: 'Pendente' },
    { id: 'chk-12', item: 'Aeroporto', desc: 'Confirmar horário de devolução do carro e antecedência para embarque', deadline: '22/03', owner: 'Ambos', status: 'Pendente' }
  ],
  expenses: [
    { id: 'exp-1', title: 'Passagens Aéreas (MAO ↔ FLN)', category: 'Passagens', estimated: 1690.00, paid: 1690.00, payer: '50/50', status: 'Pago' },
    { id: 'exp-2', title: 'Chalé em Urubici (4 noites)', category: 'Hospedagem', estimated: 2200.00, paid: 0, payer: '50/50', status: 'Previsto' },
    { id: 'exp-3', title: 'Hospedagem Florianópolis (15–17/03 e 21–22/03)', category: 'Hospedagem', estimated: 1050.00, paid: 0, payer: '50/50', status: 'Previsto' },
    { id: 'exp-4', title: 'Aluguel de Carro + Combustível (7 diárias)', category: 'Transporte / Carro', estimated: 1400.00, paid: 0, payer: '50/50', status: 'Previsto' },
    { id: 'exp-5', title: 'Surpresa & Jantar de Aniversário (17/03)', category: 'Aniversário / Especial', estimated: 450.00, paid: 0, payer: '50/50', status: 'Previsto' },
    { id: 'exp-6', title: 'Ingressos (Cascata do Avencal, Morro do Campestre, etc.)', category: 'Passeios / Ingressos', estimated: 300.00, paid: 0, payer: '50/50', status: 'Previsto' },
    { id: 'exp-7', title: 'Alimentação Geral (Almoços, Jantares e Cafés)', category: 'Alimentação', estimated: 1800.00, paid: 0, payer: '50/50', status: 'Previsto' }
  ]
};

const STORAGE_KEY = 'ferias_floripa_urubici_v1';
const SYNC_CFG_KEY = 'ferias_sync_config_v1';

let state = loadLocalState();
let syncConfig = loadSyncConfig();
let syncTimer = null;
let isSyncing = false;

let itineraryFilters = {
  city: 'ALL',
  status: 'ALL'
};
let checklistFilter = 'ALL';

// ============================================================================
// INICIALIZAÇÃO E PERSISTÊNCIA
// ============================================================================
function loadLocalState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...DEFAULT_STATE, ...parsed };
    }
  } catch (e) {
    console.error('Erro ao carregar estado local:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function loadSyncConfig() {
  try {
    const params = new URLSearchParams(window.location.search);
    const dbFromUrl = params.get('db');
    const roomFromUrl = params.get('room');
    if (dbFromUrl) {
      const cfg = {
        dbUrl: dbFromUrl.replace(/\/+$/, ''),
        roomId: roomFromUrl || 'floripa-urubici-2027'
      };
      localStorage.setItem(SYNC_CFG_KEY, JSON.stringify(cfg));
      return cfg;
    }
    const raw = localStorage.getItem(SYNC_CFG_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Erro ao carregar config de sync:', e);
  }
  return { dbUrl: '', roomId: 'floripa-urubici-2027' };
}

function saveState(pushCloud = true) {
  state.updatedAt = Date.now();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderAll();
  if (pushCloud && syncConfig.dbUrl) {
    pushToCloud();
  }
}

// ============================================================================
// SINCRONIZAÇÃO EM NUVEM (FIREBASE REALTIME DB / REST)
// ============================================================================
function getCloudEndpoint() {
  if (!syncConfig.dbUrl) return null;
  const base = syncConfig.dbUrl.replace(/\/+$/, '');
  const room = encodeURIComponent(syncConfig.roomId || 'floripa-urubici-2027');
  return `${base}/trips/${room}.json`;
}

async function pushToCloud() {
  const endpoint = getCloudEndpoint();
  if (!endpoint || isSyncing) return;
  try {
    isSyncing = true;
    const res = await fetch(endpoint, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    });
    if (res.ok) {
      updateSyncBadge(true, 'Sincronizado na Nuvem');
    } else {
      updateSyncBadge(false, 'Erro na Nuvem (verifique URL)');
    }
  } catch (err) {
    console.warn('Falha ao enviar para nuvem:', err);
    updateSyncBadge(false, 'Offline / Sem conexão');
  } finally {
    isSyncing = false;
  }
}

async function pullFromCloudNow(silent = false) {
  const endpoint = getCloudEndpoint();
  if (!endpoint) {
    if (!silent) showToast('Configure a URL do banco primeiro.');
    return;
  }
  try {
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const remoteData = await res.json();
    if (remoteData && remoteData.itinerary) {
      if (!state.updatedAt || (remoteData.updatedAt && remoteData.updatedAt > state.updatedAt) || !silent) {
        state = remoteData;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        renderAll();
        if (!silent) showToast('Dados atualizados da nuvem com sucesso!');
      }
      updateSyncBadge(true, 'Online (2 Pessoas)');
    } else {
      // Primeiro acesso ao banco vazio: envia o estado atual para inicializar
      await pushToCloud();
      if (!silent) showToast('Banco inicializado na nuvem com o seu roteiro!');
    }
  } catch (err) {
    console.warn('Erro ao buscar da nuvem:', err);
    updateSyncBadge(false, 'Erro de conexão com a nuvem');
    if (!silent) showToast('Não foi possível conectar à URL informada. Verifique se o Realtime Database está em modo de teste.');
  }
}

function startCloudPolling() {
  if (syncTimer) clearInterval(syncTimer);
  if (!syncConfig.dbUrl) {
    updateSyncBadge(false, 'Sincronizar Online (2 Pessoas)');
    return;
  }
  pullFromCloudNow(true);
  syncTimer = setInterval(() => {
    pullFromCloudNow(true);
  }, 6000);
}

function updateSyncBadge(isOnline, text) {
  const dot = document.getElementById('syncDot');
  const label = document.getElementById('syncStatusText');
  if (!dot || !label) return;
  dot.className = 'sync-dot' + (isOnline ? ' online' : '');
  label.textContent = text;
}

function openSyncModal() {
  document.getElementById('syncDatabaseUrl').value = syncConfig.dbUrl || '';
  document.getElementById('syncRoomId').value = syncConfig.roomId || 'floripa-urubici-2027';
  openModal('syncModal');
}

function saveSyncConfig() {
  const dbUrl = document.getElementById('syncDatabaseUrl').value.trim().replace(/\/+$/, '');
  const roomId = document.getElementById('syncRoomId').value.trim() || 'floripa-urubici-2027';
  syncConfig = { dbUrl, roomId };
  localStorage.setItem(SYNC_CFG_KEY, JSON.stringify(syncConfig));
  startCloudPolling();
  if (dbUrl) {
    showToast('Conectando e sincronizando roteiro na nuvem...');
  } else {
    showToast('Modo local ativado.');
  }
}

function copyShareInviteLink() {
  const dbUrl = document.getElementById('syncDatabaseUrl').value.trim().replace(/\/+$/, '');
  const roomId = document.getElementById('syncRoomId').value.trim() || 'floripa-urubici-2027';
  const url = new URL(window.location.href);
  if (dbUrl) {
    url.searchParams.set('db', dbUrl);
    url.searchParams.set('room', roomId);
  }
  navigator.clipboard.writeText(url.toString()).then(() => {
    showToast('Link copiado! Envie para a outra pessoa abrir.');
  });
}

// ============================================================================
// RENDERIZAÇÃO DE TODAS AS ABAS
// ============================================================================
function formatBRL(val) {
  return Number(val || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderAll() {
  renderHeaderAndKPIs();
  renderFlightsAndOverview();
  renderItinerary();
  renderStays();
  renderChecklist();
  renderFinance();
}

function renderHeaderAndKPIs() {
  const p1 = state.config?.person1 || 'Viajante 1';
  const p2 = state.config?.person2 || 'Viajante 2';
  document.getElementById('travelersLabel').textContent = `${p1} & ${p2}`;

  // Atualiza selects com os nomes reais
  const chkP1 = document.getElementById('chkOwnerP1');
  const chkP2 = document.getElementById('chkOwnerP2');
  const expP1 = document.getElementById('expPayerP1');
  const expP2 = document.getElementById('expPayerP2');
  if (chkP1) chkP1.textContent = p1;
  if (chkP2) chkP2.textContent = p2;
  if (expP1) expP1.textContent = `Pago por ${p1}`;
  if (expP2) expP2.textContent = `Pago por ${p2}`;

  // Checklist KPI
  const totalChk = state.checklist.length;
  const doneChk = state.checklist.filter(c => c.status === 'Concluído').length;
  const pctChk = totalChk ? Math.round((doneChk / totalChk) * 100) : 0;
  document.getElementById('kpiChecklistValue').textContent = `${doneChk} / ${totalChk}`;
  document.getElementById('kpiChecklistSub').textContent = `${pctChk}% das pendências concluídas`;
  document.getElementById('kpiChecklistBar').style.width = `${pctChk}%`;
  document.getElementById('countChecklist').textContent = `${doneChk}/${totalChk}`;

  // Roteiro KPI
  const totalIti = state.itinerary.length;
  const doneIti = state.itinerary.filter(i => i.status === 'Concluído' || i.status === 'Confirmado').length;
  const pctIti = totalIti ? Math.round((doneIti / totalIti) * 100) : 0;
  document.getElementById('kpiRoteiroValue').textContent = `${totalIti} atividades`;
  document.getElementById('kpiRoteiroSub').textContent = `${doneIti} confirmadas/concluídas • 8 dias`;
  document.getElementById('kpiRoteiroBar').style.width = `${ Math.max(12, pctIti) }%`;
  document.getElementById('countItinerary').textContent = totalIti;

  // Stays KPI
  const totalStays = state.stays.length;
  const confirmedStays = state.stays.filter(s => s.status === 'Reservado' || s.status === 'Pago').length;
  const pctStays = totalStays ? Math.round((confirmedStays / totalStays) * 100) : 0;
  document.getElementById('kpiStaysValue').textContent = `${confirmedStays} / ${totalStays} períodos`;
  document.getElementById('kpiStaysBar').style.width = `${pctStays}%`;
  document.getElementById('countStays').textContent = totalStays;

  // Finance KPI
  const totalEst = state.expenses.reduce((acc, e) => acc + Number(e.estimated || 0), 0);
  const totalPaid = state.expenses.reduce((acc, e) => acc + Number(e.paid || 0), 0);
  const pctFin = totalEst ? Math.min(100, Math.round((totalPaid / totalEst) * 100)) : 0;
  document.getElementById('kpiFinancePaid').textContent = `${formatBRL(totalPaid)} pagos`;
  document.getElementById('kpiFinanceTotal').textContent = `Previsto total: ${formatBRL(totalEst)}`;
  document.getElementById('kpiFinanceBar').style.width = `${pctFin}%`;
  document.getElementById('countFinance').textContent = formatBRL(totalPaid);
}

function renderFlightsAndOverview() {
  const f = state.flights;
  const container = document.getElementById('flightsContainer');
  container.innerHTML = `
    <div class="flight-card">
      <div class="flight-top">
        <span class="flight-tag">🛫 Voo de Ida • ${f.outDate}</span>
        <span style="font-weight: 700; color: var(--primary-dark);">Segunda-feira</span>
      </div>
      <div class="flight-route">
        <div>
          <div class="airport-code">MAO</div>
          <div class="airport-time">Manaus</div>
        </div>
        <div class="flight-Plane">
          <div><strong>${f.outRoute}</strong></div>
          <div>────── ✈️ ──────</div>
        </div>
        <div style="text-align: right;">
          <div class="airport-code">FLN</div>
          <div class="airport-time">Florianópolis</div>
        </div>
      </div>
      <p style="font-size: 0.83rem; color: var(--text-muted);">📌 ${f.outNotes || ''}</p>
    </div>

    <div class="flight-card return">
      <div class="flight-top">
        <span class="flight-tag">🛬 Voo de Volta • ${f.retDate}</span>
        <span style="font-weight: 700; color: var(--serra);">Valor Total: ${formatBRL(f.totalCost)}</span>
      </div>
      <div class="flight-route">
        <div>
          <div class="airport-code">FLN</div>
          <div class="airport-time">Florianópolis</div>
        </div>
        <div class="flight-Plane" style="color: var(--serra);">
          <div><strong>${f.retRoute}</strong></div>
          <div>────── ✈️ ──────</div>
        </div>
        <div style="text-align: right;">
          <div class="airport-code">MAO</div>
          <div class="airport-time">Manaus (+1 dia)</div>
        </div>
      </div>
      <p style="font-size: 0.83rem; color: var(--text-muted);">📌 ${f.retNotes || ''}</p>
    </div>
  `;

  // Próximas providências pendentes
  const pending = state.checklist.filter(c => c.status !== 'Concluído').slice(0, 5);
  const pendingEl = document.getElementById('overviewPendingList');
  if (pending.length === 0) {
    pendingEl.innerHTML = `<p style="color: var(--success); font-weight: 600;">🎉 Todas as tarefas do checklist foram concluídas!</p>`;
  } else {
    pendingEl.innerHTML = pending.map(c => `
      <div class="check-row" style="padding: 10px 14px;">
        <input type="checkbox" class="check-box" onchange="toggleChecklistQuick('${c.id}')" />
        <div>
          <div style="font-weight: 700; font-size: 0.9rem;">${c.item}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${c.desc}</div>
        </div>
        <span class="hero-badge" style="background: var(--warning-light); color: var(--warning);">${c.deadline}</span>
      </div>
    `).join('');
  }

  // Etapas da viagem
  const stagesEl = document.getElementById('overviewStagesList');
  stagesEl.innerHTML = state.stays.map(s => `
    <div style="padding: 12px 14px; border: 1px solid var(--border); border-radius: 10px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
      <div>
        <div style="font-weight: 700; font-size: 0.92rem;">${s.city} (${s.nights} ${s.nights > 1 ? 'noites' : 'noite'})</div>
        <div style="font-size: 0.8rem; color: var(--text-muted);">📅 ${s.checkIn} até ${s.checkOut} • ${s.name}</div>
      </div>
      <span class="status-select ${statusClass(s.status)}">${s.status}</span>
    </div>
  `).join('');
}

function statusClass(st) {
  if (!st) return 'pendente';
  const norm = st.toLowerCase();
  if (norm.includes('conclu') || norm.includes('pago') || norm.includes('reservado')) return 'concluido';
  if (norm.includes('confirm') || norm.includes('andamento') || norm.includes('opç') || norm.includes('parcial')) return 'confirmado';
  return 'pendente';
}

function periodClass(p) {
  if (!p) return 'manha';
  const norm = p.toLowerCase();
  if (norm.includes('tarde')) return 'tarde';
  if (norm.includes('noite')) return 'noite';
  return 'manha';
}

function renderItinerary() {
  const container = document.getElementById('itineraryContainer');
  const filtered = state.itinerary.filter(item => {
    if (itineraryFilters.city === 'Bday' && item.date !== '17/03/2027') return false;
    if (itineraryFilters.city !== 'ALL' && itineraryFilters.city !== 'Bday') {
      if (!item.city.toLowerCase().includes(itineraryFilters.city.toLowerCase())) return false;
    }
    if (itineraryFilters.status !== 'ALL' && item.status !== itineraryFilters.status) return false;
    return true;
  });

  // Agrupar por data
  const groups = {};
  filtered.forEach(item => {
    if (!groups[item.date]) {
      groups[item.date] = {
        date: item.date,
        day: item.day,
        cities: new Set(),
        items: []
      };
    }
    groups[item.date].cities.add(item.city);
    groups[item.date].items.push(item);
  });

  const groupKeys = Object.keys(groups);
  if (groupKeys.length === 0) {
    container.innerHTML = `<div class="card" style="text-align:center; color: var(--text-muted);">Nenhuma atividade encontrada para este filtro.</div>`;
    return;
  }

  container.innerHTML = groupKeys.map(dateKey => {
    const g = groups[dateKey];
    const isBday = dateKey === '17/03/2027';
    const cityList = Array.from(g.cities).join(' • ');
    const isUrubici = cityList.toLowerCase().includes('urubici');

    return `
      <div class="day-group ${isBday ? 'bday-highlight' : ''}">
        <div class="day-header">
          <div class="day-title">
            <span class="day-date-badge">${g.date} — ${g.day}</span>
            <span class="day-city-badge ${isUrubici ? 'urubici' : ''}">📍 ${cityList}</span>
            ${isBday ? '<span class="hero-badge" style="background:#f43f5e; color:#fff;">🎂 Dia do Aniversário!</span>' : ''}
          </div>
          <button class="btn btn-secondary btn-sm" onclick="openItineraryModal(null, '${g.date}', '${g.day}', '${Array.from(g.cities)[0]}')">
            + Passeio neste dia
          </button>
        </div>
        <div class="period-list">
          ${g.items.map(item => `
            <div class="period-item ${item.status === 'Concluído' ? 'done' : ''}">
              <div>
                <span class="period-tag ${periodClass(item.period)}">
                  ${item.period === 'Manhã' ? '☀️ Manhã' : item.period === 'Tarde' ? '🌤️ Tarde' : '🌙 Noite'}
                </span>
                <div style="font-size: 0.74rem; color: var(--text-muted); margin-top: 4px; font-weight: 600;">${item.city}</div>
              </div>
              <div>
                <div class="activity-title">${item.activity}</div>
                <div class="activity-notes">💡 ${item.notes || 'Sem observações'}</div>
              </div>
              <div class="item-actions">
                <select class="status-select ${statusClass(item.status)}" onchange="updateItineraryStatus('${item.id}', this.value)">
                  <option value="Pendente" ${item.status === 'Pendente' ? 'selected' : ''}>⏳ Pendente</option>
                  <option value="Confirmado" ${item.status === 'Confirmado' ? 'selected' : ''}>📌 Confirmado</option>
                  <option value="Concluído" ${item.status === 'Concluído' ? 'selected' : ''}>✅ Concluído</option>
                </select>
                <a class="icon-btn" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.activity + ' ' + item.city + ' SC')}" target="_blank" rel="noopener" title="Abrir no Google Maps">📍</a>
                <button class="icon-btn" onclick="openItineraryModal('${item.id}')" title="Editar">✏️</button>
                <button class="icon-btn" onclick="deleteItineraryItem('${item.id}')" title="Excluir">🗑️</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderStays() {
  const container = document.getElementById('staysContainer');
  container.innerHTML = state.stays.map(s => {
    const isUrubici = s.city.toLowerCase().includes('urubici');
    return `
      <div class="stay-card ${isUrubici ? 'urubici' : 'floripa'}">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
            <div>
              <span class="day-city-badge ${isUrubici ? 'urubici' : ''}">${isUrubici ? '🏔️ Serra Catarinense' : '🏖️ Ilha da Magia'}</span>
              <h3 style="font-size: 1.15rem; margin-top: 6px;">${s.city}</h3>
            </div>
            <select class="status-select ${statusClass(s.status)}" onchange="updateStayStatus('${s.id}', this.value)">
              <option value="A pesquisar" ${s.status.trim() === 'A pesquisar' ? 'selected' : ''}>🔍 A pesquisar</option>
              <option value="Opções separadas" ${s.status === 'Opções separadas' ? 'selected' : ''}>📋 Opções separadas</option>
              <option value="Reservado" ${s.status === 'Reservado' ? 'selected' : ''}>📌 Reservado</option>
              <option value="Pago" ${s.status === 'Pago' ? 'selected' : ''}>✅ Pago</option>
            </select>
          </div>

          <div class="stay-dates">
            <div><strong>Check-in:</strong> ${s.checkIn}</div>
            <div><strong>Check-out:</strong> ${s.checkOut}</div>
            <div><strong>${s.nights} ${s.nights > 1 ? 'noites' : 'noite'}</strong></div>
          </div>

          <div style="margin-bottom: 10px;">
            <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">HOSPEDAGEM ESCOLHIDA / OBSERVAÇÃO</div>
            <div style="font-weight: 700; font-size: 0.96rem; margin-top: 2px;">${s.name}</div>
          </div>

          ${s.notes ? `<p style="font-size: 0.83rem; color: var(--text-muted); margin-bottom: 12px;">📝 ${s.notes}</p>` : ''}

          ${s.link ? `
            <div style="margin-bottom: 12px;">
              <a href="${s.link}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" style="width: 100%; justify-content: center;">
                🔗 Abrir Link da Hospedagem (Airbnb / Booking)
              </a>
            </div>
          ` : ''}
        </div>

        <div style="border-top: 1px solid var(--border); padding-top: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <span style="font-size: 0.76rem; color: var(--text-muted); display: block;">Valor da estadia</span>
            <strong style="font-size: 1.05rem;">${s.price > 0 ? formatBRL(s.price) : 'A definir'}</strong>
          </div>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-secondary btn-sm" onclick="openStayModal('${s.id}')">✏️ Editar / Colar Link</button>
            <button class="icon-btn" onclick="deleteStayItem('${s.id}')" title="Excluir">🗑️</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderChecklist() {
  const p1 = state.config?.person1 || 'Viajante 1';
  const p2 = state.config?.person2 || 'Viajante 2';
  const container = document.getElementById('checklistContainer');

  const items = state.checklist.filter(c => {
    if (checklistFilter === 'ALL') return true;
    return c.status === checklistFilter;
  });

  container.innerHTML = items.map(c => {
    const isDone = c.status === 'Concluído';
    const ownerLabel = c.owner === 'P1' ? `👤 ${p1}` : c.owner === 'P2' ? `👤 ${p2}` : '👫 Ambos';
    return `
      <div class="check-row ${isDone ? 'done' : ''}">
        <input type="checkbox" class="check-box" ${isDone ? 'checked' : ''} onchange="toggleChecklistQuick('${c.id}')" />
        <div>
          <div class="check-title" style="font-weight: 700; font-size: 0.96rem;">${c.item}</div>
          <div style="font-size: 0.84rem; color: var(--text-muted);">${c.desc}</div>
        </div>
        <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
          <span class="hero-badge" style="background: var(--surface-alt); color: var(--text); border: 1px solid var(--border);">📅 ${c.deadline || 'Sem prazo'}</span>
          <span class="hero-badge" style="background: var(--primary-light); color: var(--primary-dark);">${ownerLabel}</span>
        </div>
        <div class="item-actions">
          <select class="status-select ${statusClass(c.status)}" onchange="updateChecklistStatus('${c.id}', this.value)">
            <option value="Pendente" ${c.status === 'Pendente' ? 'selected' : ''}>⏳ Pendente</option>
            <option value="Em andamento" ${c.status === 'Em andamento' ? 'selected' : ''}>🔄 Em andamento</option>
            <option value="Concluído" ${c.status === 'Concluído' ? 'selected' : ''}>✅ Concluído</option>
          </select>
          <button class="icon-btn" onclick="openChecklistModal('${c.id}')" title="Editar">✏️</button>
          <button class="icon-btn" onclick="deleteChecklistItem('${c.id}')" title="Excluir">🗑️</button>
        </div>
      </div>
    `;
  }).join('');
}

function renderFinance() {
  const p1 = state.config?.person1 || 'Viajante 1';
  const p2 = state.config?.person2 || 'Viajante 2';
  const goal = Number(state.config?.budgetGoal || 8000);

  let totalEst = 0;
  let totalPaid = 0;
  let paidByP1 = 0;
  let paidByP2 = 0;

  state.expenses.forEach(e => {
    const est = Number(e.estimated || 0);
    const paid = Number(e.paid || 0);
    totalEst += est;
    totalPaid += paid;
    if (e.payer === 'P1') {
      paidByP1 += paid;
    } else if (e.payer === 'P2') {
      paidByP2 += paid;
    } else {
      paidByP1 += paid / 2;
      paidByP2 += paid / 2;
    }
  });

  const remaining = Math.max(0, totalEst - totalPaid);
  const pctPaid = totalEst ? Math.round((totalPaid / totalEst) * 100) : 0;

  document.getElementById('finTotalEstimated').textContent = formatBRL(totalEst);
  document.getElementById('finBudgetGoalSub').textContent = `Meta do casal: ${formatBRL(goal)} (${formatBRL(totalEst / 2)} por pessoa)`;
  document.getElementById('finTotalPaid').textContent = formatBRL(totalPaid);
  document.getElementById('finPaidPercentSub').textContent = `${pctPaid}% do valor previsto já está pago`;
  document.getElementById('finTotalRemaining').textContent = formatBRL(remaining);

  // Cálculo de acerto entre os dois
  const diff = Math.abs(paidByP1 - paidByP2) / 2;
  let settlementText = '✅ Os pagamentos estão perfeitamente equilibrados (50/50)!';
  if (paidByP1 > paidByP2 + 0.01) {
    settlementText = `💡 Para igualar 50/50: <strong>${p2}</strong> transfere <strong>${formatBRL(diff)}</strong> para <strong>${p1}</strong>`;
  } else if (paidByP2 > paidByP1 + 0.01) {
    settlementText = `💡 Para igualar 50/50: <strong>${p1}</strong> transfere <strong>${formatBRL(diff)}</strong> para <strong>${p2}</strong>`;
  }

  document.getElementById('financeSplitBanner').innerHTML = `
    <div>
      <div style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.8;">Divisão de Pagamentos do Casal</div>
      <div style="font-size: 1.15rem; font-weight: 700; margin-top: 4px;">
        👤 ${p1} desembolsou: <span style="color: #38bdf8;">${formatBRL(paidByP1)}</span> &nbsp;•&nbsp;
        👤 ${p2} desembolsou: <span style="color: #4ade80;">${formatBRL(paidByP2)}</span>
      </div>
    </div>
    <div style="background: rgba(255,255,255,0.12); padding: 10px 16px; border-radius: 10px; font-size: 0.9rem;">
      ${settlementText}
    </div>
  `;

  const tbody = document.getElementById('financeTableBody');
  tbody.innerHTML = state.expenses.map(e => {
    const payerLabel = e.payer === 'P1' ? p1 : e.payer === 'P2' ? p2 : '50/50 (Ambos)';
    return `
      <tr>
        <td><strong>${e.title}</strong></td>
        <td>${e.category}</td>
        <td>${formatBRL(e.estimated)}</td>
        <td style="font-weight: 700; color: ${e.paid > 0 ? 'var(--success)' : 'var(--text-muted)'};">${formatBRL(e.paid)}</td>
        <td>${payerLabel}</td>
        <td><span class="status-select ${statusClass(e.status)}">${e.status}</span></td>
        <td>
          <div style="display: flex; gap: 6px;">
            <button class="icon-btn" onclick="openExpenseModal('${e.id}')" title="Editar">✏️</button>
            <button class="icon-btn" onclick="deleteExpenseItem('${e.id}')" title="Excluir">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// ============================================================================
// INTERAÇÕES E MODAIS (CRUD)
// ============================================================================
function switchTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  document.getElementById(`tab-${tabId}`).classList.add('active');
  const btn = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);
  if (btn) btn.classList.add('active');
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

// Voos
function openFlightModal() {
  const f = state.flights;
  document.getElementById('flightOutDate').value = f.outDate;
  document.getElementById('flightOutRoute').value = f.outRoute;
  document.getElementById('flightOutNotes').value = f.outNotes || '';
  document.getElementById('flightRetDate').value = f.retDate;
  document.getElementById('flightRetRoute').value = f.retRoute;
  document.getElementById('flightRetNotes').value = f.retNotes || '';
  document.getElementById('flightTotalCost').value = f.totalCost;
  openModal('flightModal');
}

function saveFlights(e) {
  e.preventDefault();
  const cost = parseFloat(document.getElementById('flightTotalCost').value) || 0;
  state.flights = {
    outDate: document.getElementById('flightOutDate').value.trim(),
    outRoute: document.getElementById('flightOutRoute').value.trim(),
    outNotes: document.getElementById('flightOutNotes').value.trim(),
    retDate: document.getElementById('flightRetDate').value.trim(),
    retRoute: document.getElementById('flightRetRoute').value.trim(),
    retNotes: document.getElementById('flightRetNotes').value.trim(),
    totalCost: cost
  };
  // Atualiza também a despesa de passagens no financeiro
  const flightExp = state.expenses.find(x => x.id === 'exp-1');
  if (flightExp) {
    flightExp.estimated = cost;
    flightExp.paid = cost;
  }
  saveState();
  closeModal('flightModal');
  showToast('Dados do voo atualizados!');
}

// Roteiro
function setItineraryFilter(type, val) {
  itineraryFilters[type] = val;
  if (type === 'city') {
    document.querySelectorAll('#itineraryCityFilters .pill-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    event.target.classList.add('active');
  }
  renderItinerary();
}

function updateItineraryStatus(id, newStatus) {
  const item = state.itinerary.find(i => i.id === id);
  if (item) {
    item.status = newStatus;
    saveState();
    showToast(`Status atualizado para "${newStatus}"`);
  }
}

function openItineraryModal(id = null, defaultDate = '15/03/2027', defaultDay = 'Segunda', defaultCity = 'Florianópolis') {
  if (id) {
    const item = state.itinerary.find(i => i.id === id);
    if (!item) return;
    document.getElementById('itiId').value = item.id;
    document.getElementById('itiDate').value = item.date;
    document.getElementById('itiDay').value = item.day;
    document.getElementById('itiCity').value = item.city;
    document.getElementById('itiPeriod').value = item.period.trim();
    document.getElementById('itiActivity').value = item.activity;
    document.getElementById('itiNotes').value = item.notes || '';
    document.getElementById('itiStatus').value = item.status;
  } else {
    document.getElementById('itiId').value = '';
    document.getElementById('itiDate').value = defaultDate;
    document.getElementById('itiDay').value = defaultDay;
    document.getElementById('itiCity').value = defaultCity;
    document.getElementById('itiPeriod').value = 'Manhã';
    document.getElementById('itiActivity').value = '';
    document.getElementById('itiNotes').value = '';
    document.getElementById('itiStatus').value = 'Pendente';
  }
  openModal('itineraryModal');
}

function saveItineraryItem(e) {
  e.preventDefault();
  const id = document.getElementById('itiId').value;
  const payload = {
    id: id || 'iti-' + Date.now(),
    date: document.getElementById('itiDate').value.trim(),
    day: document.getElementById('itiDay').value.trim(),
    city: document.getElementById('itiCity').value.trim(),
    period: document.getElementById('itiPeriod').value,
    activity: document.getElementById('itiActivity').value.trim(),
    notes: document.getElementById('itiNotes').value.trim(),
    status: document.getElementById('itiStatus').value
  };
  if (id) {
    const idx = state.itinerary.findIndex(i => i.id === id);
    if (idx >= 0) state.itinerary[idx] = payload;
  } else {
    state.itinerary.push(payload);
  }
  saveState();
  closeModal('itineraryModal');
  showToast('Roteiro salvo!');
}

function deleteItineraryItem(id) {
  if (!confirm('Deseja remover esta atividade do roteiro?')) return;
  state.itinerary = state.itinerary.filter(i => i.id !== id);
  saveState();
  showToast('Atividade removida.');
}

// Hospedagens
function updateStayStatus(id, newStatus) {
  const s = state.stays.find(x => x.id === id);
  if (s) {
    s.status = newStatus;
    saveState();
    showToast('Status da hospedagem atualizado!');
  }
}

function openStayModal(id = null) {
  if (id) {
    const s = state.stays.find(x => x.id === id);
    if (!s) return;
    document.getElementById('stayId').value = s.id;
    document.getElementById('stayCity').value = s.city;
    document.getElementById('stayNights').value = s.nights;
    document.getElementById('stayCheckIn').value = s.checkIn;
    document.getElementById('stayCheckOut').value = s.checkOut;
    document.getElementById('stayName').value = s.name;
    document.getElementById('stayLink').value = s.link || '';
    document.getElementById('stayPrice').value = s.price || '';
    document.getElementById('stayStatus').value = s.status.trim();
    document.getElementById('stayNotes').value = s.notes || '';
  } else {
    document.getElementById('stayId').value = '';
    document.getElementById('stayCity').value = '';
    document.getElementById('stayNights').value = 2;
    document.getElementById('stayCheckIn').value = '15/03/2027';
    document.getElementById('stayCheckOut').value = '17/03/2027';
    document.getElementById('stayName').value = '';
    document.getElementById('stayLink').value = '';
    document.getElementById('stayPrice').value = '';
    document.getElementById('stayStatus').value = 'A pesquisar';
    document.getElementById('stayNotes').value = '';
  }
  openModal('stayModal');
}

function saveStayItem(e) {
  e.preventDefault();
  const id = document.getElementById('stayId').value;
  const payload = {
    id: id || 'stay-' + Date.now(),
    city: document.getElementById('stayCity').value.trim(),
    nights: parseInt(document.getElementById('stayNights').value, 10) || 1,
    checkIn: document.getElementById('stayCheckIn').value.trim(),
    checkOut: document.getElementById('stayCheckOut').value.trim(),
    name: document.getElementById('stayName').value.trim(),
    link: document.getElementById('stayLink').value.trim(),
    price: parseFloat(document.getElementById('stayPrice').value) || 0,
    status: document.getElementById('stayStatus').value,
    notes: document.getElementById('stayNotes').value.trim()
  };
  if (id) {
    const idx = state.stays.findIndex(x => x.id === id);
    if (idx >= 0) state.stays[idx] = payload;
  } else {
    state.stays.push(payload);
  }
  saveState();
  closeModal('stayModal');
  showToast('Hospedagem salva!');
}

function deleteStayItem(id) {
  if (!confirm('Remover este card de hospedagem?')) return;
  state.stays = state.stays.filter(x => x.id !== id);
  saveState();
  showToast('Hospedagem removida.');
}

// Checklist
function setChecklistFilter(filterVal) {
  checklistFilter = filterVal;
  document.querySelectorAll('#tab-checklist .pill-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  renderChecklist();
}

function toggleChecklistQuick(id) {
  const c = state.checklist.find(x => x.id === id);
  if (c) {
    c.status = c.status === 'Concluído' ? 'Pendente' : 'Concluído';
    saveState();
    showToast(c.status === 'Concluído' ? '✅ Item concluído!' : 'Item marcado como pendente');
  }
}

function updateChecklistStatus(id, status) {
  const c = state.checklist.find(x => x.id === id);
  if (c) {
    c.status = status;
    saveState();
    showToast('Checklist atualizado!');
  }
}

function openChecklistModal(id = null) {
  if (id) {
    const c = state.checklist.find(x => x.id === id);
    if (!c) return;
    document.getElementById('chkId').value = c.id;
    document.getElementById('chkItem').value = c.item;
    document.getElementById('chkDesc').value = c.desc;
    document.getElementById('chkDeadline').value = c.deadline || '';
    document.getElementById('chkOwner').value = c.owner || 'Ambos';
    document.getElementById('chkStatus').value = c.status;
  } else {
    document.getElementById('chkId').value = '';
    document.getElementById('chkItem').value = '';
    document.getElementById('chkDesc').value = '';
    document.getElementById('chkDeadline').value = 'Antes da viagem';
    document.getElementById('chkOwner').value = 'Ambos';
    document.getElementById('chkStatus').value = 'Pendente';
  }
  openModal('checklistModal');
}

function saveChecklistItem(e) {
  e.preventDefault();
  const id = document.getElementById('chkId').value;
  const payload = {
    id: id || 'chk-' + Date.now(),
    item: document.getElementById('chkItem').value.trim(),
    desc: document.getElementById('chkDesc').value.trim(),
    deadline: document.getElementById('chkDeadline').value.trim(),
    owner: document.getElementById('chkOwner').value,
    status: document.getElementById('chkStatus').value
  };
  if (id) {
    const idx = state.checklist.findIndex(x => x.id === id);
    if (idx >= 0) state.checklist[idx] = payload;
  } else {
    state.checklist.push(payload);
  }
  saveState();
  closeModal('checklistModal');
  showToast('Item do checklist salvo!');
}

function deleteChecklistItem(id) {
  if (!confirm('Deseja excluir este item do checklist?')) return;
  state.checklist = state.checklist.filter(x => x.id !== id);
  saveState();
}

// Financeiro
function openExpenseModal(id = null) {
  if (id) {
    const e = state.expenses.find(x => x.id === id);
    if (!e) return;
    document.getElementById('expId').value = e.id;
    document.getElementById('expTitle').value = e.title;
    document.getElementById('expCategory').value = e.category;
    document.getElementById('expStatus').value = e.status;
    document.getElementById('expEstimated').value = e.estimated;
    document.getElementById('expPaid').value = e.paid;
    document.getElementById('expPayer').value = e.payer || '50/50';
  } else {
    document.getElementById('expId').value = '';
    document.getElementById('expTitle').value = '';
    document.getElementById('expCategory').value = 'Hospedagem';
    document.getElementById('expStatus').value = 'Previsto';
    document.getElementById('expEstimated').value = '';
    document.getElementById('expPaid').value = 0;
    document.getElementById('expPayer').value = '50/50';
  }
  openModal('expenseModal');
}

function saveExpenseItem(ev) {
  ev.preventDefault();
  const id = document.getElementById('expId').value;
  const payload = {
    id: id || 'exp-' + Date.now(),
    title: document.getElementById('expTitle').value.trim(),
    category: document.getElementById('expCategory').value,
    status: document.getElementById('expStatus').value,
    estimated: parseFloat(document.getElementById('expEstimated').value) || 0,
    paid: parseFloat(document.getElementById('expPaid').value) || 0,
    payer: document.getElementById('expPayer').value
  };
  if (id) {
    const idx = state.expenses.findIndex(x => x.id === id);
    if (idx >= 0) state.expenses[idx] = payload;
  } else {
    state.expenses.push(payload);
  }
  saveState();
  closeModal('expenseModal');
  showToast('Despesa salva!');
}

function deleteExpenseItem(id) {
  if (!confirm('Deseja remover esta despesa?')) return;
  state.expenses = state.expenses.filter(x => x.id !== id);
  saveState();
}

// Config Casal
function openTravelersModal() {
  document.getElementById('cfgPerson1').value = state.config?.person1 || 'Viajante 1';
  document.getElementById('cfgPerson2').value = state.config?.person2 || 'Viajante 2';
  document.getElementById('cfgBudgetGoal').value = state.config?.budgetGoal || 8890;
  openModal('travelersModal');
}

function saveTravelersConfig(e) {
  e.preventDefault();
  state.config = {
    person1: document.getElementById('cfgPerson1').value.trim() || 'Viajante 1',
    person2: document.getElementById('cfgPerson2').value.trim() || 'Viajante 2',
    budgetGoal: parseFloat(document.getElementById('cfgBudgetGoal').value) || 8000
  };
  saveState();
  closeModal('travelersModal');
  showToast('Nomes e meta atualizados!');
}

// ============================================================================
// EXPORTAR PARA EXCEL (.XLSX) E BACKUP JSON
// ============================================================================
function exportToExcel() {
  if (typeof XLSX === 'undefined') {
    showToast('Biblioteca Excel ainda carregando...');
    return;
  }
  const wb = XLSX.utils.book_new();

  // Aba 1: DADOS DO VOO
  const wsVoos = XLSX.utils.aoa_to_sheet([
    ['Dados do Voo'],
    ['ida ', state.flights.outDate, state.flights.outRoute, state.flights.outNotes],
    ['volta', state.flights.retDate, state.flights.retRoute, state.flights.retNotes],
    [`valor total = ${state.flights.totalCost}`]
  ]);
  XLSX.utils.book_append_sheet(wb, wsVoos, 'DADOS DO VOO');

  // Aba 2: ROTEIRO
  const roteiroRows = [
    ['VIAGEM A DOIS — FLORIANÓPOLIS E URUBICI'],
    [null, null, null, null, '15 a 22 de março de 2027 | Saída de Manaus | Aniversário: 17/03'],
    ['Data', 'Dia', 'Cidade/Região', 'Período ', 'Atividade / passeio', 'Observações', 'Status'],
    ...state.itinerary.map(i => [i.date, i.day, i.city, i.period, i.activity, i.notes, i.status])
  ];
  const wsRoteiro = XLSX.utils.aoa_to_sheet(roteiroRows);
  XLSX.utils.book_append_sheet(wb, wsRoteiro, 'ROTEIRO ');

  // Aba 3: HOSPEDAGEM
  const hospRows = [
    ['CONTROLE DE HOSPEDAGEM'],
    ['Cidade ', 'check-in', 'Check-out', 'Noites', 'Hospedagem/ link ', 'Valor / Status'],
    ...state.stays.map(s => [
      s.city,
      s.checkIn,
      s.checkOut,
      s.nights,
      s.link ? `${s.name} (${s.link})` : s.name,
      `${s.price ? 'R$ ' + s.price + ' - ' : ''}${s.status}`
    ])
  ];
  const wsHosp = XLSX.utils.aoa_to_sheet(hospRows);
  XLSX.utils.book_append_sheet(wb, wsHosp, 'HOSPEDAGEM');

  // Aba 4: RESERVA E CHECKLIST DA VIAGEM
  const chkRows = [
    ['RESERVAS E CHECKLIST DA VIAGEM'],
    ['Item ', 'O que conferir / providenciar', 'Prazo / data', 'Status', 'Responsável'],
    ...state.checklist.map(c => [c.item, c.desc, c.deadline, c.status, c.owner])
  ];
  const wsChk = XLSX.utils.aoa_to_sheet(chkRows);
  XLSX.utils.book_append_sheet(wb, wsChk, 'RESERVA E CHECKLIST DA VIAGEM ');

  // Aba 5: FINANCEIRO
  const finRows = [
    ['CONTROLE FINANCEIRO DA VIAGEM'],
    ['Descrição', 'Categoria', 'Previsto (R$)', 'Pago (R$)', 'Pago por', 'Status'],
    ...state.expenses.map(e => [e.title, e.category, e.estimated, e.paid, e.payer, e.status])
  ];
  const wsFin = XLSX.utils.aoa_to_sheet(finRows);
  XLSX.utils.book_append_sheet(wb, wsFin, 'FINANCEIRO');

  XLSX.writeFile(wb, 'roteiro-florianopolis-urubici-2027.xlsx');
  showToast('Planilha .xlsx exportada com sucesso!');
}

function exportBackupJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'backup-viagem-floripa-urubici.json';
  a.click();
}

function importBackupJson(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported && imported.itinerary) {
        state = imported;
        saveState();
        closeModal('syncModal');
        showToast('Backup importado com sucesso!');
      }
    } catch (err) {
      alert('Arquivo JSON inválido.');
    }
  };
  reader.readAsText(file);
}

function resetToSpreadsheetDefaults() {
  if (!confirm('Isso restaurará todos os itens para os dados originais da planilha roteiro.xlsx. Continuar?')) return;
  state = JSON.parse(JSON.stringify(DEFAULT_STATE));
  saveState();
  closeModal('syncModal');
  showToast('Dados originais da planilha restaurados!');
}

function parseWorkbookIntoState(wb) {
  // Lê a aba ROTEIRO se existir
  const roteiroSheetName = wb.SheetNames.find(n => n.toUpperCase().includes('ROTEIRO'));
  if (roteiroSheetName) {
    const rows = XLSX.utils.sheet_to_json(wb.Sheets[roteiroSheetName], { header: 1, raw: false });
    const parsedIti = [];
    rows.forEach((r, idx) => {
      if (idx >= 3 && r && r[0] && r[4]) {
        parsedIti.push({
          id: 'iti-' + idx,
          date: String(r[0] || '').trim(),
          day: String(r[1] || '').trim(),
          city: String(r[2] || '').trim(),
          period: String(r[3] || 'Manhã').trim(),
          activity: String(r[4] || '').trim(),
          notes: String(r[5] || '').trim(),
          status: String(r[6] || 'Pendente').trim()
        });
      }
    });
    if (parsedIti.length > 0) state.itinerary = parsedIti;
  }

  // Lê a aba RESERVA E CHECKLIST se existir
  const chkSheetName = wb.SheetNames.find(n => n.toUpperCase().includes('CHECKLIST'));
  if (chkSheetName) {
    const rows = XLSX.utils.sheet_to_json(wb.Sheets[chkSheetName], { header: 1, raw: false });
    const parsedChk = [];
    rows.forEach((r, idx) => {
      if (idx >= 2 && r && r[0] && r[1]) {
        parsedChk.push({
          id: 'chk-' + idx,
          item: String(r[0] || '').trim(),
          desc: String(r[1] || '').trim(),
          deadline: String(r[2] || '').trim(),
          status: String(r[3] || 'Pendente').trim(),
          owner: String(r[4] || 'Ambos').trim()
        });
      }
    });
    if (parsedChk.length > 0) state.checklist = parsedChk;
  }
}

async function loadFromRepoExcel() {
  if (!confirm('Deseja recarregar os dados diretamente do arquivo roteiro.xlsx publicado no repositório?')) return;
  try {
    const res = await fetch('./roteiro.xlsx');
    if (!res.ok) throw new Error('Arquivo roteiro.xlsx não encontrado');
    const buf = await res.arrayBuffer();
    const wb = XLSX.read(buf, { type: 'array' });
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    parseWorkbookIntoState(wb);
    saveState();
    closeModal('syncModal');
    showToast('Dados recarregados diretamente de roteiro.xlsx!');
  } catch (err) {
    console.warn(err);
    resetToSpreadsheetDefaults();
  }
}

function importFromExcelFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const wb = XLSX.read(new Uint8Array(e.target.result), { type: 'array' });
      parseWorkbookIntoState(wb);
      saveState();
      closeModal('syncModal');
      showToast('Planilha .xlsx importada com sucesso!');
    } catch (err) {
      alert('Erro ao ler a planilha .xlsx');
    }
  };
  reader.readAsArrayBuffer(file);
}

// ============================================================================
// CONTAGEM REGRESSIVA PARA 15/03/2027 03:55
// ============================================================================
function updateCountdown() {
  const target = new Date('2027-03-15T03:55:00-04:00').getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById('cdDays').textContent = days;
  document.getElementById('cdHours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cdMins').textContent = String(mins).padStart(2, '0');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  updateCountdown();
  setInterval(updateCountdown, 30000);
  startCloudPolling();
});
