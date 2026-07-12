<a href="./index">🔙 Início</a>

# 🎮 Desenvolvimento de Jogos

Portfólio de desenvolvimento de jogos com foco na criação de sistemas de gameplay robustos e escaláveis.

Este portfólio destaca a arquitetura central de um projeto ainda não anunciado, incluindo suporte a multiplayer, sistemas de IA, design de combate e sistemas orientados ao jogador, como inventário e customização.

Grande ênfase é dada ao design modular, responsabilidades bem definidas entre sistemas e implementações com foco em performance para suportar funcionalidades de gameplay complexas e em constante evolução.

<!-- 1 -->
<Collapsible title="Controlador do Personagem / Sistema de Customização 🕹️">

## 🖥️ Demonstração
<div class="video-row">
  <video autoplay loop muted playsinline>
    <source src="/videos/character_controller.mp4" type="video/mp4">
  </video>

  <video autoplay loop muted playsinline>
    <source src="/videos/character_customization.mp4" type="video/mp4">
  </video>
</div>

---

## ⚙️ Arquitetura do Controlador do Jogador

O sistema do jogador é dividido em componentes especializados, cada um responsável por um aspecto específico do comportamento, permitindo modularidade e facilidade de manutenção.

- **Controlador do Jogador**: Centraliza e coordena todos os componentes relacionados ao jogador.
- **Sistema de Movimento**: Encapsula a lógica de movimento, incluindo transições de estado (ex: andar, correr).
- **Gerenciador de Input**: Processa as entradas do jogador e as traduz em ações.
- **Sistema de Interação**: Gerencia interações com o mundo do jogo.
- **Controlador de Corpo**: Encapsula a lógica de animação e sincroniza camadas visuais.
- **Atributos do Jogador**: Gerencia atributos do personagem (ex: vida, força, defesa).

---

## 🎨 Customização do Personagem

Este sistema permite que o jogador personalize a aparência do personagem através de uma arquitetura modular de sprites em camadas.

Cada componente visual (ex: corpo, cabelo, olhos, equipamentos) é controlado de forma independente, permitindo combinações dinâmicas.

- ### Sincronização de Animação dos Partes do Corpo

Todas as animações dos corpo são sincronizadas para garantir movimentos coerentes do personagem.

Um **Controlador de Corpo** centralizado encapsula a lógica de animação e expõe uma interface unificada para controlar estados de animação em todas as camadas, garantindo sincronização precisa e consistente.

- ### Renderização Baseada em Paleta de Cores

Os sprites do personagem são armazenados em escala de cinza e mapeados para paletas de cores em tempo de execução usando shaders.

Isso permite personalização flexível de cores (ex: cabelo, olhos, pele) sem necessidade de múltiplas variações de texturas.

- ### Sistema de Equipamentos

O sistema de customização suporta troca de equipamentos em cinco camadas: armas, chapéus, corpo, pernas e sapatos.

Cada tipo de equipamento implementa seu próprio comportamento via polimorfismo, permitindo lógica especializada enquanto mantém uma interface consistente para integração com o sistema do personagem.

</Collapsible>

<!-- 2 -->
<Collapsible title="Controladores de NPCs / IA / Comportamento 🧠">

## 🖥️ Demonstração
<div class="video-row">
  <video autoplay loop muted playsinline>
    <source src="/videos/pathfinding_1.mp4" type="video/mp4">
  </video>

  <video autoplay loop muted playsinline>
    <source src="/videos/pathfinding_2.mp4" type="video/mp4">
  </video>

  <video autoplay loop muted playsinline>
    <source src="/videos/pathfinding_3.mp4" type="video/mp4">
  </video>

  <video autoplay loop muted playsinline>
    <source src="/videos/pathfinding_4.mp4" type="video/mp4">
  </video>
</div>

---

O sistema gerencia a movimentação, animação e lógica de comportamento de todos os personagens não jogáveis (NPCs), incluindo inimigos e entidades neutras.

