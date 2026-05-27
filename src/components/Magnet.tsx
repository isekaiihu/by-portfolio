import { useRef, useState, type ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

const Magnet = ({
  children,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0,0,0)');
  const [transition, setTransition] = useState(inactiveTransition);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setTransform(`translate3d(${(e.clientX - cx) / strength}px, ${(e.clientY - cy) / strength}px, 0)`);
    setTransition(activeTransition);
  };

  const handleMouseLeave = () => {
    setTransform('translate3d(0,0,0)');
    setTransition(inactiveTransition);
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition, willChange: 'transform' }}
    >
      {children}
    </div>
  );
};

export default Magnet;
