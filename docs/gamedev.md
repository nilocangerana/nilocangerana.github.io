<a href="/index">🔙 Home</a>

# 🎮 Game Development

Game development portfolio focused on building robust and scalable gameplay systems.

This portfolio highlights the core architecture of an unannounced project, including multiplayer support, AI systems, combat design, and player-driven systems such as inventory and customization.

Strong emphasis is placed on modular design, clear system responsibilities, and performance-aware implementations to support complex and evolving gameplay features.

<!-- 1 -->
<Collapsible title="Player Character Controller / Customization System 🕹️">

## 🖥️ Showcase
<div class="video-row">
  <video autoplay loop muted playsinline>
    <source src="/videos/character_controller.mp4" type="video/mp4">
  </video>

  <video autoplay loop muted playsinline>
    <source src="/videos/character_customization.mp4" type="video/mp4">
  </video>
</div>

---

## ⚙️ Player Controller Architecture

The player system is divided into specialized components, each responsible for a specific aspect of behavior, enabling modularity and maintainability.

- **Player Controller**: Centralizes and coordinates all player-related components.
- **Movement System**: Encapsulates movement logic, including state transitions (e.g., walking, running).  
- **Input Handler**: Processes player input and translates it into actions.  
- **Interaction System**: Manages interactions with the game world.
- **Body Controller**: Encapsulates animation logic and synchronizes visual layers.
- **Player Stats**: Manages character attributes (e.g., health, strength, defense).

---

## 🎨 Player Character Customization

This system allows players to deeply customize their character’s appearance through a modular, layered sprite architecture.

Each visual component (e.g., body, hair, eyes, equipment) is independently controlled, enabling dynamic combinations.

- ### Body Parts Animation Synchronization

All body part animations are synchronized to ensure cohesive character movement.

A centralized **Body Controller** encapsulates animation logic and exposes a unified interface to control animation states across all layers, ensuring consistent and precise synchronization.


- ### Palette-Based Rendering

Player body sprites are stored in grayscale and mapped to color palettes at runtime using shader-based transformations.

This enables flexible color customization (e.g., hair, eyes, skin) without requiring multiple texture variants.

- ### Equipment System

The customization system supports equipment swapping across five layers: weapons, hats, body, legs, and shoes.

Each equipment type implements its own behavior through polymorphism, allowing specialized logic while maintaining a consistent interface for integration with the character system.

</Collapsible>

<!-- 2 -->
<Collapsible title="Non Playable Characters Controllers/AI/Behavior 🧠">

## 🖥️ Showcase
<div class="video-row">
  <video autoplay loop muted playsinline>
    <source src="/videos/pathfinding_1.mp4" type="video/mp4">
  </video>

  <video autoplay loop muted playsinline>
    <source src="/videos/pathfinding_2.mp4" type="video/mp4">
  </video>
</div>

---

The system manages movement, animation and behavior logic for all non playable characters(NPCs), including enemies and neutral entities.

The NPC logic is structured into specialized components, each responsible for a specific aspect of behavior.
This modular design improves maintainability, scalability, and reuse across different NPC types.

- **Central Controller**: Centralizes and coordinates all components.
- **Movement System**: Encapsulates movement logic. Each NPC has a specific type of movement derived from a base Movement Controller, enabling shared behavior while allowing specialized implementations. (e.g., follow player, run away from player).
- **Attack Controller**: Handles NPC attacks.
- **NPC Body Controller**: Encapsulates animation logic.
- **NPC Stats**: Manages attributes (e.g., health, strength, defense).

---

## 🗺️ Pathfinding & Movement

NPC movement is handled using a hybrid approach: A* pathfinding for independent navigation and a breadcrumb-based system for player-following behavior.

- **A\* Pathfinding**: Enables efficient navigation across the grid for autonomous NPC behavior.
- **Breadcrumb System**: Uses player-generated waypoints to guide NPCs in player-dependent scenarios, reducing computation overhead.
- **Grid Optimization**: Dynamic grid generation with safety constraints prevents excessive memory usage and ensures scalability.
- **Shared Waypoints**: NPCs reuse path data where possible, minimizing redundant calculations.
- **Efficient Data Structures**: Dictionary-based storage enables fast node access and updates during pathfinding.
- **Local Search (BFS)**: Breadth-First Search is used for precise local position queries, improving responsiveness in tight spaces.
- **Dynamic Behavior Adaptation**: NPCs can change their movement behavior in response to player actions, enabling more reactive and context-aware AI.
</Collapsible>


