import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GanttChart } from "@/components/gantt-chart"

export default function GanttPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Gantt Chart</h1>
        <p className="text-muted-foreground">
          Project timeline — Weeks 8 to 12 | Click a member to filter
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Schedule</CardTitle>
          <CardDescription>
            Tasks from the WBS mapped across 5 weeks (25 working days). Hover
            over any bar for details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <GanttChart />
        </CardContent>
      </Card>
    </div>
  )
}
