import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Select, Row, Col } from 'antd';

const DynamicForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {}
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <Controller
            name="select"
            control={control}
            render={({ field }) => <Select
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" }
              ]}
            />}
          />
          <input type="submit" />
        </Col>
        <Col span={8}></Col>
      </Row>
    </form>
  );
};
export default DynamicForm;