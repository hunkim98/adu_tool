import { useElementSize } from "@mantine/hooks";
import { createContext, useState } from "react";

export interface MobileViewContextProviderProps {
  children: React.ReactNode;
}

interface MobileViewContextType {
  mobileContainerWidth: number;
  mobileContainerHeight: number;
  setMobileContainerWidth: (width: number) => void;
  setMobileContainerHeight: (height: number) => void;
}

const MobileViewContext = createContext<MobileViewContextType>(
  {} as MobileViewContextType
);

export const MobileViewContextProvider = ({
  children,
}: MobileViewContextProviderProps) => {
  const [mobileContainerWidth, setMobileContainerWidth] = useState(0);
  const [mobileContainerHeight, setMobileContainerHeight] = useState(0);

  return (
    <MobileViewContext.Provider
      value={{
        mobileContainerWidth,
        mobileContainerHeight,
        setMobileContainerWidth,
        setMobileContainerHeight,
      }}
    >
      {children}
    </MobileViewContext.Provider>
  );
};
