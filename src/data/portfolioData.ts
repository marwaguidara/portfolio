export interface Project {
  id: string;
  title: string;
  shortSummary: string;
  fullDescription: string;
  tags: string[];
  highlights: string[];
  stack: string[];
  githubUrl?: string | null;
  demoUrl?: string | null;
  codeStatus: string; // e.g. "Code sur demande", "Repo d'équipe", "Démo LinkedIn", "Public"
  iconName: string;
  gradient: string;
  images?: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Marwa Guidara",
  title: "Ingénieure en Informatique",
  location: "Sfax, Tunisie",
  email: "guidaramarwa27@gmail.com",
  github: "https://github.com/marwaguidara",
  linkedin: "https://www.linkedin.com/in/guidara-marwa-14347b2b9/",
  cvPath: "/cv.pdf",
  bioParagraphs: [
    "Je poursuis actuellement un diplôme d'Ingénieur en Génie Logiciel à l'ISIMS (Institut Supérieur d'Informatique et de Multimédia de Sfax), après une Licence en Big Data obtenue en 2025. Mon parcours combine deux axes : la recherche appliquée en intelligence artificielle (RAG hybrides, NLP, vérification automatique des affirmations générées) et le développement logiciel classique (applications full-stack, bases de données, architecture backend).",
    "Sur mes projets d'IA, j'accorde une attention particulière à la fiabilité : un système qui répond \"je ne sais pas\" quand les preuves sont insuffisantes me semble plus utile qu'un système qui invente une réponse plausible. C'est une préoccupation que j'ai retrouvée sur plusieurs de mes projets (RAG Citation Validator, SciBridge) où j'ai mis en place des mécanismes de vérification et de refus explicite.",
    "Côté développement, je travaille aussi bien avec Python/FastAPI qu'avec des stacks plus classiques (Spring Boot, Node.js, Angular), et j'essaie de garder une démarche rigoureuse : tester ce que j'écris, comprendre un bug avant de le corriger plutôt que de le patcher au hasard, documenter mes choix.",
    "Pendant ma Licence, j'ai été membre de l'IEEE Student Branch (2022-2023), du Leader Club (2023-2024) et du Microsoft Club (2025)."
  ],
  keyDifferentiators: [
    {
      title: "IA Fiable & Auto-Vérifiable",
      description: "Conception de pipelines RAG avec évaluation NLI, grounding lexical et politiques de refus explicite en cas de manque de preuve.",
      icon: "ShieldCheck"
    },
    {
      title: "Rigueur d'Ingénierie Basée sur Preuves",
      description: "Debugging méthodique, métriques chiffrées (Recall@k, MRR, BLEU/ROUGE, MAE/RMSE) et suites de tests automatisés systématiques.",
      icon: "Binary"
    },
    {
      title: "Polyvalence Full-Stack & System Design",
      description: "Capacité à orchestrer le pipeline complet : du modèle PyTorch/Transformer au service API FastAPI conteneurisé et à l'interface moderne.",
      icon: "Cpu"
    },
    {
      title: "Engagement & Community Leadership",
      description: "Membre active IEEE, ancienne responsable de club étudiant et contributrice au Microsoft Club avec un fort esprit d'équipe.",
      icon: "Users"
    }
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "IA / Machine Learning",
    icon: "Brain",
    skills: [
      { name: "PyTorch", highlight: true },
      { name: "Transformers (RoBERTa, DeBERTa, T5)", highlight: true },
      { name: "Scikit-learn" },
      { name: "Fine-tuning & LoRA" },
      { name: "NLI (Natural Language Inference)", highlight: true },
      { name: "XAI / SHAP (Explicabilité)", highlight: true },
      { name: "Focal Loss & Cross-Validation" },
      { name: "Augmentation de données" }
    ]
  },
  {
    title: "RAG & LLM Engineering",
    icon: "Sparkles",
    skills: [
      { name: "Retrieval Hybride (Dense + BM25 + RRF)", highlight: true },
      { name: "Reranking (Cross-Encoder / BGE)", highlight: true },
      { name: "Détection d'Hallucinations & NLI", highlight: true },
      { name: "Grounding Lexical & Refus Explicite", highlight: true },
      { name: "Vector DB (Qdrant)", highlight: true },
      { name: "Ollama (Qwen / Llama)" },
      { name: "Prompt Engineering & Guardrails" }
    ]
  },
  {
    title: "Backend & APIs",
    icon: "Server",
    skills: [
      { name: "Python (FastAPI)", highlight: true },
      { name: "Java (Spring Boot)", highlight: true },
      { name: "Node.js / Express", highlight: true },
      { name: "Laravel / PHP" },
      { name: "REST APIs & OpenAPI / Swagger" },
      { name: "JWT & Spring Security / RBAC" }
    ]
  },
  {
    title: "Frontend Web",
    icon: "Layout",
    skills: [
      { name: "React / Next.js (App Router)", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Angular 19", highlight: true },
      { name: "Tailwind CSS & Glassmorphism" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5 / CSS3 & Bootstrap" }
    ]
  },
  {
    title: "Bases de Données & Data",
    icon: "Database",
    skills: [
      { name: "MySQL", highlight: true },
      { name: "MongoDB" },
      { name: "SQLite & Migrations DB" },
      { name: "XML / XSD / JAXB", highlight: true },
      { name: "Knex.js" },
      { name: "Pandas & Data Cleaning" }
    ]
  },
  {
    title: "DevOps, VR & Outils",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Streamlit", highlight: true },
      { name: "Unity & C# (VR Fitness)", highlight: true },
      { name: "Power BI (Visualisation)", highlight: true }
    ]
  },
  {
    title: "Notions / En Apprentissage",
    icon: "Wrench",
    skills: [
      { name: "Docker & Docker Compose" },
      { name: "GitHub Actions (CI/CD)" }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "rag-citation-validator",
    title: "RAG Citation Validator",
    shortSummary: "Système RAG hybride avec vérification automatique des citations — chaque affirmation générée est confrontée à ses sources par un modèle NLI avec score continu.",
    fullDescription: "Système de Retrieval-Augmented Generation conçu pour résoudre le problème fondamental des RAG traditionnels : la génération d'affirmations en apparence sourcées mais dont les citations manquent de vérification effective. Le pipeline associe une recherche dense (embeddings BGE) et une recherche lexicale (BM25), fusionnées via Reciprocal Rank Fusion (RRF), puis affinées par un reranker cross-encoder.\n\nChaque citation de la réponse finale est évaluée par un modèle NLI (RoBERTa-large-MNLI) qui attribue un score de confiance continu (0 à 1). Une étude comparative A/B/C/D complète (Recall@k, MRR, Faithfulness, Citation Accuracy) valide scientifiquement l'apport de chaque composant du pipeline.",
    tags: ["RAG & IA Générative", "Recherche / NLP"],
    highlights: [
      "Recherche hybride Dense + BM25 + RRF avec reranking cross-encoder (BGE)",
      "Vérification automatique des citations par NLI (RoBERTa-MNLI) avec score continu",
      "Stack 100% reproductible et locale (sans dépendance API payante obligatoire)",
      "Étude comparative A/B/C/D chiffrée avec analyse des gains marginaux",
      "Interface Streamlit avec chronométrage précis du pipeline de décision"
    ],
    stack: ["Python", "FastAPI", "Qdrant", "Sentence-Transformers", "RoBERTa-MNLI", "Rank-BM25", "Streamlit", "OpenAI/Claude API"],
    githubUrl: "https://github.com/marwaguidara/RAG-Citation-Validator",
    demoUrl: null,
    codeStatus: "Code disponible",
    iconName: "FileCheck2",
    gradient: "from-indigo-600 via-purple-600 to-pink-500",
    images: [
      "/projects/rag-citation-validator/demo.mp4",
      "/projects/rag-citation-validator/demo-2.mp4"
    ]
  },
  {
    id: "scibridge",
    title: "SciBridge — Découverte Scientifique Cross-Domaine",
    shortSummary: "Système RAG reliant Médecine et Biomatériaux, générant des hypothèses de recherche avec garde-fous anti-hallucination stricts et refus explicite.",
    fullDescription: "SciBridge prolonge le validateur de citations en l'appliquant au domaine biomédical à fort enjeu. En interrogeant des corpuses ciblés (PubMed & arXiv) sur l'intersection médecine/biomatériaux, le système route la requête par similarité vectorielle et génère des hypothèses de recherche qualifiées.\n\nSa signature réside dans sa politique de sécurité absolue : si les preuves sources sont insuffisantes (calculées par une formule NLI pondérée 0.7×moyenne + 0.3×minimum), le système émet un refus explicite 'Données insuffisantes'. Un filtre de grounding lexical contrôle la présence effective de chaque terme scientifique clé dans les sources.",
    tags: ["RAG & IA Générative", "Recherche / NLP"],
    highlights: [
      "Routage de domaine intelligent par similarité vectorielle d'embeddings",
      "Score de confiance NLI pondéré (0.7×moyenne + 0.3×minimum) anti-masquage d'affirmation faible",
      "Filtre de grounding lexical anti-hallucination avec suite de tests dédiés",
      "Refus explicite ('Données insuffisantes') comme garde-fou de sécurité central",
      "Reranker LLM-first avec fallback CrossEncoder et système d'audit/smoke tests"
    ],
    stack: ["Python", "FastAPI", "Qdrant", "BGE Reranker", "RoBERTa-MNLI", "Ollama (Qwen3)", "Streamlit", "PubMed & arXiv APIs"],
    githubUrl: null,
    demoUrl: null,
    codeStatus: "Code sur demande",
    iconName: "Atom",
    gradient: "from-blue-600 via-indigo-600 to-cyan-400",
    images: [
      "/projects/scibridge/demo.mp4"
    ]
  },
  {
    id: "erp-patisserie",
    title: "ERP Pâtisserie — Gestion Intégrée & Module IA",
    shortSummary: "Plateforme ERP d'entreprise (stocks, ventes, RH) enrichie d'un microservice IA de prévision des ventes et détection d'anomalies avec garde-fous métiers.",
    fullDescription: "Projet full-stack d'envergure : solution d'entreprise centralisant la gestion des stocks, ventes, employés, fournisseurs et commandes (Node.js/Express, Knex, MySQL), couplée à un service IA dédié (Python/FastAPI) pour la prévision de ventes, la détection d'anomalies et la recommandation de production.\n\nLe module IA respecte le principe d'une source unique de vérité : aucun calcul redondant des métriques existantes, indication obligatoire du score de confiance pour chaque prédiction, et statut 'Données insuffisantes' pour les produits sans historique. Modèle de régression Ridge évalué contre une baseline naïve (MAE/RMSE) avec suite de 286 tests automatisés (Jest & Playwright).",
    tags: ["Full-Stack + IA", "Génie Logiciel"],
    highlights: [
      "Architecture propre découplant backend métier (Node.js) et service prédictif IA (FastAPI)",
      "Prévision Ridge évaluée empiriquement contre baseline naïve (moyenne mobile)",
      "Indicateurs de confiance prédictive et gestion du cas 'Données insuffisantes'",
      "286 tests automatisés (Jest + Playwright) avec CI/CD GitHub Actions conteneurisée",
      "Migration intégrale et documentée de base de données (SQLite/PostgreSQL ➔ MySQL)",
      "Sécurité RBAC 5 rôles, JWT, validation Zod et logs d'audit"
    ],
    stack: ["Node.js/Express", "Knex.js", "MySQL", "Python/FastAPI", "Scikit-learn", "Pandas", "Docker Compose", "GitHub Actions", "Jest", "Playwright"],
    githubUrl: "https://github.com/marwaguidara/patisserie-erp",
    demoUrl: null,
    codeStatus: "Code disponible",
    iconName: "Building2",
    gradient: "from-amber-500 via-orange-600 to-red-500",
    images: [
      "/projects/erp-patisserie/demo.mp4"
    ]
  },
  {
    id: "absa-agri-tech",
    title: "Analyse de Sentiment par Aspects (ABSA) — Agri-Tech",
    shortSummary: "Mémoire de fin d'études sur l'analyse de sentiment par aspects sur données agricoles, comparaison de 6 architectures Transformer et explicabilité SHAP.",
    fullDescription: "Travail de recherche appliqué (mémoire de Licence Big Data, ISIMS Sfax) ciblant l'ABSA sur des avis de produits agricoles. Le projet intègre une phase d'augmentation de données générative (Mistral-7B, filtrage linguistique et évaluation par BLEU/ROUGE/BERTScore).\n\nUne benchmark expérimentale rigoureuse compare 6 architectures (DeBERTa-HAN, T5-MHA, RoBERTa-HiBiLSTM, etc.) en validation croisée 5-fold. Le meilleur modèle (DeBERTa avec attention hiérarchique) atteint 0.87 d'accuracy et F1. L'explicabilité par SHAP génère des explications visuelles et textuelles en langage naturel.",
    tags: ["Recherche / NLP"],
    highlights: [
      "Comparaison expérimentale de 6 architectures Transformer avec 5-fold cross-validation",
      "Accuracy et F1-score de 0.87 surpassant la baseline académique",
      "Module d'explicabilité (XAI) par SHAP avec métriques de fidélité et sparsité",
      "Augmentation générative de données (Mistral-7B) évaluée quantitativement",
      "Déploiement complet (FastAPI + Next.js) avec génération d'explications textuelles",
      "Travail soutenu et validé devant un jury académique d'ingénieurs"
    ],
    stack: ["Python", "PyTorch", "DeBERTa", "RoBERTa", "T5", "SHAP", "Scikit-learn", "FastAPI", "Next.js", "Mistral-7B"],
    githubUrl: null,
    demoUrl: null,
    codeStatus: "Rapport académique",
    iconName: "Sprout",
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    images: [
      "/projects/pfe-agri-tech/demo.mp4"
    ]
  },
  {
    id: "sgii-ville",
    title: "SGII-Ville — Gestion Intelligente des Interventions Urbaines",
    shortSummary: "Plateforme web de gestion des interventions techniques municipales conçue selon le Processus Unifié avec modélisation UML et persistance 100% XML/XSD.",
    fullDescription: "Système de gestion municipale développé selon le Processus Unifié (Inception ➔ Transition), intégrant une modélisation UML complète (16 cas d'utilisation, diagrammes de séquence, d'activités, de classes et de déploiement).\n\nPermet le signalement citoyen géolocalisé et la planification intelligente via un calendrier dynamique tri-ressources (disponibilité croisée techniciens/équipements/matériaux). Architecture Spring Boot avec persistance XML pure validée par schémas XSD (intégrité référentielle par xs:key/xs:keyref) et frontend Angular 19.",
    tags: ["Génie Logiciel"],
    highlights: [
      "Modélisation UML exhaustive selon le Processus Unifié (16 cas d'utilisation)",
      "Calendrier de planification intelligent fondé sur la disponibilité tri-ressources",
      "Architecture de persistance 100% XML/XSD avec intégrité référentielle stricte",
      "Géolocalisation interactive (Leaflet + OpenStreetMap) & génération PDF",
      "Architecture 4 couches Spring Boot + Angular 19 avec Spring Security & JWT"
    ],
    stack: ["Java 21", "Spring Boot", "Spring Security", "JWT", "Angular 19", "TypeScript", "XML/XSD", "Leaflet", "iText PDF"],
    githubUrl: "https://github.com/eyadammak2002/sgiiv",
    demoUrl: null,
    codeStatus: "Code (repo d'équipe)",
    iconName: "MapPin",
    gradient: "from-blue-500 via-indigo-600 to-violet-600",
    images: [
      "/projects/sgii-ville/Affectation-des-taches-au-personnel.png",
      "/projects/sgii-ville/calendrier-intelligent-colore.png",
      "/projects/sgii-ville/Carte-intelligente-1.png",
      "/projects/sgii-ville/Carte-intelligente-2.png",
      "/projects/sgii-ville/Interface-d'authentification.png",
      "/projects/sgii-ville/Interface-de-creation-de-demande-2.png",
      "/projects/sgii-ville/Interface-de-creation-de-demande1.png",
      "/projects/sgii-ville/Interface-de-planification-d'intervention.png",
      "/projects/sgii-ville/Tableau-de-bord-pour-administrateur.png",
      "/projects/sgii-ville/Tableau-de-bord-pour-technicien.png"
    ]
  },
  {
    id: "treadmill-pro-vr",
    title: "TREADMILL PRO — Simulation VR Desktop Fitness",
    shortSummary: "Application de fitness en réalité virtuelle sous Unity avec calcul scientifique des calories (formule MET Ainsworth) et tutoriel d'assemblage 3D 15 étapes.",
    fullDescription: "Application VR Desktop développée sous Unity dans le cadre d'un module d'eXtended Reality (xR). Propose une immersion complète à travers 6 scènes interconnectées : sélection d'avatar humanoïde (rig Mixamo), salle de sport interactive, historique persistant et tutoriel d'assemblage 3D en 15 étapes.\n\nLe suivi physiologique en temps réel repose sur la formule scientifique MET (Metabolic Equivalent of Task) issue du Compendium d'Ainsworth, validée à 1% près. Propose des caméras multi-vues et des retours haptiques/sonores.",
    tags: ["VR / Unity"],
    highlights: [
      "Calcul de calories basé sur la méthode scientifique MET (Ainsworth) validé à 1%",
      "Tutoriel d'assemblage 3D 15 étapes avec zones d'accroche (snap zones) & feedback sensoriel",
      "Système de caméra multi-mode et dashboard analytique temps réel (vitesse/calories)",
      "Pipeline d'animation complet avec rig humanoïde et retargeting Mixamo",
      "Rapport et méthodologie de test structurée (unitaire, intégration, E2E)"
    ],
    stack: ["Unity", "C#", "Blender 3D", "Mixamo", "PlayerPrefs"],
    githubUrl: null,
    demoUrl: "https://lnkd.in/p/eNuKZ6JC",
    codeStatus: "Voir la démo",
    iconName: "Glasses",
    gradient: "from-purple-600 via-pink-600 to-rose-500",
    images: [
      "/projects/treadmill-pro/assembly.png",
      "/projects/treadmill-pro/gym1.png",
      "/projects/treadmill-pro/gym2.png",
      "/projects/treadmill-pro/history.png",
      "/projects/treadmill-pro/intro.png",
      "/projects/treadmill-pro/intro2.png",
      "/projects/treadmill-pro/person.png",
      "/projects/treadmill-pro/run.png"
    ]
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    period: "2026",
    role: "Stage — ERP Pâtisserie : Gestion Intégrée & Module IA",
    company: "Stage de spécialité",
    location: "Sfax, Tunisie",
    type: "Full-Stack & IA",
    description: "Conception et développement d'une plateforme ERP complète (stocks, ventes, RH, fournisseurs) enrichie d'un microservice IA de prévision des ventes, recommandation de production et détection d'anomalies.",
    bullets: [
      "Architecture full-stack Node.js/Express + service IA Python/FastAPI séparé",
      "Prévision des ventes évaluée quantitativement (MAE/RMSE) contre une baseline",
      "Migration complète de base de données documentée, CI/CD avec 286 tests automatisés"
    ],
    tags: ["Node.js", "Express", "Python", "FastAPI", "MySQL", "Docker", "CI/CD"]
  },
  {
    period: "2025",
    role: "Stage — Modèles Transformer pour l'Agri-Tech",
    company: "ISIMS Sfax (Projet Académique / Recherche)",
    location: "Sfax, Tunisie",
    type: "Recherche & Deep Learning",
    description: "Conception et entraînement de modèles de deep learning basés sur les Transformers pour l'analyse de sentiment fine sur des corpus agricoles.",
    bullets: [
      "Conception et fine-tuning de modèles Transformers (DeBERTa, RoBERTa, T5) spécialisés dans l'analyse de sentiment par aspect (ABSA).",
      "Annotation, nettoyage et augmentation générative de données textuelles spécialisées (LLM Mistral-7B) avec évaluation BLEU/ROUGE.",
      "Implémentation de modules d'explicabilité par SHAP et comparaison expérimentale rigoureuse avec 5-fold cross-validation."
    ],
    tags: ["PyTorch", "Transformers", "DeBERTa", "FastAPI", "SHAP", "Next.js"]
  },
  {
    period: "2024",
    role: "Stage — Développement Web Full-Stack",
    company: "Plateforme Bougmiza",
    location: "Sfax, Tunisie",
    type: "Développement Web",
    description: "Conception et déploiement d'une plateforme de réservation et gestion de rendez-vous commerciale complète.",
    bullets: [
      "Développement d'un backend robuste avec Laravel / PHP et architecture RESTful.",
      "Implémentation d'un système de contrôle d'accès à 3 niveaux de rôles (RBAC).",
      "Création d'interfaces utilisateurs dynamiques et responsives (HTML5, CSS3, JavaScript, Bootstrap).",
      "Intégration d'un service automatisé de notifications email pour la confirmation de rendez-vous."
    ],
    tags: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "REST APIs"]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    period: "2025/2026 (En cours)",
    degree: "Diplôme d'Ingénieur en Génie Logiciel",
    institution: "ISIMS (Institut Supérieur d'Informatique et de Multimédia de Sfax)",
    location: "Sfax, Tunisie",
    description: "Spécialisation en Ingénierie Logicielle, Systèmes Distribués, IA & Machine Learning, Architecture Web et Méthodologies Agiles."
  },
  {
    period: "2022 – 2025",
    degree: "Licence en Big Data / Computer Science",
    institution: "ISIMS Sfax",
    location: "Sfax, Tunisie",
    description: "Formation académique en Analyse de Données, Algorithmique Avancée, Probabilités/Statistiques, Bases de données SQL/NoSQL et Développement Full-Stack."
  }
];
