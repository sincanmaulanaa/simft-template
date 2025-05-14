import Header from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell } from "lucide-react"

export default function PemberitahuanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Pemberitahuan" currentPage="Pemberitahuan" />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Pemberitahuan</h1>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Semua Pemberitahuan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-l-red-500 pl-4">
              <div className="font-medium">Status Mata Kuliah Diperbarui</div>
              <p className="text-sm text-gray-600">
                Status mata kuliah untuk program Dicoding Bangun Negeri telah diperbarui. Disetujui: Pendidikan Agama
                Islam, Bahasa Indonesia Ditolak: Agama Islam
              </p>
              <div className="mt-1 text-xs text-gray-500">sekitar 3 jam yang lalu</div>
            </div>

            <div className="border-l-4 border-l-green-500 pl-4">
              <div className="font-medium">Status Mata Kuliah Diperbarui</div>
              <p className="text-sm text-gray-600">
                Status mata kuliah untuk program Dicoding Bangun Negeri telah diperbarui. Disetujui: Bahasa Inggris,
                Pendidikan Agama Islam, Bahasa Indonesia, Bahasa Jepang, Bahasa Jerman
              </p>
              <div className="mt-1 text-xs text-gray-500">1 hari yang lalu</div>
            </div>

            <div className="border-l-4 border-l-red-500 pl-4">
              <div className="font-medium">Status Mata Kuliah Diperbarui</div>
              <p className="text-sm text-gray-600">
                Status mata kuliah untuk program Dicoding Bangun Negeri telah diperbarui. Disetujui: Bahasa Inggris,
                Pendidikan
              </p>
              <div className="mt-1 text-xs text-gray-500">3 hari yang lalu</div>
            </div>

            <div className="border-l-4 border-l-yellow-500 pl-4">
              <div className="font-medium">Pendaftaran Praktikum Berhasil</div>
              <p className="text-sm text-gray-600">
                Anda telah berhasil mendaftar pada Praktikum ABCDE. Silakan cek jadwal dan ruangan pada halaman
                Praktikum.
              </p>
              <div className="mt-1 text-xs text-gray-500">5 hari yang lalu</div>
            </div>

            <div className="border-l-4 border-l-yellow-500 pl-4">
              <div className="font-medium">Pendaftaran Praktikum Berhasil</div>
              <p className="text-sm text-gray-600">
                Anda telah berhasil mendaftar pada Praktikum Pemrogramman Bergerak. Silakan cek jadwal dan ruangan pada
                halaman Praktikum.
              </p>
              <div className="mt-1 text-xs text-gray-500">5 hari yang lalu</div>
            </div>

            <div className="border-l-4 border-l-blue-500 pl-4">
              <div className="font-medium">Pendaftaran Program Kampus Merdeka</div>
              <p className="text-sm text-gray-600">
                Pendaftaran program Kampus Merdeka untuk periode 2025 telah dibuka. Silakan daftar melalui halaman
                Kampus Merdeka.
              </p>
              <div className="mt-1 text-xs text-gray-500">1 minggu yang lalu</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
