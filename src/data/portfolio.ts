// ============================================================
// Portfolio Data Layer
// Dữ liệu tĩnh lưu trữ toàn bộ thông tin CV
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
  category: "language" | "framework" | "database" | "tool" | "softskill" | "language_other";
  /** Translated name per locale (optional – falls back to name) */
  nameLocal?: { vi: string; en: string };
  /** Devicon slug – maps to https://devicon.dev/ icon set */
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
  technologies: string[];
  links: { label: LocalText; url: string }[];
  teamSize: number;
  responsibilities: LocalText[];
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
  title: { vi: "Full-Stack Developer", en: "Full-Stack Developer" },
  subtitle: "Software Developer",
  brief: {
    vi: "Đam mê lập trình với nền tảng C# và TypeScript vững chắc. Tốt nghiệp loại Khá (7.8/10) ngành Kỹ thuật Phần mềm tại Đại học FPT. Đã hoàn thành đồ án PerfumeGPT với vai trò Full-Stack Developer, xây dựng hệ thống AI-powered web application. Từng thực tập tại Fsoft, học hỏi quy trình làm việc chuyên nghiệp và kỹ năng giải quyết vấn đề thực tế. Mong muốn tìm kiếm cơ hội phát triển sự nghiệp tại môi trường chuyên nghiệp để trở thành Backend Developer hoặc Full-Stack Developer.",
    en: "Passionate programmer with a solid foundation in C# and TypeScript. Graduated with Good honors (7.8/10) in Software Engineering from FPT University. Completed the PerfumeGPT thesis as a Full-Stack Developer, building an AI-powered web application system. Interned at Fsoft, gaining professional workflow experience and practical problem-solving skills. Seeking professional opportunities to grow as a Backend or Full-Stack Developer.",
  },
};

// --------------- About ---------------

