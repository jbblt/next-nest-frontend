import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Task } from "@/types/Task";

const Form = styled.form`
  background-color: ${({ theme }) => theme.backgroundColors.card};
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.effects.glowSecondary};
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

type TaskUpdateProps = {
  task: Task;
};

export default function TaskUpdateForm({ task }: TaskUpdateProps) {
  const { register, handleSubmit } = useForm<Task>({
    defaultValues: task,
  });

  // const dispatch = useDispatch();

  const onSubmit = (data: Task) => {
    // dispatch(updateTask(data));
    console.log("Update Task !!", data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Task title"
        {...register("title", { required: true })}
      />
      <TextArea placeholder="Task description" {...register("description")} />
      <Button type="submit">Update Task</Button>
    </Form>
  );
}
