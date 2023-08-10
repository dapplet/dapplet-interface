// Always escape HTML for text arguments!
function escapeHtml(html: any) {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}

// Custom function to emit toast notifications
export function notify(
  message: string,
  variant = 'primary',
  icon = 'info-circle',
  duration = 3000,
  link?: string
) {
  const alert = Object.assign(document.createElement('sl-alert'), {
    variant,
    closable: true,
    duration: duration,
    innerHTML: `
        <sl-icon-button name="${icon}" slot="icon" style="color: var(--sl-color-${variant}-600)" ${
      link && `href="${link}"`
    } target="_blank"></sl-icon-button>
        ${escapeHtml(message)}
      `,
  });

  document.body.append(alert);
  return alert.toast();
}
