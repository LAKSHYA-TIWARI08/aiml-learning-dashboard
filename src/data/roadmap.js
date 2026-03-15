// ─────────────────────────────────────────────────────────────────────────────
// All content extracted from:
//   • Future_Proof_AIML_Roadmap.pdf
//   • AI_ML_Resource_Guide_Premium.pdf
// ─────────────────────────────────────────────────────────────────────────────

export const PHASES = [
  {
    id: 'phase-1',
    num: '01',
    title: 'Foundations',
    months: 'Months 1 – 3',
    color: '#6366F1',
    colorDim: 'rgba(99,102,241,0.12)',
    description:
      'Python · NumPy · Pandas · Matplotlib · Git · Prompt Engineering · OpenAI API · AI Literacy',
    phaseGoal:
      'Write Python confidently, manipulate DataFrames, push clean code to GitHub, and call an LLM API from a script. These 8 topics are your launchpad.',
    topics: [
      {
        id: 'python',
        title: 'Python Fundamentals',
        tag: 'Core Language',
        level: 'Beginner',
        hours: 40,
        isNew: false,
        isUpgraded: false,
        description:
          'Master Python syntax, data structures, OOP, file I/O, and scripting. The universal language of AI/ML — everything builds on this.',
        project:
          'Build a CLI expense tracker that saves to CSV and prints monthly summaries.',
        resources: [
          {
            type: 'YouTube',
            label: 'Learn Python – Full Course for Beginners (freeCodeCamp)',
            url: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
          },
          {
            type: 'YouTube',
            label: 'Python for Beginners – Full Course (Beau Carnes)',
            url: 'https://www.youtube.com/watch?v=eWRfhZUzrAc',
          },
          {
            type: 'Course',
            label: 'MIT OCW – Intro to CS and Programming in Python (6.0001)',
            url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016',
          },
          {
            type: 'Docs',
            label: 'Python.org – The Official Python Tutorial',
            url: 'https://docs.python.org/3/tutorial/',
          },
        ],
      },
      {
        id: 'numpy',
        title: 'NumPy',
        tag: 'Numerical Computing',
        level: 'Beginner',
        hours: 15,
        isNew: false,
        isUpgraded: false,
        description:
          'N-dimensional arrays, broadcasting, vectorized operations, linear algebra routines. The backbone of every ML computation.',
        project:
          'Implement linear regression from scratch with NumPy; plot predictions vs. true values.',
        resources: [
          {
            type: 'YouTube',
            label: 'Python NumPy Tutorial for Beginners (freeCodeCamp)',
            url: 'https://www.youtube.com/watch?v=QUT1VHiLmmI',
          },
          {
            type: 'YouTube',
            label: 'NumPy Full Course (alternative tutorial)',
            url: 'https://www.youtube.com/watch?v=8Y0qQEh7dJg',
          },
          {
            type: 'Course',
            label: 'Learn NumPy – freeCodeCamp Article + Video',
            url: 'https://www.freecodecamp.org/news/numpy-python-tutorial/',
          },
          {
            type: 'Docs',
            label: 'NumPy User Guide (Official)',
            url: 'https://numpy.org/doc/stable/user/',
          },
        ],
      },
      {
        id: 'pandas',
        title: 'Pandas',
        tag: 'Data Manipulation',
        level: 'Beginner',
        hours: 20,
        isNew: false,
        isUpgraded: false,
        description:
          'DataFrames, data cleaning, merging, groupby, time series. Your primary tool for real-world messy data before any model training.',
        project:
          'Analyze the Titanic or House Prices dataset: full EDA with summary stats and plots.',
        resources: [
          {
            type: 'YouTube',
            label: 'Data Analysis with Python – Full Course (freeCodeCamp)',
            url: 'https://www.youtube.com/watch?v=r-uOLxNrNk8',
          },
          {
            type: 'YouTube',
            label: 'Pandas Tutorial Series (Corey Schafer)',
            url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p',
          },
          {
            type: 'Course',
            label: 'Kaggle – Pandas Course (Free)',
            url: 'https://www.kaggle.com/learn/pandas',
          },
          {
            type: 'Docs',
            label: 'Pandas User Guide (Official)',
            url: 'https://pandas.pydata.org/docs/user_guide/index.html',
          },
        ],
      },
      {
        id: 'matplotlib',
        title: 'Matplotlib & Data Visualization',
        tag: 'Visualization',
        level: 'Beginner',
        hours: 12,
        isNew: false,
        isUpgraded: false,
        description:
          'Line, bar, scatter, histogram, boxplot charts. Visual storytelling with data is a core communication skill for every AI engineer.',
        project:
          'Create 5–7 different charts for one dataset (line, bar, histogram, scatter, boxplot) to tell a complete data story.',
        resources: [
          {
            type: 'YouTube',
            label: 'Matplotlib Crash Course (Corey Schafer)',
            url: 'https://www.youtube.com/watch?v=UO98lJQ3QGI',
          },
          {
            type: 'YouTube',
            label: 'Python Data Visualization – Matplotlib & Seaborn (freeCodeCamp)',
            url: 'https://www.youtube.com/watch?v=3Xc3CA655Y4',
          },
          {
            type: 'Course',
            label: 'Kaggle – Data Visualization (Free)',
            url: 'https://www.kaggle.com/learn/data-visualization',
          },
          {
            type: 'Docs',
            label: 'Matplotlib Tutorials (Official)',
            url: 'https://matplotlib.org/stable/tutorials/index.html',
          },
        ],
      },
      {
        id: 'git',
        title: 'Git & GitHub',
        tag: 'Version Control',
        level: 'Beginner',
        hours: 10,
        isNew: false,
        isUpgraded: false,
        description:
          'Branching, commits, pull requests, GitHub portfolio. Your public GitHub is your resume — start building it from day one.',
        project:
          'Put all your AI learning projects on GitHub with branching and meaningful commit messages.',
        resources: [
          {
            type: 'YouTube',
            label: 'Git and GitHub for Beginners – Crash Course (freeCodeCamp)',
            url: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
          },
          {
            type: 'YouTube',
            label: 'Git Tutorial for Beginners (Traversy Media)',
            url: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc',
          },
          {
            type: 'Course',
            label: 'Google – Intro to Git & GitHub on Coursera (Audit Free)',
            url: 'https://www.coursera.org/learn/introduction-git-github',
          },
          {
            type: 'Docs',
            label: 'Pro Git Book (Free, Official)',
            url: 'https://git-scm.com/book/en/v2',
          },
        ],
      },
      {
        id: 'prompt-eng',
        title: 'Prompt Engineering',
        tag: 'NEW — 2025',
        level: 'Beginner',
        hours: 8,
        isNew: true,
        isUpgraded: false,
        description:
          'System prompts, few-shot examples, chain-of-thought, structured outputs. Now a baseline literacy skill for every AI engineer.',
        project:
          'Build an LLM helper script with different system prompts: summarizer, tutor, and code reviewer.',
        resources: [
          {
            type: 'YouTube',
            label: 'Prompt Engineering for Developers – DeepLearning.AI & OpenAI',
            url: 'https://www.youtube.com/watch?v=BUdwDOLQVWc',
          },
          {
            type: 'YouTube',
            label: 'Prompt Engineering Full Course (Simplilearn)',
            url: 'https://www.youtube.com/watch?v=TBIDq7WgdE0',
          },
          {
            type: 'Course',
            label: 'ChatGPT Prompt Engineering for Developers – DeepLearning.AI (Free)',
            url: 'https://learn.deeplearning.ai/courses/chatgpt-prompt-eng',
          },
          {
            type: 'Docs',
            label: 'OpenAI Prompt Engineering Guide',
            url: 'https://platform.openai.com/docs/guides/prompt-engineering',
          },
        ],
      },
      {
        id: 'openai-api',
        title: 'OpenAI API from Python',
        tag: 'NEW — 2025',
        level: 'Beginner',
        hours: 10,
        isNew: true,
        isUpgraded: false,
        description:
          'API calls, function calling, streaming, system prompts from Python scripts. Early API fluency separates 2025 candidates from 2022 ones.',
        project:
          'Convert a CSV analytics script into a Q&A chatbot using Pandas + OpenAI API.',
        resources: [
          {
            type: 'YouTube',
            label: 'Build with the OpenAI API – Official Playlist',
            url: 'https://www.youtube.com/playlist?list=PL7V1FhN4yphtJbdQJx8IuR5pTKtyfO3Wc',
          },
          {
            type: 'YouTube',
            label: 'Use OpenAI / ChatGPT API in Python (freeCodeCamp)',
            url: 'https://www.youtube.com/watch?v=pl1Pgj7I7zM',
          },
          {
            type: 'Course',
            label: 'OpenAI Quickstart – Build with the API (Official)',
            url: 'https://platform.openai.com/docs/quickstart',
          },
          {
            type: 'Docs',
            label: 'OpenAI API Reference (Official)',
            url: 'https://platform.openai.com/docs/api-reference',
          },
        ],
      },
      {
        id: 'ai-literacy',
        title: 'AI Literacy & Transformers',
        tag: 'NEW — 2025',
        level: 'Intermediate',
        hours: 12,
        isNew: true,
        isUpgraded: false,
        description:
          "Read 'Attention is All You Need'. Understand what transformers are before you build them. Re-read every quarter as your understanding deepens.",
        project:
          'Summarize the Transformer paper in 1–2 pages and implement a minimal self-attention layer in PyTorch.',
        resources: [
          {
            type: 'YouTube',
            label: 'Attention Is All You Need – Paper Explained (Yannic Kilcher)',
            url: 'https://www.youtube.com/watch?v=iDulhoQ2pro',
          },
          {
            type: 'YouTube',
            label: 'Transformers from Scratch – 3Blue1Brown Intro',
            url: 'https://www.youtube.com/watch?v=Gj0iyo265bc',
          },
          {
            type: 'Course',
            label: 'Hugging Face Course – Transformers (Free)',
            url: 'https://huggingface.co/learn/nlp-course/chapter1/1',
          },
          {
            type: 'Docs',
            label: "Original 'Attention Is All You Need' Paper (arXiv)",
            url: 'https://arxiv.org/abs/1706.03762',
          },
        ],
      },
    ],
  },

  // ── Phase 2 ────────────────────────────────────────────────────────────
  {
    id: 'phase-2',
    num: '02',
    title: 'Core Machine Learning',
    months: 'Months 4 – 7',
    color: '#10B981',
    colorDim: 'rgba(16,185,129,0.12)',
    description:
      'Scikit-Learn · Classical ML · Embeddings · Vector DBs · RAG · SHAP · Gradio · Kaggle',
    phaseGoal:
      'Have a Kaggle competition submission, a SHAP-explained model with a Gradio UI, and a working RAG pipeline on your GitHub. This is what mid-level roles see first.',
    topics: [
      {
        id: 'sklearn',
        title: 'Scikit-Learn & Classical ML',
        tag: 'Core ML',
        level: 'Intermediate',
        hours: 35,
        isNew: false,
        isUpgraded: false,
        description:
          'Regression, classification, clustering, cross-validation, feature engineering, pipelines. Non-negotiable fundamentals that every ML interview tests.',
        project:
          'Build a churn prediction model (logistic regression + random forest); compare accuracy, precision, recall, ROC-AUC.',
        resources: [
          {
            type: 'YouTube',
            label: 'Machine Learning with Scikit-Learn – freeCodeCamp',
            url: 'https://www.youtube.com/watch?v=0B5eIE_1vpU',
          },
          {
            type: 'YouTube',
            label: 'StatQuest – ML Playlist (Logistic Regression, Trees, etc.)',
            url: 'https://www.youtube.com/user/joshstarmer/playlists',
          },
          {
            type: 'Course',
            label: 'Andrew Ng – Machine Learning Specialization (Coursera, Audit)',
            url: 'https://www.coursera.org/learn/machine-learning',
          },
          {
            type: 'Docs',
            label: 'Scikit-Learn User Guide (Official)',
            url: 'https://scikit-learn.org/stable/user_guide.html',
          },
        ],
      },
      {
        id: 'embeddings',
        title: 'Embeddings & Sentence-Transformers',
        tag: 'NEW — 2025',
        level: 'Intermediate',
        hours: 15,
        isNew: true,
        isUpgraded: false,
        description:
          'Vector representations of meaning, cosine similarity, semantic search, UMAP visualization. Bridges classical ML and modern LLM-land.',
        project:
          'Build a semantic search engine over your own notes; visualize embeddings with UMAP in a notebook.',
        resources: [
          {
            type: 'YouTube',
            label: 'Sentence-Transformers: Text Embeddings (Official Tutorial)',
            url: 'https://www.youtube.com/watch?v=9gBC9R-msAk',
          },
          {
            type: 'YouTube',
            label: 'Embeddings & Vector Search Explained – Pinecone',
            url: 'https://www.youtube.com/watch?v=tL6X7uQw4vE',
          },
          {
            type: 'Course',
            label: 'Hugging Face NLP Course – Embeddings & Semantic Search',
            url: 'https://huggingface.co/learn/nlp-course/chapter3/1',
          },
          {
            type: 'Docs',
            label: 'Sentence-Transformers Official Docs',
            url: 'https://www.sbert.net/',
          },
        ],
      },
      {
        id: 'vector-dbs',
        title: 'Vector Databases (Chroma / Pinecone)',
        tag: 'NEW — 2025',
        level: 'Intermediate',
        hours: 12,
        isNew: true,
        isUpgraded: false,
        description:
          'Vector storage, nearest-neighbor retrieval, Chroma for local dev, Pinecone for cloud. Every production AI system built after 2023 uses vector search.',
        project:
          'Index a folder of PDFs into Chroma and build a CLI Q&A interface over the documents.',
        resources: [
          {
            type: 'YouTube',
            label: 'Build a RAG App with ChromaDB',
            url: 'https://www.youtube.com/watch?v=RkP5JdYh9uY',
          },
          {
            type: 'YouTube',
            label: 'Vector Databases Explained – Pinecone',
            url: 'https://www.youtube.com/watch?v=hB7CdzB0cQg',
          },
          {
            type: 'Course',
            label: 'Pinecone Learn – Semantic Search & RAG Guides',
            url: 'https://www.pinecone.io/learn/',
          },
          {
            type: 'Docs',
            label: 'Chroma Docs (Official)',
            url: 'https://docs.trychroma.com',
          },
        ],
      },
      {
        id: 'rag',
        title: 'Retrieval-Augmented Generation (RAG)',
        tag: 'NEW — 2025',
        level: 'Intermediate',
        hours: 20,
        isNew: true,
        isUpgraded: false,
        description:
          'PDF ingestion → chunking → embedding → vector store → retrieval → LLM answer. The #1 most common real-world AI application in 2025.',
        project:
          'Build a full RAG PDF Q&A assistant with source citations displayed per answer.',
        resources: [
          {
            type: 'YouTube',
            label: 'Build a RAG System with LangChain – freeCodeCamp',
            url: 'https://www.youtube.com/watch?v=aywZrzNaKjs',
          },
          {
            type: 'YouTube',
            label: 'RAG from Scratch – Pinecone',
            url: 'https://www.youtube.com/watch?v=pxw3-fu1FGA',
          },
          {
            type: 'Course',
            label: 'Hugging Face – LLM Course (RAG Section)',
            url: 'https://huggingface.co/learn/llm-course/chapter5/1',
          },
          {
            type: 'Docs',
            label: 'LangChain RAG Docs (Official)',
            url: 'https://python.langchain.com/docs/use_cases/question_answering/',
          },
        ],
      },
      {
        id: 'shap',
        title: 'SHAP & Explainable ML',
        tag: 'Upgraded 2025',
        level: 'Intermediate',
        hours: 10,
        isNew: false,
        isUpgraded: true,
        description:
          'SHAP values, LIME, feature importance, model transparency. Enterprise ML teams now require explainability on every deployed model.',
        project:
          'Add SHAP explanations to your churn model; summarize top features for non-technical stakeholders.',
        resources: [
          {
            type: 'YouTube',
            label: 'Model Explainability with SHAP (Krish Naik)',
            url: 'https://www.youtube.com/watch?v=JR4U6gG1-gY',
          },
          {
            type: 'YouTube',
            label: 'SHAP Values Explained – StatQuest',
            url: 'https://www.youtube.com/watch?v=F5PfbC5ld-Q',
          },
          {
            type: 'Course',
            label: 'Kaggle – Machine Learning Explainability (Free)',
            url: 'https://www.kaggle.com/learn/machine-learning-explainability',
          },
          {
            type: 'Docs',
            label: 'SHAP Official Documentation',
            url: 'https://shap.readthedocs.io/en/latest/index.html',
          },
        ],
      },
      {
        id: 'gradio',
        title: 'Gradio – Interactive ML Demos',
        tag: 'Upgraded 2025',
        level: 'Beginner',
        hours: 8,
        isNew: false,
        isUpgraded: true,
        description:
          'Build demo UIs for ML models in minutes. Gradio is now the industry-standard tool for sharing ML experiments with anyone.',
        project:
          'Wrap your churn model or RAG system in a Gradio UI for shareable interactive demos.',
        resources: [
          {
            type: 'YouTube',
            label: 'Build ML Apps with Gradio (Hugging Face)',
            url: 'https://www.youtube.com/watch?v=3p60LGkKF1A',
          },
          {
            type: 'YouTube',
            label: 'Gradio Crash Course – freeCodeCamp',
            url: 'https://www.youtube.com/watch?v=1U07vP1wugY',
          },
          {
            type: 'Course',
            label: 'Hugging Face Gradio Tutorials (Official)',
            url: 'https://gradio.app/guides',
          },
          {
            type: 'Docs',
            label: 'Gradio Official Documentation',
            url: 'https://www.gradio.app/docs',
          },
        ],
      },
      {
        id: 'kaggle',
        title: 'Kaggle Competitions',
        tag: 'Practice Platform',
        level: 'Intermediate',
        hours: 30,
        isNew: false,
        isUpgraded: false,
        description:
          'Real competition data, leaderboards, community notebooks. Competitions teach more per hour than any tutorial. Aim for top 25%.',
        project:
          'Enter the Titanic or House Prices competition; aim for top 25% with a clean, well-documented notebook.',
        resources: [
          {
            type: 'YouTube',
            label: 'Kaggle for Beginners – freeCodeCamp',
            url: 'https://www.youtube.com/watch?v=HqJkQF9Hv1c',
          },
          {
            type: 'YouTube',
            label: 'How to Approach Kaggle Competitions (GM Talk)',
            url: 'https://www.youtube.com/watch?v=3YShLXLzJ2E',
          },
          {
            type: 'Course',
            label: 'Kaggle – Intro to ML + Intermediate ML (Free)',
            url: 'https://www.kaggle.com/learn/intro-to-machine-learning',
          },
          {
            type: 'Docs',
            label: 'Kaggle Learn – All Free Courses',
            url: 'https://www.kaggle.com/learn',
          },
        ],
      },
    ],
  },

  // ── Phase 3 ────────────────────────────────────────────────────────────
  {
    id: 'phase-3',
    num: '03',
    title: 'Deep Learning',
    months: 'Months 8 – 11',
    color: '#F59E0B',
    colorDim: 'rgba(245,158,11,0.12)',
    description:
      'PyTorch · Transformers · nanoGPT · LoRA / QLoRA Fine-Tuning · Multimodal AI (CLIP · LLaVA)',
    phaseGoal:
      'Have a fine-tuned 7B model on HuggingFace Hub, a nanoGPT implementation, and a multimodal image-search demo. This is what top-lab hiring managers remember.',
    topics: [
      {
        id: 'pytorch',
        title: 'PyTorch & Deep Learning Fundamentals',
        tag: 'Core Framework',
        level: 'Intermediate',
        hours: 50,
        isNew: false,
        isUpgraded: false,
        description:
          'Autograd, nn.Module, DataLoader, custom training loops, CNNs, backpropagation from scratch. The primary framework at OpenAI, Meta, and DeepMind.',
        project:
          'Train a CNN on CIFAR-10 with a custom training loop, logging loss and accuracy every epoch.',
        resources: [
          {
            type: 'YouTube',
            label: 'Learn PyTorch for Deep Learning – 26-Hour Course (freeCodeCamp)',
            url: 'https://www.freecodecamp.org/news/learn-pytorch-for-deep-learning/',
          },
          {
            type: 'YouTube',
            label: 'PyTorch 101 Crash Course for Beginners (Daniel Bourke, 2026)',
            url: 'https://www.youtube.com/watch?v=LyJtbe__2i0',
          },
          {
            type: 'Course',
            label: 'LearnPyTorch.io – Free Online Book + Code',
            url: 'https://www.learnpytorch.io/',
          },
          {
            type: 'Docs',
            label: 'PyTorch Official Tutorials',
            url: 'https://pytorch.org/tutorials/',
          },
        ],
      },
      {
        id: 'nanogpt',
        title: 'Transformers & nanoGPT Implementation',
        tag: 'Upgraded — Month 8',
        level: 'Advanced',
        hours: 30,
        isNew: false,
        isUpgraded: true,
        description:
          "Build a transformer from scratch. Karpathy's nanoGPT tutorial is the single best 2-week investment in this entire roadmap — nothing explains LLMs better.",
        project:
          'Implement a tiny GPT on a small text corpus; generate sample text and analyse attention patterns.',
        resources: [
          {
            type: 'YouTube',
            label: "Let's Build GPT from Scratch (nanoGPT) – Andrej Karpathy",
            url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY',
          },
          {
            type: 'YouTube',
            label: 'Transformers from Scratch – Theoretical Walkthrough',
            url: 'https://www.youtube.com/watch?v=Gj0iyo265bc',
          },
          {
            type: 'Course',
            label: 'Hugging Face – Transformers Course (Free)',
            url: 'https://huggingface.co/learn/nlp-course/chapter1/1',
          },
          {
            type: 'Docs',
            label: 'Hugging Face Transformers Docs (Official)',
            url: 'https://huggingface.co/docs/transformers',
          },
        ],
      },
      {
        id: 'lora',
        title: 'LoRA / QLoRA & LLM Fine-Tuning',
        tag: 'NEW — 2025',
        level: 'Advanced',
        hours: 25,
        isNew: true,
        isUpgraded: false,
        description:
          'Parameter-efficient fine-tuning with LoRA and QLoRA — fine-tune 7B models on a single consumer GPU. Use HuggingFace PEFT + TRL libraries.',
        project:
          'Fine-tune a 7B model on your own domain dataset using QLoRA and publish to Hugging Face Hub.',
        resources: [
          {
            type: 'YouTube',
            label: 'Fine-Tune LLaMA / Mistral with QLoRA (Community Tutorial)',
            url: 'https://www.youtube.com/watch?v=_1c2HqHjZ9I',
          },
          {
            type: 'YouTube',
            label: 'Parameter-Efficient Fine-Tuning with LoRA (HF Tutorial)',
            url: 'https://www.youtube.com/watch?v=dLrSdzdKQWk',
          },
          {
            type: 'Course',
            label: 'Hugging Face – LLM Course: Fine-Tuning & PEFT Modules',
            url: 'https://huggingface.co/learn/llm-course/chapter3/1',
          },
          {
            type: 'Docs',
            label: 'HuggingFace PEFT Docs + TRL Docs',
            url: 'https://huggingface.co/docs/peft/index',
          },
        ],
      },
      {
        id: 'multimodal',
        title: 'Multimodal AI – CLIP, LLaVA, BLIP-2',
        tag: 'NEW — 2025',
        level: 'Advanced',
        hours: 20,
        isNew: true,
        isUpgraded: false,
        description:
          'Text + vision unified models. CLIP contrastive training, cross-attention fusion, visual Q&A. Now a baseline expectation at every top lab.',
        project:
          'Build an image search app where text queries retrieve the nearest matching images using CLIP embeddings.',
        resources: [
          {
            type: 'YouTube',
            label: 'Multimodal AI with CLIP & BLIP (HF / freeCodeCamp)',
            url: 'https://www.youtube.com/watch?v=H1rZJN9rUJE',
          },
          {
            type: 'YouTube',
            label: 'CLIP Paper Explained – Yannic Kilcher',
            url: 'https://www.youtube.com/watch?v=H5E2c-rLZ0M',
          },
          {
            type: 'Course',
            label: 'Hugging Face – Diffusion & Vision Courses (Multimodal Sections)',
            url: 'https://huggingface.co/learn',
          },
          {
            type: 'Docs',
            label: 'HuggingFace Vision Models Docs',
            url: 'https://huggingface.co/docs/transformers/main/en/tasks/image_classification',
          },
        ],
      },
    ],
  },

  // ── Phase 4 ────────────────────────────────────────────────────────────
  {
    id: 'phase-4',
    num: '04',
    title: 'Specialization & Career Launch',
    months: 'Months 12 – 18',
    color: '#EC4899',
    colorDim: 'rgba(236,72,153,0.12)',
    description:
      'DSA · LeetCode · GitHub Portfolio · Kaggle Medals · Agents · GNNs · Edge AI · MLOps · Interviews',
    phaseGoal:
      '150+ LeetCode problems solved, a polished GitHub Pages portfolio, and active Kaggle competition submissions. Apply broadly from month 16 — every interview is practice.',
    topics: [
      {
        id: 'dsa',
        title: 'Data Structures & Algorithms (DSA)',
        tag: 'Interview Prep',
        level: 'Intermediate',
        hours: 60,
        isNew: false,
        isUpgraded: false,
        description:
          'Arrays, hash maps, trees, graphs, DP — 150+ LeetCode problems. Top companies run 2–3 DSA rounds. LeetCode Medium is the floor; Hard appears regularly.',
        project:
          "Maintain a 'DSA Journal' GitHub repo with daily LeetCode solutions and documented patterns.",
        resources: [
          {
            type: 'YouTube',
            label: 'Data Structures and Algorithms in Python – freeCodeCamp',
            url: 'https://www.youtube.com/watch?v=pkYVOmU3MgA',
          },
          {
            type: 'YouTube',
            label: 'NeetCode Roadmap & Playlists (Best DSA Channel)',
            url: 'https://www.youtube.com/c/NeetCode/playlists',
          },
          {
            type: 'Course',
            label: 'MIT OCW – Introduction to Algorithms 6.006 (Free)',
            url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/',
          },
          {
            type: 'Docs',
            label: 'LeetCode Explore – Interactive Learning Paths',
            url: 'https://leetcode.com/explore/',
          },
        ],
      },
      {
        id: 'portfolio',
        title: 'GitHub Portfolio',
        tag: 'Career Essential',
        level: 'Beginner',
        hours: 15,
        isNew: false,
        isUpgraded: false,
        description:
          'GitHub Pages site, project READMEs, demo videos, clean commit history. Companies look at your GitHub before your GPA — build it from day one.',
        project:
          'Create a portfolio repo + GitHub Pages site listing all AI projects with READMEs, demos, and screenshots.',
        resources: [
          {
            type: 'YouTube',
            label: 'Build a Strong GitHub Portfolio (TiffInTech Style)',
            url: 'https://www.youtube.com/watch?v=GEPwJ0N2QVo',
          },
          {
            type: 'YouTube',
            label: 'GitHub Pages Tutorial – freeCodeCamp',
            url: 'https://www.youtube.com/watch?v=38aZWtGrwWc',
          },
          {
            type: 'Course',
            label: 'GitHub Skills – Interactive Courses (Official, Free)',
            url: 'https://skills.github.com/',
          },
          {
            type: 'Docs',
            label: 'GitHub Official Documentation',
            url: 'https://docs.github.com/',
          },
        ],
      },
    ],
  },
];

