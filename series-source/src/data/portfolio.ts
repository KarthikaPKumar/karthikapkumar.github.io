// Kathy’s verified career and portfolio content. Visual template attribution: see ATTRIBUTION.md.

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
  "fullName": "Kathy",
  "displayName": "Kathy",
  "firstName": "KATHY",
  "seriesTag": "DATA · MODELS · IMPACT",
  "originalLabel": "KATHY",
  "role": "Data Scientist & Engineer",
  "tagline": [
    "Data Science",
    "ML Engineering",
    "Analytics Engineering"
  ],
  "intro": "Master of Data Science graduate, Monash University (completed 2026). Previously IBM watsonx.data (Presto). At IBM, I worked on audit logging, caching improvements and Python tools for quality assurance.",
  "location": "Melbourne, Australia",
  "workRights": "Temporary Graduate Visa (Subclass 485)",
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
    "period": "2025–2026",
    "score": "Completed 2026"
  },
  {
    "school": "TKM College of Engineering",
    "place": "India",
    "degree": "B.Tech (Honours), Computer Science Engineering",
    "period": "",
    "score": ""
  }
];
export const experience = [
  {
    "company": "IBM India Software Labs",
    "role": "Software Developer",
    "place": "India",
    "period": "August 2022 – January 2025",
    "points": [
      "Worked on the Presto data platform within watsonx.data across security, performance monitoring and developer tooling.",
      "Contributed audit logging, automated security checks and caching improvements.",
      "Built Python tools to streamline quality assurance."
    ]
  },
  {
    "company": "Junior Engineers",
    "role": "Coding Instructor",
    "place": "Melbourne",
    "period": "August 2025 – Present",
    "points": [
      "Teach Python, introductory data science and AI concepts.",
      "Help onboard instructors and explain complex concepts through practical lessons."
    ]
  }
];
export const projects: Project[] = [
{
  "id": "vkinder",
  "title": "VKinder",
  "year": "2026",
  "genre": "CORE TEAM PROJECT",
  "logline": "Help families and practitioners explore how place shapes childhood across Greater Melbourne. A team-built platform connects neighbourhood evidence, family-priority matching and an exploratory school-entry forecast.",
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
    "346 reporting areas \u00b7 8 family priorities \u00b7 6.43 percentage-point forecast MAE"
  ],
  "features": [
    "Neighbourhood evidence",
    "Family Fit",
    "Forecast evaluation"
  ],
  "metrics": [],
  "live": "https://www.vkinder.me/",
  "limits": "One test transition shares a Melbourne-wide shift. Ridge over-predicts by 3.48 percentage points; nominal 80% intervals cover only 69.9%. Historical origins reuse IRSD 2021, and 2027 interval coverage is not demonstrated. Findings are exploratory, not causal or diagnostic.",
  "palette": {
    "from": "#173e3a",
    "via": "#36695b",
    "to": "#112521",
    "accent": "#e5c69b"
  },
  "motif": "flow"
},
  {
    "id": "voltwise",
    "title": "Voltwise",
    "year": "Portfolio project",
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
    "year": "Portfolio project",
    "genre": "SYSTEMS & DIAGNOSTICS",
    "logline": "Nexora (DataMedic) is an interactive demonstration of data pipeline diagnosis and recovery. It makes investigation steps visible so visitors can understand how a failure might be approached.",
    "stack": [
      "JavaScript",
      "JSON"
    ],
    "build": [
      "A working public demonstration presents synthetic scenarios and recorded results. The focus is explaining the diagnostic workflow and making system behaviour easier to understand."
    ],
    "features": [
      "Scenario",
      "Pipeline symptoms",
      "Diagnosis",
      "Recovery explanation"
    ],
    "metrics": [
      {
        "value": "Demo",
        "label": "Interactive demonstration · Synthetic scenarios"
      }
    ],
    "github": "https://github.com/KarthikaPKumar/Nexora-demo",
    "live": "https://karthikapkumar.github.io/Nexora-demo/",
    "limits": "This is an illustrative systems demonstration. It is not connected to production pipelines and does not autonomously repair real infrastructure.",
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
    "title": "Wildlife Detection API",
    "year": "Portfolio project",
    "genre": "ML ENGINEERING",
    "logline": "A cloud-native inference service built around YOLOv8 and FastAPI, with an API deployment architecture using Docker, Kubernetes and infrastructure-as-code tooling.",
    "stack": [
      "YOLOv8",
      "FastAPI",
      "Docker",
      "Kubernetes"
    ],
    "build": [
      "The repository demonstrates the structure around model serving: API boundaries, containerisation and deployment configuration. Explore the implementation directly in the source."
    ],
    "features": [
      "Image input",
      "Inference API",
      "YOLOv8 model",
      "Detection response"
    ],
    "metrics": [
      {
        "value": "Code",
        "label": "Source code available · No public demo"
      }
    ],
    "github": "https://github.com/KarthikaPKumar/Cloud-Native-Wildlife-Detection-Model",
    "live": "",
    "limits": "There is no public running demo linked here. No production accuracy or deployment availability is claimed by this portfolio.",
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
    "title": "Master of Data Science",
    "org": "Monash University",
    "detail": "Completed Master of Data Science at Monash University, 2025–2026, combining analysis, modelling and engineering.",
    "laurel": "Education"
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
export const certifications: Certification[] = [];
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
        "mono": "\u2211"
      },
      {
        "name": "Data quality",
        "mono": "\u2713"
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
    "Wildlife Detection API (project architecture)"
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
    "Wildlife Detection API (project architecture)"
  ],
  "Kubernetes": [
    "Wildlife Detection API (project architecture)"
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
        "description": "Completed Master of Data Science at Monash University in 2026.",
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
        "title": "Pipeline diagnosis",
        "description": "Nexora (DataMedic): an interactive pipeline diagnosis demonstration with synthetic scenarios.",
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
    "detail": "DataMedic · synthetic scenarios",
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
      "Software Developer · August 2022 – January 2025",
      "watsonx.data / Presto · security · performance · tooling"
    ]
  },
  {
    "kicker": "Education",
    "title": "Following the data",
    "lines": [
      "Master of Data Science · Monash University · Completed 2026",
      "Melbourne · 2025–2026"
    ]
  },
  {
    "kicker": "Projects",
    "title": "Models. Systems. Questions.",
    "lines": [
      "Voltwise · battery capacity forecasting",
      "Nexora (DataMedic) · pipeline diagnosis demo",
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
