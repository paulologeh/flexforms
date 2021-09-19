import React from "react";
import {
  Input,
  Checkbox,
  Radio,
  Label,
  Form,
  TextArea,
} from "semantic-ui-react";

const Textarea = () => {
  return (
    <Form>
      <TextArea />
    </Form>
  );
};

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
    icon: "keyboard outline",
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
    icon: "heading",
    name: "static-label",
    component: Label,
  },
  {
    icon: "font",
    name: "text-area",
    component: Textarea,
  },
  { icon: "dot circle outline", name: "radio", component: Radio },
  { icon: "clone outline", name: "panel" },
  { icon: "sort amount down", name: "dropdown" },
];
