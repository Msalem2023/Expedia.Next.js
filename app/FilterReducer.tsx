import React, { createContext, useReducer, useContext, ReactNode } from 'react';


interface State {
    Breakfast: boolean;
    Pool: boolean;
    Parking: boolean;
    Policy: boolean;
    Payment: boolean;
    Price: number,
    Name: string,
    Rating: string
}

const initialState: State = {
    Breakfast: false,
    Pool: false,
    Parking: false,
    Policy: false,
    Payment: false,
    Price: 1000,
    Name: "",
    Rating: "",
};



type Action =
    | { type: 'Name'; payload: string }
    | { type: 'Price'; payload: number }
    | { type: 'Rating'; payload: 'good' | 'very-good' | 'excellent' | 'wonderful' }
    | { type: 'Breakfast' }
    | { type: 'Pool' }
    | { type: 'Parking' }
    | { type: 'Policy' }
    | { type: 'Payment' };
const Reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "Breakfast":
            return { ...state, Breakfast: !state.Breakfast };
        case "Pool":
            return { ...state, Pool: !state.Pool };
        case "Parking":
            return { ...state, Parking: !state.Parking };
        case "Policy":
            return { ...state, Policy: !state.Policy };
        case "Payment":
            return { ...state, Payment: !state.Payment };
        case "Name":
            return { ...state, Name: action.payload };
        case "Price":
            return { ...state, Price: action.payload };
        case "Rating":
            return { ...state, Rating: action.payload };
        default:
            return state;
    }
};

const AppContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
