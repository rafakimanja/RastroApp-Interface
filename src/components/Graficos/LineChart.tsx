import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

type BalancoTipo = 'ganhos' | 'investimentos' | 'despesas';

type GraficoSparklineProps = {
  balanco: BalancoTipo;
};

export default function GraficoSparkline({ balanco }: GraficoSparklineProps) {
  const cores: Record<BalancoTipo, string> = {
    ganhos: "#36b98093",
    investimentos: "#daa11d9c",
    despesas: "#fd1a124d",
  };

  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          data={[3, 5, 7, 4, 6]}
          height={100}
          area
          showTooltip
          showHighlight
          color={cores[balanco]}
        />
      </Box>
    </Stack>
  );
}
