import React, { useContext, useState } from "react";

type Props = {
  children: any;
};
type SettingsContextType = {
  isSettingsModalOpen: boolean;
  setIsSettingsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAudioOn: boolean;
  setIsAudioOn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SettingsContext = React.createContext<SettingsContextType>(
  {} as SettingsContextType
);

export const useSettingsContext = () => {
  const {
    isSettingsModalOpen,
    setIsSettingsModalOpen,
    isAudioOn,
    setIsAudioOn,
  } = useContext(SettingsContext);

  return {
    isSettingsModalOpen,
    setIsSettingsModalOpen,
    isAudioOn,
    setIsAudioOn,
  };
};

export default function SettingsContextProvider({ children }: Props) {
  const [isSettingsModalOpen, setIsSettingsModalOpen] =
    useState<boolean>(false);
  const [isAudioOn, setIsAudioOn] = useState<boolean>(false);

  return (
    <SettingsContext.Provider
      value={{
        isSettingsModalOpen,
        setIsSettingsModalOpen,
        isAudioOn,
        setIsAudioOn,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
