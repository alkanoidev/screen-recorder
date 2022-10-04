import React, { useContext, useState } from "react";

type Props = {
  children: any;
};
type SettingsContextType = {
  isDownloadModalOpen: boolean;
  setIsDownloadModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SettingsContext = React.createContext<SettingsContextType>(
  {} as SettingsContextType
);

export const useSettingsContext = () => {
  const { isDownloadModalOpen, setIsDownloadModalOpen } =
    useContext(SettingsContext);

  return {
    isDownloadModalOpen,
    setIsDownloadModalOpen,
  };
};

export default function SettingsContextProvider({ children }: Props) {
  const [isDownloadModalOpen, setIsDownloadModalOpen] =
    useState<boolean>(false);
  return (
    <SettingsContext.Provider
      value={{
        isDownloadModalOpen,
        setIsDownloadModalOpen,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
