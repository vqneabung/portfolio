// ============================================================
// Portfolio Data Layer
// Dữ liệu tĩnh lưu trữ toàn bộ thông tin Portfolio
// Hỗ trợ đa ngôn ngữ (vi/en) qua kiểu LocalText
// ============================================================

// --------------- Types ---------------

export type LocalText = string | { vi: string; en: string };

/** Helper – lấy text theo locale */
function lt(text: LocalText, locale: string): string {
  if (typeof text === "string") return text;
  return text[locale as "vi" | "en"] ?? text.vi;
}

export interface Skill {
  name: string;
  category: "backend" | "ai" | "infrastructure" | "frontend" | "database";
  nameLocal?: { vi: string; en: string };
  icon?: string;
}

export interface Experience {
  title: LocalText;
  company: string;
  period: string;
  responsibilities: LocalText[];
}

export interface Project {
  id: string;
  name: string;
  role: LocalText;
  period: string;
  description: LocalText;
  problem: LocalText;
  whatIBuilt: LocalText;
  highlights: LocalText[];
  challenges: LocalText;
  learned: LocalText;
  architectureFlow: string[];
  technologies: string[];
  links: { label: LocalText; url: string }[];
  teamSize: number;
  responsibilities: LocalText[];
}

export interface HomelabService {
  name: string;
  description: LocalText;
  icon?: string;
}

export interface TechnicalDecision {
  question: LocalText;
  answer: LocalText;
}

