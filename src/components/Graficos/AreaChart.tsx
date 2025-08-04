import { LineChart, lineElementClasses, areaElementClasses } from '@mui/x-charts/LineChart';

const margin = { right: 24 };
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function GraficoArea() {
  return (
    <LineChart
      height={300}
      series={[
        {
          data: uData,
          area: true,
          showMark: false,
          color: '#0f9d58', // Verde estilo Google
          curve: 'monotoneX', // curva suave
        },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        borderRadius: 8,
        [`& .${lineElementClasses.root}`]: {
          strokeWidth: 2,
        },
        [`& .${areaElementClasses.root}`]: {
          fill: '#0f9d58',
          opacity: 0.2,
        },
      }}
      margin={margin}
      slotProps={{
        axisTickLabel: {
          style:{
            fill: 'var(--clr-text)'
          }
        }
      }}
    />
  );
}
