import { cn } from "@/lib/utils";

interface Props {
    children: React.ReactNode;
    className?: string;
  }
  
  const Container: React.FC<Props> = ({ children, className }) => {
    return <div className={cn("max-w-6xl mx-auto px4", className)}>
        {children}</div>;
  };
  
  export default Container;
  