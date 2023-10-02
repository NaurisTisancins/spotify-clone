import { createContext, useState, useContext, ReactElement } from 'react';
import { Track } from '../types';

type PlayerContextType = {
  track?: Track;
  setTrack: (track: Track) => void;
};

const PlayerContext = createContext<PlayerContextType>({
  track: undefined,
  setTrack: () => {},
});

type PlayerProviderType = {
  children: ReactElement;
};

export default function PlayerProvider({ children }: PlayerProviderType) {
  const [track, setTrack] = useState<Track>();

  return (
    <PlayerContext.Provider value={{ track, setTrack }}>
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayerContext = () => useContext(PlayerContext);
