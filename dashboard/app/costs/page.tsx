import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table"
import { costData, TOTAL_ESTATE_COST } from "@/lib/data"
import { CostCharts } from "@/components/cost-charts"

const HOUSING_COLORS: Record<string, string> = {
  "4-Bed Family Home": "oklch(0.55 0.2 250)",
  "Sheltered Accommodation": "oklch(0.6 0.18 165)",
  "2-Bed Starter Home": "oklch(0.62 0.18 55)",
}

export default function CostsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Cost Analysis</h1>
        <p className="text-muted-foreground">
          Estate-wide smart home technology costs — parts only, GBP
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Cost Distribution</CardTitle>
            <CardDescription>
              Proportion of estate total by housing type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CostCharts />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cost Summary</CardTitle>
            <CardDescription>Itemised breakdown per housing type</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Housing Type</TableHead>
                  <TableHead className="text-right">Per Unit</TableHead>
                  <TableHead className="text-right">Units</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {costData.map((c) => (
                  <TableRow key={c.type}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span
                          className="size-2.5 rounded-full shrink-0"
                          style={{
                            backgroundColor: HOUSING_COLORS[c.type],
                          }}
                        />
                        <span className="font-medium">{c.type}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right tabular-nums">
                      £{c.perUnit.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right tabular-nums">
                      {c.units}
                    </TableCell>
                    <TableCell className="text-right tabular-nums font-semibold">
                      £{c.total.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3} className="font-semibold">
                    Estate Total
                  </TableCell>
                  <TableCell className="text-right font-bold tabular-nums">
                    £{TOTAL_ESTATE_COST.toLocaleString()}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
