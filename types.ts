
// Fix: Added React import to resolve 'Cannot find namespace React' when using React.ReactNode
import React from 'react';

export interface Message {
  role: 'user' | 'model';
  content: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}
