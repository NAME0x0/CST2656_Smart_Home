import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  PoundSterlingIcon,
  ListChecksIcon,
  UsersIcon,
  CalendarDaysIcon,
} from "lucide-react"
import {
  ganttTasks,
  teamMembers,
  costData,
  milestones,
  TOTAL_ESTATE_COST,
} from "@/lib/data"
import { OverviewCharts } from "@/components/overview-charts"

const HOUSING_COLORS: Record<string, string> = {
  "4-Bed Family Home": "oklch(0.55 0.2 250)",
  "Sheltered Accommodation": "oklch(0.6 0.18 165)",
  "2-Bed Starter Home": "oklch(0.62 0.18 55)",
}

export default function Page() {
  const totalTasks = ganttTasks.filter((t) => !t.isMilestone).length
  const memberCount = teamMembers.length

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Project Overview</h1>
        <p className="text-muted-foreground">
          CST2565 — Smart Home Consulting | Weeks 8–12 | Due 24 April 2026
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Estate Total Cost</CardDescription>
            <PoundSterlingIcon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tabular-nums">
              £{TOTAL_ESTATE_COST.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              15 units &middot; parts only
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Total Tasks</CardDescription>
            <ListChecksIcon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tabular-nums">{totalTasks}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {milestones.length} milestones
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Team Members</CardDescription>
            <UsersIcon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tabular-nums">{memberCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              PRINCE2 Waterfall
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Project Duration</CardDescription>
            <CalendarDaysIcon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tabular-nums">5 Weeks</div>
            <p className="text-xs text-muted-foreground mt-1">
              Week 8 &rarr; Week 12
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Cost breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Cost Breakdown</CardTitle>
            <CardDescription>Per housing type (parts only, GBP)</CardDescription>
          </CardHeader>
          <CardContent>
            <OverviewCharts />
          </CardContent>
        </Card>

        {/* Milestones */}
        <Card>
          <CardHeader>
            <CardTitle>Milestones</CardTitle>
            <CardDescription>Key project gates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {milestones.map((m, i) => (
                <div key={m.name}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6 items-center justify-center rounded-full border bg-muted text-[10px] font-bold tabular-nums">
                        {i + 1}
                      </div>
                      <span className="text-sm">{m.name}</span>
                    </div>
                    <Badge variant="outline" className="text-xs tabular-nums shrink-0 ml-2">
                      W{m.week} D{m.day}
                    </Badge>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="ml-3 h-3 border-l border-dashed border-muted-foreground/30" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Housing types */}
      <Card>
        <CardHeader>
          <CardTitle>Housing Types</CardTitle>
          <CardDescription>Estate specification summary</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            {costData.map((c) => (
              <div
                key={c.type}
                className="rounded-lg border border-l-4 p-4 transition-shadow hover:shadow-sm"
                style={{ borderLeftColor: HOUSING_COLORS[c.type] }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: HOUSING_COLORS[c.type] }}
                  />
                  <p className="font-medium text-sm">{c.type}</p>
                </div>
                <Separator className="my-2" />
                <div className="flex flex-col gap-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per unit</span>
                    <span className="tabular-nums">£{c.perUnit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Units</span>
                    <span className="tabular-nums">&times;{c.units}</span>
                  </div>
                  <Separator className="my-1" />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="tabular-nums">£{c.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