export const about = {
  description: [
    {
      vi: "Cử nhân Kỹ thuật Phần mềm tại Đại học FPT (GPA 7.8/10), định hướng Backend/Full-Stack Developer. Có kinh nghiệm phát triển ứng dụng web với ASP.NET Core, React, Next.js, PostgreSQL và Docker thông qua dự án cá nhân và đồ án tốt nghiệp PerfumeGPT. Từng thực tập tại FPT Software và làm quen với quy trình phát triển phần mềm thực tế, teamwork và xử lý vấn đề.",
      en: "Software Engineering graduate from FPT University (GPA 7.8/10), oriented toward Backend/Full-Stack development. Experienced in building web applications with ASP.NET Core, React, Next.js, PostgreSQL, and Docker through personal projects and the PerfumeGPT thesis. Interned at FPT Software, gaining hands-on experience with real-world software development processes, teamwork, and problem-solving.",
    },
    {
      vi: "Ngoài ra, tôi vận hành một homelab cá nhân trên Fedora sử dụng Docker, Portainer và Komodo để triển khai các service backend như ASP.NET Core, NestJS, PostgreSQL, Redis và thực hành DevOps, CI/CD, quản trị hệ thống.",
      en: "Additionally, I run a personal homelab on Fedora using Docker, Portainer, and Komodo to deploy backend services such as ASP.NET Core, NestJS, PostgreSQL, Redis, and to practice DevOps, CI/CD, and system administration.",
    },
  ] as LocalText[],
  highlights: [
    { label: { vi: "Dự án", en: "Projects" }, value: "4+" },
    // { label: { vi: "Kinh nghiệm", en: "Experience" }, value: "1 năm+" },
    { label: { vi: "Công nghệ", en: "Technologies" }, value: "15+" },
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

// --------------- Skills ---------------

export const skills: Skill[] = [
  // Ngôn ngữ lập trình
  { name: "Java", category: "language", icon: "java" },
  { name: "JavaScript", category: "language", icon: "javascript" },
  { name: "TypeScript", category: "language", icon: "typescript" },
  { name: "HTML5/CSS3", category: "language", icon: "html5" },
  { name: "C#", category: "language", icon: "csharp" },
  { name: "Kotlin", category: "language", icon: "kotlin" },
  // Framework
  { name: "React", category: "framework", icon: "react" },
  { name: "Next.js", category: "framework", icon: "nextjs" },
  { name: "NestJS", category: "framework", icon: "nestjs" },
  { name: "ASP.NET Core", category: "framework", icon: "dotnetcore" },
  { name: "Flutter", category: "framework", icon: "flutter" },
  // Database
  { name: "SQL Server", category: "database", icon: "microsoftsqlserver" },
  { name: "PostgreSQL", category: "database", icon: "postgresql" },
  { name: "Redis", category: "database", icon: "redis" },
  { name: "Supabase", category: "database", icon: "supabase" },
  // Tool
  { name: "Git/GitHub", category: "tool", icon: "git" },
  { name: "Docker", category: "tool", icon: "docker" },
  { name: "Postman", category: "tool", icon: "postman" },
  { name: "VS Code", category: "tool", icon: "vscode" },
  { name: "Visual Studio", category: "tool", icon: "visualstudio" },
  { name: "Portainer/Komodo", category: "tool" },
  { name: "Jira", category: "tool" },
  // { name: "Figma", category: "tool", icon: "figma" },
  { name: "OpenCode", category: "tool" },
  { name: "RESTful API", category: "tool" },
  // Soft skills
  {
    name: "Kỹ năng giao tiếp hiệu quả",
    nameLocal: { vi: "Kỹ năng giao tiếp hiệu quả", en: "Effective communication" },
    category: "softskill",
  },
  {
    name: "Tinh thần làm việc nhóm tốt",
    nameLocal: { vi: "Tinh thần làm việc nhóm tốt", en: "Teamwork" },
    category: "softskill",
  },
  {
    name: "Khả năng giải quyết vấn đề",
    nameLocal: { vi: "Khả năng giải quyết vấn đề", en: "Problem-solving" },
    category: "softskill",
  },
  {
    name: "Quản lý thời gian hiệu quả",
    nameLocal: { vi: "Quản lý thời gian hiệu quả", en: "Time management" },
    category: "softskill",
  },
  {
    name: "Tinh thần học hỏi và chủ động",
    nameLocal: { vi: "Tinh thần học hỏi và chủ động", en: "Proactive learning" },
    category: "softskill",
  },
  // Ngôn ngữ
  {
    name: "Tiếng Việt (Bản ngữ)",
    nameLocal: { vi: "Tiếng Việt (Bản ngữ)", en: "Vietnamese (Native)" },
    category: "language_other",
  },
  {
    name: "Tiếng Anh (Đọc tài liệu khá)",
    nameLocal: { vi: "Tiếng Anh (Đọc tài liệu khá)", en: "English (Good reading)" },
    category: "language_other",
  },
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
  {
    title: { vi: "Homelab Server & DevOps", en: "Homelab Server & DevOps" },
    company: "Personal Project",
    period: "2025 – Nay",
    responsibilities: [
      {
        vi: "Xây dựng và vận hành homelab server trên máy tính cũ chạy Fedora, sử dụng Docker để container hóa toàn bộ dịch vụ.",
        en: "Built and operated a homelab server on repurposed hardware running Fedora, using Docker to containerize all services.",
      },
      {
        vi: "Sử dụng Portainer và Komodo để quản lý, giám sát và triển khai container cho các service như ASP.NET Core, NestJS, PostgreSQL, Redis.",
        en: "Used Portainer and Komodo to manage, monitor, and deploy containers for services such as ASP.NET Core, NestJS, PostgreSQL, Redis.",
      },
      {
        vi: "Thực hành CI/CD workflow, quản lý container networking, volume persistence và systemd service.",
        en: "Practiced CI/CD workflows, container networking, volume persistence, and systemd service management.",
      },
      {
        vi: "Tự động hóa triển khai và cập nhật dịch vụ thông qua Docker Compose và shell scripting.",
        en: "Automated service deployment and updates using Docker Compose and shell scripting.",
      },
    ],
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