A lógica dos NPCs é estruturada em componentes especializados, cada um responsável por um aspecto específico do comportamento.  
Esse design modular melhora a manutenção, escalabilidade e reutilização entre diferentes tipos de NPCs.

- **Controlador Central**: Centraliza e coordena todos os componentes.
- **Sistema de Movimento**: Encapsula a lógica de movimentação. Cada NPC possui um tipo específico de movimento derivado de um controlador base, permitindo comportamento compartilhado com implementações especializadas (ex: perseguir o jogador, fugir do jogador).
- **Controlador de Ataque**: Gerencia os ataques dos NPCs.
- **Controlador de Corpo do NPC**: Encapsula a lógica de animação.
- **Atributos do NPC**: Gerencia atributos (ex: vida, força, defesa).

---

## 🗺️ Pathfinding e Movimentação

A movimentação dos NPCs é baseada em uma abordagem híbrida: pathfinding A* para navegação independente e um sistema de “breadcrumbs” (rastros) para comportamento de perseguição ao jogador.

- **Pathfinding A\***: Permite navegação eficiente pela grade (grid) para comportamento autônomo dos NPCs.
- **Sistema de Breadcrumbs**: Utiliza pontos gerados pelo jogador para guiar NPCs em cenários dependentes do jogador, reduzindo custo computacional.
- **Otimização de Grid**: Geração dinâmica de grid com restrições de segurança evita uso excessivo de memória e garante escalabilidade.
- **Waypoints Compartilhados**: NPCs reutilizam dados de caminho sempre que possível, reduzindo cálculos redundantes.
- **Estruturas de Dados Eficientes**: Uso de dicionários permite acesso e atualização rápida de nós durante o pathfinding.
- **Busca Local (BFS)**: A Busca em Largura é utilizada para consultas locais precisas de posição, melhorando a responsividade em espaços apertados.
- **Adaptação Dinâmica de Comportamento**: NPCs podem alterar seu comportamento de movimentação em resposta às ações do jogador, permitindo uma IA mais reativa e contextual.

</Collapsible>

<!-- 3 -->
<Collapsible title="Sistema de Input do Jogador / Execução de Combate ⚔️">

## 🖥️ Demonstração
<div class="video-row">
  <video autoplay loop muted playsinline>
    <source src="/videos/combat_1.mp4" type="video/mp4">
  </video>
</div>

---

Este sistema traduz as entradas do jogador em ações de gameplay por meio de um pipeline de execução escalável e extensível, suportando uma ampla variedade de interações de combate.

A arquitetura é dividida em três camadas principais:

- **Controlador de Input**: Captura e processa as entradas do jogador.
- **Controlador de Execução**: Gerencia a lógica de execução compartilhada e roteia as ações pelo pipeline apropriado.
- **Sistema de Ações**: Define ações individuais através de uma classe base abstrata, permitindo que cada ação implemente seu próprio comportamento.

Um objeto de contexto dedicado encapsula os parâmetros da ação e os alimenta no pipeline de execução. Com base no tipo de ação, o Controlador de Execução aciona o ponto de entrada apropriado, aplica a lógica compartilhada e delega o comportamento final para a própria ação.

Este design permite uma ampla variedade de ações de gameplay, como projéteis, magias de suporte e habilidades utilitárias, mantendo um fluxo de execução consistente e reutilizável.

</Collapsible>

<!-- 4 -->
<Collapsible title="Suporte Multijogador 🌐">

## 🖥️ Demonstração
<video class="video-full" autoplay loop muted playsinline>
    <source src="/videos/mp_1.mp4" type="video/mp4">
</video>

---

Todos os sistemas do jogo são projetados para suportar modos singleplayer e multiplayer por meio de uma arquitetura cliente-servidor.

O jogo utiliza um modelo híbrido de autoridade, onde certos sistemas são controlados pelo cliente (ex: movimentação do jogador) para minimizar a latência percebida, enquanto outros sistemas são autoritativos no servidor (ex: lógica de gameplay e validação) para garantir consistência e jogabilidade justa.

