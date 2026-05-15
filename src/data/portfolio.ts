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
  title: { vi: "Phát triển Phần mềm", en: "Software Development" },
  subtitle: "Software Developer",
  brief: {
    vi: "Sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học FPT, đam mê phát triển hệ thống backend và ứng dụng web hiện đại.",
    en: "Final-year Software Engineering student at FPT University, passionate about backend system development and modern web applications.",
  },
};

// --------------- About ---------------

export const about = {
  description: [
    {
      vi: "Sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học FPT, có kinh nghiệm phát triển ứng dụng backend và full-stack thông qua các dự án cá nhân và nhóm.",
      en: "Final-year Software Engineering student at FPT University with experience in backend and full-stack development through personal and team projects.",
    },
    {
      vi: "Có kiến thức và kinh nghiệm làm việc với ASP.NET Core, React, PostgreSQL, Redis, Docker và RESTful API. Yêu thích phát triển hệ thống backend, tối ưu hiệu năng và xây dựng các ứng dụng web hiện đại.",
      en: "Skilled in ASP.NET Core, React, PostgreSQL, Redis, Docker, and RESTful API development. Passionate about backend system development, performance optimization, and building modern web applications.",
    },
  ] as LocalText[],
  highlights: [
    { label: { vi: "Dự án", en: "Projects" }, value: "4+" },
    { label: { vi: "Kinh nghiệm", en: "Experience" }, value: "1 năm+" },
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
  { name: "Java", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "HTML5/CSS3", category: "language" },
  { name: "C#", category: "language" },
  { name: "Kotlin", category: "language" },
  // Framework
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "NestJS", category: "framework" },
  { name: "ASP.NET Core", category: "framework" },
  { name: "Flutter", category: "framework" },
  // Database
  { name: "SQL Server", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Supabase", category: "database" },
  // Tool
  { name: "Git/GitHub", category: "tool" },
  { name: "Docker", category: "tool" },
  { name: "Postman", category: "tool" },
  { name: "VS Code", category: "tool" },
  { name: "Visual Studio", category: "tool" },
  { name: "Portainer/Komodo", category: "tool" },
  { name: "Jira", category: "tool" },
  { name: "Figma", category: "tool" },
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
    title: { vi: "Phát triển Phần mềm (Intern)", en: "Software Development Intern" },
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

// --------------- Projects ---------------

export const projects: Project[] = [
  {
    id: "perfumegpt",
    name: "PerfumeGPT",
    role: { vi: "Full-stack Developer", en: "Full-stack Developer" },
    period: "01/2026 – 05/2026",
    description: {
      vi: "Hệ thống tư vấn nước hoa tích hợp AI chatbot, hỗ trợ quản lý sản phẩm và đơn hàng.",
      en: "AI-integrated perfume recommendation system with chatbot, product and order management.",
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
    ],
  },
  {
    id: "studeehub",
    name: "StudeeHub",
    role: { vi: "Full-stack Developer", en: "Full-stack Developer" },
    period: "09/2025 – 11/2025",
    description: {
      vi: "Nền tảng hỗ trợ học tập với tính năng upload tài liệu, flashcard và phân tích AI.",
      en: "Learning platform with document upload, flashcards, and AI analysis features.",
    },
    technologies: ["React", "ASP.NET Core", "SQL Server", "PostgreSQL"],
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