// Career and portfolio content aligned with the latest supplied résumé. Visual template attribution: see ATTRIBUTION.md.

export type Palette = { from:string; via:string; to:string; accent:string };
export type Metric = {value:string;label:string};
export type Project = {id:string;title:string;year:string;genre:string;logline:string;stack:string[];build:string[];features:string[];metrics:Metric[];github?:string;live?:string;limits?:string;palette:Palette;motif:'shield'|'flow'|'tenants'};
export type Achievement = {id:string;title:string;org:string;detail:string;laurel:string;link?:string};
export type Certification = {issuer:string;name:string;link:string};
export type Skill = {name:string;mono:string;note?:string};
export type SkillCategory = {id:string;title:string;subtitle:string;skills:Skill[]};
export type Episode = {code:string;title:string;description:string;tags:string[];runtime:string;palette:Palette};
export type Season = {number:number;title:string;period:string;synopsis:string;episodes:Episode[]};
export type TopPick = {label:string;title:string;detail:string;palette:Palette};
export type IntroSlide = {kicker:string;title:string;lines:string[];chips?:string[]};
export type ProfileId = 'kathy'|'recruiter'|'developer'|'creative';
export type SectionId = 'about'|'journey'|'originals'|'picks'|'skills'|'moments'|'story'|'activities';

