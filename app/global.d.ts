declare module "@lottiefiles/react-lottie-player" {
    import { ComponentType, CSSProperties, RefObject } from "react";
  
    interface PlayerProps {
      // Les props principales
      autoplay?: boolean;
      loop?: boolean;
      speed?: number;
      src?: string;
      style?: CSSProperties;
      onEvent?: (event: string) => void;
    }
  
    // On ajoute les méthodes qu'on utilise
    interface PlayerRef {
      goToLastFrame?: () => void;
      setSeeker?: (val: number) => void;
      stop?: () => void;
      pause?: () => void;
      // etc. selon tes besoins
    }
  
    export const Player: ComponentType<PlayerProps & { ref?: RefObject<PlayerRef> }>;
  }
  