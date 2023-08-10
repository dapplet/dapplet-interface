import { SlCard } from '@shoelace-style/shoelace/dist/react';
import ReactMarkdown from 'react-markdown';
import { useREADME } from '../../lib/hooks';

function ReadMe({ dapplet }: { dapplet: any }) {
  const readme = useREADME(dapplet);

  const codeCSS = `
  readme-code-wrap
    `;

  return (
    <>
      {readme && readme.length > 0 && (
        <SlCard className="flex flex-col w-full">
          <h4 slot="header">README.md</h4>
          {/* contain width inside element, wrap content */}
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <pre className={className + codeCSS} {...props}>
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                ) : (
                  <code className={className + codeCSS} {...props}>
                    {children}
                  </code>
                );
              },
              img({ node, className, children, ...props }) {
                return (
                  <img
                    className="readme-img"
                    {...props}
                    src={props.src}
                    alt={props.alt}
                  />
                );
              },
            }}
            children={readme}
            className="readme-container"
          />
        </SlCard>
      )}
    </>
  );
}

export default ReadMe;
