import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts"

const COLORS = ["#22c55e", "#eab308", "#ef4444"]

export default function ProgressChart({ data }) {
    const chartData = [
        { name: "Completadas", value: data.completed },
        { name: "Pendientes", value: data.pending },
        { name: "Postergadas", value: data.postponed },
    ]

    return (
        <div className="bg-white p-4 rounded-xl shadow h-80">
            <h3 className="font-semibold mb-4">Progreso general</h3>

            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={chartData} dataKey="value" outerRadius={100}>
                        {chartData.map((_, index) => (
                            <Cell key={index} fill={COLORS[index]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
