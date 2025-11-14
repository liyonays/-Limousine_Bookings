"use client"

import { TrendingUp, Users, Calendar, DollarSign, Car, Star } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    { icon: Calendar, label: "Total Bookings", value: "156", color: "text-blue-500" },
    { icon: DollarSign, label: "Total Revenue", value: "$48,500", color: "text-green-500" },
    { icon: Users, label: "Active Customers", value: "89", color: "text-purple-500" },
    { icon: Star, label: "Avg Rating", value: "4.9/5", color: "text-yellow-500" },
  ]

  const recentBookings = [
    {
      name: "John Smith",
      vehicle: "Stretch Limousine",
      date: "2025-01-15",
      status: "Confirmed",
      amount: "$250",
    },
    {
      name: "Sarah Johnson",
      vehicle: "Luxury Sedan",
      date: "2025-01-14",
      status: "Pending",
      amount: "$150",
    },
    {
      name: "Michael Chen",
      vehicle: "SUV Limousine",
      date: "2025-01-13",
      status: "Confirmed",
      amount: "$200",
    },
    { 
      name: "Emma Davis", 
      vehicle: "Party Bus", 
      date: "2025-01-12", 
      status: "Completed", 
      amount: "$300" 
    },
  ]

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back to Elite Limousine Admin</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <Icon size={24} className={stat.color} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Summary */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold mb-4">Monthly Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Bookings This Month</span>
              <span className="font-semibold">30</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Revenue This Month</span>
              <span className="font-semibold text-green-600">$9,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">New Customers</span>
              <span className="font-semibold">12</span>
            </div>
          </div>
        </div>

        {/* Vehicle Status */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold mb-4">Vehicle Status</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Car size={16} className="text-blue-500" />
                <span>Available Vehicles</span>
              </div>
              <span className="font-semibold">8</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Car size={16} className="text-yellow-500" />
                <span>In Service</span>
              </div>
              <span className="font-semibold">3</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Car size={16} className="text-red-500" />
                <span>Maintenance</span>
              </div>
              <span className="font-semibold">1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
        <h3 className="text-xl font-bold mb-4">Recent Bookings</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Vehicle</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">{booking.name}</td>
                  <td className="py-3 px-4">{booking.vehicle}</td>
                  <td className="py-3 px-4">{booking.date}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-800"
                          : booking.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-semibold">{booking.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}