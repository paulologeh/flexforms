import { Input, Checkbox, Radio, TextArea } from "semantic-ui-react";
import { EditableLabel } from "components/EditableLabel";

export const tools = [
  {
    icon: "calendar alternate outline",
    name: "date time",
    component: Input,
    props: { type: "datetime-local" },
  },
  {
    icon: "text cursor",
    name: "text",
    component: Input,
    props: { type: "text" },
  },
  {
    icon: "clock outline",
    name: "time",
    component: Input,
    props: { type: "time" },
  },
  {
    icon: "fax",
    name: "digit input",
    component: Input,
    props: { type: "number" },
  },
  {
    icon: "calendar outline",
    name: "date only",
    component: Input,
    props: { type: "date" },
  },
  { icon: "check square outline", name: "checkbox", component: Checkbox },
  {
    icon: "amilia",
    name: "static-label",
    component: EditableLabel,
    props: { initialValue: "StaticLabel" },
  },
  {
    icon: "keyboard outline",
    name: "text-area",
    component: TextArea,
    props: {},
  },
  { icon: "dot circle outline", name: "radio", component: Radio, props: {} },
  // { icon: "clone outline", name: "panel" },
];
