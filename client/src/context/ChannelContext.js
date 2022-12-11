import { useContext, createContext, useState } from "react";
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const ChannelContext = createContext();

export const ChannelProvider = ({ children }) => {
  const [channels, setChannels] = useState({});

  return (
    <ChannelContext.Provider value={{ channels, setChannels }}>
      {children}
    </ChannelContext.Provider>
  );
};

export const useChannelContext = () => useContext(ChannelContext);
