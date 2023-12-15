import React from 'react';

interface Props {
  src: string;
  title: string;
  value: string;
}

const AchievementCard = ({ src, title, value }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mx-4">
      <img src={src} alt={title} className="w-20 h-20 mb-2 rounded-full" />
      <h2 className="text-white text-xl font-bold">{value}</h2>
      <p className="text-[#ADB7BE] text-xl">{title}</p>
    </div>
  );
};

export default AchievementCard;
