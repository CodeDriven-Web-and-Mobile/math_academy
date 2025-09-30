'use client';

import { useEffect, useRef } from 'react';
import katex from 'katex';
import mermaid from 'mermaid';
import 'katex/dist/katex.min.css';

interface MathContentProps {
  content: string;
}

export default function MathContent({ content }: MathContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Mermaid
    mermaid.initialize({ 
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'inherit'
    });
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;

    // Process the content to render LaTeX and Mermaid
    const processedContent = renderContent(content);
    contentRef.current.innerHTML = processedContent;

    // Render Mermaid diagrams
    const mermaidElements = contentRef.current.querySelectorAll('.mermaid');
    mermaidElements.forEach((element, index) => {
      const id = `mermaid-${Date.now()}-${index}`;
      element.id = id;
      try {
        mermaid.run({ nodes: [element as HTMLElement] });
      } catch (e) {
        console.error('Mermaid rendering error:', e);
      }
    });
  }, [content]);

  const renderContent = (text: string): string => {
    // Split content by lines for better processing
    const lines = text.split('\n');
    let inCodeBlock = false;
    let inMermaidBlock = false;
    let mermaidContent = '';
    let html = '';

    for (let line of lines) {
      // Check for Mermaid diagrams
      if (line.trim() === '```mermaid') {
        inMermaidBlock = true;
        mermaidContent = '';
        continue;
      }

      if (inMermaidBlock) {
        if (line.trim() === '```') {
          // End of Mermaid block
          html += `<div class="mermaid my-6 flex justify-center">${mermaidContent}</div>`;
          inMermaidBlock = false;
          mermaidContent = '';
        } else {
          mermaidContent += line + '\n';
        }
        continue;
      }

      // Check for code blocks (don't process LaTeX inside code blocks)
      if (line.trim().startsWith('```')) {
        inCodeBlock = !inCodeBlock;
        if (!inCodeBlock) {
          html += `</code></pre>`;
        } else {
          html += `<pre class="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto"><code>`;
        }
        continue;
      }

      if (inCodeBlock) {
        html += `${escapeHtml(line)}\n`;
        continue;
      }

      // Process markdown-style headers
      if (line.startsWith('# ')) {
        html += `<h1 class="text-3xl font-bold text-gray-900 mb-4 mt-6">${processLine(line.substring(2))}</h1>`;
      } else if (line.startsWith('## ')) {
        html += `<h2 class="text-2xl font-bold text-gray-900 mb-3 mt-5">${processLine(line.substring(3))}</h2>`;
      } else if (line.startsWith('### ')) {
        html += `<h3 class="text-xl font-semibold text-gray-900 mb-2 mt-4">${processLine(line.substring(4))}</h3>`;
      } else if (line.startsWith('#### ')) {
        html += `<h4 class="text-lg font-semibold text-gray-800 mb-2 mt-3">${processLine(line.substring(5))}</h4>`;
      }
      // Process list items
      else if (line.match(/^\d+\.\s/)) {
        html += `<li class="ml-6 mb-2">${processLine(line.replace(/^\d+\.\s/, ''))}</li>`;
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        html += `<li class="ml-6 mb-2">${processLine(line.substring(2))}</li>`;
      }
      // Process horizontal rules
      else if (line.trim() === '---' || line.trim() === '***') {
        html += '<hr class="my-6 border-t-2 border-gray-300">';
      }
      // Process bold text
      else if (line.includes('**')) {
        html += `<p class="mb-3 text-gray-800">${processLine(line)}</p>`;
      }
      // Empty lines
      else if (line.trim() === '') {
        html += '<br>';
      }
      // Regular paragraphs
      else {
        html += `<p class="mb-3 text-gray-800 leading-relaxed">${processLine(line)}</p>`;
      }
    }

    return html;
  };

  const processLine = (line: string): string => {
    // Process inline LaTeX: \( ... \) or $ ... $
    line = line.replace(/\\\((.*?)\\\)/g, (match, latex) => {
      try {
        return katex.renderToString(latex, { throwOnError: false, displayMode: false });
      } catch (e) {
        return match;
      }
    });

    line = line.replace(/\$([^\$]+)\$/g, (match, latex) => {
      try {
        return katex.renderToString(latex, { throwOnError: false, displayMode: false });
      } catch (e) {
        return match;
      }
    });

    // Process display LaTeX: \[ ... \] or $$ ... $$
    line = line.replace(/\\\[(.*?)\\\]/g, (match, latex) => {
      try {
        return katex.renderToString(latex, { throwOnError: false, displayMode: true });
      } catch (e) {
        return match;
      }
    });

    line = line.replace(/\$\$([^\$]+)\$\$/g, (match, latex) => {
      try {
        return katex.renderToString(latex, { throwOnError: false, displayMode: true });
      } catch (e) {
        return match;
      }
    });

    // Process bold text
    line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');

    // Process italic text
    line = line.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');

    // Process inline code
    line = line.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">$1</code>');

    return line;
  };

  const escapeHtml = (text: string): string => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };

  return (
    <div 
      ref={contentRef} 
      className="prose max-w-none"
      style={{ fontSize: '16px', lineHeight: '1.7' }}
    />
  );
}
