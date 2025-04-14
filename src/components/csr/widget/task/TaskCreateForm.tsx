import { useForm } from "react-hook-form";
import styled from "styled-components";
import { createTask } from "@/app/actions/task/task";

const Form = styled.form`
  background-color: ${({ theme }) => theme.backgroundColors.card};
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.effects.glowSecondary};
  max-width: 30rem;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.light};
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const Select = styled.select`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.light};
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const TextArea = styled.textarea`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.light};
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.effects.glowPrimary};

  &:hover {
    box-shadow: ${({ theme }) => theme.effects.glowHover};
  }
`;

export default function TaskCreateForm() {
  const { register, handleSubmit, reset } = useForm<{
    title: string;
    description: string;
    status: "TODO" | "IN_PROGRESS" | "DONE";
  }>();

  const onSubmit = async (formData: {
    title: string;
    description: string;
    status: "TODO" | "IN_PROGRESS" | "DONE";
  }) => {
    await createTask(formData);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Task title"
        {...register("title", { required: true })}
      />
      <TextArea placeholder="Task description" {...register("description")} />
      <Select {...register("status")}>
        <option value="">Select status</option>
        <option value="TODO">📝 To Do</option>
        <option value="IN_PROGRESS">🚧 In Progress</option>
        <option value="DONE">✅ Done</option>
      </Select>
      <Button type="submit">Add Task</Button>
    </Form>
  );
}
