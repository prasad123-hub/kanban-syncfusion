import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { extend } from "@syncfusion/ej2-base";
import data from "./dataSource.json";
import "./App.css";

function App() {
  const dataSource = extend([], data.kanbanData, null, true);
  console.log("data", data.kanbanData);
  return (
    <>
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={dataSource}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        swimlaneSettings={{ keyField: "Assignee" }}
      >
        <ColumnsDirective>
          <ColumnDirective headerText="To Do" keyField="Open" />
          <ColumnDirective headerText="In Progress" keyField="InProgress" />
          <ColumnDirective headerText="Testing" keyField="Testing" />
          <ColumnDirective headerText="Done" keyField="Close" />
        </ColumnsDirective>
      </KanbanComponent>
    </>
  );
}

export default App;
