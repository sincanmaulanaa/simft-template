import Header from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Clock, User, ArrowRight, GraduationCap } from "lucide-react"

export default function PraktikumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Praktikum Saya" currentPage="Praktikum" />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">Praktikum Saya</h1>
        <p className="text-gray-500 mb-6">Lihat semua program praktikum yang telah Anda daftarkan.</p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-t-4 border-t-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                Praktikum ABCDE
              </CardTitle>
              <div className="absolute right-6 top-6 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                Terdaftar
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div className="font-medium">D410</div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Periode</div>
                      <div className="font-medium">Semester 7 Tahun 2024</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Jadwal</div>
                      <div className="font-medium">Hari Minggu, Jam 16.20 - 17.10</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <User className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Dosen</div>
                    <div className="font-medium">Ismail Abdurrozzaq Zulkarnain, S.Kom, M.Kom</div>
                  </div>
                </div>

                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  Lihat Detail <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                Praktikum Pemrogramman Bergerak
              </CardTitle>
              <div className="absolute right-6 top-6 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                Terdaftar
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div className="font-medium">F507</div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Periode</div>
                      <div className="font-medium">Semester 7 Tahun 2024</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Jadwal</div>
                      <div className="font-medium">Hari Selasa, Jam 12.30 - 13.20</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <User className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Dosen</div>
                    <div className="font-medium">Ghulam Asrofi Buntoro, S.T., M.Eng</div>
                  </div>
                </div>

                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  Lihat Detail <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
