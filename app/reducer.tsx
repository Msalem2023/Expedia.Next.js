import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface State {
    Stays: boolean;
    Flights: boolean;
    Cars: boolean;
    ThingsToDo: boolean;
    Packages: boolean;
    OpenDate: boolean

}

const initialState: State = {
    Stays: true,
    Flights: false,
    Cars: false,
    ThingsToDo: false,
    Packages: false,
    OpenDate: false
};

interface Action {
    type: "Stays" | "Flights" | "Cars" | "Packages" | "ThingsToDo" | "OpenDate";
}

const Reducer = (state: State, action: Action): State => {
    const newState = {
        Stays: false,
        Flights: false,
        Cars: false,
        ThingsToDo: false,
        Packages: false,
        OpenDate: false
    };
    switch (action.type) {
        case "Stays":
            return { ...newState, Stays: true };
        case "Flights":
            return { ...newState, Flights: true };
        case "Cars":
            return { ...newState, Cars: true };
        case "Packages":
            return { ...newState, Packages: true };
        case "ThingsToDo":
            return { ...newState, ThingsToDo: true };
        case "OpenDate":
            return { ...state,OpenDate: !state.OpenDate}
        default:
            return state;
    }
};

const AppContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