- **Sincronização de Estado**: Garante que o estado relevante do gameplay permaneça consistente entre todos os clientes conectados por meio de replicação e atualizações controladas pelo servidor.
- **Predição/Reconcilição do Cliente**: Utiliza predição no lado do cliente para executar feedback imediato das ações, seguido de reconciliação com o servidor para corrigir e alinhar o estado autoritativo final, garantindo uma jogabilidade fluida e responsiva.
- **Mitigação de Latência**: Implementa técnicas de rede focadas em fairness para compensar latência em interações de combate. Ajustes dinâmicos de valores para validação no servidor melhoram a consistência entre clientes.
- **Tratamento de Casos Extremos**: Lida com cenários como jogadores entrando tardiamente, desconexões e ressincronização, além de condições de corrida, garantindo recuperação consistente de estado e continuidade estável da partida.
- **Processamento Sequencial em Buffer**: Alguns sistemas de gameplay no servidor exigem processamento ordenado de eventos recebidos para garantir resultados determinísticos. A ordem de execução é garantida, evitando condições de corrida e mantendo consistência em cenários concorrentes.

</Collapsible>

<!-- 5 -->
<Collapsible title="Sistema de Gerenciamento de Inventário 📦">

## 🖥️ Demonstração
<div class="video-row">
  <video autoplay loop muted playsinline>
    <source src="/videos/inventory_1.mp4" type="video/mp4">
  </video>

  <video autoplay loop muted playsinline>
    <source src="/videos/inventory_2.mp4" type="video/mp4">
  </video>
</div>

---

Este sistema gerencia o inventário do jogador por meio de uma arquitetura em duas camadas, composta por um inventário local e um inventário de dados.

O inventário local lida com a representação no cliente e interações de interface (UI), enquanto o inventário de dados gerencia os dados autoritativos dos itens e seu estado lógico.

Essa separação garante um tratamento de dados mais limpo e melhora a compatibilidade com o multiplayer, permitindo que o servidor armazene e valide apenas dados estruturados de inventário, enquanto o cliente foca na apresentação e interação do usuário.

- **Banco de Dados de Itens**: Os itens são armazenados e recuperados por meio de IDs únicos. Os dados dos itens suportam tipos polimórficos como equipamentos, consumíveis e itens diversos, permitindo um sistema de inventário unificado para todas as categorias de itens.
- **Sistema de Drag & Drop**: Permite gerenciamento intuitivo do inventário pelo jogador através de interações com a interface.
- **Validação de Inventário no Servidor**: O backend processa e valida as ações de inventário do cliente, garantindo consistência entre o inventário local e o autoritativo. O cliente envia intenções de interação, e o servidor reconstrói e valida o estado resultante.

</Collapsible>

<!-- 6 -->
<Collapsible title="Efeitos de Shader ✨">

## 🖥️ Showcase
<div class="video-row">
  <video autoplay loop muted playsinline>
    <source src="/videos/shader_1.mp4" type="video/mp4">
  </video>

  <video autoplay loop muted playsinline>
    <source src="/videos/shader_2.mp4" type="video/mp4">
  </video>
</div>

---

Efeitos visuais em tempo real desenvolvidos utilizando o pipeline de renderização da Unity.

Construídos com a combinação de **Shader Graph**, **HLSL** e técnicas procedurais para criar efeitos dinâmicos e reutilizáveis.

- **Shader Graph & HLSL** para lógica visual flexível e performática.  
- **Geração de Mesh Procedural** para modificar a geometria dinamicamente em tempo de execução.  
- **Combinação de Texturas + Shaders** para criar efeitos variados e em camadas.  
- **Efeitos baseados em Materials** para fácil integração em diferentes objetos do jogo. 

</Collapsible>

<!-- 7 -->
<Collapsible title="Tempo In-Game Dinâmico / Sistema de Clima 🌦️">

