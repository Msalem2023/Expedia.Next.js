import React from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { GoLocation } from 'react-icons/go';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

import Input from './Input';
import useOption from '../Hooks/useOption';
import useDate from '../Hooks/useDate';
import useDestination from '../Hooks/useDestination';
import { Context } from '../Context';

interface DateRange {
  startDate?: Date;
  endDate?: Date;
}

interface Option {
  adult: number;
  children: number;
  room: number;
}

interface State {
  destination: { label?: string };
  date: DateRange[];
  option: Option;
}

const defaultState: State = {
  destination: { label: '' },
  date: [{} as DateRange],
  option: { adult: 1, children: 0, room: 1 }
};

const Stays: React.FC = () => {
  const option = useOption();
  const date = useDate();
  const destination = useDestination();
  
  const router = useRouter();
  const { state = defaultState, dispatch } = Context();  
  const handleNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/Properties');
  };

  const formattedStartDate = state.date[0]?.startDate
    ? format(state.date[0].startDate, 'eeee, MMM d')
    : format(new Date(), 'eeee, MMM d');
  const formattedEndDate = state.date[0]?.endDate
    ? format(state.date[0].endDate, 'eeee, MMM d')
    : format(new Date(), 'eeee, MMM d');

  return (
    <div className="flex items-center justify-center p-4">
      <div className="container grid grid-cols-4 gap-4">
        <div className="col-span-4 lg:col-span-1 relative">
          <input
            placeholder={state.destination as string ?state.destination as string: 'Where to go'}
            onClick={destination.onOpen}
            className="pl-[calc(2.75rem-1px)] text-start border-[2px] border-neutral-500 border-solid focus:border-none focus:ring-2 focus:ring-sky-500 p-4 w-full mt-2 rounded-full outline-none"
          />
          <GoLocation size={24} className="absolute top-6 left-3 focus:hidden" color="blue" />
        </div>
        <div className="col-span-4 lg:col-span-1 relative">
          <Input
            onClick={date.onOpen}
            Icon={FaCalendarAlt}
            placeholder={`${formattedStartDate} - ${formattedEndDate}`}
          />
        </div>
        <div className="col-span-4 lg:col-span-1 relative">
          <Input
            Icon={IoPersonSharp}
            onClick={option.onOpen}
            placeholder={`${state.option.adult} adult. ${state.option.children} children. ${state.option.room} room`}
            value={`${state.option.adult} adult. ${state.option.children} children. ${state.option.room} room`}
          />
        </div>
        <div className="col-span-4 lg:col-span-1">
          <button
            onClick={handleNavigation}
            className="p-4 bg-sky-600 rounded-full text-white text-xl font-semibold mt-1"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stays;
