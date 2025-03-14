import React, { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const PageWrapper: React.FC<WrapperProps> = ({ children, className = "f" }) => {
  return (
    <div className=" mx-5 lg:mx-10 relative">
        {children}
    </div>
  )
}

export default PageWrapper