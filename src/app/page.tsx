import { WidgetGrid } from "@/components/csr/widget/WidgetGrid";
import { TaskWidget } from "@/components/csr/widget/task/TaskWidget";
import { WidgetWrapper } from "@/components/csr/widget/WidgetWrapper";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <WidgetGrid>
      <WidgetWrapper size={"XL"}>
        <TaskWidget />
      </WidgetWrapper>
    </WidgetGrid>
  );
}