export interface Education {
  degree: LocalText;
  school: string;
  period: string;
  gpa: string;
  scholarship?: LocalText;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

// --------------- Hero ---------------

export const hero = {
  name: "Vũ Quang Nguyên",
  title: {
    vi: "Backend-Oriented Fullstack Developer",
    en: "Backend-Oriented Fullstack Developer",
  },
  subtitle: "AI & Backend Developer",
  brief: {
    vi: "Đam mê xây dựng hệ thống backend và ứng dụng AI. Tốt nghiệp Kỹ thuật Phần mềm (7.8/10) tại FPT University. Xây dựng hệ thống tư vấn nước hoa AI-powered (PerfumeGPT) và vận hành homelab với Docker, PostgreSQL, Redis trên Fedora. Từng thực tập tại FPT Software. Tập trung vào kiến trúc backend, retrieval systems và deployment thực tế.",
    en: "Passionate about building backend systems and AI applications. Software Engineering graduate (7.8/10) from FPT University. Built an AI-powered perfume recommendation system (PerfumeGPT) and operate a homelab with Docker, PostgreSQL, Redis on Fedora. Interned at FPT Software. Focused on backend architecture, retrieval systems, and real-world deployment.",
  },
  techBadges: ["ASP.NET Core", "NestJS", "PostgreSQL", "Docker", "AI/RAG"],
};

// --------------- About ---------------

export const about = {
  description: [
    {
      vi: "Kỹ sư Phần mềm từ Đại học FPT (GPA 7.8/10), định hướng Backend & AI Application Development. Kinh nghiệm xây dựng hệ thống web với ASP.NET Core, NestJS, React, PostgreSQL và Docker. Đặc biệt quan tâm đến kiến trúc backend, retrieval systems (RAG, vector search) và deployment pipeline.",
      en: "Software Engineering graduate from FPT University (GPA 7.8/10), oriented toward Backend & AI Application Development. Experienced in building web systems with ASP.NET Core, NestJS, React, PostgreSQL, and Docker. Particularly interested in backend architecture, retrieval systems (RAG, vector search), and deployment pipelines.",
    },
    {
      vi: "Vận hành homelab cá nhân trên Fedora Linux: container orchestration với Docker Compose, monitoring qua Portainer/Komodo, và CI/CD pipeline tự động deployment — coi đây là phòng lab thử nghiệm kiến trúc hệ thống thật.",
      en: "Running a personal homelab on Fedora Linux: container orchestration with Docker Compose, monitoring via Portainer/Komodo, and automated CI/CD deployment — treating it as a lab for real system architecture experiments.",
    },
  ] as LocalText[],
  highlights: [
    { label: { vi: "Dự án thực tế", en: "Real Projects" }, value: "4+" },
    { label: { vi: "Công nghệ", en: "Technologies" }, value: "15+" },
    { label: { vi: "Homelab Services", en: "Homelab Services" }, value: "6+" },
  ],
};

// --------------- Personal Info ---------------

export const personalInfo = {
  email: "vqneabung@gmail.com",
  phone: "0974488374",
  github: "https://github.com/vqneabung",
  linkedin: "https://www.linkedin.com/in/quang-nguyen-vu-24241825b/",
  location: { vi: "Ea Súp, Đăk Lắk", en: "Ea Sup, Dak Lak" },
};

// --------------- Skills (Engineering-grouped) ---------------

export const skills: Skill[] = [
  // Backend
  { name: "C#", category: "backend", icon: "csharp" },
  { name: "ASP.NET Core", category: "backend", icon: "dotnetcore" },
  { name: "NestJS", category: "backend", icon: "nestjs" },
  { name: "Java", category: "backend", icon: "java" },
  { name: "RESTful API", category: "backend" },
  // AI & Retrieval
  { name: "RAG Pipeline", category: "ai" },
  { name: "Vector Search / pgvector", category: "ai" },
  { name: "Prompt Engineering", category: "ai" },
  { name: "AI Chatbot Integration", category: "ai" },
  // Infrastructure
  { name: "Docker", category: "infrastructure", icon: "docker" },
  { name: "Linux (Fedora)", category: "infrastructure" },
  { name: "CI/CD", category: "infrastructure" },
  { name: "Portainer / Komodo", category: "infrastructure" },
  { name: "Git / GitHub", category: "infrastructure", icon: "git" },
  // Frontend
  { name: "React", category: "frontend", icon: "react" },
  { name: "Next.js", category: "frontend", icon: "nextjs" },
  { name: "TypeScript", category: "frontend", icon: "typescript" },
  { name: "Flutter", category: "frontend", icon: "flutter" },
  // Database
  { name: "PostgreSQL", category: "database", icon: "postgresql" },
  { name: "SQL Server", category: "database", icon: "microsoftsqlserver" },
  { name: "Redis", category: "database", icon: "redis" },
  { name: "Supabase", category: "database", icon: "supabase" },
];

// --------------- Experience ---------------

export const experiences: Experience[] = [
  {
    title: { vi: "Phát triển Phần mềm (Apprenticeship)", en: "Software Development Apprenticeship" },
    company: "FPT Software HCM",
    period: "01/2025 – 04/2025",
    responsibilities: [
      {
        vi: "Phối hợp với các thành viên trong team thực hiện lập trình và phát triển web app.",
        en: "Collaborated with team members to develop and maintain web applications.",
      },
      {
        vi: "Cùng với các thành viên khác tư duy logic, đưa ra các giải pháp xử lý vấn đề trong khi phát triển sản phẩm.",
        en: "Worked with team members to think logically and propose solutions during product development.",
      },
      {
        vi: "Chịu trách nhiệm về các tính năng mà mình phát triển end-to-end.",
        en: "Took end-to-end responsibility for features I developed.",
      },
      {
        vi: "Quyết định phương pháp lập trình và cách thức xử lý trong quá trình phát triển, vận hành sản phẩm.",
        en: "Made decisions on programming methods and approaches during development and operations.",
      },
    ],
  },
];

// --------------- Homelab ---------------

export const homelab = {
  heading: { vi: "Homelab & Infrastructure", en: "Homelab & Infrastructure" },
  description: {
    vi: "Vận hành homelab server trên máy cũ chạy Fedora Linux, sử dụng Docker Compose để orchestrate toàn bộ services. Quản lý qua Portainer và Komodo, triển khai CI/CD pipeline tự động và monitoring hệ thống 24/7.",
    en: "Running a homelab server on repurposed hardware with Fedora Linux, using Docker Compose to orchestrate all services. Managing through Portainer and Komodo, with automated CI/CD pipeline and 24/7 system monitoring.",
  },
  specs: [
    { label: { vi: "OS", en: "OS" }, value: "Fedora Linux" },
    { label: { vi: "Containerization", en: "Containerization" }, value: "Docker Compose" },
    { label: { vi: "Management", en: "Management" }, value: "Portainer + Komodo" },
    { label: { vi: "Deployment", en: "Deployment" }, value: "CI/CD + Webhook" },
  ],
  services: [
    {
      name: "ASP.NET Core",
      description: { vi: "Backend API chính cho các dự án", en: "Main backend API for projects" },
      icon: "dotnetcore",
    },
    {
      name: "NestJS",
      description: { vi: "AI Backend service cho chatbot", en: "AI Backend service for chatbot" },
      icon: "nestjs",
    },
    {
      name: "PostgreSQL",
      description: { vi: "Cơ sở dữ liệu chính (có pgvector)", en: "Primary database (with pgvector)" },
      icon: "postgresql",
    },
    {
      name: "Redis",
      description: { vi: "Caching và Pub/Sub messaging", en: "Caching and Pub/Sub messaging" },
      icon: "redis",
    },
    {
      name: "Portainer",
      description: { vi: "Quản lý và giám sát container", en: "Container management and monitoring" },
    },
    {
      name: "Komodo",
      description: { vi: "CI/CD deployment quản lý", en: "CI/CD deployment management" },
    },
  ] as HomelabService[],
  challenges: [
    {
      vi: "Quản lý resource constraint trên hardware cũ — tối ưu memory và CPU cho multi-container setup.",
      en: "Managing resource constraints on old hardware — optimizing memory and CPU for multi-container setup.",
    },
    {
      vi: "Container networking giữa các service backend và database chạy trên cùng host.",
      en: "Container networking between backend services and databases running on the same host.",
    },
    {
      vi: "Volume persistence cho PostgreSQL và Redis để đảm bảo data không mất khi restart.",
      en: "Volume persistence for PostgreSQL and Redis to ensure data survives container restarts.",
    },
  ] as LocalText[],
  learned: {
    vi: "Homelab dạy mình cách hệ thống production thật hoạt động — từ resource constraint đến networking đến monitoring. Không sách nào thay được kinh nghiệm vận hành server thật.",
    en: "The homelab taught me how real production systems work — from resource constraints to networking to monitoring. No book can replace the experience of running a real server.",
  },
};

// --------------- Technical Decisions ---------------

export const technicalDecisions: TechnicalDecision[] = [
  {
    question: {
      vi: "Tại sao dùng PostgreSQL + pgvector thay vì Elasticsearch?",
      en: "Why PostgreSQL + pgvector instead of Elasticsearch?",
    },
    answer: {
      vi: "PostgreSQL đã là DB chính cho application — thêm pgvector extension cho phép vector search trong cùng database, giảm operational complexity. Đổi sang Elasticsearch sẽ cần quản lý thêm một cluster riêng cho dữ liệu mà tệp nhỏ, chưa đáng.",
      en: "PostgreSQL was already the primary DB — adding the pgvector extension enables vector search in the same database, reducing operational complexity. Switching to Elasticsearch would mean managing a separate cluster for data that's small and doesn't justify it yet.",
    },
  },
  {
    question: {
      vi: "Tại sao chọn Redis Pub/Sub cho AI pipeline?",
      en: "Why Redis Pub/Sub for the AI pipeline?",
    },
    answer: {
      vi: "AI pipeline cần message passing giữa backend chính và AI service. Redis Pub/Sub lightweight, đã có sẵn trong stack cho caching, và đủ cho throughput hiện tại. gRPC thì robust hơn nhưng over-engineering cho use case này.",
      en: "The AI pipeline needs message passing between the main backend and the AI service. Redis Pub/Sub is lightweight, already in the stack for caching, and sufficient for current throughput. gRPC would be more robust but over-engineering for this use case.",
    },
  },
  {
    question: {
      vi: "Tại sao dùng hybrid search (BM25 + vector)?",
      en: "Why hybrid search (BM25 + vector)?",
    },
    answer: {
      vi: "Pure vector retrieval cho kết quả không ổn định relevance — một số query quá vague, một số quá specific. Hybrid search kết hợp keyword matching (BM25) với semantic similarity (pgvector) cho kết quả cân bằng hơn.",
      en: "Pure vector retrieval produced inconsistent relevance — some queries too vague, some too specific. Hybrid search combines keyword matching (BM25) with semantic similarity (pgvector) for more balanced results.",
    },
  },
  {
    question: {
      vi: "Tại sao Docker Compose trên homelab thay vì Kubernetes?",
      en: "Why Docker Compose on the homelab instead of Kubernetes?",
    },
    answer: {
      vi: "Homelab chạy trên 1 máy cũ — Kubernetes là overkill cho single-node. Docker Compose đủ declare multi-container, dễ debug hơn, và nhẹ resource. Kubernetes phù hợp hơn khi scale multi-node, chưa cần ở giai đoạn này.",
      en: "The homelab runs on a single old machine — Kubernetes is overkill for single-node. Docker Compose is enough to declare multi-container setups, easier to debug, and lighter on resources. Kubernetes makes more sense when scaling to multi-node, which isn't needed at this stage.",
    },
  },
];

// --------------- Projects ---------------

export const projects: Project[] = [
  {
    id: "perfumegpt",
    name: "PerfumeGPT",
    role: { vi: "Full-stack Developer", en: "Full-stack Developer" },
    period: "01/2026 – 05/2026",
    description: {
      vi: "Hệ thống tư vấn nước hoa tích hợp AI chatbot, hỗ trợ quản lý sản phẩm và đơn hàng. Triển khai các service trên homelab server Fedora với Docker.",
      en: "AI-integrated perfume recommendation system with chatbot, product and order management. Deployed services on Fedora homelab server with Docker.",
    },
    problem: {
      vi: "Tìm kiếm nước hoa bằng keyword thông thường không capture được sở thích cá nhân và ngữ cảnh — người dùng cần tư vấn semantic thay vì chỉ matching theo tên.",
      en: "Traditional keyword-based perfume search doesn't capture personal preferences and context — users need semantic recommendation, not just name matching.",
    },
    whatIBuilt: {
      vi: "Hệ thống multi-stage AI pipeline: keyword extraction → product retrieval (hybrid search) → AI filtering & reranking → final response. Backend chính bằng ASP.NET Core, AI service bằng NestJS, frontend React + Flutter mobile.",
      en: "Multi-stage AI pipeline system: keyword extraction → product retrieval (hybrid search) → AI filtering & reranking → final response. Main backend with ASP.NET Core, AI service with NestJS, React frontend + Flutter mobile.",
    },
    highlights: [
      { vi: "Hybrid search: BM25 + pgvector cho semantic perfume recommendation", en: "Hybrid search: BM25 + pgvector for semantic perfume recommendation" },
      { vi: "Redis Pub/Sub messaging giữa main backend và AI service", en: "Redis Pub/Sub messaging between main backend and AI service" },
      { vi: "PostgreSQL với pgvector extension cho vector storage", en: "PostgreSQL with pgvector extension for vector storage" },
      { vi: "Docker Compose multi-container deployment trên Fedora homelab", en: "Docker Compose multi-container deployment on Fedora homelab" },
    ],
    challenges: {
      vi: "Pure vector retrieval cho kết quả relevance không ổn định — dẫn đến việc khám phá hybrid search approach. Resource constraint trên homelab yêu cầu tối ưu memory và CPU cho multi-container setup.",
      en: "Pure vector retrieval produced inconsistent relevance — leading to exploring hybrid search approaches. Resource constraints on the homelab required optimizing memory and CPU for the multi-container setup.",
    },
    learned: {
      vi: "Học được cách retrieval quality, latency và AI orchestration ảnh hưởng trực tiếp đến trải nghiệm người dùng. Đồng thời hiểu rõ hơn về tradeoff giữa vector-only và hybrid search trong thực tế.",
      en: "Learned how retrieval quality, latency, and AI orchestration directly impact user experience. Also gained deeper understanding of tradeoffs between vector-only and hybrid search in practice.",
    },
    architectureFlow: [
      "User Prompt",
      "→ Keyword Extraction",
      "→ Hybrid Retrieval (BM25 + pgvector)",
      "→ AI Filtering & Reranking",
      "→ Final Response",
    ],
    technologies: [
      "React", "Flutter", "ASP.NET Core", "NestJS", "PostgreSQL",
      "Redis", "Docker", "Supabase", "Linux (Fedora)",
    ],
    links: [
      { label: { vi: "Front-end", en: "Front-end" }, url: "https://github.com/FPTU-ChillGuys/perfume-gpt-frontend" },
      { label: { vi: "Back-end (AI)", en: "Back-end (AI)" }, url: "https://github.com/FPTU-ChillGuys/perfume-gpt-backend" },
      { label: { vi: "Back-end (Main)", en: "Back-end (Main)" }, url: "https://github.com/FPTU-ChillGuys/perfume_gpt_ai_backend" },
      { label: { vi: "Mobile", en: "Mobile" }, url: "https://github.com/FPTU-ChillGuys/perfume-gpt-mobile" },
    ],
    teamSize: 5,
    responsibilities: [
      {
        vi: "Xây dựng RESTful API bằng ASP.NET Core cho hệ thống quản lý sản phẩm và đơn hàng.",
        en: "Built RESTful APIs with ASP.NET Core for product and order management systems.",
      },
      {
        vi: "Tích hợp chatbot AI hỗ trợ tư vấn sản phẩm cho người dùng.",
        en: "Integrated AI chatbot for product consultation.",
      },
      {
        vi: "Sử dụng Redis để tối ưu tốc độ phản hồi API.",
        en: "Used Redis to optimize API response times.",
      },
      {
        vi: "Thiết kế và quản lý cơ sở dữ liệu PostgreSQL.",
        en: "Designed and managed PostgreSQL database.",
      },
      {
        vi: "Dockerize các service để hỗ trợ development và deployment.",
        en: "Dockerized services to support development and deployment.",
      },
      {
        vi: "Triển khai và vận hành toàn bộ service trên homelab server Fedora, sử dụng Portainer để quản lý container và monitoring.",
        en: "Deployed and operated all services on a Fedora homelab server, using Portainer for container management and monitoring.",
      },
    ],
  },
  {
    id: "studeehub",
    name: "StudeeHub",
    role: { vi: "Full-stack Developer", en: "Full-stack Developer" },
    period: "09/2025 – 11/2025",
    description: {
      vi: "Nền tảng hỗ trợ học tập với tính năng upload tài liệu, flashcard và phân tích AI. Các service được triển khai trên homelab server cá nhân.",
      en: "Learning platform with document upload, flashcards, and AI analysis features. Services deployed on personal homelab server.",
    },
    problem: {
      vi: "Sinh viên cần công cụ tổng hợp tài liệu học tập dài thành flashcard và tóm tắt — manual processing tốn thời gian và inconsistency.",
      en: "Students need tools to summarize long study materials into flashcards and summaries — manual processing is time-consuming and inconsistent.",
    },
    whatIBuilt: {
      vi: "Platform upload tài liệu → AI extraction & chunking → flashcard generation → spaced repetition learning. Backend ASP.NET Core cho API chính, SQL Server cho data, React frontend.",
      en: "Platform for document upload → AI extraction & chunking → flashcard generation → spaced repetition learning. ASP.NET Core backend for main API, SQL Server for data, React frontend.",
    },
    highlights: [
      { vi: "Document upload + AI-powered extraction và chunking", en: "Document upload + AI-powered extraction and chunking" },
      { vi: "Flashcard generation tự động từ tài liệu", en: "Automatic flashcard generation from documents" },
      { vi: "SQL Server cho structured data storage", en: "SQL Server for structured data storage" },
      { vi: "Docker deployment trên homelab Fedora", en: "Docker deployment on Fedora homelab" },
    ],
    challenges: {
      vi: "Chunking strategy ảnh hưởng trực tiếp đến chất lượng flashcard — quá lớn thì mất context, quá nhỏ thì fragment knowledge. Phải iterate nhiều lần để tìm balance.",
      en: "Chunking strategy directly impacts flashcard quality — too large loses context, too small fragments knowledge. Required multiple iterations to find the right balance.",
    },
    learned: {
      vi: "Học được limitations của pure vector retrieval và tầm quan trọng của chunking strategy trong RAG pipeline.",
      en: "Learned the limitations of pure vector retrieval and the importance of chunking strategy in RAG pipelines.",
    },
    architectureFlow: [
      "Upload Document",
      "→ AI Extraction & Chunking",
      "→ Flashcard Generation",
      "→ Spaced Repetition",
    ],
    technologies: ["React", "ASP.NET Core", "SQL Server", "PostgreSQL", "Docker", "Linux (Fedora)"],
    links: [
      { label: { vi: "Front-end", en: "Front-end" }, url: "https://github.com/FPTU-ChillGuys/studeehub-frontend" },
      { label: { vi: "Back-end", en: "Back-end" }, url: "https://github.com/FPTU-ChillGuys/studeehub-backend" },
    ],
    teamSize: 5,
    responsibilities: [
      {
        vi: "Phát triển API cho chức năng upload và phân tích tài liệu học tập bằng AI.",
        en: "Developed APIs for document upload and AI-powered analysis features.",
      },
      {
        vi: "Xây dựng hệ thống flashcard hỗ trợ học tập.",
        en: "Built a flashcard system for learning support.",
      },
      {
        vi: "Tham gia phát triển giao diện bằng React.",
        en: "Contributed to React frontend development.",
      },
      {
        vi: "Phối hợp làm việc nhóm thông qua GitHub workflow.",
        en: "Collaborated with team through GitHub workflow.",
      },
    ],
  },
  {
    id: "claim-request",
    name: "Claim Request System",
    role: { vi: "Front-end Developer", en: "Front-end Developer" },
    period: "01/2025 – 04/2025",
    description: {
      vi: "Hệ thống quản lý Claim Request với Approval Workflow và Dashboard cho doanh nghiệp.",
      en: "Claim request management system with approval workflow and dashboard for enterprises.",
    },
    problem: {
      vi: "Quy trình claim request nội bộ bằng paper/email chậm, dễ mất và khó theo dõi trạng thái.",
      en: "Internal claim request process via paper/email is slow, prone to loss, and hard to track status.",
    },
    whatIBuilt: {
      vi: "Enterprise web app với multi-step approval workflow, role-based dashboard, và real-time status tracking. React + TypeScript frontend tích hợp với ASP.NET Core backend.",
      en: "Enterprise web app with multi-step approval workflow, role-based dashboard, and real-time status tracking. React + TypeScript frontend integrated with ASP.NET Core backend.",
    },
    highlights: [
      { vi: "Multi-step approval workflow với role-based access control", en: "Multi-step approval workflow with role-based access control" },
      { vi: "Dashboard real-time cho quản lý và tracking", en: "Real-time dashboard for management and tracking" },
      { vi: "Form validation, filter, pagination phức tạp", en: "Complex form validation, filtering, and pagination" },
    ],
    challenges: {
      vi: "Workflow phức tạp với nhiều role và state transition — phải xử lý edge case khi reject và resubmit.",
      en: "Complex workflow with multiple roles and state transitions — handling edge cases for rejection and resubmission.",
    },
    learned: {
      vi: "Kinh nghiệm thực tế với enterprise workflow pattern và role-based UI rendering trong môi trường professional.",
      en: "Practical experience with enterprise workflow patterns and role-based UI rendering in a professional environment.",
    },
    architectureFlow: [
      "Submit Request",
      "→ Manager Review",
      "→ Finance Approval",
      "→ Completed / Rejected",
    ],
    technologies: ["React", "TypeScript"],
    links: [],
    teamSize: 0,
    responsibilities: [
      {
        vi: "Phát triển giao diện người dùng bằng React và TypeScript.",
        en: "Developed user interfaces with React and TypeScript.",
      },
      {
        vi: "Xây dựng các màn hình quản lý Claim Request, Approval Workflow và Dashboard.",
        en: "Built Claim Request management, Approval Workflow, and Dashboard screens.",
      },
      {
        vi: "Tích hợp RESTful API với backend ASP.NET Core.",
        en: "Integrated RESTful APIs with ASP.NET Core backend.",
      },
      {
        vi: "Xử lý form validation, filter, pagination và role-based UI rendering.",
        en: "Handled form validation, filtering, pagination, and role-based UI rendering.",
      },
      {
        vi: "Tối ưu responsive UI và cải thiện trải nghiệm người dùng.",
        en: "Optimized responsive UI and improved user experience.",
      },
      {
        vi: "Phối hợp cùng backend team thông qua GitLab workflow.",
        en: "Coordinated with backend team via GitLab workflow.",
      },
    ],
  },
  {
    id: "koi-delivery",
    name: "Koi Delivery Order System",
    role: { vi: "Full-stack Developer", en: "Full-stack Developer" },
    period: "09/2024 – 11/2024",
    description: {
      vi: "Hệ thống đặt hàng và giao hàng cá Koi với quản lý đơn hàng và khách hàng.",
      en: "Koi fish delivery order system with order and customer management.",
    },
    problem: {
      vi: "Quản lý đơn hàng cá Koi thủ công dễ nhầm lẫn và không theo dõi được trạng thái giao hàng.",
      en: "Manual Koi fish order management is error-prone and lacks delivery status tracking.",
    },
    whatIBuilt: {
      vi: "Hệ thống đặt hàng và giao hàng với module quản lý đơn hàng, khách hàng, và tracking. Full-stack: React frontend + ASP.NET Core backend + SQL Server database.",
      en: "Order and delivery system with order management, customer management, and tracking modules. Full-stack: React frontend + ASP.NET Core backend + SQL Server database.",
    },
    highlights: [
      { vi: "CRUD operations cho đơn hàng và khách hàng", en: "CRUD operations for orders and customers" },
      { vi: "Responsive UI với React", en: "Responsive UI with React" },
      { vi: "ASP.NET Core RESTful API backend", en: "ASP.NET Core RESTful API backend" },
    ],
    challenges: {
      vi: "Dự án full-stack đầu tiên — phải hiểu toàn bộ flow từ database schema đến API design đến frontend state management.",
      en: "First full-stack project — had to understand the entire flow from database schema to API design to frontend state management.",
    },
    learned: {
      vi: "Nền tảng cho việc hiểu end-to-end system design và full-stack development workflow.",
      en: "Foundation for understanding end-to-end system design and full-stack development workflow.",
    },
    architectureFlow: [
      "Place Order",
      "→ Process & Assign",
      "→ Delivery Tracking",
      "→ Completed",
    ],
    technologies: ["React", "ASP.NET Core", "SQL Server"],
    links: [
      {
        label: { vi: "Front-end", en: "Front-end" },
        url: "https://github.com/FPTU-ChillGuys/koi-delivery-order-system-frontend",
      },
    ],
    teamSize: 5,
    responsibilities: [
      {
        vi: "Xây dựng module quản lý đơn hàng và quản lý khách hàng.",
        en: "Built order management and customer management modules.",
      },
      {
        vi: "Phát triển giao diện responsive bằng React.",
        en: "Developed responsive UI with React.",
      },
      {
        vi: "Xây dựng API backend và xử lý thao tác dữ liệu bằng ASP.NET Core.",
        en: "Built backend APIs and handled data operations with ASP.NET Core.",
      },
    ],
  },
];

// --------------- Education ---------------

export const education: Education = {
  degree: { vi: "Kỹ thuật Phần mềm", en: "Software Engineering" },
  school: "FPT University",
  period: "2022 – 2026",
  gpa: "7.8/10",
  scholarship: { vi: "Học bổng FPT 30% (2022)", en: "FPT Scholarship 30% (2022)" },
};

// --------------- Certifications ---------------

export const certifications: Certification[] = [
  { name: "Meta React Basic", issuer: "Meta (Coursera)", year: "2024" },
  { name: "Meta Advanced React", issuer: "Meta (Coursera)", year: "2024" },
  { name: "Backend Development for .NET Full Stack", issuer: "Meta (Coursera)", year: "2024" },
];

// --------------- Re-export helper ---------------

export { lt };