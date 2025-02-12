import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<WrapperProps> = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col gap-16 mb-[168px] ${className}`}>
      {children}
    </div>
  );
};

export default SectionWrapper;