// ── Emerging Fields ─────────────────────────────────────────────────────────
export const EMERGING_FIELDS = [
  { name: 'LLMs + Frontier Model Engineering', relevance: 100, color: '#10B981', description: 'MoE, speculative decoding, KV-cache, vLLM — highest-paying AI specialization right now.' },
  { name: 'Generative AI + Diffusion Models',  relevance: 95,  color: '#6366F1', description: 'Stable Diffusion, DALL-E, flow matching. High demand at Adobe, Runway, Stability AI.' },
  { name: 'AI Agents + Agentic Systems',        relevance: 95,  color: '#F59E0B', description: 'LangGraph, AutoGen, CrewAI — the dominant AI product pattern for 2025–2030.' },
  { name: 'Multimodal AI',                       relevance: 90,  color: '#EC4899', description: 'GPT-4V, Gemini, LLaVA. Text + vision + audio as unified models.' },
  { name: 'Reinforcement Learning + RLHF',      relevance: 80,  color: '#8B5CF6', description: 'PPO, DDPG. RLHF critical for LLM alignment at OpenAI, DeepMind.' },
  { name: 'Graph Neural Networks',               relevance: 78,  color: '#06B6D4', description: 'Drug discovery, fraud detection, social networks. PyTorch Geometric, DGL.' },
  { name: 'Edge AI + TinyML',                    relevance: 72,  color: '#84CC16', description: 'Quantization, ONNX, TensorRT. High demand at Apple, NVIDIA, Tesla, ARM.' },
  { name: 'AI for Robotics',                     relevance: 65,  color: '#F97316', description: 'Imitation learning, sim-to-real. Tesla, Boston Dynamics, Figure AI.' },
];

