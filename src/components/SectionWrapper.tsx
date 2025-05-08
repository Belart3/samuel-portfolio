import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<WrapperProps> = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col gap-12 md:gap-16 mb-[104px] md:mb-[168px] ${className}  mx-4 md:mx-7 lg:mx-10`}>
      {children}
    </div>
  );
};

export default SectionWrapper;
