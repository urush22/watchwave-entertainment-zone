
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from '@/components/ui/sonner';

type ContentItem = {
  id: string;
  title: string;
  posterPath: string;
  type: 'movie' | 'tv';
  overview?: string;
  backdropPath?: string;
};

interface MyListContextType {
  myList: ContentItem[];
  isInMyList: (id: string) => boolean;
  addToMyList: (item: ContentItem) => void;
  removeFromMyList: (id: string) => void;
  toggleMyList: (item: ContentItem) => void;
}

const MyListContext = createContext<MyListContextType | undefined>(undefined);

export const useMyList = () => {
  const context = useContext(MyListContext);
  if (context === undefined) {
    throw new Error('useMyList must be used within a MyListProvider');
  }
  return context;
};

interface MyListProviderProps {
  children: ReactNode;
}

export const MyListProvider: React.FC<MyListProviderProps> = ({ children }) => {
  const [myList, setMyList] = useState<ContentItem[]>([]);

  // Load saved list from localStorage on component mount
  useEffect(() => {
    const savedList = localStorage.getItem('myList');
    if (savedList) {
      try {
        setMyList(JSON.parse(savedList));
      } catch (error) {
        console.error('Error parsing saved list:', error);
      }
    }
  }, []);

  // Save list to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('myList', JSON.stringify(myList));
  }, [myList]);

  const isInMyList = (id: string) => {
    return myList.some(item => item.id === id);
  };

  const addToMyList = (item: ContentItem) => {
    if (!isInMyList(item.id)) {
      setMyList(prevList => [...prevList, item]);
      toast(`Added to My List`, {
        description: `${item.title} has been added to your list.`,
        duration: 3000,
      });
    }
  };

  const removeFromMyList = (id: string) => {
    const itemToRemove = myList.find(item => item.id === id);
    setMyList(prevList => prevList.filter(item => item.id !== id));
    if (itemToRemove) {
      toast(`Removed from My List`, {
        description: `${itemToRemove.title} has been removed from your list.`,
        duration: 3000,
      });
    }
  };

  const toggleMyList = (item: ContentItem) => {
    if (isInMyList(item.id)) {
      removeFromMyList(item.id);
    } else {
      addToMyList(item);
    }
  };

  return (
    <MyListContext.Provider value={{ myList, isInMyList, addToMyList, removeFromMyList, toggleMyList }}>
      {children}
    </MyListContext.Provider>
  );
};
