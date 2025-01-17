import * as Icons from 'lucide-react';

type IconName = keyof typeof Icons;

type SizeType = 'sm' | 'md' | 'lg' | 'xl';

interface IconProps {
  icon: IconName;
  color?: string;
  size?: SizeType;
  className?: string;
}

const sizeMap: Record<SizeType, number> = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

export const Icon = ({ icon, size = 'md', color, className }: IconProps) => {
  const LucideIcon = Icons[icon] as React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;

  if (!LucideIcon) return null;

  const iconSize = sizeMap[size];

  return (
    <LucideIcon
      color={color}
      size={iconSize}
      className={className}
    />
  );
};
