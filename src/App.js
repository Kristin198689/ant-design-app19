import React, { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import styles from "./styles/App.module.css";

const { Title } = Typography;

function App() {
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  return (
    <div className={styles.appContainer}>
      <Title level={2} className={styles.formTitle}>
        Форма с использованием Ant Design
      </Title>
      <Form layout="vertical" className={styles.form}>
        <Form.Item label="Имя">
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Введите ваше имя"
            className={styles.inputField}
          />
        </Form.Item>
        <Form.Item label="Описание">
          <Input
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Введите описание"
            className={styles.inputField}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            onClick={handleSubmit}
            className={styles.submitButton}
          >
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card className={styles.resultCard}>
          <Title level={4}>Отправленные данные:</Title>
          <p>
            <strong>Имя:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Описание:</strong> {submittedData.description}
          </p>
        </Card>
      )}
    </div>
  );
}

export default App;
