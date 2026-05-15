// ============================================================
// Portfolio Data Layer
// Dữ liệu tĩnh lưu trữ toàn bộ thông tin CV
// ============================================================

// --------------- Types ---------------

export interface Skill {
  name: string;
  category: "language" | "framework" | "database" | "tool" | "softskill" | "language_other";
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  name: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  links: { label: string; url: string }[];
  teamSize: number;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  gpa: string;
  scholarship?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface NavLink {
  label: string;
  href: string;
}

// --------------- Navigation ---------------

export const navLinks: NavLink[] = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Kỹ năng", href: "#skills" },
  { label: "Kinh nghiệm", href: "#experience" },
  { label: "Dự án", href: "#projects" },
  { label: "Học vấn", href: "#education" },
  { label: "Chứng chỉ", href: "#certifications" },
  { label: "Liên hệ", href: "#contact" },
];

// --------------- Hero ---------------

export const hero = {
  name: "Vũ Quang Nguyên",
  title: "Phát triển Phần mềm",
  subtitle: "Software Developer",
  brief:
    "Sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học FPT, đam mê phát triển hệ thống backend và ứng dụng web hiện đại.",
};

// --------------- About ---------------

export const about = {
  description: [
    "Sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học FPT, có kinh nghiệm phát triển ứng dụng backend và full-stack thông qua các dự án cá nhân và nhóm.",
    "Có kiến thức và kinh nghiệm làm việc với ASP.NET Core, React, PostgreSQL, Redis, Docker và RESTful API. Yêu thích phát triển hệ thống backend, tối ưu hiệu năng và xây dựng các ứng dụng web hiện đại.",
  ],
  highlights: [
    { label: "Dự án", value: "4+" },
    { label: "Kinh nghiệm", value: "1 năm+" },
    { label: "Công nghệ", value: "15+" },
  ],
};

// --------------- Personal Info ---------------

export const personalInfo = {
  email: "vqneabung@gmail.com",
  phone: "0974488374",
  github: "https://github.com/vqneabung",
  linkedin: "https://www.linkedin.com/in/quang-nguyen-vu-24241825b/",
  location: "Ea Súp, Đăk Lắk",
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
  // Khác
  { name: "RESTful API", category: "tool" },
  // Soft skills
  { name: "Kỹ năng giao tiếp hiệu quả", category: "softskill" },
  { name: "Tinh thần làm việc nhóm tốt", category: "softskill" },
  { name: "Khả năng giải quyết vấn đề", category: "softskill" },
  { name: "Quản lý thời gian hiệu quả", category: "softskill" },
  { name: "Tinh thần học hỏi và chủ động", category: "softskill" },
  // Ngôn ngữ
  { name: "Tiếng Việt (Bản ngữ)", category: "language_other" },
  { name: "Tiếng Anh (Đọc tài liệu khá)", category: "language_other" },
];

export const skillCategories: { key: Skill["category"]; label: string }[] = [
  { key: "language", label: "Ngôn ngữ lập trình" },
  { key: "framework", label: "Framework" },
  { key: "database", label: "Database" },
  { key: "tool", label: "Công cụ & Khác" },
  { key: "softskill", label: "Kỹ năng mềm" },
  { key: "language_other", label: "Ngôn ngữ" },
];

// --------------- Experience ---------------

export const experiences: Experience[] = [
  {
    title: "Phát triển Phần mềm (Intern)",
    company: "FPT Software HCM",
    period: "01/2025 – 04/2025",
    responsibilities: [
      "Phối hợp với các thành viên trong team thực hiện lập trình và phát triển web app.",
      "Cùng với các thành viên khác tư duy logic, đưa ra các giải pháp xử lý vấn đề trong khi phát triển sản phẩm.",
      "Chịu trách nhiệm về các tính năng mà mình phát triển end-to-end.",
      "Quyết định phương pháp lập trình và cách thức xử lý trong quá trình phát triển, vận hành sản phẩm.",
    ],
  },
];

// --------------- Projects ---------------

