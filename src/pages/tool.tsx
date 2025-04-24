import CapitalStackTool from "@/components/CapitalStackTool";
import MobileLayout from "@/components/Layout/MobileLayout";
import Navbar from "@/components/Navbar";

export default function ToolPage() {
  return (
    <MobileLayout maxWidth={500}>
      <Navbar />
      <CapitalStackTool
        width={100}
        height={500}
        data={[
          {
            "Private Equity": 100,
            "Venture Capital": 200,
            "Family Office": 300,
          },
        ]}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      />
    </MobileLayout>
  );
}