// ── Quick Reference Platforms ───────────────────────────────────────────────
export const QUICK_PLATFORMS = [
  { name: 'Kaggle Learn',                url: 'https://www.kaggle.com/learn',                       desc: 'Free micro-courses: Python, Pandas, ML, DL, CV, NLP, SQL, Explainability' },
  { name: 'Hugging Face Courses',        url: 'https://huggingface.co/learn',                       desc: 'NLP, LLM, Diffusion, Transformers — the best free advanced AI education' },
  { name: 'fast.ai',                     url: 'https://course.fast.ai',                             desc: 'Top-down intuitive deep learning — strongly recommended alongside PyTorch' },
  { name: 'DeepLearning.AI Short Courses', url: 'https://learn.deeplearning.ai',                   desc: 'Free: prompt engineering, RAG, agents, fine-tuning, LangChain' },
  { name: 'MIT OpenCourseWare',          url: 'https://ocw.mit.edu',                                desc: '6.0001 Python, 6.006 Algorithms, 6.S191 Deep Learning — all free' },
  { name: 'Papers With Code',            url: 'https://paperswithcode.com',                        desc: 'Every ML paper with code. Find implementations for papers you read.' },
  { name: 'Andrej Karpathy – YouTube',   url: 'https://www.youtube.com/@AndrejKarpathy',           desc: 'nanoGPT, micrograd, neural networks from scratch — essential viewing' },
  { name: '3Blue1Brown – YouTube',       url: 'https://www.youtube.com/@3blue1brown',              desc: 'Best visual intuition for neural networks, calculus, and linear algebra' },
  { name: 'StatQuest – YouTube',         url: 'https://www.youtube.com/@statquest',                desc: 'Statistics, ML algorithms — exceptionally clear explanations' },
  { name: 'NeetCode – YouTube',          url: 'https://www.youtube.com/@NeetCode',                 desc: 'Best DSA/LeetCode prep channel — clear patterns and explanations' },
  { name: 'arXiv cs.LG / cs.CL',        url: 'https://arxiv.org/list/cs.LG/recent',              desc: 'Read 1–2 papers weekly to stay current. Filter by date, skim by abstract.' },
];