export const projects: Project[] = [
  {
    id: "perfumegpt",
    name: "PerfumeGPT",
    role: "Full-stack Developer",
    period: "01/2026 – 05/2026",
    description:
      "Hệ thống tư vấn nước hoa tích hợp AI chatbot, hỗ trợ quản lý sản phẩm và đơn hàng.",
    technologies: [
      "React",
      "Flutter",
      "ASP.NET Core",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Supabase",
      "Linux (Fedora)",
    ],
    links: [
      { label: "Front-end", url: "https://github.com/FPTU-ChillGuys/perfume-gpt-frontend" },
      { label: "Back-end (AI)", url: "https://github.com/FPTU-ChillGuys/perfume-gpt-backend" },
      { label: "Back-end (Main)", url: "https://github.com/FPTU-ChillGuys/perfume_gpt_ai_backend" },
      { label: "Mobile", url: "https://github.com/FPTU-ChillGuys/perfume-gpt-mobile" },
    ],
    teamSize: 5,
    responsibilities: [
      "Xây dựng RESTful API bằng ASP.NET Core cho hệ thống quản lý sản phẩm và đơn hàng.",
      "Tích hợp chatbot AI hỗ trợ tư vấn sản phẩm cho người dùng.",
      "Sử dụng Redis để tối ưu tốc độ phản hồi API.",
      "Thiết kế và quản lý cơ sở dữ liệu PostgreSQL.",
      "Dockerize các service để hỗ trợ development và deployment.",
    ],
  },
  {
    id: "studeehub",
    name: "StudeeHub",
    role: "Full-stack Developer",
    period: "09/2025 – 11/2025",
    description:
      "Nền tảng hỗ trợ học tập với tính năng upload tài liệu, flashcard và phân tích AI.",
    technologies: ["React", "ASP.NET Core", "SQL Server", "PostgreSQL"],
    links: [
      { label: "Front-end", url: "https://github.com/FPTU-ChillGuys/studeehub-frontend" },
      { label: "Back-end", url: "https://github.com/FPTU-ChillGuys/studeehub-backend" },
    ],
    teamSize: 5,
    responsibilities: [
      "Phát triển API cho chức năng upload và phân tích tài liệu học tập bằng AI.",
      "Xây dựng hệ thống flashcard hỗ trợ học tập.",
      "Tham gia phát triển giao diện bằng React.",
      "Phối hợp làm việc nhóm thông qua GitHub workflow.",
    ],
  },
  {
    id: "claim-request",
    name: "Claim Request System",
    role: "Front-end Developer",
    period: "01/2025 – 04/2025",
    description:
      "Hệ thống quản lý Claim Request với Approval Workflow và Dashboard cho doanh nghiệp.",
    technologies: ["React", "TypeScript"],
    links: [],
    teamSize: 0,
    responsibilities: [
      "Phát triển giao diện người dùng bằng React và TypeScript.",
      "Xây dựng các màn hình quản lý Claim Request, Approval Workflow và Dashboard.",
      "Tích hợp RESTful API với backend ASP.NET Core.",
      "Xử lý form validation, filter, pagination và role-based UI rendering.",
      "Tối ưu responsive UI và cải thiện trải nghiệm người dùng.",
      "Phối hợp cùng backend team thông qua GitLab workflow.",
    ],
  },
  {
    id: "koi-delivery",
    name: "Koi Delivery Order System",
    role: "Full-stack Developer",
    period: "09/2024 – 11/2024",
    description:
      "Hệ thống đặt hàng và giao hàng cá Koi với quản lý đơn hàng và khách hàng.",
    technologies: ["React", "ASP.NET Core", "SQL Server"],
    links: [
      {
        label: "Front-end",
        url: "https://github.com/FPTU-ChillGuys/koi-delivery-order-system-frontend",
      },
    ],
    teamSize: 5,
    responsibilities: [
      "Xây dựng module quản lý đơn hàng và quản lý khách hàng.",
      "Phát triển giao diện responsive bằng React.",
      "Xây dựng API backend và xử lý thao tác dữ liệu bằng ASP.NET Core.",
    ],
  },
];

// --------------- Education ---------------

export const education: Education = {
  degree: "Kỹ thuật Phần mềm",
  school: "Đại học FPT",
  period: "2022 – 2026",
  gpa: "7.8/10",
  scholarship: "Học bổng FPT 30% (2022)",
};

// --------------- Certifications ---------------

export const certifications: Certification[] = [
  {
    name: "Meta React Basic",
    issuer: "Meta (Coursera)",
    year: "2024",
  },
  {
    name: "Meta Advanced React",
    issuer: "Meta (Coursera)",
    year: "2024",
  },
  {
    name: "Backend Development for .NET Full Stack",
    issuer: "Meta (Coursera)",
    year: "2024",
  },
];