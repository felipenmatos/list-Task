import { useState } from "react";
import { Container, Area, Header } from "./App.styles";
import { Item } from "./types/item";
import { ListItem } from "./components/Listitem";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar pão", done: false },
    { id: 2, name: "Estudar", done: false },
  ]);
  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Area>
    </Container>
  );
};

export default App;
