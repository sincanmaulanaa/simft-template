"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, GraduationCap, LayoutDashboard, FileText, Bell } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="w-64 border-r bg-white">
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-blue-600">
          <GraduationCap className="h-6 w-6 rounded-md bg-blue-600 p-1 text-white" />
          <span>SIM-FT UMPO</span>
        </Link>
      </div>
      <div className="px-4 py-2 text-sm text-gray-500">Menu</div>
      <nav className="space-y-1 px-2">
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
            isActive("/dashboard") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <LayoutDashboard className="h-5 w-5" />
          Dashboard
        </Link>
        <Link
          href="/praktikum"
          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
            isActive("/praktikum") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <BookOpen className="h-5 w-5" />
          Praktikum
        </Link>
        <Link
          href="/kampus-merdeka"
          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
            isActive("/kampus-merdeka") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <GraduationCap className="h-5 w-5" />
          Kampus Merdeka
        </Link>
        <Link
          href="/skripsi"
          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
            isActive("/skripsi") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <FileText className="h-5 w-5" />
          Skripsi
        </Link>
      </nav>
      <div className="mt-6 px-4 py-2 text-sm text-gray-500">Lainnya</div>
      <nav className="space-y-1 px-2">
        <Link
          href="/pemberitahuan"
          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
            isActive("/pemberitahuan") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <Bell className="h-5 w-5" />
          Pemberitahuan
        </Link>
      </nav>
    </div>
  )
}
