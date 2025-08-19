'use client';
import React, { useState } from 'react';

type Labels = {
  search: string;
};


interface SearchProps {
  labels: Labels;
}

export default function SearchComponent({ labels }: SearchProps) {

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery);
      // You can add your search functionality here
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <div className="relative flex items-center">
      {/* Search Input */}
      <div className={`
        absolute right-0 transition-all duration-300 ease-in-out
        ${isSearchOpen 
          ? 'w-64 opacity-100 translate-x-0' 
          : 'w-0 opacity-0 translate-x-4 pointer-events-none'
        }
      `}>
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={labels.search}
            className="w-full pl-4 pr-10 py-2 text-sm border border-slate-300 rounded-lg bg-white dark:bg-slate-200 dark:border-slate-100 dark:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            autoFocus={isSearchOpen}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            disabled={!searchQuery.trim()}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Search Toggle Button */}
      <button
        onClick={handleSearchToggle}
        className={`
          relative z-10 p-2 transition-all duration-300 rounded-full
          ${isSearchOpen 
            ? 'text-violet-500 bg-violet-50 dark:bg-violet-900/20' 
            : 'text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800'
          }
        `}
        title={isSearchOpen ? "Close search" : "Search"}
        aria-label={isSearchOpen ? "Close search" : "Search"}
      >
        <svg 
          className={`h-5 w-5 transition-transform duration-300 ${isSearchOpen ? 'rotate-90' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isSearchOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          )}
        </svg>
      </button>
    </div>
  );
}