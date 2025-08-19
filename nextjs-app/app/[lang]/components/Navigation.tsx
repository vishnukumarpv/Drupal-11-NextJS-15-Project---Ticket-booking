'use client';

import React, { useState } from 'react';
import { getDictionary, createTranslator } from '@/lib/dictionary'
import { Locale } from '@/lib/types'
import SearchComponent from '@/components/molecules/SearchBar';
import Logo from '@/components/atoms/Logo';
import LanguageSwitcher from './LanguageSwitcher';
import NavLink from '@/components/atoms/NavLink';

/** Links */
interface NavLink {
  title: string;
  href: string;
  children?: NavLink[];
}

const links: NavLink[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Solutions',
    href: '#',
    children: [
      {
        title: 'Business Line of Credit',
        href: '#',
      },
      {
        title: 'SBA Loan',
        href: '#',
      },
      {
        title: 'Revenue Based Financing',
        href: '#',
      },
      {
        title: 'Invoice Factoring',
        href: '#',
      },
    ],
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

 
/** Main Navigation Header */
interface NavigationProps {
  lang: Locale;
  currentPath?: string;
  dictionary: any
}

export default function Navigation({ 
  lang, 
  currentPath = '/',
  dictionary
}: NavigationProps) {
  const [mobileNavigationOpened, setMobileNavigationOpened] = useState(false);
  // const dictionary = await getDictionary(lang)
  const t = createTranslator(dictionary)
  const navLinks = links;

  const closeMobileNavigation = () => setMobileNavigationOpened(false);
  const toggleMobileNavigation = () => setMobileNavigationOpened(!mobileNavigationOpened);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white backdrop-blur-md ">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map(({ title, href, children }) => (
              <div className="group relative" key={href}>
                <NavLink
                  currentPath={currentPath}
                  href={href}
                >
                  <span className="flex items-center">
                    {title}
                    {children && (
                      <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </NavLink>
                {children && (
                  <div className="invisible absolute left-0 top-full z-50 min-w-48 rounded-lg  border-slate-200 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 ">
                    {children.map((child) => (
                      <NavLink 
                        key={child.href}
                        href={child.href}
                        currentPath={currentPath}
                        className="block w-full"
                      >
                        {child.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher currentLang={lang} />
            
            <SearchComponent labels={{ search: t('common.search') }} />
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-400 hover:text-slate-900  transition-colors"
              onClick={toggleMobileNavigation}
              title="Toggle navigation menu"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileNavigationOpened}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileNavigationOpened ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        mobileNavigationOpened ? 'max-h-96 border-t border-slate-200 ' : 'max-h-0'
      }`}>
        <nav className="container mx-auto px-4 py-4 bg-white">
          <div className="space-y-2">
            {navLinks.map(({ title, href, children }) => (
              <div key={href}>
                <NavLink
                  currentPath={currentPath}
                  href={href}
                  className="block w-full text-left"
                >
                  {title}
                </NavLink>
                {children && (
                  <div className="ml-4 mt-2 space-y-1 border-l border-slate-200 pl-4 ">
                    {children.map((child) => (
                      <NavLink 
                        key={child.href}
                        href={child.href}
                        currentPath={currentPath}
                        className="block w-full text-sm"
                      >
                        {child.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {mobileNavigationOpened && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm md:hidden"
          onClick={closeMobileNavigation}
          aria-hidden="true"
        />
      )}
    </header>
  );
}