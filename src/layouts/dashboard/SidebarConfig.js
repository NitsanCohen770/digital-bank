import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import outcomeIncome from '@iconify-icons/fa-solid/people-arrows';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'נתוני חשבון',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'פירוט הוצאות והכנסות',
    path: '/dashboard/user',
    icon: getIcon(outcomeIncome)
  }
];

export default sidebarConfig;
