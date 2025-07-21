/**
 * Utility function do łączenia klas CSS z warunkami
 * Zastępuje bibliotekę clsx/classnames - trend minimalizacji dependencies w 2025
 */
export function cn(...classes) {
  return classes
    .flat()
    .filter(Boolean)
    .map((cls) => {
      if (typeof cls === 'string') return cls;
      if (typeof cls === 'object' && cls !== null) {
        return Object.entries(cls)
          .filter(([, condition]) => condition)
          .map(([className]) => className)
          .join(' ');
      }
      return '';
    })
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}
