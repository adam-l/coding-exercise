import { useMemo } from 'react';

interface ChildProps {
  time: string;
}

export const TimeFormatter: React.FC<ChildProps> = ({ time }): React.JSX.Element => {
  const formattedTime: string = useMemo((): string => {
    const [year, month, day]: string[] = time.split('-');
    return `${day}/${month}/${year}`;
  }, [time]);

  return <time className="text-gray-400 text-sm" dateTime={ time }>{ formattedTime }</time>;
};