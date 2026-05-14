   // ── DADOS ──
        const servicos = [{
            id: 1,
            titulo: "Alvenaria e construção de muros",
            categoria: "alvenaria",
            desc: "Construção de muros, paredes em tijolo, blocos e concreto. Experiência de 15 anos.",
            prof: "Carlos Almeida",
            cidade: "Peabiru, PR",
            nota: 4.9,
            avaliacoes: 87,
            preco: 120,
            tag: "Verificado",
            img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
            avatar: "https://i.pravatar.cc/80?img=12"
        }, {
            id: 2,
            titulo: "Reboco externo e interno",
            categoria: "reboco",
            desc: "Reboco massa única, chapisco e emboço para qualquer superfície. Acabamento impecável.",
            prof: "Marcos Souza",
            cidade: "Campo Mourão, PR",
            nota: 4.7,
            avaliacoes: 52,
            preco: 90,
            tag: "Destaque",
            img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80",
            avatar: "https://i.pravatar.cc/80?img=33"
        }, {
            id: 3,
            titulo: "Assentamento de piso e cerâmica",
            categoria: "piso",
            desc: "Piso porcelanato, cerâmica, ladrilho hidráulico. Corte preciso e rejunte perfeito.",
            prof: "Diego Ferreira",
            cidade: "Peabiru, PR",
            nota: 5.0,
            avaliacoes: 134,
            preco: 75,
            tag: "Verificado",
            img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
            avatar: "https://i.pravatar.cc/80?img=41"
        }, {
            id: 4,
            titulo: "Azulejo e pastilhas de banheiro",
            categoria: "azulejo",
            desc: "Azulejista especializado em banheiros e cozinhas. Corte manual e elétrico.",
            prof: "Roberto Lima",
            cidade: "Maringá, PR",
            nota: 4.8,
            avaliacoes: 61,
            preco: 100,
            tag: "",
            img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80",
            avatar: "https://i.pravatar.cc/80?img=56"
        }, {
            id: 5,
            titulo: "Reforma completa de casa",
            categoria: "reforma",
            desc: "Faço reformas do zero: elétrica, hidráulica, alvenaria, acabamento e pintura.",
            prof: "Paulo Gomes",
            cidade: "Cascavel, PR",
            nota: 4.6,
            avaliacoes: 29,
            preco: 200,
            tag: "Destaque",
            img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
            avatar: "https://i.pravatar.cc/80?img=62"
        }, {
            id: 6,
            titulo: "Demolição controlada",
            categoria: "demolição",
            desc: "Derrubada de paredes, lajes, fundações. Retirada de entulho inclusa no serviço.",
            prof: "André Matos",
            cidade: "Peabiru, PR",
            nota: 4.5,
            avaliacoes: 18,
            preco: 150,
            tag: "",
            img: "https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?w=400&q=80",
            avatar: "https://i.pravatar.cc/80?img=70"
        }, {
            id: 7,
            titulo: "Fundação e radier",
            categoria: "fundação",
            desc: "Execução de sapata corrida, radier, balancim e estaca. Serviço com laudo técnico.",
            prof: "Fábio Torres",
            cidade: "Curitiba, PR",
            nota: 4.9,
            avaliacoes: 43,
            preco: 250,
            tag: "Verificado",
            img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80",
            avatar: "https://i.pravatar.cc/80?img=8"
        }, {
            id: 8,
            titulo: "Instalação hidráulica",
            categoria: "hidráulica",
            desc: "Encanamento, troca de canos, instalação de banheiros e cozinhas completas.",
            prof: "Leandro Costa",
            cidade: "Campo Mourão, PR",
            nota: 4.7,
            avaliacoes: 77,
            preco: 110,
            tag: "",
            img: "https://images.unsplash.com/photo-1585704032915-c3400305e979?w=400&q=80",
            avatar: "https://i.pravatar.cc/80?img=15"
        }, ];

        const categorias = [{
            nome: "Alvenaria",
            icon: "🧱",
            filtro: "alvenaria",
            count: 34
        }, {
            nome: "Reboco",
            icon: "🪣",
            filtro: "reboco",
            count: 21
        }, {
            nome: "Piso",
            icon: "🔲",
            filtro: "piso",
            count: 45
        }, {
            nome: "Azulejo",
            icon: "🏠",
            filtro: "azulejo",
            count: 28
        }, {
            nome: "Reforma",
            icon: "🔨",
            filtro: "reforma",
            count: 67
        }, {
            nome: "Demolição",
            icon: "⛏️",
            filtro: "demolição",
            count: 12
        }, {
            nome: "Fundação",
            icon: "🏗️",
            filtro: "fundação",
            count: 19
        }, {
            nome: "Hidráulica",
            icon: "🔧",
            filtro: "hidráulica",
            count: 31
        }, ];

        let filtroAtivo = "todos";
        let favs = new Set();
        let visiveis = 6;
        let buscaTermo = "";

        // ── RENDER CATEGORIAS ──
        function renderCategorias() {
            const grid = document.getElementById("categoriasGrid");
            grid.innerHTML = categorias.map(c => `
    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
      <div class="cat-card" onclick="filtrarPor('${c.filtro}')">
        <div class="cat-icon">${c.icon}</div>
        <div class="cat-name">${c.nome}</div>
        <div class="cat-count">${c.count} profissionais</div>
      </div>
    </div>
  `).join('');
        }

        // ── RENDER CARDS ──
        function renderCards() {
            const ordem = document.getElementById("selectOrdem").value;
            let lista = servicos.filter(s => {
                const matchFiltro = filtroAtivo === "todos" || s.categoria === filtroAtivo;
                const matchBusca = !buscaTermo || s.titulo.toLowerCase().includes(buscaTermo) || s.desc.toLowerCase().includes(buscaTermo) || s.categoria.includes(buscaTermo);
                return matchFiltro && matchBusca;
            });

            if (ordem === "preco_asc") lista.sort((a, b) => a.preco - b.preco);
            else if (ordem === "preco_desc") lista.sort((a, b) => b.preco - a.preco);
            else if (ordem === "avaliacao") lista.sort((a, b) => b.nota - a.nota);

            const mostrar = lista.slice(0, visiveis);
            const grid = document.getElementById("cardsGrid");
            const semRes = document.getElementById("semResultados");
            const btnMais = document.getElementById("btnMaisWrap");
            document.getElementById("totalResultados").textContent = lista.length + " resultado(s)";

            if (!lista.length) {
                grid.innerHTML = "";
                semRes.classList.remove("d-none");
                btnMais.classList.add("d-none");
                return;
            }
            semRes.classList.add("d-none");
            btnMais.classList.toggle("d-none", mostrar.length >= lista.length);

            grid.innerHTML = mostrar.map(s => {
                        const stars = "★".repeat(Math.floor(s.nota)) + (s.nota % 1 >= 0.5 ? "½" : "");
                        const favIcon = favs.has(s.id) ? "bi-heart-fill" : "bi-heart";
                        const favClass = favs.has(s.id) ? "ativo" : "";
                        const badgeClass = s.tag === "Verificado" ? "badge-verificado" : "";
                        return `
      <div class="col-sm-6 col-lg-4">
        <div class="service-card" onclick="abrirDetalhes(${s.id})">
          <div class="card-img-wrap">
            <img src="${s.img}" alt="${s.titulo}" loading="lazy" />
            ${s.tag ? `<span class="card-badge ${badgeClass}">${s.tag}</span>` : ""}
            <button class="card-fav ${favClass}" onclick="toggleFav(event,${s.id})">
              <i class="bi ${favIcon}"></i>
            </button>
          </div>
          <div class="card-body-custom">
            <div class="prof-row">
              <img src="${s.avatar}" class="prof-avatar" alt="${s.prof}"/>
              <div>
                <div class="prof-name">${s.prof}</div>
                <div class="prof-loc"><i class="bi bi-geo-alt me-1"></i>${s.cidade}</div>
              </div>
            </div>
            <div class="card-service-title">${s.titulo}</div>
            <div class="card-desc">${s.desc}</div>
            <div class="stars-row">
              <span class="stars">${stars}</span>
              <span>${s.nota.toFixed(1)}</span>
              <span class="count">(${s.avaliacoes} avaliações)</span>
            </div>
            <div class="price-row">
              <div>
                <div class="price-from">a partir de</div>
                <div class="price-val">R$ ${s.preco}/dia</div>
              </div>
              <button class="btn-contratar" onclick="abrirDetalhes(${s.id}); event.stopPropagation()">
                Ver mais
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ── FILTROS ──
function filtrarPor(f) {
  filtroAtivo = f;
  visiveis = 6;
  document.querySelectorAll(".filter-pill").forEach(p => {
    p.classList.toggle("active", p.dataset.filtro === f);
  });
  renderCards();
  document.getElementById("cardsGrid").scrollIntoView({ behavior:"smooth", block:"start" });
}

document.querySelectorAll(".filter-pill").forEach(p => {
  p.addEventListener("click", () => filtrarPor(p.dataset.filtro));
});

// ── BUSCA ──
function buscarServicos() {
  buscaTermo = document.getElementById("inputBusca").value.trim().toLowerCase();
  filtroAtivo = "todos";
  visiveis = 6;
  document.querySelectorAll(".filter-pill").forEach(p => p.classList.toggle("active", p.dataset.filtro==="todos"));
  renderCards();
  document.getElementById("cardsGrid").scrollIntoView({ behavior:"smooth", block:"start" });
}
document.getElementById("inputBusca").addEventListener("keydown", e => { if(e.key==="Enter") buscarServicos(); });

// ── FAV ──
function toggleFav(e, id) {
  e.stopPropagation();
  if(favs.has(id)) { favs.delete(id); toast("❤️ Removido dos favoritos"); }
  else { favs.add(id); toast("❤️ Adicionado aos favoritos!"); }
  renderCards();
}

// ── CARREGAR MAIS ──
function carregarMais() { visiveis += 3; renderCards(); }

// ── MODAL DETALHES ──
function abrirDetalhes(id) {
  const s = servicos.find(x=>x.id===id);
  if(!s) return;
  document.getElementById("modalTitulo").textContent = s.titulo;
  const stars = "★".repeat(Math.floor(s.nota)) + (s.nota%1>=0.5?"½":"");
  document.getElementById("modalConteudo").innerHTML = `
    <img src="${s.img}" style="width:100%;height:200px;object-fit:cover;border-radius:12px;margin-bottom:16px;" alt="">
    <div class="d-flex align-items-center gap-3 mb-3">
      <img src="${s.avatar}" style="width:50px;height:50px;border-radius:50%;object-fit:cover;border:2px solid #eee;">
      <div>
        <div style="font-weight:600;">${s.prof}</div>
        <div style="font-size:.82rem;color:#888;"><i class="bi bi-geo-alt me-1"></i>${s.cidade}</div>
      </div>
      ${s.tag?`<span style="margin-left:auto;background:${s.tag==='Verificado'?'#1A7F37':'var(--laranja)'};color:#fff;border-radius:6px;font-size:.72rem;padding:3px 10px;">${s.tag}</span>`:''}
    </div>
    <p style="color:#555;font-size:.9rem;line-height:1.7;">${s.desc}</p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:16px;">
      <div style="background:#F5F4F0;border-radius:10px;padding:12px 18px;flex:1;min-width:120px;text-align:center;">
        <div style="font-size:.75rem;color:#888;margin-bottom:4px;">Avaliação</div>
        <div style="font-family:'Syne',sans-serif;font-weight:700;color:var(--laranja);">${stars} ${s.nota}</div>
        <div style="font-size:.72rem;color:#aaa;">(${s.avaliacoes} avaliações)</div>
      </div>
      <div style="background:#F5F4F0;border-radius:10px;padding:12px 18px;flex:1;min-width:120px;text-align:center;">
        <div style="font-size:.75rem;color:#888;margin-bottom:4px;">Preço</div>
        <div style="font-family:'Syne',sans-serif;font-weight:700;color:var(--laranja);">R$ ${s.preco}/dia</div>
        <div style="font-size:.72rem;color:#aaa;">orçamento grátis</div>
      </div>
      <div style="background:#F5F4F0;border-radius:10px;padding:12px 18px;flex:1;min-width:120px;text-align:center;">
        <div style="font-size:.75rem;color:#888;margin-bottom:4px;">Categoria</div>
        <div style="font-family:'Syne',sans-serif;font-weight:700;text-transform:capitalize;">${s.categoria}</div>
      </div>
    </div>
    <div class="d-flex gap-2">
      <button onclick="entrarContato('${s.prof}')" class="btn flex-1" style="flex:1;background:var(--laranja);color:#fff;border-radius:10px;font-family:'Syne',sans-serif;font-weight:700;padding:12px;">
        <i class="bi bi-whatsapp me-1"></i>Entrar em contato
      </button>
      <button onclick="solicitarOrcamento('${s.prof}')" class="btn" style="border:1.5px solid var(--laranja);color:var(--laranja);border-radius:10px;font-family:'Syne',sans-serif;font-weight:600;padding:12px 14px;">
        <i class="bi bi-file-text"></i>
      </button>
    </div>
  `;
  abrirModal("modalDetalhes");
}

function entrarContato(nome) {
  fecharModal("modalDetalhes");
  toast("📱 Abrindo WhatsApp de " + nome + "...");
}
function solicitarOrcamento(nome) {
  fecharModal("modalDetalhes");
  toast("📋 Orçamento solicitado para " + nome + "!");
}

// ── MODAL ANUNCIAR ──
function abrirModalAnunciar(e) { e.preventDefault(); abrirModal("modalAnunciar"); }
function enviarAnuncio(e) {
  e.preventDefault();
  fecharModal("modalAnunciar");
  toast("✅ Anúncio publicado com sucesso!");
}

// ── MODAL HELPERS ──
function abrirModal(id) { document.getElementById(id).classList.add("show"); }
function fecharModal(id) { document.getElementById(id).classList.remove("show"); }
document.querySelectorAll(".modal-overlay").forEach(m => {
  m.addEventListener("click", e => { if(e.target===m) m.classList.remove("show"); });
});

// ── TOAST ──
function toast(msg) {
  const c = document.getElementById("toastContainer");
  const d = document.createElement("div");
  d.className = "toast-msg";
  d.innerHTML = `<span>${msg}</span>`;
  c.appendChild(d);
  setTimeout(()=>{ d.style.opacity="0"; d.style.transition="opacity .3s"; setTimeout(()=>d.remove(),300); }, 2800);
}

// ── INIT ──
renderCategorias();
renderCards();