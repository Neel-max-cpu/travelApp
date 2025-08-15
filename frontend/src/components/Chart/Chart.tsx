  "use client"

  import { TrendingUp, TrendingUpDown } from "lucide-react"
  import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"
  import toast from "react-hot-toast";
  import { useEffect, useState } from "react";
  import axiosInstance from "@/utils/axiosInstance";
  import { API_PATHS } from "@/utils/apiPaths";

  export const description = "An area chart with gradient fill"
  

  const chartConfig = {
    desktop: {
      label: "Hotels",
      color: "var(--chart-5)",
    },
    mobile: {
      label: "Flights",
      color: "var(--chart-3)",
    },
  } satisfies ChartConfig

  export function ChartAreaGradient() {
    const [loading, setLoading] = useState(false);
    const [chartData, setChartData] = useState<any[]>([]);
    const [year, setYear] = useState<number | null>();
    
    

    useEffect(() => {    
      const fechtChartData = async()=>{
        if(loading) return;
        try {
          setLoading(true);
          const response = await axiosInstance.get(API_PATHS.COMMON.CHARTDATA);
          setChartData(response.data.chartData);
          setYear(response.data.year);
          console.log("responese:",response);
          
          
        } catch (error:any) {
          setLoading(false);
          toast.error("Error occured while fetching chart data, please try again!");
          console.log("error: ", error);
        } finally{
          setLoading(false);
        }
      };
      fechtChartData();
    }, []);   

    return (
      <Card className="bg-transparent text-white">
        <CardHeader>
          <CardTitle>Hotel Booking vs Flight Book Data</CardTitle>
          <CardDescription>
            Showing total booking for the last 1 year
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="hotels"
                type="natural"
                fill="url(#fillMobile)"
                fillOpacity={0.4}
                stroke="var(--color-mobile)"
                stackId="a"
              />
              <Area
                dataKey="flights"
                type="natural"
                fill="url(#fillDesktop)"
                fillOpacity={0.4}
                stroke="var(--color-desktop)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 leading-none font-medium">
                Graph <TrendingUpDown className="h-4 w-4" />
              </div>
              <div className="text-muted-foreground flex items-center gap-2 leading-none">
                January - December {year}
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    )
  }
