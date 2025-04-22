import { useMobileViewContext } from "@/context/MobileViewContext";
import { useElementSize } from "@mantine/hooks";
import { useEffect } from "react";

interface MobileLayoutProps {
  maxWidth: number;
  children: React.ReactNode;
  backgroundColor?: string;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  maxWidth,
  children,
  backgroundColor,
}) => {
  const { ref, width, height } = useElementSize();
  const { setMobileContainerWidth, setMobileContainerHeight } =
    useMobileViewContext();

  useEffect(() => {
    setMobileContainerWidth(width);
    setMobileContainerHeight(height);
  }, [width, height]);

  return (
    <div
      className="bg-main-gradient font-haas min-h-[calc(100dvh)] flex flex-col items-center mx-auto text-black overflow-x-hidden relative"
      style={{
        maxWidth: `${maxWidth}px`,
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default MobileLayout;
