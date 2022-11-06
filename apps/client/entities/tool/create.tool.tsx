
import { 
  Create,
  SimpleForm,
  
required,
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateTool(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="name" variant="outlined" validate={required()}  />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    
<ReferenceInput label="order" source="orderid" reference="order">
        <AutocompleteInput variant="outlined" /* optionText="order"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
