import { SlIcon } from '@shoelace-style/shoelace/dist/react';

interface SubtextProps {
  text: string;
  heading?: string;
  icon?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

function Subtext({ text, heading, icon, size, className }: SubtextProps) {
  const iconSize =
    (size === 'small' && '1em') ||
    (size === 'medium' && '1.25em') ||
    (size === 'large' && '1.5em') ||
    '1em';
  const headingSize =
    (size === 'small' && '.5em') ||
    (size === 'medium' && '.75em') ||
    (size === 'large' && '1.25em') ||
    '1em';
  const textSize =
    (size === 'small' && '.75em') ||
    (size === 'medium' && '1em') ||
    (size === 'large' && '1.25em') ||
    '1em';

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {icon && (
        <SlIcon
          name={icon}
          style={{ color: 'var(--sl-color-neutral-500', fontSize: iconSize }}
        />
      )}
      <div className="flex flex-col">
        {heading && (
          <strong style={{ fontSize: headingSize }}>{heading}</strong>
        )}
        <small
          style={{
            color: 'var(--sl-color-neutral-500',
            cursor: 'default',
            fontSize: textSize,
          }}
        >
          {text}
        </small>
      </div>
    </div>
  );
}

export default Subtext;