const crimson: Palette = {"from": "#2b0e1b", "via": "#6b223f", "to": "#13090f", "accent": "#e5c69b"};
const amber: Palette = {"from": "#291a12", "via": "#83543b", "to": "#160e0b", "accent": "#e5c69b"};
const ocean: Palette = {"from": "#21141c", "via": "#5c3d60", "to": "#140d11", "accent": "#e5c69b"};
const violet: Palette = {"from": "#271522", "via": "#49334f", "to": "#140d13", "accent": "#e5c69b"};
const jade: Palette = {"from": "#24170f", "via": "#66503b", "to": "#160e0b", "accent": "#e5c69b"};
export const profile = {
  "fullName": "Karthika (Kathy) Kumar",
  "displayName": "Kathy",
  "firstName": "KATHY",
  "seriesTag": "DATA · MODELS · IMPACT",
  "originalLabel": "KATHY",
  "role": "Data Scientist · Data & Cloud Engineer",
  "tagline": [
    "Data Science",
    "ML Engineering",
    "Analytics Engineering"
  ],
  "intro": "Data, AI and software engineer with three years of professional experience at IBM watsonx.data, spanning vector database integration, backend APIs, pipelines processing up to 1 TB a day, query optimisation and platform security. Master of Data Science at Monash University, February 2025 – December 2026.",
  "location": "Melbourne, Australia",
  "workRights": "Full working rights in Australia · Temporary Graduate Visa (Subclass 485)",
  "availability": "Available now for full-time work",
  "relocation": "Open to relocate",
  "email": "karthikapillai@gmail.com",
  "links": {
    "linkedin": "https://www.linkedin.com/in/karthikapillaikumar/",
    "github": "https://github.com/KarthikaPKumar"
  },
  "resumePdf": "/assets/Kathy.pdf",
  "portrait": {
    "src": "/revamp/assets/kathy-professional.png",
    "srcSet": "",
    "alt": "Portrait of Kathy"
  },
  "interests": [
    "Predictive modelling",
    "Reliable data systems",
    "Applied AI"
  ]
};
export const education = [
  {
    "school": "Monash University",
    "place": "Melbourne",
    "degree": "Master of Data Science",
    "period": "February 2025 – December 2026",
    "score": ""
  },
  {
    "school": "TKM College of Engineering",
    "place": "Kollam, India",
    "degree": "B.Tech (Honours), Computer Science",
    "period": "July 2018 – May 2022",
    "score": "CGPA 8.61/10"
  }
];
export const experience = [
  {
    "company": "IBM India Software Labs",
    "role": "Software Developer, watsonx.data",
    "place": "Kochi, India",
    "period": "January 2022 – January 2025",
    "points": [
      "Built the Milvus connector backend in Python and C++ across SaaS, Cloud Pak for Data and standalone deployments, with mutual TLS, token-refreshing gRPC authentication, pooled connections and metadata discovery.",
      "Owned the PySpark backfill and shadow-read verification for a banking customer’s migration of about 52M vectors. Production cutover followed a seven-day soak at 99.98% recall, with recall and latency recorded in Prometheus.",
      "Cut query time on a 1.2B-row, approximately 850 GB transactions table from 24.5 s to 15.8 s using Z-Ordering and then Liquid Clustering; files scanned fell from about 14,200 to 1,100.",
      "Built Databricks, PySpark and SQL pipelines processing roughly 100 GB–1 TB daily, with Delta Live Tables, incremental Delta Lake MERGE loads and Unity Catalog governance.",
      "Tuned Presto execution and caching for a 20% query improvement through open-source contributions, then shifted effort to Spark where it better suited the workloads.",
      "As security focal, reduced release-blocking exposure from about 30% to under 15%, closing 42 findings across three releases. Implemented audit logging and replaced vulnerable log tooling with OpenTelemetry, Loki and Grafana.",
      "Built Go REST APIs for Bring Your Own JDBC Driver and test-connection validation across eight connectors. Python QA automation cut manual effort by 50% and QA time by 25%."
    ]
  },
  {
    "company": "Junior Engineers",
    "role": "Coding Instructor and Trainer",
    "place": "Melbourne",
    "period": "August 2025 – Present",
    "points": [
      "Teach three weekly classes of about ten students aged 6–12 across Victoria in Minecraft cyber security, Python, AI and STEM; deliver onsite AI classes for older students in Melbourne and Sydney.",
      "Partner with Deadly Coders, supporting coding programmes for Aboriginal and Torres Strait Islander learners.",
      "Set up new school classes and trained and onboarded four instructors in teaching methods, the class portal and attendance.",
      "Contribute to content planning for upcoming classes."
    ]
  },
  {
    "company": "Monash University, Faculty of IT",
    "role": "Student Ambassador",
    "place": "Melbourne",
    "period": "March 2026 – Present",
    "points": [
      "Represent Monash at school visits, expos, exhibitions and STEM workshops including Her Tech Path.",
      "Allocated student volunteers to orientation placements and coordinated the volunteer team as key ambassador.",
      "Guided students and answered their questions at the Graduate Expo.",
      "Support workshops, event coordination and office administration."
    ]
  }
];
export const projects: Project[] = [
  {
    "id": "vkinder",
    "title": "VKinder",
    "year": "2026",
    "genre": "CORE TEAM PROJECT",
    "logline": "A live child-health data platform for parents and practitioners, comparing child development, services and environmental conditions across 361 Greater Melbourne areas. Monash Industry Experience capstone and finalist in the Monash DS&AI Showcase 2026.",
    "stack": [
      "Python",
      "SQL",
      "scikit-learn",
      "FastAPI",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Mapbox",
      "AWS Lambda"
    ],
    "build": [
      "361 areas · 31 public sources · 4.1-point model error vs 6.4 without a model · calibration slope 0.99"
    ],
    "features": [
      "31 public sources",
      "Expected vulnerability",
      "E2SFCA access",
      "Where to live",
      "In 2031"
    ],
    "metrics": [],
    "live": "https://www.vkinder.me/",
    "limits": "Area-level analysis does not assess individual children or establish causation. Suppressed values remain suppressed and are never imputed. The 2031 tool models service pressure from official population projections.",
    "palette": {
      "from": "#173e3a",
      "via": "#36695b",
      "to": "#112521",
      "accent": "#e5c69b"
    },
    "motif": "flow",
    "github": ""
  },
  {
    "id": "voltwise",
    "title": "Voltwise",
    "year": "2026",
    "genre": "PREDICTIVE DATA SCIENCE",
    "logline": "Predict battery capacity ten discharge cycles ahead with a random forest, using real NASA laboratory measurements and leave-one-battery-out evaluation.",
    "stack": [
      "Python",
      "scikit-learn",
      "dbt",
      "DuckDB",
      "FastAPI",
      "Ollama"
    ],
    "build": [
      "0.024 Ah mean absolute error across 560 held-out forecast windows: 44.7% lower than a persistence baseline. Thirteen dbt data checks support the analytics pipeline."
    ],
    "features": [
      "NASA measurements",
      "Model evaluation",
      "dbt + DuckDB",
      "Verified metrics",
      "Dashboard / local AI"
    ],
    "metrics": [
      {
        "value": "0.024 Ah",
        "label": "mean absolute error"
      },
      {
        "value": "560",
        "label": "held-out forecast windows"
      },
      {
        "value": "44.7%",
        "label": "lower error than persistence"
      },
      {
        "value": "4",
        "label": "NASA laboratory cells"
      },
      {
        "value": "13",
        "label": "dbt checks"
      }
    ],
    "github": "https://github.com/KarthikaPKumar/voltwise",
    "live": "https://karthikapkumar.github.io/voltwise/",
    "limits": "Only four laboratory cells. These results do not establish vehicle-fleet performance, remaining lifetime or battery safety. The public site provides forecasts and metrics; the generative AI assistant runs locally through Ollama.",
    "palette": {
      "from": "#2b0e1b",
      "via": "#6b223f",
      "to": "#13090f",
      "accent": "#e5c69b"
    },
    "motif": "flow"
  },
  {
    "id": "nexora",
    "title": "Nexora",
    "year": "2026",
    "genre": "FRAUD & DATA ENGINEERING",
    "logline": "A payments fraud platform that streams events into an Iceberg lakehouse, transforms them through 28 tested dbt models and explains LightGBM alerts in a Streamlit console.",
    "stack": [
      "Python",
      "SQL",
      "Kafka",
      "Apache Iceberg",
      "dbt",
      "Airflow",
      "LightGBM"
    ],
    "build": [
      "Recall 0.97 vs 0.45 for SQL rules at equal alert volume · synthetic data"
    ],
    "features": [
      "Kafka + Iceberg",
      "28 dbt models",
      "Time-based validation",
      "LightGBM + SHAP"
    ],
    "metrics": [],
    "github": "",
    "live": "",
    "limits": "Synthetic-data recall is not evidence of performance on real payments. Time-based validation and equal alert volume make the model–rules comparison meaningful within this evaluation.",
    "palette": {
      "from": "#291a12",
      "via": "#83543b",
      "to": "#160e0b",
      "accent": "#e5c69b"
    },
    "motif": "tenants"
  },
  {
    "id": "senseway",
    "title": "Sensory-Aware Route Planner",
    "year": "Portfolio project",
    "genre": "SPATIAL DATA & APPLICATIONS",
    "logline": "Explore central Melbourne walking routes built from OpenStreetMap streets, council address data and timestamped pedestrian-counter snapshots.",
    "stack": [
      "Python",
      "JavaScript",
      "OpenStreetMap",
      "GitHub Actions",
      "AWS architecture"
    ],
    "build": [
      "A validated JSON pipeline supplies real addresses, mapped street connections and pedestrian-counter observations. Freshness and coverage checks determine whether activity comparisons are available."
    ],
    "features": [
      "Public open data",
      "Validation",
      "JSON snapshot",
      "Walking graph",
      "Route explorer"
    ],
    "metrics": [
      {
        "value": "Demo",
        "label": "Live explorer · Real open-data snapshots"
      }
    ],
    "github": "https://github.com/KarthikaPKumar/Serverless-Sensory-Aware-Router",
    "live": "https://karthikapkumar.github.io/Serverless-Sensory-Aware-Router/",
    "limits": "Crowd observations may be stale or incomplete. Noise and light measurements remain unknown. The free demo is static; preserved AWS backend code needs further work before cloud deployment.",
    "palette": {
      "from": "#21141c",
      "via": "#5c3d60",
      "to": "#140d11",
      "accent": "#e5c69b"
    },
    "motif": "flow"
  },
  {
    "id": "wildlife",
    "title": "CloudEcho",
    "year": "2025",
    "genre": "ML ENGINEERING",
    "logline": "A wildlife-detection API serving YOLOv8 through detection and annotated-image endpoints, deployed on Kubernetes on Azure with Terraform-defined infrastructure.",
    "stack": [
      "YOLOv8",
      "FastAPI",
      "ONNX Runtime",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Azure"
    ],
    "build": [
      "7.58 req/s at one pod → 32.32 at four → 32.68 at eight"
    ],
    "features": [
      "Image input",
      "Inference API",
      "YOLOv8 model",
      "Detection response"
    ],
    "metrics": [],
    "github": "https://github.com/KarthikaPKumar/Cloud-Native-Wildlife-Detection-Model",
    "live": "",
    "limits": "Throughput plateaued beyond four pods in the measured workload. These serving results do not establish wildlife-detection accuracy or current endpoint availability.",
    "palette": {
      "from": "#271522",
      "via": "#49334f",
      "to": "#140d13",
      "accent": "#e5c69b"
    },
    "motif": "shield"
  },
  {
    "id": "speech",
    "title": "Speech Analysis Tool",
    "year": "Portfolio project",
    "genre": "SPEECH & LANGUAGE",
    "logline": "A speech and language analysis concept focused on helping employees understand and improve communication through sentiment, speech-rate and language feedback.",
    "stack": [
      "Python",
      "Speech analysis",
      "NLP"
    ],
    "build": [
      "A source-available project exploring how speech analysis and NLP could support understandable communication feedback."
    ],
    "features": [
      "Speech",
      "Language analysis",
      "Feedback concepts"
    ],
    "metrics": [
      {
        "value": "Code",
        "label": "Source code available · Concept project"
      }
    ],
    "github": "https://github.com/KarthikaPKumar/SAP",
    "live": "",
    "limits": "No public running demo or validated employee-outcome claims are presented. This is a concept project, not an employment assessment system.",
    "palette": {
      "from": "#24170f",
      "via": "#66503b",
      "to": "#160e0b",
      "accent": "#e5c69b"
    },
    "motif": "tenants"
  }
];
export const achievements: Achievement[] = [
  {
    "id": "ibm",
    "title": "Data Platform Engineering",
    "org": "IBM watsonx.data",
    "detail": "Professional experience with Presto, security, performance monitoring and developer tooling.",
    "laurel": "Industry experience"
  },
  {
    "id": "monash",
    "title": "Monash DS&AI Showcase Finalist",
    "org": "Monash University",
    "detail": "VKinder · Monash Industry Experience capstone · 2026",
    "laurel": "Showcase finalist"
  },
  {
    "id": "forecast",
    "title": "Battery Forecasting",
    "org": "Voltwise",
    "detail": "0.024 Ah MAE across 560 held-out windows from four NASA lab cells. Not a fleet-performance claim.",
    "laurel": "Measured project result",
    "link": "https://karthikapkumar.github.io/voltwise/"
  },
  {
    "id": "teaching",
    "title": "Making Ideas Clear",
    "org": "Junior Engineers",
    "detail": "Teach coding, data science and AI concepts and support instructor onboarding.",
    "laurel": "Teaching"
  },
  {
    "id": "quality",
    "title": "Tested Analytics",
    "org": "Voltwise",
    "detail": "Thirteen dbt checks underpin shared metrics and a reproducible DuckDB analytics pipeline.",
    "laurel": "Data quality"
  }
];
export const certifications: Certification[] = [
  {
    "issuer": "IBM",
    "name": "Developer Jumpstart Practitioner (2024)",
    "link": "/assets/Kathy.pdf"
  },
  {
    "issuer": "IBM",
    "name": "Cybersecurity, Data Privacy and AI (2024)",
    "link": "/assets/Kathy.pdf"
  },
  {
    "issuer": "IBM",
    "name": "Security and Privacy by Design (2023)",
    "link": "/assets/Kathy.pdf"
  },
  {
    "issuer": "IBM",
    "name": "Enterprise Design Thinking: Essentials for AI (2022)",
    "link": "/assets/Kathy.pdf"
  },
  {
    "issuer": "IBM",
    "name": "Agile Explorer (2022)",
    "link": "/assets/Kathy.pdf"
  }
];
export const skillCategories: SkillCategory[] = [
  {
    "id": "languages",
    "title": "Languages",
    "subtitle": "Code behind the work",
    "skills": [
      {
        "name": "Python",
        "mono": "Py"
      },
      {
        "name": "SQL",
        "mono": "SQL"
      },
      {
        "name": "Java",
        "mono": "Jv"
      },
      {
        "name": "JavaScript",
        "mono": "Js"
      },
      {
        "name": "Go",
        "mono": "Go"
      },
      {
        "name": "C++",
        "mono": "C++"
      }
    ]
  },
  {
    "id": "science",
    "title": "Data Science",
    "subtitle": "Questions, models and evidence",
    "skills": [
      {
        "name": "NumPy",
        "mono": "np"
      },
      {
        "name": "SciPy",
        "mono": "sp"
      },
      {
        "name": "scikit-learn",
        "mono": "sk"
      },
      {
        "name": "Model validation",
        "mono": "CV"
      },
      {
        "name": "LightGBM",
        "mono": "Lig"
      },
      {
        "name": "Geospatial analysis",
        "mono": "Geo"
      }
    ]
  },
  {
    "id": "ml",
    "title": "ML Engineering",
    "subtitle": "From model to application",
    "skills": [
      {
        "name": "FastAPI",
        "mono": "API"
      },
      {
        "name": "YOLOv8",
        "mono": "YOLO"
      },
      {
        "name": "Ollama",
        "mono": "AI"
      }
    ]
  },
  {
    "id": "analytics",
    "title": "Analytics Engineering",
    "subtitle": "Reliable data and shared definitions",
    "skills": [
      {
        "name": "dbt",
        "mono": "dbt"
      },
      {
        "name": "DuckDB",
        "mono": "DB"
      },
      {
        "name": "Semantic metrics",
        "mono": "∑"
      },
      {
        "name": "Data quality",
        "mono": "✓"
      }
    ]
  },
  {
    "id": "infra",
    "title": "Infra & Tools",
    "subtitle": "Project architecture and delivery",
    "skills": [
      {
        "name": "Docker",
        "mono": "Dk"
      },
      {
        "name": "Kubernetes",
        "mono": "K8s"
      },
      {
        "name": "GitHub Actions",
        "mono": "CI"
      },
      {
        "name": "Git / GitHub",
        "mono": "Gt"
      },
      {
        "name": "AWS",
        "mono": "AWS"
      },
      {
        "name": "Azure",
        "mono": "Azu"
      },
      {
        "name": "Terraform",
        "mono": "Ter"
      },
      {
        "name": "Prometheus",
        "mono": "Pro"
      },
      {
        "name": "OpenTelemetry",
        "mono": "Ope"
      }
    ]
  },
  {
    "id": "platforms",
    "title": "Data Platforms",
    "subtitle": "Professional engineering foundation",
    "skills": [
      {
        "name": "Presto",
        "mono": "P"
      },
      {
        "name": "PySpark",
        "mono": "PyS"
      },
      {
        "name": "Databricks",
        "mono": "Dat"
      },
      {
        "name": "Delta Lake",
        "mono": "Del"
      },
      {
        "name": "Unity Catalog",
        "mono": "Uni"
      },
      {
        "name": "Kafka",
        "mono": "Kaf"
      },
      {
        "name": "Apache Iceberg",
        "mono": "Apa"
      },
      {
        "name": "Airflow",
        "mono": "Air"
      },
      {
        "name": "Milvus",
        "mono": "Mil"
      }
    ]
  }
];
export const skillEvidence: Record<string, string[]> = {
  "Go": ["IBM watsonx.data"],
  "C++": ["IBM watsonx.data"],
  "Python": [
    "Voltwise (portfolio project)"
  ],
  "SQL": [
    "Voltwise (portfolio project)"
  ],
  "Java": [
    "IBM watsonx.data"
  ],
  "JavaScript": [
    "Voltwise (portfolio project)"
  ],
  "NumPy": [
    "Voltwise (portfolio project)"
  ],
  "SciPy": [
    "Voltwise (portfolio project)"
  ],
  "scikit-learn": [
    "Voltwise (portfolio project)"
  ],
  "Model validation": [
    "Voltwise (portfolio project)"
  ],
  "FastAPI": [
    "Voltwise (portfolio project)"
  ],
  "Random Forest": [
    "Voltwise (portfolio project)"
  ],
  "YOLOv8": [
    "CloudEcho (Azure deployment and load testing)"
  ],
  "Ollama": [
    "Voltwise (portfolio project)"
  ],
  "dbt": [
    "Voltwise (portfolio project)"
  ],
  "DuckDB": [
    "Voltwise (portfolio project)"
  ],
  "Semantic metrics": [
    "Voltwise (portfolio project)"
  ],
  "Data quality": [
    "Voltwise (portfolio project)"
  ],
  "Docker": [
    "CloudEcho (Azure deployment and load testing)"
  ],
  "Kubernetes": [
    "CloudEcho (Azure deployment and load testing)"
  ],
  "GitHub Actions": [
    "Voltwise (portfolio project)"
  ],
  "Git / GitHub": [
    "Voltwise (portfolio project)"
  ],
  "Presto": [
    "IBM watsonx.data"
  ],
  "Audit logging": [
    "IBM watsonx.data"
  ],
  "Performance monitoring": [
    "IBM watsonx.data"
  ],
  "Python tooling": [
    "IBM watsonx.data"
  ],
  "Predictive modelling": [
    "Voltwise (portfolio project)"
  ],
  "Applied AI": [
    "Voltwise (portfolio project)"
  ],
  "Data systems": [
    "Voltwise (portfolio project)"
  ]
};
export const seasons: Season[] = [
  {
    "number": 1,
    "title": "The Foundation",
    "period": "Computer science",
    "synopsis": "An engineering foundation at TKM College of Engineering.",
    "episodes": [
      {
        "code": "S01 E01",
        "title": "The Engineer",
        "description": "B.Tech (Honours) in Computer Science Engineering.",
        "tags": [
          "Computer science",
          "Engineering"
        ],
        "runtime": "Computer science",
        "palette": {
          "from": "#2b0e1b",
          "via": "#6b223f",
          "to": "#13090f",
          "accent": "#e5c69b"
        }
      }
    ]
  },
  {
    "number": 2,
    "title": "Building at IBM",
    "period": "2022 – 2025",
    "synopsis": "Production data platforms, security and developer tooling.",
    "episodes": [
      {
        "code": "S02 E01",
        "title": "The Platform",
        "description": "Worked on the Presto data platform within IBM watsonx.data.",
        "tags": [
          "Presto",
          "Data platforms"
        ],
        "runtime": "2022 – 2025",
        "palette": {
          "from": "#291a12",
          "via": "#83543b",
          "to": "#160e0b",
          "accent": "#e5c69b"
        }
      },
      {
        "code": "S02 E02",
        "title": "The Systems Thinker",
        "description": "Audit logging, security checks, caching and Python QA tools.",
        "tags": [
          "Security",
          "Python",
          "Performance"
        ],
        "runtime": "2022 – 2025",
        "palette": {
          "from": "#21141c",
          "via": "#5c3d60",
          "to": "#140d11",
          "accent": "#e5c69b"
        }
      }
    ]
  },
  {
    "number": 3,
    "title": "Following the Data",
    "period": "2025–2026",
    "synopsis": "A new chapter at Monash University in Melbourne.",
    "episodes": [
      {
        "code": "S03 E01",
        "title": "The Data Scientist",
        "description": "Master of Data Science at Monash University, February 2025 – December 2026.",
        "tags": [
          "Modelling",
          "Analysis"
        ],
        "runtime": "2025–2026",
        "palette": {
          "from": "#21141c",
          "via": "#5c3d60",
          "to": "#140d11",
          "accent": "#e5c69b"
        }
      },
      {
        "code": "S03 E02",
        "title": "The Educator",
        "description": "Coding Instructor at Junior Engineers, teaching Python and AI.",
        "tags": [
          "Teaching",
          "Python"
        ],
        "runtime": "2025–2026",
        "palette": {
          "from": "#271522",
          "via": "#49334f",
          "to": "#140d13",
          "accent": "#e5c69b"
        }
      }
    ]
  },
  {
    "number": 4,
    "title": "Building Useful Things",
    "period": "Portfolio projects",
    "synopsis": "Explore the models and systems behind the projects.",
    "episodes": [
      {
        "code": "S04 E01",
        "title": "Battery capacity forecasting",
        "description": "Voltwise: ten-cycle capacity forecasts evaluated on four held-out NASA laboratory cells.",
        "tags": [
          "Python",
          "dbt",
          "ML"
        ],
        "runtime": "Portfolio projects",
        "palette": {
          "from": "#271522",
          "via": "#49334f",
          "to": "#140d13",
          "accent": "#e5c69b"
        }
      },
      {
        "code": "S04 E02",
        "title": "Payments fraud detection",
        "description": "Nexora: payments fraud data platform with Kafka, Iceberg, 28 dbt models and LightGBM.",
        "tags": [
          "Diagnostics",
          "Data engineering"
        ],
        "runtime": "Portfolio projects",
        "palette": {
          "from": "#24170f",
          "via": "#66503b",
          "to": "#160e0b",
          "accent": "#e5c69b"
        }
      },
      {
        "code": "S04 E03",
        "title": "Melbourne walking routes",
        "description": "Sensory-aware walking routes using Melbourne open-data snapshots.",
        "tags": [
          "Open data",
          "Spatial data"
        ],
        "runtime": "Portfolio projects",
        "palette": {
          "from": "#2b0e1b",
          "via": "#6b223f",
          "to": "#13090f",
          "accent": "#e5c69b"
        }
      }
    ]
  },
  {
    "number": 5,
    "title": "What's Next",
    "period": "Current focus",
    "synopsis": "Looking for the next question worth solving.",
    "episodes": [
      {
        "code": "S05 E01",
        "title": "The Next Chapter",
        "description": "Opportunities across Data Science, ML Engineering and Analytics Engineering.",
        "tags": [
          "Data Science",
          "ML Engineering",
          "Analytics Engineering"
        ],
        "runtime": "Current focus",
        "palette": {
          "from": "#24170f",
          "via": "#66503b",
          "to": "#160e0b",
          "accent": "#e5c69b"
        }
      }
    ]
  }
];
export const topPicks: TopPick[] = [
  {
    "label": "Industry",
    "title": "IBM watsonx.data",
    "detail": "Presto and platform tooling",
    "palette": {
      "from": "#2b0e1b",
      "via": "#6b223f",
      "to": "#13090f",
      "accent": "#e5c69b"
    }
  },
  {
    "label": "Predictive models",
    "title": "Voltwise",
    "detail": "NASA lab data · held-out evaluation",
    "palette": {
      "from": "#291a12",
      "via": "#83543b",
      "to": "#160e0b",
      "accent": "#e5c69b"
    }
  },
  {
    "label": "Data quality",
    "title": "dbt + DuckDB",
    "detail": "13 data checks",
    "palette": {
      "from": "#21141c",
      "via": "#5c3d60",
      "to": "#140d11",
      "accent": "#e5c69b"
    }
  },
  {
    "label": "Education",
    "title": "Monash",
    "detail": "Master of Data Science",
    "palette": {
      "from": "#271522",
      "via": "#49334f",
      "to": "#140d13",
      "accent": "#e5c69b"
    }
  },
  {
    "label": "Diagnostics",
    "title": "Nexora",
    "detail": "Kafka · Iceberg · LightGBM",
    "palette": {
      "from": "#24170f",
      "via": "#66503b",
      "to": "#160e0b",
      "accent": "#e5c69b"
    }
  },
  {
    "label": "Open data",
    "title": "Melbourne Routes",
    "detail": "Street graphs and timestamped snapshots",
    "palette": {
      "from": "#2b0e1b",
      "via": "#6b223f",
      "to": "#13090f",
      "accent": "#e5c69b"
    }
  },
  {
    "label": "Model serving",
    "title": "FastAPI",
    "detail": "Portfolio API architecture",
    "palette": {
      "from": "#291a12",
      "via": "#83543b",
      "to": "#160e0b",
      "accent": "#e5c69b"
    }
  },
  {
    "label": "Local AI",
    "title": "Ollama",
    "detail": "Optional local agent in Voltwise",
    "palette": {
      "from": "#21141c",
      "via": "#5c3d60",
      "to": "#140d11",
      "accent": "#e5c69b"
    }
  },
  {
    "label": "Communication",
    "title": "Teaching",
    "detail": "Junior Engineers",
    "palette": {
      "from": "#271522",
      "via": "#49334f",
      "to": "#140d13",
      "accent": "#e5c69b"
    }
  },
  {
    "label": "Focus",
    "title": "Data · Models · Systems",
    "detail": "Three connected disciplines",
    "palette": {
      "from": "#24170f",
      "via": "#66503b",
      "to": "#160e0b",
      "accent": "#e5c69b"
    }
  }
];
export const introSlides: IntroSlide[] = [
  {
    "kicker": "The foundation",
    "title": "Engineering meets data",
    "lines": [
      "Kathy",
      "Data Science · ML Engineering · Analytics Engineering"
    ]
  },
  {
    "kicker": "Experience",
    "title": "Building at IBM",
    "lines": [
      "Software Developer · January 2022 – January 2025",
      "watsonx.data / Presto · security · performance · tooling"
    ]
  },
  {
    "kicker": "Education",
    "title": "Following the data",
    "lines": [
      "Master of Data Science · Monash University · February 2025 – December 2026",
      "Melbourne · 2025–2026"
    ]
  },
  {
    "kicker": "Projects",
    "title": "Models. Systems. Questions.",
    "lines": [
      "Voltwise · battery capacity forecasting",
      "Nexora · payments fraud data platform",
      "Sensory-aware routes · Melbourne open data"
    ]
  },
  {
    "kicker": "The toolkit",
    "title": "Let’s talk about a data role",
    "lines": [
      "Python · SQL · scikit-learn · dbt · DuckDB",
      "FastAPI · Ollama · GitHub Actions"
    ]
  },
  {
    "kicker": "Next steps",
    "title": "Let’s build something useful",
    "lines": [
      "Data Science · ML Engineering · Analytics Engineering",
      "karthikapillai@gmail.com"
    ]
  }
];
export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'kathy',
    name: 'Entire Portfolio',
    blurb: 'Explore the complete portfolio',
    color: '#673247',
    order: ['story', 'skills', 'originals', 'about', 'journey', 'activities'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience, results & skills',
    color: '#7a6142',
    order: ['story', 'skills', 'originals', 'activities'],
  },
  {
    id: 'developer',
    name: 'Technical Peer / Connect',
    blurb: 'Explore the code or start a conversation',
    color: '#3d5261',
    order: ['originals', 'skills', 'story', 'about', 'journey', 'activities'],
  },

];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  activities: { nav: 'Activities', card: 'Activities', meta: 'Teaching & student engagement', palette: amber },
  about: { nav: 'About', card: 'About', meta: 'Background • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'Journey', meta: `${seasons.length} Stages • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Milestones`, palette: amber },
  originals: { nav: 'Projects', card: 'Projects', meta: `${projects.length} Projects • 2026`, palette: crimson },
  picks: { nav: 'Key Strengths', card: 'Key Strengths', meta: '10 selected strengths', palette: jade },
  skills: { nav: 'Skills', card: 'Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Highlights', card: 'My Highlights', meta: `${achievements.length} Career & Project Highlights`, palette: crimson },
  story: { nav: 'Experience', card: 'Experience', meta: 'Experience and education', palette: violet },
};