<!-- 3 -->
<Collapsible title="Player Input Action/Combat Execution ⚔️">

## 🖥️ Showcase
<div class="video-row">
  <video autoplay loop muted playsinline>
    <source src="/videos/combat_1.mp4" type="video/mp4">
  </video>
</div>

---

This system translates player input into gameplay actions through a scalable and extensible execution pipeline, supporting a wide variety of combat interactions.

The architecture is divided into three main layers:

- **Input Controller**: Captures and processes player input.
- **Execution Controller**: Handles shared execution logic and routes actions through the appropriate pipeline.
- **Action System**: Defines individual actions through an abstract base class, allowing each action to implement its own behavior.

A dedicated context object encapsulates action parameters and feeds them into the execution pipeline. Based on the action type, the Execution Controller triggers the appropriate entry point, applies shared logic, and delegates the final behavior to the action itself.

This design enables a wide range of gameplay actions, such as projectiles, support spells, and utility abilities, while maintaining a consistent and reusable execution flow.

</Collapsible>

<!-- 4 -->
<Collapsible title="Multiplayer Support 🌐">

## 🖥️ Showcase
<video class="video-full" autoplay loop muted playsinline>
    <source src="/videos/mp_1.mp4" type="video/mp4">
</video>

---

All game systems are designed to support both singleplayer and multiplayer modes through a client-server architecture.

The game uses a hybrid authority model, where certain systems are client-authoritative (e.g., player movement) to minimize perceived latency, 
while other systems are server-authoritative (e.g., gameplay logic and validation) to ensure consistency and fair gameplay.


- **State Synchronization**: Ensures that relevant gameplay state remains consistent across all connected clients through server-driven replication and updates.
- **Client Prediction/Reconciliation**: Uses client-side prediction to execute immediate local feedback on actions, followed by server reconciliation to correct and align the final authoritative state, ensuring smooth and responsive gameplay.
- **Latency Mitigation**: Implements fairness-focused networking techniques to compensate for latency in combat interactions. Dynamic adjustment of values for validation on server. Improves gameplay consistency across all clients.
- **Edge Cases Handling**: Accounts for many scenarios such as late joiners, disconnections, and resynchronization, race conditions, ensuring consistent state recovery and stable gameplay continuity.
- **Sequential Buffer Processing**: Certain gameplay systems on the server require ordered processing of incoming events to ensure deterministic outcomes. Enforce execution order, preventing race conditions and maintaining state consistency in concurrent scenarios.

</Collapsible>

<!-- 5 -->
<Collapsible title="Inventory Management System 📦">

## 🖥️ Showcase
<video autoplay loop muted playsinline>
  <source src="/videos/inventory_1.mp4" type="video/mp4">
</video>

---

This system manages the player’s inventory through a dual-layer architecture consisting of a local inventory and a data inventory.

The local inventory handles client-side representation and UI interactions, while the data inventory manages authoritative item data and logical state.

This separation ensures clean data handling and improves multiplayer compatibility by allowing the server to store and validate only structured inventory data, while the client focuses on presentation and user interaction.

- **Item Database**: Items are stored and retrieved via unique IDs. Item data supports polymorphic item types such as equipment, consumables, and miscellaneous items, allowing a unified inventory system for all item categories.
- **Drag & Drop System**: Enables intuitive player-driven inventory management through UI interactions.
- **Server-Side Inventory Validation**: Backend systems process and validate client inventory actions, ensuring consistency between the local and authoritative data inventories. Clients send interaction intents, and the server reconstructs and validates the resulting state.

</Collapsible>

<!-- 6 -->
<Collapsible title="Shaders Effects ✨">

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
Real-time visual effects developed using Unity’s rendering pipeline.

Built with a combination of Shader Graph, HLSL, and procedural techniques to create dynamic and reusable effects.

- **Shader Graph & HLSL** for flexible and performant visual logic.
- **Procedural Mesh Generation** to dynamically modify geometry at runtime.
- **Texture + Shader Blending** to create varied and layered effects.
- **Material-driven Effects** for easy integration across different game objects.

</Collapsible>

<!-- 7 -->
<Collapsible title="Dynamic Ingame Time / Weather 🌦️">

