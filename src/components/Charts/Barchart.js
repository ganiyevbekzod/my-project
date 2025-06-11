export const desktopOS = [

];

export const mobileOS = [
  {
    label: 'Jismoniy shaxslar',
    value: 65,
  },

  {
    label: 'Yuridik shaxslar',
    value: 35,
  },
];

export const platforms = [

];
export const mobileAndDesktopOS = [
  ...mobileOS.map((v) => ({
    ...v,
  })),
  ...desktopOS.map((v) => ({
    ...v,

  })),
];

export const valueFormatter = (item) => `${item.value}%`;
