import { BarChart } from '@mui/x-charts/BarChart';

export default function GraficoBarra() {
  return (
    <BarChart
      xAxis={[
        {
          data: [
            'Alimentação',
            'Transporte',
            'Moradia',
            'Lazer',
            'Educação',
            'Saúde',
            'Compras',
          ],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [500, 300, 1200, 400, 350, 450, 600, 200, 800, 250],
        },
      ]}
      height={250}
      borderRadius={5}
    />
  );
}
