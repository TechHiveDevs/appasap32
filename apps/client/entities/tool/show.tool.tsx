
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowTool(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="name" />
<ReferenceField source="userid" reference="user" />
<ReferenceField source="orderid" reference="order" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}