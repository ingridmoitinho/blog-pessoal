"use client";

import { useState, useEffect, useRef } from 'react';

// Use a versão que aceita o postId para que cada post tenha sua própria curtida
export default function LikeButton({ postId }: { postId: string }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  
  // Usamos uma "ref" para controlar se é a primeira renderização
  const isInitialMount = useRef(true);

  // Chaves únicas para cada post no localStorage
  const likesKey = `likes-${postId}`;
  const isLikedKey = `isLiked-${postId}`;

  // Roda apenas na montagem inicial para carregar os dados do localStorage
    useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLikes = localStorage.getItem(likesKey);
      const savedIsLiked = localStorage.getItem(isLikedKey);

      if (savedLikes) {
        setLikes(JSON.parse(savedLikes));
      }
      if (savedIsLiked) {
        setIsLiked(JSON.parse(savedIsLiked));
      }
    }
  }, [postId]); // O array de dependência garante que ele só recarregue se o post mudar

  // Efeito 2: Roda a cada mudança, mas PULA a primeira vez
  useEffect(() => {
    // Se for a montagem inicial, pula a execução para não sobrescrever os dados
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // A partir da segunda renderização, salva qualquer mudança no estado
      if (typeof window !== 'undefined') {
        localStorage.setItem(likesKey, JSON.stringify(likes));
        localStorage.setItem(isLikedKey, JSON.stringify(isLiked));
      }
    }
  }, [likes, isLiked, postId]);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const buttonClasses = `
    flex items-center gap-2 rounded-full px-7 py-3 font-semibold shadow-md 
    transition-all duration-300 ease-in-out
    active:scale-105 active:shadow-lg
    border border-transparent
  ${isLiked
      ? 'bg-lilac-dark hover:bg-lilac-dark/90 shadow-xl-pink' 
      : 'bg-lilac-light hover:bg-lilac-light/90 shadow-lg-pink'
    }
  `;

  return (
    <button onClick={handleLike} className={buttonClasses}>
      <span>{isLiked ? '💖' : '🤍'}</span>
      {isLiked ? 'Curtido!' : 'Curtir'} ({likes})
    </button>
  );
}
