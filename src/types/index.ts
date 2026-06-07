import type { ReactNode } from "react";

export type UserRole = "ADMIN" | "OWNER" | "FREELANCER";

export type ProjectStatus = "OPEN" | "CLOSED";

export type ProposalStatus = 0 | 1 | 2;

export interface User {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  role: UserRole;
  status: number;
  isActive: boolean;
}

export interface Category {
  _id: string;
  title: string;
  englishTitle: string;
}

export interface ProjectOwner {
  _id: string;
  name: string;
}

export interface ProjectFreelancer {
  name: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  budget: number;
  category: Category;
  deadline: string;
  tags: string[];
  status: ProjectStatus;
  createdAt: string;
  owner: ProjectOwner;
  freelancer: ProjectFreelancer | null;
}

export interface ProposalUser {
  _id: string;
  name: string;
}

export interface Proposal {
  _id: string;
  description: string;
  duration: number;
  price: number;
  status: ProposalStatus;
  projectId: string;
  user: ProposalUser;
  createdAt: string;
}

export interface CreateProjectData {
  title: string;
  description: string;
  budget: number | string;
  category: string;
  deadline: string;
  tags?: string[];
}

export interface CreateProposalData {
  projectId: string;
  description: string;
  duration: number | string;
  price: number | string;
}

export interface SignupData {
  name: string;
  email: string;
  phoneNumber: string;
  role: UserRole;
}

export interface EditProfileData {
  name?: string;
  email?: string;
  phoneNumber?: string;
  isActive?: boolean;
}

export interface ProjectQueryParams {
  search?: string;
  category?: string;
  status?: string;
  sort?: string;
}

export interface ChildrenProps {
  children: ReactNode;
}

export interface ModalProps extends ChildrenProps {
  open: boolean;
  onClose: () => void;
  title: string;
}

export interface StatsWithProjectsProps {
  projects?: Project[];
  proposals?: Proposal[];
}

export interface AdminStatsProps extends StatsWithProjectsProps {
  users?: User[];
}
