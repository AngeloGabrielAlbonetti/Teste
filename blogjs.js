 // Base de dados de posts
        const posts = [
            {
                id: 1,
                title: 'React 19: Novas Features e Melhorias',
                excerpt: 'Conheça as principais novidades do React 19, incluindo melhorias de performance e novas APIs para desenvolvimento mais eficiente.',
                category: 'dev',
                author: 'Lucas Silva',
                date: '2026-05-09',
                readTime: '8 min',
                icon: '⚛️'
            },
            {
                id: 2,
                title: 'Inteligência Artificial Generativa na Prática',
                excerpt: 'Um guia completo sobre como integrar modelos de IA generativa em suas aplicações web e mobile.',
                category: 'ai',
                author: 'Maria Santos',
                date: '2026-05-02',
                readTime: '12 min',
                icon: '🤖'
            },
            {
                id: 3,
                title: 'Docker e Containerização: O Guia Definitivo',
                excerpt: 'Aprenda a usar Docker para containerizar suas aplicações e facilitar o deployment em diferentes ambientes.',
                category: 'cloud',
                author: 'João Costa',
                date: '2026-04-28',
                readTime: '15 min',
                icon: '🐳'
            },
            {
                id: 4,
                title: 'Tendências em Segurança da Informação 2026',
                excerpt: 'Análise das principais tendências e desafios em segurança de dados e proteção contra ameaças cibernéticas.',
                category: 'tech',
                author: 'Ana Paula',
                date: '2026-04-21',
                readTime: '10 min',
                icon: '🔒'
            },
            {
                id: 5,
                title: 'Kubernetes: Orquestração de Containers em Escala',
                excerpt: 'Domine Kubernetes e aprenda a orquestrar containers em ambientes de produção com alta disponibilidade.',
                category: 'cloud',
                author: 'Carlos Mendes',
                date: '2026-04-18',
                readTime: '14 min',
                icon: '☸️'
            },
            {
                id: 6,
                title: 'Machine Learning para Iniciantes',
                excerpt: 'Introdução prática a machine learning com Python, incluindo exemplos reais e ferramentas populares.',
                category: 'ai',
                author: 'Felipe Oliveira',
                date: '2026-04-15',
                readTime: '13 min',
                icon: '📊'
            },
            {
                id: 7,
                title: 'Vue 3 Composition API: Tudo Que Você Precisa Saber',
                excerpt: 'Guia completo sobre a Composition API do Vue 3, com exemplos práticos e boas práticas.',
                category: 'dev',
                author: 'Laura Ferreira',
                date: '2026-04-10',
                readTime: '11 min',
                icon: '🖖'
            },
            {
                id: 8,
                title: 'Cloud Computing: AWS vs Azure vs Google Cloud',
                excerpt: 'Comparação detalhada entre os principais provedores de cloud e como escolher o melhor para seu projeto.',
                category: 'cloud',
                author: 'Rafael Teixeira',
                date: '2026-04-08',
                readTime: '9 min',
                icon: '☁️'
            },
            {
                id: 9,
                title: 'Redes Neurais Convolucionais para Visão Computacional',
                excerpt: 'Entenda como funcionam as CNNs e como utilizá-las em projetos de reconhecimento de imagens.',
                category: 'ai',
                author: 'Beatriz Lima',
                date: '2026-04-05',
                readTime: '16 min',
                icon: '👁️'
            },
            {
                id: 10,
                title: 'Performance em Aplicações Web: Otimizações Essenciais',
                excerpt: 'Técnicas comprovadas para otimizar a performance de suas aplicações web e melhorar UX.',
                category: 'dev',
                author: 'Gustavo Rocha',
                date: '2026-03-30',
                readTime: '10 min',
                icon: '⚡'
            },
            {
                id: 11,
                title: 'DevOps: CI/CD e Automação de Deploy',
                excerpt: 'Implemente pipelines de CI/CD eficientes e automatize seu processo de desenvolvimento e deployment.',
                category: 'cloud',
                author: 'Mariana Costa',
                date: '2026-03-25',
                readTime: '12 min',
                icon: '🔄'
            },
            {
                id: 12,
                title: 'NLP: Processamento de Linguagem Natural com Python',
                excerpt: 'Aprenda técnicas de NLP para processar e analisar textos, desde análise de sentimentos até chatbots.',
                category: 'ai',
                author: 'Ricardo Santos',
                date: '2026-03-20',
                readTime: '14 min',
                icon: '📝'
            }
        ];

        let currentFilter = 'todos';
        let currentPage = 1;
        const postsPerPage = 6;

        // Renderizar posts
        function renderPosts(filter = 'todos', page = 1) {
            const blogGrid = document.getElementById('blogGrid');
            let filteredPosts = filter === 'todos' ? posts : posts.filter(p => p.category === filter);
            
            const startIdx = (page - 1) * postsPerPage;
            const paginatedPosts = filteredPosts.slice(startIdx, startIdx + postsPerPage);

            blogGrid.innerHTML = paginatedPosts.map(post => {
                const categoryName = {
                    tech: 'Tecnologia',
                    ai: 'IA & ML',
                    dev: 'Desenvolvimento',
                    cloud: 'Cloud'
                }[post.category];

                return `
                    <a href="#" class="blog-card">
                        <div class="blog-image ${post.category}">
                            ${post.icon}
                        </div>
                        <div class="blog-content">
                            <span class="blog-category">${categoryName}</span>
                            <h3 class="blog-title">${post.title}</h3>
                            <p class="blog-excerpt">${post.excerpt}</p>
                            <div class="blog-footer">
                                <div class="blog-meta">
                                    <div class="blog-author">
                                        <div class="author-avatar">${post.author.charAt(0)}</div>
                                        <span>${post.author}</span>
                                    </div>
                                </div>
                                <span class="read-time">${post.readTime}</span>
                            </div>
                        </div>
                    </a>
                `;
            }).join('');

            renderPagination(filteredPosts.length, page);
        }

        // Renderizar paginação
        function renderPagination(totalPosts, currentPageNum) {
            const totalPages = Math.ceil(totalPosts / postsPerPage);
            const pagination = document.getElementById('pagination');
            
            let html = '';
            for (let i = 1; i <= totalPages; i++) {
                html += `<button class="page-btn ${i === currentPageNum ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
            }
            pagination.innerHTML = html;
        }

        // Filtrar posts
        function filterBlog(filter) {
            currentFilter = filter;
            currentPage = 1;
            
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            renderPosts(filter, 1);
        }

        // Ir para página
        function goToPage(page) {
            currentPage = page;
            renderPosts(currentFilter, page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Buscar posts
        function searchBlog() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            if (!query) {
                renderPosts(currentFilter, 1);
                return;
            }

            const blogGrid = document.getElementById('blogGrid');
            const filtered = posts.filter(p => 
                p.title.toLowerCase().includes(query) || 
                p.excerpt.toLowerCase().includes(query)
            );

            if (filtered.length === 0) {
                blogGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px;"><p style="color: #666;">Nenhum artigo encontrado.</p></div>';
                document.getElementById('pagination').innerHTML = '';
                return;
            }

            blogGrid.innerHTML = filtered.map(post => {
                const categoryName = {
                    tech: 'Tecnologia',
                    ai: 'IA & ML',
                    dev: 'Desenvolvimento',
                    cloud: 'Cloud'
                }[post.category];

                return `
                    <a href="#" class="blog-card">
                        <div class="blog-image ${post.category}">
                            ${post.icon}
                        </div>
                        <div class="blog-content">
                            <span class="blog-category">${categoryName}</span>
                            <h3 class="blog-title">${post.title}</h3>
                            <p class="blog-excerpt">${post.excerpt}</p>
                            <div class="blog-footer">
                                <div class="blog-meta">
                                    <div class="blog-author">
                                        <div class="author-avatar">${post.author.charAt(0)}</div>
                                        <span>${post.author}</span>
                                    </div>
                                </div>
                                <span class="read-time">${post.readTime}</span>
                            </div>
                        </div>
                    </a>
                `;
            }).join('');

            document.getElementById('pagination').innerHTML = '';
        }

        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('searchInput').addEventListener('keypress', (e) => {
                if (e.key === 'Enter') searchBlog();
            });

            // Renderizar posts iniciais
            renderPosts();

            // Intersection Observer para animações
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.blog-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s, transform 0.6s';
                observer.observe(card);
            });
        });