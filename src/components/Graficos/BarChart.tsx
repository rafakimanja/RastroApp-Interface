import { BarChart } from '@mui/x-charts/BarChart';

export default function GraficoBarra() {
  return (
    <BarChart
      xAxis={[
        {
          data: [
            'Aluguel',
            'Supermercado',
            'Pensão',
            'Academia',
            'Farmácia',
            'Assinaturas',
            'Cabeleireiro',
          ],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [1200, 900, 1500, 100, 350, 120, 50],
        },
      ]}
      height={250}
      borderRadius={5}
      slotProps={{
        axisTickLabel: {
          style: {
            fill: 'var(--clr-text)'
          }
        }
      }}
    />
  );
}
