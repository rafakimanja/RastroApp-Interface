import { PieChart } from "@mui/x-charts/PieChart";

export default function GraficoPizza() {

    const dados = [
        { id: 0, value: 400, label: 'Cartao de Credito' },
        { id: 1, value: 550, label: 'Cartao de Debito'},
        { id: 2, value: 350, label: 'Pix'},
        { id: 2, value: 100, label: 'Dinheiro'},
    ]

  return(
   <PieChart
      series={[
        {
          data: dados,
          innerRadius: 50,
        },
      ]}
      width={200}
      height={200}
    />
  )
}
