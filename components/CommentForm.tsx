"use client";

import { useState, useEffect } from 'react';

interface Comment {
  author: string;
  text: string;
  date: string;
}

export default function CommentForm({ postId }: { postId: string }) {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [warningMessage, setWarningMessage] = useState('');
  const commentsKey = `comments-${postId}`;
  const [isClient, setIsClient] = useState(false); // estado para verificar se esta no lado do cliente

  // Roda apenas na primeira renderização no cliente
  useEffect(() => {
    setIsClient(true);
    const savedComments = localStorage.getItem(commentsKey);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [commentsKey]);

  // Salva os comentários no localStorage sempre que a lista 'comments' muda
  useEffect(() => {
    if (isClient) {
      localStorage.setItem(commentsKey, JSON.stringify(comments));
    }
  }, [comments, commentsKey, isClient]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWarningMessage('');

    if (author.trim() === '') {
      setWarningMessage('Por favor, preencha seu nome.');
      return;
    }

    if (comment.trim() === '') {
      setWarningMessage('Por favor, escreva um comentário.');
      return;
    }

    const newComment = {
      author: author,
      text: comment,
      date: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    
    setComments([...comments, newComment]);
    setComment('');
    setAuthor('');
  };
  
  const handleDelete = (indexToDelete: number) => {
    const updatedComments = comments.filter((_, index) => index !== indexToDelete);
    setComments(updatedComments);
  };

  return (
    <div className="mt-8">
      {warningMessage && (
        <p className="text-primary-hover text-center mb-4 font-semibold">
          {warningMessage}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-2/3 p-4 mb-4 border border-border bg-background text-text-base focus:outline-none focus:ring-2 focus:ring-lilac-dark" style={{ padding: '1rem', fontFamily: 'poppins' }}
          placeholder="Seu nome"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        
        <textarea
          className="w-2/3 border border-border bg-background text-text-base focus:outline-none focus:ring-2 focus:ring-lilac-dark" style={{ padding: '1rem', marginBottom: '1rem', fontFamily: 'poppins' }}
          rows={4}
          placeholder="Escreva seu comentário aqui..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        
        <button
          type="submit"
          className="bg-lilac-dark text-white font-semibold py-3 px-7 rounded-full flex items-center gap-2 justify-center mx-auto shadow-lg-pink hover:bg-lilac-dark-hover transition-colors active:scale-105 active:shadow-lg" style={{ padding: '8px', marginBottom: '1rem' }}
        
        >
          <span>💬</span> Enviar Comentário
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-border">
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <div key={index} className="bg-lilac-light/20 w-3/4 mx-auto flex justify-between items-center">
              <div>
                <p className="text-sm text-text-secondary mb-1">
                  <span className="font-bold text-text-base">{c.author}</span> - {c.date}
                </p>
                <p className="text-text-base">{c.text}</p>
              </div>
              <button
                type="button"
                onClick={() => handleDelete(index)}
                className="text-text-secondary hover:text-primary transition-colors text-xl leading-none"
              >
                &times;
              </button>
            </div>
          ))
        ) : (
          <p className="text-text-secondary text-center">Nenhum comentário ainda. Seja a primeira a comentar!</p>
        )}
      </div>
    </div>
  );
}