import categorias from '../../data/categorias.json'

type CategoriaInputProps = {
  categoria: string;
};

export default function CategoriaInput({ categoria }: CategoriaInputProps) {

  const getOptions = (categoria: string) => {
    switch (categoria) {
      case 'renda_ativa':
        return categorias.renda_ativa.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))
      case 'renda_passiva':
        return categorias.renda_passiva.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))
      case 'investimentos':
        return categorias.investimentos.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))
      case 'despesas_fixas':
        return Object.entries(categorias.despesas_fixas).map(([grupo, itens]) => (
          <optgroup key={grupo} label={grupo}>
            {itens.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </optgroup>
        ));
      case 'despesas_variaveis':
        return Object.entries(categorias.despesas_variaveis).map(([grupo, itens]) => (
          <optgroup key={grupo} label={grupo}>
            {itens.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </optgroup>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="input-group">
      <label htmlFor="categoria">Categoria:</label>
      <select id="categoria" name="categoria">
        <option value="">Selecione uma categoria</option>
        {getOptions(categoria)}
      </select>
    </div>
  );
}
