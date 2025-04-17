import { useElementSize } from "@mantine/hooks";

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
  return <div>MobileLayout</div>;
};

export default MobileLayout;
