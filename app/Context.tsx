import { createContext, ReactNode, useContext, useReducer } from "react";
import { DateRange } from "react-date-range";

interface Options {
    adult?: number; 
    children?: number;
    room?: number;
}

interface State {
    destination: string
    date: []
    option: Options

}

const initialState: State = {
    destination: "",
    date: [],
    option: {
        adult: 1,
        children: 0,
        room: 1

    }
}
type Action =
    | { type: 'destination'; payload: string }
    | { type: 'date'; payload: [] }
    | { type: 'option'; payload: Options}
    



const Reducer = (state: State, action: Action): State => {
    switch (action.type) {case "option":
        return { ...state, option: action.payload };
    case "date":
        return { ...state, date: action.payload };
    case "destination":
        return { ...state, destination: action.payload }
    default:
        return state;
}}

const AppContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const Context = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