## 🖥️ Demonstração
<div class="video-row">
  <video autoplay loop muted playsinline>
    <source src="/videos/weather_1.mp4" type="video/mp4">
  </video>

  <video autoplay loop muted playsinline>
    <source src="/videos/time_1.mp4" type="video/mp4">
  </video>
</div>

---

Este sistema simula a progressão do tempo no jogo e condições climáticas dinâmicas, como chuva e neve.

- ### Tempo
A progressão do tempo é estruturada em intervalos discretos baseados em eventos (ex: mudança de minuto, hora, dia). Cada intervalo dispara callbacks dedicados, permitindo que sistemas reajam à passagem do tempo de forma modular e desacoplada (ex: *On Minute Change*, *On Hour Change*).

Esse design orientado a eventos permite lógica de gameplay escalável baseada em tempo e integração com outros sistemas, como missões, comportamento de NPCs e mudanças ambientais.

- ### Clima
As mudanças climáticas são baseadas em lógica probabilística, permitindo aleatoriedade controlada tanto na ocorrência quanto nos tipos de transição (ex: chuva, neve, etc).

Cada estado climático expõe callbacks orientados a eventos, permitindo que outros sistemas reajam dinamicamente às mudanças ambientais por meio de uma arquitetura desacoplada.

</Collapsible>

<!-- 8 -->
<Collapsible title="Ferramentas Personalizadas de Engine 🛠️">

## 🖥️ Demonstração
<video autoplay loop muted playsinline>
  <source src="/videos/engine_tool_1.mp4" type="video/mp4">
</video>

---

Conjunto de ferramentas de desenvolvimento projetadas para otimizar a criação de conteúdo e melhorar a velocidade de implementação.

Essas ferramentas focam na automação de tarefas repetitivas de preparação de assets e no suporte à produção escalável de conteúdo (não relacionadas a gameplay).

- **Ferramenta de Geração de Tilemaps**: Gera automaticamente mapas baseados em tiles utilizando lógica baseada em regras. Serve como base para futuros sistemas de geração procedural de mapas.
- **Ferramenta de Padronização de Sprites**: Automatiza o corte (slicing) de sprites e o alinhamento de pivôs para grupos de assets relacionados (ex: equipamentos como chapéus), garantindo posicionamento consistente de sprites na hierarquia de camadas dos personagems.
- **Ferramenta de Substituição de Animações**: Automatiza a troca de assets de animação para variações de objetos semelhantes (ex: substituir *legs_1_idle_down* por *legs_2_idle_down*), permitindo rápida iteração e reutilização de conjuntos de animações.
- **Ferramenta de Renomeação em Lote de Assets**: Automatiza a renomeação de grupos de assets com base em regras configuráveis ou tags. Utilizada para atualizar eficientemente grandes conjuntos de assets duplicados (ex: *legs_1* → *legs_2*).

</Collapsible>

<!-- 9 -->
<Collapsible title="Sistemas de UI 📊">

## 🖥️ Demonstração
<div class="video-row">
  <video autoplay loop muted playsinline>
    <source src="/videos/UI_System_1.mp4" type="video/mp4">
  </video>

  <video autoplay loop muted playsinline>
    <source src="/videos/UI_System_2.mp4" type="video/mp4">
  </video>
</div>

---

Um conjunto de sistemas de interface de usuário funcionais e responsivos, projetados para suportar interações principais de gameplay e promover feedback ao jogador.

- **UI de Atributos do Jogador**: Uma interface reativa que exibe informações em tempo real do estado do jogador, como vida, mana e timers ativos.
- **UI de Informações do Mundo**: Exibe informações dinâmicas do estado do mundo, como a progressão do tempo no jogo.
- **Sistema de Hotbar**: Permite que o jogador atribua ações ou itens a slots de acesso rápido para execução ágil. O conteúdo dos slots é atualizado dinamicamente com base no tipo atribuído.
- **Sistema de Diálogo**: Gerencia conversas dentro do jogo através de sequências estruturadas de diálogo.
- **UI de Loja**: Exibe listagem de itens, preços e informações de compra para sistemas de comércio dentro do jogo.
- **UI de Log de Eventos**: Registra e exibe eventos de gameplay em tempo real, como aquisição de itens.
</Collapsible>

