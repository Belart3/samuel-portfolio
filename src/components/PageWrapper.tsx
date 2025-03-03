import React, { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const PageWrapper: React.FC<WrapperProps> = ({ children, className = "" }) => {
  return (
    <div className=" mx-5 lg:mx-10 max-w-screen-2xl 2xl:mx-auto 2xl:px-10  relative">
        {children}
    </div>
  )
}

export default PageWrapper