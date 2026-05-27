import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

const AnimChar = ({
  char,
  progress,
  index,
  total,
}: {
  char: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) => {
  const opacity = useTransform(progress, [index / total, Math.min((index + 1) / total, 1)], [0.2, 1]);
  const display = char === ' ' ? ' ' : char;
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ opacity: 0 }}>{display}</span>
      <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0 }}>{display}</motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

const AnimatedText = ({ text, className, style }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const chars = text.split('');
  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <AnimChar key={i} char={char} progress={scrollYProgress} index={i} total={chars.length} />
      ))}
    </p>
  );
};

export default AnimatedText;
