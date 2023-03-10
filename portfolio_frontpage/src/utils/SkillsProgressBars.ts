interface ISkillsProgressBars {
  text: string;
  percentage: number;
  color: string;
}

const SkillsProgressBars: ISkillsProgressBars[] = [
  {
    text: 'Ryhmätyötaidot',
    percentage: 95,
    color: '#EB5424',
  },
  { text: 'Uuden oppiminen', percentage: 92, color: '#3178C6' },
  {
    text: 'Luovuus',
    percentage: 98,
    color: '#449B45',
  },
  {
    text: 'Motivaatio',
    percentage: 100,
    color: '#A179DC',
  },
];

export default SkillsProgressBars;