<!-- 10 -->
<Collapsible title="Persistência de Dados / Sistema de Save/Load 💾">

Este sistema é responsável por salvar o estado do jogo entre sessões por meio de uma arquitetura modular baseada em interfaces.

Uma interface de persistência dedicada define quais dados devem ser serializados. Qualquer sistema que necessite de persistência implementa essa interface para expor sua lógica de salvamento e carregamento.

Um controlador central de Save percorre todos os objetos registrados como persistentes e executa seus respectivos métodos de save/load, garantindo um pipeline de persistência de dados unificado e escalável.

Apenas dados essenciais do estado do jogo são armazenados, enquanto valores não críticos ou derivados são reconstruídos em tempo de execução para reduzir o uso de armazenamento e aumentar a flexibilidade.

Essa abordagem permite que novos sistemas se tornem persistentes sem a necessidade de modificar o núcleo do pipeline de save/load.

</Collapsible>

<!-- 11 -->
<Collapsible title="C++ API Backend para Análise de Dados de Jogadores 📈">

## 🖥️ Demonstração
<video class="video-full" autoplay loop muted playsinline>
    <source src="/videos/backend_api_1.mp4" type="video/mp4">
</video>

<a href="/images/telemetry_1.png" target="_blank"><img src="/images/telemetry_1.png" /></a>
<a href="/images/telemetry_2.png" target="_blank"><img src="/images/telemetry_2.png" /></a>
<a href="/images/telemetry_3.png" target="_blank"><img src="/images/telemetry_3.png" /></a>
<a href="/images/telemetry_4.png" target="_blank"><img src="/images/telemetry_4.png" /></a>
<a href="/images/telemetry_5.png" target="_blank"><img src="/images/telemetry_5.png" /></a>
<a href="/images/telemetry_6.png" target="_blank"><img src="/images/telemetry_6.png" /></a>

---

Design e implementação de uma API backend de alto desempenho para telemetria de dados ingame e reporte de bugs.

Desenvolvido em **C++**, utilizando **Boost** para networking, **SQLite** para armazenamento persistente e **RabbitMQ** para processamento assíncrono de requisições.

O sistema apresenta uma arquitetura multi-thread com contextos de execução separados para IO e banco de dados, permitindo um processamento eficiente e não bloqueante de requisições. As requisições de entrada são roteadas por meio de um dispatcher modular que determina o modo de execução, permitindo que endpoints leves sejam executados em threads de IO, enquanto operações dependentes do banco de dados são delegadas a threads de trabalho dedicadas ou fluxos assíncronos via RabbitMQ.

Para cargas de trabalho assíncronas, rotas selecionadas publicam mensagens no RabbitMQ, onde o serviço consumidor processa utilizando uma pool de workers, que delegam a função a uma thread dedicada de escrita no banco de dados, garantindo acesso seguro e controlado para operações de escrita.

Suporta tanto respostas síncronas quanto fluxos assíncronos via filas de mensagens, possibilitando alta escalabilidade, confiabilidade e alto throughput de ingestão de dados.

Projetado para uma arquitetura multi-serviço containerizada, onde a API, o broker RabbitMQ e os consumidores de background rodam como serviços independentes em containers **Docker**.

- **API REST em C++** construída com Boost (Asio/Beast HTTP server).
- **Modelo de execução multithread** incluindo threads de IO, threads de leitura do banco de dados e uma pipeline separada de processamento no lado do consumidor para operações pesadas.
- **Despacho de execução baseado em rotas (IO vs DB vs fila assíncrona)** para utilização otimizada de recursos.
- **Banco de dados SQLite** com acesso concorrente seguro e operações de escrita controladas.
- **Processamento assíncrono via RabbitMQ** com consumidores multi-thread e gerenciamento dedicado de escrita no banco de dados.

</Collapsible>