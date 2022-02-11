import { useContext } from "react";
import { observer } from "mobx-react";
import { MyContext } from "./context";
import { Form, Input, Button, Checkbox, Tooltip } from "antd";

const TodoForm = observer(() => {
  const { setTodo } = useContext(MyContext);
  const [form] = Form.useForm();

  const save = (value) => {
    setTodo(value);
    form.resetFields();
  };

  return (
    <div className="w-96">
      <Form form={form} onFinish={save} autoComplete="off">
        <div className="flex flex-nowrap justify-between">
          <Form.Item
            name="text"
            rules={[
              {
                required: true,
                message: "Please add description of todo item!",
              },
            ]}
          >
            <Input style={{ width: "16rem" }} />
          </Form.Item>
          <Form.Item
            name="checked"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" shape="round" ghost htmlType="submit">
                Submit
              </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
});
export default TodoForm;
