// ============================================================
//  BacPrep 2026 – DONNÉES CURRICULUM
//  Filière : Sciences Expérimentales – 1ère Bac – Maroc
// ============================================================

const APP_DATA = {

  // ─────────────────────────────────────────────────────────
  //  FRANÇAIS
  // ─────────────────────────────────────────────────────────
  français: {
    id: 'français',
    name: 'Français',
    nameAr: 'اللغة الفرنسية',
    icon: '📖',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    bgDark: 'bg-blue-900/30',
    border: 'border-blue-500/40',
    totalLessons: 9,

    lessons: [
      {
        id: 'boite-intro',
        title: 'La Boîte à Merveilles – Présentation',
        oeuvre: 'La Boîte à Merveilles',
        duration: '20 min',
        content: `
## La Boîte à Merveilles – Ahmed Sefrioui (1954)

### 📌 Informations générales
| Élément | Détail |
|---------|--------|
| **Auteur** | Ahmed Sefrioui (1915–2004) |
| **Genre** | Roman autobiographique |
| **Date** | 1954, Éditions du Seuil |
| **Narrateur** | Sidi Mohammed (enfant de 6 ans) |
| **Cadre** | Fès, début du XXe siècle |

---

### 👤 Les personnages principaux
- **Sidi Mohammed** : le narrateur-enfant, rêveur et solitaire
- **Lalla Zoubida** : la mère, femme forte et superstitieuse
- **Sidi Abdeslem** : le père, artisan tisserand, homme discret
- **Zineb** : petite amie de Sidi Mohammed, fille du Gnaoui
- **Driss el Aouad** : voisin cupide, cause de la chute de la famille
- **Lalla Kenza** : voisine de confiance de la mère
- **Moulay Larbi** : ami du père, tisserand

---

### 🏠 Cadre spatiotemporel
Le roman se déroule dans la **médina de Fès**, dans la **Mellah** puis dans un **Dar** (maison traditionnelle). L'action se passe au **début du XXe siècle**, sous le Protectorat français.

---

### 📚 Les thèmes principaux
1. **L'enfance et l'innocence** – regard naïf de l'enfant sur le monde adulte
2. **La nostalgie** – l'adulte qui se souvient de son passé heureux
3. **La pauvreté et la misère sociale** – condition des artisans de Fès
4. **La femme marocaine traditionnelle** – enfermée, superstitieuse, mais forte
5. **La superstition et la magie** – présence du surnaturel (Jnoun, fqihs)
6. **La solitude de l'enfant** – Sidi Mohammed n'a pas d'amis

---

### ✍️ Style et écriture
- **Narration rétrospective** : un adulte raconte son enfance
- **Focalisation interne** : point de vue du narrateur-enfant
- **Vocabulaire arabe** intégré dans le texte français (couleur locale)
- **Descriptions sensorielles** : odeurs, couleurs, sons du souk
- **Registre lyrique** pour les passages nostalgiques

---

### 🎁 La boîte à merveilles
Symbole central : une boîte en carton contenant des **objets précieux** (boutons, perles, cailloux colorés). Elle représente :
- L'**imaginaire de l'enfant**
- Le **refuge contre la réalité**
- La **mémoire et la nostalgie**
        `
      },
      {
        id: 'boite-resume',
        title: 'La Boîte à Merveilles – Résumé et structure',
        oeuvre: 'La Boîte à Merveilles',
        duration: '25 min',
        content: `
## Structure et résumé narratif

### 📖 Structure narrative
Le roman est divisé en **14 chapitres** se déroulant sur environ **3 semaines**.

---

### 📅 Chronologie narrative

| Phase | Événements clés |
|-------|----------------|
| **Début** | Présentation de la vie dans le Dar Chouafa ; les voisins ; la solitude de Sidi Mohammed |
| **Développement** | Nuit chez Lalla Kenza ; visite au sanctuaire de Sidi Ali Boughaleb ; séjour chez l'oncle à la campagne |
| **Crise** | Driss el Aouad s'empare de l'argent du père ; ruine financière de la famille |
| **Dénouement** | Mariage de Zineb ; mort d'un voisin ; fuite vers la chambre de Lalla Fatma ; renaissance symbolique |

---

### 🏛️ Les lieux importants
- **Dar Chouafa** : la maison principale avec ses voisines
- **Le Moulay Idriss** : mosquée-sanctuaire de Fès
- **L'école coranique** (msid) : lieu d'apprentissage du Coran
- **Le souk des artisans** : où travaille le père
- **Le cimetière** : lieu de mort et de deuil

---

### 💬 Incipit (début du roman)
> *"Je suis né dans une maison que sa vétusté faisait crouler et dont les habitants tremblaient à chaque coup de vent."*

### 💬 Excipit (fin du roman)
> La fin marque un retour symbolique à l'enfance et à la sérénité après les épreuves.
        `
      },
      {
        id: 'antigone-intro',
        title: 'Antigone – Présentation de la pièce',
        oeuvre: 'Antigone',
        duration: '20 min',
        content: `
## Antigone – Jean Anouilh (1944)

### 📌 Informations générales
| Élément | Détail |
|---------|--------|
| **Auteur** | Jean Anouilh (1910–1987) |
| **Genre** | Tragédie moderne |
| **Date** | 1944, représentée à Paris sous l'Occupation |
| **Source** | Antigone de Sophocle (442 av. J.-C.) |
| **Contexte** | France occupée par les nazis |

---

### 👤 Les personnages
- **Antigone** : jeune fille rebelle, refuse les compromis, choisit la mort
- **Créon** : roi de Thèbes, pragmatique, représente le pouvoir et la raison d'État
- **Hémon** : fiancé d'Antigone, fils de Créon
- **Ismène** : sœur d'Antigone, raisonnable et peureuse
- **Eurydice** : femme de Créon, femme discrète
- **Le Chœur** : commentateur de l'action, annonce la tragédie
- **La Nourrice** : figure maternelle protectrice
- **Les Gardes** : représentent l'appareil répressif de l'État

---

### ⚔️ Le conflit central
**Antigone vs. Créon** = **Individu vs. État** = **Conscience morale vs. Loi politique**

Étéocle et Polynice (frères d'Antigone) se sont battus pour le trône de Thèbes. Créon décide :
- ✅ Funérailles pour Étéocle (défenseur de la cité)
- ❌ Corps de Polynice laissé sans sépulture (traître)

**Antigone désobéit** et enterre son frère par devoir moral et amour filial.

---

### 🎭 Les thèmes majeurs
1. **La liberté et la rébellion** – Antigone dit "non" au pouvoir
2. **Le devoir moral vs. la loi** – loi divine vs. loi humaine
3. **La tragédie inéluctable** – le destin est annoncé dès le début
4. **Le pouvoir et la solitude** – Créon sacrifie son bonheur pour gouverner
5. **La jeunesse et l'absolu** – Antigone veut tout ou rien
6. **La mort choisie** – suicide d'Antigone dans la grotte

---

### ✍️ Innovations d'Anouilh par rapport à Sophocle
- **Langage moderne et familier** (tutoiement, expressions courantes)
- **Personnages accessibles** : Antigone est une adolescente, pas une héroïne mythologique
- **Créon humanisé** : il a des arguments raisonnables
- **Ambiguïté morale** : personne n'a complètement tort
- **Chœur personnage** : explique la pièce au public
        `
      },
      {
        id: 'antigone-analyse',
        title: 'Antigone – Analyse et scènes clés',
        oeuvre: 'Antigone',
        duration: '25 min',
        content: `
## Antigone – Analyse approfondie

### 🗣️ La scène centrale : le duel Antigone-Créon

**Arguments de Créon :**
- L'ordre social est nécessaire pour gouverner
- Les deux frères étaient pareils : des aventuriers
- Il faut que quelqu'un dise "oui" à la société
- La politique exige des sacrifices

**Arguments d'Antigone :**
- La loi divine est supérieure à la loi humaine
- Elle veut respecter ses frères comme elle l'entend
- Elle refuse les compromis : "Je veux tout, tout de suite"
- Elle n'a pas peur de la mort

---

### 💬 Citations essentielles

> *"Je suis là pour dire non et pour mourir."* — Antigone

> *"Il faut pourtant qu'il y en ait qui ne lâchent pas. Il faut qu'il y en ait qui disent non."* — Antigone

> *"Tu n'as pas à choisir. C'est tout écrit."* — Le Chœur

> *"Je ne mourrai pas. Et je suis roi."* — Créon (avant d'apprendre les suicides)

---

### 🎭 Le rôle du Chœur
- **Annonce l'issue** dès la première scène (mort d'Antigone, Hémon, Eurydice)
- **Commente** l'action avec distance et sagesse
- **Définit la tragédie** : *"C'est propre, la tragédie. C'est reposant, c'est sûr..."*
- **Différencie** tragédie (inéluctable) et drame (espoir possible)

---

### 📊 Schéma de la tragédie

```
Prologue (Chœur présente les personnages)
    ↓
Exposition (Antigone a enterré son frère)
    ↓
Nœud (Arrestation d'Antigone)
    ↓
Confrontation (Grand duel Antigone/Créon)
    ↓
Dénouement (Antigone emprisonnée, suicides multiples)
    ↓
Épilogue (Créon seul, écrasé par le pouvoir)
```

---

### 🔍 La dimension politique (1944)
La pièce a été jouée en **1944 sous l'Occupation nazie**. Les spectateurs pouvaient interpréter :
- **Antigone** = la Résistance française
- **Créon** = le régime de Vichy (collaboration)
- Mais aussi l'inverse ! → ambiguïté voulue par Anouilh
        `
      },
      {
        id: 'dernier-jour-intro',
        title: 'Le Dernier Jour d\'un Condamné – Présentation',
        oeuvre: 'Le Dernier Jour d\'un Condamné',
        duration: '20 min',
        content: `
## Le Dernier Jour d'un Condamné – Victor Hugo (1829)

### 📌 Informations générales
| Élément | Détail |
|---------|--------|
| **Auteur** | Victor Hugo (1802–1885) |
| **Genre** | Roman-monologue / Roman plaidoyer |
| **Date** | 1829 (1ère édition), 1832 (préface politique ajoutée) |
| **Structure** | 49 chapitres + Préface de 1832 |
| **Lieu** | Paris, de la prison de Bicêtre à la place de Grève |

---

### 🎯 L'objectif de Victor Hugo
Hugo écrit ce roman pour **lutter contre la peine de mort**. C'est une œuvre **engagée** (littérature militante) qui vise à émouvoir le lecteur en lui faisant vivre de l'intérieur les souffrances d'un condamné.

> *"Plaider la cause de tous les malheureux par la cause d'un seul."*

---

### 📖 Structure narrative
- **Narrateur** : un condamné à mort anonyme (1ère personne)
- **Durée** : les dernières heures avant l'exécution (quelques semaines en réalité)
- **Temps** : présent de l'angoisse, flashbacks
- **Anonymat** : pas de nom, pas de crime précisé → universalité

---

### 💭 Les thèmes principaux
1. **L'abolition de la peine de mort** – message politique central
2. **L'angoisse et le temps** – le temps qui s'accélère vers la mort
3. **La solitude du condamné** – abandon par tous
4. **La souffrance morale** – pire que la mort physique
5. **La famille et l'amour** – scène de la petite fille Marie
6. **L'injustice sociale** – les pauvres sont plus condamnés que les riches
7. **Les conditions carcérales** – description horrifiante de Bicêtre

---

### 🏛️ Les lieux du roman
1. **Bicêtre** : grande prison de Paris (chapitres 1-11)
2. **Conciergerie** : prison parisienne (chapitres 12-37)
3. **L'Hôtel de Ville** : étape avant l'exécution (chapitres 38-45)
4. **La place de Grève** : lieu d'exécution (chapitres 46-49)
        `
      },
      {
        id: 'dernier-jour-analyse',
        title: 'Le Dernier Jour d\'un Condamné – Analyse',
        oeuvre: 'Le Dernier Jour d\'un Condamné',
        duration: '25 min',
        content: `
## Le Dernier Jour d'un Condamné – Analyse

### 📅 Les étapes de la descente vers la mort

| Chapitres | Lieu | Événements |
|-----------|------|-----------|
| 1-11 | Bicêtre | Découverte de la condamnation ; rencontres avec les forçats |
| 12-37 | Conciergerie | Solitude totale ; nuit d'angoisse ; préparatifs |
| 38-45 | Hôtel de Ville | Toilette du condamné ; attente finale |
| 46-49 | Place de Grève | Dernier voyage ; Marie ne le reconnaît pas ; guillotine |

---

### 💔 La scène de Marie (chapitre 47)
Scène la plus poignante du roman : le condamné voit sa petite fille Marie de 3 ans. Elle **ne le reconnaît pas** car il a trop changé. Cette scène cristallise :
- La **rupture avec la vie normale**
- L'**injustice** pour les familles innocentes
- La **déchéance physique** causée par l'attente de la mort

---

### 💬 Citations clés

> *"Condamné à mort !"*
> *Voilà cinq semaines que j'habite avec cette pensée, toujours seul avec elle...* — Chapitre 1

> *"Oh ! si je pouvais fuir, courir, marcher vite, très vite, aller loin, très loin!"* — Chapitre 41

> *"Ma fille, ma pauvre petite fille !"* — Chapitre 47

> *"Quatre heures."* (derniers mots avant l'exécution)

---

### ✍️ Techniques narratives
- **Monologue intérieur** : accès aux pensées sans filtre
- **Présent dramatique** : action en temps réel
- **Ellipses et accélérations** : temps qui s'emballe
- **Registre pathétique** : émouvoir pour convaincre
- **Registre lyrique** : poésie de la douleur
- **Hyperboles et exclamations** : intensité émotionnelle

---

### 🗣️ La Préface de 1832
Hugo explique sa démarche :
- Il veut démontrer l'**inutilité** de la peine de mort (elle ne dissuade pas)
- La **peine de mort est une barbarie** incompatible avec la civilisation
- **L'État n'a pas le droit de tuer** un être humain
- La vraie peine doit être la **réhabilitation**, pas la vengeance
        `
      },
      {
        id: 'arabe-discours',
        title: 'Les formes de discours et figures de style',
        oeuvre: 'Compétences transversales',
        duration: '30 min',
        content: `
## Les Formes de Discours et Figures de Style

### 🗣️ Les types de discours (rapporté)

| Type | Définition | Exemple |
|------|-----------|---------|
| **Discours direct** | Paroles rapportées telles quelles, entre guillemets | Il dit : "Je viendrai demain." |
| **Discours indirect** | Paroles intégrées dans une proposition subordonnée | Il dit qu'il viendrait le lendemain. |
| **Discours indirect libre** | Paroles intégrées sans verbe introducteur ni guillemets | Il viendrait le lendemain. Quelle bonne idée ! |

---

### 🎨 Les figures de style essentielles

#### Figures d'analogie
- **Métaphore** : comparaison sans outil comparatif
  - *"Sa voix est du miel"*
- **Comparaison** : avec outil comparatif (comme, tel, pareil à)
  - *"Courageux comme un lion"*
- **Personnification** : donner des traits humains à un objet
  - *"La mer pleurait"*

#### Figures d'insistance
- **Anaphore** : répétition au début de phrases
  - *"J'ai souffert, j'ai pleuré, j'ai tout perdu"*
- **Hyperbole** : exagération
  - *"Des millions de fois"*
- **Gradation** : énumération croissante/décroissante
  - *"Un souffle, une voix, un cri"*

#### Figures d'opposition
- **Antithèse** : opposition de deux idées
  - *"La vie est courte, l'art est long"*
- **Oxymore** : deux mots contradictoires
  - *"Cette obscure clarté"*

#### Figures d'atténuation
- **Euphémisme** : atténuer une réalité dure
  - *"Il nous a quittés"* (au lieu de "il est mort")
- **Litote** : dire moins pour suggérer plus
  - *"Ce n'est pas mal"* (= c'est très bien)

---

### 📝 Les registres littéraires

| Registre | Caractéristiques | Effet recherché |
|----------|-----------------|-----------------|
| **Lyrique** | Émotions personnelles, "je", vocabulaire sentimental | Émouvoir |
| **Épique** | Grandeur, héros, exploits, hyperboles | Impressionner |
| **Tragique** | Destin fatal, mort inévitable, pathos | Apitoyer |
| **Comique** | Ironie, jeux de mots, situations absurdes | Faire rire |
| **Satirique** | Critique, ironie, moquerie | Dénoncer |
| **Didactique** | Enseignement, clarté, exemples | Instruire |
        `
      }
    ],

    flashcards: [
      { id: 'f-fr-01', question: 'Qui est l\'auteur de "La Boîte à Merveilles" ?', answer: 'Ahmed Sefrioui (1915–2004), écrivain marocain d\'expression française.', category: 'Boîte à Merveilles', difficulty: 'easy' },
      { id: 'f-fr-02', question: 'En quelle année "La Boîte à Merveilles" a-t-elle été publiée ?', answer: '1954, aux Éditions du Seuil.', category: 'Boîte à Merveilles', difficulty: 'easy' },
      { id: 'f-fr-03', question: 'Quel est le genre littéraire de "La Boîte à Merveilles" ?', answer: 'Roman autobiographique (ou roman de l\'enfance).', category: 'Boîte à Merveilles', difficulty: 'medium' },
      { id: 'f-fr-04', question: 'Qui est le narrateur de "La Boîte à Merveilles" ?', answer: 'Sidi Mohammed, un enfant d\'environ 6 ans qui raconte sa propre histoire.', category: 'Boîte à Merveilles', difficulty: 'easy' },
      { id: 'f-fr-05', question: 'Que symbolise la "boîte à merveilles" dans le roman ?', answer: 'Elle symbolise le refuge, l\'imaginaire de l\'enfant, la nostalgie et la mémoire précieuse de l\'enfance.', category: 'Boîte à Merveilles', difficulty: 'hard' },
      { id: 'f-fr-06', question: 'Quel est le principal thème de "La Boîte à Merveilles" ?', answer: 'L\'enfance, la nostalgie, la pauvreté et la condition de la femme marocaine traditionnelle.', category: 'Boîte à Merveilles', difficulty: 'medium' },
      { id: 'f-fr-07', question: 'Dans quelle ville se déroule "La Boîte à Merveilles" ?', answer: 'Dans la médina de Fès, au début du XXe siècle.', category: 'Boîte à Merveilles', difficulty: 'easy' },
      { id: 'f-fr-08', question: 'Quel est le nom du père de Sidi Mohammed ?', answer: 'Sidi Abdeslem, artisan tisserand.', category: 'Boîte à Merveilles', difficulty: 'medium' },
      { id: 'f-fr-09', question: 'Qui est Driss el Aouad dans "La Boîte à Merveilles" ?', answer: 'Un voisin cupide et malhonnête qui s\'empare de l\'argent du père, causant la ruine de la famille.', category: 'Boîte à Merveilles', difficulty: 'medium' },
      { id: 'f-fr-10', question: 'Qu\'est-ce que la narration rétrospective ?', answer: 'C\'est quand un narrateur adulte raconte des événements passés de son enfance, avec un regard distancié.', category: 'Boîte à Merveilles', difficulty: 'hard' },
      { id: 'f-fr-11', question: 'Qui est l\'auteur d\'Antigone ?', answer: 'Jean Anouilh (1910–1987), dramaturge français.', category: 'Antigone', difficulty: 'easy' },
      { id: 'f-fr-12', question: 'En quelle année Antigone d\'Anouilh a-t-elle été créée ?', answer: '1944, pendant l\'Occupation allemande à Paris.', category: 'Antigone', difficulty: 'easy' },
      { id: 'f-fr-13', question: 'Pourquoi Antigone désobéit-elle à Créon ?', answer: 'Elle veut enterrer son frère Polynice par devoir moral et amour filial, malgré l\'interdiction royale.', category: 'Antigone', difficulty: 'medium' },
      { id: 'f-fr-14', question: 'Quel est le rôle du Chœur dans Antigone d\'Anouilh ?', answer: 'Il annonce l\'issue tragique dès le début, commente l\'action et explique la différence entre tragédie et drame.', category: 'Antigone', difficulty: 'hard' },
      { id: 'f-fr-15', question: 'Citez une réplique célèbre d\'Antigone.', answer: '"Je suis là pour dire non et pour mourir." — Elle affirme sa rébellion absolue contre le pouvoir.', category: 'Antigone', difficulty: 'hard' },
      { id: 'f-fr-16', question: 'Quel est le conflit central dans Antigone ?', answer: 'L\'opposition entre la loi divine (Antigone) et la loi humaine/politique (Créon) = individu vs. État.', category: 'Antigone', difficulty: 'medium' },
      { id: 'f-fr-17', question: 'Comment Antigone meurt-elle à la fin ?', answer: 'Elle est emmurée vivante dans une grotte et se suicide.', category: 'Antigone', difficulty: 'medium' },
      { id: 'f-fr-18', question: 'Qui est l\'auteur du "Dernier Jour d\'un Condamné" ?', answer: 'Victor Hugo (1802–1885), grand écrivain romantique français.', category: 'Dernier Jour', difficulty: 'easy' },
      { id: 'f-fr-19', question: 'Quel est l\'objectif politique du "Dernier Jour d\'un Condamné" ?', answer: 'Plaider pour l\'abolition de la peine de mort en faisant vivre au lecteur les souffrances du condamné de l\'intérieur.', category: 'Dernier Jour', difficulty: 'medium' },
      { id: 'f-fr-20', question: 'Combien de chapitres comporte "Le Dernier Jour d\'un Condamné" ?', answer: '49 chapitres + une Préface de 1832 où Hugo expose ses arguments politiques.', category: 'Dernier Jour', difficulty: 'medium' },
      { id: 'f-fr-21', question: 'Quelle est la scène la plus poignante du "Dernier Jour d\'un Condamné" ?', answer: 'La scène avec sa fille Marie (chapitre 47) : elle ne le reconnaît pas car il a trop changé.', category: 'Dernier Jour', difficulty: 'hard' },
      { id: 'f-fr-22', question: 'Qu\'est-ce qu\'une métaphore ? Donnez un exemple.', answer: 'Comparaison sans outil comparatif. Ex: "Sa voix est du miel" (≠ "Sa voix est douce comme du miel").', category: 'Figures de style', difficulty: 'easy' },
      { id: 'f-fr-23', question: 'Qu\'est-ce qu\'une anaphore ? Donnez un exemple.', answer: 'Répétition du même mot/groupe au début de phrases successives. Ex: "J\'ai souffert, j\'ai pleuré, j\'ai tout perdu."', category: 'Figures de style', difficulty: 'medium' },
      { id: 'f-fr-24', question: 'Définissez l\'oxymore et donnez un exemple.', answer: 'Association de deux mots contradictoires. Ex: "Cette obscure clarté" (Corneille).', category: 'Figures de style', difficulty: 'hard' },
      { id: 'f-fr-25', question: 'Quelle est la différence entre discours direct et indirect ?', answer: 'Direct : guillemets, paroles exactes. Indirect : proposition subordonnée, changement de temps et pronoms.', category: 'Formes de discours', difficulty: 'medium' }
    ],

    quiz: [
      { id: 'q-fr-01', question: 'En quelle année "La Boîte à Merveilles" a-t-elle été publiée ?', options: ['1945', '1952', '1954', '1962'], correct: 2, explanation: 'Publiée en 1954 aux Éditions du Seuil.', category: 'Boîte' },
      { id: 'q-fr-02', question: 'Quel est le vrai prénom de l\'auteur de "La Boîte à Merveilles" ?', options: ['Ahmed', 'Mohammed', 'Hasan', 'Driss'], correct: 0, explanation: 'Ahmed Sefrioui est son prénom. Son vrai nom est Mohamed Ahmed Sefrioui.', category: 'Boîte' },
      { id: 'q-fr-03', question: 'Le narrateur de "La Boîte à Merveilles" s\'appelle :', options: ['Mohamed', 'Sidi Mohammed', 'Abdeslem', 'Ahmed'], correct: 1, explanation: 'Le narrateur est Sidi Mohammed, l\'alter ego de l\'auteur.', category: 'Boîte' },
      { id: 'q-fr-04', question: 'Où se déroule principalement "La Boîte à Merveilles" ?', options: ['Casablanca', 'Marrakech', 'Fès', 'Rabat'], correct: 2, explanation: 'L\'action se déroule dans la médina de Fès.', category: 'Boîte' },
      { id: 'q-fr-05', question: 'Quel personnage cause la ruine de la famille dans "La Boîte à Merveilles" ?', options: ['Lalla Zoubida', 'Driss el Aouad', 'Sidi Ali', 'Zineb'], correct: 1, explanation: 'Driss el Aouad s\'empare de l\'argent du père, ruinant la famille.', category: 'Boîte' },
      { id: 'q-fr-06', question: 'Antigone d\'Anouilh a été jouée pour la première fois en :', options: ['1940', '1942', '1944', '1946'], correct: 2, explanation: 'La pièce a été créée en 1944 à Paris, pendant l\'Occupation.', category: 'Antigone' },
      { id: 'q-fr-07', question: 'Dans Antigone, quel est le nom du fiancé d\'Antigone ?', options: ['Étéocle', 'Polynice', 'Hémon', 'Créon'], correct: 2, explanation: 'Hémon est le fils de Créon et le fiancé d\'Antigone.', category: 'Antigone' },
      { id: 'q-fr-08', question: 'Pourquoi Créon refuse-t-il les funérailles à Polynice ?', options: ['Car Polynice était pauvre', 'Car Polynice était un traître et ennemi de Thèbes', 'Car Antigone le lui a demandé', 'Par jalousie'], correct: 1, explanation: 'Polynice s\'est battu contre sa propre cité ; Créon le considère comme un traître.', category: 'Antigone' },
      { id: 'q-fr-09', question: 'Comment Antigone finit-elle dans la pièce d\'Anouilh ?', options: ['Elle est décapitée', 'Elle est exilée', 'Elle se suicide dans la grotte', 'Elle est libérée par Créon'], correct: 2, explanation: 'Antigone est emmurée vivante et se suicide dans la grotte.', category: 'Antigone' },
      { id: 'q-fr-10', question: '"Le Dernier Jour d\'un Condamné" a été publié en :', options: ['1820', '1829', '1832', '1845'], correct: 1, explanation: '1829 pour la 1ère édition anonyme. La préface de 1832 révèle le nom de Hugo.', category: 'Dernier Jour' },
      { id: 'q-fr-11', question: 'Quel est le vrai nom du condamné dans "Le Dernier Jour" ?', options: ['Jean Valjean', 'Claude Gueux', 'Le condamné reste anonyme', 'Victor'], correct: 2, explanation: 'Le condamné est volontairement anonyme pour représenter tous les condamnés.', category: 'Dernier Jour' },
      { id: 'q-fr-12', question: 'Combien de chapitres comporte "Le Dernier Jour d\'un Condamné" ?', options: ['29', '39', '49', '59'], correct: 2, explanation: '49 chapitres couvrant les dernières semaines/heures avant l\'exécution.', category: 'Dernier Jour' },
      { id: 'q-fr-13', question: 'La figure de style qui consiste à dire moins pour suggérer plus s\'appelle :', options: ['Euphémisme', 'Litote', 'Hyperbole', 'Antithèse'], correct: 1, explanation: 'La litote atténue l\'expression pour suggérer davantage. Ex: "Ce n\'est pas mal."', category: 'Figures' },
      { id: 'q-fr-14', question: 'Un oxymore est :', options: ['Une exagération', 'Une répétition', 'Deux mots contradictoires associés', 'Une comparaison avec "comme"'], correct: 2, explanation: 'L\'oxymore associe deux termes contradictoires. Ex: "Cette obscure clarté."', category: 'Figures' },
      { id: 'q-fr-15', question: 'Dans le discours indirect, quelle transformation s\'opère ?', options: ['Guillemets ajoutés', 'Changement de temps verbal, pronoms et indicateurs de temps', 'Aucune transformation', 'Seuls les guillemets sont supprimés'], correct: 1, explanation: 'On supprime les guillemets et on change temps, pronoms et indicateurs spatio-temporels.', category: 'Discours' }
    ]
  },

  // ─────────────────────────────────────────────────────────
  //  ARABE
  // ─────────────────────────────────────────────────────────
  arabe: {
    id: 'arabe',
    name: 'Arabe',
    nameAr: 'اللغة العربية',
    icon: '🌙',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    bgDark: 'bg-green-900/30',
    border: 'border-green-500/40',
    totalLessons: 8,

    lessons: [
      {
        id: 'ar-nusus',
        title: 'النصوص الأدبية – درس المحاكاة والإبداع',
        oeuvre: 'النصوص الأدبية',
        duration: '30 min',
        content: `
## النصوص الأدبية في اللغة العربية

### 📌 الأجناس الأدبية الكبرى

#### الشعر (Poésie)
**تعريف :** كلام موزون مقفّى يعبّر عن مشاعر الشاعر وأفكاره.

**أنواع الشعر :**
| النوع | المميزات |
|-------|---------|
| **الشعر العمودي** | ذو بحر وقافية ثابتة، موروث قديم |
| **شعر التفعيلة** | وزن متجدد، لا قافية ثابتة، حديث |
| **قصيدة النثر** | بلا وزن ولا قافية، تركز على الصور |

**المصطلحات الأساسية :**
- **البيت** : وحدة الشعر العمودي (صدر + عجز)
- **القافية** : تشابه الحرف الأخير في الأبيات
- **البحر** : النظام الإيقاعي للقصيدة (الكامل، الطويل، البسيط...)
- **الصورة الشعرية** : الاستعارة والتشبيه في الشعر

---

#### النثر الأدبي (Prose)
**أنواع النثر :**
- **القصة القصيرة** : سرد مكثف، شخصية محورية، حدث واحد
- **الرواية** : سرد طويل، شخصيات متعددة، أحداث متشعبة
- **المقالة** : نص حجاجي أو وصفي يعالج فكرة محددة
- **المسرحية** : حوار درامي للتمثيل على الخشبة

---

### 🎭 عناصر القصة القصيرة
1. **الحبكة** (Plot) : تسلسل الأحداث
2. **الشخصيات** : رئيسية وثانوية
3. **الزمان والمكان** : الإطار المكاني والزمني
4. **الراوي** (Narrateur) : من يروي الحكاية
5. **القضية** (Thème) : الفكرة المحورية
6. **الحل** (Dénouement) : نهاية السرد
        `
      },
      {
        id: 'ar-balagha',
        title: 'البلاغة – الصور البيانية والمحسّنات',
        oeuvre: 'البلاغة',
        duration: '35 min',
        content: `
## البلاغة العربية – الصور البيانية

### 🌟 علم البيان (Science de l'expression)

#### التشبيه (Comparaison)
**تعريف :** إلحاق شيء بشيء آخر في صفة مشتركة بأداة مقصودة.
**أركانه :** المشبّه + المشبّه به + وجه الشبه + أداة التشبيه
**مثال :** *"العلمُ كالنورِ يُضيء الدرب"*
- أنواعه : التشبيه التام / المجمل / البليغ / الضمني

#### الاستعارة (Métaphore)
**تعريف :** تشبيه حُذف أحد طرفيه (المشبّه أو المشبّه به).
- **استعارة مكنية** : *"نسمعُ صرخة الحجر"* (الحجر لا يصرخ → شُبّه بإنسان)
- **استعارة تصريحية** : *"رأيتُ أسداً يخطبُ"* (يريد رجلاً شجاعاً)

#### الكناية (Synecdoque / Allusion)
**تعريف :** لفظ أُريدَ به لازم معناه + معناه الأصلي جائز.
**مثال :** *"فلانٌ طويلُ النِّجاد"* (كناية عن طول القامة)

---

### 📝 المحسّنات البديعية

| المحسِّن | التعريف | مثال |
|---------|--------|------|
| **الطباق** | تضاد بين كلمتين | "الليل والنهار" |
| **المقابلة** | تضاد جملتين | "يُضحكُك ويُبكيكَ" |
| **الجناس** | تشابه في اللفظ & اختلاف في المعنى | "جَدَّ مَن جَدَّ" |
| **السجع** | توافق الفواصل في الحرف الأخير | النثر المسَجَّع |

---

### 🔤 علم المعاني (Stylistique)

#### أساليب الإنشاء (Actes de langage)
- **الأمر** : الطلب (افعل كذا)
- **النهي** : الطلب بالكف (لا تفعل)
- **الاستفهام** : السؤال (قد يكون حقيقياً أو بلاغياً)
- **النداء** : الاستدعاء (يا محمد)
- **التمني** : رجاء أمر صعب (ليتَ / لعلَّ)

#### أساليب الخبر
- **مجرَّد** : بلا تأكيد
- **مؤكَّد** : بـ "إنَّ" أو "قد" أو الاسمية
        `
      },
      {
        id: 'ar-nahw',
        title: 'قواعد اللغة – التراكيب النحوية',
        oeuvre: 'النحو والصرف',
        duration: '30 min',
        content: `
## التراكيب النحوية الأساسية

### 📖 الجملة العربية

#### أنواع الجملة
| النوع | التعريف | مثال |
|-------|---------|------|
| **الاسمية** | تبدأ بمبتدأ | المجدُّ ناجحٌ |
| **الفعلية** | تبدأ بفعل | نجحَ المجتهدُ |

---

### ⚡ الإعراب والبناء

**الإعراب :** تغيُّر حركة آخر الكلمة بحسب موقعها
- رفع (ضمة) / نصب (فتحة) / جر (كسرة) / جزم (سكون)

**البناء :** ثبات حركة آخر الكلمة (الأفعال، الحروف، بعض الأسماء)

---

### 🔑 المفاهيم الأساسية

| المفهوم | التعريف |
|---------|---------|
| **المبتدأ** | الاسم المرفوع أول الجملة الاسمية |
| **الخبر** | ما يُحكم به على المبتدأ |
| **الفاعل** | من قام بالفعل (مرفوع) |
| **المفعول به** | من وقع عليه الفعل (منصوب) |
| **النعت** | الصفة التابعة لموصوفها |
| **الحال** | بيان هيئة صاحبه (منصوب) |
| **المضاف إليه** | اسم مجرور بعد المضاف |

---

### 📚 الأساليب التعبيرية
- **التعجب** : ما أجملَ الربيعَ! / أجمِلْ بالربيعِ!
- **المدح/الذم** : نِعمَ الصديق المخلص / بئسَ السلوكُ الكذبُ
- **القسَم** : والله / تالله / بالله
- **الاستثناء** : إلا / غير / سوى
        `
      },
      {
        id: 'ar-adab-modernes',
        title: 'الأدب العربي الحديث – التيارات والأعلام',
        oeuvre: 'الأدب الحديث',
        duration: '25 min',
        content: `
## الأدب العربي الحديث والمعاصر

### 🌟 التيارات الأدبية الحديثة

| التيار | المميزات | أبرز الأعلام |
|--------|---------|-------------|
| **الكلاسيكية الجديدة** | التشبث بالموروث مع التجديد | شوقي، حافظ إبراهيم |
| **الرومانسية** | العاطفة، الطبيعة، الحرية | جبران خليل جبران، نزار قباني |
| **الواقعية** | تصوير الواقع الاجتماعي | نجيب محفوظ |
| **الحداثة** | تجديد الشكل والمضمون | أدونيس، محمود درويش |

---

### 📖 أعلام الأدب العربي الحديث

**نجيب محفوظ (1911–2006)**
- أول عربي يحصل على جائزة نوبل للأدب (1988)
- أعماله : ثلاثية القاهرة، أولاد حارتنا

**محمود درويش (1941–2008)**
- شاعر القضية الفلسطينية
- أعماله : "العصافير تموت في الجليل"، "على هذه الأرض"

**نزار قباني (1923–1998)**
- شاعر المرأة والحب والسياسة
- أعماله : "رسالة إلى أمي"، "متى يُعلنون وفاة العرب"

---

### 🇲🇦 الأدب المغربي الحديث

**محمد شكري (1935–2003)**
- رواية "الخبز الحافي" : شهادة على الفقر والتهميش

**إدريس الخوري**
- من رواد القصة القصيرة المغربية

**أحمد المجاطي (البياتي المغربي)**
- قصيدة التفعيلة في المغرب
        `
      }
    ],

    flashcards: [
      { id: 'f-ar-01', question: 'ما الفرق بين التشبيه والاستعارة؟', answer: 'التشبيه: مقارنة بأداة (كـ، مثل). الاستعارة: تشبيه بليغ حُذف أحد طرفيه.', category: 'البلاغة', difficulty: 'medium' },
      { id: 'f-ar-02', question: 'ما هي أركان التشبيه الأربعة؟', answer: '1. المشبَّه 2. المشبَّه به 3. وجه الشبه 4. أداة التشبيه.', category: 'البلاغة', difficulty: 'easy' },
      { id: 'f-ar-03', question: 'ما معنى الاستعارة التصريحية؟', answer: 'استعارة صُرِّح فيها بالمشبَّه به وحُذف المشبّه. مثال: "رأيتُ أسداً يخطب" = رجل شجاع.', category: 'البلاغة', difficulty: 'hard' },
      { id: 'f-ar-04', question: 'ما هو الطباق؟ أعطِ مثالاً.', answer: 'الطباق هو الجمع بين متضادين في الكلام. مثال: "الليل والنهار"، "النفع والضرر".', category: 'البلاغة', difficulty: 'easy' },
      { id: 'f-ar-05', question: 'ما الفرق بين الجملة الاسمية والجملة الفعلية؟', answer: 'الاسمية تبدأ بمبتدأ (المجدُّ ناجحٌ). الفعلية تبدأ بفعل (نجحَ الطالبُ).', category: 'النحو', difficulty: 'easy' },
      { id: 'f-ar-06', question: 'ما هي وظيفة الفاعل في الجملة؟', answer: 'الفاعل هو من قام بالفعل، وهو دائماً مرفوع.', category: 'النحو', difficulty: 'easy' },
      { id: 'f-ar-07', question: 'ما هي الكناية في البلاغة العربية؟', answer: 'لفظ أُريد به لازم معناه لا معناه الأصلي. مثال: "طويل النجاد" كناية عن طول القامة.', category: 'البلاغة', difficulty: 'medium' },
      { id: 'f-ar-08', question: 'ما هي أنواع الشعر العربي الحديث؟', answer: '1. الشعر العمودي (بحر وقافية) 2. شعر التفعيلة 3. قصيدة النثر.', category: 'الأدب', difficulty: 'medium' },
      { id: 'f-ar-09', question: 'من هو أول عربي يحصل على جائزة نوبل للأدب؟', answer: 'نجيب محفوظ، المصري، حصل عليها عام 1988.', category: 'الأدب', difficulty: 'medium' },
      { id: 'f-ar-10', question: 'ما هو الجناس؟', answer: 'تشابه كلمتين في اللفظ مع اختلاف في المعنى. مثال: "جَدَّ مَن جَدَّ" (جدّ الأول: اجتهد / جدّ الثاني: الوالد).', category: 'البلاغة', difficulty: 'hard' },
      { id: 'f-ar-11', question: 'ما هي عناصر القصة القصيرة؟', answer: 'الحبكة + الشخصيات + الزمان والمكان + الراوي + القضية/الموضوع + الحل.', category: 'الأدب', difficulty: 'medium' },
      { id: 'f-ar-12', question: 'ما الفرق بين الاستفهام الحقيقي والبلاغي؟', answer: 'الحقيقي: يريد جواباً. البلاغي: لا يريد جواباً (للتنبيه أو الإنكار أو التعجب).', category: 'البلاغة', difficulty: 'hard' },
      { id: 'f-ar-13', question: 'من هو محمود درويش؟', answer: 'شاعر فلسطيني (1941–2008)، صوت القضية الفلسطينية، من أبرز قصائده "على هذه الأرض".', category: 'الأدب', difficulty: 'easy' },
      { id: 'f-ar-14', question: 'ما هو المبتدأ والخبر؟', answer: 'المبتدأ: اسم مرفوع في أول الجملة الاسمية. الخبر: ما يُخبر به عن المبتدأ (يكمل المعنى).', category: 'النحو', difficulty: 'easy' },
      { id: 'f-ar-15', question: 'ما هو التيار الرومانسي في الأدب العربي؟', answer: 'تيار يركز على العاطفة، الطبيعة، الحلم والحرية. أبرز أعلامه: جبران خليل جبران، نزار قباني.', category: 'الأدب', difficulty: 'medium' }
    ],

    quiz: [
      { id: 'q-ar-01', question: 'ما نوع الصورة البيانية في: "العلم نور"؟', options: ['تشبيه بليغ', 'استعارة تصريحية', 'كناية', 'مجاز مرسل'], correct: 0, explanation: 'تشبيه بليغ: حُذفت الأداة ووجه الشبه (المشبَّه+المشبَّه به فقط).', category: 'البلاغة' },
      { id: 'q-ar-02', question: 'الجملة التي تبدأ بفعل تسمى:', options: ['اسمية', 'فعلية', 'مركبة', 'بسيطة'], correct: 1, explanation: 'الجملة الفعلية تبدأ دائماً بفعل (ماضٍ أو مضارع أو أمر).', category: 'النحو' },
      { id: 'q-ar-03', question: '"رأيت أسداً يخطب" مثال على:', options: ['تشبيه', 'استعارة مكنية', 'استعارة تصريحية', 'كناية'], correct: 2, explanation: 'استعارة تصريحية: المشبَّه به (أسد) مذكور والمشبَّه (رجل شجاع) محذوف.', category: 'البلاغة' },
      { id: 'q-ar-04', question: 'من حصل على جائزة نوبل للأدب عام 1988؟', options: ['محمود درويش', 'نجيب محفوظ', 'نزار قباني', 'جبران خليل جبران'], correct: 1, explanation: 'نجيب محفوظ المصري أول عربي يفوز بجائزة نوبل للأدب.', category: 'الأدب' },
      { id: 'q-ar-05', question: 'الطباق هو:', options: ['التشابه بين كلمتين', 'التضاد بين كلمتين', 'التكرار في أول الجملة', 'حذف أداة التشبيه'], correct: 1, explanation: 'الطباق: الجمع بين متضادين (ليل/نهار، حياة/موت).', category: 'البلاغة' },
      { id: 'q-ar-06', question: 'شعر التفعيلة يتميز بـ:', options: ['وزن وقافية ثابتين', 'بلا وزن ولا قافية', 'وزن متجدد بلا قافية ثابتة', 'اقتباس من القرآن'], correct: 2, explanation: 'شعر التفعيلة يحتفظ بالوزن لكن يتحرر من القافية الثابتة.', category: 'الأدب' },
      { id: 'q-ar-07', question: 'المفعول به يكون دائماً:', options: ['مرفوعاً', 'منصوباً', 'مجروراً', 'مجزوماً'], correct: 1, explanation: 'المفعول به منصوب دائماً في الجملة العربية.', category: 'النحو' },
      { id: 'q-ar-08', question: '"طويل النجاد" كناية عن:', options: ['طول الشعر', 'طول القامة', 'القوة الجسدية', 'الشجاعة'], correct: 1, explanation: 'النجاد: حمالة السيف. "طويل النجاد" معناه طويل القامة.', category: 'البلاغة' },
      { id: 'q-ar-09', question: 'محمود درويش شاعر:', options: ['مصري', 'لبناني', 'مغربي', 'فلسطيني'], correct: 3, explanation: 'محمود درويش (1941–2008) أبرز شعراء القضية الفلسطينية.', category: 'الأدب' },
      { id: 'q-ar-10', question: 'أركان التشبيه عددها:', options: ['2', '3', '4', '5'], correct: 2, explanation: 'أربعة أركان: المشبَّه + المشبَّه به + وجه الشبه + أداة التشبيه.', category: 'البلاغة' }
    ]
  },

  // ─────────────────────────────────────────────────────────
  //  ISLAMIQUES
  // ─────────────────────────────────────────────────────────
  islamiques: {
    id: 'islamiques',
    name: 'Islamiques',
    nameAr: 'التربية الإسلامية',
    icon: '🕌',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-500',
    bgDark: 'bg-emerald-900/30',
    border: 'border-emerald-500/40',
    totalLessons: 10,

    lessons: [
      {
        id: 'isl-quran',
        title: 'Module 1 – القرآن الكريم وعلومه',
        oeuvre: 'Module 1',
        duration: '30 min',
        content: `
## القرآن الكريم وعلومه

### 📖 تعريف القرآن الكريم
القرآن الكريم هو **كلام الله المنزَّل** على سيدنا محمد ﷺ بواسطة جبريل عليه السلام، **المتعبَّد بتلاوته**، المنقول بالتواتر، المبدوء بسورة الفاتحة والمختوم بسورة الناس.

---

### 📚 خصائص القرآن الكريم
1. **الإعجاز** : تحدّى الله به البشرية أن يأتوا بسورة من مثله
2. **الحفظ والصون** : حفظه الله بقوله ﴿إنا نحن نزلنا الذكر وإنا له لحافظون﴾
3. **التواتر** : نُقل جيلاً عن جيل بالإسناد المتواتر
4. **التلاوة عبادة** : يُثاب على كل حرف بحسنة

---

### 🔬 علوم القرآن

| العلم | موضوعه |
|-------|--------|
| **علم التفسير** | شرح معاني الآيات القرآنية |
| **علم القراءات** | الأوجه الصحيحة في نطق كلمات القرآن |
| **علم أسباب النزول** | معرفة ظروف نزول الآيات |
| **علم الناسخ والمنسوخ** | الآيات التي نسخت حكماً سابقاً |
| **علم الإعجاز** | وجوه إعجاز القرآن (لغوي، علمي، تشريعي) |
| **علم التجويد** | قواعد النطق الصحيح للقرآن |

---

### 🌟 سورة يوسف عليه السلام
- **السورة** : سورة يوسف – السورة الثانية عشرة
- **عدد الآيات** : 111 آية
- **مكان النزول** : مكية
- **خصيصتها** : سُمِّيت بـ"أحسن القصص" ﴿نَحنُ نَقُصُّ عَلَيكَ أَحسَنَ القَصَصِ﴾

**القيم المستخلصة من قصة سيدنا يوسف :**
- الصبر على الابتلاء
- العفو والتسامح
- الأمانة والإخلاص في العمل
- الاستعفاف عن الحرام رغم الإغراء
- التفاؤل ورؤية العاقبة الحسنة
        `
      },
      {
        id: 'isl-hadith',
        title: 'Module 2 – الحديث والسيرة النبوية',
        oeuvre: 'Module 2',
        duration: '30 min',
        content: `
## الحديث النبوي الشريف والسيرة

### 📜 الحديث النبوي الشريف

**تعريفه :** كل ما صدر عن النبي ﷺ من **قول، أو فعل، أو تقرير، أو صفة**.

#### أنواع الحديث
| النوع | التعريف |
|-------|---------|
| **الحديث القولي** | ما قاله النبي ﷺ بلفظه |
| **الحديث الفعلي** | ما فعله النبي ﷺ |
| **الحديث التقريري** | ما سكت عنه ﷺ إقراراً |

#### درجات الحديث من حيث الصحة
1. **صحيح** : سند متصل، رواة عدول، بلا شذوذ
2. **حسن** : أقل ضبطاً من الصحيح لكن مقبول
3. **ضعيف** : فيه خلل في السند أو المتن
4. **موضوع** (مكذوب) : اختُلق ولا يُحتج به

---

### 🌟 مصادر التشريع الإسلامي

| المصدر | المرتبة |
|--------|---------|
| القرآن الكريم | الأول |
| السنة النبوية | الثاني |
| الإجماع | الثالث |
| القياس | الرابع |

---

### 📖 السيرة النبوية – أبرز المحطات

| الحدث | التاريخ |
|-------|---------|
| مولد النبي ﷺ | 571 م (عام الفيل) |
| بداية الوحي | 610 م (غار حراء) |
| الهجرة إلى مكة | 622 م (بداية التقويم الهجري) |
| غزوة بدر الكبرى | 624 م |
| فتح مكة المكرمة | 630 م |
| حجة الوداع | 632 م |
| وفاة النبي ﷺ | 632 م |
        `
      },
      {
        id: 'isl-aqida',
        title: 'Module 3 – العقيدة الإسلامية',
        oeuvre: 'Module 3',
        duration: '25 min',
        content: `
## العقيدة الإسلامية

### 🌟 أركان الإيمان الستة

﴿آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيهِ مِن رَّبِّهِ وَالمُؤمِنُونَ﴾

1. **الإيمان بالله** : توحيده في الربوبية والألوهية والأسماء والصفات
2. **الإيمان بالملائكة** : مخلوقات نورانية لها وظائف محددة
3. **الإيمان بالكتب** : التوراة، الزبور، الإنجيل، القرآن
4. **الإيمان بالرسل** : من آدم إلى محمد ﷺ (خاتمهم)
5. **الإيمان باليوم الآخر** : البعث، الحساب، الجنة، النار
6. **الإيمان بالقدر** : خير وشره من الله

---

### 🏛️ أركان الإسلام الخمسة

| الركن | التعريف |
|-------|---------|
| **الشهادتان** | لا إله إلا الله محمد رسول الله |
| **الصلاة** | 5 صلوات يومياً |
| **الزكاة** | 2.5% من المال بشروطها |
| **الصوم** | صوم شهر رمضان |
| **الحج** | لمن استطاع إليه سبيلاً |

---

### 💡 توحيد الله تعالى

| النوع | التعريف | مثال |
|-------|---------|------|
| **توحيد الربوبية** | الله هو الخالق الرازق المدبِّر | ﴿اللهُ خَالِقُ كُلِّ شَيءٍ﴾ |
| **توحيد الألوهية** | العبادة لله وحده | لا نعبد إلا الله |
| **توحيد الأسماء والصفات** | إثبات ما وصف الله به نفسه | الرحمن، العليم، القادر |

---

### ⚡ نواقض الإيمان
- **الشرك بالله** : هو أعظم الذنوب ﴿إِنَّ اللهَ لا يَغفِرُ أَن يُشرَكَ بِهِ﴾
- **الكفر** : إنكار أصل من أصول الدين
- **النفاق** : إظهار الإسلام وإخفاء الكفر
        `
      },
      {
        id: 'isl-fiqh',
        title: 'Module 4 – الفقه الإسلامي',
        oeuvre: 'Module 4',
        duration: '30 min',
        content: `
## الفقه الإسلامي

### 📚 مصادر الفقه الإسلامي

1. **القرآن الكريم** : المصدر الأول التشريعي
2. **السنة النبوية** : التفصيل والبيان
3. **الإجماع** : اتفاق العلماء في عصر واحد
4. **القياس** : إلحاق فرع بأصل لعلة مشتركة
5. **المصادر الأخرى** : الاستحسان، المصلحة المرسلة، العرف

---

### ⚖️ الأحكام الشرعية التكليفية

| الحكم | التعريف | مثال |
|-------|---------|------|
| **الواجب** (الفرض) | يُثاب فاعله، يُعاقب تاركه | الصلاة، الزكاة |
| **المندوب** (المستحب) | يُثاب فاعله، لا يُعاقب تاركه | السنن، التطوعات |
| **المباح** | لا ثواب ولا عقاب | معظم العادات |
| **المكروه** | يُثاب تاركه، لا يُعاقب فاعله | الانشغال بالمباحات أثناء الذكر |
| **المحرَّم** | يُعاقب فاعله، يُثاب تاركه | الكذب، الزنا، الخمر |

---

### 🌙 فقه الصلاة – أهم الأحكام

**شروط صحة الصلاة :**
- الطهارة (الوضوء أو الغسل)
- ستر العورة
- استقبال القبلة
- دخول الوقت
- النية

**فرائض الصلاة :**
تكبيرة الإحرام، القيام، قراءة الفاتحة، الركوع، السجود، الجلوس بين السجدتين، التشهد الأخير، السلام.
        `
      },
      {
        id: 'isl-akhlaq',
        title: 'Module 5 – الأخلاق والسلوك الإسلامي',
        oeuvre: 'Module 5',
        duration: '25 min',
        content: `
## الأخلاق والسلوك الإسلامي

### 🌟 القيم الإسلامية الكبرى

**تعريف الأخلاق :** حالة نفسية راسخة تصدر عنها الأفعال بسهولة ويسر.

﴿وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ﴾ — مدح الله لنبيه ﷺ

---

### 💎 أبرز الفضائل الأخلاقية

| الفضيلة | التعريف | الأساس الشرعي |
|---------|---------|--------------|
| **الصدق** | مطابقة القول للواقع | "عليكم بالصدق فإن الصدق يهدي إلى البر" |
| **الأمانة** | أداء الحقوق لأصحابها | "أدِّ الأمانة إلى من ائتمنك" |
| **الصبر** | تحمّل المشاق دون جزع | ﴿إِنَّ اللَّهَ مَعَ الصَّابِرِينَ﴾ |
| **العدل** | إعطاء كل ذي حق حقه | ﴿إِنَّ اللَّهَ يَأمُرُ بِالعَدلِ وَالإِحسَانِ﴾ |
| **الرحمة** | اللين والعطف بالآخرين | "الراحمون يرحمهم الرحمن" |
| **التواضع** | انعدام الكبر والغرور | "من تواضع لله رفعه الله" |

---

### ⛔ أبرز الرذائل الأخلاقية

- **الكذب** : يفضي إلى الفجور ويُورث الفتنة
- **الغيبة** : ذكر أخيك بما يكره ﴿وَلا يَغتَب بَعضُكُم بَعضاً﴾
- **الكبر** : التعالي على الناس والتقليل من قدرهم
- **الحسد** : تمني زوال النعمة عن الغير
- **الغش** : "من غشّنا فليس منا" (حديث)

---

### 🤝 الأخلاق الاجتماعية
- **بر الوالدين** : ﴿وَبِالوَالِدَينِ إِحسَاناً﴾
- **صلة الرحم** : زيارة الأقارب وتقوية الأواصر
- **حقوق الجار** : الإحسان إليه وعدم أذيته
- **المواطنة** : المشاركة في بناء المجتمع
        `
      },
      {
        id: 'isl-youssef',
        title: 'سورة يوسف – دراسة تحليلية',
        oeuvre: 'سورة يوسف',
        duration: '35 min',
        content: `
## سورة يوسف – أحسن القصص

### 📖 نبذة عن السورة
- **الترتيب** : السورة 12 في المصحف الشريف
- **عدد الآيات** : 111 آية
- **مكان النزول** : مكية (نزلت بمكة المكرمة)
- **سبب التسمية** : تضمّنها قصة سيدنا يوسف عليه السلام كاملة
- **الإعجاز** : سُمِّيت بـ"أحسن القصص" لشموليتها وعبرتها

﴿نَحنُ نَقُصُّ عَلَيكَ أَحسَنَ القَصَصِ بِمَا أَوحَينَا إِلَيكَ هَذَا القُرآنَ﴾

---

### 📅 مراحل قصة سيدنا يوسف عليه السلام

| المرحلة | الحدث الرئيسي |
|---------|--------------|
| **الطفولة** | الرؤيا (11 كوكباً والشمس والقمر يسجدون له) |
| **البئر** | إخوته يُلقونه في البئر غيرةً وحسداً |
| **مصر** | بيعه عبداً لعزيز مصر (قطفير/فوطيفار) |
| **الإغراء** | محاولة امرأة العزيز الإيقاع به وقميصه من دُبُر |
| **السجن** | دخول السجن بسبب تقرير امرأة العزيز |
| **تفسير الأحلام** | تفسير حلمَي الفتيَين في السجن |
| **حلم الملك** | تفسير رؤيا الملك (7 بقرات سمان + 7 هزيلات) |
| **الوزارة** | توليه خزائن مصر وإشرافه على الاقتصاد |
| **الإخوة** | مجيء إخوته طلبًا للطعام دون أن يعرفوه |
| **العفو** | مغفرته لإخوته: ﴿لا تَثرِيبَ عَلَيكُمُ اليَومَ﴾ |
| **الوفاء** | لقاؤه بأبيه يعقوب وتحقق الرؤيا |

---

### 💡 القيم والدروس المستفادة

1. **الصبر والثقة بالله** : رغم البئر والسجن، لم ييأس
2. **العفو العام** : "لا تثريب عليكم اليوم"
3. **الاستعفاف والعفة** : رفض إغراء امرأة العزيز
4. **الأمانة والكفاءة** : استحق الوزارة بعلمه
5. **حسن التدبير** : خطته لسنوات المجاعة
6. **البر بالوالدين** : حرصه على أبيه يعقوب

---

### 🌟 آيات محورية

> ﴿إِنَّهُ مَن يَتَّقِ وَيَصبِر فَإِنَّ اللَّهَ لا يُضِيعُ أَجرَ المُحسِنِينَ﴾

> ﴿وَاللَّهُ غَالِبٌ عَلَى أَمرِهِ وَلَكِنَّ أَكثَرَ النَّاسِ لا يَعلَمُونَ﴾

> ﴿قَالَ لا تَثرِيبَ عَلَيكُمُ اليَومَ يَغفِرُ اللَّهُ لَكُم وَهُوَ أَرحَمُ الرَّاحِمِينَ﴾
        `
      }
    ],

    flashcards: [
      { id: 'f-isl-01', question: 'ما تعريف القرآن الكريم؟', answer: 'كلام الله المنزَّل على النبي ﷺ، المتعبَّد بتلاوته، المنقول بالتواتر، المبدوء بالفاتحة والمختوم بالناس.', category: 'القرآن', difficulty: 'medium' },
      { id: 'f-isl-02', question: 'ما أنواع الحديث من حيث صدوره عن النبي ﷺ؟', answer: '1. الحديث القولي 2. الحديث الفعلي 3. الحديث التقريري.', category: 'الحديث', difficulty: 'medium' },
      { id: 'f-isl-03', question: 'ما أركان الإيمان الستة؟', answer: 'الإيمان بـ: 1.الله 2.الملائكة 3.الكتب 4.الرسل 5.اليوم الآخر 6.القدر خيره وشره.', category: 'العقيدة', difficulty: 'easy' },
      { id: 'f-isl-04', question: 'ما أركان الإسلام الخمسة؟', answer: '1.الشهادتان 2.الصلاة 3.الزكاة 4.الصوم 5.الحج.', category: 'العقيدة', difficulty: 'easy' },
      { id: 'f-isl-05', question: 'ما مصادر التشريع الإسلامي بالترتيب؟', answer: '1. القرآن 2. السنة 3. الإجماع 4. القياس.', category: 'الفقه', difficulty: 'medium' },
      { id: 'f-isl-06', question: 'ما الفرق بين الواجب والمستحب؟', answer: 'الواجب: يُثاب فاعله ويُعاقب تاركه. المستحب: يُثاب فاعله فقط ولا يُعاقب تاركه.', category: 'الفقه', difficulty: 'medium' },
      { id: 'f-isl-07', question: 'لماذا سُمِّيت سورة يوسف بـ"أحسن القصص"؟', answer: 'لأنها تضمنت قصة كاملة بكل مراحلها وعِبَرها، ولشمولها لجوانب إنسانية خالدة كالصبر والعفو.', category: 'سورة يوسف', difficulty: 'medium' },
      { id: 'f-isl-08', question: 'ما الدرس الأول المستفاد من قصة سيدنا يوسف؟', answer: 'الصبر على الابتلاء والثقة بالله، رغم البئر والسجن والغربة.', category: 'سورة يوسف', difficulty: 'easy' },
      { id: 'f-isl-09', question: 'ما معنى "لا تثريب عليكم اليوم"؟', answer: 'لا عتاب ولا لوم عليكم هذا اليوم. قالها يوسف لإخوته عافياً عنهم.', category: 'سورة يوسف', difficulty: 'medium' },
      { id: 'f-isl-10', question: 'ما تعريف الصدق؟', answer: 'مطابقة القول الكلام الداخلي والواقع الخارجي. قال ﷺ: "عليكم بالصدق فإنه يهدي إلى البر."', category: 'الأخلاق', difficulty: 'easy' },
      { id: 'f-isl-11', question: 'ما هي الأحكام الشرعية التكليفية الخمسة؟', answer: '1.الواجب 2.المندوب 3.المباح 4.المكروه 5.المحرَّم.', category: 'الفقه', difficulty: 'medium' },
      { id: 'f-isl-12', question: 'متى بدأ نزول الوحي على النبي ﷺ؟', answer: 'عام 610 ميلادية، في غار حراء، بسورة العلق: ﴿اقرأ باسم ربك الذي خلق﴾.', category: 'السيرة', difficulty: 'easy' },
      { id: 'f-isl-13', question: 'ما تعريف الغيبة؟', answer: 'ذكر أخيك المسلم بما يكره في غيابه. قال ﷺ: "الغيبة ذكرك أخاك بما يكره."', category: 'الأخلاق', difficulty: 'easy' },
      { id: 'f-isl-14', question: 'متى كانت غزوة بدر الكبرى؟', answer: 'في السنة الثانية للهجرة (624 م). أول معركة كبرى في الإسلام.', category: 'السيرة', difficulty: 'medium' },
      { id: 'f-isl-15', question: 'ما هو القياس في الفقه؟', answer: 'إلحاق مسألة جديدة بمسألة ورد فيها حكم شرعي لاشتراكهما في العلة.', category: 'الفقه', difficulty: 'hard' }
    ],

    quiz: [
      { id: 'q-isl-01', question: 'كم عدد آيات سورة يوسف؟', options: ['100', '105', '111', '120'], correct: 2, explanation: 'سورة يوسف تحتوي على 111 آية وهي سورة مكية.', category: 'سورة يوسف' },
      { id: 'q-isl-02', question: 'سورة يوسف هي السورة رقم كم في المصحف؟', options: ['10', '11', '12', '13'], correct: 2, explanation: 'سورة يوسف هي السورة الثانية عشرة في ترتيب المصحف الشريف.', category: 'سورة يوسف' },
      { id: 'q-isl-03', question: 'كم عدد أركان الإيمان؟', options: ['4', '5', '6', '7'], correct: 2, explanation: 'أركان الإيمان ستة: الله، الملائكة، الكتب، الرسل، اليوم الآخر، القدر.', category: 'العقيدة' },
      { id: 'q-isl-04', question: 'مصادر التشريع الإسلامي الأربعة الكبرى بالترتيب الصحيح هي:', options: ['السنة، القرآن، الإجماع، القياس', 'القرآن، السنة، القياس، الإجماع', 'القرآن، السنة، الإجماع، القياس', 'الإجماع، القرآن، السنة، القياس'], correct: 2, explanation: 'الترتيب الصحيح: القرآن ← السنة ← الإجماع ← القياس.', category: 'الفقه' },
      { id: 'q-isl-05', question: 'متى فُتحت مكة المكرمة؟', options: ['620 م', '628 م', '630 م', '632 م'], correct: 2, explanation: 'فتح مكة كان في رمضان، السنة 8 للهجرة / 630 ميلادية.', category: 'السيرة' },
      { id: 'q-isl-06', question: 'الحكم الشرعي الذي يُثاب فاعله ويُعاقب تاركه هو:', options: ['المندوب', 'الواجب', 'المباح', 'المكروه'], correct: 1, explanation: 'الواجب (الفرض) يُثاب من يفعله ويُعاقب من يتركه بلا عذر.', category: 'الفقه' },
      { id: 'q-isl-07', question: '"لا تثريب عليكم اليوم" تعني:', options: ['لا طعام لكم اليوم', 'لا عتاب ولا لوم عليكم', 'لا خوف عليكم', 'اذهبوا اليوم'], correct: 1, explanation: 'قالها يوسف لإخوته عافياً عنهم: لن أعاتبكم ولن ألومكم.', category: 'سورة يوسف' },
      { id: 'q-isl-08', question: 'الصلوات الفريضة في اليوم والليلة عددها:', options: ['3', '4', '5', '7'], correct: 2, explanation: 'الصلوات الخمس المفروضة: الفجر، الظهر، العصر، المغرب، العشاء.', category: 'الفقه' },
      { id: 'q-isl-09', question: 'نسبة الزكاة في مال المسلم هي:', options: ['1%', '2%', '2.5%', '5%'], correct: 2, explanation: 'نصاب زكاة المال: 2.5% من المال إذا حال عليه الحول وبلغ النصاب.', category: 'الفقه' },
      { id: 'q-isl-10', question: 'سيدنا يوسف عليه السلام أُلقي في البئر من قِبَل:', options: ['الملك', 'إخوته', 'عزيز مصر', 'السجانين'], correct: 1, explanation: 'إخوة يوسف حسدوه لحب أبيه له فألقوه في البئر، ثم أخبروا أباهم أكله ذئب.', category: 'سورة يوسف' }
    ]
  },

  // ─────────────────────────────────────────────────────────
  //  HISTOIRE-GÉOGRAPHIE
  // ─────────────────────────────────────────────────────────
  hg: {
    id: 'hg',
    name: 'Histoire-Géo',
    nameAr: 'التاريخ والجغرافيا',
    icon: '🌍',
    color: 'orange',
    gradient: 'from-orange-500 to-amber-500',
    bgDark: 'bg-orange-900/30',
    border: 'border-orange-500/40',
    totalLessons: 10,

    lessons: [
      {
        id: 'hg-ww1',
        title: 'La Première Guerre mondiale (1914–1918)',
        oeuvre: 'Histoire',
        duration: '30 min',
        content: `
## La Première Guerre mondiale (1914–1918)

### 📅 Chronologie essentielle

| Date | Événement |
|------|-----------|
| **28 juin 1914** | Assassinat de François-Ferdinand à Sarajevo |
| **28 juillet 1914** | Déclaration de guerre de l'Autriche à la Serbie |
| **Août 1914** | Généralisation de la guerre (Pays de l'Entente vs Triple Alliance) |
| **Sept. 1914** | Bataille de la Marne : échec du plan Schlieffen |
| **1915–1916** | Guerre de tranchées (front Ouest figé) |
| **Feb. 1916** | Bataille de Verdun (la plus meurtrière) |
| **Avril 1917** | Entrée en guerre des États-Unis |
| **Nov. 1917** | Révolution bolchevique → Russie sort de la guerre |
| **11 nov. 1918** | Armistice : fin de la guerre |
| **1919** | Traité de Versailles |

---

### ⚔️ Les alliances

| Triple Entente (Alliés) | Triple Alliance (Puissances centrales) |
|------------------------|---------------------------------------|
| France | Allemagne |
| Royaume-Uni | Autriche-Hongrie |
| Russie (jusqu'en 1917) | Empire ottoman |
| + Italie (1915), USA (1917) | + Bulgarie |

---

### 🔴 Causes de la guerre
1. **Causes lointaines** : nationalisme, impérialisme, course aux armements
2. **Rivalités coloniales** entre les grandes puissances
3. **Système d'alliances** : toute étincelle peut enflammer l'Europe
4. **Cause immédiate** : assassinat de l'archiduc à Sarajevo

---

### 📊 Bilan humain et économique
- Morts : **~20 millions** (militaires + civils)
- Blessés : ~21 millions
- Destruction de l'économie européenne
- Émergence des États-Unis comme puissance mondiale
- Effondrement de 4 empires : allemand, austro-hongrois, ottoman, russe

---

### 📜 Le Traité de Versailles (1919)
- L'Allemagne **seule responsable** de la guerre (Article 231)
- Pertes territoriales de l'Allemagne (Alsace-Lorraine → France)
- Réparations de guerre considérables
- Création de la **Société des Nations (SDN)**
- Germe de la Seconde Guerre mondiale
        `
      },
      {
        id: 'hg-entre-deux-guerres',
        title: 'L\'Entre-deux-guerres (1919–1939)',
        oeuvre: 'Histoire',
        duration: '30 min',
        content: `
## L'Entre-deux-guerres (1919–1939)

### 🌍 Une période de crises

#### Les années 1920 (années folles)
- **Prospérité américaine** : boom économique, société de consommation
- **Instabilité politique** en Europe (Allemagne de Weimar)
- **Montée des fascismes** : Mussolini en Italie (1922), Hitler en Allemagne (1933)

---

### 💥 La Crise économique de 1929
| Étape | Événement |
|-------|-----------|
| **Oct. 1929** | Krach boursier de Wall Street (Jeudi noir) |
| **1929–1933** | Grande Dépression mondiale |
| **Chômage massif** | USA : 12 millions de chômeurs |
| **Faillites bancaires** | Effondrement du système financier international |

---

### ⚡ La montée des totalitarismes

**Fascisme mussolinien (Italie, 1922)**
- Benito Mussolini : "Duce"
- Parti unique, nationalisme extrême, violence politique

**Nazisme hitlérien (Allemagne, 1933)**
- Adolf Hitler : "Führer"
- Antisémitisme, aryanisme, lebensraum (espace vital)
- Lois de Nuremberg (1935) : discrimination des Juifs
- Kristallnacht (1938)

**Stalinisme soviétique (URSS)**
- Collectivisation forcée, Goulag, purges

---

### 📅 Chronologie des tensions (1933–1939)
- **1933** : Hitler au pouvoir, sorts de la SDN
- **1935** : Réarmement allemand
- **1936** : Remilitarisation de la Rhénanie
- **1938** : Anschluss (annexion de l'Autriche), Accord de Munich
- **Sept. 1939** : Invasion de la Pologne → 2ème Guerre mondiale
        `
      },
      {
        id: 'hg-ww2',
        title: 'La Deuxième Guerre mondiale (1939–1945)',
        oeuvre: 'Histoire',
        duration: '35 min',
        content: `
## La Deuxième Guerre mondiale (1939–1945)

### 📅 Chronologie des événements majeurs

| Date | Événement |
|------|-----------|
| **1 sept. 1939** | Invasion de la Pologne par l'Allemagne nazie |
| **3 sept. 1939** | France et UK déclarent la guerre à l'Allemagne |
| **Mai 1940** | Blitzkrieg : invasion de la France (Bataille de France) |
| **Juin 1940** | Appel du Général de Gaulle (18 juin) / Armistice français |
| **1940–1941** | Bataille d'Angleterre (bombardements de la Luftwaffe) |
| **Juin 1941** | Opération Barbarossa : Hitler envahit l'URSS |
| **7 déc. 1941** | Pearl Harbor → USA entrent en guerre |
| **1942–1943** | Tournant : Stalingrad (1943), El-Alamein |
| **Juin 1944** | Débarquement en Normandie (D-Day, 6 juin) |
| **Mai 1945** | Capitulation allemande (8 mai = VE Day) |
| **Août 1945** | Bombes atomiques sur Hiroshima et Nagasaki |
| **2 sept. 1945** | Capitulation japonaise → Fin de la guerre |

---

### 🗺️ Les deux camps

| Alliés | Axe |
|--------|-----|
| USA (depuis 1941) | Allemagne nazie (Hitler) |
| URSS (depuis 1941) | Italie fasciste (Mussolini) |
| Royaume-Uni | Japon impérial |
| France libre (de Gaulle) | — |

---

### 💀 La Shoah (Holocauste)
- Extermination systématique des Juifs d'Europe
- **~6 millions** de Juifs assassinés
- Camps d'extermination : Auschwitz, Treblinka, Sobibor...
- Commence avec les pogroms, se termine par les chambres à gaz

---

### 🌐 Conséquences de la guerre
- **Bilan humain** : 60 à 80 millions de morts
- **Création de l'ONU** (1945) - remplace la SDN
- **Plan Marshall** (1947) : aide américaine pour reconstruire l'Europe
- **Début de la Guerre froide** (USA vs URSS)
- **Décolonisation** : mouvements d'indépendance en Asie et Afrique
- **Procès de Nuremberg** (1945–1946) : jugement des criminels de guerre
        `
      },
      {
        id: 'hg-guerre-froide',
        title: 'La Guerre Froide (1947–1991)',
        oeuvre: 'Histoire',
        duration: '30 min',
        content: `
## La Guerre Froide (1947–1991)

### 🧊 Définition
Conflit d'ordre politique, idéologique, économique et militaire entre les **USA** (bloc occidental) et l'**URSS** (bloc soviétique), sans affrontement direct ("froide").

---

### 🌐 Les deux blocs

| Bloc occidental (USA) | Bloc soviétique (URSS) |
|----------------------|------------------------|
| Capitalisme libéral | Communisme |
| OTAN (1949) | Pacte de Varsovie (1955) |
| Plan Marshall | COMECON |
| Démocratie | Parti unique |

---

### 📅 Les grandes crises de la Guerre Froide

| Crise | Date | Résolution |
|-------|------|-----------|
| **Blocus de Berlin** | 1948–1949 | Pont aérien américain, échec URSS |
| **Guerre de Corée** | 1950–1953 | Armistice, statu quo |
| **Crise de Cuba** | 1962 | Retrait missiles soviétiques |
| **Mur de Berlin** | 1961–1989 | Construction puis chute du mur |
| **Guerre du Vietnam** | 1955–1975 | Victoire communiste |

---

### 🕊️ La Détente et la fin
- **1972** : Accords SALT I (limitation des armements nucléaires)
- **1975** : Accords d'Helsinki (reconnaissance des frontières)
- **1985** : Gorbatchev → Glasnost et Perestroïka
- **Nov. 1989** : Chute du Mur de Berlin
- **Déc. 1991** : Dissolution de l'URSS → Fin de la Guerre Froide

---

### 🇲🇦 Le Maroc pendant la Guerre Froide
- Indépendance du Maroc : **2 mars 1956**
- Choix de la **neutralité positive** (Mouvement des Non-Alignés)
- Relations économiques avec l'Occident
- Maintien de relations avec le monde arabe
        `
      },
      {
        id: 'hg-maroc',
        title: 'Le Maroc : du Protectorat à l\'Indépendance',
        oeuvre: 'Histoire',
        duration: '30 min',
        content: `
## Le Maroc : du Protectorat à l'Indépendance

### 📅 Chronologie de la résistance marocaine

| Date | Événement |
|------|-----------|
| **1912** | Traité de Fès → Protectorat français sur le Maroc |
| **1921–1926** | Guerre du Rif : Abd el-Krim contre l'Espagne et la France |
| **1930** | Dahir berbère → déclenche le nationalisme |
| **1944** | Manifeste de l'Indépendance (11 janvier) |
| **1953** | Exil du Sultan Mohammed V en Madagascar |
| **1955** | Retour du Sultan, Accords d'Aix-les-Bains |
| **2 mars 1956** | **Indépendance du Maroc** |
| **1957** | Mohammed V prend le titre de Roi |
| **1961** | Mort de Mohammed V, accession de Hassan II |

---

### 🦁 Les acteurs de la résistance
- **Mohammed V (Sidi Mohammed ben Youssef)** : symbole national, exilé en 1953
- **Allal el-Fassi** : fondateur du parti Istiqlal, idéologue du nationalisme
- **Ahmed Balafrej** : co-rédacteur du Manifeste de l'Indépendance
- **Abderrahim Bouabid** : figure syndicale et politique
- **L'Armée de Libération** : résistance armée dans le Rif et l'Atlas

---

### 📜 Le Manifeste de l'Indépendance (11 janvier 1944)
- Rédigé par les leaders du mouvement national
- Demande la fin du Protectorat et l'indépendance totale
- Plus de 500 signataires
- Marque le début de la confrontation ouverte avec la France

---

### 🏛️ La construction de l'État marocain indépendant
- Constitution de **1962** : première constitution du Maroc
- Maroc = **Monarchie constitutionnelle**
- Intégration de l'armée de libération dans les forces royales
- Développement de l'enseignement et des institutions nationales
        `
      },
      {
        id: 'hg-geo-afrique',
        title: 'Géographie – L\'Afrique : ressources et défis',
        oeuvre: 'Géographie',
        duration: '30 min',
        content: `
## Géographie de l'Afrique

### 🌍 Présentation générale

| Indicateur | Données |
|-----------|---------|
| **Superficie** | 30,3 millions de km² (2e continent) |
| **Population** | ~1,4 milliard d'habitants (2023) |
| **Pays** | 54 États reconnus |
| **Diversité climatique** | Équatorial, tropical, aride, méditerranéen |

---

### 💎 Les ressources naturelles de l'Afrique
- **Pétrole** : Nigeria, Angola, Lybie, Algérie
- **Gaz naturel** : Algérie, Nigeria, Mozambique
- **Diamants** : Botswana, Congo, Sierra Leone
- **Or** : Afrique du Sud, Ghana, Mali
- **Phosphates** : Maroc (1er exportateur mondial), Algérie
- **Coltan** (Congo) : indispensable pour les smartphones
- **Cacao** : Côte d'Ivoire, Ghana (70% de la production mondiale)

---

### 📊 Les défis de l'Afrique

#### Défis démographiques
- Croissance démographique rapide (>2.5%/an)
- Structure de la population : très jeune (60% < 25 ans)
- Exode rural → croissance des bidonvilles

#### Défis économiques
- Dépendance aux matières premières (exportation brute)
- Faible industrialisation
- Dette extérieure élevée

#### Défis sociaux
- Accès limité à l'éducation et à la santé
- Conflits armés (Sahel, Soudan, RDC)

---

### 🇲🇦 Le Maroc et l'Afrique
- Retour du Maroc à l'**Union Africaine** (2017)
- Investissements marocains massifs en Afrique subsaharienne (OCP, Attijariwafa Bank)
- Candidature pour accueillir la **CAN** et la **Coupe du Monde 2030**
- Projet du **gazoduc Nigeria-Maroc** (45 000 km)
        `
      }
    ],

    flashcards: [
      { id: 'f-hg-01', question: 'Quelle date marque le début de la Première Guerre mondiale ?', answer: 'L\'assassinat de l\'archiduc François-Ferdinand à Sarajevo le 28 juin 1914. Déclaration de guerre le 28 juillet 1914.', category: 'PGM', difficulty: 'easy' },
      { id: 'f-hg-02', question: 'Qu\'est-ce que le Traité de Versailles (1919) ?', answer: 'Traité de paix après la PGM. L\'Allemagne est déclarée seule responsable et doit payer des réparations. Crée la SDN.', category: 'PGM', difficulty: 'medium' },
      { id: 'f-hg-03', question: 'Qu\'est-ce que le Krach de 1929 ?', answer: 'Effondrement de la Bourse de Wall Street en octobre 1929 ("Jeudi Noir"), déclenchant la Grande Dépression mondiale.', category: 'Entre-deux-guerres', difficulty: 'medium' },
      { id: 'f-hg-04', question: 'Qui était Adolf Hitler ?', answer: 'Führer du IIIe Reich (1933–1945). Fondateur du nazisme, responsable de la Shoah et du déclenchement de la 2ème GM.', category: 'Totalitarismes', difficulty: 'easy' },
      { id: 'f-hg-05', question: 'Qu\'est-ce que la Shoah ?', answer: 'Génocide des Juifs d\'Europe par l\'Allemagne nazie : ~6 millions de victimes dans les camps d\'extermination.', category: 'SGM', difficulty: 'medium' },
      { id: 'f-hg-06', question: 'Quelle est la date du D-Day (Débarquement en Normandie) ?', answer: '6 juin 1944. Débarquement allié en Normandie, journée décisive qui accélère la fin de la guerre en Europe.', category: 'SGM', difficulty: 'easy' },
      { id: 'f-hg-07', question: 'Qu\'est-ce que la Guerre Froide ?', answer: 'Conflit idéologique (USA vs URSS) de 1947 à 1991, sans affrontement militaire direct, marqué par la course aux armements.', category: 'Guerre froide', difficulty: 'easy' },
      { id: 'f-hg-08', question: 'Quand le Maroc a-t-il obtenu son indépendance ?', answer: 'Le 2 mars 1956, après négociations franco-marocaines et le retour de Mohammed V d\'exil.', category: 'Maroc', difficulty: 'easy' },
      { id: 'f-hg-09', question: 'Qu\'est-ce que le Manifeste de l\'Indépendance du Maroc ?', answer: 'Document rédigé le 11 janvier 1944 par les nationalistes marocains, réclamant l\'indépendance totale du Maroc de la France.', category: 'Maroc', difficulty: 'medium' },
      { id: 'f-hg-10', question: 'Qu\'est-ce que le Plan Marshall ?', answer: 'Programme américain d\'aide économique (1947) pour la reconstruction de l\'Europe après la 2ème GM. Budget : 13 milliards $.', category: 'Guerre froide', difficulty: 'medium' },
      { id: 'f-hg-11', question: 'Quelle est la date de la chute du Mur de Berlin ?', answer: '9 novembre 1989. La chute du Mur symbolise la fin de la Guerre Froide et la réunification de l\'Allemagne (1990).', category: 'Guerre froide', difficulty: 'easy' },
      { id: 'f-hg-12', question: 'Qu\'est-ce que l\'ONU ? Quand a-t-elle été créée ?', answer: 'Organisation des Nations Unies, créée en 1945 pour maintenir la paix mondiale. Remplace la SDN, siège à New York.', category: 'SGM', difficulty: 'medium' },
      { id: 'f-hg-13', question: 'Quelles sont les principales ressources naturelles de l\'Afrique ?', answer: 'Pétrole (Nigeria, Angola), diamants (Botswana), or (Afrique du Sud), phosphates (Maroc 1er mondial), cacao (Côte d\'Ivoire).', category: 'Géographie', difficulty: 'medium' },
      { id: 'f-hg-14', question: 'Quelle est la superficie de l\'Afrique ?', answer: '30,3 millions de km² : 2e continent du monde après l\'Asie.', category: 'Géographie', difficulty: 'easy' },
      { id: 'f-hg-15', question: 'Qui est Abd el-Krim el-Khattabi ?', answer: 'Chef berbère (Rif) qui mena la résistance armée contre l\'Espagne et la France (1921–1926). Symbole de la résistance marocaine.', category: 'Maroc', difficulty: 'medium' }
    ],

    quiz: [
      { id: 'q-hg-01', question: 'La Première Guerre mondiale a commencé en :', options: ['1912', '1914', '1916', '1918'], correct: 1, explanation: 'La PGM débute le 28 juillet 1914 avec la déclaration de guerre autrichienne à la Serbie.', category: 'PGM' },
      { id: 'q-hg-02', question: 'L\'armistice de la Première Guerre mondiale a été signé le :', options: ['8 mai 1918', '11 novembre 1918', '28 juin 1919', '1er janvier 1919'], correct: 1, explanation: '11 novembre 1918 à 11h : fin officielle des combats sur le front Ouest.', category: 'PGM' },
      { id: 'q-hg-03', question: 'Le Krach boursier de 1929 a eu lieu à :', options: ['Paris', 'Londres', 'New York (Wall Street)', 'Berlin'], correct: 2, explanation: '"Jeudi Noir" du 24 octobre 1929 à Wall Street, New York.', category: 'Entre-deux-guerres' },
      { id: 'q-hg-04', question: 'Hitler arrive au pouvoir en Allemagne en :', options: ['1930', '1931', '1933', '1935'], correct: 2, explanation: 'Hitler devient chancelier d\'Allemagne le 30 janvier 1933.', category: 'Totalitarismes' },
      { id: 'q-hg-05', question: 'Le débarquement allié en Normandie (D-Day) a eu lieu le :', options: ['6 juin 1943', '6 juin 1944', '6 juin 1945', '8 mai 1945'], correct: 1, explanation: 'Le 6 juin 1944 : Opération Overlord, débarquement en Normandie.', category: 'SGM' },
      { id: 'q-hg-06', question: 'Le Maroc a obtenu son indépendance le :', options: ['2 mars 1955', '2 mars 1956', '18 novembre 1955', '2 janvier 1956'], correct: 1, explanation: 'L\'indépendance du Maroc a été proclamée le 2 mars 1956.', category: 'Maroc' },
      { id: 'q-hg-07', question: 'La Guerre Froide a pris fin en :', options: ['1985', '1989', '1991', '1993'], correct: 2, explanation: 'La dissolution de l\'URSS le 25 décembre 1991 marque officiellement la fin de la Guerre Froide.', category: 'Guerre froide' },
      { id: 'q-hg-08', question: 'La SDN (Société des Nations) a été créée après :', options: ['La 2ème Guerre mondiale', 'La Guerre froide', 'La 1ère Guerre mondiale', 'La Révolution russe'], correct: 2, explanation: 'La SDN est créée en 1919 par le Traité de Versailles pour maintenir la paix mondiale.', category: 'PGM' },
      { id: 'q-hg-09', question: 'Le Maroc est le premier exportateur mondial de :', options: ['Pétrole', 'Or', 'Phosphates', 'Diamants'], correct: 2, explanation: 'Le Maroc détient 70% des réserves mondiales de phosphate et est le 1er exportateur mondial.', category: 'Géographie' },
      { id: 'q-hg-10', question: 'La bombe atomique a été lâchée sur Hiroshima le :', options: ['2 août 1945', '6 août 1945', '9 août 1945', '2 septembre 1945'], correct: 1, explanation: '6 août 1945 sur Hiroshima, puis 9 août sur Nagasaki → capitulation japonaise.', category: 'SGM' },
      { id: 'q-hg-11', question: 'Allal el-Fassi était :', options: ['Un général français', 'Le fondateur du parti Istiqlal et leader du nationalisme marocain', 'Un roi du Maroc', 'Un chef berbère du Rif'], correct: 1, explanation: 'Allal el-Fassi a fondé le parti Istiqlal et était le principal idéologue du mouvement national marocain.', category: 'Maroc' },
      { id: 'q-hg-12', question: 'Le combien y a-t-il de pays en Afrique ?', options: ['48', '50', '54', '57'], correct: 2, explanation: 'L\'Afrique compte 54 États reconnus par l\'Union Africaine.', category: 'Géographie' }
    ]
  }
};

// Helper functions
function getSubjectById(id) {
  return APP_DATA[id] || null;
}

function getAllSubjects() {
  return Object.values(APP_DATA);
}

function getLessonById(subjectId, lessonId) {
  const subject = getSubjectById(subjectId);
  if (!subject) return null;
  return subject.lessons.find(l => l.id === lessonId) || null;
}
