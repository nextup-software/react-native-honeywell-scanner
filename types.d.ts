declare const Scanner: {
    isCompatible: boolean;
    startReader: () => Promise<void>;
    stopReader: () => Promise<void>;
    on: (event: string, callBack: () => void) => void;
    off: (event: string, callBack: () => void) => void;
};

declare module "@nextup/react-native-honeywell-scanner" {
    export default Scanner;
}

