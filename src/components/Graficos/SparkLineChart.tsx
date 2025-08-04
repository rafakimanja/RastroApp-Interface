import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

type TiposPagamento = 'credito' | 'debito' | 'dinheiro';

type GraficoSparklineProps = {
  metodo: TiposPagamento;
};

export default function GraficoSparkline({ metodo }: GraficoSparklineProps) {
  const cores: Record<TiposPagamento, string> = {
    dinheiro: "#32aa5093",
    credito: "#da531d9c",
    debito: "#12a7fd81",
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
          color={cores[metodo]}
        />
      </Box>
    </Stack>
  );
}
