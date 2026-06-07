import {
  SEED_CATEGORIES,
  SEED_PROJECTS,
  SEED_PROPOSALS,
  SEED_USERS,
  DEMO_ADMIN,
  DEMO_OWNER,
  DEMO_FREELANCER,
} from "./seedData";

const KEYS = {
  users: "hf_users",
  projects: "hf_projects",
  proposals: "hf_proposals",
  categories: "hf_categories",
  currentUser: "hf_current_user",
};

function load(key, seed) {
  const stored = localStorage.getItem(key);
  if (stored) return JSON.parse(stored);
  localStorage.setItem(key, JSON.stringify(seed));
  return seed;
}

function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function generateId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function delay(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getCategoryById(id) {
  const categories = load(KEYS.categories, SEED_CATEGORIES);
  return categories.find((c) => c._id === id);
}

function parseQuery(qs = "") {
  const params = new URLSearchParams(qs.startsWith("?") ? qs.slice(1) : qs);
  return {
    search: params.get("search") || "",
    category: params.get("category") || "",
    status: params.get("status") || "",
    sort: params.get("sort") || "latest",
  };
}

function isAllFilter(value) {
  return !value || value === "ALL" || value === "All";
}

function applySort(projects, sort) {
  return [...projects].sort((a, b) => {
    const dateA = new Date(a.createdAt || 0);
    const dateB = new Date(b.createdAt || 0);
    return sort === "earliest" ? dateA - dateB : dateB - dateA;
  });
}

export const mockStore = {
  async getCurrentUser() {
    await delay(150);
    const stored = localStorage.getItem(KEYS.currentUser);
    if (!stored) return { user: null };
    const user = JSON.parse(stored);
    const users = load(KEYS.users, SEED_USERS);
    const fresh = users.find((u) => u._id === user._id);
    return { user: fresh || user };
  },

  async loginAs(role) {
    await delay(400);
    const map = {
      ADMIN: DEMO_ADMIN,
      OWNER: DEMO_OWNER,
      FREELANCER: DEMO_FREELANCER,
    };
    const user = map[role];
    if (!user) throw new Error("نقش نامعتبر");
    save(KEYS.currentUser, user);
    return { user, message: `خوش آمدید ${user.name}` };
  },

  async signup({ name, email, phoneNumber, role }) {
    await delay(500);
    const users = load(KEYS.users, SEED_USERS);
    if (users.some((u) => u.email === email)) {
      throw new Error("این ایمیل قبلاً ثبت شده است");
    }
    const newUser = {
      _id: generateId("user"),
      name,
      email,
      phoneNumber,
      role,
      status: 2,
      isActive: true,
    };
    users.push(newUser);
    save(KEYS.users, users);
    save(KEYS.currentUser, newUser);
    return { user: newUser, message: "ثبت‌نام با موفقیت انجام شد" };
  },

  async logout() {
    await delay(200);
    localStorage.removeItem(KEYS.currentUser);
    return { message: "با موفقیت خارج شدید" };
  },

  async getUsers() {
    await delay(300);
    const users = load(KEYS.users, SEED_USERS);
    return { users };
  },

  async editProfile(data) {
    await delay(400);
    const { user: current } = await this.getCurrentUser();
    if (!current) throw new Error("کاربر یافت نشد");
    const users = load(KEYS.users, SEED_USERS);
    const idx = users.findIndex((u) => u._id === current._id);
    const updated = { ...users[idx], ...data };
    users[idx] = updated;
    save(KEYS.users, users);
    save(KEYS.currentUser, updated);
    return { user: updated, message: "پروفایل بروزرسانی شد" };
  },

  async changeUserStatus({ userId, data }) {
    await delay(400);
    const users = load(KEYS.users, SEED_USERS);
    const idx = users.findIndex((u) => u._id === userId);
    if (idx === -1) throw new Error("کاربر یافت نشد");
    users[idx] = { ...users[idx], status: Number(data.status) };
    save(KEYS.users, users);
    return { message: "وضعیت کاربر تغییر کرد" };
  },

  async getCategories() {
    await delay(200);
    const categories = load(KEYS.categories, SEED_CATEGORIES);
    return { categories };
  },

  async getAllProjects() {
    await delay(300);
    return { projects: load(KEYS.projects, SEED_PROJECTS) };
  },

  async getProjects(qs = "") {
    await delay(300);
    const { search, category, status, sort } = parseQuery(qs);
    let projects = load(KEYS.projects, SEED_PROJECTS);

    if (status === "OPEN" || status === "CLOSED") {
      projects = projects.filter((p) => p.status === status);
    } else if (status === "ALL") {
      // show all projects
    } else {
      // home/browse pages without status filter → open only
      projects = projects.filter((p) => p.status === "OPEN");
    }

    if (search) {
      projects = projects.filter(
        (p) =>
          p.title.includes(search) ||
          p.description.includes(search) ||
          p.tags.some((t) => t.includes(search))
      );
    }
    if (!isAllFilter(category)) {
      projects = projects.filter(
        (p) => p.category.englishTitle === category
      );
    }

    return { projects: applySort(projects, sort) };
  },

  async getOwnerProjects(qs = "") {
    await delay(300);
    const { user } = await this.getCurrentUser();
    const { status, category, sort } = parseQuery(qs);
    let projects = load(KEYS.projects, SEED_PROJECTS).filter(
      (p) => p.owner._id === user?._id
    );

    if (status === "OPEN" || status === "CLOSED") {
      projects = projects.filter((p) => p.status === status);
    }

    if (!isAllFilter(category)) {
      projects = projects.filter(
        (p) => p.category.englishTitle === category
      );
    }

    return { projects: applySort(projects, sort) };
  },

  async getProject(id) {
    await delay(300);
    const projects = load(KEYS.projects, SEED_PROJECTS);
    const project = projects.find((p) => p._id === id);
    if (!project) throw new Error("پروژه یافت نشد");
    const proposals = load(KEYS.proposals, SEED_PROPOSALS).filter(
      (p) => p.projectId === id
    );
    return { project, proposals };
  },

  async createProject(data) {
    await delay(500);
    const { user } = await this.getCurrentUser();
    if (!user || user.role !== "OWNER") {
      throw new Error("فقط کارفرما می‌تواند پروژه ثبت کند");
    }
    const projects = load(KEYS.projects, SEED_PROJECTS);
    const category = getCategoryById(data.category);
    const newProject = {
      _id: generateId("proj"),
      title: data.title,
      description: data.description,
      budget: Number(data.budget),
      category,
      deadline: data.deadline,
      tags: data.tags || [],
      status: "OPEN",
      createdAt: new Date().toISOString(),
      owner: { _id: user._id, name: user.name },
      freelancer: null,
    };
    projects.unshift(newProject);
    save(KEYS.projects, projects);
    return { project: newProject, message: "پروژه با موفقیت ثبت شد" };
  },

  async editProject({ id, newProject }) {
    await delay(400);
    const projects = load(KEYS.projects, SEED_PROJECTS);
    const idx = projects.findIndex((p) => p._id === id);
    if (idx === -1) throw new Error("پروژه یافت نشد");
    const category = getCategoryById(newProject.category);
    projects[idx] = {
      ...projects[idx],
      ...newProject,
      budget: Number(newProject.budget),
      category: category || projects[idx].category,
    };
    save(KEYS.projects, projects);
    return { project: projects[idx], message: "پروژه بروزرسانی شد" };
  },

  async removeProject(id) {
    await delay(400);
    const projects = load(KEYS.projects, SEED_PROJECTS);
    save(
      KEYS.projects,
      projects.filter((p) => p._id !== id)
    );
    return { message: "پروژه حذف شد" };
  },

  async toggleProjectStatus({ id, data }) {
    await delay(300);
    const projects = load(KEYS.projects, SEED_PROJECTS);
    const idx = projects.findIndex((p) => p._id === id);
    projects[idx] = { ...projects[idx], status: data.status };
    save(KEYS.projects, projects);
    return { message: "وضعیت پروژه تغییر کرد" };
  },

  async getProposals(qs = "") {
    await delay(300);
    const { user } = await this.getCurrentUser();
    let proposals = load(KEYS.proposals, SEED_PROPOSALS);
    const projects = load(KEYS.projects, SEED_PROJECTS);
    const { status, sort } = parseQuery(qs);

    if (!user) return { proposals: [] };

    if (user.role === "FREELANCER") {
      proposals = proposals.filter((p) => p.user._id === user._id);
    } else if (user.role === "OWNER") {
      const ownerProjectIds = projects
        .filter((p) => p.owner._id === user._id)
        .map((p) => p._id);
      proposals = proposals.filter((p) =>
        ownerProjectIds.includes(p.projectId)
      );
    }

    if (status && status !== "ALL") {
      proposals = proposals.filter(
        (p) => Number(p.status) === Number(status)
      );
    }

    proposals = [...proposals].sort((a, b) => {
      const dateA = new Date(a.createdAt || 0);
      const dateB = new Date(b.createdAt || 0);
      return sort === "earliest" ? dateA - dateB : dateB - dateA;
    });

    return { proposals };
  },

  async createProposal(data) {
    await delay(500);
    const { user } = await this.getCurrentUser();
    if (!user || user.role !== "FREELANCER") {
      throw new Error("فقط فریلنسر می‌تواند درخواست ارسال کند");
    }
    const projects = load(KEYS.projects, SEED_PROJECTS);
    const project = projects.find((p) => p._id === data.projectId);
    if (!project) throw new Error("پروژه یافت نشد");
    if (project.status !== "OPEN") {
      throw new Error("این پروژه بسته شده و امکان ارسال درخواست وجود ندارد");
    }
    const proposals = load(KEYS.proposals, SEED_PROPOSALS);
    const newProposal = {
      _id: generateId("prop"),
      description: data.description,
      duration: Number(data.duration),
      price: Number(data.price),
      status: 1,
      projectId: data.projectId,
      user: { _id: user._id, name: user.name },
      createdAt: new Date().toISOString(),
    };
    proposals.unshift(newProposal);
    save(KEYS.proposals, proposals);
    return { proposal: newProposal, message: "درخواست با موفقیت ارسال شد" };
  },

  async changeProposalStatus({ proposalId, status }) {
    await delay(400);
    const proposals = load(KEYS.proposals, SEED_PROPOSALS);
    const idx = proposals.findIndex((p) => p._id === proposalId);
    if (idx === -1) throw new Error("درخواست یافت نشد");
    proposals[idx] = { ...proposals[idx], status: Number(status) };
    save(KEYS.proposals, proposals);

    if (Number(status) === 2) {
      const projects = load(KEYS.projects, SEED_PROJECTS);
      const pIdx = projects.findIndex(
        (p) => p._id === proposals[idx].projectId
      );
      if (pIdx !== -1) {
        projects[pIdx] = {
          ...projects[pIdx],
          status: "CLOSED",
          freelancer: { name: proposals[idx].user.name },
        };
        save(KEYS.projects, projects);
      }
    }

    return { message: "وضعیت درخواست تغییر کرد" };
  },

  resetDemoData() {
    Object.values(KEYS).forEach((key) => localStorage.removeItem(key));
  },
};
