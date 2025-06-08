import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image_url: string;
  author_name: string;
  status: 'draft' | 'published';
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  created_at: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface PageSection {
  id: string;
  page_name: string;
  section_name: string;
  section_type: string;
  title: string | null;
  subtitle: string | null;
  content: Record<string, any>;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Contact form submission
export const submitContactForm = async (contactData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { data, error } = await supabase
    .from('contacts')
    .insert([contactData])
    .select();

  if (error) throw error;
  return data;
};

// Blog post functions
export const getPublishedPosts = async () => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const getAllPosts = async () => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const getPostBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) throw error;
  return data;
};

export const createPost = async (postData: Omit<Post, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('posts')
    .insert([postData])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updatePost = async (id: string, postData: Partial<Post>) => {
  const { data, error } = await supabase
    .from('posts')
    .update(postData)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deletePost = async (id: string) => {
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

export const getCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');

  if (error) throw error;
  return data;
};

export const getTags = async () => {
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .order('name');

  if (error) throw error;
  return data;
};

// Page sections functions for CMS
export const getPageSections = async (pageName: string) => {
  const { data, error } = await supabase
    .from('page_sections')
    .select('*')
    .eq('page_name', pageName)
    .eq('is_active', true)
    .order('display_order');

  if (error) throw error;
  return data;
};

export const getAllPageSections = async () => {
  const { data, error } = await supabase
    .from('page_sections')
    .select('*')
    .order('page_name', { ascending: true })
    .order('display_order', { ascending: true });

  if (error) throw error;
  return data;
};

export const getPageSection = async (id: string) => {
  const { data, error } = await supabase
    .from('page_sections')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};

export const createPageSection = async (sectionData: Omit<PageSection, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('page_sections')
    .insert([sectionData])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updatePageSection = async (id: string, sectionData: Partial<PageSection>) => {
  const { data, error } = await supabase
    .from('page_sections')
    .update(sectionData)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deletePageSection = async (id: string) => {
  const { error } = await supabase
    .from('page_sections')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

// Authentication functions
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) throw error;
  return user;
};

export const onAuthStateChange = (callback: (event: string, session: any) => void) => {
  return supabase.auth.onAuthStateChange(callback);
};

// Contact management functions for admin
export const getAllContacts = async () => {
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const deleteContact = async (id: string) => {
  const { error } = await supabase
    .from('contacts')
    .delete()
    .eq('id', id);

  if (error) throw error;
};