## 🖥️ Showcase
<div class="video-row">
  <video autoplay loop muted playsinline>
    <source src="/videos/weather_1.mp4" type="video/mp4">
  </video>

  <video autoplay loop muted playsinline>
    <source src="/videos/time_1.mp4" type="video/mp4">
  </video>
</div>

---

This system simulates in-game time progression and dynamic weather conditions such as rain and snow.

- ### Time
Time progression is structured into discrete event-driven intervals (e.g., minute, hour, day changes). Each interval triggers dedicated callbacks, allowing systems to react to time progression in a modular and decoupled way (e.g., *On Minute Change*, *On Hour Change*).

This event-driven design enables scalable time-based gameplay logic and integration with other systems such as quests, NPC behavior, and environmental changes.

- ### Weather
Weather changes are driven by probabilistic logic, allowing controlled randomness in both occurrence and transition types (e.g., rain, snow, etc).

Each weather state exposes event-driven callbacks, enabling other systems to react dynamically to environmental changes through a decoupled architecture.

</Collapsible>


<!-- 8 -->
<Collapsible title="Custom Engine Tools 🛠️">

## 🖥️ Showcase
<video autoplay loop muted playsinline>
  <source src="/videos/engine_tool_1.mp4" type="video/mp4">
</video>

---

A set of development tools designed to streamline content creation and improve iteration speed. 

These tools focus on automating repetitive asset preparation tasks and supporting scalable content production (non gameplay features).

- **Tilemap Generation Tool**: Automatically generates tile-based maps using rule-based logic. Foundation for future procedural map generation systems.
- **Sprite Standardization Tool**: Automates sprite slicing and pivot alignment for related asset groups (e.g., equipment such as hats), ensuring consistent positioning and correct layering across the character system.
- **Animation Replacement Tool**: Automates animation asset swapping for similar object variations (e.g., replacing *legs_1_idle_down* with *legs_2_idle_down*), enabling fast iteration and reuse of animation sets.
- **Batch Asset Renaming Tool**: Automates renaming of related asset groups based on configurable naming rules or tags. This is used to efficiently update large sets of duplicated assets (e.g., *legs_1* → *legs_2*).

</Collapsible>

<!-- 9 -->
<Collapsible title="UI Systems 📊">

## 🖥️ Showcase
<div class="video-row">
  <video autoplay loop muted playsinline>
    <source src="/videos/UI_System_1.mp4" type="video/mp4">
  </video>

  <video autoplay loop muted playsinline>
    <source src="/videos/UI_System_2.mp4" type="video/mp4">
  </video>
</div>

---

A set of functional and responsive user interface systems designed to support core gameplay interactions and player feedback.

- **Player Stats UI**: A reactive interface that displays real-time player state information such as health, mana, and active timers.
- **World Information UI**: Displays dynamic world state information, such as in-game time progression.
- **Hotbar System**: Allows players to assign actions or items to quick-access slots for fast execution. Slot content dynamically updates based on the assigned type.
- **Dialogue System**: Handles in-game conversations through structured dialogue sequences and player interaction flow.
- **Shop UI**: Displays item listings, pricing, and purchase information for in-game trading systems.
- **Event Log UI**: Tracks and displays real-time gameplay events such as item acquisition.
</Collapsible>

<!-- 10 -->
<Collapsible title="Persistent Data / Save/Load Game 💾">

This system is responsible for persisting game state across sessions through a modular, interface-driven architecture.

A dedicated persistence interface defines what data must be serialized. Any system requiring persistence implements this interface to expose its save and load logic.

A central Save Controller iterates through all registered persistent objects and invokes their respective save/load methods, ensuring a unified and scalable data persistence pipeline.

Only essential game state data is stored, while non-critical or derived values are reconstructed at runtime to reduce storage overhead and improve flexibility.

This approach allows new systems to become persistable without modifying the core save/load pipeline.

</Collapsible>

<!-- 11 -->
<Collapsible title="Backend API for Player Data Tracking & Analysis 📈">

This system provides a standalone backend API for collecting player telemetry data and bug reports from the game.

Built in **C++** using Boost and SQLite for persistent storage, with multithreading to handle heavy request loads. The API operates independently from Unity and can be integrated with any client.

The collected data enables player behavior analysis, gameplay insights, and efficient identification and resolution of reported issues.

- **REST API** built with Boost.Beast (HTTP server).
- **SQLite database** for persistent storage.
- Engine-agnostic design (not tied to Unity).
- Modular routing system for scalable endpoints.

</Collapsible>